import type { FoundryObject } from "./FoundryObject.js";
import type { PageToken } from "./PageToken.js";
import type { UsageCost } from "./UsageCost.js";
export interface GetAllObjectsNextPageResponse {
	results: Array<FoundryObject>;
	nextPageToken: PageToken | undefined;
	usageCost: UsageCost | undefined;
}
