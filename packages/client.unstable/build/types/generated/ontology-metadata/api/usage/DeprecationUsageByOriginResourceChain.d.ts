import type { DeprecationUsage } from "./DeprecationUsage.js";
import type { OriginResourceChain } from "./OriginResourceChain.js";
/**
* Entity deprecation usage by OriginResourceChain.
*/
export interface DeprecationUsageByOriginResourceChain {
	originResourceChain: OriginResourceChain;
	usage: DeprecationUsage;
}
