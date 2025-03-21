import type { Backend } from "./Backend.js";
import type { DeprecationOntologyEntityIdentifier } from "./DeprecationOntologyEntityIdentifier.js";
import type { EndpointStatus } from "./EndpointStatus.js";
import type { OriginResourceChain } from "./OriginResourceChain.js";
import type { UserAgent } from "./UserAgent.js";
/**
* Request to get deprecation usage aggregations. Optionally over a date range specified by startDay and endDay.
* Can be further filtered down by providing sets of UserAgents, OriginResources, Backends and EndpointStatuses.
*/
export interface GetDeprecationUsageRequest {
	ontologyEntity: DeprecationOntologyEntityIdentifier;
	startDay: string | undefined;
	endDay: string | undefined;
	userAgents: Array<UserAgent>;
	endpointStatus: Array<EndpointStatus>;
	originResourceChains: Array<OriginResourceChain>;
	backends: Array<Backend>;
}
