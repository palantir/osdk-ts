import type { LabelledValue } from "./LabelledValue.js";
import type { OtherValueAllowed } from "./OtherValueAllowed.js";
export interface ParameterValueOneOf {
	labelledValues: Array<LabelledValue>;
	otherValueAllowed: OtherValueAllowed;
}
