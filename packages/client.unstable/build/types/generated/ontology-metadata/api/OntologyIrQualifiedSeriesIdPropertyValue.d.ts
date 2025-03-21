import type { TimeSeriesSyncName } from "./blockdata/TimeSeriesSyncName.js";
import type { SeriesIdPropertyValue } from "./SeriesIdPropertyValue.js";
/**
* Codex seriesId qualified with a time series syncRid
*/
export interface OntologyIrQualifiedSeriesIdPropertyValue {
	seriesId: SeriesIdPropertyValue;
	syncRid: TimeSeriesSyncName;
}
