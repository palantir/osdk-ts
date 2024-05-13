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

import type { LanguageModelSource } from "@osdk/internal.foundry.core";

export type LooselyBrandedString<T extends string> = string & {
  __LOOSE_BRAND?: T;
};

/**
 * Log Safety: UNSAFE
 */
export type ParameterValue = any;

/**
 * Contains n different completion choices as specified in the request parameter.
 *
 * Log Safety: UNSAFE
 */
export interface ChatCompletionResponse {
  choices: Array<ChatCompletionChoice>;
}

/**
 * The unique identifier of the model parameter.
 *
 * Log Safety: UNSAFE
 */
export type ParameterKey = LooselyBrandedString<"ParameterKey">;

/**
 * Log Safety: SAFE
 */
export type ChatMessageRole = "SYSTEM" | "ASSISTANT" | "USER";

/**
 * Represents a language model.
 *
 * Log Safety: UNSAFE
 */
export interface LanguageModel {
  apiName?: LanguageModelApiName;
  source?: LanguageModelSource;
}

/**
 * Log Safety: UNSAFE
 */
export interface ChatMessage {
  role: ChatMessageRole;
  content?: string;
}

/**
 * Log Safety: UNSAFE
 */
export interface ChatCompletionRequest {
  messages: Array<ChatMessage>;
  parameters: Record<ParameterKey, ParameterValue>;
}

/**
 * Log Safety: UNSAFE
 */
export interface ChatCompletionChoice {
  message?: ChatMessage;
}

/**
 * Log Safety: UNSAFE
 */
export interface ListLanguageModelsResponse {
  data: Array<LanguageModel>;
}

/**
   * The name of the language model in the API. To find the API name for your model, use the List language models
endpoint.
   *
   * Log Safety: UNSAFE
   */
export type LanguageModelApiName = LooselyBrandedString<"LanguageModelApiName">;
