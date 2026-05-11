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

import {
  type ChatTransport,
  generateMessageId,
  type UIMessage,
  type UIMessageChunk,
} from "@osdk/aip-core";
import type React from "react";
import type { ChatStore } from "./chatStore.js";

/**
 * Mutable orchestration handle threaded through the streaming functions.
 * Holds everything they need to read snapshots, mutate state, and check
 * whether their stream is still the active one.
 */
export interface StreamContext {
  store: ChatStore;
  abortRef: React.MutableRefObject<AbortController | undefined>;
  stoppedRef: React.MutableRefObject<boolean>;
  onFinish:
    | ((event: {
      message: UIMessage;
      messages: ReadonlyArray<UIMessage>;
    }) => void)
    | undefined;
  onError: ((error: Error) => void) | undefined;
}

export async function runChatStream(
  ctx: StreamContext,
  transport: ChatTransport<UIMessage>,
  chatId: string,
  seed: ReadonlyArray<UIMessage>,
  trigger: "submit-message" | "regenerate-message",
): Promise<void> {
  ctx.abortRef.current?.abort();
  const ctrl = new AbortController();
  ctx.abortRef.current = ctrl;
  ctx.stoppedRef.current = false;

  const assistantId = generateMessageId();
  try {
    const stream = await transport.sendMessages({
      trigger,
      chatId,
      messageId: assistantId,
      messages: seed.slice(),
      abortSignal: ctrl.signal,
    });
    await drainStream(ctx, stream, assistantId, ctrl);
  } catch (err) {
    handleStreamError(ctx, err, ctrl);
  }
}

export async function drainStream(
  ctx: StreamContext,
  stream: ReadableStream<UIMessageChunk>,
  assistantMessageId: string,
  capturedCtrl: AbortController,
): Promise<void> {
  const { store } = ctx;
  const reader = stream.getReader();
  let textBuf = "";

  const isStale = (): boolean =>
    ctx.abortRef.current != null && ctx.abortRef.current !== capturedCtrl;

  // Caller dropped our assistant message via `setMessages` mid-stream.
  // Treat as "the consumer no longer wants this stream" — quietly stop.
  const isOrphaned = (): boolean => {
    const messages = store.getSnapshot().messages;
    return textBuf.length > 0
      && !messages.some((m) => m.id === assistantMessageId);
  };

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      if (isStale()) {
        await reader.cancel();
        return;
      }
      if (isOrphaned()) {
        await reader.cancel();
        store.setState((prev) => ({ ...prev, status: "ready" }));
        return;
      }
      if (value.type === "text-delta") {
        textBuf += value.delta;
        upsertAssistantText(store, assistantMessageId, textBuf);
      } else if (value.type === "error") {
        if (ctx.stoppedRef.current || capturedCtrl.signal.aborted) {
          return;
        }
        await reader.cancel();
        throw new Error(value.errorText);
      }
    }
    if (isStale()) {
      return;
    }
    store.setState((prev) => ({ ...prev, status: "ready" }));
    const finalSnap = store.getSnapshot();
    const finalMessage = finalSnap.messages.find(
      (m) => m.id === assistantMessageId,
    );
    if (finalMessage != null && ctx.onFinish != null) {
      ctx.onFinish({ message: finalMessage, messages: finalSnap.messages });
    }
  } catch (err) {
    handleStreamError(ctx, err, capturedCtrl);
  } finally {
    reader.releaseLock();
  }
}

function upsertAssistantText(
  store: ChatStore,
  assistantMessageId: string,
  text: string,
): void {
  store.setStateThrottled((prev) => {
    const exists = prev.messages.some((m) => m.id === assistantMessageId);
    const messages = exists
      ? prev.messages.map((m) =>
        m.id === assistantMessageId
          ? { ...m, parts: [{ type: "text" as const, text }] }
          : m
      )
      : [
        ...prev.messages,
        {
          id: assistantMessageId,
          role: "assistant" as const,
          parts: [{ type: "text" as const, text }],
        },
      ];
    return { ...prev, status: "streaming", messages };
  });
}

function handleStreamError(
  ctx: StreamContext,
  err: unknown,
  capturedCtrl: AbortController,
): void {
  if (ctx.abortRef.current != null && ctx.abortRef.current !== capturedCtrl) {
    return;
  }
  const error = err instanceof Error ? err : new Error(String(err));
  if (
    ctx.stoppedRef.current
    || error.name === "AbortError"
    || capturedCtrl.signal.aborted
  ) {
    ctx.store.setState((prev) => ({
      ...prev,
      status: "ready",
      error: undefined,
    }));
    return;
  }
  ctx.store.setState((prev) => ({ ...prev, status: "error", error }));
  ctx.onError?.(error);
}
