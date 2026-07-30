/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { CompileTimeMetadata, QueryDefinition } from "@osdk/api";

import type { MinimalClient } from "../MinimalClientContext.js";
import type { QueryParameterType, QueryReturnType } from "./types.js";

// Streaming query execution is not currently supported in the TypeScript OSDK:
// the `streamingExecute` callable was dropped from the generated
// `@osdk/foundry.functions` SDK at 2.67.0, so this helper can no longer call it
// and throws instead. The underlying platform endpoint may still exist as an
// SSE (`text/event-stream`) operation; if the generated SDK regains a streaming
// callable, this helper should be reimplemented against it.
export function applyStreamingQuery<
  QD extends QueryDefinition<any>,
  P extends QueryParameterType<CompileTimeMetadata<QD>["parameters"]>,
>(
  _client: MinimalClient,
  _query: QD,
  _params?: P,
): AsyncGenerator<
  QueryReturnType<CompileTimeMetadata<QD>["output"]>,
  void,
  unknown
> {
  throw new Error(
    "Streaming query execution is not currently supported in the TypeScript OSDK.",
  );
}
