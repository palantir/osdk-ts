import type { ActionTypeLogic } from "./ActionTypeLogic.js";
import type { ActionTypeMetadata } from "./ActionTypeMetadata.js";
export interface ActionType {
	actionTypeLogic: ActionTypeLogic;
	metadata: ActionTypeMetadata;
}
