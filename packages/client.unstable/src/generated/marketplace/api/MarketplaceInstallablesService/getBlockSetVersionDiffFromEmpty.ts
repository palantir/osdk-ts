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
  BlockSetVersionDiffFromEmptyRequest
    as _api_BlockSetVersionDiffFromEmptyRequest,
} from "../__components.js";

/**
 * Gets the difference between a block set version and an empty block set, used to know the changes incurred
 * by installing a new block set.
 */
export async function getBlockSetVersionDiffFromEmpty(
  ctx: ConjureContext,
  request: _api_BlockSetVersionDiffFromEmptyRequest,
): Promise<_api_BlockSetVersionDiff> {
  return conjureFetch(
    ctx,
    `/installation-app-service/block-set-diff-from-empty`,
    "POST",
    request,
  );
}
