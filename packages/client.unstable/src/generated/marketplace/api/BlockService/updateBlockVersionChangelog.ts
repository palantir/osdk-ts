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
  BlockVersionId as _api_BlockVersionId,
  UpdateBlockVersionChangelogRequest as _api_UpdateBlockVersionChangelogRequest,
} from "../__components.js";

/**
 * Please read through the documentation of `finalizeBlockVersion` for the current lifecycle to use all available
 * features!
 *
 * Updates the changelog for a block version.
 */
export async function updateBlockVersionChangelog(
  ctx: ConjureContext,
  blockVersionId: _api_BlockVersionId,
  updateBlockVersionChangelogRequest: _api_UpdateBlockVersionChangelogRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/blocks/versions/${blockVersionId}/changelog`,
    "PUT",
    updateBlockVersionChangelogRequest,
  );
}
