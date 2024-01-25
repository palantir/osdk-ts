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
  AnyType,
  AsyncOperationType,
  BinaryType,
  BooleanType,
  BuiltInType,
  DataType,
  DateTimeType,
  DoubleType,
  EnumType,
  ExternalType,
  IntegerType,
  ListType,
  LongType,
  MapType,
  ObjectType,
  OptionalType,
  PrimitiveType,
  ReferenceType,
  RidType,
  StringType,
  UnionType,
  UUIDType,
} from "../spec/index.js";
import { visitTypeUnion } from "./common.js";

export function isOptional(type: DataType): boolean {
  if (type.type === "optional") {
    return true;
  }
  return false;
}

export function generateType(
  dataType: DataType,
  referenceSet: Set<string>,
): string {
  return visitTypeUnion(dataType, {
    object(type: ObjectType): string {
      const properties = Object.entries(type.object.properties)
        .map(
          ([key, value]) =>
            `${key}${value.type.type === "optional" ? "?" : ""}: ${
              generateType(
                value.type,
                referenceSet,
              )
            };`,
        )
        .join(" ");
      return `{ ${properties} }`;
    },
    builtin(type: BuiltInType): string {
      return generatePrimitiveType(type.builtin);
    },
    reference(type: ReferenceType): string {
      referenceSet.add(type.reference);
      return type.reference;
    },
    list(type: ListType): string {
      const subType = generateType(type.list.subType, referenceSet);
      return `Array<${subType}>`;
    },
    optional(type: OptionalType): string {
      const subType = generateType(type.optional.subType, referenceSet);
      return `${subType}`;
    },
    union(type: UnionType): string {
      const subTypes = Object.entries(type.union.subTypes)
        .map(
          ([subtypeKey, subtypeValue]) =>
            `(`
            + generateType(
              { type: "reference", reference: subtypeValue },
              referenceSet,
            )
            + ` & { type: "${subtypeKey}" })`,
        )
        .join(" | ");
      return subTypes;
    },
    enum(type: EnumType): string {
      const values = type.enum.values.map(value => `'${value}'`).join(" | ");
      return values;
    },
    map(type: MapType): string {
      const keyType = generateType(type.map.keyType, referenceSet);
      const valueType = generateType(type.map.valueType, referenceSet);
      return `Record<${keyType}, ${valueType}>`;
    },
    binary(_type: BinaryType): string {
      return "ReadableStream<Uint8Array> | Blob";
    },
    external(_type: ExternalType): string {
      // External types are references to types defined in other packages.
      return "any";
    },
    asyncOperation(_type: AsyncOperationType): string {
      // Async operations are currently not supported;
      return "any";
    },
    unknown(type: { type: string }): string {
      throw new Error(`Unsupported data type: ${type.type}`);
    },
  });
}

function generatePrimitiveType(type: PrimitiveType): string {
  return visitTypeUnion(type, {
    string(_type: StringType): string {
      return "string";
    },
    boolean(_type: BooleanType): string {
      return "boolean";
    },
    rid(_type: RidType): string {
      return "string";
    },
    datetime(_type: DateTimeType): string {
      return "string";
    },
    integer(_type: IntegerType): string {
      return "number";
    },
    double(_type: DoubleType): string {
      return "number";
    },
    uuid(_type: UUIDType): string {
      return "string";
    },
    long(_type: LongType): string {
      return "number";
    },
    any(_type: AnyType): string {
      return "any";
    },
    unknown(_type: { type: string }): string {
      throw new Error(`Encountered unknown primitive type ${type.type}`);
    },
  });
}
