import type { UsageCost } from "./UsageCost.js";
export interface SuggestResponse {
	suggestedValues: Array<string>;
	usageCost: UsageCost | undefined;
}
