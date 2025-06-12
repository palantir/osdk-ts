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
  Void as _api_Void,
} from "../__components.js";

/**
 * Resume automation after it halts due to an install failure
 * requires marketplace:edit-installation permission
 */
export async function resumeInstallAutomation(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_Void> {
  return conjureFetch(
    ctx,
    `/automation/status/block-set-installations/${blockSetInstallationRid}/resume`,
    "POST",
  );
}
