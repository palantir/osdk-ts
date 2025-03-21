import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectTypeReference } from "./ParameterObjectTypeReference.js";
export interface ParameterObjectTypeReferenceOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectTypeReferenceOrEmpty_objectTypeReference {
	type: "objectTypeReference";
	objectTypeReference: ParameterObjectTypeReference;
}
export type ParameterObjectTypeReferenceOrEmpty = ParameterObjectTypeReferenceOrEmpty_empty | ParameterObjectTypeReferenceOrEmpty_objectTypeReference;
