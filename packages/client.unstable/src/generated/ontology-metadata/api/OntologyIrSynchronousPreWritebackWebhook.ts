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

import type { OntologyIrStaticWebhookWithDirectInput } from "./OntologyIrStaticWebhookWithDirectInput.js";
import type { OntologyIrStaticWebhookWithFunctionResultInput } from "./OntologyIrStaticWebhookWithFunctionResultInput.js";
export interface OntologyIrSynchronousPreWritebackWebhook_staticDirectInput {
  type: "staticDirectInput";
  staticDirectInput: OntologyIrStaticWebhookWithDirectInput;
}

export interface OntologyIrSynchronousPreWritebackWebhook_staticFunctionInput {
  type: "staticFunctionInput";
  staticFunctionInput: OntologyIrStaticWebhookWithFunctionResultInput;
}
/**
 * Union wrapping the various options available for configuring a webhook which will be executed synchronously,
 * prior to writeback. If it fails, the Foundry writeback will be cancelled. This webhook is executed after
 * validations run and pass successfully.
 */
export type OntologyIrSynchronousPreWritebackWebhook =
  | OntologyIrSynchronousPreWritebackWebhook_staticDirectInput
  | OntologyIrSynchronousPreWritebackWebhook_staticFunctionInput;
