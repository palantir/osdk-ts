import type { MustBeEmpty } from "./MustBeEmpty.js";
import type { ParameterFreeText } from "./ParameterFreeText.js";
export interface ParameterFreeTextOrEmpty_empty {
	type: "empty";
	empty: MustBeEmpty;
}
export interface ParameterFreeTextOrEmpty_text {
	type: "text";
	text: ParameterFreeText;
}
export type ParameterFreeTextOrEmpty = ParameterFreeTextOrEmpty_empty | ParameterFreeTextOrEmpty_text;
