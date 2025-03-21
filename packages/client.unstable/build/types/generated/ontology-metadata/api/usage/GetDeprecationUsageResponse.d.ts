import type { Backend } from "./Backend.js";
import type { DeprecationUsage } from "./DeprecationUsage.js";
import type { DeprecationUsageByOriginResourceChain } from "./DeprecationUsageByOriginResourceChain.js";
import type { UserAgent } from "./UserAgent.js";
/**
* Response to GetDeprecatedUsageRequest. Contains the aggregated results bucketed by day, UserAgent, Backend
* and OriginResourceChain.
*/
export interface GetDeprecationUsageResponse {
	usageByEndpointStatus: DeprecationUsage;
	usageByDay: Record<string, DeprecationUsage>;
	usageByUserAgent: Record<UserAgent, DeprecationUsage>;
	usageByBackend: Record<Backend, DeprecationUsage>;
	usageByOriginResourceChain: Array<DeprecationUsageByOriginResourceChain>;
}
