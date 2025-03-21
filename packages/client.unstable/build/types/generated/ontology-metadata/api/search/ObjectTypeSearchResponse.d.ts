import type { ObjectTypeSearchHit } from "./ObjectTypeSearchHit.js";
import type { ObjectTypeSearchPageToken } from "./ObjectTypeSearchPageToken.js";
/**
* Response to ObjectTypeSearchRequest containing ObjectTypes returned based on ObjectTypeSearchRequest.
*/
export interface ObjectTypeSearchResponse {
	objectTypes: Array<ObjectTypeSearchHit>;
	totalResults: number;
	nextPageToken: ObjectTypeSearchPageToken | undefined;
}
