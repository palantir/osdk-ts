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
  ObjectTypePropertyDefinition,
  OntologyDefinition,
} from "@osdk/api";
import type { ObjectSetFilterArg } from "../interfaces/filters.js";
import {
  ArrayFilter,
  AttachmentFilter,
  BooleanFilter,
  GeoPointFilter,
  GeoShapeFilter,
  LocalDateFilter,
  NumericFilter,
  StringFilter,
  TimestampFilter,
} from "../objectSets/filters/index.js";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject.js";
import { isReservedKeyword } from "../utils/reservedKeywords.js";

export function mapPropertiesToSearchFilter<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
>(
  ontology: O,
  type: K,
) {
  return Object.entries(ontology.objects[type].properties).reduce(
    (acc, [propertyName, propertyDefinition]) => {
      if (
        propertyDefinition.type === "numericTimeseries"
        || propertyDefinition.type === "stringTimeseries"
      ) {
        return acc;
      }

      acc[propertyName] = mapPropertyTypeToSearchFilter(
        propertyName,
        propertyDefinition,
      );

      if (isReservedKeyword(propertyName)) {
        acc[`${propertyName}_`] = acc[propertyName];
      }

      return acc;
    },
    {} as {
      [key: string]:
        | StringFilter
        | BooleanFilter
        | LocalDateFilter
        | NumericFilter
        | TimestampFilter
        | AttachmentFilter
        | GeoPointFilter
        | GeoShapeFilter
        | ArrayFilter<any>;
    },
  ) as ObjectSetFilterArg<OsdkLegacyObjectFrom<O, K>>;
}

function mapPropertyTypeToSearchFilter(
  propertyApiName: string,
  propertyDefinition: ObjectTypePropertyDefinition,
) {
  if (propertyDefinition.multiplicity) {
    return ArrayFilter(propertyApiName);
  }

  switch (propertyDefinition.type) {
    case "string":
      return StringFilter(propertyApiName);
    case "boolean":
      return BooleanFilter(propertyApiName);
    case "datetime":
      return LocalDateFilter(propertyApiName);
    case "double":
      return NumericFilter(propertyApiName);
    case "integer":
      return NumericFilter(propertyApiName);
    case "timestamp":
      return TimestampFilter(propertyApiName);
    case "short":
      return NumericFilter(propertyApiName);
    case "long":
      return NumericFilter(propertyApiName);
    case "float":
      return NumericFilter(propertyApiName);
    case "decimal":
      return NumericFilter(propertyApiName);
    case "byte":
      return NumericFilter(propertyApiName);
    case "attachment":
      return AttachmentFilter(propertyApiName);
    case "geopoint":
      return GeoPointFilter(propertyApiName);
    case "geoshape":
      return GeoShapeFilter(propertyApiName);
    case "numericTimeseries":
    case "stringTimeseries":
      throw new Error(
        `Invalid property for filtering ${propertyDefinition.type}`,
      );

    default:
      const _: never = propertyDefinition.type;
      throw new Error(`Unknown property type ${propertyDefinition.type}`);
  }
}
