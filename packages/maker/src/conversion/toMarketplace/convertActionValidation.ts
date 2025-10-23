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
  OntologyIrActionValidation,
  ParameterRequiredConfiguration,
} from "@osdk/client.unstable";
import type { ActionParameterRequirementConstraint } from "../../api/action/ActionParameterConfiguration.js";
import type { ActionType } from "../../api/action/ActionType.js";
import {
  extractAllowedValues,
  renderHintFromBaseType,
} from "../../api/defineOntology.js";
import { convertActionParameterConditionalOverride } from "./convertActionParameterConditionalOverride.js";
import { convertActionVisibility } from "./convertActionVisibility.js";
import { convertSectionConditionalOverride } from "./convertSectionConditionalOverride.js";

export function convertActionValidation(
  action: ActionType,
): OntologyIrActionValidation {
  return {
    actionTypeLevelValidation: {
      rules: Object.fromEntries(
        (action.validation
          ?? [{
            condition: { type: "true", true: {} },
            displayMetadata: { failureMessage: "", typeClasses: [] },
          }]).map((rule, idx) => [idx, rule]),
      ),
    },
    parameterValidations: Object.fromEntries(
      (action.parameters ?? []).map(p => {
        return [
          p.id,
          {
            defaultValidation: {
              display: {
                renderHint: renderHintFromBaseType(p),
                visibility: convertActionVisibility(
                  p.validation.defaultVisibility,
                ),
                ...p.defaultValue
                  && { prefill: p.defaultValue },
              },
              validation: {
                allowedValues: extractAllowedValues(
                  p.validation.allowedValues!,
                ),
                required: convertParameterRequirementConstraint(
                  p.validation.required!,
                ),
              },
            },
            conditionalOverrides: p.validation.conditionalOverrides?.map(
              (override) =>
                convertActionParameterConditionalOverride(
                  override,
                  p.validation,
                  action.parameters,
                ),
            ) ?? [],
          },
        ];
      }),
    ),
    sectionValidations: {
      ...Object.fromEntries(
        Object.entries(action.sections ?? {}).map((
          [sectionId, section],
        ) => [
          section.id,
          {
            defaultDisplayMetadata: section.defaultVisibility === "hidden"
              ? {
                visibility: {
                  type: "hidden",
                  hidden: {},
                },
              }
              : {
                visibility: {
                  type: "visible",
                  visible: {},
                },
              },
            conditionalOverrides: section.conditionalOverrides?.map(
              (override) =>
                convertSectionConditionalOverride(
                  override,
                  section.defaultVisibility ?? "visible",
                  action.parameters,
                ),
            ) ?? [],
          },
        ]),
      ),
    },
  };
}

function convertParameterRequirementConstraint(
  required: ActionParameterRequirementConstraint,
): ParameterRequiredConfiguration {
  if (typeof required === "boolean") {
    return required
      ? { type: "required", required: {} }
      : { type: "notRequired", notRequired: {} };
  }
  const { min, max } = required.listLength;
  return {
    type: "listLengthValidation",
    listLengthValidation: { minLength: min, maxLength: max },
  };
}
