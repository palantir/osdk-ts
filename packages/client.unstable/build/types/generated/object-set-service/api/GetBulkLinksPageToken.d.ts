import type { PageToken } from "./PageToken.js";
export interface GetBulkLinksPageToken_pageToken {
	type: "pageToken";
	pageToken: PageToken;
}
/**
* A token for paging links.
*/
export type GetBulkLinksPageToken = GetBulkLinksPageToken_pageToken;
