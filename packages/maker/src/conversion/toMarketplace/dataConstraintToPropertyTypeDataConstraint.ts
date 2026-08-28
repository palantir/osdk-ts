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

import type {
  DataConstraint,
  PropertyTypeDataConstraints,
  PropertyTypeDataConstraints_array,
  PropertyTypeDataConstraints_boolean,
  PropertyTypeDataConstraints_date,
  PropertyTypeDataConstraints_decimal,
  PropertyTypeDataConstraints_double,
  PropertyTypeDataConstraints_float,
  PropertyTypeDataConstraints_integer,
  PropertyTypeDataConstraints_long,
  PropertyTypeDataConstraints_short,
  PropertyTypeDataConstraints_string,
  PropertyTypeDataConstraints_struct,
  PropertyTypeDataConstraints_timestamp,
} from "@osdk/client.unstable";

import { convertDataConstraintToDataConstraints } from "./convertDataConstraintToDataConstraints.js";

function convertNestedArrayElementConstraint(
  constraint: DataConstraint,
): PropertyTypeDataConstraints {
  try {
    return dataConstraintToPropertyTypeDataConstraint(constraint);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Unsupported nested array element constraint (${constraint.type}): ${detail}`,
      { cause: error },
    );
  }
}

export function dataConstraintToPropertyTypeDataConstraint(
  dc: DataConstraint,
): PropertyTypeDataConstraints {
  switch (dc.type) {
    case "array":
      return {
        type: "array",
        array: {
          size: dc.array.size,
          elementsUnique: dc.array.elementsUnique,
          elementsConstraint:
            dc.array.elementsConstraint === undefined
              ? undefined
              : convertNestedArrayElementConstraint(
                  dc.array.elementsConstraint,
                ),
        },
      } satisfies PropertyTypeDataConstraints_array;

    case "boolean":
      return { ...dc } satisfies PropertyTypeDataConstraints_boolean;

    case "binary":
      throw new Error("Binary type constraints are not supported");

    case "date":
      return { ...dc } satisfies PropertyTypeDataConstraints_date;

    case "decimal":
      return { ...dc } satisfies PropertyTypeDataConstraints_decimal;

    case "double":
      return { ...dc } satisfies PropertyTypeDataConstraints_double;

    case "float":
      return { ...dc } satisfies PropertyTypeDataConstraints_float;

    case "integer":
      return { ...dc } satisfies PropertyTypeDataConstraints_integer;

    case "long":
      return { ...dc } satisfies PropertyTypeDataConstraints_long;

    case "map":
      throw new Error("Map type constraints are not supported");

    case "nullable":
      throw new Error("Nullable constraints are not supported");

    case "short":
      return { ...dc } satisfies PropertyTypeDataConstraints_short;

    case "string":
      return { ...dc } satisfies PropertyTypeDataConstraints_string;

    case "struct":
      return {
        type: "struct",
        struct: {
          elementConstraints: Object.fromEntries(
            Object.entries(dc.struct.elementConstraints).map(
              ([field, constraint]) => [
                field,
                convertDataConstraintToDataConstraints(constraint),
              ],
            ),
          ),
        },
      } satisfies PropertyTypeDataConstraints_struct;

    case "structV2":
      throw new Error("StructV2 constraints are not supported");

    case "timestamp":
      return { ...dc } satisfies PropertyTypeDataConstraints_timestamp;

    default: {
      const exhaustiveCheck: never = dc;
      throw new Error(
        `Unknown DataConstraint type: ${String(exhaustiveCheck)}`,
      );
    }
  }
}
