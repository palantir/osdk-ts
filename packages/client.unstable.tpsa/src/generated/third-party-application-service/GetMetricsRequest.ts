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
