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
  ActionTypeModifyRequest as _api_ActionTypeModifyRequest,
  ActionTypeModifyResponse as _api_ActionTypeModifyResponse,
  OntologyRid as _api_OntologyRid,
} from "../../__components.js";

/**
 * Endpoint to modify ActionTypes.
 */
export async function modifyActionTypes(
  ctx: ConjureContext,
  ontologyRid: _api_OntologyRid | null | undefined,
  request: _api_ActionTypeModifyRequest,
): Promise<_api_ActionTypeModifyResponse> {
  return conjureFetch(ctx, `/actions/types/modify`, "POST", request, {
    ontologyRid,
  });
}
