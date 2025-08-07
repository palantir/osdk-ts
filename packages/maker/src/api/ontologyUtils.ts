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
  OntologyIrCondition,
  OntologyIrConditionalOverride,
  OntologyIrFormContent,
  OntologyIrLogicRuleValue,
  OntologyIrParameterValidationBlockOverride,
  OntologyIrSectionConditionalOverride,
  ParameterVisibility,
} from "@osdk/client.unstable";

import { randomUUID } from "node:crypto";
import type {
  ActionParameterConditionalOverride,
  ActionParameterValidation,
  ActionType,
  ConditionDefinition,
  MappingValue,
  SectionConditionalOverride,
} from "./types.js";

export function convertActionVisibility(
  visibility: "editable" | "disabled" | "hidden" | undefined,
): ParameterVisibility {
  switch (visibility) {
    case "editable":
      return {
        type: "editable",
        editable: {},
      };
    case "disabled":
      return {
        type: "disabled",
        disabled: {},
      };
    case "hidden":
      return {
        type: "hidden",
        hidden: {},
      };
    default:
      return {
        type: "editable",
        editable: {},
      };
  }
}

export function convertActionParameterConditionalOverride(
  override: ActionParameterConditionalOverride,
  validation: ActionParameterValidation,
): OntologyIrConditionalOverride {
  let parameterBlockOverride: OntologyIrParameterValidationBlockOverride;
  switch (override.type) {
    case "required":
      parameterBlockOverride = {
        type: "parameterRequired",
        parameterRequired: {
          required: validation.required
            ? {
              type: "notRequired",
              notRequired: {},
            }
            : {
              type: "required",
              required: {},
            },
        },
      };
      break;
    case "visibility":
      parameterBlockOverride = {
        type: "visibility",
        visibility: {
          visibility: validation.defaultVisibility === "editable"
            ? {
              type: "hidden",
              hidden: {},
            }
            : {
              type: "editable",
              editable: {},
            },
        },
      };
      break;
    case "disabled":
      parameterBlockOverride = {
        type: "visibility",
        visibility: {
          visibility: validation.defaultVisibility === "editable"
            ? {
              type: "disabled",
              disabled: {},
            }
            : {
              type: "editable",
              editable: {},
            },
        },
      };
      break;
    default:
      throw new Error(`Unknown parameter override type`);
  }
  return {
    condition: convertConditionDefinition(override.condition),
    parameterBlockOverrides: [parameterBlockOverride],
  };
}

export function convertSectionConditionalOverride(
  override: SectionConditionalOverride,
  defaultVisibility: "visible" | "hidden",
): OntologyIrSectionConditionalOverride {
  return {
    condition: convertConditionDefinition(override.condition),
    sectionBlockOverrides: [
      {
        type: "visibility",
        visibility: {
          visibility: defaultVisibility === "visible"
            ? {
              type: "hidden",
              hidden: {},
            }
            : {
              type: "visible",
              visible: {},
            },
        },
      },
    ],
  };
}

export function convertConditionDefinition(
  condition: ConditionDefinition,
): OntologyIrCondition {
  switch (condition.type) {
    case "and":
      if ("conditions" in condition) {
        return {
          type: "and",
          and: {
            conditions: condition.conditions.map(c =>
              convertConditionDefinition(c)
            ),
          },
        };
      } else {
        return condition;
      }
    case "or":
      if ("conditions" in condition) {
        return {
          type: "or",
          or: {
            conditions: condition.conditions.map(c =>
              convertConditionDefinition(c)
            ),
          },
        };
      } else {
        return condition;
      }
    case "group":
      return {
        type: "comparison",
        comparison: {
          operator: "INTERSECTS",
          left: {
            type: "userProperty",
            userProperty: {
              userId: {
                type: "currentUser",
                currentUser: {},
              },
              propertyValue: {
                type: "groupIds",
                groupIds: {},
              },
            },
          },
          right: {
            type: "staticValue",
            staticValue: {
              type: "stringList",
              stringList: {
                strings: [
                  condition.name,
                ],
              },
            },
          },
        },
      };
    case "parameter":
      return {
        type: "comparison",
        comparison: {
          operator: "EQUALS",
          left: {
            type: "parameterId",
            parameterId: condition.parameterId,
          },
          right: condition.matches,
        },
      };
    default:
      return condition;
  }
}

export function getFormContentOrdering(
  action: ActionType,
  parameterOrdering: string[],
): OntologyIrFormContent[] {
  if (!action.sections) return [];
  const parametersToSection = Object.fromEntries(
    Object.entries(action.sections).flatMap(([sectionId, section]) =>
      section.parameters.map(param => [param, sectionId])
    ),
  );
  const seenIds = new Set<string>();
  const formContentOrdering: OntologyIrFormContent[] = [];
  parameterOrdering.forEach(param => {
    if (
      param in parametersToSection
      && !(seenIds.has(parametersToSection[param]))
    ) {
      formContentOrdering.push({
        type: "sectionId",
        sectionId: parametersToSection[param],
      });
      seenIds.add(parametersToSection[param]);
    } else if (!(param in parametersToSection)) {
      formContentOrdering.push({
        type: "parameterId",
        parameterId: param,
      });
      seenIds.add(param);
    }
  });
  return formContentOrdering;
}

export function convertMappingValue(
  value: MappingValue,
): OntologyIrLogicRuleValue {
  switch (value.type) {
    case "uuid":
      return {
        type: "uniqueIdentifier",
        uniqueIdentifier: {
          linkId: value.linkId ?? randomUUID(),
        },
      };
    case "currentTime":
      return {
        type: "currentTime",
        currentTime: {},
      };
    case "currentUser":
      return {
        type: "currentUser",
        currentUser: {},
      };
    case "uniqueIdentifier":
      return {
        type: "uniqueIdentifier",
        uniqueIdentifier: {
          linkId: value.uniqueIdentifier.linkId ?? randomUUID(),
        },
      };
    default:
      return value;
  }
}
