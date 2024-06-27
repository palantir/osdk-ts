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
import type { CreateObjectSetRequest } from "../CreateObjectSetRequest.js";
import type { CreateObjectSetResponse } from "../CreateObjectSetResponse.js";

/**
 * Creates an orphaned object set - i.e. not part of any versioned object set. This may be for temporary or internal application use. No gatekeeper resource is created - instead the given security rid is assumed to already exist and will be used to permission the created object set.
 */
export async function createObjectSet(
  ctx: ConjureContext,
  request: CreateObjectSetRequest,
): Promise<CreateObjectSetResponse> {
  return conjureFetch(ctx, `/objectSets`, "POST", request);
}
