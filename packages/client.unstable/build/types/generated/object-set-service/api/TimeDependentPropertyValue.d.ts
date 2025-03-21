import type { QualifiedSeriesIdPropertyValue } from "./QualifiedSeriesIdPropertyValue.js";
import type { SeriesIdPropertyValue } from "./SeriesIdPropertyValue.js";
import type { TemplateRidPropertyValue } from "./TemplateRidPropertyValue.js";
export interface TimeDependentPropertyValue_seriesId {
	type: "seriesId";
	seriesId: SeriesIdPropertyValue;
}
export interface TimeDependentPropertyValue_templateRid {
	type: "templateRid";
	templateRid: TemplateRidPropertyValue;
}
export interface TimeDependentPropertyValue_qualifiedSeriesId {
	type: "qualifiedSeriesId";
	qualifiedSeriesId: QualifiedSeriesIdPropertyValue;
}
/**
* Identifies a time series in codex.
* The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
* property value (and therefore we need to specify which one to qualify with).
*/
export type TimeDependentPropertyValue = TimeDependentPropertyValue_seriesId | TimeDependentPropertyValue_templateRid | TimeDependentPropertyValue_qualifiedSeriesId;
