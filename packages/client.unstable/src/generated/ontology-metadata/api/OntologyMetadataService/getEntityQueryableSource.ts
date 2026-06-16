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

import { type ConjureContext, conjureFetch } from "conjure-lite";
import type {
  GetEntityQueryableSourceRequest as _api_GetEntityQueryableSourceRequest,
  GetEntityQueryableSourceResponse as _api_GetEntityQueryableSourceResponse,
} from "../__components.js";

/**
 * Resolves an ontology entity (object or link type) to a suitable delegate source for Spark input.
 */
export async function getEntityQueryableSource(
  ctx: ConjureContext,
  request: _api_GetEntityQueryableSourceRequest,
): Promise<_api_GetEntityQueryableSourceResponse> {
  return conjureFetch(ctx, `/ontology/entityQueryableSource`, "POST", request);
}
