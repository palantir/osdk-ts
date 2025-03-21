import type { StructFieldPrefillModification } from "./StructFieldPrefillModification.js";
import type { ParameterRenderHint } from "./types/ParameterRenderHint.js";
import type { ParameterVisibility } from "./types/ParameterVisibility.js";
/**
* These values provide details about how struct parameter nested fields should be displayed in the form.
*/
export interface StructFieldValidationDisplayMetadataModification {
	visibility: ParameterVisibility;
	renderHint: ParameterRenderHint;
	prefill: StructFieldPrefillModification | undefined;
}
