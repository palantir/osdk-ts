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
import type {
  BranchRid as _api_BranchRid,
  MonitorRid as _api_MonitorRid,
} from "../../__components.js";
import type { MuteMonitorForSelfResponse as _api_registry_MuteMonitorForSelfResponse } from "../__components.js";

/**
 * Mutes the monitor for the user who makes this request. The user must have view permissions on the monitor.
 */
export async function muteMonitorForSelf(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  branchRid: _api_BranchRid | null | undefined,
): Promise<_api_registry_MuteMonitorForSelfResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors-muteForSelf/${monitorRid}`,
    "GET",
    undefined,
    { branchRid },
  );
}
