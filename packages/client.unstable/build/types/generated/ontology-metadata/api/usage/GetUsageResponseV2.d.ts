import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { UsageOverall } from "./UsageOverall.js";
import type { UsagePerObjectType } from "./UsagePerObjectType.js";
/**
* Response to GetUsageRequestV2. Contains the aggregated results bucketed by ontology entity.
*/
export interface GetUsageResponseV2 {
	usageOverall: UsageOverall;
	topUsageByObjectType: Record<ObjectTypeRid, UsagePerObjectType>;
	latestUsageEventIndexed: string | undefined;
}
