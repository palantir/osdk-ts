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

import type { GroupId } from "../GroupId.js";
import type { OntologyApiName } from "../OntologyApiName.js";
import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
import type { OrganizationMarkingId } from "../OrganizationMarkingId.js";
import type { PermissionModel } from "../permissions/PermissionModel.js";
import type { RoleGrant } from "../permissions/RoleGrant.js";
import type { OntologyObjectTypeSemanticSearchStatus } from "../search/semantic/OntologyObjectTypeSemanticSearchStatus.js";
import type { ExternalMappingConfiguration } from "../typemapping/ExternalMappingConfiguration.js";
import type { CompassNamespaceRid } from "./CompassNamespaceRid.js";
import type { OntologyAdminConfig } from "./OntologyAdminConfig.js";
import type { OntologyNamespace } from "./OntologyNamespace.js";
import type { OntologyProjectRid } from "./OntologyProjectRid.js";

/**
 * Information about an Ontology. This is only expected to be used by Ontology Metadata App.
 */
export interface OntologyInformationInternal {
  apiName: OntologyApiName;
  displayName: string;
  description: string;
  currentOntologyVersion: OntologyVersion;
  currentSystemOntologyVersion: OntologyVersion;
  defaultBranchRid: OntologyBranchRid;
  namespace: OntologyNamespace;
  ontologyOwnersGroupId: GroupId;
  ontologyOwnersGroupIds: Array<GroupId>;
  governanceBoardGroupId: GroupId | undefined;
  organizationMarkingIds: Array<OrganizationMarkingId>;
  ontologyAdminConfig: OntologyAdminConfig;
  isShared: boolean;
  compassNamespaceRid: CompassNamespaceRid | undefined;
  ontologyProjectRid: OntologyProjectRid | undefined;
  areOrganizationMarkingsInheritedFromNamespace: boolean;
  areRolesEnabled: boolean;
  roleGrants: Array<RoleGrant>;
  restrictedRoleGrants: Array<RoleGrant>;
  externalMappingConfigurations: Array<ExternalMappingConfiguration>;
  permissionModel: PermissionModel;
  isDefaultOntologyMultiOrg: boolean;
  semanticSearchIndexingStatus: OntologyObjectTypeSemanticSearchStatus;
}
