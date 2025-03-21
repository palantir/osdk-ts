import type { ParameterPrefill } from "./ParameterPrefill.js";
import type { ParameterRenderHint } from "./types/ParameterRenderHint.js";
import type { ParameterVisibility } from "./types/ParameterVisibility.js";
/**
* These values provide details about how parameter fields should be displayed in the form. They are not used to
* evaluate correctness of submitted parameters.
*/
export interface ParameterValidationDisplayMetadata {
	visibility: ParameterVisibility;
	renderHint: ParameterRenderHint;
	prefill: ParameterPrefill | undefined;
}
