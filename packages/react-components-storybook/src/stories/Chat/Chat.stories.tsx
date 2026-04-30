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

import { MessageInput } from "@osdk/react-components/experimental/message-input";
import type {
  Message,
  MessageListRef,
} from "@osdk/react-components/experimental/message-list";
import { MessageList } from "@osdk/react-components/experimental/message-list";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

interface ChatProps {
  /** Whether the agent should simulate a streaming response after each user message. */
  simulateAgentReplies?: boolean;
  /** Initial messages seeded into the conversation. */
  initialMessages?: Message[];
}

const SEED_CONVERSATION: Message[] = [
  {
    id: "seed-u",
    role: "user",
    text: "What can you do?",
  },
  {
    id: "seed-a",
    role: "agent",
    status: "done",
    parts: [
      {
        type: "text",
        text:
          "I can search Foundry objects, run actions, and answer questions about your data. Try asking me about an employee.",
      },
    ],
  },
];

const Chat = ({
  simulateAgentReplies = true,
  initialMessages = SEED_CONVERSATION,
}: ChatProps) => {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages);
  const [autoScroll, setAutoScroll] = React.useState(true);
  const [streaming, setStreaming] = React.useState(false);
  const listRef = React.useRef<MessageListRef>(null);
  const idCounterRef = React.useRef(0);

  const nextId = React.useCallback((prefix: string) => {
    idCounterRef.current += 1;
    return `${prefix}-${idCounterRef.current}`;
  }, []);

  const handleSendMessage = React.useCallback(
    (text: string) => {
      const userMessageId = nextId("u");
      const userMessage: Message = {
        id: userMessageId,
        role: "user",
        text,
      };
      setMessages((prev) => [...prev, userMessage]);
      listRef.current?.scrollToBottom();

      if (!simulateAgentReplies) {
        return;
      }

      const streamingId = nextId("a-stream");
      const streamingMessage: Message = {
        id: streamingId,
        role: "agent",
        status: "streaming",
      };
      setMessages((prev) => [...prev, streamingMessage]);
      setStreaming(true);
      listRef.current?.scrollToBottom();

      window.setTimeout(() => {
        const replyId = nextId("a");
        const reply: Message = {
          id: replyId,
          role: "agent",
          status: "done",
          parts: [
            {
              type: "text",
              text:
                `You said: "${text}". This is a mocked agent response from the Storybook composition story.`,
            },
          ],
        };
        setMessages((prev) => [
          ...prev.filter((m) => m.id !== streamingId),
          reply,
        ]);
        setStreaming(false);
        listRef.current?.scrollToBottom();
      }, 1200);
    },
    [nextId, simulateAgentReplies],
  );

  return (
    <div
      style={{
        height: "640px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--osdk-surface-border-color-default)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <MessageList
        ref={listRef}
        messages={messages}
        autoScrollOnAppend={autoScroll}
      />
      <MessageInput
        onSendMessage={handleSendMessage}
        autoScroll={autoScroll}
        onAutoScrollChange={setAutoScroll}
        disabled={streaming}
      />
    </div>
  );
};

const meta: Meta<typeof Chat> = {
  title: "Experimental/Chat",
  tags: ["experimental"],
  component: Chat,
  parameters: {
    docs: {
      description: {
        component:
          "Composition of `MessageList` and `MessageInput` showing a working chat. "
          + "Demonstrates the imperative `scrollToBottom()` ref API, the `autoScrollOnAppend` "
          + "prop, and the streaming agent message pattern. Agent replies are mocked locally.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {
  args: {
    simulateAgentReplies: true,
  },
};

export const NoAgentReplies: Story = {
  args: {
    simulateAgentReplies: false,
  },
};

export const WithToolCallSeed: Story = {
  args: {
    simulateAgentReplies: false,
    initialMessages: [
      {
        id: "u1",
        role: "user",
        text: "Find Ada Lovelace.",
      },
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          { type: "text", text: "Searching..." },
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "search_employees",
              input: "{ \"query\": \"Ada Lovelace\" }",
              result: {
                type: "loaded",
                contextItems: [
                  {
                    id: "emp-1",
                    type: "employee",
                    data: {
                      primaryKey: "emp-001",
                      firstName: "Ada",
                      lastName: "Lovelace",
                      department: "Analytical Engines",
                    },
                  },
                ],
              },
            },
          },
          {
            type: "text",
            text: "Ada Lovelace works in the Analytical Engines department.",
          },
        ],
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    simulateAgentReplies: true,
    initialMessages: [],
  },
};
