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
  CreateTemporaryObjectSetRequest as _api_CreateTemporaryObjectSetRequest,
  CreateTemporaryObjectSetResponse as _api_CreateTemporaryObjectSetResponse,
} from "../__components.js";

/**
 * Creates a temporary object set that will live for at least as long as the provided TTL, and will get deleted
 * at some point after that.
 *
 * Temporary object sets created by unscoped user tokens can only be accessed by the user that created them; a
 * gatekeeper resource is registered for every such temporary object set. NOTE: The same gatekeeper resource may
 * be reused for the same userId across different createTemporaryObjectSet requests.
 *
 * If the temporary object set is created from a build that uses a 'security-rid' output then the temp object
 * set will be secured using the relevant OutputSecurityRid for the build.
 *
 * Whenever an object set (temporary, or otherwise) referencing a temporary object set gets saved or used in
 * versioned object sets, the reference gets replaced with a full definition of the previously saved temporary
 * object. This is to ensure that they do not inherit the TTL of temporary object sets they reference.
 *
 * Please consider using temporary object sets whenever there is a need to save an object set just to be able to
 * pass it to another service without a need to persist it indefinitely.
 */
export async function createTemporaryObjectSet(
  ctx: ConjureContext,
  request: _api_CreateTemporaryObjectSetRequest,
): Promise<_api_CreateTemporaryObjectSetResponse> {
  return conjureFetch(ctx, `/objectSets/temporary`, "POST", request);
}
