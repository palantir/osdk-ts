import type { StaticWebhookWithDirectInput } from "./StaticWebhookWithDirectInput.js";
import type { StaticWebhookWithFunctionResultInput } from "./StaticWebhookWithFunctionResultInput.js";
export interface SynchronousPreWritebackWebhook_staticDirectInput {
	type: "staticDirectInput";
	staticDirectInput: StaticWebhookWithDirectInput;
}
export interface SynchronousPreWritebackWebhook_staticFunctionInput {
	type: "staticFunctionInput";
	staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
* Union wrapping the various options available for configuring a webhook which will be executed synchronously,
* prior to writeback. If it fails, the Foundry writeback will be cancelled. This webhook is executed after
* validations run and pass successfully.
*/
export type SynchronousPreWritebackWebhook = SynchronousPreWritebackWebhook_staticDirectInput | SynchronousPreWritebackWebhook_staticFunctionInput;
