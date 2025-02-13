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
  BaseWirePropertyTypes,
  ObjectMetadata,
  WirePropertyTypes,
} from "@osdk/api";
import type {
  ObjectPropertyType,
  PropertyV2,
  SharedPropertyType,
} from "@osdk/internal.foundry.core";
import { consola } from "consola";

export function wirePropertyV2ToSdkPropertyDefinition(
  input: (PropertyV2 | SharedPropertyType) & { nullable?: boolean },
  isNullable: boolean = true,
): ObjectMetadata.Property | undefined {
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
    case "mediaReference":
    case "geopoint":
    case "geoshape":
    case "timestamp":
    case "timeseries":
    case "marking":
    case "geotimeSeriesReference":
    case "struct":
      return {
        displayName: input.displayName,
        multiplicity: false,
        description: input.description,
        type: sdkPropDefinition,
        nullable: input.nullable == null ? isNullable : input.nullable,
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
    case "cipherText": {
      consola.info(
        `${JSON.stringify(input.dataType.type)} is not a supported dataType`,
      );
      return undefined;
    }
    default:
      const _: never = input.dataType;
      consola.info(
        `${JSON.stringify(input.dataType)} is not a supported dataType`,
      );
      return undefined;
  }
}

function objectPropertyTypeToSdkPropertyDefinition(
  propertyType: ObjectPropertyType,
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
    case "geotimeSeriesReference":
    case "mediaReference":
      return propertyType.type;
    case "date":
      return "datetime";
    case "array":
      return objectPropertyTypeToSdkPropertyDefinition(propertyType.subType);
    case "timeseries":
      if (propertyType.itemType?.type === "string") {
        return "stringTimeseries";
      } else if (propertyType.itemType?.type === "double") {
        return "numericTimeseries";
      } else return "sensorTimeseries";
    case "struct": {
      return propertyType.structFieldTypes.reduce(
        (structMap: Record<string, BaseWirePropertyTypes>, structField) => {
          structMap[structField.apiName] =
            objectPropertyTypeToSdkPropertyDefinition(
              structField.dataType,
            ) as BaseWirePropertyTypes;
          return structMap;
        },
        {},
      );
    }

    case "cipherText": {
      consola.info(
        `${JSON.stringify(propertyType.type)} is not a supported propertyType`,
      );
      return undefined;
    }
    default: {
      const _: never = propertyType;
      consola.info(
        `${JSON.stringify(propertyType)} is not a supported propertyType`,
      );
      return undefined;
    }
  }
}
