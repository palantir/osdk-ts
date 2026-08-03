/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type {
  Attribution,
  PreviewMode,
  TraceParent,
  TraceState,
} from "@osdk/foundry.core";
import type {
  QueryApiName,
  StreamingExecuteQueryRequest,
  TransactionId,
} from "@osdk/foundry.functions";
import type { FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch } from "@osdk/shared.net.platformapi";

/**
 * POST /v2/functions/queries/{queryApiName}/streamingExecute
 *
 * NOTE: `@osdk/foundry.functions` generated this binding up to
 * 2.66.0 and stopped in 2.67.0, but the endpoint is still served. This is a
 * verbatim copy of that generated binding so the catalog can track the current
 * platform SDK. Delete it in favour of `Query.streamingExecute` if the endpoint
 * is published again.
 */
export function streamingExecute(
  $ctx: Parameters<typeof foundryPlatformFetch>[0],
  ...args: Parameters<StreamingExecuteQuery>
): Promise<Response> {
  return foundryPlatformFetch($ctx, streamingExecuteMethod, ...args);
}

/**
 * `application/octet-stream` keeps `foundryPlatformFetch` from parsing the body
 * as JSON, so callers get the raw ndjson `Response` to read incrementally.
 */
const streamingExecuteMethod: FoundryPlatformMethod<StreamingExecuteQuery> = [
  1,
  "/v2/functions/queries/{0}/streamingExecute",
  7,
  undefined,
  "application/octet-stream",
];

type StreamingExecuteQuery = (
  queryApiName: QueryApiName,
  $body: StreamingExecuteQueryRequest,
  $queryParams?: {
    transactionId?: TransactionId | undefined;
    preview?: PreviewMode | undefined;
  },
  $headerParams?: {
    attribution?: Attribution | undefined;
    traceParent?: TraceParent | undefined;
    traceState?: TraceState | undefined;
  },
) => Promise<Response>;
