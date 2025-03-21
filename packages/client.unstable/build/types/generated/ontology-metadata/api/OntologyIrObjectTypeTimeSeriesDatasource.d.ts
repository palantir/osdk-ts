import type { TimeSeriesSyncName } from "./blockdata/TimeSeriesSyncName.js";
import type { MarkingId } from "./MarkingId.js";
import type { ObjectTypeFieldApiName } from "./ObjectTypeFieldApiName.js";
/**
* Object type datasource that is backed by a time series sync, uniquely identified by its rid.
*/
export interface OntologyIrObjectTypeTimeSeriesDatasource {
	timeSeriesSyncRid: TimeSeriesSyncName;
	properties: Array<ObjectTypeFieldApiName>;
	assumedMarkings: Array<MarkingId>;
}
