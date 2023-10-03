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

import type { ChatCompletionRequest } from "../components/ChatCompletionRequest";
import type { ChatCompletionResponse } from "../components/ChatCompletionResponse";
import type { LanguageModelApiName } from "../components/LanguageModelApiName";
import type { LanguageModelSource } from "../components/LanguageModelSource";
import type { ListLanguageModelsResponse } from "../components/ListLanguageModelsResponse";
import type { OpenApiRequest } from "../request";

/**
 * Creates a chat completion for a prompt.
 */
export function createChatCompletion<TResponse>(
  _request: OpenApiRequest<ChatCompletionResponse, TResponse>,
  modelName: LanguageModelApiName,
  request: ChatCompletionRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/models/languageModels/${modelName}/chatCompletions`,
    request,
    __undefined,
    __undefined,
  );
}

/**
 * Runs the same query as create chat completion, but streams the raw response as a string of UTF8 encoded bytes.
 *   Note: This endpoint returns only the string response.
 */
export function streamChatCompletion<TResponse>(
  _request: OpenApiRequest<ReadableStream<Uint8Array> | Blob, TResponse>,
  modelName: LanguageModelApiName,
  request: ChatCompletionRequest,
): Promise<TResponse> {
  return _request(
    "POST",
    `/v1/models/languageModels/${modelName}/chatCompletions/stream`,
    request,
    __undefined,
    __undefined,
    __applicationJson,
    __anyMediaType,
  );
}

/**
 * Lists the language models available. Can be filtered by source.
 */
export function listLanguageModels<TResponse>(
  _request: OpenApiRequest<ListLanguageModelsResponse, TResponse>,
  queryParameters?: {
    source?: LanguageModelSource;
  },
): Promise<TResponse> {
  return _request(
    "GET",
    `/v1/models/languageModels`,
    __undefined,
    queryParameters,
    __undefined,
  );
}

const __anyMediaType: string = "*/*";
const __applicationJson: string = "application/json";
/** Constant reference to `undefined` that we expect to get minified and therefore reduce total code size */
const __undefined: undefined = undefined;
