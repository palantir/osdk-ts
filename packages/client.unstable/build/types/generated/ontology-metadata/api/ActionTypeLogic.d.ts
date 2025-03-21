import type { ActionLogic } from "./ActionLogic.js";
import type { ActionNotification } from "./ActionNotification.js";
import type { ActionRevert } from "./ActionRevert.js";
import type { ActionValidation } from "./ActionValidation.js";
import type { ActionWebhooks } from "./ActionWebhooks.js";
export interface ActionTypeLogic {
	logic: ActionLogic;
	validation: ActionValidation;
	revert: ActionRevert | undefined;
	webhooks: ActionWebhooks | undefined;
	notifications: Array<ActionNotification>;
}
