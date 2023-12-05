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

import type { LinkTypeRid } from "../../api/LinkTypeRid.mjs";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.mjs";
import type { ActionTypeArchetypeId } from "./ActionTypeArchetypeId.mjs";
import type { FunctionArchetypeId } from "./FunctionArchetypeId.mjs";
import type { LinkTypeArchetypeId } from "./LinkTypeArchetypeId.mjs";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.mjs";
import type { WorkflowActionType } from "./WorkflowActionType.mjs";
import type { WorkflowArchetypeReference } from "./WorkflowArchetypeReference.mjs";
import type { WorkflowDescription } from "./WorkflowDescription.mjs";
import type { WorkflowDisplayName } from "./WorkflowDisplayName.mjs";
import type { WorkflowFunction } from "./WorkflowFunction.mjs";
import type { WorkflowRid } from "./WorkflowRid.mjs";
import type { WorkflowVerticalReference } from "./WorkflowVerticalReference.mjs";

export interface Workflow {
  rid: WorkflowRid;
  displayName: WorkflowDisplayName;
  description: WorkflowDescription;
  workflowArchetypeReference: WorkflowArchetypeReference;
  verticalReference: WorkflowVerticalReference | undefined;
  objectTypes: Map<ObjectTypeArchetypeId, ObjectTypeRid>;
  linkTypes: Map<LinkTypeArchetypeId, LinkTypeRid>;
  actionsTypes: Map<ActionTypeArchetypeId, WorkflowActionType>;
  functions: Map<FunctionArchetypeId, WorkflowFunction>;
  redacted: boolean | undefined;
}
