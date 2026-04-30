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

import type {
  Message,
  MessageListProps,
  RenderedContextItem,
} from "@osdk/react-components/experimental/message-list";
import { MessageList } from "@osdk/react-components/experimental/message-list";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SAMPLE_CONVERSATION: Message[] = [
  {
    id: "u1",
    role: "user",
    text: "What's Ada Lovelace's department?",
  },
  {
    id: "a1",
    role: "agent",
    status: "done",
    parts: [
      { type: "text", text: "Let me look that up." },
      {
        type: "toolCall",
        toolCall: {
          id: "tc-1",
          name: "search_employees",
          input: "{\n  \"query\": \"Ada Lovelace\"\n}",
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
  {
    id: "u2",
    role: "user",
    text: "Thanks!",
  },
];

const meta: Meta<MessageListProps> = {
  title: "Experimental/MessageList",
  tags: ["experimental"],
  component: MessageList,
  args: {
    messages: SAMPLE_CONVERSATION,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    autoScrollOnAppend: {
      description:
        "When true, list scrolls to the bottom as new messages are appended.",
      control: "boolean",
    },
    className: {
      description:
        "Additional CSS class. Override --osdk-message-list-* tokens via this class.",
      control: "text",
    },
  },
  render: (args: MessageListProps) => (
    <div style={{ height: "600px", display: "flex", flexDirection: "column" }}>
      <MessageList {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithStreamingAgent: Story = {
  args: {
    messages: [
      ...SAMPLE_CONVERSATION,
      {
        id: "a-stream",
        role: "agent",
        status: "streaming",
      },
    ],
  },
};

export const WithToolCallPending: Story = {
  args: {
    messages: [
      { id: "u1", role: "user", text: "Find a recent commit" },
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "git_log",
              input: "{ \"limit\": 1 }",
              result: { type: "pending" },
            },
          },
        ],
      },
    ],
  },
};

export const WithToolCallFailed: Story = {
  args: {
    messages: [
      { id: "u1", role: "user", text: "Run shell command" },
      {
        id: "a1",
        role: "agent",
        status: "done",
        parts: [
          {
            type: "toolCall",
            toolCall: {
              id: "tc-1",
              name: "shell",
              input: "{ \"command\": \"rm -rf /\" }",
              result: { type: "failed", errorMessage: "permission denied" },
            },
          },
        ],
      },
    ],
  },
};

export const WithFailedAgent: Story = {
  args: {
    messages: [
      { id: "u1", role: "user", text: "Tell me a joke" },
      {
        id: "a1",
        role: "agent",
        status: "failed",
        errorMessage: "Connection to model timed out after 30s",
      },
    ],
  },
};

export const WithInProgressSending: Story = {
  args: {
    messages: SAMPLE_CONVERSATION,
    inProgressMessage: {
      type: "sending",
      text: "Hold on, sending another message…",
    },
  },
};

export const WithInProgressFailed: Story = {
  args: {
    messages: SAMPLE_CONVERSATION,
    inProgressMessage: {
      type: "failed",
      text: "Will this go through?",
      error: "Network error",
    },
  },
};

const renderEmployeeContextItem = (item: RenderedContextItem) => {
  if (item.type !== "employee") {
    return null;
  }
  const data = item.data;
  if (data == null || typeof data !== "object" || Array.isArray(data)) {
    return null;
  }
  const firstName = typeof data.firstName === "string" ? data.firstName : "";
  const lastName = typeof data.lastName === "string" ? data.lastName : "";
  const department = typeof data.department === "string" ? data.department : "";
  const primaryKey = typeof data.primaryKey === "string" ? data.primaryKey : "";
  return (
    <div
      style={{
        padding: "12px",
        border: "1px solid var(--osdk-surface-border-color-default)",
        borderRadius: 6,
        background: "var(--osdk-background-primary)",
        fontSize: 13,
      }}
    >
      <div style={{ fontWeight: 600 }}>
        {firstName} {lastName}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "var(--osdk-typography-color-muted)",
        }}
      >
        {department} · {primaryKey}
      </div>
    </div>
  );
};

export const WithCustomContextItemRenderer: Story = {
  args: {
    messages: SAMPLE_CONVERSATION,
    renderContextItem: renderEmployeeContextItem,
  },
};

export const Empty: Story = {
  args: {
    messages: [],
  },
};
