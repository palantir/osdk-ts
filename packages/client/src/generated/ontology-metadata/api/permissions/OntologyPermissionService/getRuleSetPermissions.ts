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
import type { OntologyBranchRid } from "../../OntologyBranchRid.js";
import type { RuleSetRid } from "../../RuleSetRid.js";
import type { GetRuleSetPermissionsResponse } from "../GetRuleSetPermissionsResponse.js";

/**
 * Returns which permissions the user has on the RuleSet.
 */
export async function getRuleSetPermissions(
  ctx: ConjureContext,
  ruleSetRid: RuleSetRid,
  ontologyBranchRid: OntologyBranchRid | undefined,
): Promise<GetRuleSetPermissionsResponse> {
  return conjureFetch(
    ctx,
    `/permissions/ruleSet/${ruleSetRid}?${new URLSearchParams({
      "ontologyBranchRid": "" + ontologyBranchRid,
    })}`,
    "GET",
  );
}
