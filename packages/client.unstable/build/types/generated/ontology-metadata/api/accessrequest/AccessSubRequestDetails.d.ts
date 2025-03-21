import type { InternalRealmGroupAdditionSubRequest } from "./InternalRealmGroupAdditionSubRequest.js";
import type { OntologyEntityRoleGrantSubRequest } from "./OntologyEntityRoleGrantSubRequest.js";
export interface AccessSubRequestDetails_internalRealmGroupAddition {
	type: "internalRealmGroupAddition";
	internalRealmGroupAddition: InternalRealmGroupAdditionSubRequest;
}
export interface AccessSubRequestDetails_ontologyEntityRoleGrant {
	type: "ontologyEntityRoleGrant";
	ontologyEntityRoleGrant: OntologyEntityRoleGrantSubRequest;
}
/**
* A subrequest that provides some access to a resource.
*/
export type AccessSubRequestDetails = AccessSubRequestDetails_internalRealmGroupAddition | AccessSubRequestDetails_ontologyEntityRoleGrant;
