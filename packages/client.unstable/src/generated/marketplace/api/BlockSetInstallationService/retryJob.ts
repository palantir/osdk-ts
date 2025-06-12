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
  BlockSetInstallationJobRid as _api_BlockSetInstallationJobRid,
  InstallBlockSetsResponse as _api_InstallBlockSetsResponse,
} from "../__components.js";

/**
 * Retries a previous installation job. Only finished jobs can be retried (both failed and successful ones).
 * Internally, this endpoint loads the request that was used to start the previous job and calls
 * `installBlockSets` to start a new job with the same request, meaning that retrying a job will actually create
 * a new job with a new `jobRid`.
 *
 * The `isRetryable` boolean on `BlockSetInstallationJobMetadata` can be used to determine whether a job can be
 * retried using this endpont.
 *
 * Throws `BlockInstallationJobNotFoundV2` if the user does not have `marketplace:view-installation-job` on
 * `jobRid` or if the job does not exist.
 * Throws `BlockInstallationJobNotRetryable` if the job is not retryable, e.g. because it is still in progress.
 */
export async function retryJob(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
  onBehalfOf: string | null | undefined,
): Promise<_api_InstallBlockSetsResponse> {
  return conjureFetch(
    ctx,
    `/block-set-installation/jobs/${jobRid}/retry`,
    "POST",
  );
}
