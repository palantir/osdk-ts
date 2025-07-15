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
import type { QueryRunnerSchema as _QueryRunnerSchema } from "../__components.js";

/**
 * Returns an optional list of QueryRunnerSchema, which may include the names of the runners and their input
 * and output types. This should only be used for hints, and isn't guaranteed to be accurate. If the optional
 * is empty it means that the client hasn't reported yet. If the list is empty it means the client reported
 * an empty list.
 */
export async function getComputeModuleSchemas(
  ctx: ConjureContext,
  rid: string,
  branch: string,
): Promise<Array<_QueryRunnerSchema> | null | undefined> {
  return conjureFetch(
    ctx,
    `/module-group-multiplexer/schemas`,
    "GET",
    undefined,
    { rid, branch },
  );
}
