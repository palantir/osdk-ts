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

import type { LanguageModel } from "../model.js";
import { _getFoundryInternal } from "../model.js";
import type {
  AssistantModelMessage,
  ContentPart,
  LanguageModelUsage,
  ModelMessage,
  ReasoningOutput,
  StepResult,
  ToolCall,
  ToolChoice,
  ToolSet,
  Warning,
} from "../types.js";
import {
  buildAssistantContent,
  buildOpenAiRequestBody,
  EMPTY_USAGE,
  getModelApiName,
  mapFinishReason,
  mapUsage,
  type OpenAiAssistantToolCall,
  type OpenAiChatRequestNonStreaming,
  parseToolArguments,
  postChatCompletions,
} from "./openAi.js";

export interface RunStepInput<TOOLS extends ToolSet> {
  model: LanguageModel;
  /** System messages flattened into the head of this list. */
  messages: ReadonlyArray<ModelMessage>;
  tools: TOOLS | undefined;
  toolChoice: ToolChoice<TOOLS> | undefined;
  maxOutputTokens: number | undefined;
  temperature: number | undefined;
  topP: number | undefined;
  stopSequences: ReadonlyArray<string> | undefined;
  seed: number | undefined;
  presencePenalty: number | undefined;
  frequencyPenalty: number | undefined;
  abortSignal: AbortSignal | undefined;
  headers: Record<string, string | undefined> | undefined;
  /**
   * Mutated in place — additional warnings discovered while building the
   * request are appended here.
   */
  warnings: Array<Warning>;
}

/**
 * Performs a single non-streaming chat completion against the LMS OpenAI proxy
 * and returns a {@link StepResult}. Caller is responsible for prepending any
 * system messages before invoking.
 */
export async function runStep<TOOLS extends ToolSet>(
  input: RunStepInput<TOOLS>,
): Promise<StepResult<TOOLS>> {
  const apiName = getModelApiName(_getFoundryInternal(input.model).identifier);

  const body = buildOpenAiRequestBody<TOOLS>({ apiName, ...input }, false);

  const res = await postChatCompletions({
    model: input.model,
    body,
    accept: "application/json",
    headers: input.headers,
    abortSignal: input.abortSignal,
  });

  const data = (await res.json()) as OpenAiChatCompletionResponse;

  return parseResponse<TOOLS>(data, body, input.warnings);
}

interface OpenAiChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: "assistant";
      content: string | null;
      tool_calls?: Array<OpenAiAssistantToolCall>;
      reasoning?: string;
      reasoning_content?: string;
    };
    finish_reason: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    completion_tokens_details?: {
      reasoning_tokens?: number;
    };
    prompt_tokens_details?: {
      cached_tokens?: number;
    };
  };
}

function parseResponse<TOOLS extends ToolSet>(
  res: OpenAiChatCompletionResponse,
  request: OpenAiChatRequestNonStreaming,
  warnings: Array<Warning>,
): StepResult<TOOLS> {
  const choice = res.choices[0];
  if (choice == null) {
    throw new Error(
      "LMS chat/completions response did not include any choices",
    );
  }

  const message = choice.message;
  const text = message.content ?? "";
  const reasoningText = message.reasoning ?? message.reasoning_content;

  const toolCalls: Array<ToolCall<keyof TOOLS & string>> = (message.tool_calls
    ?? [])
    .map((c) => ({
      type: "tool-call",
      toolCallId: c.id,
      toolName: c.function.name as keyof TOOLS & string,
      input: parseToolArguments(c.function.arguments, warnings),
    }));

  const reasoning: Array<ReasoningOutput> = reasoningText != null
    ? [{ type: "reasoning", text: reasoningText }]
    : [];

  const content: Array<ContentPart<TOOLS>> = [];
  if (text.length > 0) {
    content.push({ type: "text", text });
  }
  for (const r of reasoning) {
    content.push({ type: "reasoning", text: r.text });
  }
  for (const tc of toolCalls) {
    content.push({ ...tc, type: "tool-call" });
  }

  const usage: LanguageModelUsage = res.usage != null
    ? mapUsage(res.usage)
    : EMPTY_USAGE;

  const finishReason = mapFinishReason(choice.finish_reason);

  const responseMessages: Array<AssistantModelMessage> = [{
    role: "assistant",
    content: buildAssistantContent(text, toolCalls),
  }];

  return {
    content,
    text,
    reasoning,
    reasoningText,
    toolCalls,
    toolResults: [],
    finishReason,
    rawFinishReason: choice.finish_reason,
    usage,
    warnings: warnings.length > 0 ? warnings : undefined,
    request: { body: request },
    response: {
      id: res.id,
      modelId: res.model,
      timestamp: new Date(res.created * 1000),
      body: res,
      messages: responseMessages,
    },
    providerMetadata: undefined,
  };
}
