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

import type { PropertyDefinition } from "@osdk/api";
import type { OntologyObject } from "../../ontology-runtime";
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
} from "../../ontology-runtime";
import type { ObjectTypeFilter } from "../interfaces/filters";

export function mapPropertiesToSearchFilter<T extends OntologyObject>(
  properties: Record<string, PropertyDefinition>,
): ObjectTypeFilter<T> {
  return Object.entries(properties).reduce(
    (acc, [propertyName, propertyDefinition]) => {
      acc[propertyName] = mapPropertyTypeToSearchFilter(
        propertyName,
        propertyDefinition,
      );

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
  ) as ObjectTypeFilter<T>;
}

function mapPropertyTypeToSearchFilter(
  propertyApiName: string,
  propertyDefinition: PropertyDefinition,
) {
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
    case "stringArray":
    case "booleanArray":
    case "datetimeArray":
    case "doubleArray":
    case "integerArray":
    case "timestampArray":
    case "shortArray":
    case "longArray":
    case "floatArray":
    case "decimalArray":
    case "byteArray":
    case "attachmentArray":
    case "geopointArray":
    case "geoshapeArray":
      return ArrayFilter(propertyApiName);
  }
}
