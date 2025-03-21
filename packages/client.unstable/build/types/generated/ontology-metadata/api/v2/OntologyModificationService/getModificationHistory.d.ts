import { type ConjureContext } from "conjure-lite";
import type { GetModificationHistoryRequest } from "../../modification/GetModificationHistoryRequest.js";
import type { GetModificationHistoryResponse } from "../../modification/GetModificationHistoryResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Returns pages of metadata about the history of modifications to the provided Ontology, including the
* OntologyVersion and Attribution for each modification. The order of the items returned is from the most recent
* to the oldest.
*/
export declare function getModificationHistory(ctx: ConjureContext, ontologyRid: OntologyRid, request: GetModificationHistoryRequest): Promise<GetModificationHistoryResponse>;
