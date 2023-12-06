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

import type { UserId } from "../UserId.js";
import type { OntologyEntityIdentifiers } from "./OntologyEntityIdentifiers.js";
import type { UsageType } from "./UsageType.js";
import type { UserAgent } from "./UserAgent.js";

/**
 * Request to get usage aggregations. Optionally over a date range specified by startDay and endDay.
 * Can be further filtered down by providing sets of UserIds, UserAgents and UsageTypes.
 */
export interface GetUsageRequestV2 {
  ontologyEntityIdentifiers: OntologyEntityIdentifiers;
  startDay: string | undefined;
  endDay: string | undefined;
  userIds: Array<UserId>;
  userAgents: Array<UserAgent>;
  usageTypes: Array<UsageType>;
}
