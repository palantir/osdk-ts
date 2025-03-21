import type { UsageType } from "./UsageType.js";
/**
* Usage by a specific ObjectType.
*/
export interface UsagePerObjectType {
	usageByType: Record<UsageType, number>;
	uniqueUsersCount: number;
}
