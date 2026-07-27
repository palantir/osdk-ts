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
import { applyValidationConstraints } from "../applyValidationConstraints.js";

type ValidationParameters = ActionValidationResponse["parameters"];

function textInputField(fieldKey: string): RendererFieldDefinition {
  return {
    fieldKey,
    label: fieldKey,
    fieldComponent: "TEXT_INPUT",
    fieldComponentProps: {},
  } as RendererFieldDefinition;
}

function responseWith(
  parameters: ValidationParameters
): ActionValidationResponse {
  return {
    result: "VALID",
    submissionCriteria: [],
    parameters,
  };
}

function transformOne(
  def: RendererFieldDefinition,
  parameters: ValidationParameters
): RendererFieldDefinition {
  const [out] = applyValidationConstraints([def], responseWith(parameters));
  return out;
}

/**
 * True when the transformed field's constraint check accepts `value`. The
 * `validate` fn returns `undefined` for an accepted value and an error message
 * string for a rejected one.
 */
async function accepts(
  def: RendererFieldDefinition,
  value: unknown
): Promise<boolean> {
  return (await def.validate?.(value)) === undefined;
}

describe("applyValidationConstraints", () => {
  // This behavior is asserted at the transform level (not through the rendered
  // ActionForm) because no form control today produces object-shaped values:
  // an object-valued `oneOf` cannot be exercised through the UI, the same
  // situation as `arraySize`. So we pin the deep-equality contract directly on
  // the constraint check the transform installs.
  it("accepts a one-of object value equal by structure to an allowed option and rejects one matching no option", async () => {
    const field = transformOne(textInputField("assignee"), {
      assignee: {
        result: "VALID",
        required: false,
        evaluatedConstraints: [
          {
            type: "oneOf",
            options: [
              { value: { id: 1, name: "Ada" } },
              { value: { id: 2, name: "Alan" } },
            ],
            otherValuesAllowed: false,
          },
        ],
      },
    });

    // A distinct object instance that is deep-equal to an allowed option.
    expect(await accepts(field, { id: 1, name: "Ada" })).toBe(true);
    // An object that matches none of the allowed options.
    expect(await accepts(field, { id: 9, name: "Zed" })).toBe(false);
  });
});
