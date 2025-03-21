import type { GetEntityModificationHistoryResponse } from "../modification/GetEntityModificationHistoryResponse.js";
import type { OntologyRid } from "../OntologyRid.js";
export interface OntologyMetadataServiceGetEntityModificationHistoryResultParams {
	ontologyRid: OntologyRid;
	response: GetEntityModificationHistoryResponse;
}
