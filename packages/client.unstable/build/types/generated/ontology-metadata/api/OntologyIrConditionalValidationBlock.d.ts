import type { OntologyIrConditionalOverride } from "./OntologyIrConditionalOverride.js";
import type { OntologyIrParameterValidationBlock } from "./OntologyIrParameterValidationBlock.js";
import type { OntologyIrStructFieldConditionalValidationBlock } from "./OntologyIrStructFieldConditionalValidationBlock.js";
import type { StructParameterFieldApiName } from "./types/StructParameterFieldApiName.js";
export interface OntologyIrConditionalValidationBlock {
	conditionalOverrides: Array<OntologyIrConditionalOverride>;
	defaultValidation: OntologyIrParameterValidationBlock;
	structFieldValidations: Record<StructParameterFieldApiName, OntologyIrStructFieldConditionalValidationBlock>;
}
