import type { ListLengthValidation } from "./ListLengthValidation.js";
import type { ParameterNotRequired } from "./ParameterNotRequired.js";
import type { ParameterRequired } from "./ParameterRequired.js";
export interface ParameterRequiredConfiguration_required {
	type: "required";
	required: ParameterRequired;
}
export interface ParameterRequiredConfiguration_notRequired {
	type: "notRequired";
	notRequired: ParameterNotRequired;
}
export interface ParameterRequiredConfiguration_listLengthValidation {
	type: "listLengthValidation";
	listLengthValidation: ListLengthValidation;
}
/**
* Specifies the number of values that are valid for a given parameter.
*/
export type ParameterRequiredConfiguration = ParameterRequiredConfiguration_required | ParameterRequiredConfiguration_notRequired | ParameterRequiredConfiguration_listLengthValidation;
