import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterTimeSeriesReference } from "./ParameterTimeSeriesReference.js";
export interface ParameterTimeSeriesReferenceOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterTimeSeriesReferenceOrEmpty_timeSeriesReference {
	type: "timeSeriesReference";
	timeSeriesReference: ParameterTimeSeriesReference;
}
export type ParameterTimeSeriesReferenceOrEmpty = ParameterTimeSeriesReferenceOrEmpty_empty | ParameterTimeSeriesReferenceOrEmpty_timeSeriesReference;
