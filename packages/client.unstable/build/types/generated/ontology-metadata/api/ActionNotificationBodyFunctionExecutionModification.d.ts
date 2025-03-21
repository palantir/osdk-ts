import type { FunctionExecutionWithRecipientInputModification } from "./FunctionExecutionWithRecipientInputModification.js";
import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
/**
* A Function to be executed with action input parameters or the recipient of the notification.
*/
export interface ActionNotificationBodyFunctionExecutionModification {
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
	functionInputValues: Record<FunctionInputName, FunctionExecutionWithRecipientInputModification>;
}
