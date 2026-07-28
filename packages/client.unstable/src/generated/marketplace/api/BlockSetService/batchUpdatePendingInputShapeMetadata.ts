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
  BatchUpdatePendingInputShapeMetadataRequest as _api_BatchUpdatePendingInputShapeMetadataRequest,
  BatchUpdatePendingInputShapeMetadataResponse as _api_BatchUpdatePendingInputShapeMetadataResponse,
  BlockSetVersionId as _api_BlockSetVersionId,
} from "../__components.js";

/**
 * Updates the metadata for multiple pending input block set shapes in a single request.
 * All updates are applied atomically in a single transaction.
 *
 * Throws `BatchLimitExceeded` if the request contains more items than the configured maximum, 100 by default.
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `BlockSetInputShapesNotFound` if any of the specified input shapes do not exist.
 */
export async function batchUpdatePendingInputShapeMetadata(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  request: _api_BatchUpdatePendingInputShapeMetadataRequest
): Promise<_api_BatchUpdatePendingInputShapeMetadataResponse> {
  return conjureFetch(
    ctx,
    `/block-sets/pending/version/${blockSetVersionId}/input/metadata/batchUpdate`,
    "PUT",
    request
  );
}
