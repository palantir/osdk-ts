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
import type { BlockVersionId as _api_BlockVersionId } from "../__components.js";

/**
 * Please read through the documentation of `finalizeBlockVersion` for the current lifecycle to use all available
 * features!
 *
 * Indicate to marketplace that all block data has been posted successfully.
 * The counterpart of `dataCommitBlockVersionFailed` to report success, only one of success or failure
 * should be reported.
 */
export async function dataCommitBlockVersion(
  ctx: ConjureContext,
  blockVersionId: _api_BlockVersionId,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/blocks/versions/${blockVersionId}/commit-data`,
    "POST",
  );
}
