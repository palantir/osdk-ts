import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { OntologyIrParameterObjectTypeReference } from "./OntologyIrParameterObjectTypeReference.js";
export interface OntologyIrParameterObjectTypeReferenceOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface OntologyIrParameterObjectTypeReferenceOrEmpty_objectTypeReference {
	type: "objectTypeReference";
	objectTypeReference: OntologyIrParameterObjectTypeReference;
}
export type OntologyIrParameterObjectTypeReferenceOrEmpty = OntologyIrParameterObjectTypeReferenceOrEmpty_empty | OntologyIrParameterObjectTypeReferenceOrEmpty_objectTypeReference;
