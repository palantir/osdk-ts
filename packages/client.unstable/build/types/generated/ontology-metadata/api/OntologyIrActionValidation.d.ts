import type { OntologyIrActionTypeLevelValidation } from "./OntologyIrActionTypeLevelValidation.js";
import type { OntologyIrConditionalValidationBlock } from "./OntologyIrConditionalValidationBlock.js";
import type { OntologyIrSectionDisplayBlock } from "./OntologyIrSectionDisplayBlock.js";
import type { ParameterId } from "./ParameterId.js";
import type { SectionId } from "./SectionId.js";
export interface OntologyIrActionValidation {
	actionTypeLevelValidation: OntologyIrActionTypeLevelValidation;
	parameterValidations: Record<ParameterId, OntologyIrConditionalValidationBlock>;
	sectionValidations: Record<SectionId, OntologyIrSectionDisplayBlock>;
}
