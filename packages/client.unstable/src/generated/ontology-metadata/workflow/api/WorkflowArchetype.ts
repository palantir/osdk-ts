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

import type { ActionTypeArchetype } from "./ActionTypeArchetype.js";
import type { FunctionArchetype } from "./FunctionArchetype.js";
import type { LinkTypeArchetype } from "./LinkTypeArchetype.js";
import type { ObjectTypeArchetype } from "./ObjectTypeArchetype.js";
import type { WorkflowArchetypeDescription } from "./WorkflowArchetypeDescription.js";
import type { WorkflowArchetypeDisplayName } from "./WorkflowArchetypeDisplayName.js";
import type { WorkflowArchetypeId } from "./WorkflowArchetypeId.js";
import type { WorkflowArchetypeVersion } from "./WorkflowArchetypeVersion.js";

/**
 * WorkflowArchetype represent a set of Ontology entities along with some metadata used to represent opiniated and repeatable workflow patterns.
 */
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
