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

import type { LanguageModelV3 } from "@ai-sdk/provider";
import type { ChatTransport, UIMessage, UIMessageChunk } from "ai";
import { streamText } from "ai";

/**
 * A ChatTransport that uses the AI SDK's `streamText` with a Foundry LMS
 * model to generate responses entirely client-side — no server endpoint needed.
 */
export class FoundryChatTransport implements ChatTransport<UIMessage> {
  private readonly model: LanguageModelV3;
  private readonly system: string | undefined;

  constructor(options: { model: LanguageModelV3; system?: string }) {
    this.model = options.model;
    this.system = options.system;
  }

  async sendMessages(
    options: Parameters<ChatTransport<UIMessage>["sendMessages"]>[0],
  ): Promise<ReadableStream<UIMessageChunk>> {
    const { messages, abortSignal } = options;

    const result = streamText({
      model: this.model,
      system: this.system,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.parts
          .filter((p): p is Extract<typeof p, { type: "text" }> =>
            p.type === "text"
          )
          .map((p) => p.text)
          .join(""),
      })),
      abortSignal,
    });

    return result.toUIMessageStream();
  }

  async reconnectToStream(): Promise<ReadableStream<UIMessageChunk> | null> {
    return null;
  }
}
