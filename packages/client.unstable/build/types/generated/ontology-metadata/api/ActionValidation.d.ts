import type { ActionTypeLevelValidation } from "./ActionTypeLevelValidation.js";
import type { ConditionalValidationBlock } from "./ConditionalValidationBlock.js";
import type { ParameterId } from "./ParameterId.js";
import type { SectionDisplayBlock } from "./SectionDisplayBlock.js";
import type { SectionId } from "./SectionId.js";
export interface ActionValidation {
	actionTypeLevelValidation: ActionTypeLevelValidation;
	parameterValidations: Record<ParameterId, ConditionalValidationBlock>;
	sectionValidations: Record<SectionId, SectionDisplayBlock>;
}
