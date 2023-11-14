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

import {
  GeoPoint,
  GeoShape,
  isAttachment,
  isOntologyObject,
  LocalDate,
  Timestamp,
} from "../../baseTypes";
import type {
  ObjectSetDefinition,
  PrimitiveParameterValue,
} from "../../baseTypes";

export function getParameterValueMapping(
  value: any,
): PrimitiveParameterValue {
  if (isOntologyObject(value)) {
    return getParameterValueMapping(value.__primaryKey);
  } else if (value instanceof LocalDate) {
    return value.toISOString();
  } else if (value instanceof Timestamp) {
    return value.toISOString();
  } else if (isAttachment(value)) {
    return value.attachmentRid!;
  } else if (Array.isArray(value)) {
    return value.map(a => getParameterValueMapping(a));
  } else if (value instanceof Set) {
    return Array.from(value, getParameterValueMapping);
  } else if (GeoShape.isGeoShape(value)) {
    return value.toGeoJson();
  } else if (value instanceof GeoPoint) {
    return value.toGeoJson();
  } else if (isOntologyObjectSet(value)) {
    return value.definition;
  } else if (typeof value === "object") {
    // Since structs are valid arguments for Queries, we map the values
    return Object.entries(value).reduce((acc, [key, structValue]) => {
      acc[key] = getParameterValueMapping(structValue);
      return acc;
    }, {} as { [key: string]: PrimitiveParameterValue });
  }

  return value as string | number | boolean;
}

function isOntologyObjectSet(
  obj: any,
): obj is { definition: ObjectSetDefinition } {
  return obj && obj.definition;
}
