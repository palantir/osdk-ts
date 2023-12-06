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

import type { LinkTypeId } from "../../api/LinkTypeId.js";
import type { ObjectTypeId } from "../../api/ObjectTypeId.js";
import type { ActionTypeArchetypeId } from "./ActionTypeArchetypeId.js";
import type { FunctionArchetypeId } from "./FunctionArchetypeId.js";
import type { LinkTypeArchetypeId } from "./LinkTypeArchetypeId.js";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.js";
import type { WorkflowActionType } from "./WorkflowActionType.js";
import type { WorkflowActionTypeV2 } from "./WorkflowActionTypeV2.js";
import type { WorkflowArchetypeReference } from "./WorkflowArchetypeReference.js";
import type { WorkflowDescription } from "./WorkflowDescription.js";
import type { WorkflowDisplayName } from "./WorkflowDisplayName.js";
import type { WorkflowFunction } from "./WorkflowFunction.js";
import type { WorkflowVerticalReference } from "./WorkflowVerticalReference.js";

/**
 * A type to represent a `Workflow` in its create and update request. This holds all the properties that a `Workflow` has except `WorkflowRid`.
 */
export interface WorkflowModification {
  displayName: WorkflowDisplayName;
  description: WorkflowDescription;
  workflowArchetypeReference: WorkflowArchetypeReference;
  verticalReference: WorkflowVerticalReference | undefined;
  objectTypes: Record<ObjectTypeArchetypeId, ObjectTypeId>;
  linkTypes: Record<LinkTypeArchetypeId, LinkTypeId>;
  actionsTypes: Record<ActionTypeArchetypeId, WorkflowActionType>;
  actionsTypesV2: Record<ActionTypeArchetypeId, WorkflowActionTypeV2>;
  functions: Record<FunctionArchetypeId, WorkflowFunction>;
}
