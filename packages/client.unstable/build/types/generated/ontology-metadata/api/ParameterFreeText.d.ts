import type { ParameterTextRegex } from "./ParameterTextRegex.js";
export interface ParameterFreeText {
	minLength: number | undefined;
	maxLength: number | undefined;
	regex: ParameterTextRegex | undefined;
}
