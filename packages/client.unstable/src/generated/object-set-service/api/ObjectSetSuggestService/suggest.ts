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
  Backend as _api_Backend,
  SuggestRequest as _api_SuggestRequest,
  SuggestResponse as _api_SuggestResponse,
} from "../__components.js";

/**
 * Returns suggested values from a property that match a given input, chosen from the set of objects that match a
 * given query. The endpoint does not guarantee the ordering of results, and different calls with the same
 * request can return different suggested values.
 *
 * WARNING: Throws if an object type derived property (OTDP) is queried.
 */
export async function suggest(
  ctx: ConjureContext,
  request: _api_SuggestRequest,
  backend: _api_Backend | null | undefined,
): Promise<_api_SuggestResponse> {
  return conjureFetch(ctx, `/suggest`, "PUT", request);
}
