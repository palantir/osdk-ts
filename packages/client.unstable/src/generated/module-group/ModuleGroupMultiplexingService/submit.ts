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
  Job as _Job,
  SubmitJobRequest as _SubmitJobRequest,
} from "../__components.js";

/**
 * Submit a job to a module group asynchronously. If the job was already computed before and cached in MGS, the
 * returned job will have JobSucceeded as status. Otherwise it will return with the job in progress, and clients
 * should poll job status separately.
 */
export async function submit(
  ctx: ConjureContext,
  request: _SubmitJobRequest,
): Promise<_Job> {
  return conjureFetch(ctx, `/module-group-multiplexer/jobs`, "POST", request);
}
