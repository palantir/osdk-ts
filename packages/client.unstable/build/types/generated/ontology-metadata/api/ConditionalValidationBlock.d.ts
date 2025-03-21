import type { ConditionalOverride } from "./ConditionalOverride.js";
import type { ParameterValidationBlock } from "./ParameterValidationBlock.js";
import type { StructFieldConditionalValidationBlock } from "./StructFieldConditionalValidationBlock.js";
import type { StructParameterFieldApiName } from "./types/StructParameterFieldApiName.js";
export interface ConditionalValidationBlock {
	conditionalOverrides: Array<ConditionalOverride>;
	defaultValidation: ParameterValidationBlock;
	structFieldValidations: Record<StructParameterFieldApiName, StructFieldConditionalValidationBlock>;
}
