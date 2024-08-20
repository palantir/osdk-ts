/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
