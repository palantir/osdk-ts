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

import { conjureFetch, type ConjureContext } from "conjure-lite";

import type { ServiceStatus as _ServiceStatus } from "../__components.js";

/**
 * Publish a lifecycle event. Called by services whenever a status
 * transition occurs.
 */
export async function publishStatus(
  ctx: ConjureContext,
  status: _ServiceStatus
): Promise<void> {
  return conjureFetch(ctx, `/status`, "POST", status);
}
