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

import { getUIMessageText, type UIMessage } from "@osdk/aip-core";
import { BaseAipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

const meta: Meta<typeof BaseAipAgentChat> = {
  title: "Experimental/AipAgentChat",
  tags: ["experimental"],
  component: BaseAipAgentChat,
};
export default meta;
type Story = StoryObj<typeof meta>;

const STORY_CONTAINER_STYLE: React.CSSProperties = {
  height: "600px",
  display: "flex",
};

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

const SEEDED_CONVERSATION: ReadonlyArray<UIMessage> = [
  {
    id: "seed-user-1",
    role: "user",
    parts: [{ type: "text", text: "What can you help me with?" }],
  },
  {
    id: "seed-assistant-1",
    role: "assistant",
    parts: [
      {
        type: "text",
        text:
          "I can answer questions about your data, draft text, and reason about ontology objects. What would you like to do?",
      },
    ],
  },
  {
    id: "seed-user-2",
    role: "user",
    parts: [{ type: "text", text: "Summarize the latest deployment status." }],
  },
  {
    id: "seed-assistant-2",
    role: "assistant",
    parts: [
      {
        type: "text",
        text:
          "The latest deployment finished 12 minutes ago with all health checks passing.",
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={async () => {
          await sleep(600);
        }}
        onStop={() => {}}
        onClearError={() => {}}
      />
    </div>
  ),
};

export const WithConversation: Story = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        messages={SEEDED_CONVERSATION}
        status="ready"
        error={undefined}
        onSendMessage={async () => {
          await sleep(600);
        }}
        onStop={() => {}}
        onClearError={() => {}}
      />
    </div>
  ),
};

export const Streaming: Story = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        messages={[]}
        status="streaming"
        error={undefined}
        onSendMessage={async () => {
          await sleep(600);
        }}
        onStop={() => {}}
        onClearError={() => {}}
      />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        messages={[]}
        status="error"
        error={new Error("Stream failed: rate limited")}
        onSendMessage={async () => {
          await sleep(600);
        }}
        onStop={() => {}}
        onClearError={() => {}}
      />
    </div>
  ),
};

const MODEL_OPTIONS = ["gpt-4o", "gpt-5.4"] as const;
type ModelOption = (typeof MODEL_OPTIONS)[number];

function ModelPickerStory(): React.ReactElement {
  const [model, setModel] = React.useState<ModelOption>(MODEL_OPTIONS[0]);
  const modelRef = React.useRef<ModelOption>(model);
  modelRef.current = model;

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setModel(event.target.value as ModelOption);
    },
    [],
  );

  const composerFooter = (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "12px",
      }}
    >
      Model:
      <select onChange={handleChange} value={model}>
        {MODEL_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        composerFooter={composerFooter}
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={async () => {
          await sleep(600);
        }}
        onStop={() => {}}
        onClearError={() => {}}
      />
    </div>
  );
}

export const WithModelPicker: Story = {
  render: () => <ModelPickerStory />,
};

const renderCustomEmptyState = () => <p>Custom welcome.</p>;

export const CustomEmptyState: Story = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        messages={[]}
        status="ready"
        error={undefined}
        onSendMessage={async () => {
          await sleep(400);
        }}
        onStop={() => {}}
        onClearError={() => {}}
        renderEmptyState={renderCustomEmptyState}
      />
    </div>
  ),
};

const CUSTOM_BUBBLE_STYLE: React.CSSProperties = {
  background: "#f3f4f6",
  color: "#111827",
  padding: "8px 12px",
  borderRadius: "12px",
  maxWidth: "80%",
};

const CUSTOM_USER_BUBBLE_STYLE: React.CSSProperties = {
  ...CUSTOM_BUBBLE_STYLE,
  background: "#dbeafe",
};

const CUSTOM_TIMESTAMP_STYLE: React.CSSProperties = {
  fontSize: "10px",
  color: "#6b7280",
  marginTop: "2px",
};

const renderCustomMessage = (message: UIMessage) => {
  const isUser = message.role === "user";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isUser ? "flex-end" : "flex-start",
        margin: "8px 0",
      }}
    >
      <div style={isUser ? CUSTOM_USER_BUBBLE_STYLE : CUSTOM_BUBBLE_STYLE}>
        {getUIMessageText(message)}
      </div>
      <div style={CUSTOM_TIMESTAMP_STYLE}>
        {new Date().toLocaleTimeString()} - {message.role}
      </div>
    </div>
  );
};

export const CustomMessageRender: Story = {
  render: () => (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        messages={SEEDED_CONVERSATION}
        status="ready"
        error={undefined}
        onSendMessage={async () => {
          await sleep(600);
        }}
        onStop={() => {}}
        onClearError={() => {}}
        renderMessage={renderCustomMessage}
      />
    </div>
  ),
};
