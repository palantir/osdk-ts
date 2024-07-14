/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
