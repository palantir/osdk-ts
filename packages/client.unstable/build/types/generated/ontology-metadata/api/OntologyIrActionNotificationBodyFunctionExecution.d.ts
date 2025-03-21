import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
import type { OntologyIrFunctionExecutionWithRecipientInput } from "./OntologyIrFunctionExecutionWithRecipientInput.js";
/**
* A Function to be executed with action input parameters or the recipient of the notification.
*/
export interface OntologyIrActionNotificationBodyFunctionExecution {
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
	functionInputValues: Record<FunctionInputName, OntologyIrFunctionExecutionWithRecipientInput>;
}
