/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
  SubmitJobDraftRequest as _api_SubmitJobDraftRequest,
  SubmitJobDraftResponse as _api_SubmitJobDraftResponse,
} from "../__components.js";

/**
 * Executes the installation job draft, creating an installation job.
 * This is an asynchronous task that can be tracked by polling `getJobDraftStatus` through the `submittingJob`
 * phase to the `submitted` phase.
 * The draft is cleaned up after successful job submission, and clients should query BlockSetInstallationService
 * to track the submitted job status. Fetching endpoints will return not found.
 * On non-successful submission, the draft will return to an `idle` status.
 *
 * Requires the `marketplace:submit-installation-job-draft` operation on the given `jobRid`.
 */
export async function submitJobDraft(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
  request: _api_SubmitJobDraftRequest
): Promise<_api_SubmitJobDraftResponse> {
  return conjureFetch(
    ctx,
    `/installation-job-draft/${jobRid}/submit`,
    "POST",
    request
  );
}
