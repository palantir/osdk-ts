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

import type {
  DataConstraint,
  ValueTypeBlockData,
  ValueTypeDataConstraint,
} from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";
import { convertValueType } from "./convertValueType.js";

const metadata: ValueTypeBlockData["metadata"] = {
  apiName: "classification",
  displayMetadata: {
    displayName: "Classification",
    description: "A classification",
  },
  status: { type: "active", active: {} },
  baseType: { type: "string", string: {} },
};

function convertVersion(version: ValueTypeBlockData["versions"][number]) {
  return convertValueType("classification-rid", {
    metadata,
    versions: [version],
  });
}

function wrappedConstraint(value: DataConstraint): ValueTypeDataConstraint {
  return { constraint: { failureMessage: undefined, constraint: value } };
}

describe("convertValueType", () => {
  it("converts named metadata and preserves multiple constraints", () => {
    const result = convertVersion({
      version: "1.0.0",
      exampleValues: [],
      constraints: [
        wrappedConstraint({
          type: "string",
          string: {
            type: "oneOf",
            oneOf: { values: ["A", "B"], useIgnoreCase: false },
          },
        }),
        wrappedConstraint({
          type: "string",
          string: { type: "length", length: { minSize: 1, maxSize: 10 } },
        }),
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
    const result = convertVersion({
      version: "1.0.0",
      exampleValues: [],
      baseType: {
        type: "array",
        array: { elementType: { type: "boolean", boolean: {} } },
      },
      constraints: [wrappedConstraint({
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
      })],
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
    const result = convertVersion({
      version: "1.0.0",
      exampleValues: [],
      constraints: [
        wrappedConstraint({
          type: "integer",
          integer: { type: "range", range: { min: 0, max: 10 } },
        }),
        wrappedConstraint({
          type: "string",
          string: {
            type: "oneOf",
            oneOf: { values: ["A"], useIgnoreCase: true },
          },
        }),
      ],
    });
    expect(result.constraints).toEqual([{
      type: "range",
      minimumValue: 0,
      maximumValue: 10,
    }, { type: "enum", options: ["A"] }]);
  });
});
