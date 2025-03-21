import type { StaticWebhookWithDirectInputModification } from "./StaticWebhookWithDirectInputModification.js";
import type { StaticWebhookWithFunctionResultInputModification } from "./StaticWebhookWithFunctionResultInputModification.js";
export interface AsynchronousPostWritebackWebhookModification_staticDirectInput {
	type: "staticDirectInput";
	staticDirectInput: StaticWebhookWithDirectInputModification;
}
export interface AsynchronousPostWritebackWebhookModification_staticFunctionInput {
	type: "staticFunctionInput";
	staticFunctionInput: StaticWebhookWithFunctionResultInputModification;
}
/**
* Uses modification types for nested LogicRuleValueModification, otherwise same as
* AsynchronousPostWritebackWebhook.
*/
export type AsynchronousPostWritebackWebhookModification = AsynchronousPostWritebackWebhookModification_staticDirectInput | AsynchronousPostWritebackWebhookModification_staticFunctionInput;
