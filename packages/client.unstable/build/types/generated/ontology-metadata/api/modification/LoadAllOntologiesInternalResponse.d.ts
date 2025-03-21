import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyInformationInternal } from "./OntologyInformationInternal.js";
/**
* Response to LoadAllOntologiesInternalRequest. This includes information
* about the Ontologies that a user can access. It is expected
* that only administrative users should have access to multiple
* Ontologies. This is only expected to be used by Ontology Metadata App.
*/
export interface LoadAllOntologiesInternalResponse {
	ontologies: Record<OntologyRid, OntologyInformationInternal>;
}
