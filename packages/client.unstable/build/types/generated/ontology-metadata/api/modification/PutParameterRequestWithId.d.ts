import type { ParameterId } from "../ParameterId.js";
import type { PutParameterRequest } from "../PutParameterRequest.js";
/**
* Internal version of PutParameterRequest.
*/
export interface PutParameterRequestWithId {
	id: ParameterId;
	putParameterRequest: PutParameterRequest;
}
