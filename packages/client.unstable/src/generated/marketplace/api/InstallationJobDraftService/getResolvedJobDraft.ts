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
  GetResolvedJobDraftResponse as _api_GetResolvedJobDraftResponse,
} from "../__components.js";

/**
 * Gets the fully computed installation job draft, including all resolved inputs and validation errors.
 * Use alongside `getJobDraftStatus` as the asynchronous resolution of the draft is processed, will return the
 * up-to-date resolved draft only when the status is `idle`. Whilst the draft status is `resolving`, this will
 * return the previously resolved draft.
 *
 * Requires the `marketplace:view-installation-job-draft` operation on the given `jobRid`.
 */
export async function getResolvedJobDraft(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid
): Promise<_api_GetResolvedJobDraftResponse> {
  return conjureFetch(ctx, `/installation-job-draft/${jobRid}/resolved`, "GET");
}
