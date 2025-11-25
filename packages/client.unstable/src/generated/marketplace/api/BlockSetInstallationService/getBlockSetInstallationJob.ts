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
  BlockSetInstallationJob as _api_BlockSetInstallationJob,
  BlockSetInstallationJobRid as _api_BlockSetInstallationJobRid,
} from "../__components.js";

/**
 * Fetch the complete details of a job, including the job status per output shape.
 * Throws `BlockInstallationJobNotFound` if the user does not have `marketplace:view-installation-job` on
 * `jobRid`.
 * Throws `Marketplace:LocalMarketplaceNotFound` if the user does not have the
 * "marketplace:read-local-marketplace" permission on the marketplace that the job was run in.
 */
export async function getBlockSetInstallationJob(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
): Promise<_api_BlockSetInstallationJob> {
  return conjureFetch(
    ctx,
    `/block-set-installation/jobs/${jobRid}/details`,
    "GET",
  );
}
