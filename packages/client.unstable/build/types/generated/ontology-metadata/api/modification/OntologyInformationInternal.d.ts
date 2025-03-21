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
import type { EnabledObjectStoragesStatus } from "./EnabledObjectStoragesStatus.js";
import type { OntologyAdminConfig } from "./OntologyAdminConfig.js";
import type { OntologyApiNamespaceIdentifier } from "./OntologyApiNamespaceIdentifier.js";
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
	enabledObjectStoragesStatus: EnabledObjectStoragesStatus;
	ontologyApiNamespaceIdentifier: OntologyApiNamespaceIdentifier | undefined;
}
