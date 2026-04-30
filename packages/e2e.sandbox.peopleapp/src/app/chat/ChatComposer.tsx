import type { ChatStatus } from "@osdk/react/experimental/aip";
import React, { useCallback, useState } from "react";
import { Button } from "../../components/Button.js";

export interface ChatComposerProps {
  status: ChatStatus;
  onSend: (text: string) => void;
  onStop: () => void;
}

export function ChatComposer(props: ChatComposerProps) {
  const [draft, setDraft] = useState("");

  const inFlight = props.status === "submitted" || props.status === "streaming";
  const canSend = props.status === "ready" && draft.trim().length > 0;

  const send = useCallback(() => {
    const trimmed = draft.trim();
    if (trimmed.length === 0) {
      return;
    }
    props.onSend(trimmed);
    setDraft("");
  }, [draft, props]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        if (canSend) {
          send();
        }
      }
    },
    [canSend, send],
  );

  return (
    <div className="border-t border-gray-200 pt-3 mt-3 flex flex-col gap-2">
      <textarea
        className="w-full border border-gray-300 rounded-sm p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message — Enter to send, Shift+Enter for newline."
        aria-label="message input"
      />
      <div className="flex justify-end gap-2">
        {inFlight
          ? (
            <Button variant="danger" onClick={props.onStop}>
              Stop
            </Button>
          )
          : (
            <Button
              variant="primary"
              onClick={send}
              disabled={!canSend}
            >
              Send
            </Button>
          )}
      </div>
    </div>
  );
}
