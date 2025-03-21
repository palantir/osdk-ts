import type { OntologyInformation } from "./OntologyInformation.js";
import type { OntologyRid } from "./OntologyRid.js";
/**
* Response to LoadAllOntologiesRequest. This includes information
* about the Ontologies where the user has the "ontology:view-ontology"
* permission on the OntologyRid.
*/
export interface LoadAllOntologiesResponse {
	ontologies: Record<OntologyRid, OntologyInformation>;
}
