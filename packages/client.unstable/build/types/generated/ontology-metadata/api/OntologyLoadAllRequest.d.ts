import type { OntologyVersion } from "./OntologyVersion.js";
/**
* This has been deprecated. Please refer to documentation of the `loadAllOntology` endpoint for
* the recommended alternative.
*/
export interface OntologyLoadAllRequest {
	ontologyVersion: OntologyVersion | undefined;
}
