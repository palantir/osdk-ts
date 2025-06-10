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
import type { GetDeployedAppResponse as _GetDeployedAppResponse } from "../__components.js";

/**
 * Attempts to get the configuration associated with the given Deployed App rid.
 * This endpoint is expected to throw if the user does not have permissions to view the
 * jobSpec of the given rid, or if the rid is invalid, or if the rid does not have a jobSpec, or if the
 * jobSpec is not a Deployed App jobSpec. When this endpoint was introduced we also started putting default
 * config on any newly created Deployed Apps.
 */
export async function getDeployedAppV2(
  ctx: ConjureContext,
  deployedAppRid: string,
): Promise<_GetDeployedAppResponse> {
  return conjureFetch(ctx, `/deployed-apps/${deployedAppRid}/v2`, "GET");
}
