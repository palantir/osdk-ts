import type { InterfaceTypeSearchHit } from "./InterfaceTypeSearchHit.js";
import type { InterfaceTypeSearchPageToken } from "./InterfaceTypeSearchPageToken.js";
/**
* Page response to InterfaceTypeSearchRequest containing InterfaceTypes matching the search query.
*/
export interface InterfaceTypeSearchResponse {
	interfaceTypes: Array<InterfaceTypeSearchHit>;
	totalResults: number;
	nextPageToken: InterfaceTypeSearchPageToken | undefined;
}
