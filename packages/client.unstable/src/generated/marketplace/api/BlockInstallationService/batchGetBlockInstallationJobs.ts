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
  BatchGetBlockInstallationJobsRequest
    as _api_BatchGetBlockInstallationJobsRequest,
  BatchGetBlockInstallationJobsResponse
    as _api_BatchGetBlockInstallationJobsResponse,
} from "../__components.js";

/**
 * Batch version of `getBlockInstallationJob`. Only jobs that exist and the user has access to will be present
 * in the response. To have access to a job, you need to have `marketplace:view-installation-job` on its RID.
 *
 * Throws `BatchLimitExceeded` if more than 100 items are requested.
 */
export async function batchGetBlockInstallationJobs(
  ctx: ConjureContext,
  request: _api_BatchGetBlockInstallationJobsRequest,
): Promise<_api_BatchGetBlockInstallationJobsResponse> {
  return conjureFetch(
    ctx,
    `/block-installation/v2/jobs/batchGet`,
    "POST",
    request,
  );
}
