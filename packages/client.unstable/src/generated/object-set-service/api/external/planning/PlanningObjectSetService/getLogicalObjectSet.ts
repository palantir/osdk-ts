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
import type { LogicalObjectSetRequest } from "../LogicalObjectSetRequest.js";
import type { LogicalObjectSetResponse } from "../LogicalObjectSetResponse.js";

/**
 * Endpoint which exposes the logical plan for a given object set.
 * This endpoint will output a logical object set if and only if the Object Types and Link Types referenced in the given Object Set are backed by Objects Backend V2.
 * A user must be able to view all Object Types and Link Types that are referenced in the given Object Set. They must also have `object-set-service:read-object-set` on the given Object Set.
 */
export async function getLogicalObjectSet(
  ctx: ConjureContext,
  request: LogicalObjectSetRequest,
): Promise<LogicalObjectSetResponse> {
  return conjureFetch(ctx, `/plan/logical`, "POST", request);
}
