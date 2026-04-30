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

import classnames from "classnames";
import * as React from "react";
import { TypingIndicator } from "../typing-indicator/TypingIndicator.js";
import styles from "./MessageList.module.css";
import type {
  AgentMessage,
  AgentMessagePart,
  InProgressMessage,
  Message,
  MessageListRef,
  RenderedContextItem,
  ToolCall,
  ToolCallResult,
  UserMessage,
} from "./MessageListApi.js";

const ERROR_LABEL = "Error:";
const INPUT_LABEL = "Input:";
const OUTPUT_LABEL = "Output:";
const LOADED_STATUS_LABEL = "loaded";
const RESOLVING_STATUS_LABEL = "resolving";
const FAILED_STATUS_LABEL = "failed";
const EMPTY_PARTS: AgentMessagePart[] = [];

export interface MessageListProps {
  /** The messages to render, in chronological order. */
  messages: Message[];
  /** Optional in-progress message rendered after the list (optimistic UI). */
  inProgressMessage?: InProgressMessage;
  /**
   * Custom renderer for context items. If undefined, or if the renderer returns
   * `null` / `undefined`, a default JSON view is rendered.
   */
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
  /**
   * When `true`, the list automatically scrolls to the bottom whenever a new
   * message (or in-progress message) is appended. Defaults to `false`.
   */
  autoScrollOnAppend?: boolean;
  /** Additional CSS class for the root scroll container. */
  className?: string;
}

export const MessageList: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    MessageListProps & React.RefAttributes<MessageListRef>
  >
> = React.memo(
  React.forwardRef<MessageListRef, MessageListProps>(function MessageList(
    {
      messages,
      inProgressMessage,
      renderContextItem,
      autoScrollOnAppend = false,
      className,
    },
    forwardedRef,
  ): React.ReactElement {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const lastSeenLengthRef = React.useRef(0);

    const totalLength = messages.length + (inProgressMessage != null ? 1 : 0);

    const bottomCallbackRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        if (node == null) {
          return;
        }
        if (autoScrollOnAppend && totalLength > lastSeenLengthRef.current) {
          node.scrollIntoView({ behavior: "smooth", block: "end" });
        }
        lastSeenLengthRef.current = totalLength;
      },
      [autoScrollOnAppend, totalLength],
    );

    React.useImperativeHandle(
      forwardedRef,
      () => ({
        scrollToBottom(options?: ScrollIntoViewOptions): void {
          const container = containerRef.current;
          if (container == null) {
            return;
          }
          container.scrollTo({
            top: container.scrollHeight,
            behavior: options?.behavior ?? "smooth",
          });
        },
        get scrollContainer(): HTMLDivElement | null {
          return containerRef.current;
        },
      }),
      [],
    );

    return (
      <div
        ref={containerRef}
        className={classnames(styles.list, className)}
        role="log"
        aria-live="polite"
      >
        {messages.map((message) => {
          if (message.role === "user") {
            return (
              <UserMessageView
                key={message.id}
                message={message}
                renderContextItem={renderContextItem}
              />
            );
          }
          return (
            <AgentMessageView
              key={message.id}
              message={message}
              renderContextItem={renderContextItem}
            />
          );
        })}
        {inProgressMessage !== undefined && (
          <InProgressMessageView
            message={inProgressMessage}
            renderContextItem={renderContextItem}
          />
        )}
        <div ref={bottomCallbackRef} aria-hidden="true" />
      </div>
    );
  }),
);

