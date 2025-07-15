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
import type { DisableAutomationRequest as _api_registry_DisableAutomationRequest } from "../__components.js";

/**
 * Pause or unpause an automation.
 */
export async function disableAutomation(
  ctx: ConjureContext,
  monitorRid: _api_MonitorRid,
  request: _api_registry_DisableAutomationRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/registry/v0/disable/${monitorRid}`,
    "POST",
    request,
  );
}
