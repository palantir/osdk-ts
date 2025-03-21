import { type ConjureContext } from "conjure-lite";
import type { GetEntityModificationHistoryRequest } from "../../modification/GetEntityModificationHistoryRequest.js";
import type { GetEntityModificationHistoryResponse } from "../../modification/GetEntityModificationHistoryResponse.js";
/**
* Returns pages of metadata about the history of modifications to the provided entity, including the
* OntologyVersion and Attribution for each modification. The order of the items returned is from the most recent
* to the oldest. Unlike `getEntityModificationHistory`, does not require OntologyRid as a path parameter, and
* attempts to find the OntologyRid given either the EntityRid or the OntologyBranchRid.
*/
export declare function getEntityModificationHistoryV2(ctx: ConjureContext, request: GetEntityModificationHistoryRequest): Promise<GetEntityModificationHistoryResponse>;
