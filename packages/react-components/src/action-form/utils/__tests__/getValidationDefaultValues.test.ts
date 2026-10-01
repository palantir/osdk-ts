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

import { getValidationDefaultValues } from "../getValidationDefaultValues.js";

describe("getValidationDefaultValues", () => {
  it("returns scalar defaults that match their parameter types", () => {
    expect(
      getValidationDefaultValues(
        {
          text: { defaultValue: "Ada" },
          count: { defaultValue: 42 },
          enabled: { defaultValue: true },
        },
        {
          text: { type: "string" },
          count: { type: "integer" },
          enabled: { type: "boolean" },
        },
      ),
    ).toEqual({ text: "Ada", count: 42, enabled: true });
  });

  it("ignores mismatched, unsupported, and unknown parameter defaults", () => {
    expect(
      getValidationDefaultValues(
        {
          objectValue: { defaultValue: { value: "object" } },
          arrayValue: { defaultValue: ["array"] },
          occurredAt: { defaultValue: "2026-08-06T12:00:00Z" },
          employee: { defaultValue: "ri.employee.1" },
          unknown: { defaultValue: "unknown" },
        },
        {
          objectValue: { type: "string" },
          arrayValue: { type: "string" },
          occurredAt: { type: "timestamp" },
          employee: { type: { type: "object", object: "Employee" } },
        },
      ),
    ).toEqual({});
  });
});
