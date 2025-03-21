import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { WebhookInputParamName } from "./WebhookInputParamName.js";
import type { WebhookRid } from "./WebhookRid.js";
import type { WebhookVersion } from "./WebhookVersion.js";
/**
* This webhook config will run the webhook given the input mapping provided. The webhook input parameters map
* to Action logic rule values, such as parameters.
*/
export interface StaticWebhookWithDirectInput {
	webhookRid: WebhookRid;
	webhookVersion: WebhookVersion;
	webhookInputValues: Record<WebhookInputParamName, LogicRuleValue>;
}
