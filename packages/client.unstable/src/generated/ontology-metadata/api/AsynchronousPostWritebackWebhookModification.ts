/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { StaticWebhookWithDirectInputModification } from "./StaticWebhookWithDirectInputModification.js";
import type { StaticWebhookWithFunctionResultInputModification } from "./StaticWebhookWithFunctionResultInputModification.js";
export interface AsynchronousPostWritebackWebhookModification_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: StaticWebhookWithDirectInputModification;
}

export interface AsynchronousPostWritebackWebhookModification_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: StaticWebhookWithFunctionResultInputModification;
}
/**
 * Uses modification types for nested LogicRuleValueModification, otherwise same as
 * AsynchronousPostWritebackWebhook.
 */
export type AsynchronousPostWritebackWebhookModification =
  | AsynchronousPostWritebackWebhookModification_staticDirectInput
  | AsynchronousPostWritebackWebhookModification_staticFunctionInput;
