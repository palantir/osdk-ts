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

import type { ModelIdentifier } from "../model.js";
import type {
  AssistantModelMessage,
  LanguageModelUsage,
  ModelMessage,
  ToolCall,
  ToolChoice,
  ToolSet,
  Warning,
} from "../types.js";
import {
  convertMessage,
  convertToolChoice,
  convertTools,
  type OpenAiMessage,
  type OpenAiTool,
  type OpenAiToolChoice,
} from "./runStep.js";

export function getModelApiName(identifier: ModelIdentifier): string {
  return identifier.type === "lmsModel"
    ? identifier.apiName
    : identifier.registeredModelRid;
}

export interface OpenAiUsageRaw {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  completion_tokens_details?: { reasoning_tokens?: number };
  prompt_tokens_details?: { cached_tokens?: number };
}

export function mapUsage(raw: OpenAiUsageRaw): LanguageModelUsage {
  return {
    inputTokens: raw.prompt_tokens,
    outputTokens: raw.completion_tokens,
    totalTokens: raw.total_tokens,
    reasoningTokens: raw.completion_tokens_details?.reasoning_tokens,
    cachedInputTokens: raw.prompt_tokens_details?.cached_tokens,
  };
}

export const EMPTY_USAGE: LanguageModelUsage = {
  inputTokens: undefined,
  outputTokens: undefined,
  totalTokens: undefined,
};

export interface BuildRequestBodyArgs<TOOLS extends ToolSet> {
  apiName: string;
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
  warnings: Array<Warning>;
}

interface OpenAiChatRequestCommon {
  model: string;
  messages: Array<OpenAiMessage>;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  stop?: ReadonlyArray<string>;
  seed?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  tools?: Array<OpenAiTool>;
  tool_choice?: OpenAiToolChoice;
}

export type OpenAiChatRequestNonStreaming = OpenAiChatRequestCommon & {
  stream: false;
};

export type OpenAiChatRequestStreaming = OpenAiChatRequestCommon & {
  stream: true;
  stream_options?: { include_usage?: boolean };
};

export function buildOpenAiRequestBody<TOOLS extends ToolSet>(
  args: BuildRequestBodyArgs<TOOLS>,
  streaming: false,
): OpenAiChatRequestNonStreaming;
export function buildOpenAiRequestBody<TOOLS extends ToolSet>(
  args: BuildRequestBodyArgs<TOOLS>,
  streaming: true,
): OpenAiChatRequestStreaming;
export function buildOpenAiRequestBody<TOOLS extends ToolSet>(
  args: BuildRequestBodyArgs<TOOLS>,
  streaming: boolean,
): OpenAiChatRequestNonStreaming | OpenAiChatRequestStreaming {
  const common: OpenAiChatRequestCommon = {
    model: args.apiName,
    messages: args.messages.map((m) => convertMessage(m, args.warnings)).flat(),
    max_tokens: args.maxOutputTokens,
    temperature: args.temperature,
    top_p: args.topP,
    stop: args.stopSequences,
    seed: args.seed,
    presence_penalty: args.presencePenalty,
    frequency_penalty: args.frequencyPenalty,
    tools: args.tools != null
      ? convertTools(args.tools, args.warnings)
      : undefined,
    tool_choice: convertToolChoice(args.toolChoice),
  };
  if (streaming) {
    return { ...common, stream: true, stream_options: { include_usage: true } };
  }
  return { ...common, stream: false };
}

export function buildAssistantContent(
  text: string,
  toolCalls: ReadonlyArray<ToolCall>,
): AssistantModelMessage["content"] {
  if (toolCalls.length === 0) {
    return text;
  }
  const parts: Array<
    { type: "text"; text: string } | {
      type: "tool-call";
      toolCallId: string;
      toolName: string;
      input: unknown;
    }
  > = [];
  if (text.length > 0) {
    parts.push({ type: "text", text });
  }
  for (const tc of toolCalls) {
    parts.push({
      type: "tool-call",
      toolCallId: tc.toolCallId,
      toolName: tc.toolName,
      input: tc.input,
    });
  }
  return parts;
}
