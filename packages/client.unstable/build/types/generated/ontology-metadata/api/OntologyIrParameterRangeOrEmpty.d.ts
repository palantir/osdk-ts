import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterRange } from "./OntologyIrParameterRange.js";
export interface OntologyIrParameterRangeOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterRangeOrEmpty_range {
	type: "range";
	range: OntologyIrParameterRange;
}
export type OntologyIrParameterRangeOrEmpty = OntologyIrParameterRangeOrEmpty_empty | OntologyIrParameterRangeOrEmpty_range;
