import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { WebhookInputParamName } from "./WebhookInputParamName.js";
import type { WebhookRid } from "./WebhookRid.js";
import type { WebhookVersion } from "./WebhookVersion.js";
/**
* Modification type for LogicRuleValueModification, otherwise same as StaticWebhookWithDirectInput.
*/
export interface StaticWebhookWithDirectInputModification {
	webhookRid: WebhookRid;
	webhookVersion: WebhookVersion;
	webhookInputValues: Record<WebhookInputParamName, LogicRuleValueModification>;
}
