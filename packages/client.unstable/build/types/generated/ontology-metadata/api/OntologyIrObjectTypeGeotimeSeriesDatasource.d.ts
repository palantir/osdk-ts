import type { GeotimeSeriesIntegrationName } from "./blockdata/GeotimeSeriesIntegrationName.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Object type datasource that is backed by a Geotime integration, uniquely identified by its rid.
*/
export interface OntologyIrObjectTypeGeotimeSeriesDatasource {
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationName;
	properties: Array<ObjectTypeFieldApiName>;
}
