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
import type { InstallBlocksJobRid as _api_InstallBlocksJobRid } from "../__components.js";

/**
 * Cancels a block installation job. The cancellation is not necessarily instantaneous-- it will wait for
 * in-progress installs (including asynchronous processes) to finish. The status of the cancellation will be
 * reflected in the installation's job metadata.
 * Throws `BlockInstallationJobNotFound` if the user does not have `marketplace:edit-installation-job` on
 * `jobRid`.
 */
export async function cancelBlockInstallationJob(
  ctx: ConjureContext,
  jobRid: _api_InstallBlocksJobRid,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/cancel-jobs/${jobRid}`,
    "GET",
  );
}
