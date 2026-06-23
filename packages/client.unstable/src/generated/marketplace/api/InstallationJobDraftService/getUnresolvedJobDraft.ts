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
  GetUnresolvedJobDraftResponse as _api_GetUnresolvedJobDraftResponse,
} from "../__components.js";

/**
 * Gets the unresolved installation job draft that was requested by the user. The unresolved state of a draft
 * is always updated synchronously.
 *
 * Requires the `marketplace:view-installation-job-draft` operation on the given `jobRid`. This is currently
 * inherited from the installation RIDs that the draft was created with.
 */
export async function getUnresolvedJobDraft(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
): Promise<_api_GetUnresolvedJobDraftResponse> {
  return conjureFetch(
    ctx,
    `/installation-job-draft/${jobRid}/unresolved`,
    "GET",
  );
}
