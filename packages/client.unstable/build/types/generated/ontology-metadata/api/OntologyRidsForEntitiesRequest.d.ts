/**
* Request to get ontology rids for the given ontology entities. If any of the requested
* entities are not available in the latest version of any Ontology or if the user is
* missing permissions to view its Ontology, the corresponding entry will be missing in the response.
*/
export interface OntologyRidsForEntitiesRequest {
	entityRids: Array<string>;
}
