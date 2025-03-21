import type { ParameterDisabled } from "./ParameterDisabled.js";
import type { ParameterEditable } from "./ParameterEditable.js";
import type { ParameterHidden } from "./ParameterHidden.js";
export interface ParameterVisibility_editable {
	type: "editable";
	editable: ParameterEditable;
}
export interface ParameterVisibility_disabled {
	type: "disabled";
	disabled: ParameterDisabled;
}
export interface ParameterVisibility_hidden {
	type: "hidden";
	hidden: ParameterHidden;
}
export type ParameterVisibility = ParameterVisibility_editable | ParameterVisibility_disabled | ParameterVisibility_hidden;
