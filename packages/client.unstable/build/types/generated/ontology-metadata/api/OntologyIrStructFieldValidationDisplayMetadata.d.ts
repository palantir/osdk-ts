import type { OntologyIrStructFieldPrefill } from "./OntologyIrStructFieldPrefill.js";
import type { ParameterRenderHint } from "./types/ParameterRenderHint.js";
import type { ParameterVisibility } from "./types/ParameterVisibility.js";
/**
* These values provide details about how struct parameter nested fields should be displayed in the form.
*/
export interface OntologyIrStructFieldValidationDisplayMetadata {
	visibility: ParameterVisibility;
	renderHint: ParameterRenderHint;
	prefill: OntologyIrStructFieldPrefill | undefined;
}
