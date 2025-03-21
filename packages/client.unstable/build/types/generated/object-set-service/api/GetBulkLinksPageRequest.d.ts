import type { GetBulkLinksPageRequestEntry } from "./GetBulkLinksPageRequestEntry.js";
import type { GetBulkLinksPageToken } from "./GetBulkLinksPageToken.js";
import type { ObjectSetContext } from "./ObjectSetContext.js";
import type { ResponseOptions } from "./ResponseOptions.js";
export interface GetBulkLinksPageRequest {
	linksRequests: Array<GetBulkLinksPageRequestEntry>;
	objectSetContext: ObjectSetContext;
	pageSize: number;
	pageToken: GetBulkLinksPageToken | undefined;
	responseOptions: ResponseOptions | undefined;
}
