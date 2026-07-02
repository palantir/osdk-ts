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
  BlockSetId as _api_BlockSetId,
  BlockSetInstallationRid as _api_BlockSetInstallationRid,
  ListJobDraftsForUserResponse as _api_ListJobDraftsForUserResponse,
  ListJobDraftsPageToken as _api_ListJobDraftsPageToken,
  PageSizeLimitHint as _api_PageSizeLimitHint,
} from "../__components.js";

/**
 * Lists installation job drafts created by the current user, ordered by last updated time descending.
 * Optionally filters by block set or installation.
 *
 * When both `installationRid` and `blockSetId` are provided, the endpoint validates that the installation
 * belongs to the given block set. If they do not match, an empty result is returned.
 *
 * Filters to jobs with the `marketplace:view-installation-job-draft` operation on the given `jobRid`. Returns
 * an empty page if the `installationRid` and `blockSetId` are not found.
 */
export async function listJobDraftsForUser(
  ctx: ConjureContext,
  blockSetId: _api_BlockSetId | null | undefined,
  installationRid: _api_BlockSetInstallationRid | null | undefined,
  pageToken: _api_ListJobDraftsPageToken | null | undefined,
  limit: _api_PageSizeLimitHint | null | undefined
): Promise<_api_ListJobDraftsForUserResponse> {
  return conjureFetch(ctx, `/installation-job-draft/list`, "GET", undefined, {
    blockSetId,
    installationRid,
    pageToken,
    limit,
  });
}
