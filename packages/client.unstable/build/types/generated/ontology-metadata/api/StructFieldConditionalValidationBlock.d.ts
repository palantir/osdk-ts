import type { StructFieldConditionalOverride } from "./StructFieldConditionalOverride.js";
import type { StructFieldValidationBlock } from "./StructFieldValidationBlock.js";
export interface StructFieldConditionalValidationBlock {
	conditionalOverrides: Array<StructFieldConditionalOverride>;
	defaultValidation: StructFieldValidationBlock;
}
