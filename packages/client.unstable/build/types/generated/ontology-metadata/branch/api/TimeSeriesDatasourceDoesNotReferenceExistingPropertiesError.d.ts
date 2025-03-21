import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeId } from "../../api/PropertyTypeId.js";
import type { TimeSeriesSyncRid } from "../../api/TimeSeriesSyncRid.js";
/**
* An error representing when a time series datasource references properties that do not exist on the object type.
*/
export interface TimeSeriesDatasourceDoesNotReferenceExistingPropertiesError {
	objectType: ObjectTypeRid;
	timeSeriesSyncRid: TimeSeriesSyncRid;
	nonExistentPropertyTypeIds: Array<PropertyTypeId>;
}
