import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { EndpointName } from "./EndpointName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SdkLanguage } from "./SdkLanguage.js";
import type { Status } from "./Status.js";
import type { StatusCode } from "./StatusCode.js";
import type { UserAgent } from "./UserAgent.js";
import type { UserAndUsageMetricsForGroup } from "./UserAndUsageMetricsForGroup.js";
/**
* Response to GetMetrics. Contains the aggregated results bucketed by UserId, UserAgent, SdkLanguage,
* EndpointName, StatusCode, DataEntity and Status, then by BucketingInterval.
*/
export interface GetMetricsResponse {
	metrics: UserAndUsageMetricsForGroup;
	metricsByUserAgent: Record<UserAgent, UserAndUsageMetricsForGroup> | undefined;
	metricsBySdkLanguage: Record<SdkLanguage, UserAndUsageMetricsForGroup> | undefined;
	metricsByEndpointName: Record<EndpointName, UserAndUsageMetricsForGroup> | undefined;
	metricsByStatusCode: Record<StatusCode, UserAndUsageMetricsForGroup> | undefined;
	metricsByStatus: Record<Status, UserAndUsageMetricsForGroup> | undefined;
	metricsByObjectType: Record<ObjectTypeRid, UserAndUsageMetricsForGroup> | undefined;
	metricsByActionType: Record<ActionTypeRid, UserAndUsageMetricsForGroup> | undefined;
	metricsByFunction: Record<FunctionRid, UserAndUsageMetricsForGroup> | undefined;
}
