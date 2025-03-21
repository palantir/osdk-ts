import type { OntologyIrAsynchronousPostWritebackWebhook } from "./OntologyIrAsynchronousPostWritebackWebhook.js";
import type { OntologyIrSynchronousPreWritebackWebhook } from "./OntologyIrSynchronousPreWritebackWebhook.js";
/**
* ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
*/
export interface OntologyIrActionWebhooks {
	synchronousPreWritebackWebhook: OntologyIrSynchronousPreWritebackWebhook | undefined;
	asynchronousPostWritebackWebhooks: Array<OntologyIrAsynchronousPostWritebackWebhook>;
}
