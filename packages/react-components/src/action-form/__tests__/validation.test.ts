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
import { describe, expect, test } from "vitest";
import { extractFieldErrors, extractSubmissionError } from "../validation.js";

describe("extractFieldErrors", () => {
  test("returns empty for VALID response", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [],
      parameters: {
        name: { result: "VALID", evaluatedConstraints: [], required: true },
      },
    };

    expect(extractFieldErrors(response, new Set(["name"]))).toEqual({});
  });

  test("returns errors only for touched and INVALID fields", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        name: { result: "INVALID", evaluatedConstraints: [], required: true },
        email: { result: "INVALID", evaluatedConstraints: [], required: true },
        age: { result: "VALID", evaluatedConstraints: [], required: false },
      },
    };

    const touched = new Set(["name", "age"]);
    const errors = extractFieldErrors(response, touched);

    expect(errors).toEqual({ name: "This field is required" });
    expect(errors.email).toBeUndefined();
    expect(errors.age).toBeUndefined();
  });

  test("extracts configuredFailureMessage from stringRegexMatch", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        email: {
          result: "INVALID",
          evaluatedConstraints: [{
            type: "stringRegexMatch",
            regex: "^.+@.+$",
            configuredFailureMessage: "Please enter a valid email address",
          }],
          required: false,
        },
      },
    };

    const errors = extractFieldErrors(response, new Set(["email"]));
    expect(errors.email).toBe("Please enter a valid email address");
  });

  test("uses 'This field is required' for required params without constraints", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        name: { result: "INVALID", evaluatedConstraints: [], required: true },
      },
    };

    const errors = extractFieldErrors(response, new Set(["name"]));
    expect(errors.name).toBe("This field is required");
  });

  test("formats range constraint messages", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        age: {
          result: "INVALID",
          evaluatedConstraints: [{
            type: "range",
            gte: 0,
            lte: 150,
          }],
          required: false,
        },
      },
    };

    const errors = extractFieldErrors(response, new Set(["age"]));
    expect(errors.age).toBe(
      "Value must be at least 0 and Value must be at most 150",
    );
  });

  test("formats stringLength constraint messages", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        bio: {
          result: "INVALID",
          evaluatedConstraints: [{
            type: "stringLength",
            gte: 10,
            lte: 500,
          }],
          required: false,
        },
      },
    };

    const errors = extractFieldErrors(response, new Set(["bio"]));
    expect(errors.bio).toBe(
      "length must be at least 10 and length must be at most 500",
    );
  });

  test("returns 'Please select a valid option' for oneOf constraint", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        color: {
          result: "INVALID",
          evaluatedConstraints: [{
            type: "oneOf",
            options: [{ displayName: "Red", value: "red" }],
            otherValuesAllowed: false,
          }],
          required: false,
        },
      },
    };

    const errors = extractFieldErrors(response, new Set(["color"]));
    expect(errors.color).toBe("Please select a valid option");
  });

  test("falls back to 'Invalid value' when no specific message available", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [],
      parameters: {
        field: {
          result: "INVALID",
          evaluatedConstraints: [{ type: "unevaluable" }],
          required: false,
        },
      },
    };

    const errors = extractFieldErrors(response, new Set(["field"]));
    expect(errors.field).toBe("Invalid value");
  });
});

describe("extractSubmissionError", () => {
  test("returns undefined for undefined response", () => {
    expect(extractSubmissionError(undefined)).toBeUndefined();
  });

  test("returns undefined for VALID response", () => {
    const response: ActionValidationResponse = {
      result: "VALID",
      submissionCriteria: [{ result: "VALID" }],
      parameters: {},
    };

    expect(extractSubmissionError(response)).toBeUndefined();
  });

  test("returns failure message from submission criteria", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [{
        result: "INVALID",
        configuredFailureMessage: "Cannot modify locked records",
      }],
      parameters: {},
    };

    expect(extractSubmissionError(response)).toBe(
      "Cannot modify locked records",
    );
  });

  test("joins multiple failure messages with semicolon", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [
        {
          result: "INVALID",
          configuredFailureMessage: "Error one",
        },
        {
          result: "VALID",
        },
        {
          result: "INVALID",
          configuredFailureMessage: "Error two",
        },
      ],
      parameters: {},
    };

    expect(extractSubmissionError(response)).toBe("Error one; Error two");
  });

  test("uses default message when configuredFailureMessage is absent", () => {
    const response: ActionValidationResponse = {
      result: "INVALID",
      submissionCriteria: [{ result: "INVALID" }],
      parameters: {},
    };

    expect(extractSubmissionError(response)).toBe("Validation failed");
  });
});
