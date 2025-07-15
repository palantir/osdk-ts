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
  MonitorVersion as _api_MonitorVersion,
} from "../../__components.js";
import type { GetMonitorVersionResponse as _api_registry_GetMonitorVersionResponse } from "../__components.js";

/**
 * Returns a specific version of a monitor.
 * Throws:
 * - MonitorNotFound: if the monitor does not exist or the user does not have view permissions on it.
 * - MonitorVersionNotFound: if the user can view a monitor but the requested version does not exist.
 */
export async function getMonitorVersion(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  monitorVersion: _api_MonitorVersion,
  branchRid: _api_BranchRid | null | undefined,
): Promise<_api_registry_GetMonitorVersionResponse> {
  return conjureFetch(
    ctx,
    `/registry/v0/monitors/${monitorRid}/versions/${monitorVersion}`,
    "GET",
    undefined,
    { branchRid },
  );
}
