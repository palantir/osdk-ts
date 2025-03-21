import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterValueOneOf } from "./OntologyIrParameterValueOneOf.js";
export interface OntologyIrParameterValueOneOfOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterValueOneOfOrEmpty_oneOf {
	type: "oneOf";
	oneOf: OntologyIrParameterValueOneOf;
}
export type OntologyIrParameterValueOneOfOrEmpty = OntologyIrParameterValueOneOfOrEmpty_empty | OntologyIrParameterValueOneOfOrEmpty_oneOf;
