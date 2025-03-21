import type { StaticWebhookWithDirectInputModification } from "./StaticWebhookWithDirectInputModification.js";
import type { StaticWebhookWithFunctionResultInputModification } from "./StaticWebhookWithFunctionResultInputModification.js";
export interface SynchronousPreWritebackWebhookModification_staticDirectInput {
	type: "staticDirectInput";
	staticDirectInput: StaticWebhookWithDirectInputModification;
}
export interface SynchronousPreWritebackWebhookModification_staticFunctionInput {
	type: "staticFunctionInput";
	staticFunctionInput: StaticWebhookWithFunctionResultInputModification;
}
/**
* Uses modification types for nested LogicRuleValueModification, otherwise same as
* SynchronousPreWritebackWebhook.
*/
export type SynchronousPreWritebackWebhookModification = SynchronousPreWritebackWebhookModification_staticDirectInput | SynchronousPreWritebackWebhookModification_staticFunctionInput;
