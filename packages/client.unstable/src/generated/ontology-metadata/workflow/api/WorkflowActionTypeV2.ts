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

import type { ActionTypeIdentifier } from "../../api/ActionTypeIdentifier.js";
import type { ActionTypeParameterIdentifier } from "../../api/ActionTypeParameterIdentifier.js";
import type { ActionTypeParameterArchetypeId } from "./ActionTypeParameterArchetypeId.js";

/**
 * A `WorkflowActionTypeV2` is an instantiation of a `ActionTypeArchetypeDefinition`, providing a concrete `ActionTypeIdentifier`.
 * This represents a set of properties for referencing an ActionType in a `Workflow` definition.
 */
export interface WorkflowActionTypeV2 {
  identifier: ActionTypeIdentifier;
  parameters: Record<
    ActionTypeParameterArchetypeId,
    ActionTypeParameterIdentifier
  >;
}
