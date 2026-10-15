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

import type { PropertyTypeDataConstraints } from "@osdk/client.unstable";
import type { AuthoringDataConstraint } from "@osdk/maker";

export function dataConstraintToPropertyTypeDataConstraint(
  dc: AuthoringDataConstraint,
): PropertyTypeDataConstraints {
  switch (dc.type) {
    case "array":
      return {
        type: "array",
        array: {
          ...dc.array,
          elementsConstraint:
            dc.array.elementsConstraint === undefined
              ? undefined
              : dataConstraintToPropertyTypeDataConstraint(
                  dc.array.elementsConstraint,
                ),
        },
      };

    case "boolean":
      return { ...dc };

    case "binary":
      throw new Error("Binary type constraints are not supported");

    case "date":
      return { ...dc };

    case "decimal":
      return { ...dc };

    case "double":
      return { ...dc };

    case "float":
      return { ...dc };

    case "integer":
      return { ...dc };

    case "long":
      return { ...dc };

    case "map":
      throw new Error("Map type constraints are not supported");

    case "nullable":
      throw new Error("Nullable constraints are not supported");

    case "short":
      return { ...dc };

    case "string":
      return { ...dc };

    case "struct":
      return {
        type: "struct",
        struct: {
          elementConstraints: Object.fromEntries(
            Object.entries(dc.struct.elementConstraints).map(
              ([field, constraint]) => [
                field,
                {
                  propertyTypeConstraints: [
                    {
                      constraints:
                        dataConstraintToPropertyTypeDataConstraint(constraint),
                    },
                  ],
                },
              ],
            ),
          ),
        },
      };

    case "structV2":
      return {
        type: "struct",
        struct: {
          elementConstraints: Object.fromEntries(
            Object.entries(dc.structV2.elementConstraints).map(
              ([field, valueType]) => [
                field,
                {
                  propertyTypeConstraints: valueType.constraints.map(
                    ({ constraint }) => ({
                      constraints: dataConstraintToPropertyTypeDataConstraint(
                        constraint.constraint,
                      ),
                      failureMessage: constraint.failureMessage,
                    }),
                  ),
                },
              ],
            ),
          ),
        },
      };

    case "timestamp":
      return { ...dc };

    default: {
      const exhaustiveCheck: never = dc;
      throw new Error(
        `Unknown DataConstraint: ${JSON.stringify(exhaustiveCheck)}`,
      );
    }
  }
}
