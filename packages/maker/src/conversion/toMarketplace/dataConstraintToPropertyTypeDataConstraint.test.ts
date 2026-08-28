/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { DataConstraint } from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";

import { dataConstraintToPropertyTypeDataConstraint } from "./dataConstraintToPropertyTypeDataConstraint.js";

const nestedStringArray: DataConstraint = {
  type: "array",
  array: {
    size: { minSize: 1, maxSize: 3 },
    elementsUnique: false,
    elementsConstraint: {
      type: "array",
      array: {
        size: undefined,
        elementsUnique: true,
        elementsConstraint: {
          type: "string",
          string: {
            type: "oneOf",
            oneOf: { values: ["alpha", "beta"], useIgnoreCase: false },
          },
        },
      },
    },
  },
};

const defenseLikeArrayOfStruct: DataConstraint = {
  type: "array",
  array: {
    size: undefined,
    elementsUnique: undefined,
    elementsConstraint: {
      type: "structV2",
      structV2: {
        elementConstraints: {
          heading: {
            rid: "ri.value-type.main.value-type.heading",
            versionId: "1.0.0",
          },
        },
      },
    },
  },
};

describe(dataConstraintToPropertyTypeDataConstraint, () => {
  it("recursively converts supported nested array element constraints", () => {
    expect(
      dataConstraintToPropertyTypeDataConstraint(nestedStringArray),
    ).toEqual({
      type: "array",
      array: {
        size: { minSize: 1, maxSize: 3 },
        elementsUnique: false,
        elementsConstraint: {
          type: "array",
          array: {
            size: undefined,
            elementsUnique: true,
            elementsConstraint: {
              type: "string",
              string: {
                type: "oneOf",
                oneOf: {
                  values: ["alpha", "beta"],
                  useIgnoreCase: false,
                },
              },
            },
          },
        },
      },
    });
  });

  it("rejects a Defense-like nested structV2 instead of emitting an invalid payload", () => {
    expect(() =>
      dataConstraintToPropertyTypeDataConstraint(defenseLikeArrayOfStruct),
    ).toThrowError(
      "Unsupported nested array element constraint (structV2): StructV2 constraints are not supported",
    );
  });

  it.each(["binary", "map", "nullable"] as const)(
    "rejects unsupported nested %s constraints clearly",
    (type) => {
      const nestedConstraint: DataConstraint =
        type === "binary"
          ? {
              type,
              binary: { size: { minSize: 0, maxSize: 4 } },
            }
          : type === "map"
            ? {
                type,
                map: {
                  keyTypeDataConstraints: [],
                  valueTypeDataConstraints: [],
                  uniqueValues: undefined,
                },
              }
            : { type, nullable: { option: "NULLABLE" } };
      const arrayConstraint: DataConstraint = {
        type: "array",
        array: {
          size: undefined,
          elementsUnique: undefined,
          elementsConstraint: nestedConstraint,
        },
      };

      expect(() =>
        dataConstraintToPropertyTypeDataConstraint(arrayConstraint),
      ).toThrowError(`Unsupported nested array element constraint (${type})`);
    },
  );
});
