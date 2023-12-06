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
import type { RegisterDependencyRequest } from "../RegisterDependencyRequest.js";
import type { RegisterDependencyResponse } from "../RegisterDependencyResponse.js";

/**
 * Endpoint to register dependecies on ontology entities.
 * Will overwrite any existing dependencies associated with the given application.
 * Permissions required:
 * - `ontology:register-dependency` on the root ontology rid
 */
export async function registerDependency(
  ctx: ConjureContext,
  request: RegisterDependencyRequest,
): Promise<RegisterDependencyResponse> {
  return conjureFetch(ctx, `/provenance/registerDependency`, "PUT", request);
}
