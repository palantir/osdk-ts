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
  AllowedStructFieldValues,
  OntologyIrStructFieldBaseParameterType,
  ParameterRequiredConfiguration,
  StructFieldConditionalOverride,
  StructFieldConditionalValidationBlock,
  StructFieldValidationBlockOverride,
} from "@osdk/client.unstable";
import type {
  ActionParameter,
  ActionParameterAllowedValues,
  ActionParameterRequirementConstraint,
  ActionType,
  StructFieldValidationConfiguration,
} from "@osdk/maker";
import { extractAllowedValuesFromActionParameterType } from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";
import {
  extractAllowedValues,
  renderHintFromActionParameterType,
  renderHintFromBaseType,
} from "./convertActionHelpers.js";
import { convertActionParameterConditionalOverride } from "./convertActionParameterConditionalOverride.js";
import { convertActionVisibility } from "./convertActionVisibility.js";
import { convertConditionDefinition } from "./convertConditionDefinition.js";
import { convertSectionConditionalOverride } from "./convertSectionConditionalOverride.js";
import {
  getStructFieldActionParameterType,
  getStructFieldTypes,
} from "./structActionParameterUtils.js";

const STRUCT_FIELD_TYPES_SUPPORTING_ONE_OF: ReadonlySet<
  OntologyIrStructFieldBaseParameterType["type"]
