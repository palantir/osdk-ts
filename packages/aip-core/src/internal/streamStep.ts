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

import { getOpenAiBaseUrl } from "@osdk/language-models";
import { _getFoundryInternal, type LanguageModel } from "../model.js";
import type {
  FinishReason,
  LanguageModelUsage,
  ModelMessage,
  RequestMetadata,
  ResponseMetadata,
  ToolCall,
  ToolChoice,
  ToolSet,
  Warning,
} from "../types.js";
import {
  convertMessage,
  convertToolChoice,
  convertTools,
  filterHeaders,
  mapFinishReason,
  type OpenAiAssistantToolCall,
  type OpenAiMessage,
  type OpenAiTool,
  type OpenAiToolChoice,
  parseToolArguments,
  safeReadText,
} from "./runStep.js";

export type StreamChunkEvent =
  | { type: "text-start"; id: string }
  | { type: "text-delta"; id: string; delta: string }
  | { type: "text-end"; id: string }
  | { type: "reasoning-delta"; id: string; delta: string }
  | {
    type: "tool-call";
    toolCallId: string;
    toolName: string;
    input: unknown;
  }
  | {
    type: "finish";
    finishReason: FinishReason;
    rawFinishReason: string | undefined;
    usage: LanguageModelUsage;
  }
  | { type: "error"; error: Error };

export interface StreamStepInput<TOOLS extends ToolSet> {
  model: LanguageModel;
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
  warnings: Array<Warning>;
  onChunk: (chunk: StreamChunkEvent) => void | Promise<void>;
}

export interface StreamStepResult {
  text: string;
  reasoningText: string | undefined;
  toolCalls: Array<ToolCall>;
  finishReason: FinishReason;
  rawFinishReason: string | undefined;
  usage: LanguageModelUsage;
  request: RequestMetadata;
  response: ResponseMetadata;
}

interface OpenAiStreamingChatRequest {
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
  stream: true;
  stream_options?: { include_usage?: boolean };
}

interface OpenAiStreamChunk {
  id: string;
  object: "chat.completion.chunk";
  created: number;
  model: string;
  choices: Array<{
    index: number;
    delta: {
      role?: "assistant";
      content?: string | null;
      reasoning?: string;
      reasoning_content?: string;
      tool_calls?: Array<{
        index: number;
        id?: string;
        type?: "function";
        function?: { name?: string; arguments?: string };
      }>;
    };
    finish_reason: string | null;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
    completion_tokens_details?: { reasoning_tokens?: number };
    prompt_tokens_details?: { cached_tokens?: number };
  };
}

interface ToolCallAccumulator {
  id: string;
  name: string;
  args: string;
}

const TEXT_PART_ID = "text-0";
const REASONING_PART_ID = "reasoning-0";

export async function streamStep<TOOLS extends ToolSet>(
  input: StreamStepInput<TOOLS>,
): Promise<StreamStepResult> {
  const handle = _getFoundryInternal(input.model);
  const baseUrl = getOpenAiBaseUrl(handle.client);
  const url = new URL("chat/completions", `${baseUrl}/`).toString();
  const apiName = handle.identifier.type === "lmsModel"
    ? handle.identifier.apiName
    : handle.identifier.registeredModelRid;

  const body = buildStreamingRequestBody({ apiName, ...input });

  const res = await handle.client.fetch(url, {
    method: "POST",
    headers: filterHeaders({
      "Content-Type": "application/json",
      "Accept": "text/event-stream",
      ...(input.headers ?? {}),
    }),
    body: JSON.stringify(body),
    signal: input.abortSignal,
  });

  if (!res.ok) {
    const errBody = await safeReadText(res);
    throw new Error(
      `LMS chat/completions request failed: ${res.status} ${res.statusText}`
        + (errBody ? ` — ${errBody}` : ""),
    );
  }

  if (res.body == null) {
    throw new Error("LMS chat/completions response had no streaming body");
  }

  return parseSseStream({
    body: res.body,
    onChunk: input.onChunk,
    warnings: input.warnings,
    request: { body },
  });
}

