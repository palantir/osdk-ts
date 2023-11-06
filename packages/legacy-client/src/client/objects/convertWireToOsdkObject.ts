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
import {
  AttachmentProperty,
  GeoPoint,
  GeoShape,
  LocalDate,
  type OntologyObject,
  Timestamp,
} from "../../ontology-runtime/baseTypes";
import { createCachedOntologyTransform } from "../objectSets/createCachedOntologyTransform";
import type {
  OsdkLegacyLinksFrom,
  OsdkLegacyObjectFrom,
  OsdkLegacyPropertiesFrom,
} from "../OsdkObject";
import { createMultiLinkStep } from "./createMultiLinkStep";
import { createSingleLinkStep } from "./createSingleLinkStep";

const getPrototype = createCachedOntologyTransform(createPrototype);
function createPrototype<
  T extends keyof O["objects"] & string,
  O extends OntologyDefinition<any>,
>(
  ontology: O,
  type: T,
  client: ThinClient<O>,
) {
  const objDef = ontology.objects[type];
  const proto = {};

  Object.defineProperty(proto, "__apiName", { get: () => type });

  // toString that uses the ontology definition to enumerate the props that need to be serialized
  proto.toString = function() {
    const obj: Record<string, unknown> = {};
    const self = this as OsdkLegacyPropertiesFrom<O, T> & OntologyObject<T>;
    for (const prop of Object.keys(objDef.properties)) {
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
          return createMultiLinkStep(
            client,
            objDef.apiName,
            this.__primaryKey,
            targetType,
          );
        } else {
          return createSingleLinkStep(
            client,
            objDef.apiName,
            this.__primaryKey,
            targetType,
          );
        }
      },
    });
  }

  return proto as OsdkLegacyLinksFrom<O, T>;
}

export function convertWireToOsdkObject<
  T extends ObjectTypesFrom<O> & string,
  O extends OntologyDefinition<any>,
>(
  client: ThinClient<O>,
  apiName: T,
  obj: OntologyObjectV2,
): OsdkLegacyObjectFrom<O, T> {
  const proto = getPrototype(client.ontology, apiName, client);
  Object.setPrototypeOf(obj, proto);
  setPropertyAccessors<T, O>(client, apiName, obj);

  return obj as OsdkLegacyObjectFrom<O, T>;
}

function setPropertyAccessors<
  T extends ObjectTypesFrom<O> & string,
  O extends OntologyDefinition<any>,
>(client: ThinClient<O>, apiName: T, obj: OntologyObjectV2) {
  for (
    const [k, v] of Object.entries(client.ontology.objects[apiName].properties)
  ) {
    if (obj[k] == null) {
      continue;
    }
    switch (v.type) {
      case "attachment":
        setPropertyAccessor(
          obj,
          k,
          (value) => AttachmentProperty(client, value.rid),
        );
        break;
      case "geopoint":
        setPropertyAccessor(
          obj,
          k,
          (value) => GeoPoint.fromGeoJson(value),
        );
        break;
      case "geoshape":
        setPropertyAccessor(
          obj,
          k,
          (value) => GeoShape.fromGeoJson(value),
        );
        break;
      case "datetime":
        setPropertyAccessor(
          obj,
          k,
          (value) => LocalDate.fromISOString(value),
        );
        break;
      case "timestamp":
        setPropertyAccessor(
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

function setPropertyAccessor<T>(
  obj: OntologyObjectV2,
  k: string,
  constructor: (value: any) => T,
) {
  if (obj[k] == null) {
    return;
  }

  if (Array.isArray(obj[k])) {
    createArrayPropertyAccessor(obj, k, constructor);
  } else {
    createSinglePropertyAccessor(obj, k, constructor);
  }
}

function createArrayPropertyAccessor<T>(
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

  obj[k] = slicedArray;
}

function createSinglePropertyAccessor<T>(
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
          memoizedValue = constructor(originalValue);
        }
        return memoizedValue;
      };
    })(),
  });
}
