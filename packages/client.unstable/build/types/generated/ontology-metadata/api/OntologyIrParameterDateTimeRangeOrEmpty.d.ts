import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterDateTimeRange } from "./OntologyIrParameterDateTimeRange.js";
export interface OntologyIrParameterDateTimeRangeOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterDateTimeRangeOrEmpty_datetime {
	type: "datetime";
	datetime: OntologyIrParameterDateTimeRange;
}
export type OntologyIrParameterDateTimeRangeOrEmpty = OntologyIrParameterDateTimeRangeOrEmpty_empty | OntologyIrParameterDateTimeRangeOrEmpty_datetime;
