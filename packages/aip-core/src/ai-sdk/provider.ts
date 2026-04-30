/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { LanguageModelV3 } from "@ai-sdk/provider";
import type { PlatformClient } from "@osdk/client";
import { FoundryChatLanguageModel } from "./foundry-chat-language-model.js";
import type { Attribution, ModelIdentifier, RequestPriority } from "./types.js";

export interface FoundryAIProviderOptions {
  /** Foundry PlatformClient providing the auth token + base URL. */
  client: PlatformClient;
  /**
   * Attribution forwarded to LMS for billing. Defaults to the PlatformClient's
   * own bearer token, attributed to the calling user.
   */
  attribution?: Attribution;
  /**
   * Default request priority forwarded to LMS. Defaults to `CRITICAL` to
   * match interactive chat workloads.
   */
  defaultPriority?: RequestPriority;
}

/**
 * A Foundry AI provider for the Vercel AI SDK.
 *
 * Can be called directly as a function to get a language model, or use
 * the `.languageModel()` method.
 *
 * @example
 * ```ts
 * import { generateText } from "ai";
 * import { createFoundryAI } from "@osdk/aip-core/ai-sdk";
 *
 * const foundryAI = createFoundryAI({ client });
 * const { text } = await generateText({
 *   model: foundryAI("gpt-4o"),
 *   prompt: "Hello, world",
 * });
 * ```
 */
export interface FoundryAIProvider {
  /**
   * Create a language model for the given model name or identifier.
   *
   * @param model - LMS model API name (e.g. "gpt-4o") or a structured ModelIdentifier.
   */
  (model: string | ModelIdentifier): LanguageModelV3;

  /**
   * Create a language model for the given model name or identifier.
   *
   * @param model - LMS model API name (e.g. "gpt-4o") or a structured ModelIdentifier.
   */
  languageModel(model: string | ModelIdentifier): LanguageModelV3;
}

/**
 * Create a Foundry AI provider for the Vercel AI SDK.
 *
 * @param options - Configuration including the Foundry PlatformClient.
 * @returns A provider that can be called directly or via `.languageModel()`.
 */
export function createFoundryAI(
  options: FoundryAIProviderOptions,
): FoundryAIProvider {
  const createLanguageModel = (
    model: string | ModelIdentifier,
  ): LanguageModelV3 => {
    const identifier: ModelIdentifier = typeof model === "string"
      ? { type: "lmsModel", apiName: model }
      : model;

    const id = identifier.type === "lmsModel"
      ? identifier.apiName
      : identifier.registeredModelRid;

    return new FoundryChatLanguageModel(`foundry/${id}`, {
      client: options.client,
      identifier,
      attribution: options.attribution,
      priority: options.defaultPriority ?? "CRITICAL",
    });
  };

  const provider = function(
    model: string | ModelIdentifier,
  ): LanguageModelV3 {
    return createLanguageModel(model);
  };

  provider.languageModel = createLanguageModel;

  return provider as FoundryAIProvider;
}
