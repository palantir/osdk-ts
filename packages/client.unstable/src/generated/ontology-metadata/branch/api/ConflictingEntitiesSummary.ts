/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionTypeRid } from "../../api/ActionTypeRid.js";
import type { InterfaceTypeRid } from "../../api/InterfaceTypeRid.js";
import type { LinkTypeRid } from "../../api/LinkTypeRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { RuleSetRid } from "../../api/RuleSetRid.js";
import type { SharedPropertyTypeRid } from "../../api/SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../../api/TypeGroupRid.js";

/**
 * Summary of the conflicting entities. Conflicting entities are calculated by finding the intersection of entities that are updated/deleted on a branch and entities that are updated/deleted on the default branch between the latestRebasedVersion and a target ontologyVersion.
 */
export interface ConflictingEntitiesSummary {
  objectTypes: Array<ObjectTypeRid>;
  objectTypeEntityMetadatas: Array<ObjectTypeRid>;
  objectTypeSchemaMigrations: Array<ObjectTypeRid>;
  linkTypes: Array<LinkTypeRid>;
  linkTypeEntityMetadatas: Array<LinkTypeRid>;
  actionTypes: Array<ActionTypeRid>;
  sharedPropertyTypes: Array<SharedPropertyTypeRid>;
  interfaceTypes: Array<InterfaceTypeRid>;
  typeGroups: Array<TypeGroupRid>;
  ruleSets: Array<RuleSetRid>;
}
