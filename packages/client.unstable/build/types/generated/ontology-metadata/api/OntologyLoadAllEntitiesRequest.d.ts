import type { OntologyVersion } from "./OntologyVersion.js";
/**
* Request to load all Ontology entities.
*/
export interface OntologyLoadAllEntitiesRequest {
	ontologyVersion: OntologyVersion | undefined;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
