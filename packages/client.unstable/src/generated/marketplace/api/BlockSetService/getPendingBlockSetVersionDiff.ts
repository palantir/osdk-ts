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
  BlockSetVersionDiff as _api_BlockSetVersionDiff,
  BlockSetVersionId as _api_BlockSetVersionId,
} from "../__components.js";

/**
 * Gets the difference between a pending blockSetVersionId and the blockSetVersionId it was created from, in the
 * case of a brand new block set this will be empty.
 *
 * The diff is computed at the shape level, providing the severity of each shape diff. Currently the decision of
 * how to aggregate severity is left to the client, but at the shape level it's calculated in the backend so that
 * all clients have a single source of truth.
 *
 * Throws `BlockSetVersionNotFound` if the pending block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 * Throws `BlockSetVersionNotPending` if the specified pending block set version is not pending.
 * Throws `BlockSetShapesInvalid` if the pending block set shapes are invalid.
 */
export async function getPendingBlockSetVersionDiff(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_BlockSetVersionDiff> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/pending/version/${blockSetVersionId}/diff`,
    "GET",
  );
}
