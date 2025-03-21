import type { MarkingId } from "../MarkingId.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { TimeSeriesSyncRid } from "../TimeSeriesSyncRid.js";
export interface ObjectTypeTimeSeriesDatasourceModification {
	timeSeriesSyncRid: TimeSeriesSyncRid;
	properties: Array<PropertyTypeId>;
	assumedMarkings: Array<MarkingId>;
}
