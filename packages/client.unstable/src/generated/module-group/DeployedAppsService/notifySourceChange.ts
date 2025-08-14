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
import type { NotifySourceChangeRequest as _NotifySourceChangeRequest } from "../__components.js";

/**
 * Notify multiplexer that Source imports have been removed for certain Compute Modules. These Compute Modules
 * will be killed if they are running. Requires deployed-apps:notify-source-changes on the root node,
 * currently only to be used by Magritte.
 * Note: Experimental! While this endpoint currently kills Compute Modules that have had a Source unimported,
 * it will likely later expand to accept information about more general Source modifications.
 */
export async function notifySourceChange(
  ctx: ConjureContext,
  request: _NotifySourceChangeRequest,
): Promise<void> {
  return conjureFetch(ctx, `/deployed-apps/source-change`, "PUT", request);
}
