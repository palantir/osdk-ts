import type { ConditionalValidationBlock } from "./ConditionalValidationBlock.js";
import type { ParameterDisplayMetadata } from "./ParameterDisplayMetadata.js";
import type { ParameterId } from "./ParameterId.js";
import type { BaseParameterType } from "./types/BaseParameterType.js";
/**
* Request to edit an existing parameter
*/
export interface EditParameterRequest {
	id: ParameterId;
	type: BaseParameterType;
	displayMetadata: ParameterDisplayMetadata;
	validation: ConditionalValidationBlock;
}
