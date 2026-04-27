/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { Visibility } from "@osdk/client.unstable";
import { defineObject } from "../defineObject.js";
import type { ObjectPropertyTypeUserDefinition } from "../object/ObjectPropertyTypeUserDefinition.js";
import type { ObjectTypeDefinition as MakerObjectTypeDefinition } from "../object/ObjectTypeDefinition.js";
import type { ObjectTypeStatus } from "../object/ObjectTypeStatus.js";
import type { PropertyV2Config } from "./propertyMapping.js";

/**
 * Input configuration for defineObjectV2.
 */
export interface ObjectV2Config {
  apiName: string;
  primaryKeyPropertyApiName: string;
  displayName: string;
  pluralDisplayName: string;
  titlePropertyApiName: string;
  description?: string;
  properties: Record<string, PropertyV2Config>;
  visibility?: Visibility;
  status?: ObjectTypeStatus;
}

/**
 * Branded intermediate type returned by defineObjectV2.
 * Carries the full config as a type parameter for later use by finalizeTypes.
 * Also stores the V1 definition reference for use by defineLinkV2.
 */
export type ObjectV2Def<T extends ObjectV2Config = ObjectV2Config> = T & {
  readonly __brand: "ObjectV2Def";
  /** @internal V1 ObjectTypeDefinition with namespaced apiName, for link registration */
  readonly __v1Def: MakerObjectTypeDefinition;
};

/**
 * Convert a PropertyV2Config to the V1 ObjectPropertyTypeUserDefinition format.
 */
function convertPropertyToV1(
  config: PropertyV2Config,
): ObjectPropertyTypeUserDefinition {
  if (typeof config === "string") {
    return { type: config };
  }
  const result: ObjectPropertyTypeUserDefinition = {
    type: config.type,
  };
  if (config.array !== undefined) {
    result.array = config.array;
  }
  if (config.description !== undefined) {
    result.description = config.description;
  }
  if (config.displayName !== undefined) {
    result.displayName = config.displayName;
  }
  if (config.nullable === false) {
    result.nullability = { noNulls: true, noEmptyCollections: false };
  }
  return result;
}

/**
 * Define an object type that produces types compatible with the OSDK client.
 *
 * Delegates to the existing defineObject() for validation and maker state
 * registration, then returns a branded config for use with finalizeTypes().
 */
export function defineObjectV2<const T extends ObjectV2Config>(
  config: T,
): ObjectV2Def<T> {
  const v1Properties: Record<string, ObjectPropertyTypeUserDefinition> = {};
  if (config.properties) {
    for (const [key, prop] of Object.entries(config.properties)) {
      v1Properties[key] = convertPropertyToV1(prop);
    }
  }

  const v1Config: MakerObjectTypeDefinition = {
    apiName: config.apiName,
    primaryKeyPropertyApiName: config.primaryKeyPropertyApiName,
    displayName: config.displayName,
    pluralDisplayName: config.pluralDisplayName,
    titlePropertyApiName: config.titlePropertyApiName,
    description: config.description,
    properties: v1Properties,
    visibility: config.visibility,
    status: config.status,
  };

  const v1Registered = defineObject(v1Config);

  const result = config as ObjectV2Def<T>;
  (result as any).__v1Def = v1Registered;
  return result;
}
