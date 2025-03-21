import type { UserId } from "../UserId.js";
import type { OntologyEntityIdentifier } from "./OntologyEntityIdentifier.js";
import type { UsageType } from "./UsageType.js";
import type { UserAgent } from "./UserAgent.js";
/**
* Request to get usage aggregations. Optionally over a date range specified by startDay and endDay.
* Can be further filtered down by providing sets of UserIds and UserAgents.
*/
export interface GetUsageRequest {
	ontologyEntity: OntologyEntityIdentifier;
	startDay: string | undefined;
	endDay: string | undefined;
	userIds: Array<UserId>;
	userAgents: Array<UserAgent>;
	usageTypes: Array<UsageType>;
}
