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

import type { JsonValue } from "../context-item-pill/ContextItemPill.js";

/** A context item resolved client-side, attached to a user message or tool-call result. */
export interface RenderedContextItem {
  /** Stable id used as the React key. */
  id: string;
  /** Discriminator for the context item type (e.g. "objectInstance", "objectType"). */
  type: string;
  /** JSON-serializable payload for the context item. */
  data?: JsonValue;
}

/** A tool call produced by the agent during a response. */
export interface ToolCall {
  /** Stable id for the call. */
  id: string;
  /** Tool name (e.g. "search_employees"). */
  name: string;
  /** Raw input the agent sent to the tool — typically a JSON string. */
  input: string;
  /** Result of the tool call. Undefined while the tool has not yet started. */
  result?: ToolCallResult;
}

/** Result state for a tool call. */
export type ToolCallResult =
  /** The tool is awaiting client-side resolution. */
  | { type: "pending" }
  /** The tool resolved and produced zero or more context items. */
  | { type: "loaded"; contextItems?: RenderedContextItem[] }
  /** The tool failed. */
  | { type: "failed"; errorMessage?: string };

/** A part of an agent message. Multiple parts compose the full response. */
export type AgentMessagePart =
  | { type: "text"; text: string }
  | { type: "toolCall"; toolCall: ToolCall };

/** A user-authored message. */
export interface UserMessage {
  /** Stable id used as the React key. */
  id: string;
  role: "user";
  /** The user-typed text. */
  text: string;
  /** Optional context items the user attached to the message. */
  contextItems?: RenderedContextItem[];
}

/** A message authored by the agent. */
export interface AgentMessage {
  /** Stable id used as the React key. */
  id: string;
  role: "agent";
  /**
   * Status of the agent message.
   * - "streaming": the agent is still composing — a typing indicator is shown.
   * - "done": the agent has finished; `parts` are rendered.
   * - "failed": the agent errored; `errorMessage` is rendered.
   */
  status: "streaming" | "done" | "failed";
  /** Parts of the agent's response. Required when status === "done". */
  parts?: AgentMessagePart[];
  /** Optional error message rendered when status === "failed". */
  errorMessage?: string;
}

/** A single message in the list. */
export type Message = UserMessage | AgentMessage;

/** A message currently being sent, rendered optimistically before server confirmation. */
export interface InProgressMessage {
  /**
   * - "sending": the user message is in flight.
   * - "failed": the user message failed to send.
   */
  type: "sending" | "failed";
  /** The user-typed text being sent. */
  text: string;
  /** Optional error string rendered when type === "failed". */
  error?: string;
  /** Optional context items attached to the in-progress message. */
  contextItems?: RenderedContextItem[];
}

/** Imperative API exposed via `forwardRef`. */
export interface MessageListRef {
  /** Scroll the list to the bottom. Defaults to `behavior: "smooth"`. */
  scrollToBottom: (options?: ScrollIntoViewOptions) => void;
  /** The scroll container DOM node. `null` until the component mounts. */
  readonly scrollContainer: HTMLDivElement | null;
}
