import { type ConjureContext } from "conjure-lite";
import type { LoadAllRuleSetsRequest } from "../LoadAllRuleSetsRequest.js";
import type { LoadRuleSetsResponse } from "../LoadRuleSetsResponse.js";
/**
* Endpoint to load rule sets from a given (or otherwise default) OntologyRid at a given (or otherwise
* latest) OntologyVersion. The returned LoadRuleSetsResponse will only contain RuleSet(s) that are
* visible to the user. If the user has requested to load the RuleSet(s) at an invalid OntologyVersion,
* an empty response will be returned.
* Note: This endpoint will be deprecated at short notice in the near future.
*/
export declare function loadAllRuleSets(ctx: ConjureContext, request: LoadAllRuleSetsRequest): Promise<LoadRuleSetsResponse>;
