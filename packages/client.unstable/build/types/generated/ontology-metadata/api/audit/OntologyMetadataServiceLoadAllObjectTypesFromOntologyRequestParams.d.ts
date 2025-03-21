import type { LoadAllObjectTypesPageRequest } from "../LoadAllObjectTypesPageRequest.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface OntologyMetadataServiceLoadAllObjectTypesFromOntologyRequestParams {
	request: LoadAllObjectTypesPageRequest;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
