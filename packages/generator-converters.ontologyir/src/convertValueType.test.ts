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

import { describe, expect, it } from "vitest";
import {
  convertValueType,
  type ResolvedValueType,
} from "./convertValueType.js";

const valueType: ResolvedValueType = {
  rid: "classification-rid",
  apiName: "classification",
  displayMetadata: {
    displayName: "Classification",
    description: "A classification",
  },
  status: { type: "active", active: {} },
  version: "1.0.0",
  baseType: { type: "string", string: {} },
  constraints: [],
};

describe("convertValueType", () => {
  it("converts named metadata and preserves multiple constraints", () => {
    const result = convertValueType({
      ...valueType,
      constraints: [
        {
          constraint: {
            failureMessage: undefined,
            constraint: {
              type: "string",
              string: {
                type: "oneOf",
                oneOf: { values: ["A", "B"], useIgnoreCase: false },
              },
            },
          },
        },
        {
          constraint: {
            failureMessage: undefined,
            constraint: {
              type: "string",
              string: { type: "length", length: { minSize: 1, maxSize: 10 } },
            },
          },
        },
      ],
    });
    expect(result).toEqual({
      apiName: "classification",
      rid: "classification-rid",
      displayName: "Classification",
      description: "A classification",
      status: "ACTIVE",
      version: "1.0.0",
      fieldType: { type: "string" },
      constraints: [{ type: "enum", options: ["A", "B"] }, {
        type: "length",
        minimumLength: 1,
        maximumLength: 10,
      }],
    });
  });

  it("converts array types and their element constraints", () => {
    const result = convertValueType({
      ...valueType,
      baseType: {
        type: "array",
        array: { elementType: { type: "boolean", boolean: {} } },
      },
      constraints: [{
        constraint: {
          failureMessage: undefined,
          constraint: {
            type: "array",
            array: {
              size: { minSize: 1, maxSize: 3 },
              elementsUnique: false,
              elementsConstraint: {
                type: "boolean",
                boolean: {
                  allowedValues: ["TRUE_VALUE", "FALSE_VALUE", "NULL_VALUE"],
                },
              },
            },
          },
        },
      }],
    });
    expect(result.fieldType).toEqual({
      type: "array",
      subType: { type: "boolean" },
    });
    expect(result.constraints).toEqual([{
      type: "array",
      minimumSize: 1,
      maximumSize: 3,
      uniqueValues: false,
      valueConstraint: { type: "enum", options: [true, false, null] },
    }]);
  });

  it("converts numeric ranges and enum options", () => {
    const result = convertValueType({
      ...valueType,
      constraints: [
        {
          constraint: {
            failureMessage: undefined,
            constraint: {
              type: "integer",
              integer: { type: "range", range: { min: 0, max: 10 } },
            },
          },
        },
        {
          constraint: {
            failureMessage: undefined,
            constraint: {
              type: "string",
              string: {
                type: "oneOf",
                oneOf: { values: ["A"], useIgnoreCase: true },
              },
            },
          },
        },
      ],
    });
    expect(result.constraints).toEqual([{
      type: "range",
      minimumValue: 0,
      maximumValue: 10,
    }, {
      type: "enum",
      options: ["A"],
    }]);
  });
});
