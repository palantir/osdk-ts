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
  ObjectTypesFrom,
  OntologyDefinition,
  ThinClient,
} from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/gateway/types";
import type {
  OsdkLegacyLinksFrom,
  OsdkLegacyObjectFrom,
  OsdkLegacyPropertiesFrom,
} from "../client/OsdkObject";
import type {
  OntologyObject,
  ParameterValue,
} from "../ontology-runtime/baseTypes";
import { MultiLinkImpl } from "../ontology-runtime/baseTypes/MultiLinkImpl";
import { SingleLinkImpl } from "../ontology-runtime/baseTypes/SingleLinkImpl";

function createPrototype<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  context: ThinClient<O>,
  primaryKey: ParameterValue,
  type: T,
) {
  const objDef = context.ontology.objects[type];
  const proto = {};

  Object.defineProperty(proto, "__apiName", { get: () => type });

  // toString that uses the ontology definition to enumerate the props that need to be serialized
  proto.toString = function() {
    const obj: Record<string, unknown> = {};
    const self = this as OsdkLegacyPropertiesFrom<O, T> & OntologyObject<T>;
    for (const prop of Object.keys(context.ontology.objects[type].properties)) {
      obj[prop] = self[prop];
    }
    obj["__primaryKey"] = self.__primaryKey;
    obj["__apiName"] = type;
    obj["__rid"] = self.__rid;
    return JSON.stringify(obj, undefined, 2);
  };

  // add the relevant keys for the link types associated with this object type
  for (
    const [k, { multiplicity, targetType }] of Object.entries(objDef.links)
  ) {
    Object.defineProperty(proto, k, {
      get: function() {
        if (multiplicity == true) {
          return new MultiLinkImpl(
            context,
            objDef.apiName,
            primaryKey,
            targetType,
          );
        } else {
          return new SingleLinkImpl(
            context,
            objDef.apiName,
            primaryKey,
            targetType,
          );
        }
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
  T extends ObjectTypesFrom<O> & string,
  O extends OntologyDefinition<any>,
>(
  client: ThinClient<O>,
  apiName: T,
  obj: OntologyObjectV2,
): OsdkLegacyObjectFrom<O, T> {
  const ontologyCache = cache.get(client.ontology.metadata.ontologyRid);
  let proto = ontologyCache?.get(apiName);

  if (proto == null) {
    let proto = createPrototype(
      client,
      obj.__primaryKey,
      apiName,
    );

    if (ontologyCache == null) {
      cache.set(
        client.ontology.metadata.ontologyRid,
        new Map([[apiName, proto]]),
      );
    } else {
      ontologyCache.set(apiName, proto);
    }
  }

  Object.setPrototypeOf(obj, proto);
  return obj as OsdkLegacyObjectFrom<O, T>;
}
