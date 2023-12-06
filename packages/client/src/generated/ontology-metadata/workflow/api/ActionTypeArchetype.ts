/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeArchetypeDescription } from "./ActionTypeArchetypeDescription.js";
import type { ActionTypeArchetypeDisplayName } from "./ActionTypeArchetypeDisplayName.js";
import type { ActionTypeArchetypeId } from "./ActionTypeArchetypeId.js";
import type { ActionTypeParameterArchetype } from "./ActionTypeParameterArchetype.js";
import type { ActionTypeParameterArchetypeId } from "./ActionTypeParameterArchetypeId.js";

/**
 * This is used in `WorkflowArchetype` to represent an identifier to which an `ActionType` will be associated to in a `Workflow` definition.
 */
export interface ActionTypeArchetype {
  id: ActionTypeArchetypeId;
  displayName: ActionTypeArchetypeDisplayName;
  description: ActionTypeArchetypeDescription;
  parameters: Record<
    ActionTypeParameterArchetypeId,
    ActionTypeParameterArchetype
  >;
  required: boolean;
}
