import type { OntologyIrStaticWebhookWithDirectInput } from "./OntologyIrStaticWebhookWithDirectInput.js";
import type { OntologyIrStaticWebhookWithFunctionResultInput } from "./OntologyIrStaticWebhookWithFunctionResultInput.js";
export interface OntologyIrAsynchronousPostWritebackWebhook_staticDirectInput {
	type: "staticDirectInput";
	staticDirectInput: OntologyIrStaticWebhookWithDirectInput;
}
export interface OntologyIrAsynchronousPostWritebackWebhook_staticFunctionInput {
	type: "staticFunctionInput";
	staticFunctionInput: OntologyIrStaticWebhookWithFunctionResultInput;
}
/**
* Union wrapping the various options available for configuring webhook(s) which will be executed asynchronously,
* post writeback. If any fail, this is not surfaced during the apply Action call.
*/
export type OntologyIrAsynchronousPostWritebackWebhook = OntologyIrAsynchronousPostWritebackWebhook_staticDirectInput | OntologyIrAsynchronousPostWritebackWebhook_staticFunctionInput;
