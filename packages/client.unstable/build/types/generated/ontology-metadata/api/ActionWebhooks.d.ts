import type { AsynchronousPostWritebackWebhook } from "./AsynchronousPostWritebackWebhook.js";
import type { SynchronousPreWritebackWebhook } from "./SynchronousPreWritebackWebhook.js";
/**
* ActionWebhooks contains the definition for webhooks that are executed as part of running an Action.
*/
export interface ActionWebhooks {
	synchronousPreWritebackWebhook: SynchronousPreWritebackWebhook | undefined;
	asynchronousPostWritebackWebhooks: Array<AsynchronousPostWritebackWebhook>;
}
