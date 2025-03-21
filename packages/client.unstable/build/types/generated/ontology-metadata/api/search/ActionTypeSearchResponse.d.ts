import type { ActionTypeSearchHit } from "./ActionTypeSearchHit.js";
import type { ActionTypeSearchPageToken } from "./ActionTypeSearchPageToken.js";
/**
* Page response to ActionTypeSearchRequest containing ActionTypes matching the search query.
*/
export interface ActionTypeSearchResponse {
	actionTypes: Array<ActionTypeSearchHit>;
	totalResults: number;
	nextPageToken: ActionTypeSearchPageToken | undefined;
}
