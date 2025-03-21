import type { OntologyAssociation } from "./OntologyAssociation.js";
/**
* Response denoting all metadata associated with the resource RID. The
* endpoint will return an empty set in case there is any error retrieving
* the associated resource metadata
*/
export interface LoadResourceAssociationsResponse {
	response: Array<OntologyAssociation>;
}
