/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { PropertyTypeRid } from "../PropertyTypeRid.mjs";
import type { UserId } from "../UserId.mjs";
import type { UsageOverall } from "./UsageOverall.mjs";
import type { UsagePerDay } from "./UsagePerDay.mjs";
import type { UsagePerProperty } from "./UsagePerProperty.mjs";
import type { UsagePerUser } from "./UsagePerUser.mjs";
import type { UsagePerUserAgent } from "./UsagePerUserAgent.mjs";
import type { UserAgent } from "./UserAgent.mjs";

export interface GetUsageResponse {
  usageOverall: UsageOverall;
  usagePerDay: Map<string, UsagePerDay>;
  topUsageByUser: Map<UserId, UsagePerUser>;
  topUsageByUserAgent: Map<UserAgent, UsagePerUserAgent>;
  topUsageByProperty: Map<PropertyTypeRid, UsagePerProperty>;
  latestUsageEventIndexed: string | undefined;
}
