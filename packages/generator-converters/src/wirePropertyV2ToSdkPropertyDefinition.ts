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
  ObjectTypePropertyDefinition,
  WirePropertyTypes,
} from "@osdk/api";
import type {
  ObjectPropertyType,
  PropertyV2,
  SharedPropertyType,
} from "@osdk/gateway/types";

export function wirePropertyV2ToSdkPropertyDefinition(
  input: PropertyV2 | SharedPropertyType,
  isNullable: boolean = true,
  log?: { info: (msg: string) => void },
): ObjectTypePropertyDefinition | undefined {
  const sdkPropDefinition = objectPropertyTypeToSdkPropertyDefinition(
    input.dataType,
  );
  if (sdkPropDefinition == null) {
    return undefined;
  }
  switch (input.dataType.type) {
    case "integer":
    case "string":
    case "byte":
    case "decimal":
    case "double":
    case "float":
    case "long":
    case "short":
    case "boolean":
    case "date":
    case "attachment":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "timeseries":
    case "marking":
      return {
        displayName: input.displayName,
        multiplicity: false,
        description: input.description,
        type: sdkPropDefinition,
        nullable: isNullable,
      };
    case "array": {
      return {
        displayName: input.displayName,
        multiplicity: true,
        description: input.description,
        type: sdkPropDefinition,
        nullable: true,
      };
    }
    default:
      const _: never = input.dataType;
      log?.info(`Unexpected data type ${JSON.stringify(input.dataType)}`);
      return undefined;
  }
}

function objectPropertyTypeToSdkPropertyDefinition(
  propertyType: ObjectPropertyType,
  log?: { info: (msg: string) => void },
): WirePropertyTypes | undefined {
  switch (propertyType.type) {
    case "integer":
    case "string":
    case "byte":
    case "decimal":
    case "double":
    case "float":
    case "long":
    case "short":
    case "boolean":
    case "attachment":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "marking":
      return propertyType.type;
    case "date":
      return "datetime";
    case "array":
      return objectPropertyTypeToSdkPropertyDefinition(propertyType.subType);
    case "timeseries":
      if (propertyType.itemType.type === "string") {
        return "stringTimeseries";
      }
      return "numericTimeseries";
    default:
      const _: never = propertyType;
      log?.info(`Unexpected data type ${JSON.stringify(propertyType)}`);
      return undefined;
  }
}
