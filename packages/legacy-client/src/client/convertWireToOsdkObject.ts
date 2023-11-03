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
import {
  AttachmentProperty,
  GeoPoint,
  GeoShape,
  LocalDate,
  type OntologyObject,
  type ParameterValue,
  Timestamp,
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

  for (const [k, v] of Object.entries(objDef.properties)) {
    // if (v.type === "attachment") {
    //   Object.defineProperty(proto, k, {
    //     get: function() {
    //       const attachment = this.attachment;
    //       Object.setPrototypeOf(
    //         attachment,
    //         AttachmentProperty(context, this.attachment),
    //       );
    //       return attachment;
    //     },
    //   });
    // }
  }

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
  if (!proto) {
    proto = createPrototype(
      client,
      obj.__primaryKey,
      apiName,
    );

    if (!ontologyCache) {
      cache.set(
        client.ontology.metadata.ontologyRid,
        new Map([[apiName, proto]]),
      );
    } else {
      ontologyCache.set(apiName, proto);
    }
  }

  Object.setPrototypeOf(obj, proto);
  setPropertyPrototypes<T, O>(client, apiName, obj);

  return obj as OsdkLegacyObjectFrom<O, T>;
}

function setPropertyPrototypes<
  T extends ObjectTypesFrom<O> & string,
  O extends OntologyDefinition<any>,
>(client: ThinClient<O>, apiName: T, obj: OntologyObjectV2) {
  for (
    const [k, v] of Object.entries(client.ontology.objects[apiName].properties)
  ) {
    if (!obj[k]) {
      continue;
    }
    switch (v.type) {
      case "attachment":
        createPropertyPrototype(
          obj,
          k,
          (value) => AttachmentProperty(client, value.rid),
        );
        break;
      case "geopoint":
        createPropertyPrototype(
          obj,
          k,
          (value) => GeoPoint.fromGeoJson(value),
        );
        break;
      case "geoshape":
        createPropertyPrototype(
          obj,
          k,
          (value) => GeoShape.fromGeoJson(value),
        );
        break;
      case "datetime":
        createPropertyPrototype(
          obj,
          k,
          (value) => LocalDate.fromISOString(value),
        );
        break;
      case "timestamp":
        createPropertyPrototype(
          obj,
          k,
          (value) => Timestamp.fromISOString(value),
        );
        break;
      case "string":
      case "boolean":
      case "double":
      case "integer":
      case "short":
      case "long":
      case "float":
      case "decimal":
      case "byte":
        break;
      default:
        const _: never = v.type;
    }
  }
}

function createPropertyPrototype<T>(
  obj: OntologyObjectV2,
  k: string,
  constructor: (value: any) => T,
) {
  if (!obj[k]) {
    return;
  }

  if (Array.isArray(obj[k])) {
    createArrayPropertyPrototype(obj, k, constructor);
  } else {
    createSinglePropertyPrototype(obj, k, constructor);
  }
}

function createArrayPropertyPrototype<T>(
  obj: OntologyObjectV2,
  k: string,
  constructor: (value: any) => T,
) {
  const originalArray = obj[k];
  const slicedArray = originalArray.slice();

  for (let i = 0; i < slicedArray.length; i++) {
    Object.defineProperty(slicedArray, i, {
      get: (function(index): () => T {
        let memoizedValue: T | undefined;
        return function() {
          if (!memoizedValue) {
            memoizedValue = constructor(originalArray[index]);
          }
          return memoizedValue;
        };
      })(i),
    });
  }

  Object.setPrototypeOf(slicedArray, Array.prototype);
  obj[k] = slicedArray;
}

function createSinglePropertyPrototype<T>(
  object: OntologyObjectV2,
  key: string,
  constructor: (value: any) => T,
) {
  const originalValue = object[key];
  Object.defineProperty(object, key, {
    get: (function(): () => T {
      let memoizedValue: T | undefined;
      return function() {
        if (!memoizedValue) {
          console.log(originalValue);
          memoizedValue = constructor(originalValue);
        }
        return memoizedValue;
      };
    })(),
    set(v) {
    },
  });
}
