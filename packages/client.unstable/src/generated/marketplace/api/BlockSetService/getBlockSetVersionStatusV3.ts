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
  BlockSetVersionId as _api_BlockSetVersionId,
  GetBlockSetVersionStatusResponseV3 as _api_GetBlockSetVersionStatusResponseV3,
} from "../__components.js";

/**
 * Get a lightweight status for a block set version. This is cheaper than `getBlockSetVersionStatusV2`
 * as it does not load output spec results, validation errors, or other heavy data. Suitable for polling.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 */
export async function getBlockSetVersionStatusV3(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_GetBlockSetVersionStatusResponseV3> {
  return conjureFetch(
    ctx,
    `/block-sets/v3/version/${blockSetVersionId}/status`,
    "GET",
  );
}
