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
  BlockSetVersionStatusResponseV2 as _api_BlockSetVersionStatusResponseV2,
} from "../__components.js";

/**
 * Get the status of a block set version.
 *
 * Throws `BlockSetVersionNotFound` if the block set does not exist or if the user does not have
 * `marketplace:read-local-marketplace` on the store it is in.
 *
 * V2 compatible: Compatible with pending block sets created with `createBlockSetVersionV2`.
 */
export async function getBlockSetVersionStatusV2(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
): Promise<_api_BlockSetVersionStatusResponseV2> {
  return conjureFetch(
    ctx,
    `/block-sets/v2/version/${blockSetVersionId}/status`,
    "GET",
  );
}
