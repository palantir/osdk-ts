import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* Request to get all kinds of links for the given ObjectTypes. The latest ontology version at potentially
* multiple ontologies is considered.
*/
export interface GetLinkMetadataForObjectTypesRequest {
	objectTypes: Array<ObjectTypeRid>;
}
