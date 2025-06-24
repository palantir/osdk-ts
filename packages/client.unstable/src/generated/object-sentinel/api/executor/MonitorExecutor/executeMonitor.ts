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
import type { MonitorRid as _api_MonitorRid } from "../../__components.js";
import type {
  ExecuteMonitorRequest as _api_executor_ExecuteMonitorRequest,
  ExecuteMonitorResponse as _api_executor_ExecuteMonitorResponse,
} from "../__components.js";

/**
 * NOT INTENDED FOR GENERAL USE. DO NOT USE THIS ENDPOINT WITHOUT CONSULTING THE foundry-objects-monitor TEAM.
 *
 * Executes a monitor determining if it is now triggering or recovered. Only works on monitors that aren't
 * event based. If the monitor does not have a published version, this is a no-op.
 */
export async function executeMonitor(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  request: _api_executor_ExecuteMonitorRequest,
): Promise<_api_executor_ExecuteMonitorResponse> {
  return conjureFetch(
    ctx,
    `/executor/v0/monitors/${monitorRid}/execute`,
    "POST",
    request,
  );
}
