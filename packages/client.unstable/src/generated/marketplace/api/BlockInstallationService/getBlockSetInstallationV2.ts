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
  BlockSetInstallationV2 as _api_BlockSetInstallationV2,
} from "../__components.js";

/**
 * Get a block set installation by RID.
 *
 * Requires `marketplace:view-installation` on the `BlockSetInstallationRid`.
 *
 * Throws `BlockSetInstallationNotFound` if the installation does not exist or if the user does not have access
 * to it.
 */
export async function getBlockSetInstallationV2(
  ctx: ConjureContext,
  blockSetInstallationRid: _api_BlockSetInstallationRid,
): Promise<_api_BlockSetInstallationV2> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/block-set-installations/${blockSetInstallationRid}`,
    "GET",
  );
}
