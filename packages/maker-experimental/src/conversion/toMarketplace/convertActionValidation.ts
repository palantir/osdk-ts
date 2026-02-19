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
  ActionValidation,
  ParameterRequiredConfiguration,
} from "@osdk/client.unstable";
import type {
  ActionParameterRequirementConstraint,
  ActionType,
} from "@osdk/maker";
import {
  extractAllowedValues,
  renderHintFromBaseType,
} from "./convertActionHelpers.js";
import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";
import { convertActionParameterConditionalOverride } from "./convertActionParameterConditionalOverride.js";
import { convertActionVisibility } from "./convertActionVisibility.js";
import { convertSectionConditionalOverride } from "./convertSectionConditionalOverride.js";

// Helper function to recursively scan conditions and register groups
function registerGroupsFromCondition(
  condition: any,
  ridGenerator: OntologyRidGenerator,
): void {
  if (!condition) return;

  switch (condition.type) {
    case "group":
      // Original format (parameter/section conditional overrides)
      if (condition.name) {
        ridGenerator.getGroupIds().put(
          ReadableIdGenerator.getForGroup(condition.name),
          condition.name,
        );
      }
      break;

    case "comparison":
      // Converted format (action-level validations)
      // Check if this is a group comparison by looking at the left side
      if (
        condition.comparison?.left?.type === "userProperty" &&
        condition.comparison?.left?.userProperty?.propertyValue?.type === "groupIds"
      ) {
        // Extract group names from the right side
        const strings = condition.comparison?.right?.staticValue?.stringList?.strings;
        if (Array.isArray(strings)) {
          strings.forEach((groupName: string) => {
            ridGenerator.getGroupIds().put(
              ReadableIdGenerator.getForGroup(groupName),
              groupName,
            );
          });
        }
      }
      break;

    case "and":
    case "or":
      // Recursively process nested conditions
      if (condition.conditions) {
        condition.conditions.forEach((c: any) =>
          registerGroupsFromCondition(c, ridGenerator)
        );
      }
      // Handle converted and/or format
      if (condition.and?.conditions) {
        condition.and.conditions.forEach((c: any) =>
          registerGroupsFromCondition(c, ridGenerator)
        );
      }
      if (condition.or?.conditions) {
        condition.or.conditions.forEach((c: any) =>
          registerGroupsFromCondition(c, ridGenerator)
        );
      }
      break;

    // Other condition types don't have groups
  }
}

export function convertActionValidation(
  action: ActionType,
  ridGenerator: OntologyRidGenerator,
): ActionValidation {
  const validationRules = action.validation
    ?? [{
      condition: { type: "true", true: {} },
      displayMetadata: { failureMessage: "", typeClasses: [] },
    }];

  const ruleRids = validationRules.map((_, idx) =>
    ridGenerator.generateRid(`validation.rule.${action.apiName}.${idx}`)
  );

  // Register groups from action-level validation conditions
  validationRules.forEach(rule => {
    registerGroupsFromCondition(rule.condition, ridGenerator);
  });

  // Register groups from parameter conditional overrides
  (action.parameters ?? []).forEach(p => {
    p.validation.conditionalOverrides?.forEach(override => {
      registerGroupsFromCondition(override.condition, ridGenerator);
    });
  });

  // Register groups from section conditional overrides
  Object.values(action.sections ?? {}).forEach(section => {
    section.conditionalOverrides?.forEach(override => {
      registerGroupsFromCondition(override.condition, ridGenerator);
    });
  });

  return {
    actionTypeLevelValidation: {
      // TODO: Add proper ordering of validation rule RIDs
      ordering: ruleRids,
      rules: Object.fromEntries(
        validationRules.map((rule, idx) => [ruleRids[idx], rule]),
      ),
    },
    parameterValidations: Object.fromEntries(
      (action.parameters ?? []).map(p => {
        return [
          p.id,
          {
            defaultValidation: {
              display: {
                renderHint: p.renderHint
                  ?? renderHintFromBaseType(p, p.validation),
                visibility: convertActionVisibility(
                  p.validation.defaultVisibility,
                ),
                ...p.defaultValue
                  && { prefill: p.defaultValue },
              },
              validation: {
                allowedValues: extractAllowedValues(
                  p.validation.allowedValues!,
                  ridGenerator,
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
                  ridGenerator,
                  action.parameters,
                ),
            ) ?? [],
            structFieldValidations: {},
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
