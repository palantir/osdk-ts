import type { OntologyIrCondition } from "./OntologyIrCondition.js";
import type { OntologyIrParameterValidationBlockOverride } from "./OntologyIrParameterValidationBlockOverride.js";
export interface OntologyIrConditionalOverride {
	condition: OntologyIrCondition;
	parameterBlockOverrides: Array<OntologyIrParameterValidationBlockOverride>;
}
