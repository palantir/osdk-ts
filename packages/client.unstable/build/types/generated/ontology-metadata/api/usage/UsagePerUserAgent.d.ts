import type { UsageType } from "./UsageType.js";
/**
* Entity usage by a specific UserAgent.
*/
export interface UsagePerUserAgent {
	usageByType: Record<UsageType, number>;
	uniqueUsersCount: number;
}
