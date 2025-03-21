import type { OntologyIrParameterPrefill } from "./OntologyIrParameterPrefill.js";
import type { ParameterRenderHint } from "./types/ParameterRenderHint.js";
import type { ParameterVisibility } from "./types/ParameterVisibility.js";
/**
* These values provide details about how parameter fields should be displayed in the form. They are not used to
* evaluate correctness of submitted parameters.
*/
export interface OntologyIrParameterValidationDisplayMetadata {
	visibility: ParameterVisibility;
	renderHint: ParameterRenderHint;
	prefill: OntologyIrParameterPrefill | undefined;
}
