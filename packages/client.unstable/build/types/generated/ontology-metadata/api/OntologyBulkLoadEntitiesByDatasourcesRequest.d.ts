import type { DatasourceBackingRid } from "./DatasourceBackingRid.js";
/**
* Request to batch load Ontology entities by their backing datasource rids. If any of the requested
* entities are not available in the latest version of any Ontology or the user is
* missing permissions to see them, the corresponding entry in the
* response will be empty. Upper limit for number of datasource rids is 500 for this request.
*/
export interface OntologyBulkLoadEntitiesByDatasourcesRequest {
	datasourceBackingRids: Array<DatasourceBackingRid>;
	loadRedacted: boolean | undefined;
	includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