interface UserMessageViewProps {
  message: UserMessage;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const UserMessageView = React.memo(function UserMessageView({
  message,
  renderContextItem,
}: UserMessageViewProps): React.ReactElement {
  return (
    <div className={classnames(styles.message, styles.userMessage)}>
      <div className={styles.messageContent}>{message.text}</div>
      <ContextItemList
        items={message.contextItems}
        renderContextItem={renderContextItem}
      />
    </div>
  );
});

interface InProgressMessageViewProps {
  message: InProgressMessage;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const InProgressMessageView = React.memo(function InProgressMessageView({
  message,
  renderContextItem,
}: InProgressMessageViewProps): React.ReactElement {
  if (message.type === "failed") {
    return (
      <div
        className={classnames(
          styles.message,
          styles.userMessage,
          styles.failed,
        )}
      >
        <div className={styles.messageContent}>{message.text}</div>
        {message.error !== undefined && (
          <div className={styles.errorIndicator}>{message.error}</div>
        )}
      </div>
    );
  }
  return (
    <div
      className={classnames(
        styles.message,
        styles.userMessage,
        styles.sending,
      )}
    >
      <div className={styles.messageContent}>{message.text}</div>
      <ContextItemList
        items={message.contextItems}
        renderContextItem={renderContextItem}
      />
    </div>
  );
});

interface AgentMessageViewProps {
  message: AgentMessage;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const AgentMessageView = React.memo(function AgentMessageView({
  message,
  renderContextItem,
}: AgentMessageViewProps): React.ReactElement {
  if (message.status === "streaming") {
    return (
      <div className={classnames(styles.message, styles.agentMessage)}>
        <TypingIndicator />
      </div>
    );
  }
  if (message.status === "failed") {
    return (
      <div className={classnames(styles.message, styles.agentMessage)}>
        <div className={styles.errorContent}>
          <strong>{ERROR_LABEL}</strong>{" "}
          {message.errorMessage ?? "Unknown error"}
        </div>
      </div>
    );
  }
  const parts = message.parts ?? EMPTY_PARTS;
  return (
    <div className={classnames(styles.message, styles.agentMessage)}>
      {parts.map((part, index) => (
        <AgentMessagePartView
          key={index}
          part={part}
          renderContextItem={renderContextItem}
        />
      ))}
    </div>
  );
});

interface AgentMessagePartViewProps {
  part: AgentMessagePart;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const AgentMessagePartView = React.memo(function AgentMessagePartView({
  part,
  renderContextItem,
}: AgentMessagePartViewProps): React.ReactElement | null {
  if (part.type === "text") {
    return <div className={styles.messageContent}>{part.text}</div>;
  }
  if (part.type === "toolCall") {
    return (
      <ToolCallView
        toolCall={part.toolCall}
        renderContextItem={renderContextItem}
      />
    );
  }
  return null;
});

interface ToolCallViewProps {
  toolCall: ToolCall;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const ToolCallView = React.memo(function ToolCallView({
  toolCall,
  renderContextItem,
}: ToolCallViewProps): React.ReactElement {
  return (
    <div className={styles.toolCall}>
      <div className={styles.toolCallHeader}>
        <div className={styles.toolCallName}>{toolCall.name}</div>
        <div className={styles.toolCallId}>{toolCall.id}</div>
      </div>
      <div className={styles.toolCallSectionLabel}>{INPUT_LABEL}</div>
      <pre className={styles.toolCallInput}>{toolCall.input}</pre>
      <ToolCallResultView
        result={toolCall.result}
        renderContextItem={renderContextItem}
      />
    </div>
  );
});

interface ToolCallResultViewProps {
  result: ToolCallResult | undefined;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const ToolCallResultView = React.memo(function ToolCallResultView({
  result,
  renderContextItem,
}: ToolCallResultViewProps): React.ReactElement | null {
  if (result === undefined) {
    return null;
  }
  if (result.type === "pending") {
    return (
      <div
        className={classnames(styles.statusBadge, styles.statusBadgeResolving)}
      >
        {RESOLVING_STATUS_LABEL}
      </div>
    );
  }
  if (result.type === "failed") {
    return (
      <div
        className={classnames(styles.statusBadge, styles.statusBadgeFailed)}
      >
        {FAILED_STATUS_LABEL}
        {result.errorMessage !== undefined && (
          <span className={styles.statusBadgeMessage}>
            {result.errorMessage}
          </span>
        )}
      </div>
    );
  }
  if (result.contextItems == null || result.contextItems.length === 0) {
    return (
      <div
        className={classnames(styles.statusBadge, styles.statusBadgeLoaded)}
      >
        {LOADED_STATUS_LABEL}
      </div>
    );
  }
  return (
    <div className={styles.toolCallOutput}>
      <div className={styles.toolCallSectionLabel}>{OUTPUT_LABEL}</div>
      <ContextItemList
        items={result.contextItems}
        renderContextItem={renderContextItem}
      />
    </div>
  );
});

interface ContextItemListProps {
  items: RenderedContextItem[] | undefined;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const ContextItemList = React.memo(function ContextItemList({
  items,
  renderContextItem,
}: ContextItemListProps): React.ReactElement | null {
  if (items == null || items.length === 0) {
    return null;
  }
  return (
    <div className={styles.contextItemList}>
      {items.map((item) => (
        <ContextItemView
          key={item.id}
          item={item}
          renderContextItem={renderContextItem}
        />
      ))}
    </div>
  );
});

interface ContextItemViewProps {
  item: RenderedContextItem;
  renderContextItem?: (item: RenderedContextItem) => React.ReactNode;
}

const ContextItemView = React.memo(function ContextItemView({
  item,
  renderContextItem,
}: ContextItemViewProps): React.ReactElement {
  if (renderContextItem !== undefined) {
    const rendered = renderContextItem(item);
    if (rendered != null) {
      return <>{rendered}</>;
    }
  }
  return (
    <div className={styles.contextItem}>
      <div className={styles.contextItemType}>{item.type}</div>
      {item.data !== undefined && (
        <pre className={styles.contextItemData}>
          {JSON.stringify(item.data, null, 2)}
        </pre>
      )}
    </div>
  );
});
