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

import type { ActionValidationResponse } from "@osdk/api";
import { describe, expect, it } from "vitest";
import type { RendererFieldDefinition } from "../../FormFieldApi.js";
import { applyValidationResponseToFieldDefinitions } from "../applyValidationResponseToFieldDefinitions.js";

function textField(
  overrides?: Partial<
    Extract<RendererFieldDefinition, { fieldComponent: "TEXT_INPUT" }>
  >,
): RendererFieldDefinition {
  return {
    fieldKey: "name",
    fieldComponent: "TEXT_INPUT",
    fieldType: "string",
    label: "Name",
    fieldComponentProps: {},
    ...overrides,
  };
}

function numberField(): RendererFieldDefinition {
  return {
    fieldKey: "count",
    fieldComponent: "NUMBER_INPUT",
    fieldType: "integer",
    label: "Count",
    fieldComponentProps: {},
  };
}

describe("applyValidationResponseToFieldDefinitions", () => {
  it("overrides field required state from server validation", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          required: true,
          evaluatedConstraints: [],
        },
      },
    };

    const [result] = applyValidationResponseToFieldDefinitions(
      [textField({ isRequired: false })],
      response,
      { allowFieldComponentConversion: false },
    );

    expect(result?.isRequired).toBe(true);
  });

  it("converts generated fields with oneOf constraints to dropdowns", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{
            type: "oneOf",
            options: [
              { displayName: "Alice A.", value: "alice" },
              { displayName: "Bob B.", value: "bob" },
            ],
            otherValuesAllowed: false,
          }],
        },
      },
    };

    const [result] = applyValidationResponseToFieldDefinitions(
      [textField()],
      response,
      { allowFieldComponentConversion: true },
    );

    expect(result?.fieldComponent).toBe("DROPDOWN");
    if (result?.fieldComponent !== "DROPDOWN") {
      throw new Error("Expected dropdown field");
    }
    expect(result.fieldComponentProps.items).toEqual(["alice", "bob"]);
    expect(result.fieldComponentProps.itemToStringLabel?.("alice")).toBe(
      "Alice A.",
    );
  });

  it("does not convert custom non-select fields for oneOf constraints", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{
            type: "oneOf",
            options: [{ displayName: "Alice A.", value: "alice" }],
            otherValuesAllowed: false,
          }],
        },
      },
    };

    const [result] = applyValidationResponseToFieldDefinitions(
      [textField()],
      response,
      { allowFieldComponentConversion: false },
    );

    expect(result?.fieldComponent).toBe("TEXT_INPUT");
  });

  it("applies inclusive range constraints to number fields", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        count: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{
            type: "range",
            gte: 5,
            lte: 10,
          }],
        },
      },
    };

    const [result] = applyValidationResponseToFieldDefinitions(
      [numberField()],
      response,
      { allowFieldComponentConversion: false },
    );

    if (result?.fieldComponent !== "NUMBER_INPUT") {
      throw new Error("Expected number field");
    }
    expect(result.fieldComponentProps.min).toBe(5);
    expect(result.fieldComponentProps.max).toBe(10);
  });

  it("applies string length constraints to text fields", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{
            type: "stringLength",
            gte: 3,
            lte: 12,
          }],
        },
      },
    };

    const [result] = applyValidationResponseToFieldDefinitions(
      [textField()],
      response,
      { allowFieldComponentConversion: false },
    );

    if (result?.fieldComponent !== "TEXT_INPUT") {
      throw new Error("Expected text field");
    }
    expect(result.fieldComponentProps.minLength).toBe(3);
    expect(result.fieldComponentProps.maxLength).toBe(12);
  });

  it("adds regex validation from stringRegexMatch constraints", async () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: {
          result: "VALID",
          required: false,
          evaluatedConstraints: [{
            type: "stringRegexMatch",
            regex: "^[A-Z]+$",
            configuredFailureMessage: "Use uppercase letters",
          }],
        },
      },
    };

    const [result] = applyValidationResponseToFieldDefinitions(
      [textField()],
      response,
      { allowFieldComponentConversion: false },
    );

    expect(await result?.validate?.("abc")).toBe("Use uppercase letters");
    expect(await result?.validate?.("ABC")).toBeUndefined();
  });
});
