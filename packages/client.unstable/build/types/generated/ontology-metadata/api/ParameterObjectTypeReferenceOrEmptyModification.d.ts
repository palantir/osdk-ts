import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterObjectTypeReferenceModification } from "./ParameterObjectTypeReferenceModification.js";
export interface ParameterObjectTypeReferenceOrEmptyModification_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterObjectTypeReferenceOrEmptyModification_objectTypeReference {
	type: "objectTypeReference";
	objectTypeReference: ParameterObjectTypeReferenceModification;
}
export type ParameterObjectTypeReferenceOrEmptyModification = ParameterObjectTypeReferenceOrEmptyModification_empty | ParameterObjectTypeReferenceOrEmptyModification_objectTypeReference;
