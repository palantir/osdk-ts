import type { MarkingId } from "./MarkingId.js";
import type { PropertyTypeRid } from "./PropertyTypeRid.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
/**
* Object type datasource that is backed by a time series sync, uniquely identified by its rid.
*/
export interface ObjectTypeTimeSeriesDatasource {
	timeSeriesSyncRid: TimeSeriesSyncRid;
	properties: Array<PropertyTypeRid>;
	assumedMarkings: Array<MarkingId>;
}
