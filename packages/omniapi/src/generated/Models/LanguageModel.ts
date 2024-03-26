/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { OmniResource } from "@osdk/api";
import type * as $C from "../components.js";

export interface LanguageModel {
  /**
   * Creates a chat completion for a prompt.
   *
   * Required Scopes: [api:read-data, api:write-data]
   * URL: /v1/models/languageModels/{modelName}/chatCompletions
   */
  createChatCompletion: (
    modelName: $C.LanguageModelApiName,
    $body: $C.ChatCompletionRequest,
  ) => Promise<$C.ChatCompletionResponse>;

  /**
   * Runs the same query as create chat completion, but streams the raw response as a string of UTF8 encoded bytes.
   *   Note: This endpoint returns only the string response.
   *
   * Required Scopes: [api:read-data, api:write-data]
   * URL: /v1/models/languageModels/{modelName}/chatCompletions/stream
   */
  streamChatCompletion: (
    modelName: $C.LanguageModelApiName,
    $body: $C.ChatCompletionRequest,
  ) => Promise<unknown>;

  /**
   * Lists the language models available. Can be filtered by source.
   *
   * Required Scopes: [api:read-data]
   * URL: /v1/models/languageModels
   */
  iterator: ($queryParams?: {
    source?: $C.LanguageModelSource;
  }) => Promise<$C.ListLanguageModelsResponse>;
}

export const LanguageModel: OmniResource<LanguageModel> = {
  type: "omniapi",
  methods: {
    createChatCompletion: [
      1,
      "/v1/models/languageModels/{0}/chatCompletions",
      1,
    ],
    streamChatCompletion: [
      1,
      "/v1/models/languageModels/{0}/chatCompletions/stream",
      1,
      ,
      "*/*",
    ],
    iterator: [0, "/v1/models/languageModels"],
  },
};
