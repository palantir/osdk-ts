import type { UsageType } from "./UsageType.js";
/**
* Entity usage by a specific PropertyType.
*/
export interface UsagePerProperty {
	usageByType: Record<UsageType, number>;
	uniqueUsersCount: number;
}
