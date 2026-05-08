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
  EvaluatePsgForObjectInstancesRequest
    as _api_security_EvaluatePsgForObjectInstancesRequest,
  EvaluatePsgForObjectInstancesResponse
    as _api_security_EvaluatePsgForObjectInstancesResponse,
} from "../__components.js";

/**
 * Evaluates Property Security Group (PSG) visibility for hypothetical object instances against a given PSG
 * configuration. This enables previewing how PSG changes affect visibility before committing to the ontology.
 *
 * The caller must have the ontology:edit-property-security-group permission on the specified object type. The
 * object type needs to be saved for this API to be used.
 */
export async function evaluatePropertySecurityGroupsForObjectInstances(
  ctx: ConjureContext,
  request: _api_security_EvaluatePsgForObjectInstancesRequest,
): Promise<_api_security_EvaluatePsgForObjectInstancesResponse> {
  return conjureFetch(ctx, `/psg-evaluation/eval`, "POST", request);
}
