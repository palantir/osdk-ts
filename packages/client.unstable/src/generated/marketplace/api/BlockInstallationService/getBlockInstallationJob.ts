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
  BlockInstallationJob as _api_BlockInstallationJob,
  InstallBlocksJobRid as _api_InstallBlocksJobRid,
} from "../__components.js";

/**
 * Check the metadata and status of a block installation job. This is expected to be accessible for some time
 * after success, even more time after failure, but information about the job can eventually be cleaned up.
 *
 * Initially, only the user that created the job has access to it. When the block set installations in the job
 * have been created and registered in Compass, any user with `marketplace:view-installation-job` on all
 * block set installations in the job will have access to it.
 *
 * Throws `BlockInstallationJobNotFound` if the user does not have `marketplace:view-installation-job` on
 * `jobRid`.
 */
export async function getBlockInstallationJob(
  ctx: ConjureContext,
  jobRid: _api_InstallBlocksJobRid,
): Promise<_api_BlockInstallationJob> {
  return conjureFetch(ctx, `/block-installation/v2/jobs/${jobRid}`, "GET");
}
