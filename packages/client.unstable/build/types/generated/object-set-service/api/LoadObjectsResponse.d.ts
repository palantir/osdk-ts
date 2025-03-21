import type { FoundryObject } from "./FoundryObject.js";
import type { UsageCost } from "./UsageCost.js";
export interface LoadObjectsResponse {
	results: Array<FoundryObject | undefined>;
	usageCost: UsageCost | undefined;
}
