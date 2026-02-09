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

import type { Type } from "@osdk/client.unstable";
import type {
  ArrayBaseType,
  ArrayObjectPropertyType,
  BaseType,
  ConcreteArrayType,
  ConcreteDataType,
  ConcreteDecimalType,
  ConcreteStructElement,
  ObjectPropertyType,
  PrimitiveBaseType,
  PrimitiveObjectPropertyType,
  Void,
} from "@osdk/client.unstable/api";

const VOID: Void = {} as Void;
const DEFAULT_DECIMAL_PRECISION = 38;
const DEFAULT_DECIMAL_SCALE = 0;

/**
 * Convert Type to ObjectPropertyType for marketplace shapes
 * TypeScript port of TypeToMarketplaceShapeObjectPropertyTypeVisitor
 */
export function typeToMarketplaceObjectPropertyType(
  type: Type,
): ObjectPropertyType {
  switch (type.type) {
    case "array":
      const arraySubtype = typeToMarketplaceObjectPropertyType(
        type.array.subtype,
      );
      if (arraySubtype.type === "array") {
        throw new Error("Nested array property types are not supported in marketplace");
      }
      if (arraySubtype.type !== "primitive") {
        throw new Error("Array subtype must be primitive");
      }
      return {
        type: "array",
        array: {
          elementType: arraySubtype.primitive,
        } as ArrayObjectPropertyType,
      };

    case "boolean":
      return {
        type: "primitive",
        primitive: { type: "booleanType", booleanType: VOID },
      };

    case "byte":
      return {
        type: "primitive",
        primitive: { type: "byteType", byteType: VOID },
      };

    case "date":
      return {
        type: "primitive",
        primitive: { type: "dateType", dateType: VOID },
      };

    case "decimal":
      return {
        type: "primitive",
        primitive: { type: "decimalType", decimalType: VOID },
      };

    case "double":
      return {
        type: "primitive",
        primitive: { type: "doubleType", doubleType: VOID },
      };

    case "float":
      return {
        type: "primitive",
        primitive: { type: "floatType", floatType: VOID },
      };

    case "geohash":
      return {
        type: "primitive",
        primitive: { type: "geohashType", geohashType: VOID },
      };

    case "geoshape":
      return {
        type: "primitive",
        primitive: { type: "geoshapeType", geoshapeType: VOID },
      };

    case "integer":
      return {
        type: "primitive",
        primitive: { type: "integerType", integerType: VOID },
      };

    case "long":
      return {
        type: "primitive",
        primitive: { type: "longType", longType: VOID },
      };

    case "short":
      return {
        type: "primitive",
        primitive: { type: "shortType", shortType: VOID },
      };

    case "string":
      return {
        type: "primitive",
        primitive: { type: "stringType", stringType: VOID },
      };

    case "experimentalTimeDependentV1":
      return {
        type: "primitive",
        primitive: { type: "timeDependentType", timeDependentType: VOID },
      };

    case "timestamp":
      return {
        type: "primitive",
        primitive: { type: "timestampType", timestampType: VOID },
      };

    case "attachment":
      return {
        type: "primitive",
        primitive: { type: "attachmentType", attachmentType: VOID },
      };

    case "marking":
      return {
        type: "primitive",
        primitive: { type: "markingType", markingType: VOID },
      };

    case "cipherText": {
      const plainTextType = typeToMarketplaceObjectPropertyType(
        type.cipherText.plainTextType,
      );
      if (plainTextType.type === "array") {
        throw new Error("Nested array property types are not supported in marketplace");
      }
      if (plainTextType.type !== "primitive") {
        throw new Error("CipherText plaintext type must be primitive");
      }
      return {
        type: "primitive",
        primitive: {
          type: "cipherTextType",
          cipherTextType: { plainTextType: plainTextType.primitive },
        },
      };
    }

    case "mediaReference":
      return {
        type: "primitive",
        primitive: { type: "mediaReferenceType", mediaReferenceType: VOID },
      };

    case "vector":
      return {
        type: "primitive",
        primitive: {
          type: "vectorType",
          vectorType: {
            dimension: type.vector.dimension,
            supportsSearchWith: type.vector.supportsSearchWith?.map(fn => {
              switch (fn) {
                case "COSINE_SIMILARITY":
                  return "COSINE_SIMILARITY";
                case "DOT_PRODUCT":
                  return "DOT_PRODUCT";
                case "EUCLIDEAN_DISTANCE":
                  return "EUCLIDEAN_DISTANCE";
                default:
                  throw new Error(`Unknown vector similarity function: ${fn}`);
              }
            }) ?? [],
          },
        },
      };

    case "geotimeSeriesReference":
      return {
        type: "primitive",
        primitive: {
          type: "geotimeSeriesReferenceType",
          geotimeSeriesReferenceType: VOID,
        },
      };

    case "struct": {
      const structFieldTypes = type.struct.structFields.map(field =>
        typeToMarketplaceObjectPropertyType(field.fieldType)
      );
      return {
        type: "primitive",
        primitive: {
          type: "structType",
          structType: { structFieldTypes },
        } as PrimitiveObjectPropertyType,
      };
    }

    default:
      throw new Error(`Unknown property type: ${(type as any).type}`);
  }
}

/**
 * Convert Type to ConcreteDataType for datasource columns
 * TypeScript port of TypeToConcreteDataTypeVisitor
 */
