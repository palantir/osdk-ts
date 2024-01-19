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

import type {
  ObjectTypeKeysFrom,
  ObjectTypePropertyKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createCachedOntologyTransform } from "../createCachedOntologyTransform.js";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import { Attachment } from "./Attachment.js";

const getPrototype = createCachedOntologyTransform(createPrototype);
const getConverter = createCachedOntologyTransform(createConverter);

function createPrototype<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  ontology: O,
  type: T,
) {
  const objDef = ontology.objects[type];
  const proto = {};

  // Earlier versions of "2.0" included this by hand (even though it seems the wire gives it to us anyway).
  // Its deprecated but I'm it for now (lets delete after Dec 31, 2023) so our beta users can transition.
  Object.defineProperty(proto, "__name", {
    value: type,
    enumerable: false,
    configurable: false,
    writable: false,
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
  const steps: Array<(o: Record<string, any>) => void> = [];

  for (
    const [key, value] of Object.entries(ontology.objects[type].properties)
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

export function convertWireToOsdkObjects<
  T_ClientApiName extends ObjectTypeKeysFrom<T_OntologyDefinition> & string,
  T_OntologyDefinition extends OntologyDefinition<any>,
>(
  client: ClientContext<T_OntologyDefinition>,
  apiName: T_ClientApiName,
  objs: OntologyObjectV2[],
): OsdkObjectFrom<
  T_ClientApiName,
  T_OntologyDefinition,
  ObjectTypePropertyKeysFrom<T_OntologyDefinition, T_ClientApiName>
>[] {
  const proto = getPrototype(client.ontology, apiName);
  const converter = getConverter(client.ontology, apiName);

  if (converter) {
    for (const obj of objs) {
      Object.setPrototypeOf(obj, proto);
      converter(obj);
    }
  } else {
    for (const obj of objs) {
      Object.setPrototypeOf(obj, proto);
    }
  }

  return objs as unknown as OsdkObjectFrom<
    T_ClientApiName,
    T_OntologyDefinition,
    ObjectTypePropertyKeysFrom<T_OntologyDefinition, T_ClientApiName>
  >[];
}
