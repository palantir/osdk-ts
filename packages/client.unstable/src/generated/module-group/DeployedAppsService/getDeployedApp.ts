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
 * Attempts to get the configuration associated with the given Deployed App Rid,
 * returns empty if not configured yet or if the rid is invalid. Will throw if deployed
 * apps is not enabled or if permissions are not valid.
 */
export async function getDeployedApp(
  ctx: ConjureContext,
  deployedAppRid: string,
): Promise<_GetDeployedAppResponse | null | undefined> {
  return conjureFetch(ctx, `/deployed-apps/${deployedAppRid}`, "GET");
}
