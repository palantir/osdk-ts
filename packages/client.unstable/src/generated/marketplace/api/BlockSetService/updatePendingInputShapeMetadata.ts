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
  InputBlockSetShapeId as _api_InputBlockSetShapeId,
  UpdatePendingInputShapeMetadataRequest
    as _api_UpdatePendingInputShapeMetadataRequest,
} from "../__components.js";

/**
 * Updates the metadata for a pending input block set shape.
 *
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `BlockSetInputShapeNotFound` if the specified input shape does not exist.
 */
export async function updatePendingInputShapeMetadata(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  inputBlockSetShapeId: _api_InputBlockSetShapeId,
  request: _api_UpdatePendingInputShapeMetadataRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/block-sets/pending/version/${blockSetVersionId}/input/${inputBlockSetShapeId}/metadata`,
    "PUT",
    request,
  );
}
