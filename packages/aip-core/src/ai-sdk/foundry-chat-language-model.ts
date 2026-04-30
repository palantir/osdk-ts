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

import type {
  LanguageModelV3,
  LanguageModelV3CallOptions,
  LanguageModelV3Content,
  LanguageModelV3FunctionTool,
  LanguageModelV3GenerateResult,
  LanguageModelV3StreamPart,
  LanguageModelV3StreamResult,
  LanguageModelV3ToolChoice,
  LanguageModelV3Usage,
  SharedV3Warning,
} from "@ai-sdk/provider";
import type { PlatformClient } from "@osdk/client";
import { getOpenAiBaseUrl } from "@osdk/language-models";
import type { OpenAiAssistantToolCall } from "./convert-prompt.js";
import { convertPrompt } from "./convert-prompt.js";
import { mapFinishReason } from "./map-finish-reason.js";
import type { Attribution, ModelIdentifier, RequestPriority } from "./types.js";

export interface FoundryChatLanguageModelConfig {
  client: PlatformClient;
  identifier: ModelIdentifier;
  attribution: Attribution | undefined;
  priority: RequestPriority;
}

export class FoundryChatLanguageModel implements LanguageModelV3 {
  readonly specificationVersion = "v3";
  readonly provider: string;
  readonly modelId: string;
  readonly supportedUrls: Record<string, RegExp[]> = {};

  private readonly config: FoundryChatLanguageModelConfig;

  constructor(modelId: string, config: FoundryChatLanguageModelConfig) {
    this.provider = "foundry-lms";
    this.modelId = modelId;
    this.config = config;
  }

  async doGenerate(
    options: LanguageModelV3CallOptions,
  ): Promise<LanguageModelV3GenerateResult> {
    const warnings: Array<SharedV3Warning> = [];
    const { body, url } = this.buildRequest(options, warnings);

    const res = await this.config.client.fetch(url, {
      method: "POST",
      headers: filterHeaders({
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(options.headers ?? {}),
      }),
      body: JSON.stringify(body),
      signal: options.abortSignal,
    });

    if (!res.ok) {
      const errBody = await safeReadText(res);
      throw new Error(
        `LMS chat/completions request failed: ${res.status} ${res.statusText}`
          + (errBody ? ` — ${errBody}` : ""),
      );
    }

    const data = (await res.json()) as OpenAiChatCompletionResponse;
    return this.parseGenerateResponse(data, body, warnings);
  }

  async doStream(
    options: LanguageModelV3CallOptions,
  ): Promise<LanguageModelV3StreamResult> {
    const warnings: Array<SharedV3Warning> = [];
    const { body, url } = this.buildRequest(options, warnings);
    body.stream = true;

    const res = await this.config.client.fetch(url, {
      method: "POST",
      headers: filterHeaders({
        "Content-Type": "application/json",
        Accept: "text/event-stream",
        ...(options.headers ?? {}),
      }),
      body: JSON.stringify(body),
      signal: options.abortSignal,
    });

    if (!res.ok) {
      const errBody = await safeReadText(res);
      throw new Error(
        `LMS chat/completions request failed: ${res.status} ${res.statusText}`
          + (errBody ? ` — ${errBody}` : ""),
      );
    }

    const stream = this.parseStreamResponse(res, body, warnings);

    return {
      stream,
      request: { body },
    };
  }

