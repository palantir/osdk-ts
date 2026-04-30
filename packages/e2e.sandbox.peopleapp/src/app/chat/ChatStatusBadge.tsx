import type { ChatStatus } from "@osdk/react/experimental/aip";
import React from "react";
import { Button } from "../../components/Button.js";

export interface ChatStatusBadgeProps {
  status: ChatStatus;
  onClear: () => void;
}

const STATUS_CLASSES: Record<ChatStatus, string> = {
  ready: "bg-green-100 text-green-800",
  submitted: "bg-yellow-100 text-yellow-800",
  streaming: "bg-blue-100 text-blue-800",
  error: "bg-red-100 text-red-800",
};

export function ChatStatusBadge(props: ChatStatusBadgeProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <span
        className={`text-xs font-semibold px-2 py-1 rounded-sm ${
          STATUS_CLASSES[props.status]
        }`}
        aria-label={`chat status: ${props.status}`}
      >
        {props.status}
      </span>
      <Button
        variant="secondary"
        onClick={props.onClear}
        disabled={props.status !== "ready"}
      >
        Clear conversation
      </Button>
    </div>
  );
}
