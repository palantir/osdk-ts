import type { LinkTypeLoadResponse } from "./LinkTypeLoadResponse.js";
import type { ObjectTypeLoadResponse } from "./ObjectTypeLoadResponse.js";
export interface EntityLoadByDatasourceResponse_objectType {
	type: "objectType";
	objectType: ObjectTypeLoadResponse;
}
export interface EntityLoadByDatasourceResponse_linkType {
	type: "linkType";
	linkType: LinkTypeLoadResponse;
}
/**
* A union of ObjectTypeResponse and LinkTypeResponse.
*/
export type EntityLoadByDatasourceResponse = EntityLoadByDatasourceResponse_objectType | EntityLoadByDatasourceResponse_linkType;
