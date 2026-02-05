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

import type { CompileTimeMetadata, QueryDefinition } from "@osdk/api";
import type { QueryReturnType } from "../queries/types.js";
import type { Status } from "./ObservableClient/common.js";

export interface FunctionPayload<T = unknown> {
  status: Status;
  result: T | undefined;
  lastUpdated: number;
  error?: Error;
}

export interface TypedFunctionPayload<Q extends QueryDefinition<any>>
  extends FunctionPayload<QueryReturnType<CompileTimeMetadata<Q>["output"]>>
{}
