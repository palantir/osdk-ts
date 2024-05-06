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

import type { GetBulkLinksPageToken } from "./GetBulkLinksPageToken.js";
import type { LoadedObjectLinksResultV2 } from "./LoadedObjectLinksResultV2.js";
import type { UsageCost } from "./UsageCost.js";

/**
 * Results contains a list of LoadedObjectLinksResultV2 that includes requested ObjectIdentifier and a list of
 * found DirectedFoundryLinks. The sum of all links will not exceed 100_000 in a single page.
 */
export interface GetBulkLinksPageResponse {
  results: Array<LoadedObjectLinksResultV2>;
  pageToken: GetBulkLinksPageToken | undefined;
  usageCost: UsageCost | undefined;
}
