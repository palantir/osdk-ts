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
  JobId as _JobId,
  JobStatus as _JobStatus,
} from "../__components.js";

/**
 * Returns the status of the given job. Can only be called by a user that previously submitted the job.
 * This would long poll the module for a duration determined by the module, clients would benefit from
 * using an async client to call this endpoint to save thread blocked on the request.
 */
export async function getJobStatus(
  ctx: ConjureContext,
  jobId: _JobId,
): Promise<_JobStatus> {
  return conjureFetch(
    ctx,
    `/module-group-multiplexer/jobs/${jobId}/status`,
    "GET",
  );
}
