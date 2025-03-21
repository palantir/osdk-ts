import type { FoundryObject } from "./FoundryObject.js";
import type { ObjectSetEntities } from "./ObjectSetEntities.js";
import type { PageToken } from "./PageToken.js";
import type { UsageCost } from "./UsageCost.js";
export interface GetAllObjectsInitialPageResponse {
	results: Array<FoundryObject>;
	nextPageToken: PageToken | undefined;
	totalResults: number;
	objectSetEntities: ObjectSetEntities | undefined;
	usageCost: UsageCost | undefined;
}
