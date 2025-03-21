import type { BucketingInterval } from "./BucketingInterval.js";
import type { DataEntities } from "./DataEntities.js";
import type { EndpointName } from "./EndpointName.js";
import type { GroupByProperty } from "./GroupByProperty.js";
import type { SdkLanguage } from "./SdkLanguage.js";
import type { Status } from "./Status.js";
import type { StatusCode } from "./StatusCode.js";
import type { UserAgent } from "./UserAgent.js";
/**
* Request to GetMetrics. Optionally over a date range specified by startDay and endDay.
* Can be further filtered down by providing sets of DataEntities, UserAgents, SdkLanguages, EndpointNames,
* StatusCodes, or a Status.
* Can opt into having the response bucketed by a set of GroupByProperties as well as a time BucketingInterval.
*/
export interface GetMetricsRequest {
	startDay: string | undefined;
	endDay: string | undefined;
	bucketingInterval: BucketingInterval | undefined;
	dataEntities: DataEntities | undefined;
	userAgents: Array<UserAgent>;
	sdkLanguages: Array<SdkLanguage>;
	endpointNames: Array<EndpointName>;
	statusCodes: Array<StatusCode>;
	statuses: Array<Status>;
	groupByProperties: Array<GroupByProperty>;
}
