import type { StaticWebhookWithDirectInput } from "./StaticWebhookWithDirectInput.js";
import type { StaticWebhookWithFunctionResultInput } from "./StaticWebhookWithFunctionResultInput.js";
export interface AsynchronousPostWritebackWebhook_staticDirectInput {
	type: "staticDirectInput";
	staticDirectInput: StaticWebhookWithDirectInput;
}
export interface AsynchronousPostWritebackWebhook_staticFunctionInput {
	type: "staticFunctionInput";
	staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
* Union wrapping the various options available for configuring webhook(s) which will be executed asynchronously,
* post writeback. If any fail, this is not surfaced during the apply Action call.
*/
export type AsynchronousPostWritebackWebhook = AsynchronousPostWritebackWebhook_staticDirectInput | AsynchronousPostWritebackWebhook_staticFunctionInput;
