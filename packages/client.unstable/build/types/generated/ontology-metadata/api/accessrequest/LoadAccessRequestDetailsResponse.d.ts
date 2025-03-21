import type { AccessRequest } from "./AccessRequest.js";
/**
* Returns the access request details for the provided access request RIDs.
*/
export interface LoadAccessRequestDetailsResponse {
	accessRequests: Array<AccessRequest>;
}
