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
