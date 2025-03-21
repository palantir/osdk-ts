import { type ConjureContext } from "conjure-lite";
import type { LoadRuleSetsRequest } from "../LoadRuleSetsRequest.js";
import type { LoadRuleSetsResponse } from "../LoadRuleSetsResponse.js";
/**
* Endpoint to batch load RuleSets. The returned LoadRuleSetsResponse will only contain
* RuleSets that actually exist and are visible to the user. If the user has requested RuleSets at
* invalid ontology versions or RuleSets that do not exist in the specified versions,
* those will not be present in the response.
*/
export declare function loadRuleSets(ctx: ConjureContext, request: LoadRuleSetsRequest): Promise<LoadRuleSetsResponse>;
