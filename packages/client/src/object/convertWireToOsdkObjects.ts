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
  ObjectOrInterfacePropertyKeysFrom,
  ObjectTypeKeysFrom,
  ObjectTypePropertyKeysFrom,
  OntologyDefinition,
} from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createCachedOntologyTransform } from "../createCachedOntologyTransform.js";
import type { OsdkObjectFrom } from "../OsdkObjectFrom.js";
import { type FetchPageOrThrowArgs } from "./fetchPageOrThrow.js";
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

  Object.defineProperty(proto, "$links", {
    get: function() {
      const client = this[OriginClient] as ClientContext<O>;
      const primaryKey = this["__primaryKey"];

      return new Proxy({}, {
        get(_target, p: string, _receiver) {
          const linkDef = ontology.objects[type].links[p];
          if (linkDef == null) {
            return;
          }

          if (!linkDef.multiplicity) {
            return {
              get: () => getLinkedObjectOrThrow(client, type, primaryKey, p),
            };
          } else {
            return {
              get: (targetPrimaryKey: any) =>
                getLinkedObjectByPkOrThrow(
                  client,
                  type,
                  primaryKey,
                  p,
                  targetPrimaryKey,
                ),
              fetchPageOrThrow: (
                options?: FetchPageOrThrowArgs<
                  O,
                  typeof linkDef.targetType,
                  ObjectOrInterfacePropertyKeysFrom<
                    O,
                    typeof linkDef.targetType
                  >
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
    writable: false,
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
  for (const obj of objs) {
    Object.setPrototypeOf(obj, proto);

    Object.defineProperty(obj, OriginClient, {
      value: client,
      enumerable: false,
      configurable: false,
      writable: false,
    });

    // Saving this code in case we want to come back to temporal. For now its not worth the
    // risk and we can stick to string until we know what we want.
    // ====================================================================================================
    // FIXME
    // Im not going for performance for now, just something usable by beta users
    // Also not married to the $raw
    // obj["$raw"] = {};

    // for (
    //   const [key, def] of Object.entries(
    //     client.ontology.objects[apiName].properties,
    //   )
    // ) {
    //   if (!(key in obj)) continue;
    //   obj["$raw"][key] = obj[key];

    //   if (def.type === "timestamp") {
    //     const value = obj[key] as string | undefined;
    //     if (value !== undefined) {
    //       obj[key] = Temporal.Instant.from(value);
    //     }
    //   } else if (def.type === "datetime") {
    //     const value = obj[key] as string | undefined;
    //     if (value !== undefined) {
    //       obj[key] = Temporal.PlainDateTime.from(value);
    //     }
    //   }
    // }
  }

  return objs as unknown as OsdkObjectFrom<
    T_ClientApiName,
    T_OntologyDefinition,
    ObjectTypePropertyKeysFrom<T_OntologyDefinition, T_ClientApiName>
  >[];
}
