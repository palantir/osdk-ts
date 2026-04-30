import { foundryModel } from "@osdk/aip-core";
import { useChat } from "@osdk/react/experimental/aip";
import React, { useCallback, useMemo } from "react";
import { Button } from "../../components/Button.js";
import { H1 } from "../../components/headers.js";
import { platformClient } from "../../foundryClient.js";
import { ChatComposer } from "./ChatComposer.js";
import { ChatMessageList } from "./ChatMessageList.js";
import { ChatStatusBadge } from "./ChatStatusBadge.js";

const SYSTEM_PROMPT = "You are a concise assistant. Keep answers short.";

export function ChatPage() {
  const model = useMemo(
    () => foundryModel({ client: platformClient, model: "gpt-4o" }),
    [],
  );

  const {
    messages,
    status,
    error,
    sendMessage,
    regenerate,
    stop,
    clearError,
    setMessages,
  } = useChat({
    model,
    system: SYSTEM_PROMPT,
  });

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
      <H1>Chat</H1>
      <ChatStatusBadge status={status} onClear={handleClear} />
      {error != null && (
        <div className="mb-3 flex items-center justify-between bg-red-100 text-red-800 border border-red-200 rounded-sm px-3 py-2">
          <span className="text-sm">{error.message}</span>
          <Button variant="secondary" onClick={clearError}>
            Clear
          </Button>
        </div>
      )}
      <ChatMessageList
        messages={messages}
        status={status}
        onRegenerate={handleRegenerate}
      />
      <ChatComposer status={status} onSend={handleSend} onStop={stop} />
    </div>
  );
}
