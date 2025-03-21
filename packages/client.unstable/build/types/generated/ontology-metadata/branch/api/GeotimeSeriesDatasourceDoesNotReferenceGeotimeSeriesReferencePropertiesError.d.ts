import type { GeotimeSeriesIntegrationRid } from "../../api/GeotimeSeriesIntegrationRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
/**
* An error representing when a geotime series datasource references non-GTSR properties.
*/
export interface GeotimeSeriesDatasourceDoesNotReferenceGeotimeSeriesReferencePropertiesError {
	objectType: ObjectTypeRid;
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
	nonGeotimeSeriesReferenceRids: Array<PropertyTypeRid>;
}
