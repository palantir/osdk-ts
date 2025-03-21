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

import { isNullableQueryDataType } from "./isNullableQueryDataType.js";
export function wireQueryDataTypeToQueryDataTypeDefinition(input) {
  switch (input.type) {
    case "double":
    case "float":
    case "integer":
    case "long":
    case "attachment":
    case "boolean":
    case "date":
    case "string":
    case "timestamp":
      return {
        type: input.type,
        nullable: false
      };
    case "object":
      return {
        type: "object",
        object: input.objectTypeApiName,
        nullable: false
      };
    case "objectSet":
      return {
        type: "objectSet",
        objectSet: input.objectTypeApiName,
        nullable: false
      };
    case "array":
      return {
        ...wireQueryDataTypeToQueryDataTypeDefinition(input.subType),
        multiplicity: true
      };
    case "set":
      return {
        type: "set",
        set: wireQueryDataTypeToQueryDataTypeDefinition(input.subType),
        nullable: false
      };
    case "union":
      const allowNulls = isNullableQueryDataType(input);

      // special case for a union where one half is nullable to skip the union step and just allow nulls directly
      if (allowNulls && input.unionTypes.length === 2) {
        const nonNull = input.unionTypes.find(t => t.type != null);
        if (nonNull) {
          return {
            ...wireQueryDataTypeToQueryDataTypeDefinition(nonNull),
            nullable: true
          };
        }
      }
      return {
        type: "union",
        union: input.unionTypes.reduce((acc, t) => {
          if (t.type === "null") {
            return acc;
          }
          acc.push(wireQueryDataTypeToQueryDataTypeDefinition(t));
          return acc;
        }, []),
        nullable: allowNulls
      };
    case "struct":
      return {
        type: "struct",
        struct: Object.fromEntries(input.fields.map(f => [f.name, wireQueryDataTypeToQueryDataTypeDefinition(f.fieldType)])),
        nullable: false
      };
    case "twoDimensionalAggregation":
      return {
        type: "twoDimensionalAggregation",
        twoDimensionalAggregation: get2DQueryAggregationProps(input),
        nullable: false
      };
    case "threeDimensionalAggregation":
      return {
        type: "threeDimensionalAggregation",
        threeDimensionalAggregation: get3DQueryAggregationProps(input),
        nullable: false
      };
    case "entrySet":
      const keyType = wireQueryDataTypeToQueryDataTypeDefinition(input.keyType);
      if (!validMapKeyTypes.includes(keyType.type)) {
        throw new Error("Map types with a key type of " + keyType.type + " are not supported" + validMapKeyTypes.toString());
      }
      if (keyType.multiplicity === true) {
        throw new Error("Map types cannot have keys as arrays");
      }
      return {
        type: "map",
        nullable: false,
        keyType,
        valueType: wireQueryDataTypeToQueryDataTypeDefinition(input.valueType)
      };
    case "null":
    case "unsupported":
      throw new Error(`Unable to process query because the server indicated an unsupported QueryDataType.type: ${input.type}. Please check that your query is using supported types.`);
    default:
      throw new Error(`Unsupported QueryDataType.type ${input.type}`);
  }
}
function get2DQueryAggregationProps(input) {
  if (input.keyType.type === "range") {
    return {
      keyType: input.keyType.type,
      keySubtype: input.keyType.subType.type,
      valueType: input.valueType.type
    };
  } else {
    if (guardInvalidKeyTypes(input.keyType)) {
      return {
        keyType: input.keyType.type,
        valueType: input.valueType.type
      };
    }
    throw new Error(`Cannot create 2D aggregation with ${input.keyType.type} as its type`);
  }
}
function get3DQueryAggregationProps(input) {
  if (input.keyType.type === "range") {
    return {
      keyType: input.keyType.type,
      keySubtype: input.keyType.subType.type,
      valueType: get2DQueryAggregationProps(input.valueType)
    };
  } else {
    if (guardInvalidKeyTypes(input.keyType)) {
      return {
        keyType: input.keyType.type,
        valueType: get2DQueryAggregationProps(input.valueType)
      };
    }
    throw new Error(`Cannot create 3D aggregation with ${input.keyType.type} as its type`);
  }
}

/**
 * Guard against aggregation key types that are allowed by the backend types but are illegal to actually use
 */
function guardInvalidKeyTypes(key) {
  return key.type === "string" || key.type === "boolean";
}

/**
 * The set of all valid key types for maps. This includes all types that are represented by strings or numbers in the OSDK, and  Ontology Objects.
 */
const validMapKeyTypes = ["string", "object", "double", "float", "integer", "long", "date", "timestamp", "byte", "datetime", "decimal", "marking", "short", "objectType"];
//# sourceMappingURL=wireQueryDataTypeToQueryDataTypeDefinition.js.map