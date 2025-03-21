import type { GeotimeSeriesIntegrationRid } from "../GeotimeSeriesIntegrationRid.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* Object type datasource that is backed by Geotime, uniquely identified by its rid.
*/
export interface ObjectTypeGeotimeSeriesDatasourceModification {
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
	properties: Array<PropertyTypeId>;
}
