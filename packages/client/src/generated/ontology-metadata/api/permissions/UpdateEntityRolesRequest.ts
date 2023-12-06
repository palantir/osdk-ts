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

import type { EntityParent } from "./EntityParent.js";
import type { PermissionsOntologyEntity } from "./PermissionsOntologyEntity.js";
import type { RoleGrantPatch } from "./RoleGrantPatch.js";

/**
 * Request to update the roles on an ontology entity.
 * - The RoleSet of the ontology project must be in the Ontology context.
 * - The role must be within the RoleSet of the ontology project.
 */
export interface UpdateEntityRolesRequest {
  entity: PermissionsOntologyEntity;
  grantPatches: Array<RoleGrantPatch>;
  parent: EntityParent | undefined;
  dryRun: boolean | undefined;
  disableInheritedPermissions: boolean | undefined;
}
