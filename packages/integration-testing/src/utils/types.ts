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

import type { CompileTimeMetadata, QueryDefinition } from "@osdk/api";

export type QueryReturnTypeFromDef<Q extends QueryDefinition> =
  ReturnType<CompileTimeMetadata<Q>["signature"]> extends Promise<infer R>
    ? R
    : never;

export type QueryParamsFromDef<Q extends QueryDefinition> =
  Parameters<CompileTimeMetadata<Q>["signature"]> extends [infer P]
    ? P
    : undefined;
