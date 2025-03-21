import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
import type { LogicRuleValueModification } from "./LogicRuleValueModification.js";
import type { WebhookRid } from "./WebhookRid.js";
import type { WebhookVersion } from "./WebhookVersion.js";
/**
* Modification type for LogicRuleValueModification, otherwise same as StaticWebhookWithFunctionResultInput.
*/
export interface StaticWebhookWithFunctionResultInputModification {
	webhookRid: WebhookRid;
	webhookVersion: WebhookVersion;
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
	functionInputValues: Record<FunctionInputName, LogicRuleValueModification>;
}
