/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { BranchRid as _api_BranchRid } from "../../__components.js";
import type {
  GetAllMonitorEventsResponse as _api_registry_GetAllMonitorEventsResponse,
  PageToken as _api_registry_PageToken,
} from "../__components.js";

/**
 * The Monitor event is user-scoped and the history will differ between users. The user must have been
 * subscribed at some point to have a history at all.
 */
export async function getAllMonitorEvents(
  ctx: ConjureContext,
  pageToken: _api_registry_PageToken | null | undefined,
  branchRid: _api_BranchRid | null | undefined,
): Promise<_api_registry_GetAllMonitorEventsResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors-getEvents`,
    "GET",
    undefined,
    { pageToken, branchRid },
  );
}
