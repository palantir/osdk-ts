import type { LinkMetadata } from "./LinkMetadata.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* Response to GetLinkMetadataForObjectTypesRequest.
*/
export interface GetLinkMetadataForObjectTypesResponse {
	links: Record<ObjectTypeRid, Array<LinkMetadata>>;
}
