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
  CheckTranslationEligibilityRequest
    as _api_typemapping_CheckTranslationEligibilityRequest,
  CheckTranslationEligibilityResponse
    as _api_typemapping_CheckTranslationEligibilityResponse,
} from "../typemapping/__components.js";

/**
 * Evaluate if the requested Datasource Delegates can be translated into the Simple Policy Structure
 * through the specified services.
 */
export async function checkTranslationEligibility(
  ctx: ConjureContext,
  request: _api_typemapping_CheckTranslationEligibilityRequest,
): Promise<_api_typemapping_CheckTranslationEligibilityResponse> {
  return conjureFetch(
    ctx,
    `/ontology/typemapping/checkTranslationEligibility`,
    "PUT",
    request,
  );
}
