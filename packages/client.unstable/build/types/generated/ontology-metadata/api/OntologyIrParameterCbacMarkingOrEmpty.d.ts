import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterCbacMarking } from "./OntologyIrParameterCbacMarking.js";
export interface OntologyIrParameterCbacMarkingOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterCbacMarkingOrEmpty_cbacMarking {
	type: "cbacMarking";
	cbacMarking: OntologyIrParameterCbacMarking;
}
/**
* Allows values that satisfy the cbacMarking max classification. If empty, it will only allow empty values.
*/
export type OntologyIrParameterCbacMarkingOrEmpty = OntologyIrParameterCbacMarkingOrEmpty_empty | OntologyIrParameterCbacMarkingOrEmpty_cbacMarking;