export function typeToConcreteDataType(type: Type): ConcreteDataType {
  switch (type.type) {
    case "array": {
      const elementType = typeToConcreteDataType(type.array.subtype);
      return {
        type: "array",
        array: { elementType } as ConcreteArrayType,
      };
    }

    case "boolean":
      return {
        type: "primitive",
        primitive: { type: "boolean", boolean: VOID },
      };

    case "byte":
      return {
        type: "primitive",
        primitive: { type: "byte", byte: VOID },
      };

    case "date":
      return {
        type: "primitive",
        primitive: { type: "date", date: VOID },
      };

    case "decimal":
      return {
        type: "primitive",
        primitive: {
          type: "decimal",
          decimal: {
            precision: type.decimal.precision ?? DEFAULT_DECIMAL_PRECISION,
            scale: type.decimal.scale ?? DEFAULT_DECIMAL_SCALE,
          } as ConcreteDecimalType,
        },
      };

    case "double":
      return {
        type: "primitive",
        primitive: { type: "double", double: VOID },
      };

    case "float":
      return {
        type: "primitive",
        primitive: { type: "float", float: VOID },
      };

    case "geohash":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "geoshape":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "integer":
      return {
        type: "primitive",
        primitive: { type: "integer", integer: VOID },
      };

    case "long":
      return {
        type: "primitive",
        primitive: { type: "long", long: VOID },
      };

    case "short":
      return {
        type: "primitive",
        primitive: { type: "short", short: VOID },
      };

    case "string":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "experimentalTimeDependentV1":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "timestamp":
      return {
        type: "primitive",
        primitive: { type: "timestamp", timestamp: VOID },
      };

    case "attachment":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "marking":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "cipherText":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "mediaReference":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "vector": {
      const floatType: ConcreteDataType = {
        type: "primitive",
        primitive: { type: "float", float: VOID },
      };
      return {
        type: "array",
        array: { elementType: floatType } as ConcreteArrayType,
      };
    }

    case "geotimeSeriesReference":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID },
      };

    case "struct": {
      const fields = type.struct.structFields.map(field => ({
        name: field.apiName,
        type: typeToConcreteDataType(field.fieldType),
      } as ConcreteStructElement));
      return {
        type: "struct",
        struct: { fields },
      };
    }

    default:
      throw new Error(`Unknown property type: ${(type as any).type}`);
  }
}

/**
 * Convert Type to BaseType for value type input shapes
 * TypeScript port of TypeToMarketplaceShapeBaseTypeVisitor
 */
export function typeToMarketplaceBaseType(type: Type): BaseType {
  switch (type.type) {
    case "array": {
      const itemBaseType = typeToMarketplaceBaseType(type.array.subtype);
      if (itemBaseType.type === "array") {
        throw new Error("Nested array property types are not supported in marketplace");
      }
      if (itemBaseType.type === "structV2") {
        throw new Error("Invalid base type: array of struct");
      }
      if (itemBaseType.type !== "primitive") {
        throw new Error("Array item must be primitive base type");
      }
      return {
        type: "array",
        array: { elementType: itemBaseType.primitive } as ArrayBaseType,
      };
    }

    case "boolean":
      return {
        type: "primitive",
        primitive: { type: "boolean", boolean: VOID } as PrimitiveBaseType,
      };

    case "byte":
      return {
        type: "primitive",
        primitive: { type: "byte", byte: VOID } as PrimitiveBaseType,
      };

    case "date":
      return {
        type: "primitive",
        primitive: { type: "date", date: VOID } as PrimitiveBaseType,
      };

    case "decimal":
      return {
        type: "primitive",
        primitive: { type: "decimal", decimal: VOID } as PrimitiveBaseType,
      };

    case "double":
      return {
        type: "primitive",
        primitive: { type: "double", double: VOID } as PrimitiveBaseType,
      };

    case "float":
      return {
        type: "primitive",
        primitive: { type: "float", float: VOID } as PrimitiveBaseType,
      };

    case "geohash":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID } as PrimitiveBaseType,
      };

    case "geoshape":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID } as PrimitiveBaseType,
      };

    case "integer":
      return {
        type: "primitive",
        primitive: { type: "integer", integer: VOID } as PrimitiveBaseType,
      };

    case "long":
      return {
        type: "primitive",
        primitive: { type: "long", long: VOID } as PrimitiveBaseType,
      };

    case "short":
      return {
        type: "primitive",
        primitive: { type: "short", short: VOID } as PrimitiveBaseType,
      };

    case "string":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID } as PrimitiveBaseType,
      };

    case "experimentalTimeDependentV1":
      throw new Error("Unsupported type: timeDependent");

    case "timestamp":
      return {
        type: "primitive",
        primitive: { type: "timestamp", timestamp: VOID } as PrimitiveBaseType,
      };

    case "attachment":
      throw new Error("Unsupported type: attachment");

    case "marking":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID } as PrimitiveBaseType,
      };

    case "cipherText":
      return {
        type: "primitive",
        primitive: { type: "string", string: VOID } as PrimitiveBaseType,
      };

    case "mediaReference":
      throw new Error("Unsupported type: mediaReference");

    case "vector":
      throw new Error("Unsupported type: vector");

    case "geotimeSeriesReference":
      throw new Error("Unsupported type: geotimeSeriesReference");

    case "struct":
      return {
        type: "primitive",
        primitive: { type: "struct", struct: VOID } as PrimitiveBaseType,
      };

    default:
      throw new Error(`Unknown property type: ${(type as any).type}`);
  }
}
