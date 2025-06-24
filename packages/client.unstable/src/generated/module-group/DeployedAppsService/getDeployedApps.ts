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
 * Gets the configuration associated with the given set of Deployed App Rids. Provided rids
 * that are invalid, not yet configured, or on which the user doesn't have permissions are
 * simply omitted from the resulting map. Will throw if deployed apps is not enabled.
 */
export async function getDeployedApps(
  ctx: ConjureContext,
  deployedAppRids: Array<string>,
): Promise<Record<string, _GetDeployedAppResponse>> {
  return conjureFetch(ctx, `/deployed-apps/bulk`, "PUT", deployedAppRids);
}
