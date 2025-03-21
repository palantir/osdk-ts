import type { ActionRevert } from "./ActionRevert.js";
import type { OntologyIrActionLogic } from "./OntologyIrActionLogic.js";
import type { OntologyIrActionNotification } from "./OntologyIrActionNotification.js";
import type { OntologyIrActionValidation } from "./OntologyIrActionValidation.js";
import type { OntologyIrActionWebhooks } from "./OntologyIrActionWebhooks.js";
export interface OntologyIrActionTypeLogic {
	logic: OntologyIrActionLogic;
	validation: OntologyIrActionValidation;
	revert: ActionRevert | undefined;
	webhooks: OntologyIrActionWebhooks | undefined;
	notifications: Array<OntologyIrActionNotification>;
}
