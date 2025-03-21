/**
* Request to delete an Ontology. The Ontology must be empty in order
* to delete it unless the `allowNonEmptyOntologyDeletion` flag is set to true.
* Requires the "ontology:delete-ontology" permission on the OntologyRid.
*/
export interface OntologyDeleteRequest {
	deleteAllExistingEntitiesInOntology: boolean | undefined;
}
