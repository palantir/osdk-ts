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

import type { StaticWebhookWithDirectInput } from "./StaticWebhookWithDirectInput.js";
import type { StaticWebhookWithFunctionResultInput } from "./StaticWebhookWithFunctionResultInput.js";
export interface AsynchronousPostWritebackWebhook_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: StaticWebhookWithDirectInput;
}

export interface AsynchronousPostWritebackWebhook_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: StaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring webhook(s) which will be executed asynchronously,
 * post writeback. If any fail, this is not surfaced during the apply Action call.
 */
export type AsynchronousPostWritebackWebhook =
  | AsynchronousPostWritebackWebhook_staticDirectInput
  | AsynchronousPostWritebackWebhook_staticFunctionInput;
