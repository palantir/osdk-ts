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
import type { PageToken as _api_registry_PageToken } from "../../registry/__components.js";
import type {
  BatchExecutionStatusByEventIdRequest
    as _api_executor_BatchExecutionStatusByEventIdRequest,
  BatchExecutionStatusByEventIdResponse
    as _api_executor_BatchExecutionStatusByEventIdResponse,
} from "../__components.js";
export async function getBatchExecutionStatusByEventId(
  ctx: ConjureContext,
  request: _api_executor_BatchExecutionStatusByEventIdRequest,
  pageToken: _api_registry_PageToken | null | undefined,
  pageSize: number | null | undefined,
): Promise<_api_executor_BatchExecutionStatusByEventIdResponse> {
  return conjureFetch(
    ctx,
    `/executor/v0/monitors/batchExecuteStatusByEventId`,
    "POST",
    request,
    { pageToken, pageSize },
  );
}
