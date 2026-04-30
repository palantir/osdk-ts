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

import { runStep } from "./internal/runStep.js";
import type { LanguageModel } from "./model.js";
import type {
  ContentPart,
  FinishReason,
  GeneratedFile,
  LanguageModelUsage,
  ModelMessage,
  ProviderMetadata,
  ReasoningOutput,
  RequestMetadata,
  ResponseMetadata,
  Source,
  StepResult,
  SystemModelMessage,
  ToolCall,
  ToolChoice,
  ToolResult,
  ToolSet,
  Warning,
} from "./types.js";

/**
 * Options for {@link generateText}.
 *
 * Not every option is wired to LMS in v0; unsupported settings are surfaced
 * via `result.warnings` rather than silently ignored.
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
  /** Subset of `tools` the model is allowed to call this turn (v0: ignored, warns). */
  activeTools?: Array<keyof TOOLS & string>;

  /** Stop the multi-step loop when this predicate returns true (v0: ignored, warns). */
  stopWhen?:
    | StopCondition<TOOLS>
    | Array<StopCondition<TOOLS>>;

  /** Hook invoked before each step (v0: ignored, warns). */
  prepareStep?: (
    options: PrepareStepOptions<TOOLS>,
  ) => PrepareStepResult<TOOLS> | Promise<PrepareStepResult<TOOLS>>;

  // Sampling -----------------------------------------------------------------

  maxOutputTokens?: number;
  temperature?: number;
  topP?: number;
  /** v0: ignored, warns. OpenAI proxy doesn't accept top_k. */
  topK?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stopSequences?: Array<string>;
  seed?: number;

  // Execution ----------------------------------------------------------------

  /** v0: ignored, warns. Retries are handled by the underlying PlatformClient. */
  maxRetries?: number;
  /** v0: ignored, warns. Use `abortSignal` with `AbortSignal.timeout()`. */
  timeout?: number | { totalMs?: number; stepMs?: number };
  abortSignal?: AbortSignal;
  headers?: Record<string, string | undefined>;

  /** v0: ignored, warns. */
  providerOptions?: ProviderMetadata;

  // Callbacks ----------------------------------------------------------------

  onStepFinish?: (step: StepResult<TOOLS>) => void | Promise<void>;
  onFinish?: (
    event:
      & StepResult<TOOLS>
      & { steps: Array<StepResult<TOOLS>>; totalUsage: LanguageModelUsage },
  ) => void | PromiseLike<void>;
}

export interface StopCondition<TOOLS extends ToolSet = ToolSet> {
  (event: { steps: Array<StepResult<TOOLS>> }): boolean | Promise<boolean>;
}

export interface PrepareStepOptions<TOOLS extends ToolSet = ToolSet> {
  steps: Array<StepResult<TOOLS>>;
  stepNumber: number;
  model: LanguageModel;
  messages: Array<ModelMessage>;
}

export interface PrepareStepResult<TOOLS extends ToolSet = ToolSet> {
  model?: LanguageModel;
  toolChoice?: ToolChoice<TOOLS>;
  activeTools?: Array<keyof TOOLS & string>;
  messages?: Array<ModelMessage>;
  system?: string;
}

/**
 * Result of {@link generateText}.
 */
export interface GenerateTextResult<TOOLS extends ToolSet = ToolSet> {
  content: Array<ContentPart<TOOLS>>;
  text: string;
  reasoning: Array<ReasoningOutput>;
  reasoningText: string | undefined;
  files: Array<GeneratedFile>;
  sources: Array<Source>;
  toolCalls: Array<ToolCall<keyof TOOLS & string>>;
  toolResults: Array<ToolResult<keyof TOOLS & string>>;
  finishReason: FinishReason;
  rawFinishReason: string | undefined;
  usage: LanguageModelUsage;
  totalUsage: LanguageModelUsage;
  request?: RequestMetadata;
  response?: ResponseMetadata;
  warnings: Array<Warning> | undefined;
  providerMetadata: ProviderMetadata | undefined;
  steps: Array<StepResult<TOOLS>>;
}

/**
 * Generate a text completion via the Foundry Language Model Service.
 *
 * v0: single-step. Multi-step tool execution loops, image/file content,
 * structured output, and Zod tool schemas are not yet supported. Unsupported
 * options surface as entries in `result.warnings` rather than throwing.
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
  const warnings: Array<Warning> = collectV0Warnings(options);
  const messages = resolveMessages(
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
    warnings,
  });

  await options.onStepFinish?.(step);

  const totalUsage = step.usage;

  await options.onFinish?.({
    ...step,
    steps: [step],
    totalUsage,
  });

  return {
    content: step.content,
    text: step.text,
    reasoning: step.reasoning,
    reasoningText: step.reasoningText,
    files: step.files,
    sources: step.sources,
    toolCalls: step.toolCalls,
    toolResults: step.toolResults,
    finishReason: step.finishReason,
    rawFinishReason: step.rawFinishReason,
    usage: step.usage,
    totalUsage,
    request: step.request,
    response: step.response,
    warnings: step.warnings,
    providerMetadata: step.providerMetadata,
    steps: [step],
  };
}

function collectV0Warnings<TOOLS extends ToolSet>(
  options: GenerateTextOptions<TOOLS>,
): Array<Warning> {
  const warnings: Array<Warning> = [];
  const unsupported: Array<[keyof GenerateTextOptions<TOOLS>, string?]> = [
    ["stopWhen", "Multi-step tool loops are not yet implemented in v0."],
    ["prepareStep"],
    ["activeTools"],
    ["topK", "OpenAI proxy does not accept top_k."],
    [
      "maxRetries",
      "Retries are handled by the underlying PlatformClient.fetch.",
    ],
    ["timeout", "Use `abortSignal` with AbortSignal.timeout()."],
    ["providerOptions"],
  ];
  for (const [key, details] of unsupported) {
    if (options[key] != null) {
      warnings.push({
        type: "unsupported-setting",
        setting: key,
        details,
      });
    }
  }
  return warnings;
}

function resolveMessages(
  system: GenerateTextOptions["system"],
  prompt: GenerateTextOptions["prompt"],
  messages: GenerateTextOptions["messages"],
): Array<ModelMessage> {
  if (prompt != null && messages != null) {
    throw new Error(
      "generateText: cannot specify both `prompt` and `messages` — choose one.",
    );
  }

  const sys: Array<SystemModelMessage> = system == null
    ? []
    : typeof system === "string"
    ? [{ role: "system", content: system }]
    : Array.isArray(system)
    ? system
    : [system];

  const body: Array<ModelMessage> = messages != null
    ? messages
    : prompt == null
    ? []
    : typeof prompt === "string"
    ? [{ role: "user", content: prompt }]
    : prompt;

  if (sys.length === 0 && body.length === 0) {
    throw new Error(
      "generateText: must provide at least one of `system`, `prompt`, or `messages`.",
    );
  }

  return [...sys, ...body];
}
