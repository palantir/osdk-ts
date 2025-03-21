import type { ActionTypeLogic } from "./ActionTypeLogic.js";
import type { ActionTypeMetadataModification } from "./ActionTypeMetadataModification.js";
/**
* Action type shape for requests. Ensures backend compatibility with the usePlugin LLM endpoint.
*/
export interface ActionTypeModificationRequest {
	actionTypeLogic: ActionTypeLogic;
	metadata: ActionTypeMetadataModification;
}
