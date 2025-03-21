import type { ObjectLinksResult } from "./ObjectLinksResult.js";
import type { UsageCost } from "./UsageCost.js";
export interface GetLinksResponse {
	results: Array<ObjectLinksResult>;
	totalLinks: number;
	usageCost: UsageCost | undefined;
}
