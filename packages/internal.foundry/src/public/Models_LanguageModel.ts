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

import type {
  FoundryPlatformMethod as $FoundryPlatformMethod,
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.net";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net";
import type * as $C from "../generated/components.js";

const _createChatCompletion: $FoundryPlatformMethod<
  (
    modelName: $C.LanguageModelApiName,
    $body: $C.ChatCompletionRequest,
  ) => Promise<$C.ChatCompletionResponse>
> = [1, "/v1/models/languageModels/{0}/chatCompletions", 1];

/**
 * Creates a chat completion for a prompt.
 *
 * Required Scopes: [api:read-data, api:write-data]
 * URL: /v1/models/languageModels/{modelName}/chatCompletions
 */
export function createChatCompletion(
  $ctx: $Client | $ClientContext,
  ...args: [modelName: $C.LanguageModelApiName, $body: $C.ChatCompletionRequest]
): Promise<$C.ChatCompletionResponse> {
  return $foundryPlatformFetch($ctx, _createChatCompletion, ...args);
}

const _streamChatCompletion: $FoundryPlatformMethod<
  (
    modelName: $C.LanguageModelApiName,
    $body: $C.ChatCompletionRequest,
  ) => Promise<unknown>
> = [1, "/v1/models/languageModels/{0}/chatCompletions/stream", 1, , "*/*"];

/**
 * Runs the same query as create chat completion, but streams the raw response as a string of UTF8 encoded bytes.
 *   Note: This endpoint returns only the string response.
 *
 * Required Scopes: [api:read-data, api:write-data]
 * URL: /v1/models/languageModels/{modelName}/chatCompletions/stream
 */
export function streamChatCompletion(
  $ctx: $Client | $ClientContext,
  ...args: [modelName: $C.LanguageModelApiName, $body: $C.ChatCompletionRequest]
): Promise<unknown> {
  return $foundryPlatformFetch($ctx, _streamChatCompletion, ...args);
}

const _listLanguageModels: $FoundryPlatformMethod<
  ($queryParams?: {
    source?: $C.LanguageModelSource;
  }) => Promise<$C.ListLanguageModelsResponse>
> = [0, "/v1/models/languageModels", 2];

/**
 * Lists the language models available. Can be filtered by source.
 *
 * Required Scopes: [api:read-data]
 * URL: /v1/models/languageModels
 */
export function listLanguageModels(
  $ctx: $Client | $ClientContext,
  ...args: [$queryParams?: { source?: $C.LanguageModelSource }]
): Promise<$C.ListLanguageModelsResponse> {
  return $foundryPlatformFetch($ctx, _listLanguageModels, ...args);
}
