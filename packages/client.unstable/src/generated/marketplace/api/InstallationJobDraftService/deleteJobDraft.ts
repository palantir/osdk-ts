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
  DeleteJobDraftResponse as _api_DeleteJobDraftResponse,
} from "../__components.js";

/**
 * Deletes an installation job draft.
 * Does not delete the installations within the job draft. Does not store the mapped inputs.
 *
 * Delete is idempotent for drafts that were previously created by the caller: it will return a success
 * response even if the draft data has already been deleted, as long as the caller retains permission on the
 * job RID.
 *
 * Requires the `marketplace:delete-installation-job-draft` operation on the given `jobRid`. This is currently
 * available only by the user that created the job draft.
 */
export async function deleteJobDraft(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid
): Promise<_api_DeleteJobDraftResponse> {
  return conjureFetch(ctx, `/installation-job-draft/${jobRid}`, "DELETE");
}
