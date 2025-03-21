import type { OntologyIrQualifiedSeriesIdPropertyValue } from "../OntologyIrQualifiedSeriesIdPropertyValue.js";
import type { SeriesIdPropertyValue } from "../SeriesIdPropertyValue.js";
import type { TemplateRidPropertyValue } from "../TemplateRidPropertyValue.js";
export interface OntologyIrTimeDependentPropertyValue_seriesId {
	type: "seriesId";
	seriesId: SeriesIdPropertyValue;
}
export interface OntologyIrTimeDependentPropertyValue_templateRid {
	type: "templateRid";
	templateRid: TemplateRidPropertyValue;
}
export interface OntologyIrTimeDependentPropertyValue_qualifiedSeriesId {
	type: "qualifiedSeriesId";
	qualifiedSeriesId: OntologyIrQualifiedSeriesIdPropertyValue;
}
/**
* Identifies a time series in codex.
* The qualifiedSeriesId variant should be used when there are multiple time series datasources backing this
* property value (and therefore we need to specify which one to qualify with).
*/
export type OntologyIrTimeDependentPropertyValue = OntologyIrTimeDependentPropertyValue_seriesId | OntologyIrTimeDependentPropertyValue_templateRid | OntologyIrTimeDependentPropertyValue_qualifiedSeriesId;
