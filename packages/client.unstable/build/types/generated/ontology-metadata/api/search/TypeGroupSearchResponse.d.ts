import type { TypeGroupSearchHit } from "./TypeGroupSearchHit.js";
import type { TypeGroupSearchPageToken } from "./TypeGroupSearchPageToken.js";
/**
* Page response to TypeGroupSearchRequest containing TypeGroups matching the search query.
*/
export interface TypeGroupSearchResponse {
	typeGroups: Array<TypeGroupSearchHit>;
	totalResults: number;
	nextPageToken: TypeGroupSearchPageToken | undefined;
}
