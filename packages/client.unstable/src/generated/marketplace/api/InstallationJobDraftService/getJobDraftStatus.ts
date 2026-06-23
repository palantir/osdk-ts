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
  GetJobDraftStatusResponse as _api_GetJobDraftStatusResponse,
} from "../__components.js";

/**
 * Gets the current status of an installation job draft. This is a lightweight endpoint designed
 * for frequent polling. The draft goes from an `idle` unsubmitted state, to a `submitted` state.
 *
 * Requires the `marketplace:view-installation-job-draft` operation on the given `jobRid`. This is currently
 * inherited from the installation RIDs that the draft was created with.
 */
export async function getJobDraftStatus(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
): Promise<_api_GetJobDraftStatusResponse> {
  return conjureFetch(ctx, `/installation-job-draft/${jobRid}/status`, "GET");
}
