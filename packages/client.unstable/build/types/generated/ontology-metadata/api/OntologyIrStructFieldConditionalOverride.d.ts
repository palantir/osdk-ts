import type { OntologyIrCondition } from "./OntologyIrCondition.js";
import type { OntologyIrStructFieldValidationBlockOverride } from "./OntologyIrStructFieldValidationBlockOverride.js";
export interface OntologyIrStructFieldConditionalOverride {
	condition: OntologyIrCondition;
	structFieldBlockOverrides: Array<OntologyIrStructFieldValidationBlockOverride>;
}
