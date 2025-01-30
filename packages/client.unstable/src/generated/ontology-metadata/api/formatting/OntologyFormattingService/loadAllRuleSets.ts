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
import type { LoadAllRuleSetsRequest } from "../LoadAllRuleSetsRequest.js";
import type { LoadRuleSetsResponse } from "../LoadRuleSetsResponse.js";

/**
 * Endpoint to load rule sets from a given (or otherwise default) OntologyRid at a given (or otherwise
 * latest) OntologyVersion. The returned LoadRuleSetsResponse will only contain RuleSet(s) that are
 * visible to the user. If the user has requested to load the RuleSet(s) at an invalid OntologyVersion,
 * an empty response will be returned.
 * Note: This endpoint will be deprecated at short notice in the near future.
 */
export async function loadAllRuleSets(
  ctx: ConjureContext,
  request: LoadAllRuleSetsRequest,
): Promise<LoadRuleSetsResponse> {
  return conjureFetch(
    ctx,
    `/formatting/rulesets/loadAllRuleSets`,
    "POST",
    request,
  );
}
