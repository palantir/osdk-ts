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

import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { ActionTypeArchetypeId } from "./ActionTypeArchetypeId.js";
import type { FunctionArchetypeId } from "./FunctionArchetypeId.js";
import type { LinkTypeArchetypeId } from "./LinkTypeArchetypeId.js";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.js";
import type { WorkflowActionType } from "./WorkflowActionType.js";
import type { WorkflowArchetypeReference } from "./WorkflowArchetypeReference.js";
import type { WorkflowDescription } from "./WorkflowDescription.js";
import type { WorkflowDisplayName } from "./WorkflowDisplayName.js";
import type { WorkflowFunction } from "./WorkflowFunction.js";
import type { WorkflowRid } from "./WorkflowRid.js";
import type { WorkflowVerticalReference } from "./WorkflowVerticalReference.js";

/**
 * A workflow represents how a subset of the ontology components interact with each other to contruct an end-to-end
 * functioning paradigm.
 */
export interface Workflow {
  rid: WorkflowRid;
  displayName: WorkflowDisplayName;
  description: WorkflowDescription;
  workflowArchetypeReference: WorkflowArchetypeReference;
  verticalReference: WorkflowVerticalReference | undefined;
  objectTypes: Record<ObjectTypeArchetypeId, ObjectTypeRid>;
  linkTypes: Record<LinkTypeArchetypeId, LinkTypeRid>;
  actionsTypes: Record<ActionTypeArchetypeId, WorkflowActionType>;
  functions: Record<FunctionArchetypeId, WorkflowFunction>;
  redacted: boolean | undefined;
}
