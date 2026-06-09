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
  ModifyJobDraftInstallationsRequest as _api_ModifyJobDraftInstallationsRequest,
  ModifyJobDraftInstallationsResponse
    as _api_ModifyJobDraftInstallationsResponse,
} from "../__components.js";

/**
 * Adds and/or removes installations from an existing job draft. Added installations will have their
 * input mappings copied from the previous version synchronously. The backend will then asynchronously
 * re-resolve input mappings using presets, automapping, and external recommendations.
 *
 * Requires the `marketplace:edit-installation-job-draft` operation on the given `jobRid`.
 */
export async function modifyJobDraftInstallations(
  ctx: ConjureContext,
  jobRid: _api_BlockSetInstallationJobRid,
  request: _api_ModifyJobDraftInstallationsRequest,
): Promise<_api_ModifyJobDraftInstallationsResponse> {
  return conjureFetch(
    ctx,
    `/installation-job-draft/${jobRid}/installations/modify`,
    "POST",
    request,
  );
}
