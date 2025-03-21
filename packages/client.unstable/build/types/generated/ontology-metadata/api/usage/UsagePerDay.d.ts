import type { UsageType } from "./UsageType.js";
/**
* Entity usage throughout a time bucket.
*/
export interface UsagePerDay {
	usageByType: Record<UsageType, number>;
	uniqueUsersCount: number;
}