function buildStreamingRequestBody<TOOLS extends ToolSet>(
  args: StreamStepInput<TOOLS> & { apiName: string },
): OpenAiStreamingChatRequest {
  return {
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
    stream: true,
    stream_options: { include_usage: true },
  };
}

interface ParseSseStreamArgs {
  body: ReadableStream<Uint8Array>;
  onChunk: (chunk: StreamChunkEvent) => void | Promise<void>;
  warnings: Array<Warning>;
  request: RequestMetadata;
}

async function parseSseStream(
  args: ParseSseStreamArgs,
): Promise<StreamStepResult> {
  const reader = args.body
    .pipeThrough(new TextDecoderStream())
    .getReader();

  let buffer = "";
  let textStarted = false;
  let textEnded = false;
  let textBuf = "";
  let reasoningStarted = false;
  let reasoningBuf = "";
  let finishReason: FinishReason = "other";
  let rawFinishReason: string | undefined;
  let usage: LanguageModelUsage | undefined;
  const toolCallAcc = new Map<number, ToolCallAccumulator>();
  let responseId: string | undefined;
  let responseModel: string | undefined;
  let responseCreated: number | undefined;
  let sawDone = false;

  const finalizeText = async (): Promise<void> => {
    if (textStarted && !textEnded) {
      await args.onChunk({ type: "text-end", id: TEXT_PART_ID });
      textEnded = true;
    }
  };

  // Resolve a stable tool-call id even if the provider only sent argument
  // fragments without an `id` field — synthesize from the choice index so
  // downstream code never sees an empty toolCallId.
  const resolveToolCallId = (acc: ToolCallAccumulator, index: number): string =>
    acc.id !== "" ? acc.id : `tool_call_${index}`;

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      // SSE allows either LF or CRLF separators; normalize to LF.
      buffer += value.replace(/\r\n/g, "\n");

      let frameEnd = buffer.indexOf("\n\n");
      while (frameEnd !== -1) {
        const frame = buffer.slice(0, frameEnd);
        buffer = buffer.slice(frameEnd + 2);

        for (const line of frame.split("\n")) {
          if (!line.startsWith("data:")) {
            continue;
          }
          const payload = line.slice(5).trim();
          if (payload === "") {
            continue;
          }
          if (payload === "[DONE]") {
            sawDone = true;
            continue;
          }

          let chunk: OpenAiStreamChunk;
          try {
            chunk = JSON.parse(payload) as OpenAiStreamChunk;
          } catch {
            args.warnings.push({
              type: "other",
              message: `Skipped malformed SSE frame: ${payload.slice(0, 80)}`,
            });
            continue;
          }

          if (chunk.id != null) {
            responseId = chunk.id;
          }
          if (chunk.model != null) {
            responseModel = chunk.model;
          }
          if (chunk.created != null) {
            responseCreated = chunk.created;
          }

          if (chunk.usage != null) {
            usage = {
              inputTokens: chunk.usage.prompt_tokens,
              outputTokens: chunk.usage.completion_tokens,
              totalTokens: chunk.usage.total_tokens,
              reasoningTokens: chunk.usage.completion_tokens_details
                ?.reasoning_tokens,
              cachedInputTokens: chunk.usage.prompt_tokens_details
                ?.cached_tokens,
            };
          }

          for (const choice of chunk.choices ?? []) {
            const delta = choice.delta ?? {};
            const contentDelta = delta.content;
            if (typeof contentDelta === "string" && contentDelta.length > 0) {
              if (!textStarted) {
                textStarted = true;
                await args.onChunk({ type: "text-start", id: TEXT_PART_ID });
              }
              textBuf += contentDelta;
              await args.onChunk({
                type: "text-delta",
                id: TEXT_PART_ID,
                delta: contentDelta,
              });
            }

            const reasoningDelta = delta.reasoning ?? delta.reasoning_content;
            if (
              typeof reasoningDelta === "string" && reasoningDelta.length > 0
            ) {
              reasoningStarted = true;
              reasoningBuf += reasoningDelta;
              await args.onChunk({
                type: "reasoning-delta",
                id: REASONING_PART_ID,
                delta: reasoningDelta,
              });
            }

            for (const tc of delta.tool_calls ?? []) {
              const acc = toolCallAcc.get(tc.index)
                ?? { id: "", name: "", args: "" };
              if (tc.id != null) {
                acc.id = tc.id;
              }
              if (tc.function?.name != null) {
                acc.name = tc.function.name;
              }
              if (tc.function?.arguments != null) {
                acc.args += tc.function.arguments;
              }
              toolCallAcc.set(tc.index, acc);
            }

            if (choice.finish_reason != null) {
              rawFinishReason = choice.finish_reason;
              finishReason = mapFinishReason(choice.finish_reason);
              await finalizeText();
              for (const [index, acc] of toolCallAcc.entries()) {
                await args.onChunk({
                  type: "tool-call",
                  toolCallId: resolveToolCallId(acc, index),
                  toolName: acc.name,
                  input: parseToolArguments(acc.args, args.warnings),
                });
              }
            }
          }
        }
        frameEnd = buffer.indexOf("\n\n");
      }
    }
  } finally {
    // Always emit text-end if we emitted text-start, even on read errors —
    // consumers that pair the two for lifecycle bookkeeping must see both.
    await finalizeText();
    reader.releaseLock();
  }

  if (!sawDone && rawFinishReason == null) {
    args.warnings.push({
      type: "other",
      message: "SSE stream closed without a [DONE] sentinel or finish_reason",
    });
  }

  const finalUsage: LanguageModelUsage = usage ?? {
    inputTokens: undefined,
    outputTokens: undefined,
    totalTokens: undefined,
  };

  await args.onChunk({
    type: "finish",
    finishReason,
    rawFinishReason,
    usage: finalUsage,
  });

  const toolCalls: Array<ToolCall> = Array.from(
    toolCallAcc.entries(),
  ).map(([index, acc]) => ({
    type: "tool-call" as const,
    toolCallId: resolveToolCallId(acc, index),
    toolName: acc.name,
    input: parseToolArguments(acc.args, args.warnings),
  }));

  const responseMessages = buildAssistantResponseMessages({
    text: textBuf,
    toolCalls,
  });

  const response: ResponseMetadata = {
    id: responseId,
    modelId: responseModel,
    timestamp: responseCreated != null
      ? new Date(responseCreated * 1000)
      : undefined,
    messages: responseMessages,
  };

  return {
    text: textBuf,
    reasoningText: reasoningStarted ? reasoningBuf : undefined,
    toolCalls,
    finishReason,
    rawFinishReason,
    usage: finalUsage,
    request: args.request,
    response,
  };
}

function buildAssistantResponseMessages(args: {
  text: string;
  toolCalls: ReadonlyArray<ToolCall>;
}): ResponseMetadata["messages"] {
  const tcs: Array<OpenAiAssistantToolCall> = args.toolCalls.map((tc) => ({
    id: tc.toolCallId,
    type: "function",
    function: {
      name: tc.toolName,
      arguments: JSON.stringify(tc.input ?? {}),
    },
  }));
  if (tcs.length === 0) {
    return [{ role: "assistant", content: args.text }];
  }
  const parts: Array<
    | { type: "text"; text: string }
    | {
      type: "tool-call";
      toolCallId: string;
      toolName: string;
      input: unknown;
    }
  > = [];
  if (args.text.length > 0) {
    parts.push({ type: "text", text: args.text });
  }
  for (const tc of args.toolCalls) {
    parts.push({
      type: "tool-call",
      toolCallId: tc.toolCallId,
      toolName: tc.toolName,
      input: tc.input,
    });
  }
  return [{ role: "assistant", content: parts }];
}
