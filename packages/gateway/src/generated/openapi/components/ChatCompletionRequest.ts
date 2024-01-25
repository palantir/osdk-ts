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

import type { ChatMessage } from "./ChatMessage.js";
import type { ParameterKey } from "./ParameterKey.js";
import type { ParameterValue } from "./ParameterValue.js";

export interface ChatCompletionRequest {
  messages: Array<ChatMessage>;
  /**
   * Any additional model-specific parameters:
   * - for global models, the keys can be one of the following
   *     (refer to https://platform.openai.com/docs/api-reference/chat/create for documentation on these parameters):
   *   - `temperature`
   *   - `top_p`
   *   - `n`
   *   - `stop`
   *   - `max_tokens`
   *   - `presence_penalty`
   *   - `frequency_penalty`
   *   - `logit_bias`
   */
  parameters: Record<ParameterKey, ParameterValue>;
}
