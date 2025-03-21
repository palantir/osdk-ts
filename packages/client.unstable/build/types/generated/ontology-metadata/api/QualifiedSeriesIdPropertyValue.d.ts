import type { SeriesIdPropertyValue } from "./SeriesIdPropertyValue.js";
import type { TimeSeriesSyncRid } from "./TimeSeriesSyncRid.js";
/**
* Codex seriesId qualified with a time series syncRid
*/
export interface QualifiedSeriesIdPropertyValue {
	seriesId: SeriesIdPropertyValue;
	syncRid: TimeSeriesSyncRid;
}
