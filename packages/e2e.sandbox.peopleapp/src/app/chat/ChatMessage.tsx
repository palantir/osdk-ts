import type { UIMessage } from "@osdk/react/experimental/aip";
import React from "react";
import { Button } from "../../components/Button.js";

export interface ChatMessageProps {
  message: UIMessage;
  /**
   * When true, render a "Regenerate" affordance on this assistant message.
   * Caller decides which message qualifies (typically the most recent
   * assistant message when status === "ready").
   */
  showRegenerate: boolean;
  onRegenerate: (messageId: string) => void;
}

export function ChatMessage(props: ChatMessageProps) {
  const { message } = props;
  const text = extractText(message);
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";

  const bubbleClass = isUser
    ? "self-end bg-blue-500 text-white"
    : isAssistant
    ? "self-start bg-gray-200 text-gray-900"
    : "self-center bg-gray-100 text-gray-700 italic";

  return (
    <div className="flex flex-col mb-2">
      <div
        className={`max-w-[80%] rounded-md px-3 py-2 whitespace-pre-wrap break-words ${bubbleClass}`}
      >
        {text.length > 0 ? text : <span className="opacity-60">…</span>}
      </div>
      {props.showRegenerate && (
        <div className="self-start mt-1">
          <Button
            variant="secondary"
            onClick={() => props.onRegenerate(message.id)}
          >
            Regenerate
          </Button>
        </div>
      )}
    </div>
  );
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
