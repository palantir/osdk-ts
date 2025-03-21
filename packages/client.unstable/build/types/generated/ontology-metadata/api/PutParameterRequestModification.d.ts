import type { ConditionalValidationBlockModification } from "./ConditionalValidationBlockModification.js";
import type { ParameterDisplayMetadata } from "./ParameterDisplayMetadata.js";
import type { BaseParameterTypeModification } from "./types/BaseParameterTypeModification.js";
/**
* A PutParameterRequestModification is used to create or modify Parameters.
*/
export interface PutParameterRequestModification {
	type: BaseParameterTypeModification;
	displayMetadata: ParameterDisplayMetadata;
	validation: ConditionalValidationBlockModification;
}
