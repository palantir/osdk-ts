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

import type { OntologyIrInterfaceActionTypeEditsValidationConditionSubject } from "@osdk/client.unstable";

export interface InterfaceActionTypeEditsValidationDefinition {
  condition: InterfaceActionTypeEditsValidationConditionDefinition;
}

export type InterfaceActionTypeEditsValidationConditionDefinition =
  | { type: "entry"; entry: InterfaceActionTypeEditsValidationEntryDefinition }
  | {
      type: "and";
      and: {
        conditions: InterfaceActionTypeEditsValidationConditionDefinition[];
      };
    };

export interface InterfaceActionTypeEditsValidationEntryDefinition {
  /**
   * An ID that is not blank and is unique within this action type constraint, including nested conditions.
   * Keep this ID when editing or moving the rule so installations recognize the same entry.
   */
  id: string;
  subject: OntologyIrInterfaceActionTypeEditsValidationConditionSubject;
}
