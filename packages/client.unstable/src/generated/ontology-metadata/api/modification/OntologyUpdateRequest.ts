/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyApiName } from "../OntologyApiName.js";
import type { OrganizationMarkingId } from "../OrganizationMarkingId.js";
import type { RoleGrantPatch } from "../permissions/RoleGrantPatch.js";
import type { GothamMappingConfiguration } from "../typemapping/GothamMappingConfiguration.js";
import type { OntologyAdminConfig } from "./OntologyAdminConfig.js";

/**
 * Request to update information about an existing Ontology. Requires the
 * "ontology:update-ontology" permission on the OntologyRid.
 */
export interface OntologyUpdateRequest {
  apiName: OntologyApiName | undefined;
  displayName: string | undefined;
  description: string | undefined;
  roleGrantPatches: Array<RoleGrantPatch>;
  addUnrestrictedRoles: boolean | undefined;
  organizationMarkingIds: Array<OrganizationMarkingId>;
  ontologyAdminConfig: OntologyAdminConfig | undefined;
  gothamMappingConfiguration: GothamMappingConfiguration | undefined;
}
