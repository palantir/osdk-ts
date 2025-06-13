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
  UpdatePendingInputShapeAboutRequest
    as _api_UpdatePendingInputShapeAboutRequest,
} from "../__components.js";

/**
 * Updates the about field for a pending input block set shape by overriding either the title, description,
 * or both.
 *
 * Throws `BlockSetVersionNotPending` if the specified block set version is not pending.
 * Throws `BlockSetInputShapeNotFound` if the specified input shape does not exist.
 * Throws `InputAboutOverrideExceedsLimits` if overriding with a string that exceeds the maximum length. Title
 * has a limit of 100 characters and description has a limit of 500 characters.
 * Throws `EmptyInputAboutOverride` if overriding with an empty string.
 *
 * V1 and V2 compatible: Compatible with pending block sets created with `createBlockSetVersion` and
 * `createBlockSetVersionV2`.
 */
export async function updatePendingInputShapeAbout(
  ctx: ConjureContext,
  blockSetVersionId: _api_BlockSetVersionId,
  inputBlockSetShapeId: _api_InputBlockSetShapeId,
  request: _api_UpdatePendingInputShapeAboutRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/block-sets/pending/version/${blockSetVersionId}/input/${inputBlockSetShapeId}/about`,
    "PUT",
    request,
  );
}
