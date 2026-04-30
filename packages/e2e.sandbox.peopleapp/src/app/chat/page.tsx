import { foundryModel } from "@osdk/aip-core";
import { MessageInput } from "@osdk/react-components/experimental/message-input";
import type { Message } from "@osdk/react-components/experimental/message-list";
import { MessageList } from "@osdk/react-components/experimental/message-list";
import type { ChatStatus, UIMessage } from "@osdk/react/experimental/aip";
import { useChat } from "@osdk/react/experimental/aip";
import React, { useCallback, useMemo } from "react";
import { Button } from "../../components/Button.js";
import { H1 } from "../../components/headers.js";
import { platformClient } from "../../foundryClient.js";
import { ChatStatusBadge } from "./ChatStatusBadge.js";

const SYSTEM_PROMPT = "You are a concise assistant. Keep answers short.";
const PENDING_AGENT_ID = "__pending_agent__";

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

  const osdkMessages = useMemo(
    () => toOsdkMessages(messages, status, error?.message),
    [messages, status, error],
  );

  const handleSend = useCallback(
    (text: string) => {
      void sendMessage({ text });
    },
    [sendMessage],
  );

  const handleRegenerate = useCallback(() => {
    void regenerate();
  }, [regenerate]);

  const handleClear = useCallback(() => {
    setMessages([]);
  }, [setMessages]);

  const inFlight = status === "submitted" || status === "streaming";
  const hasAssistantMessage = messages.some((m) => m.role === "assistant");
  const canRegenerate = status === "ready" && hasAssistantMessage;

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
      <div className="flex-1 min-h-0 mb-2">
        <MessageList messages={osdkMessages} autoScrollOnAppend={true} />
      </div>
      <div className="flex gap-2 mb-2">
        {inFlight && (
          <Button variant="danger" onClick={stop}>
            Stop
          </Button>
        )}
        {canRegenerate && (
          <Button variant="secondary" onClick={handleRegenerate}>
            Regenerate
          </Button>
        )}
      </div>
      <MessageInput
        onSendMessage={handleSend}
        disabled={status !== "ready"}
      />
    </div>
  );
}

function toOsdkMessages(
  uiMessages: ReadonlyArray<UIMessage>,
  status: ChatStatus,
  errorMessage: string | undefined,
): Message[] {
  const lastIndex = uiMessages.length - 1;
  const out: Message[] = uiMessages.map((m, i): Message => {
    if (m.role === "user") {
      return { id: m.id, role: "user", text: extractText(m) };
    }
    const isLast = i === lastIndex;
    const agentStatus = isLast && status === "streaming"
      ? "streaming"
      : isLast && status === "error"
      ? "failed"
      : "done";
    return {
      id: m.id,
      role: "agent",
      status: agentStatus,
      parts: (m.parts ?? [])
        .filter((p) => p.type === "text")
        .map((p) => ({ type: "text", text: p.text })),
      errorMessage: agentStatus === "failed" ? errorMessage : undefined,
    };
  });

  if (status === "submitted") {
    out.push({
      id: PENDING_AGENT_ID,
      role: "agent",
      status: "streaming",
    });
  }
  return out;
}

function extractText(m: UIMessage): string {
  let buf = "";
  for (const p of m.parts ?? []) {
    if (p.type === "text") {
      buf += p.text;
    }
  }
  return buf;
}
