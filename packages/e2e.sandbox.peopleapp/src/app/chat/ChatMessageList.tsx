import type { ChatStatus, UIMessage } from "@osdk/react/experimental/aip";
import React from "react";
import { ChatMessage } from "./ChatMessage.js";

export interface ChatMessageListProps {
  messages: ReadonlyArray<UIMessage>;
  status: ChatStatus;
  onRegenerate: (messageId: string) => void;
}

export function ChatMessageList(props: ChatMessageListProps) {
  const lastAssistantId = findLastAssistantId(props.messages);
  const canRegenerate = props.status === "ready";

  if (props.messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Start the conversation by typing below.
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto flex flex-col px-1 py-2">
      {props.messages.map((m) => (
        <ChatMessage
          key={m.id}
          message={m}
          showRegenerate={canRegenerate && m.id === lastAssistantId}
          onRegenerate={props.onRegenerate}
        />
      ))}
    </div>
  );
}

function findLastAssistantId(
  messages: ReadonlyArray<UIMessage>,
): string | undefined {
  for (let i = messages.length - 1; i >= 0; i--) {
    const m = messages[i];
    if (m != null && m.role === "assistant") {
      return m.id;
    }
  }
  return undefined;
}
