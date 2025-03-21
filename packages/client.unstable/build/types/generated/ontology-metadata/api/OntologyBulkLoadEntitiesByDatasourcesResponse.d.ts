import type { EntityLoadByDatasourceResponse } from "./EntityLoadByDatasourceResponse.js";
/**
* Response to OntologyBulkLoadEntitiesByDatasourcesRequest. If any of the requested
* entities are not available in the latest version of any Ontology or the user is
* missing permissions to see them, the corresponding entry in the
* response will be empty.
*/
export interface OntologyBulkLoadEntitiesByDatasourcesResponse {
	entities: Array<Array<EntityLoadByDatasourceResponse>>;
}
