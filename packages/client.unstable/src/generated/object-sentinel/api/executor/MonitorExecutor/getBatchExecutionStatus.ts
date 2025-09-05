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
  BatchExecutionStatusRequest as _api_executor_BatchExecutionStatusRequest,
  BatchExecutionStatusResponse as _api_executor_BatchExecutionStatusResponse,
} from "../__components.js";
export async function getBatchExecutionStatus(
  ctx: ConjureContext,
  request: _api_executor_BatchExecutionStatusRequest,
): Promise<_api_executor_BatchExecutionStatusResponse> {
  return conjureFetch(
    ctx,
    `/executor/v0/monitors/batchExecuteStatus`,
    "POST",
    request,
  );
}
