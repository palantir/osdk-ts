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

import { resolveMessages } from "./internal/options.js";
import { runStep } from "./internal/runStep.js";
import type { LanguageModel } from "./model.js";
import type {
  LanguageModelUsage,
  ModelMessage,
  StepResult,
  SystemModelMessage,
  ToolChoice,
  ToolSet,
} from "./types.js";

/**
 * Options for {@link generateText}.
 */
export interface GenerateTextOptions<TOOLS extends ToolSet = ToolSet> {
  /** The language model to use. Build one via `foundryModel(...)`. */
  model: LanguageModel;

  /** Plain text prompt. Mutually exclusive with `messages`. */
  prompt?: string | Array<ModelMessage>;

  /** Conversation history. Mutually exclusive with `prompt`. */
  messages?: Array<ModelMessage>;

  /** System instructions, prepended to the conversation. */
  system?: string | SystemModelMessage | Array<SystemModelMessage>;

  // Tools --------------------------------------------------------------------

  tools?: TOOLS;
  toolChoice?: ToolChoice<TOOLS>;

  // Sampling -----------------------------------------------------------------

  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stopSequences?: Array<string>;
  seed?: number;

  // Execution ----------------------------------------------------------------

  abortSignal?: AbortSignal;
  headers?: Record<string, string | undefined>;

  // Callbacks ----------------------------------------------------------------

  onStepFinish?: (step: StepResult<TOOLS>) => void | Promise<void>;
  onFinish?: (
    event:
      & StepResult<TOOLS>
      & { steps: Array<StepResult<TOOLS>>; totalUsage: LanguageModelUsage },
  ) => void | PromiseLike<void>;
}

/**
 * Result of {@link generateText}.
 */
export type GenerateTextResult<TOOLS extends ToolSet = ToolSet> =
  & StepResult<TOOLS>
  & {
    totalUsage: LanguageModelUsage;
    steps: Array<StepResult<TOOLS>>;
  };

/**
 * Generate a text completion via the Foundry Language Model Service.
 *
 * v0: single-step. Multi-step tool execution loops, image/file content,
 * structured output, and Zod tool schemas are not yet supported.
 *
 * @example
 * ```ts
 * import { foundryModel, generateText } from "@osdk/aip-core";
 *
 * const { text } = await generateText({
 *   model: foundryModel({ client, model: "gpt-4o" }),
 *   system: "You are a concise assistant.",
 *   prompt: "Summarise this PR.",
 * });
 * ```
 */
export async function generateText<TOOLS extends ToolSet = ToolSet>(
  options: GenerateTextOptions<TOOLS>,
): Promise<GenerateTextResult<TOOLS>> {
  const messages = resolveMessages(
    "generateText",
    options.system,
    options.prompt,
    options.messages,
  );

  const step = await runStep<TOOLS>({
    model: options.model,
    messages,
    tools: options.tools,
    toolChoice: options.toolChoice,
    maxOutputTokens: options.maxOutputTokens,
    temperature: options.temperature,
    topP: options.topP,
    stopSequences: options.stopSequences,
    seed: options.seed,
    presencePenalty: options.presencePenalty,
    frequencyPenalty: options.frequencyPenalty,
    abortSignal: options.abortSignal,
    headers: options.headers,
    warnings: [],
  });

  await options.onStepFinish?.(step);

  const totalUsage = step.usage;

  await options.onFinish?.({
    ...step,
    steps: [step],
    totalUsage,
  });

  return { ...step, totalUsage, steps: [step] };
}
