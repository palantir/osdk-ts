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
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  GetInstallAutomationStatusResponse as _api_GetInstallAutomationStatusResponse,
} from "../__components.js";

/**
 * Get automation status for a given blockSetInstallationRid, ie whether the automation is idle, in progress,
 * blocked, etc.
 * requires marketplace:view-installation permission
 */
export async function getInstallAutomationStatus(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_GetInstallAutomationStatusResponse> {
  return conjureFetch(
    ctx,
    `/automation/status/block-set-installations/${blockSetInstallationRid}`,
    "GET",
  );
}
