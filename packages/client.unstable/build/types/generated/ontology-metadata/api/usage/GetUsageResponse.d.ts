import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { UserId } from "../UserId.js";
import type { UsageOverall } from "./UsageOverall.js";
import type { UsagePerDay } from "./UsagePerDay.js";
import type { UsagePerProperty } from "./UsagePerProperty.js";
import type { UsagePerUser } from "./UsagePerUser.js";
import type { UsagePerUserAgent } from "./UsagePerUserAgent.js";
import type { UserAgent } from "./UserAgent.js";
/**
* Reponse to GetUsageRequest. Contains the aggregated results bucketed by day, UserId and UserAgent.
*/
export interface GetUsageResponse {
	usageOverall: UsageOverall;
	usagePerDay: Record<string, UsagePerDay>;
	topUsageByUser: Record<UserId, UsagePerUser>;
	topUsageByUserAgent: Record<UserAgent, UsagePerUserAgent>;
	topUsageByProperty: Record<PropertyTypeRid, UsagePerProperty>;
	latestUsageEventIndexed: string | undefined;
}
