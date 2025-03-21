import type { ConditionalOverrideModification } from "./ConditionalOverrideModification.js";
import type { ParameterValidationBlockModification } from "./ParameterValidationBlockModification.js";
import type { StructFieldConditionalValidationBlockModification } from "./StructFieldConditionalValidationBlockModification.js";
import type { StructParameterFieldApiName } from "./types/StructParameterFieldApiName.js";
export interface ConditionalValidationBlockModification {
	conditionalOverrides: Array<ConditionalOverrideModification>;
	defaultValidation: ParameterValidationBlockModification;
	structFieldValidations: Record<StructParameterFieldApiName, StructFieldConditionalValidationBlockModification>;
}
