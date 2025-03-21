import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
import type { PropertyTypeRid } from "../../api/PropertyTypeRid.js";
import type { TimeSeriesSyncRid } from "../../api/TimeSeriesSyncRid.js";
/**
* An error representing when a time series datasource references non-time-dependent properties.
*/
export interface TimeSeriesDatasourceDoesNotReferenceTimeDependentPropertiesError {
	objectType: ObjectTypeRid;
	timeSeriesSyncRid: TimeSeriesSyncRid;
	nonTimeDependentPropertyRids: Array<PropertyTypeRid>;
}
