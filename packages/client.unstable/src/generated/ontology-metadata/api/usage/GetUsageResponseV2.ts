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

import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { UsageOverall } from "./UsageOverall.js";
import type { UsagePerObjectType } from "./UsagePerObjectType.js";

/**
 * Response to GetUsageRequestV2. Contains the aggregated results bucketed by ontology entity.
 */
export interface GetUsageResponseV2 {
  usageOverall: UsageOverall;
  topUsageByObjectType: Record<ObjectTypeRid, UsagePerObjectType>;
  latestUsageEventIndexed: string | undefined;
}
