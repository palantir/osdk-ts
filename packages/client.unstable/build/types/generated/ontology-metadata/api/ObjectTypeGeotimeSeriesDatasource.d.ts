import type { GeotimeSeriesIntegrationRid } from "./GeotimeSeriesIntegrationRid.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
/**
* Object type datasource that is backed by a Geotime integration, uniquely identified by its rid.
*/
export interface ObjectTypeGeotimeSeriesDatasource {
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
	properties: Array<PropertyTypeRid>;
}
