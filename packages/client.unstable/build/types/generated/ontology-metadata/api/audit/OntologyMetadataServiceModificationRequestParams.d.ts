import type { OntologyModificationRequest } from "../modification/OntologyModificationRequest.js";
import type { OntologyRid } from "../OntologyRid.js";
export interface OntologyMetadataServiceModificationRequestParams {
	ontologyRid: OntologyRid;
	request: OntologyModificationRequest;
}
