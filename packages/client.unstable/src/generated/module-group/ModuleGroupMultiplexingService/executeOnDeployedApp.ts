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
import type { SubmitJobToDeployedAppRequest as _SubmitJobToDeployedAppRequest } from "../__components.js";

/**
 * Submits a job to a deployed app, waits for the computation to finish and returns the result to the user.
 * Note: This currently only works for deployed apps that are backed by deployments and not for ones backed
 * by MGS.
 */
export async function executeOnDeployedApp(
  ctx: ConjureContext,
  request: _SubmitJobToDeployedAppRequest,
): Promise<string> {
  return conjureFetch(
    ctx,
    `/module-group-multiplexer/deployed-apps/jobs/execute`,
    "POST",
    request,
    undefined,
    undefined,
    "application/octet-stream",
  );
}
