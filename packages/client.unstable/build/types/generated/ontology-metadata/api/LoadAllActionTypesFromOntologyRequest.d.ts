import type { OntologyVersion } from "./OntologyVersion.js";
/**
* A type to represent the request to load all the viewable ActionTypes in an Ontology.
*/
export interface LoadAllActionTypesFromOntologyRequest {
	ontologyVersion: OntologyVersion | undefined;
}
