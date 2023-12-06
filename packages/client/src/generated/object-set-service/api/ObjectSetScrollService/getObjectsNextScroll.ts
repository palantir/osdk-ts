/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { GetObjectsNextScrollRequest } from "../GetObjectsNextScrollRequest.js";
import type { GetObjectsScrollResponse } from "../GetObjectsScrollResponse.js";

/**
 * Request for a subsequent scroll of ObjectRid(s).
 */
export async function getObjectsNextScroll(
  ctx: ConjureContext,
  request: GetObjectsNextScrollRequest,
): Promise<GetObjectsScrollResponse> {
  return conjureFetch(ctx, `/scroll/next`, "POST", request);
}
