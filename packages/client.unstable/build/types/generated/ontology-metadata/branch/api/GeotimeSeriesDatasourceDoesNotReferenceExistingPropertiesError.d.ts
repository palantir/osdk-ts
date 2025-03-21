import type { GeotimeSeriesIntegrationRid } from "../../api/GeotimeSeriesIntegrationRid.js";
import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
/**
* An error representing when a geotime series datasource references properties that do not exist on the object type.
*/
export interface GeotimeSeriesDatasourceDoesNotReferenceExistingPropertiesError {
	objectType: ObjectTypeRid;
	geotimeSeriesIntegrationRid: GeotimeSeriesIntegrationRid;
	nonExistentPropertyTypeIds: Array<PropertyTypeId>;
}
