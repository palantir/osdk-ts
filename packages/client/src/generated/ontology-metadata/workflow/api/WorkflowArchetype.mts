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

import type { ActionTypeArchetype } from "./ActionTypeArchetype.mjs";
import type { FunctionArchetype } from "./FunctionArchetype.mjs";
import type { LinkTypeArchetype } from "./LinkTypeArchetype.mjs";
import type { ObjectTypeArchetype } from "./ObjectTypeArchetype.mjs";
import type { WorkflowArchetypeDescription } from "./WorkflowArchetypeDescription.mjs";
import type { WorkflowArchetypeDisplayName } from "./WorkflowArchetypeDisplayName.mjs";
import type { WorkflowArchetypeId } from "./WorkflowArchetypeId.mjs";
import type { WorkflowArchetypeVersion } from "./WorkflowArchetypeVersion.mjs";

export interface WorkflowArchetype {
  id: WorkflowArchetypeId;
  version: WorkflowArchetypeVersion;
  description: WorkflowArchetypeDescription;
  displayName: WorkflowArchetypeDisplayName;
  objectTypeArchetypes: Array<ObjectTypeArchetype>;
  linkTypeArchetypes: Array<LinkTypeArchetype>;
  actionTypeArchetypes: Array<ActionTypeArchetype>;
  functionArchetypes: Array<FunctionArchetype>;
}
