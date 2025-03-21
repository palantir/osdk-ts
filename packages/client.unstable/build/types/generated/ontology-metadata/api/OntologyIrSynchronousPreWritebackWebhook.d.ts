import type { OntologyIrStaticWebhookWithDirectInput } from "./OntologyIrStaticWebhookWithDirectInput.js";
import type { OntologyIrStaticWebhookWithFunctionResultInput } from "./OntologyIrStaticWebhookWithFunctionResultInput.js";
export interface OntologyIrSynchronousPreWritebackWebhook_staticDirectInput {
	type: "staticDirectInput";
	staticDirectInput: OntologyIrStaticWebhookWithDirectInput;
}
export interface OntologyIrSynchronousPreWritebackWebhook_staticFunctionInput {
	type: "staticFunctionInput";
	staticFunctionInput: OntologyIrStaticWebhookWithFunctionResultInput;
}
/**
* Union wrapping the various options available for configuring a webhook which will be executed synchronously,
* prior to writeback. If it fails, the Foundry writeback will be cancelled. This webhook is executed after
* validations run and pass successfully.
*/
export type OntologyIrSynchronousPreWritebackWebhook = OntologyIrSynchronousPreWritebackWebhook_staticDirectInput | OntologyIrSynchronousPreWritebackWebhook_staticFunctionInput;
