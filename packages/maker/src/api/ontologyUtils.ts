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
  OntologyIrParameterValidationBlockOverride,
} from "@osdk/client.unstable";

import type {
  ActionParameterConditionalOverride,
  ActionParameterValidation,
  ConditionDefinition,
} from "./types.js";


export function convertVisibility(
  visibility: "editable" | "disabled" | "hidden" | undefined,
): any {
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
    default:
      return condition;
  }
}

// export function convertGenericCondition(
//   condition: GenericCondition,
// ): OntologyIrCondition {
//   switch(condition.type) {
//     case "or":
//       return {
//         type: "or",
//         or: {
//           conditions: condition.conditions.map(c => convertGenericSubCondition(c)),
//         },
//       };
//     case "not":
//       invariant(condition.conditions.length === 1, "Not condition must have exactly one condition");
//       return {
//         type: "not",
//         not: {
//           condition: convertGenericSubCondition(condition.conditions[0]),
//         },
//       };
//     case undefined:
//     case "and":
//       return {
//         type: "and",
//         and: {
//           conditions: condition.conditions.map(c => convertGenericSubCondition(c)),
//         },
//       };
//     default:
//       throw new Error(`Condition type: ${condition.type} is not a top level condition (and, or, not)`);
//   }
// }

// function convertGenericSubCondition(
//   subCondition: GenericSubCondition,
// ): OntologyIrCondition {
//   switch (subCondition.type) {
//     case "group":
//       return {
//         type: "comparison",
//         comparison: {
//           operator: "INTERSECTS",
//           left: {
//             type: "userProperty",
//             userProperty: {
//               userId: {
//                 type: "currentUser",
//                 currentUser: {},
//               },
//               propertyValue: {
//                 type: "groupIds",
//                 groupIds: {},
//               },
//             },
//           },
//           right: {
//             type: "staticValue",
//             staticValue: {
//               type: "stringList",
//               stringList: {
//                 strings: [
//                   subCondition.name,
//                 ],
//               },
//             },
//           },
//         },
//       };
//     default:
//       return subCondition;
//   }
// }
