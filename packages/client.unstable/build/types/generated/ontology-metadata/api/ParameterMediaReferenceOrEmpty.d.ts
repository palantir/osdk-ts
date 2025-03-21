import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterMediaReference } from "./ParameterMediaReference.js";
export interface ParameterMediaReferenceOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterMediaReferenceOrEmpty_mediaReference {
	type: "mediaReference";
	mediaReference: ParameterMediaReference;
}
export type ParameterMediaReferenceOrEmpty = ParameterMediaReferenceOrEmpty_empty | ParameterMediaReferenceOrEmpty_mediaReference;
