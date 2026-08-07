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

import type { OntologyIrStructFieldConditionalValidationBlock } from "@osdk/client.unstable";
import { describe, expect, it } from "vitest";

import type { ActionParameterConfiguration } from "../../api/action/ActionParameterConfiguration.js";
import type { ActionType } from "../../api/action/ActionType.js";
import { OntologyEntityTypeEnum } from "../../api/common/OntologyEntityTypeEnum.js";
import { extractAllowedValues } from "../../api/defineOntology.js";
import { convertActionValidation } from "./convertActionValidation.js";

describe("convertActionValidation", () => {
  it("converts struct allowed values", () => {
    expect(extractAllowedValues({ type: "struct" })).toEqual({
      type: "struct",
      struct: {
        type: "delegateToAllowedStructFieldValues",
        delegateToAllowedStructFieldValues: {},
      },
    });
  });

  it("preserves struct field validations", () => {
    const parameterConfiguration = {
      allowedValues: { type: "struct" },
      required: { listLength: { min: 1 } },
      structFieldValidations: {
        label: structFieldValidation,
      },
    } satisfies ActionParameterConfiguration;
    const action = {
      __type: OntologyEntityTypeEnum.ACTION_TYPE,
      apiName: "create-structs",
      displayName: "Create structs",
      parameters: [
        {
          id: "items",
          displayName: "Items",
          type: {
            type: "structList",
            structList: {
              structFieldTypes: {
                label: { type: "string", string: {} },
              },
            },
          },
          validation: parameterConfiguration,
          renderHint: { type: "dropdown", dropdown: {} },
        },
      ],
      rules: [],
      status: "experimental",
    } satisfies ActionType;

    const validation =
      convertActionValidation(action).parameterValidations.items;
    expect(validation).toEqual({
      defaultValidation: {
        display: {
          renderHint: { type: "dropdown", dropdown: {} },
          visibility: { type: "editable", editable: {} },
        },
        validation: {
          allowedValues: {
            type: "struct",
            struct: {
              type: "delegateToAllowedStructFieldValues",
              delegateToAllowedStructFieldValues: {},
            },
          },
          required: {
            type: "listLengthValidation",
            listLengthValidation: { minLength: 1, maxLength: undefined },
          },
        },
      },
      conditionalOverrides: [],
      structFieldValidations: { label: structFieldValidation },
    });
    expect(validation.structFieldValidations).toEqual({
      label: structFieldValidation,
    });
  });
});

const structFieldValidation = {
  conditionalOverrides: [],
  defaultValidation: {
    display: {
      renderHint: { type: "textInput", textInput: {} },
      visibility: { type: "editable", editable: {} },
    },
    validation: {
      allowedValues: {
        type: "text",
        text: { type: "text", text: {} },
      },
      required: { type: "required", required: {} },
    },
  },
} satisfies OntologyIrStructFieldConditionalValidationBlock;
