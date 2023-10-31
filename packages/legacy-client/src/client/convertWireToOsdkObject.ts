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
import type {
  OsdkLegacyLinksFrom,
  OsdkLegacyObjectFrom,
  OsdkLegacyPropertiesFrom,
} from "../client/OsdkObject";
import type {
  OntologyObject,
  ParameterValue,
} from "../ontology-runtime/baseTypes";

function createPrototype<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  _primaryKey: ParameterValue,
  type: T,
  ontologyDefinition: O,
) {
  const objDef = ontologyDefinition.objects[type];
  const proto = {};
  for (
    const [k, _v] of Object.entries(objDef.links)
  ) {
    Object.defineProperty(proto, k, {
      get: function() {
        throw new Error("not implemented");
      },
    });
  }
  return proto as OsdkLegacyLinksFrom<O, T>;
}

/**
 * First key is ontologyRid, second key is apiName
 */
const cache = new Map<string, Map<string, any>>();
export function convertWireToOsdkObject<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  obj: OsdkLegacyPropertiesFrom<O, T> & OntologyObject<T>,
  ontologyDefinition: O,
): OsdkLegacyObjectFrom<O, T> {
  const ontologyCache = cache.get(ontologyDefinition.metadata.ontologyRid);
  let proto = ontologyCache?.get(obj.__apiName);

  if (proto == null) {
    let proto = createPrototype(
      obj.__primaryKey,
      obj.__apiName,
      ontologyDefinition,
    );

    if (ontologyCache == null) {
      cache.set(
        ontologyDefinition.metadata.ontologyRid,
        new Map([[obj.__apiName, proto]]),
      );
    } else {
      ontologyCache.set(obj.__apiName, proto);
    }
  }

  Object.setPrototypeOf(obj, proto);
  return obj as OsdkLegacyObjectFrom<O, T>;
}
