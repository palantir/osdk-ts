import type { LinkTypeEntityMetadataLoadResponse } from "./LinkTypeEntityMetadataLoadResponse.js";
import type { ObjectTypeEntityMetadataLoadResponse } from "./ObjectTypeEntityMetadataLoadResponse.js";
/**
* Response to LoadEntityMetadataRequest.
*/
export interface LoadEntityMetadataResponse {
	objectTypes: Array<ObjectTypeEntityMetadataLoadResponse | undefined>;
	linkTypes: Array<LinkTypeEntityMetadataLoadResponse | undefined>;
}
