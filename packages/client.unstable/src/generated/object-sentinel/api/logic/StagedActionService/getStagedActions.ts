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
  GetStagedActionsRequest as _api_registry_GetStagedActionsRequest,
  GetStagedActionsResponse as _api_registry_GetStagedActionsResponse,
  PageToken as _api_registry_PageToken,
} from "../../registry/__components.js";

/**
 * Returns all staged actions for a monitor, with optional filter.
 */
export async function getStagedActions(
  ctx: ConjureContext,
  getStagedActionsRequest: _api_registry_GetStagedActionsRequest,
  pageToken: _api_registry_PageToken | null | undefined,
  pageSize: number | null | undefined,
): Promise<_api_registry_GetStagedActionsResponse> {
  return conjureFetch(
    ctx,
    `/staged-actions/v0/staged-actions`,
    "PUT",
    getStagedActionsRequest,
    { pageToken, pageSize },
  );
}
