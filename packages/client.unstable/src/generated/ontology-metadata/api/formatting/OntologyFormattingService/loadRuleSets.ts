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
  LoadRuleSetsRequest as _api_formatting_LoadRuleSetsRequest,
  LoadRuleSetsResponse as _api_formatting_LoadRuleSetsResponse,
} from "../__components.js";

/**
 * Endpoint to batch load RuleSets. The returned LoadRuleSetsResponse will only contain
 * RuleSets that actually exist and are visible to the user. If the user has requested RuleSets at
 * invalid ontology versions or RuleSets that do not exist in the specified versions,
 * those will not be present in the response.
 */
export async function loadRuleSets(
  ctx: ConjureContext,
  request: _api_formatting_LoadRuleSetsRequest,
): Promise<_api_formatting_LoadRuleSetsResponse> {
  return conjureFetch(
    ctx,
    `/formatting/rulesets/loadRuleSets`,
    "POST",
    request,
  );
}
