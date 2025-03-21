import type { UsageType } from "./UsageType.js";
/**
* Entity usage by a specific UserId.
*/
export interface UsagePerUser {
	usageByType: Record<UsageType, number>;
}
