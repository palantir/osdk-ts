import type { ParameterId } from "../ParameterId.js";
import type { PutParameterRequestModification } from "../PutParameterRequestModification.js";
/**
* Internal version of PutParameterRequestModification.
*/
export interface PutParameterRequestModificationWithId {
	id: ParameterId;
	putParameterRequest: PutParameterRequestModification;
}
