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

import { uiMessagesToModelMessages } from "./internal/uiMessageBridge.js";
import type { LanguageModel } from "./model.js";
import { streamText, type TextStreamChunk } from "./streamText.js";
import type {
  ChatTransport,
  ChatTransportReconnectArgs,
  ChatTransportSendMessagesArgs,
  UIMessage,
  UIMessageChunk,
} from "./uiMessage.js";

type SendMessagesArgs = ChatTransportSendMessagesArgs<UIMessage>;
type ReconnectArgs = ChatTransportReconnectArgs;

/**
 * Options for {@link LmsChatTransport}. Configures the streamed chat
 * completion against the Foundry Language Model Service.
 */
export interface LmsChatTransportOptions {
  /** Foundry-LMS-backed language model. Build via `foundryModel(...)`. */
  model: LanguageModel;

  /** System prompt prepended to every request. */
  system?: string;

  /** Sampling controls. */
  temperature?: number;
  maxOutputTokens?: number;
  topP?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stopSequences?: Array<string>;
  seed?: number;

  /** Extra HTTP headers forwarded to LMS. */
  headers?: Record<string, string | undefined>;
}

/**
 * Stream chat completions through the Foundry Language Model Service via
 * `streamText`. Pass to `useChat({ transport })` to override the default
 * transport (e.g. to inject custom sampling).
 */
export class LmsChatTransport implements ChatTransport<UIMessage> {
  private readonly opts: LmsChatTransportOptions;

  constructor(opts: LmsChatTransportOptions) {
    this.opts = opts;
  }

  sendMessages = async (
    args: SendMessagesArgs,
  ): Promise<ReadableStream<UIMessageChunk>> => {
    const result = streamText({
      model: this.opts.model,
      // System prompt is folded into the model-message list by the bridge so
      // it isn't double-prepended (transport.system + system messages from
      // args.messages would both land otherwise).
      messages: uiMessagesToModelMessages(args.messages, this.opts.system),
      temperature: this.opts.temperature,
      maxOutputTokens: this.opts.maxOutputTokens,
      topP: this.opts.topP,
      presencePenalty: this.opts.presencePenalty,
      frequencyPenalty: this.opts.frequencyPenalty,
      stopSequences: this.opts.stopSequences,
      seed: this.opts.seed,
      headers: mergeHeaders(this.opts.headers, args.headers),
      abortSignal: args.abortSignal,
    });

    const assistantId = args.messageId ?? generateMessageId();
    const textPartId = `${assistantId}-text-0`;
    const reasoningPartId = `${assistantId}-reasoning-0`;
    let textOpen = false;
    let reasoningOpen = false;
    let startEmitted = false;

    return result.fullStream.pipeThrough(
      new TransformStream<TextStreamChunk, UIMessageChunk>({
        transform(chunk, controller) {
          if (!startEmitted) {
            startEmitted = true;
            controller.enqueue({ type: "start", messageId: assistantId });
            controller.enqueue({ type: "start-step" });
          }
          const ensureTextOpen = (): void => {
            if (!textOpen) {
              textOpen = true;
              controller.enqueue({ type: "text-start", id: textPartId });
            }
          };
          const closeText = (): void => {
            if (textOpen) {
              textOpen = false;
              controller.enqueue({ type: "text-end", id: textPartId });
            }
          };
          const closeReasoning = (): void => {
            if (reasoningOpen) {
              reasoningOpen = false;
              controller.enqueue({
                type: "reasoning-end",
                id: reasoningPartId,
              });
            }
          };
          switch (chunk.type) {
            case "text-start": {
              ensureTextOpen();
              return;
            }
            case "text-delta": {
              ensureTextOpen();
              controller.enqueue({
                type: "text-delta",
                id: textPartId,
                delta: chunk.delta,
              });
              return;
            }
            case "text-end": {
              closeText();
              return;
            }
            case "reasoning-delta": {
              if (!reasoningOpen) {
                reasoningOpen = true;
                controller.enqueue({
                  type: "reasoning-start",
                  id: reasoningPartId,
                });
              }
              controller.enqueue({
                type: "reasoning-delta",
                id: reasoningPartId,
                delta: chunk.delta,
              });
              return;
            }
            case "tool-call": {
              controller.enqueue({
                type: "tool-input-available",
                toolCallId: chunk.toolCallId,
                toolName: chunk.toolName,
                input: chunk.input,
              });
              return;
            }
            case "finish": {
              closeText();
              closeReasoning();
              controller.enqueue({ type: "finish-step" });
              controller.enqueue({
                type: "finish",
                messageMetadata: {
                  finishReason: chunk.finishReason,
                  usage: chunk.usage,
                },
              });
              return;
            }
            case "error": {
              closeText();
              closeReasoning();
              controller.enqueue({
                type: "error",
                errorText: chunk.error.message,
              });
              return;
            }
          }
        },
      }),
    );
  };

  reconnectToStream = async (
    _args: ReconnectArgs,
  ): Promise<ReadableStream<UIMessageChunk> | null> => {
    // LMS does not expose stream resume in v0 — signal "no resumable stream".
    return null;
  };
}

function mergeHeaders(
  base: Record<string, string | undefined> | undefined,
  override: Record<string, string> | Headers | undefined,
): Record<string, string | undefined> | undefined {
  if (base == null && override == null) {
    return undefined;
  }
  const out: Record<string, string | undefined> = { ...(base ?? {}) };
  if (override == null) {
    return out;
  }
  if (override instanceof Headers) {
    override.forEach((value, key) => {
      out[key] = value;
    });
    return out;
  }
  for (const [k, v] of Object.entries(override)) {
    out[k] = v;
  }
  return out;
}

/** Convenience factory equivalent to `new LmsChatTransport(opts)`. */
export function lmsChatTransport(
  opts: LmsChatTransportOptions,
): LmsChatTransport {
  return new LmsChatTransport(opts);
}

function generateMessageId(): string {
  if (
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `msg-${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}
