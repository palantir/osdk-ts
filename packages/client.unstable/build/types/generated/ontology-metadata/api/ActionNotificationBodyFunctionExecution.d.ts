import type { FunctionExecutionWithRecipientInput } from "./FunctionExecutionWithRecipientInput.js";
import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
/**
* A Function to be executed with action input parameters or the recipient of the notification.
*/
export interface ActionNotificationBodyFunctionExecution {
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
	functionInputValues: Record<FunctionInputName, FunctionExecutionWithRecipientInput>;
}
