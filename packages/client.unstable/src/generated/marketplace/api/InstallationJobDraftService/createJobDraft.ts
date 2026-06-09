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
  CreateJobDraftRequest as _api_CreateJobDraftRequest,
  CreateJobDraftResponse as _api_CreateJobDraftResponse,
} from "../__components.js";

/**
 * Creates a new installation job draft.
 *
 * Returns the updated target state synchronously and created job RID synchronously. The fully resolved result
 * is computed asynchronously and the status will immediately transition to `resolving`. The fully resolved
 * result queried using `getJobDraft` when `getJobDraftStatus` transitions back to `idle`.
 *
 * Requires the `marketplace:edit-block-set-installation` operation on each installation RID in the request.
 * Installation RIDs must be distinct.
 */
export async function createJobDraft(
  ctx: ConjureContext,
  request: _api_CreateJobDraftRequest,
): Promise<_api_CreateJobDraftResponse> {
  return conjureFetch(ctx, `/installation-job-draft`, "POST", request);
}
