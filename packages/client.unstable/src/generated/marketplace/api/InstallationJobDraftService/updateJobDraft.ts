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
  UpdateJobDraftRequest as _api_UpdateJobDraftRequest,
  UpdateJobDraftResponse as _api_UpdateJobDraftResponse,
} from "../__components.js";

/**
 * Declaratively sets the input mappings for installations in an existing job draft.
 * Returns the updated target state synchronously; the fully resolved result is computed asynchronously and the
 * status will immediately transition to `resolving`. The fully resolved result queried using `getJobDraft` when
 * `getJobDraftStatus` transitions back to `idle`.
 *
 * Requires the `marketplace:edit-installation-job-draft` operation on the given `jobRid`.
 */
export async function updateJobDraft(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
  request: _api_UpdateJobDraftRequest
): Promise<_api_UpdateJobDraftResponse> {
  return conjureFetch(ctx, `/installation-job-draft/${jobRid}`, "PUT", request);
}
