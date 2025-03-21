import type { AsynchronousPostWritebackWebhookModification } from "./AsynchronousPostWritebackWebhookModification.js";
import type { SynchronousPreWritebackWebhookModification } from "./SynchronousPreWritebackWebhookModification.js";
/**
* ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
*/
export interface ActionWebhooksModification {
	synchronousPreWritebackWebhook: SynchronousPreWritebackWebhookModification | undefined;
	asynchronousPostWritebackWebhooks: Array<AsynchronousPostWritebackWebhookModification>;
}
