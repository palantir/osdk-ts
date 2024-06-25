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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type { BatchEnableWatcherRequest } from "../BatchEnableWatcherRequest.js";

/**
 * Allows user to enable watching object types. Requires permission to view the requested object types.
 */
export async function batchEnableWatcher(
  ctx: ConjureContext,
  request: BatchEnableWatcherRequest,
): Promise<void> {
  return conjureFetch(
    ctx,
    `/object-set-watcher/batchEnableWatcher`,
    "POST",
    request,
  );
}
