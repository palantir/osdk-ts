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

import type { RelationCardinality } from "../../api/RelationCardinality.js";
import type { LinkTypeArchetypeDescription } from "./LinkTypeArchetypeDescription.js";
import type { LinkTypeArchetypeDisplayName } from "./LinkTypeArchetypeDisplayName.js";
import type { LinkTypeArchetypeId } from "./LinkTypeArchetypeId.js";
import type { ObjectTypeArchetypeId } from "./ObjectTypeArchetypeId.js";

/**
 * This is used in `WorkflowArchetype` to represent an identifier to which an `LinkType` will be associated to in a `Workflow` definition.
 */
export interface LinkTypeArchetype {
  id: LinkTypeArchetypeId;
  displayName: LinkTypeArchetypeDisplayName;
  description: LinkTypeArchetypeDescription;
  fromObjectType: ObjectTypeArchetypeId;
  toObjectType: ObjectTypeArchetypeId;
  relationCardinality: RelationCardinality | undefined;
  requiredIfObjectTypeArchetypesDefined: boolean;
}
