import type { ObjectTypeSearchHit } from "./ObjectTypeSearchHit.js";
import type { ObjectTypeSearchPageTokenV2 } from "./ObjectTypeSearchPageTokenV2.js";
/**
* Page response to ObjectTypeSearchRequestV2 containing ObjectTypes matching the search query.
*/
export interface ObjectTypeSearchResponseV2 {
	objectTypes: Array<ObjectTypeSearchHit>;
	totalResults: number;
	nextPageToken: ObjectTypeSearchPageTokenV2 | undefined;
}
