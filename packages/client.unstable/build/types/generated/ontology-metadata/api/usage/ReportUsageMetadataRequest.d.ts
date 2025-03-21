import type { Backend } from "./Backend.js";
import type { Endpoint } from "./Endpoint.js";
import type { OntologyEntityReferences } from "./OntologyEntityReferences.js";
import type { OriginResourceChain } from "./OriginResourceChain.js";
import type { UsageType } from "./UsageType.js";
import type { UserAgent } from "./UserAgent.js";
/**
* Request to report usage of ontology entities
*/
export interface ReportUsageMetadataRequest {
	ontologyEntityReferences: OntologyEntityReferences;
	backend: Backend;
	usageTypes: Array<UsageType>;
	userAgent: UserAgent | undefined;
	endpoint: Endpoint | undefined;
	originResourceChain: OriginResourceChain | undefined;
}
