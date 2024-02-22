/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { OntologyDefinition } from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createCachedOntologyTransform } from "../createCachedOntologyTransform.js";
import { createBaseObjectSet } from "../objectSet/createObjectSet.js";
import { Attachment } from "./Attachment.js";
import type { SelectArg } from "./fetchPageOrThrow.js";
import { fetchSingle } from "./fetchSingle.js";

const getPrototype = createCachedOntologyTransform(createPrototype);
const getConverter = createCachedOntologyTransform(createConverter);

const OriginClient = Symbol();

function createPrototype<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  ontology: O,
  type: T,
) {
  const objDef = ontology.objects[type];
  const proto = {};

  if (!objDef) {
    return proto;
  }

  Object.defineProperty(proto, "$link", {
    get: function() {
      const client = this[OriginClient] as ClientContext<O>;
      const primaryKey = this["__primaryKey"];

      return new Proxy({}, {
        get(_target, p: string, _receiver) {
          const linkDef = objDef.links[p];
          if (linkDef == null) {
            return;
          }

          const objectSet = createBaseObjectSet(objDef, client).where({
            [objDef.primaryKeyApiName]: primaryKey,
          }).pivotTo(p);

          if (!linkDef.multiplicity) {
            return {
              get: <A extends SelectArg<any>>(options?: A) =>
                fetchSingle(
                  client,
                  objDef,
                  options ?? {},
                  objectSet.definition,
                ),
            };
          } else {
            return objectSet;
          }
        },
      });
    },
    enumerable: false,
    configurable: false,
  });

  return proto;
}

// preprocess the ontology definition to more quickly apply object conversions when needed
function createConverter<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  ontology: O,
  type: T,
) {
  const objDef = ontology.objects[type];
  if (!objDef) {
    return false as const;
  }

  const steps: Array<(o: Record<string, any>) => void> = [];

  for (
    const [key, value] of Object.entries(objDef.properties)
  ) {
    // attachments need a wrapper to provide functionality and to identify them at serialization time
    if (value.type === "attachment") {
      steps.push((o) => {
        if (o[key] != null) {
          if (Array.isArray(o[key])) {
            o[key] = o[key].map((a: any) => new Attachment(a.rid));
          } else {
            o[key] = new Attachment(o[key].rid);
          }
        }
      });
    }
  }

  return steps.length > 0
    ? (o: Record<string, any>) => {
      for (const step of steps) {
        step(o);
      }
    }
    : false as const;
}

const isAfterFeb2024OrNewApis = false;

/**
 * @param objs the objects to be converted, the contents of this array will be mutated
 */
export function convertWireToOsdkObjects<
  T_OntologyDefinition extends OntologyDefinition<any>,
>(
  client: ClientContext<T_OntologyDefinition>,
  objs: OntologyObjectV2[],
) {
  for (const obj of objs) {
    if (obj.__rid) {
      obj.$rid = obj.__rid;
      delete obj.__rid;
    }

    // Backend returns as __apiName but we want to stick to $ structure
    obj.$apiName = obj.__apiName;

    // for now these are the same but when we start doing interface projections the $objectType will always be underlying and
    // the $apiName will be for the current view (in current designs)
    obj.$objectType = obj.__apiName;

    // copying over for now as its always returned. In the future, this should just be inferred from underlying
    obj.$primaryKey = obj.__primaryKey;

    // After Feb 2024 (unless we have new apis):
    if (isAfterFeb2024OrNewApis) {
      delete obj.__apiName;
      delete obj.__primaryKey;
    } else {
      // Hide these from things like `console.log` so that people
      // don't think to use them.
      Object.defineProperties(obj, {
        "__apiName": {
          enumerable: false,
        },
        "__primaryKey": {
          enumerable: false,
        },
      });
    }

    const proto = getPrototype(client.ontology, obj.__apiName);
    const converter = getConverter(client.ontology, obj.__apiName);

    Object.setPrototypeOf(obj, proto);

    Object.defineProperty(obj, OriginClient, {
      value: client,
      enumerable: false,
      configurable: false,
      writable: false,
    });

    if (converter) {
      converter(obj);
    }
  }
}
