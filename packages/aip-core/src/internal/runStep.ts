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
  AssistantModelMessage,
  ContentPart,
  FinishReason,
  LanguageModelUsage,
  ModelMessage,
  ProviderMetadata,
  ReasoningOutput,
  RequestMetadata,
  ResponseMetadata,
  StepResult,
  ToolCall,
  ToolChoice,
  ToolResultPart,
  ToolSet,
  Warning,
} from "../types.js";

// ---------------------------------------------------------------------------
// Public input/output of this module
// ---------------------------------------------------------------------------

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
  const handle = _getFoundryInternal(input.model);
  const baseUrl = getOpenAiBaseUrl(handle.client);
  const url = new URL("chat/completions", `${baseUrl}/`).toString();
  const apiName = handle.identifier.type === "lmsModel"
    ? handle.identifier.apiName
    : handle.identifier.registeredModelRid;

  const body = buildRequestBody({ apiName, ...input });

  const res = await handle.client.fetch(url, {
    method: "POST",
    headers: filterHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
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

  const data = (await res.json()) as OpenAiChatCompletionResponse;

  return parseResponse<TOOLS>(data, body, input.warnings);
}

// ---------------------------------------------------------------------------
// Request body construction
// ---------------------------------------------------------------------------

interface OpenAiChatRequest {
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
  stream: false;
}

export interface OpenAiMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string | Array<OpenAiContentPart> | null;
  tool_calls?: Array<OpenAiAssistantToolCall>;
  tool_call_id?: string;
}

type OpenAiContentPart = { type: "text"; text: string };

export interface OpenAiTool {
  type: "function";
  function: {
    name: string;
    description?: string;
    parameters: unknown;
  };
}

export type OpenAiToolChoice =
  | "auto"
  | "none"
  | "required"
  | { type: "function"; function: { name: string } };

export interface OpenAiAssistantToolCall {
  id: string;
  type: "function";
  function: { name: string; arguments: string };
}

function buildRequestBody<TOOLS extends ToolSet>(
  args: RunStepInput<TOOLS> & { apiName: string },
): OpenAiChatRequest {
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
    stream: false,
  };
}

export function convertMessage(
  m: ModelMessage,
  warnings: Array<Warning>,
): Array<OpenAiMessage> {
  switch (m.role) {
    case "system":
      return [{ role: "system", content: m.content }];

    case "user": {
      if (typeof m.content === "string") {
        return [{ role: "user", content: m.content }];
      }
      const parts: Array<OpenAiContentPart> = [];
      for (const p of m.content) {
        if (p.type === "text") {
          parts.push({ type: "text", text: p.text });
        } else {
          warnings.push({
            type: "other",
            message:
              `Unsupported user content part "${p.type}" — ignored in v0`,
          });
        }
      }
      return [{ role: "user", content: parts }];
    }

    case "assistant": {
      if (typeof m.content === "string") {
        return [{ role: "assistant", content: m.content }];
      }
      let text = "";
      const toolCalls: Array<OpenAiAssistantToolCall> = [];
      for (const p of m.content) {
        switch (p.type) {
          case "text":
            text += p.text;
            break;
          case "tool-call":
            toolCalls.push({
              id: p.toolCallId,
              type: "function",
              function: {
                name: p.toolName,
                arguments: JSON.stringify(p.input ?? {}),
              },
            });
            break;
          case "reasoning":
          case "file":
            warnings.push({
              type: "other",
              message:
                `Unsupported assistant content part "${p.type}" — ignored in v0`,
            });
            break;
        }
      }
      return [{
        role: "assistant",
        content: text.length > 0 ? text : null,
        tool_calls: toolCalls.length > 0 ? toolCalls : undefined,
      }];
    }

    case "tool":
      return m.content.map((part: ToolResultPart) => ({
        role: "tool" as const,
        content: stringifyToolResult(part, warnings),
        tool_call_id: part.toolCallId,
      }));
  }
}

function stringifyToolResult(
  part: ToolResultPart,
  warnings: Array<Warning>,
): string {
  switch (part.output.type) {
    case "text":
    case "error-text":
      return part.output.value;
    case "json":
    case "error-json":
      return JSON.stringify(part.output.value);
    case "content":
      return part.output.value
        .map((c) => {
          if (c.type === "text") return c.text;
          warnings.push({
            type: "other",
            message: `Unsupported tool result media — ignored in v0`,
          });
          return "";
        })
        .filter((s) => s.length > 0)
        .join("\n");
  }
}