  private buildRequest(
    options: LanguageModelV3CallOptions,
    warnings: Array<SharedV3Warning>,
  ): { body: OpenAiChatRequest; url: string } {
    const baseUrl = getOpenAiBaseUrl(this.config.client);
    const url = new URL("chat/completions", `${baseUrl}/`).toString();
    const apiName = this.config.identifier.type === "lmsModel"
      ? this.config.identifier.apiName
      : this.config.identifier.registeredModelRid;

    const messages = convertPrompt(options.prompt, warnings);

    const tools = options.tools
      ?.filter(
        (t): t is LanguageModelV3FunctionTool => {
          if (t.type === "function") return true;
          warnings.push({
            type: "unsupported",
            feature: `${t.type} tool type`,
            details:
              `Only "function" tools are supported; "${t.type}" tools are ignored`,
          });
          return false;
        },
      )
      .map((t) => ({
        type: "function" as const,
        function: {
          name: t.name,
          description: t.description,
          parameters: t.inputSchema,
        },
      }));

    const toolChoice = convertToolChoice(options.toolChoice);

    if (options.topK != null) {
      warnings.push({
        type: "unsupported",
        feature: "topK",
        details:
          "topK is not supported by the Foundry LMS OpenAI proxy — ignored",
      });
    }

    if (options.responseFormat?.type === "json") {
      warnings.push({
        type: "unsupported",
        feature: "JSON response format",
        details: "Structured JSON output is not supported in v0 — ignored",
      });
    }

    const body: OpenAiChatRequest = {
      model: apiName,
      messages,
      max_tokens: options.maxOutputTokens,
      temperature: options.temperature,
      top_p: options.topP,
      stop: options.stopSequences,
      seed: options.seed,
      presence_penalty: options.presencePenalty,
      frequency_penalty: options.frequencyPenalty,
      tools: tools != null && tools.length > 0 ? tools : undefined,
      tool_choice: toolChoice,
      stream: false,
    };

    return { body, url };
  }

  private parseGenerateResponse(
    res: OpenAiChatCompletionResponse,
    request: OpenAiChatRequest,
    warnings: Array<SharedV3Warning>,
  ): LanguageModelV3GenerateResult {
    const choice = res.choices[0];
    if (choice == null) {
      throw new Error(
        "LMS chat/completions response did not include any choices",
      );
    }

    const message = choice.message;
    const content: Array<LanguageModelV3Content> = [];

    if (message.content != null && message.content.length > 0) {
      content.push({ type: "text", text: message.content });
    }

    const reasoningText = message.reasoning ?? message.reasoning_content;
    if (reasoningText != null) {
      content.push({ type: "reasoning", text: reasoningText });
    }

    if (message.tool_calls != null) {
      for (const tc of message.tool_calls) {
        content.push({
          type: "tool-call",
          toolCallId: tc.id,
          toolName: tc.function.name,
          input: tc.function.arguments,
        });
      }
    }

    return {
      content,
      finishReason: mapFinishReason(choice.finish_reason),
      usage: mapUsage(res.usage),
      request: { body: request },
      response: {
        id: res.id,
        modelId: res.model,
        timestamp: new Date(res.created * 1000),
        body: res,
      },
      warnings,
    };
  }

