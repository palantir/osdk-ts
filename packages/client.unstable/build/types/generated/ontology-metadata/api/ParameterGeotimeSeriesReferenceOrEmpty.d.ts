import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterGeotimeSeriesReference } from "./ParameterGeotimeSeriesReference.js";
export interface ParameterGeotimeSeriesReferenceOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterGeotimeSeriesReferenceOrEmpty_geotimeSeries {
	type: "geotimeSeries";
	geotimeSeries: ParameterGeotimeSeriesReference;
}
export type ParameterGeotimeSeriesReferenceOrEmpty = ParameterGeotimeSeriesReferenceOrEmpty_empty | ParameterGeotimeSeriesReferenceOrEmpty_geotimeSeries;
