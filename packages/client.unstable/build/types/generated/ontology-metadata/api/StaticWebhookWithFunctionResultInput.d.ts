import type { FunctionInputName } from "./FunctionInputName.js";
import type { FunctionRid } from "./FunctionRid.js";
import type { FunctionVersion } from "./FunctionVersion.js";
import type { LogicRuleValue } from "./LogicRuleValue.js";
import type { WebhookRid } from "./WebhookRid.js";
import type { WebhookVersion } from "./WebhookVersion.js";
/**
* This webhook config will run the function given the input mapping provided. It will then run the webhook given
* the result of the function as input. It expects a custom type containing all the expected webhook inputs.
* e.g. An example of the expected return type from the Function:
* ```
* export interface WebhookResult {
* arg1: string;
* arg2: string;
* }
* export class MyFunctions {
* @Function()
* public createWebhookRequest(person: Person): WebhookResult {
* return {
* arg1: person.someProperty,
* arg2: person.someOtherProperty,
* };
* }
* }
* If one of the Webhook inputs is a RecordType, it must have expectedFields defined and match exactly the custom
* type.
* ```
*/
export interface StaticWebhookWithFunctionResultInput {
	webhookRid: WebhookRid;
	webhookVersion: WebhookVersion;
	functionRid: FunctionRid;
	functionVersion: FunctionVersion;
	functionInputValues: Record<FunctionInputName, LogicRuleValue>;
}
