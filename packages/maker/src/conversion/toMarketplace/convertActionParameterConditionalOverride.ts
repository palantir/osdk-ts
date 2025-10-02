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
  OntologyIrConditionalOverride,
  OntologyIrParameterValidationBlockOverride,
} from "@osdk/client.unstable";
import type { ActionParameterValidation } from "../../api/action/ActionParameter.js";
import type { ActionParameterConditionalOverride } from "../../api/action/ActionParameterConditionalOverride.js";
import { extractAllowedValues } from "../../api/defineOntology.js";
import { convertConditionDefinition } from "./convertConditionDefinition.js";

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
    case "defaultValue":
      parameterBlockOverride = {
        type: "prefill",
        prefill: {
          prefill: override.defaultValue,
        },
      };
      break;
    case "constraint":
      parameterBlockOverride = {
        type: "allowedValues",
        allowedValues: {
          allowedValues: extractAllowedValues(override.constraint),
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