export function convertTools<TOOLS extends ToolSet>(
  tools: TOOLS,
  warnings: Array<Warning>,
): Array<OpenAiTool> {
  return Object.entries(tools).map(([name, tool]) => {
    const parameters = isJsonSchemaLike(tool.inputSchema)
      ? tool.inputSchema
      : (warnings.push({
        type: "unsupported-tool",
        details:
          `Tool "${name}" inputSchema is not a JSON Schema; v0 only supports plain JSON Schema objects. Defaulting to {} parameters.`,
      }),
        { type: "object", properties: {} });
    return {
      type: "function" as const,
      function: {
        name,
        description: tool.description,
        parameters,
      },
    };
  });
}

export function convertToolChoice<TOOLS extends ToolSet>(
  choice: ToolChoice<TOOLS> | undefined,
): OpenAiToolChoice | undefined {
  if (choice == null) return undefined;
  if (choice === "auto" || choice === "none" || choice === "required") {
    return choice;
  }
  return { type: "function", function: { name: choice.toolName } };
}

function isJsonSchemaLike(value: unknown): boolean {
  return (
    typeof value === "object"
    && value != null
    && (
      "type" in value
      || "properties" in value
      || "$ref" in value
      || "oneOf" in value
      || "anyOf" in value
      || "allOf" in value
    )
  );
}

// ---------------------------------------------------------------------------
// Response parsing
// ---------------------------------------------------------------------------

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
  request: OpenAiChatRequest,
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
      type: "tool-call" as const,
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
    ? {
      inputTokens: res.usage.prompt_tokens,
      outputTokens: res.usage.completion_tokens,
      totalTokens: res.usage.total_tokens,
      reasoningTokens: res.usage.completion_tokens_details?.reasoning_tokens,
      cachedInputTokens: res.usage.prompt_tokens_details?.cached_tokens,
    }
    : {
      inputTokens: undefined,
      outputTokens: undefined,
      totalTokens: undefined,
    };

  const finishReason = mapFinishReason(choice.finish_reason);

  const responseMessages: Array<AssistantModelMessage> = [{
    role: "assistant",
    content: buildAssistantContent(text, toolCalls),
  }];

  const requestMeta: RequestMetadata = { body: request };
  const responseMeta: ResponseMetadata = {
    id: res.id,
    modelId: res.model,
    timestamp: new Date(res.created * 1000),
    body: res,
    messages: responseMessages,
  };

  const providerMetadata: ProviderMetadata | undefined = undefined;

  return {
    content,
    text,
    reasoning,
    reasoningText,
    files: [],
    sources: [],
    toolCalls,
    toolResults: [],
    finishReason,
    rawFinishReason: choice.finish_reason,
    usage,
    warnings: warnings.length > 0 ? warnings : undefined,
    request: requestMeta,
    response: responseMeta,
    providerMetadata,
  };
}

function buildAssistantContent<TOOLS extends ToolSet>(
  text: string,
  toolCalls: ReadonlyArray<ToolCall<keyof TOOLS & string>>,
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
  if (text.length > 0) parts.push({ type: "text", text });
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

export function mapFinishReason(reason: string): FinishReason {
  switch (reason) {
    case "stop":
      return "stop";
    case "length":
      return "length";
    case "tool_calls":
    case "function_call":
      return "tool-calls";
    case "content_filter":
      return "content-filter";
    default:
      return "other";
  }
}

export function parseToolArguments(
  args: string,
  warnings: Array<Warning>,
): unknown {
  if (args === "" || args == null) return {};
  try {
    return JSON.parse(args);
  } catch {
    warnings.push({
      type: "other",
      message:
        `Tool call arguments were not valid JSON; passing through as a raw string`,
    });
    return args;
  }
}

// ---------------------------------------------------------------------------
// Misc helpers
// ---------------------------------------------------------------------------

export function filterHeaders(
  input: Record<string, string | undefined>,
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(input)) {
    if (v != null) out[k] = v;
  }
  return out;
}

export async function safeReadText(
  res: Response,
): Promise<string | undefined> {
  try {
    return await res.text();
  } catch {
    return undefined;
  }
}
