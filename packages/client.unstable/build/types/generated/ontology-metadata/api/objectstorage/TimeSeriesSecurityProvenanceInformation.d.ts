import type { TimeSeriesSyncRid } from "../TimeSeriesSyncRid.js";
/**
* Provenance information for a time-dependent property that is made available by Object Storage services.
*/
export interface TimeSeriesSecurityProvenanceInformation {
	timeSeriesSync: TimeSeriesSyncRid;
}
