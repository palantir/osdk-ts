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

import type { ObjectPropertyType } from "./ObjectPropertyType.js";
import type { ObjectPropertyTypeUserDefinition } from "./ObjectPropertyTypeUserDefinition.js";
import type { ObjectType } from "./ObjectType.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";

/**
 * Gets a single property by apiName from either ObjectTypeDefinition (Record)
 * or ObjectType (Array) format.
 */
export function getProperty(
  obj: ObjectTypeDefinition | ObjectType,
  propertyId: string,
): ObjectPropertyType | ObjectPropertyTypeUserDefinition | undefined {
  const props = obj.properties;
  if (props == null) return undefined;
  if (Array.isArray(props)) {
    return props.find(prop => prop.apiName === propertyId);
  }
  return propertyId in props ? props[propertyId] : undefined;
}

/**
 * Gets all property apiNames from either format.
 */
export function getPropertyKeys(
  obj: ObjectTypeDefinition | ObjectType,
): string[] {
  const props = obj.properties;
  if (props == null) return [];
  if (Array.isArray(props)) {
    return props.map(prop => prop.apiName);
  }
  return Object.keys(props);
}

/**
 * Converts properties from either format to a Record keyed by apiName.
 */
export function toPropertyMap(
  obj: ObjectTypeDefinition | ObjectType,
): Record<string, ObjectPropertyType | ObjectPropertyTypeUserDefinition> {
  const props = obj.properties;
  if (props == null) return {};
  if (Array.isArray(props)) {
    return Object.fromEntries(props.map(prop => [prop.apiName, prop]));
  }
  return props;
}
