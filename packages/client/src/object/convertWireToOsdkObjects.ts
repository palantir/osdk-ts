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
import type { FetchPageOrThrowArgs, SelectArg } from "./fetchPageOrThrow.js";
import { getLinkedObjectByPkOrThrow } from "./getLinkedObjectByPkOrThrow.js";
import { getLinkedObjectOrThrow } from "./getLinkedObjectOrThrow.js";
import { pageLinkedObjectsOrThrow } from "./pageLinkedObjectsOrThrow.js";

const getPrototype = createCachedOntologyTransform(createPrototype);

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

          if (!linkDef.multiplicity) {
            return {
              get: <
                A extends SelectArg<
                  O,
                  typeof linkDef.targetType
                >,
              >(
                options?: A,
              ) =>
                getLinkedObjectOrThrow(
                  client,
                  type,
                  primaryKey,
                  p,
                  options?.select,
                ),
            };
          } else {
            return {
              get: <
                A extends SelectArg<
                  O,
                  typeof linkDef.targetType
                >,
              >(targetPrimaryKey: any, options?: A) =>
                getLinkedObjectByPkOrThrow(
                  client,
                  type,
                  primaryKey,
                  p,
                  targetPrimaryKey,
                  options?.select,
                ),
              fetchPageOrThrow: (
                options?: FetchPageOrThrowArgs<
                  O,
                  typeof linkDef.targetType
                >,
              ) =>
                pageLinkedObjectsOrThrow(client, type, primaryKey, p, {
                  nextPageToken: options?.nextPageToken,
                  pageSize: options?.pageSize,
                  select: options?.select,
                }),
            };
          }
        },
      });
    },
    enumerable: false,
    configurable: false,
  });

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
    const proto = getPrototype(client.ontology, obj.__apiName);

    Object.setPrototypeOf(obj, proto);

    Object.defineProperty(obj, OriginClient, {
      value: client,
      enumerable: false,
      configurable: false,
      writable: false,
    });
  }
}
