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
  UpdateDeployedAppConfigRequest as _UpdateDeployedAppConfigRequest,
  UpdateDeployedAppConfigResponse as _UpdateDeployedAppConfigResponse,
} from "../__components.js";

/**
 * Attempts to put or update config settings for a Deployed App
 */
export async function updateDeployedApp(
  ctx: ConjureContext,
  deployedAppRid: string,
  request: _UpdateDeployedAppConfigRequest,
): Promise<_UpdateDeployedAppConfigResponse> {
  return conjureFetch(ctx, `/deployed-apps/${deployedAppRid}`, "PUT", request);
}