  private parseStreamResponse(
    res: Response,
    request: OpenAiChatRequest,
    warnings: Array<SharedV3Warning>,
  ): ReadableStream<LanguageModelV3StreamPart> {
    const body = res.body;
    if (body == null) {
      throw new Error("LMS streaming response has no body");
    }

    const reader = body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let sentStart = false;
    const textId = "text-0";
    let textStarted = false;
    const toolInputStarted = new Set<string>();

    return new ReadableStream<LanguageModelV3StreamPart>({
      pull: async (controller) => {
        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            if (textStarted) {
              controller.enqueue({ type: "text-end", id: textId });
            }
            controller.close();
            return;
          }

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") {
              if (textStarted) {
                controller.enqueue({ type: "text-end", id: textId });
              }
              controller.close();
              return;
            }

            let chunk: OpenAiStreamChunk;
            try {
              chunk = JSON.parse(data);
            } catch {
              continue;
            }

            if (!sentStart) {
              sentStart = true;
              controller.enqueue({ type: "stream-start", warnings });
              controller.enqueue({
                type: "response-metadata",
                id: chunk.id,
                modelId: chunk.model,
                timestamp: new Date(chunk.created * 1000),
              });
            }

            const delta = chunk.choices?.[0]?.delta;
            if (delta == null) {
              if (chunk.usage != null) {
                controller.enqueue({
                  type: "finish",
                  usage: mapUsage(chunk.usage),
                  finishReason: mapFinishReason(
                    chunk.choices?.[0]?.finish_reason ?? undefined,
                  ),
                });
              }
              continue;
            }

            if (delta.content != null && delta.content.length > 0) {
              if (!textStarted) {
                textStarted = true;
                controller.enqueue({ type: "text-start", id: textId });
              }
              controller.enqueue({
                type: "text-delta",
                id: textId,
                delta: delta.content,
              });
            }

            if (delta.tool_calls != null) {
              for (const tc of delta.tool_calls) {
                const id = tc.id ?? `tool-${tc.index}`;
                if (tc.function?.name != null && !toolInputStarted.has(id)) {
                  if (textStarted) {
                    textStarted = false;
                    controller.enqueue({ type: "text-end", id: textId });
                  }
                  toolInputStarted.add(id);
                  controller.enqueue({
                    type: "tool-input-start",
                    id,
                    toolName: tc.function.name,
                  });
                }
                if (tc.function?.arguments != null) {
                  controller.enqueue({
                    type: "tool-input-delta",
                    id,
                    delta: tc.function.arguments,
                  });
                }
              }
            }

            const finishReason = chunk.choices?.[0]?.finish_reason;
            if (finishReason != null) {
              if (textStarted) {
                textStarted = false;
                controller.enqueue({ type: "text-end", id: textId });
              }
              for (const id of toolInputStarted) {
                controller.enqueue({ type: "tool-input-end", id });
              }
              controller.enqueue({
                type: "finish",
                usage: mapUsage(chunk.usage),
                finishReason: mapFinishReason(finishReason),
              });
            }
          }
        }
      },
      cancel: () => {
        void reader.cancel();
      },
    });
  }
}

// ---------------------------------------------------------------------------
// OpenAI types
// ---------------------------------------------------------------------------

interface OpenAiChatRequest {
  model: string;
  messages: Array<unknown>;
  max_tokens?: number;
  temperature?: number;
  top_p?: number;
  stop?: string[];
  seed?: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  tools?: Array<{
    type: "function";
    function: { name: string; description?: string; parameters: unknown };
  }>;
  tool_choice?: OpenAiToolChoiceValue;
  stream: boolean;
}

type OpenAiToolChoiceValue =
  | "auto"
  | "none"
  | "required"
  | { type: "function"; function: { name: string } };

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
  usage?: OpenAiUsage;
}

interface OpenAiStreamChunk {
  id: string;
  object: string;
  created: number;
  model: string;
  choices?: Array<{
    index: number;
    delta: {
      role?: string;
      content?: string | null;
      tool_calls?: Array<{
        index: number;
        id?: string;
        type?: "function";
        function?: { name?: string; arguments?: string };
      }>;
    };
    finish_reason: string | null;
  }>;
  usage?: OpenAiUsage;
}

interface OpenAiUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  completion_tokens_details?: {
    reasoning_tokens?: number;
  };
  prompt_tokens_details?: {
    cached_tokens?: number;
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function convertToolChoice(
  choice: LanguageModelV3ToolChoice | undefined,
): OpenAiToolChoiceValue | undefined {
  if (choice == null) return undefined;
  switch (choice.type) {
    case "auto":
      return "auto";
    case "none":
      return "none";
    case "required":
      return "required";
    case "tool":
      return { type: "function", function: { name: choice.toolName } };
  }
}

function mapUsage(usage: OpenAiUsage | undefined): LanguageModelV3Usage {
  return {
    inputTokens: {
      total: usage?.prompt_tokens,
      noCache: undefined,
      cacheRead: usage?.prompt_tokens_details?.cached_tokens,
      cacheWrite: undefined,
    },
    outputTokens: {
      total: usage?.completion_tokens,
      text: undefined,
      reasoning: usage?.completion_tokens_details?.reasoning_tokens,
    },
  };
}

function filterHeaders(
  input: Record<string, string | undefined>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(input)) {
    if (v != null) out[k] = v;
  }
  return out;
}

async function safeReadText(res: Response): Promise<string | undefined> {
  try {
    return await res.text();
  } catch {
    return undefined;
  }
}
