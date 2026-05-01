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
 * UI-level message and stream-chunk shapes for the AIP SDK's chat
 * primitives. These describe the wire format `useChat` consumes and
 * `LmsChatTransport` produces — a thin local subset of the Vercel AI SDK v5
 * UI types covering the v0 text-only surface.
 */

import type { FinishReason, LanguageModelUsage } from "./types.js";

// ---------------------------------------------------------------------------
// UIMessage
// ---------------------------------------------------------------------------

export type UIMessageRole = "system" | "user" | "assistant";

export type UIMessagePart =
  | { type: "text"; text: string }
  | { type: "reasoning"; text: string }
  | { type: "file"; url: string; mediaType: string };

export interface UIMessage {
  id: string;
  role: UIMessageRole;
  parts: Array<UIMessagePart>;
  metadata?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// UIMessageChunk — discriminated union streamed by transports
// ---------------------------------------------------------------------------

export type UIMessageChunk =
  | { type: "start"; messageId: string }
  | { type: "start-step" }
  | { type: "text-start"; id: string }
  | { type: "text-delta"; id: string; delta: string }
  | { type: "text-end"; id: string }
  | { type: "reasoning-start"; id: string }
  | { type: "reasoning-delta"; id: string; delta: string }
  | { type: "reasoning-end"; id: string }
  | {
    type: "tool-input-available";
    toolCallId: string;
    toolName: string;
    input: unknown;
  }
  | { type: "finish-step" }
  | {
    type: "finish";
    messageMetadata?: {
      finishReason?: FinishReason;
      usage?: LanguageModelUsage;
    };
  }
  | { type: "error"; errorText: string };

// ---------------------------------------------------------------------------
// ChatTransport — abstraction useChat plugs into
// ---------------------------------------------------------------------------

export type ChatTransportTrigger = "submit-message" | "regenerate-message";

export interface ChatTransportSendMessagesArgs<MSG extends UIMessage> {
  trigger: ChatTransportTrigger;
  chatId: string;
  messageId: string;
  messages: ReadonlyArray<MSG>;
  abortSignal: AbortSignal | undefined;
  headers?: Record<string, string> | Headers;
}

export interface ChatTransportReconnectArgs {
  chatId: string;
}

export interface ChatTransport<MSG extends UIMessage = UIMessage> {
  sendMessages(
    args: ChatTransportSendMessagesArgs<MSG>,
  ): Promise<ReadableStream<UIMessageChunk>>;

  reconnectToStream(
    args: ChatTransportReconnectArgs,
  ): Promise<ReadableStream<UIMessageChunk> | null>;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Concatenate all `text` parts of a UIMessage into a single string. */
export function getUIMessageText(message: UIMessage): string {
  let buf = "";
  for (const p of message.parts) {
    if (p.type === "text") {
      buf += p.text;
    }
  }
  return buf;
}
