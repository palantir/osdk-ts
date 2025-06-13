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
  BlockSetInstallationJobCapabilities
    as _api_BlockSetInstallationJobCapabilities,
  InstallBlocksJobRid as _api_InstallBlocksJobRid,
} from "../__components.js";

/**
 * Returns the main capability groups available to the authheader (only EDIT_METADATA for the time being).
 * These are to be used by the FE to regulate which features are enabled in the FE.
 */
export async function getBlockSetInstallationJobCapabilities(
  ctx: ConjureContext,
  jobRid: _api_InstallBlocksJobRid,
): Promise<_api_BlockSetInstallationJobCapabilities> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/block-set-installations/${jobRid}/job-capabilities`,
    "GET",
  );
}
