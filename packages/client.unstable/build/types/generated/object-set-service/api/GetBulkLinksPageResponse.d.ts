import type { GetBulkLinksPageToken } from "./GetBulkLinksPageToken.js";
import type { LoadedObjectLinksResultV2 } from "./LoadedObjectLinksResultV2.js";
import type { UsageCost } from "./UsageCost.js";
/**
* Results contains a list of LoadedObjectLinksResultV2 that includes requested ObjectIdentifier and a list of
* found DirectedFoundryLinks. The sum of all links will not exceed 100_000 in a single page.
*/
export interface GetBulkLinksPageResponse {
	results: Array<LoadedObjectLinksResultV2>;
	pageToken: GetBulkLinksPageToken | undefined;
	usageCost: UsageCost | undefined;
}
