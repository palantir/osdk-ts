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
  BlockSetVersionId as _api_BlockSetVersionId,
  GetGranularBlockSetStatisticsResponse
    as _api_GetGranularBlockSetStatisticsResponse,
} from "../__components.js";

/**
 * Returns detailed statistics about a pending block set, providing counts by block type and shape type.
 * This is a heavier computation than basic statistics returned by `validateBlockSetVersionV2`, and is thus rate
 * limited.
 *
 * Requires the `marketplace:read-local-marketplace` operation on the given marketplaceRid.
 *
 * Throws `BlockSetVersionNotPending` if the `BlockSetVersionId` is not in the pending state.
 */
export async function getGranularBlockSetStatistics(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetGranularBlockSetStatisticsResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/version/${blockSetVersionId}/granular-statistics`,
    "GET",
  );
}
