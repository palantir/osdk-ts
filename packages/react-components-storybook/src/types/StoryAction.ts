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

import type { ActionDefinition } from "@osdk/api";

/**
 * ActionDefinition type for Storybook stories.
 *
 * Uses `interface extends` (not `type &`) so that __DefinitionMetadata
 * replaces rather than intersects the base type. This prevents
 * Record<any, Parameter<any>> from polluting keyof, which would cause
 * FieldValueType to resolve to `never`.
 */
interface ModifyEmployeeDef extends ActionDefinition<unknown> {
  __DefinitionMetadata: {
    signatures: unknown;
    parameters: {
      fullName: { type: "string" };
      employeeNumber: { type: "integer" };
      department: { type: "string" };
      isActive: { type: "boolean" };
      startDate: { type: "datetime" };
      employeeFile: { type: "attachment" };
    };
    type: "action";
    apiName: "modifyEmployee";
    status: "ACTIVE";
    rid: string;
  };
}

export const StoryAction: ModifyEmployeeDef = {
  type: "action",
  apiName: "modifyEmployee",
} as ModifyEmployeeDef;
