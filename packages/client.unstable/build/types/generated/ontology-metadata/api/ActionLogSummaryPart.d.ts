import type { ActionLogMessage } from "./ActionLogMessage.js";
import type { ActionLogParameterReference } from "./ActionLogParameterReference.js";
export interface ActionLogSummaryPart_message {
	type: "message";
	message: ActionLogMessage;
}
export interface ActionLogSummaryPart_parameter {
	type: "parameter";
	parameter: ActionLogParameterReference;
}
export type ActionLogSummaryPart = ActionLogSummaryPart_message | ActionLogSummaryPart_parameter;
