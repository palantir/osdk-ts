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

import type {
  OntologySeed as _OntologySeed,
  SetSeedResponse as _SetSeedResponse,
} from "../__components.js";

/**
 * Sets the seed state of the local ontology server. Succeeds with an
 * empty `200` response; failures surface as errors: 400 for a malformed
 * request body, 503 while the server is still starting, and 500 (with
 * the underlying detail) for seeding failures.
 */
export async function setSeed(
  ctx: ConjureContext,
  seed: _OntologySeed
): Promise<_SetSeedResponse> {
  return conjureFetch(ctx, `/seed`, "PUT", seed);
}
