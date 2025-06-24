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
  CreateDeployedAppRequest as _CreateDeployedAppRequest,
  CreateDeployedAppResponse as _CreateDeployedAppResponse,
} from "../__components.js";

/**
 * Attempts to create a Deployed App and register it as a Compass resource. A Deployed App can be configured by
 * calling the update endpoint.
 */
export async function createDeployedApp(
  ctx: ConjureContext,
  request: _CreateDeployedAppRequest,
): Promise<_CreateDeployedAppResponse> {
  return conjureFetch(ctx, `/deployed-apps`, "POST", request);
}