> = new Set([
  "boolean",
  "integer",
  "long",
  "double",
  "string",
  "date",
  "timestamp",
]);

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
        ridGenerator
          .getGroupIds()
          .put(ReadableIdGenerator.getForGroup(condition.name), condition.name);
      }
      break;

    case "comparison":
      // Converted format (action-level validations)
      // Check if this is a group comparison by looking at the left side
      if (
        condition.comparison?.left?.type === "userProperty" &&
        condition.comparison?.left?.userProperty?.propertyValue?.type ===
          "groupIds"
      ) {
        // Extract group names from the right side
        const strings =
          condition.comparison?.right?.staticValue?.stringList?.strings;
        if (Array.isArray(strings)) {
          strings.forEach((groupName: string) => {
            ridGenerator
              .getGroupIds()
              .put(ReadableIdGenerator.getForGroup(groupName), groupName);
          });
        }
      }
      break;

    case "and":
    case "or":
      // Recursively process nested conditions
      if (condition.conditions) {
        condition.conditions.forEach((c: any) =>
          registerGroupsFromCondition(c, ridGenerator),
        );
      }
      // Handle converted and/or format
      if (condition.and?.conditions) {
        condition.and.conditions.forEach((c: any) =>
          registerGroupsFromCondition(c, ridGenerator),
        );
      }
      if (condition.or?.conditions) {
        condition.or.conditions.forEach((c: any) =>
          registerGroupsFromCondition(c, ridGenerator),
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
  const validationRules = action.validation ?? [
    {
      condition: { type: "true", true: {} },
      displayMetadata: { failureMessage: "", typeClasses: [] },
    },
  ];

  const ruleRids = validationRules.map((_, idx) =>
    ridGenerator.generateValidationRuleRid(action.apiName, idx),
  );

  // Register groups from action-level validation conditions
  validationRules.forEach((rule) => {
    registerGroupsFromCondition(rule.condition, ridGenerator);
  });

  // Register groups from parameter conditional overrides
  (action.parameters ?? []).forEach((p) => {
    p.validation.conditionalOverrides?.forEach((override) => {
      registerGroupsFromCondition(override.condition, ridGenerator);
    });
    Object.values(p.validation.structFieldValidations ?? {}).forEach(
      (structFieldValidation) => {
        structFieldValidation.conditionalOverrides?.forEach((override) => {
          registerGroupsFromCondition(override.condition, ridGenerator);
        });
      },
    );
  });

  // Register groups from section conditional overrides
  Object.values(action.sections ?? {}).forEach((section) => {
    section.conditionalOverrides?.forEach((override) => {
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
      (action.parameters ?? []).map((p) => {
        return [
          p.id,
          {
            defaultValidation: {
              display: {
                renderHint:
                  p.renderHint ?? renderHintFromBaseType(p, p.validation),
                visibility: convertActionVisibility(
                  p.validation.defaultVisibility,
                ),
                ...(p.defaultValue && { prefill: p.defaultValue }),
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
            conditionalOverrides:
              p.validation.conditionalOverrides?.map((override) =>
                convertActionParameterConditionalOverride(
                  override,
                  p.validation,
                  ridGenerator,
                  action.parameters,
                ),
              ) ?? [],
            structFieldValidations: convertStructFieldValidations(
              p,
              ridGenerator,
              action.parameters,
            ),
          },
        ];
      }),
    ),
    sectionValidations: {
      ...Object.fromEntries(
        Object.entries(action.sections ?? {}).map(([sectionId, section]) => [
          section.id,
          {
            defaultDisplayMetadata:
              section.defaultVisibility === "hidden"
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
            conditionalOverrides:
              section.conditionalOverrides?.map((override) =>
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

function convertStructFieldValidations(
  parameter: ActionParameter,
  ridGenerator: OntologyRidGenerator,
  actionParameters?: ActionParameter[],
): Record<string, StructFieldConditionalValidationBlock> {
  const configuredValidations =
    parameter.validation.structFieldValidations ?? {};
  const structFieldTypes = getStructFieldTypes(parameter);
  if (structFieldTypes === undefined) {
    if (Object.keys(configuredValidations).length > 0) {
      throw new Error(
        `Parameter ${parameter.id} defines struct field validations but is not a struct parameter`,
      );
    }
    return {};
  }
  validateStructParameterConfiguration(parameter);

  for (const fieldApiName of Object.keys(configuredValidations)) {
    if (structFieldTypes[fieldApiName] === undefined) {
      throw new Error(
        `Struct field validation ${fieldApiName} does not match a field on parameter ${parameter.id}`,
      );
    }
  }

  return Object.fromEntries(
    Object.entries(structFieldTypes).map(([fieldApiName, fieldType]) => {
      const configuration = configuredValidations[fieldApiName] ?? {};
      const actionParameterType = getStructFieldActionParameterType(fieldType);

      const allowedValues =
        configuration.allowedValues ??
        extractAllowedValuesFromActionParameterType(actionParameterType);
      validateStructFieldAllowedValues(
        parameter.id,
        fieldApiName,
        fieldType,
        allowedValues,
      );
      return [
        fieldApiName,
        {
          conditionalOverrides:
            configuration.conditionalOverrides?.map((override) =>
              convertStructFieldConditionalOverride(
                override,
                configuration,
                parameter.id,
                fieldApiName,
                fieldType,
                ridGenerator,
                actionParameters,
              ),
            ) ?? [],
          defaultValidation: {
            display: {
              renderHint:
                configuration.renderHint ??
                (allowedValues.type === "oneOf" || fieldType.type === "boolean"
                  ? { type: "dropdown", dropdown: {} }
                  : renderHintFromActionParameterType(
                      actionParameterType,
                      allowedValues,
                      fieldApiName,
                    )),
              visibility: convertActionVisibility(
                configuration.defaultVisibility,
              ),
            },
            validation: {
              allowedValues: extractAllowedStructFieldValues(
                allowedValues,
                ridGenerator,
              ),
              required: convertParameterRequirementConstraint(
                configuration.required ?? false,
              ),
            },
          },
        },
      ];
    }),
  );
}

function validateStructParameterConfiguration(
  parameter: ActionParameter,
): void {
  if (parameter.validation.allowedValues?.type !== "struct") {
    throw new Error(
      `Struct parameter ${parameter.id} must use struct allowed values`,
    );
  }
  if (parameter.defaultValue !== undefined) {
    throw new Error(
      `Struct parameter ${parameter.id} cannot define a top-level default value; configure prefills on individual struct fields instead`,
    );
  }
  if (
    parameter.validation.conditionalOverrides?.some(
      (override) => override.type === "defaultValue",
    )
  ) {
    throw new Error(
      `Struct parameter ${parameter.id} cannot define a top-level default value override; configure prefills on individual struct fields instead`,
    );
  }
}

function validateStructFieldAllowedValues(
  parameterId: string,
  fieldApiName: string,
  fieldType: OntologyIrStructFieldBaseParameterType,
  allowedValues: ActionParameterAllowedValues,
): void {
  const inferredAllowedValues = extractAllowedValuesFromActionParameterType(
    getStructFieldActionParameterType(fieldType),
  );
  const isCompatible =
    allowedValues.type === inferredAllowedValues.type ||
    (allowedValues.type === "oneOf" &&
      STRUCT_FIELD_TYPES_SUPPORTING_ONE_OF.has(fieldType.type));
  if (!isCompatible) {
    throw new Error(
      `Allowed values ${allowedValues.type} are not compatible with struct field ${parameterId}.${fieldApiName} of type ${fieldType.type}`,
    );
  }
}

function extractAllowedStructFieldValues(
  allowedValues: ActionParameterAllowedValues,
  ridGenerator: OntologyRidGenerator,
): AllowedStructFieldValues {
  const converted = extractAllowedValues(allowedValues, ridGenerator);
  switch (converted.type) {
    case "oneOf":
    case "range":
    case "text":
    case "datetime":
    case "boolean":
    case "geohash":
    case "geoshape":
    case "objectQuery":
      return converted as unknown as AllowedStructFieldValues;
    default:
      throw new Error(
        `Allowed values ${converted.type} are not supported for struct fields`,
      );
  }
}

function convertStructFieldConditionalOverride(
  override: NonNullable<
    StructFieldValidationConfiguration["conditionalOverrides"]
  >[number],
  configuration: StructFieldValidationConfiguration,
  parameterId: string,
  fieldApiName: string,
  fieldType: OntologyIrStructFieldBaseParameterType,
  ridGenerator: OntologyRidGenerator,
  actionParameters?: ActionParameter[],
): StructFieldConditionalOverride {
  let structFieldBlockOverride: StructFieldValidationBlockOverride;
  switch (override.type) {
    case "required":
      structFieldBlockOverride = {
        type: "parameterRequired",
        parameterRequired: {
          required: convertParameterRequirementConstraint(
            configuration.required !== true,
          ),
        },
      };
      break;
    case "visibility":
    case "disabled":
      structFieldBlockOverride = {
        type: "visibility",
        visibility: {
          visibility: convertActionVisibility(
            override.then ??
              (configuration.defaultVisibility === "editable"
                ? override.type === "disabled"
                  ? "disabled"
                  : "hidden"
                : "editable"),
          ),
        },
      };
      break;
    case "constraint":
      validateStructFieldAllowedValues(
        parameterId,
        fieldApiName,
        fieldType,
        override.constraint,
      );
      structFieldBlockOverride = {
        type: "allowedValues",
        allowedValues: {
          allowedValues: extractAllowedStructFieldValues(
            override.constraint,
            ridGenerator,
          ),
        },
      };
      break;
  }
  return {
    condition: convertConditionDefinition(override.condition, actionParameters),
    structFieldBlockOverrides: [structFieldBlockOverride],
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
