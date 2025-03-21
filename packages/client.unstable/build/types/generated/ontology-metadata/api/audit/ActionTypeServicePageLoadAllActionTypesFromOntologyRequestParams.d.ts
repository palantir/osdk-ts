import type { LoadAllActionTypesPageRequest } from "../LoadAllActionTypesPageRequest.js";
import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyVersion } from "../OntologyVersion.js";
export interface ActionTypeServicePageLoadAllActionTypesFromOntologyRequestParams {
	request: LoadAllActionTypesPageRequest;
	ontologyRid: OntologyRid;
	ontologyVersion: OntologyVersion;
}
