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
import type {
  LoadObjectsRequest as _api_LoadObjectsRequest,
  LoadObjectsResponse as _api_LoadObjectsResponse,
} from "../__components.js";

/**
 * Returns loaded `FoundryObject`s from a list of at most 10_000 object identifiers. Any provided object locator
 * on an object type rid or property type rid which does not exist (or is not visible) will throw a relevant
 * exception.
 *
 * The API can result in the following errors instead of results:
 * - TooManyObjectsRequested
 * - NoObjectTypeFoundForRid
 * - PropertyNotFoundForRid
 */
export async function loadObjects(
  ctx: ConjureContext,
  request: _api_LoadObjectsRequest,
): Promise<_api_LoadObjectsResponse> {
  return conjureFetch(ctx, `/objects/load`, "PUT", request);
}
