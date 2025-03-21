import type { OntologyIrStructFieldConditionalOverride } from "./OntologyIrStructFieldConditionalOverride.js";
import type { OntologyIrStructFieldValidationBlock } from "./OntologyIrStructFieldValidationBlock.js";
export interface OntologyIrStructFieldConditionalValidationBlock {
	conditionalOverrides: Array<OntologyIrStructFieldConditionalOverride>;
	defaultValidation: OntologyIrStructFieldValidationBlock;
}
