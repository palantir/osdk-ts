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

import type { ObjectPropertyType } from "@osdk/foundry.ontologies";
import type { PropertyTypeType, PropertyTypeTypeVector } from "@osdk/maker";

/**
 * Result of mapping a gateway ObjectPropertyType to a maker PropertyTypeType.
 * `array` is true when the gateway type was {type: "array", subType: X}.
 */
export interface MappedPropertyType {
  type: PropertyTypeType;
  array?: boolean;
}

/**
 * Maps a gateway ObjectPropertyType (discriminated union with {type: string})
 * to a maker PropertyTypeType.
 *
 * Throws for unsupported types or invalid type configurations.
 */
export function mapPropertyType(
  dataType: ObjectPropertyType,
): MappedPropertyType {
  switch (dataType.type) {
    case "string":
      return { type: "string" };
    case "integer":
      return { type: "integer" };
    case "boolean":
      return { type: "boolean" };
    case "double":
      return { type: "double" };
    case "float":
      return { type: "float" };
    case "long":
      return { type: "long" };
    case "short":
      return { type: "short" };
    case "byte":
      return { type: "byte" };
    case "date":
      return { type: "date" };
    case "timestamp":
      return { type: "timestamp" };
    case "decimal":
      return { type: "decimal" };
    case "attachment":
      return { type: "attachment" };
    case "geopoint":
      return { type: "geopoint" };
    case "geoshape":
      return { type: "geoshape" };
    case "mediaReference":
      return { type: "mediaReference" };
    case "geotimeSeriesReference":
      return { type: "geotimeSeries" };
    case "marking":
      if (dataType.markingType === undefined) {
        throw new Error(
          'Cannot import marking property because markingType is missing. Expected "CBAC" or "MANDATORY" in the source ontology metadata.',
        );
      }
      return {
        type: {
          type: "marking",
          markingType: dataType.markingType,
          // Imported entities already own their marking configuration, so
          // Maker's required authoring input group does not apply here.
          markingInputGroupName: "not-applicable",
        },
      };
    case "struct": {
      // PropertyTypeTypeStruct is not exported from the root
      // Recreating it here
      type PropertyTypeTypeStruct = Extract<
        PropertyTypeType,
        { type: "struct" }
      >;
      const structDefinition: PropertyTypeTypeStruct["structDefinition"] = {};

      for (const field of dataType.structFieldTypes) {
        const mappedField = mapPropertyType(field.dataType);
        if (
          mappedField.array === true ||
          (typeof mappedField.type === "object" &&
            mappedField.type.type === "struct")
        ) {
          throw new Error(
            `Cannot map struct field "${field.apiName}": array and nested struct fields are unsupported`,
          );
        }
        structDefinition[field.apiName] = {
          fieldType: mappedField.type,
          displayMetadata: {
            displayName: field.apiName,
            description: undefined,
          },
          typeClasses: field.typeClasses,
        };
      }

      let mainValue: PropertyTypeTypeStruct["mainValue"] | undefined;
      if (dataType.mainValue !== undefined) {
        const mappedMainValue = mapPropertyType(
          dataType.mainValue.mainValueType,
        );
        if (mappedMainValue.array === true) {
          throw new Error("Cannot map struct main value with an array type");
        }
        mainValue = {
          fields: dataType.mainValue.fields,
          type: mappedMainValue.type,
        };
      }

      return {
        type: {
          type: "struct",
          structDefinition,
          mainValue,
        },
      };
    }
    case "array": {
      const subType = dataType.subType;
      if (!subType) {
        throw new Error("Cannot map array type with missing subType");
      }
      const inner = mapPropertyType(subType);
      return { type: inner.type, array: true };
    }
    case "vector": {
      if (dataType.supportsSearchWith.length !== 1) {
        throw new Error(
          `Can only map vectors with exactly one "supportsSearchWith", found ${dataType.supportsSearchWith.length}`,
        );
      }
      if (!dataType.supportsSearchWith[0].value) {
        throw new Error(
          'Cannot map vectors with undefined "supportsSearchWith" value',
        );
      }
      let embeddingModel: PropertyTypeTypeVector["embeddingModel"];
      if (dataType.embeddingModel?.type === "lms") {
        embeddingModel = {
          type: "text",
          text: { type: "lms", lms: dataType.embeddingModel.value },
        };
      }
      if (dataType.embeddingModel?.type === "foundryLiveDeployment") {
        const { rid, inputParamName, outputParamName } =
          dataType.embeddingModel;
        if (
          rid === undefined ||
          inputParamName === undefined ||
          outputParamName === undefined
        ) {
          throw new Error(
            "Cannot map vector embedding model with missing live deployment configuration",
          );
        }
        embeddingModel = {
          type: "text",
          text: {
            type: "foundryLiveDeployment",
            foundryLiveDeployment: { rid, inputParamName, outputParamName },
          },
        };
      }
      return {
        type: {
          type: "vector",
          dimension: dataType.dimension,
          supportsSearchWith: dataType.supportsSearchWith[0].value,
          embeddingModel,
        },
      };
    }
    default:
      throw new Error(`Unsupported property type "${dataType.type}"`);
  }
}
