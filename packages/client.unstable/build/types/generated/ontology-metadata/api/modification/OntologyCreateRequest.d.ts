import type { GroupId } from "../GroupId.js";
import type { OntologyApiName } from "../OntologyApiName.js";
import type { OrganizationMarkingId } from "../OrganizationMarkingId.js";
import type { CompassNamespaceRid } from "./CompassNamespaceRid.js";
/**
* Request to create a new Ontology. This should be a one-time
* action when a new tenant needs to be onboarded and needs
* to have a private Ontology. Requires the "ontology:create-ontology"
* permission on the Ontology Root node.
*/
export interface OntologyCreateRequest {
	apiName: OntologyApiName;
	displayName: string;
	description: string;
	ontologyOwnersGroupId: GroupId;
	organizationMarkingIds: Array<OrganizationMarkingId>;
	compassNamespaceRid: CompassNamespaceRid;
}
