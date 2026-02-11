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
  CheckActionTypeProvenanceStatusRequest
    as _api_usage_CheckActionTypeProvenanceStatusRequest,
  CheckActionTypeProvenanceStatusResponse
    as _api_usage_CheckActionTypeProvenanceStatusResponse,
} from "../__components.js";

/**
 * Checks the provenance reporting status for action types.
 * Returns whether each action type has functions with incorrect provenance reporting.
 *
 * Endpoint is intended to be used by OMA to provide users with signal about which actions
 * need remediation before migrating to Ontology roles or Ontology projects.
 */
export async function checkActionTypeProvenanceStatus(
  ctx: ConjureContext,
  request: _api_usage_CheckActionTypeProvenanceStatusRequest,
): Promise<_api_usage_CheckActionTypeProvenanceStatusResponse> {
  return conjureFetch(
    ctx,
    `/usage/checkActionTypeProvenanceStatus`,
    "POST",
    request,
  );
}
