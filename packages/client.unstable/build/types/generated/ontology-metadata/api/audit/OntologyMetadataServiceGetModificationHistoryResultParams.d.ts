import type { GetModificationHistoryResponse } from "../modification/GetModificationHistoryResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
export interface OntologyMetadataServiceGetModificationHistoryResultParams {
	ontologyRid: OntologyRid;
	response: GetModificationHistoryResponse;
}
