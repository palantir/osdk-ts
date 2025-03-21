import type { ConditionalValidationBlock } from "./ConditionalValidationBlock.js";
import type { ParameterDisplayMetadata } from "./ParameterDisplayMetadata.js";
import type { BaseParameterType } from "./types/BaseParameterType.js";
/**
* A PutParameterRequest is used to create or modify Parameters.
*/
export interface PutParameterRequest {
	type: BaseParameterType;
	displayMetadata: ParameterDisplayMetadata;
	validation: ConditionalValidationBlock;
}
