import type { SharedPropertyTypeSearchHit } from "./SharedPropertyTypeSearchHit.js";
import type { SharedPropertyTypeSearchPageToken } from "./SharedPropertyTypeSearchPageToken.js";
/**
* Page response to SharedPropertyTypeSearchRequest containing SharedPropertyTypes matching the search query.
*/
export interface SharedPropertyTypeSearchResponse {
	sharedPropertyTypes: Array<SharedPropertyTypeSearchHit>;
	totalResults: number;
	nextPageToken: SharedPropertyTypeSearchPageToken | undefined;
}
