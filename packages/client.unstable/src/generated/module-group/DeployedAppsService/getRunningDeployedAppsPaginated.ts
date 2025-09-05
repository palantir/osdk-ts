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
  GetRunningDeployedAppsPaginatedRequest
    as _GetRunningDeployedAppsPaginatedRequest,
  GetRunningDeployedAppsPaginatedResponse
    as _GetRunningDeployedAppsPaginatedResponse,
} from "../__components.js";

/**
 * Gets the configuration associated with all running Deployed Apps that the user has permission to view. This
 * endpoint is paginated and will return up to a maximum of 50 Deployed Apps per page. Will throw if deployed
 * apps is not enabled.
 */
export async function getRunningDeployedAppsPaginated(
  ctx: ConjureContext,
  request: _GetRunningDeployedAppsPaginatedRequest,
): Promise<_GetRunningDeployedAppsPaginatedResponse> {
  return conjureFetch(ctx, `/deployed-apps/running-paginated`, "POST", request);
}
