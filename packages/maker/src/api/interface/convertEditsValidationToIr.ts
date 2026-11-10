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

import type {
  OntologyIrInterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeEditsValidationCondition,
} from "@osdk/client.unstable";
import { toUuid } from "@osdk/generator-converters.ontologyir";
import invariant from "tiny-invariant";

import type {
  InterfaceActionTypeEditsValidationConditionDefinition,
  InterfaceActionTypeEditsValidationDefinition,
} from "./InterfaceActionTypeEditsValidationDefinition.js";

export function convertEditsValidationToIr(
  validation: InterfaceActionTypeEditsValidationDefinition,
  interfaceApiName: string,
  constraintApiName: string,
): OntologyIrInterfaceActionTypeEditsValidation {
  const seenIds = new Set<string>();
  const location = `action type constraint "${constraintApiName}" on interface "${interfaceApiName}"`;

  function convertCondition(
    condition: InterfaceActionTypeEditsValidationConditionDefinition,
  ): OntologyIrInterfaceActionTypeEditsValidationCondition {
    switch (condition.type) {
      case "and":
        return {
          type: "and",
          and: { conditions: condition.and.conditions.map(convertCondition) },
        };
      case "entry": {
        const { id, subject } = condition.entry;
        invariant(
          typeof id === "string" && id.trim().length > 0,
          `Edit validation entry ID on ${location} must not be blank`,
        );
        invariant(
          !seenIds.has(id),
          `Duplicate edit validation entry ID "${id}" on ${location}`,
        );
        seenIds.add(id);
        const locator = toUuid(
          JSON.stringify([
            "interface-action-type-edits-validation-entry",
            interfaceApiName,
            constraintApiName,
            id,
          ]),
        );
        return {
          type: "entry",
          entry: {
            rid: `ri.ontology-metadata.temp.interface-action-type-edits-validation-entry.${locator}`,
            subject,
          },
        };
      }
      default: {
        const exhaustive: never = condition;
        throw new Error(
          `Unsupported edit validation variant: ${JSON.stringify(exhaustive)}`,
        );
      }
    }
  }

  return { condition: convertCondition(validation.condition) };
}
