import type { ConditionalValidationBlockModification } from "./ConditionalValidationBlockModification.js";
import type { ParameterDisplayMetadata } from "./ParameterDisplayMetadata.js";
import type { ParameterId } from "./ParameterId.js";
import type { BaseParameterTypeModification } from "./types/BaseParameterTypeModification.js";
/**
* Request to edit an existing parameter
*/
export interface EditParameterRequestModification {
	id: ParameterId;
	type: BaseParameterTypeModification;
	displayMetadata: ParameterDisplayMetadata;
	validation: ConditionalValidationBlockModification;
}
