import type { UsageMetrics } from "./UsageMetrics.js";
import type { UserMetrics } from "./UserMetrics.js";
/**
* The overall user and usage metrics for a particular group, as well as bucketed by the provided
* bucketingInterval.
*/
export interface UserAndUsageMetricsForGroup {
	overallUserMetrics: UserMetrics;
	overallUsageMetrics: UsageMetrics;
	usageMetricsByBucketingInterval: Record<string, UsageMetrics>;
}
