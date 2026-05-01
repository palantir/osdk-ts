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

/**
 * Shared types for the AIP SDK's chat completion primitives.
 */

// ---------------------------------------------------------------------------
// Messages
// ---------------------------------------------------------------------------

export type Role = "system" | "user" | "assistant" | "tool";

export interface SystemModelMessage {
  role: "system";
  content: string;
  providerOptions?: ProviderOptions;
}

export interface UserModelMessage {
  role: "user";
  content: string | Array<TextPart | ImagePart | FilePart>;
  providerOptions?: ProviderOptions;
}

export interface AssistantModelMessage {
  role: "assistant";
  content:
    | string
    | Array<TextPart | ReasoningPart | ToolCallPart | FilePart>;
  providerOptions?: ProviderOptions;
}

export interface ToolModelMessage {
  role: "tool";
  content: Array<ToolResultPart>;
  providerOptions?: ProviderOptions;
}

export type ModelMessage =
  | SystemModelMessage
  | UserModelMessage
  | AssistantModelMessage
  | ToolModelMessage;

// ---------------------------------------------------------------------------
// Content parts
// ---------------------------------------------------------------------------

export interface TextPart {
  type: "text";
  text: string;
  providerOptions?: ProviderOptions;
}

export interface ReasoningPart {
  type: "reasoning";
  text: string;
  providerOptions?: ProviderOptions;
}

export interface ImagePart {
  type: "image";
  /** Base64 string, data URL, ArrayBuffer, Uint8Array, or remote URL. */
  image: string | Uint8Array | ArrayBuffer | URL;
  mediaType?: string;
  providerOptions?: ProviderOptions;
}

export interface FilePart {
  type: "file";
  data: string | Uint8Array | ArrayBuffer | URL;
  mediaType: string;
  filename?: string;
  providerOptions?: ProviderOptions;
}

export interface ToolCallPart {
  type: "tool-call";
  toolCallId: string;
  toolName: string;
  input: unknown;
  providerOptions?: ProviderOptions;
}

export interface ToolResultPart {
  type: "tool-result";
  toolCallId: string;
  toolName: string;
  output: ToolResultOutput;
  providerOptions?: ProviderOptions;
}

export type ToolResultOutput =
  | { type: "text"; value: string }
  | { type: "json"; value: unknown }
  | { type: "error-text"; value: string }
  | { type: "error-json"; value: unknown }
  | {
    type: "content";
    value: Array<
      | { type: "text"; text: string }
      | { type: "media"; data: string; mediaType: string }
    >;
  };

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------

/**
 * Tool definition.
 *
 * `inputSchema` is intentionally typed as `unknown` rather than a specific
 * schema library type — it can be a Zod schema, a JSON Schema object, or any
 * other validator the consumer supplies.
 */
export interface Tool {
  description?: string;
  inputSchema: unknown;
  /** Provider-specific options, e.g. OpenAI strict mode. */
  providerOptions?: ProviderOptions;
}

export type ToolSet = Record<string, Tool>;

export type ToolChoice<TOOLS extends ToolSet = ToolSet> =
  | "auto"
  | "none"
  | "required"
  | { type: "tool"; toolName: keyof TOOLS & string };

// ---------------------------------------------------------------------------
// Tool calls / results (model output)
// ---------------------------------------------------------------------------

export interface ToolCall<NAME extends string = string, INPUT = unknown> {
  type: "tool-call";
  toolCallId: string;
  toolName: NAME;
  input: INPUT;
  providerExecuted?: boolean;
  providerMetadata?: ProviderMetadata;
}

export interface ToolResult<
  NAME extends string = string,
  INPUT = unknown,
  OUTPUT = unknown,
> {
  type: "tool-result";
  toolCallId: string;
  toolName: NAME;
  input: INPUT;
  output: OUTPUT;
  providerMetadata?: ProviderMetadata;
}

// ---------------------------------------------------------------------------
// Usage / finish reason / metadata
// ---------------------------------------------------------------------------

export type FinishReason =
  | "stop"
  | "length"
  | "content-filter"
  | "tool-calls"
  | "error"
  | "other";

export interface LanguageModelUsage {
  inputTokens: number | undefined;
  outputTokens: number | undefined;
  totalTokens: number | undefined;
  reasoningTokens?: number;
  cachedInputTokens?: number;
}

export interface ProviderMetadata {
  [providerId: string]: Record<string, unknown>;
}

export type ProviderOptions = ProviderMetadata;

export interface Warning {
  type: "unsupported-tool" | "other";
  details?: string;
  message?: string;
}

export interface RequestMetadata {
  body?: unknown;
}

export interface ResponseMetadata {
  id?: string;
  modelId?: string;
  timestamp?: Date;
  headers?: Record<string, string>;
  body?: unknown;
  /** Raw assistant messages emitted by the provider. */
  messages?: Array<AssistantModelMessage | ToolModelMessage>;
}

// ---------------------------------------------------------------------------
// Reasoning
// ---------------------------------------------------------------------------

export interface ReasoningOutput {
  type: "reasoning";
  text: string;
  providerMetadata?: ProviderMetadata;
}

// ---------------------------------------------------------------------------
// Step / final result content parts
// ---------------------------------------------------------------------------

export type ContentPart<TOOLS extends ToolSet = ToolSet> =
  | { type: "text"; text: string; providerMetadata?: ProviderMetadata }
  | {
    type: "reasoning";
    text: string;
    providerMetadata?: ProviderMetadata;
  }
  | (ToolCall<keyof TOOLS & string> & { type: "tool-call" })
  | (ToolResult<keyof TOOLS & string> & { type: "tool-result" });

export interface StepResult<TOOLS extends ToolSet = ToolSet> {
  content: Array<ContentPart<TOOLS>>;
  text: string;
  reasoning: Array<ReasoningOutput>;
  reasoningText: string | undefined;
  toolCalls: Array<ToolCall<keyof TOOLS & string>>;
  toolResults: Array<ToolResult<keyof TOOLS & string>>;
  finishReason: FinishReason;
  rawFinishReason: string | undefined;
  usage: LanguageModelUsage;
  warnings: Array<Warning> | undefined;
  request?: RequestMetadata;
  response?: ResponseMetadata;
  providerMetadata: ProviderMetadata | undefined;
}
