import type { LinkType } from "./LinkType.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* Response to GetLinkTypesForObjectTypesRequest.
*/
export interface GetLinkTypesForObjectTypesResponse {
	linkTypes: Record<ObjectTypeRid, Array<LinkType>>;
}
