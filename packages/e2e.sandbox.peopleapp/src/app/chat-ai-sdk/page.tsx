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

import { useChat } from "@ai-sdk/react";
import { createFoundryAI } from "@osdk/aip-core/ai-sdk";
import React, { useCallback, useMemo } from "react";
import { Button } from "../../components/Button.js";
import { H1 } from "../../components/headers.js";
import { platformClient } from "../../foundryClient.js";
import { ChatAiSdkComposer } from "./ChatAiSdkComposer.js";
import { ChatAiSdkMessageList } from "./ChatAiSdkMessageList.js";
import { ChatAiSdkStatusBadge } from "./ChatAiSdkStatusBadge.js";
import { FoundryChatTransport } from "./foundryTransport.js";

const SYSTEM_PROMPT = "You are a concise assistant. Keep answers short.";

export function ChatAiSdkPage() {
  const transport = useMemo(() => {
    const foundryAI = createFoundryAI({ client: platformClient });
    return new FoundryChatTransport({
      model: foundryAI("gpt-5.4"),
      system: SYSTEM_PROMPT,
    });
  }, []);

  const {
    messages,
    status,
    error,
    sendMessage,
    regenerate,
    stop,
    clearError,
    setMessages,
  } = useChat({ transport });

  const handleSend = useCallback(
    (text: string) => {
      void sendMessage({ text });
    },
    [sendMessage],
  );

  const handleRegenerate = useCallback(
    (messageId: string) => {
      void regenerate({ messageId });
    },
    [regenerate],
  );

  const handleClear = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  return (
    <div className="w-full max-w-2xl flex flex-col h-[70vh]">
      <H1>Chat (AI SDK)</H1>
      <ChatAiSdkStatusBadge status={status} onClear={handleClear} />
      {error != null && (
        <div className="mb-3 flex items-center justify-between bg-red-100 text-red-800 border border-red-200 rounded-sm px-3 py-2">
          <span className="text-sm">{error.message}</span>
          <Button variant="secondary" onClick={clearError}>
            Clear
          </Button>
        </div>
      )}
      <ChatAiSdkMessageList
        messages={messages}
        status={status}
        onRegenerate={handleRegenerate}
      />
      <ChatAiSdkComposer status={status} onSend={handleSend} onStop={stop} />
    </div>
  );
}
