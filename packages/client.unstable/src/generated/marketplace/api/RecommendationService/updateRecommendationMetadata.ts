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
  UpdateRecommendationMetadataRequest
    as _api_UpdateRecommendationMetadataRequest,
  UpdateRecommendationMetadataResponse
    as _api_UpdateRecommendationMetadataResponse,
} from "../__components.js";

/**
 * Update metadata for a single recommendation.
 *
 * Compatible with a pending block set version, with a completed external recommendation generation status (not
 * pending recommendation generation due to a recent update request).
 *
 * Throws `BlockSetVersionNotPending` if the `BlockSetVersionId` is not in the pending state.
 * Throws `ExternalRecommendationNotFound` if the external recommendation specified in the request was not
 * found for the pending `BlockSetVersionId`.
 * Throws `ExternalRecommendationGenerationNotComplete` if the external recommendation for the
 * `BlockSetVersionId` is in the process of generating.
 *
 * Throws `EditBlockSetVersionInMarketplacePermissionDenied` if the user does not have
 * `marketplace:edit-block-set` on the provided `marketplaceRid`.
 * Throws `BlockSetVersionNotFound` if the `BlockSetVersionId` does not exist.
 */
export async function updateRecommendationMetadata(
  ctx: ConjureContext,
  request: _api_UpdateRecommendationMetadataRequest,
): Promise<_api_UpdateRecommendationMetadataResponse> {
  return conjureFetch(
    ctx,
    `/recommendations-v2/update-metadata`,
    "POST",
    request,
  );
}
