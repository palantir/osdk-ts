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
  InstallBlockSetsRequest as _api_InstallBlockSetsRequest,
} from "../../__components.js";
import type { UpgradeRequest as _api_experimental_UpgradeRequest } from "../__components.js";

/**
 * Same as `upgrade`, but returns the upgrade request instead of submitting it.
 */
export async function debugUpgrade(
  ctx: ConjureContext,
  installationRid: _api_BlockSetInstallationRid,
  request: _api_experimental_UpgradeRequest,
): Promise<_api_InstallBlockSetsRequest> {
  return conjureFetch(
    ctx,
    `/experimental/installations/${installationRid}/upgrade/debug`,
    "POST",
    request,
  );
}
