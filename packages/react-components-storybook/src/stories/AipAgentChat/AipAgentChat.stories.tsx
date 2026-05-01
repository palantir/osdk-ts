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

import type { UIMessage } from "@osdk/aip-core";
import type {
  BaseAipAgentChatProps,
  BaseAipAgentChatStatus,
} from "@osdk/react-components/experimental/aip-agent-chat";
import { BaseAipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

const STORY_CONTAINER_STYLE: React.CSSProperties = {
  height: "600px",
  display: "flex",
};

const FAKE_ASSISTANT_REPLY =
  "Thanks for your message — here is a stubbed assistant response from the Storybook harness.";
const STREAM_DELAY_MS = 600;

function makeUserMessage(text: string): UIMessage {
  return {
    id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role: "user",
    parts: [{ type: "text", text }],
  };
}

function makeAssistantMessage(text: string): UIMessage {
  return {
    id: `assistant-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role: "assistant",
    parts: [{ type: "text", text }],
  };
}

interface ChatHarnessProps {
  initialMessages?: ReadonlyArray<UIMessage>;
  initialStatus?: BaseAipAgentChatStatus;
  initialError?: Error;
  composerFooter?: React.ReactNode;
  renderEmptyState?: BaseAipAgentChatProps["renderEmptyState"];
  renderMessage?: BaseAipAgentChatProps["renderMessage"];
  placeholder?: string;
}

function ChatHarness({
  initialMessages,
  initialStatus = "ready",
  initialError,
  composerFooter,
  renderEmptyState,
  renderMessage,
  placeholder,
}: ChatHarnessProps): React.ReactElement {
  const [messages, setMessages] = React.useState<ReadonlyArray<UIMessage>>(
    initialMessages ?? [],
  );
  const [status, setStatus] = React.useState<BaseAipAgentChatStatus>(
    initialStatus,
  );
  const [error, setError] = React.useState<Error | undefined>(initialError);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current != null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSendMessage = React.useCallback((text: string) => {
    setError(undefined);
    setMessages((prev) => [...prev, makeUserMessage(text)]);
    setStatus("submitted");
    timeoutRef.current = setTimeout(() => {
      setMessages((
        prev,
      ) => [...prev, makeAssistantMessage(FAKE_ASSISTANT_REPLY)]);
      setStatus("ready");
    }, STREAM_DELAY_MS);
  }, []);

  const handleStop = React.useCallback(() => {
    if (timeoutRef.current != null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setStatus("ready");
  }, []);

  const handleClearError = React.useCallback(() => {
    setError(undefined);
    setStatus("ready");
  }, []);

  return (
    <div style={STORY_CONTAINER_STYLE}>
      <BaseAipAgentChat
        composerFooter={composerFooter}
        error={error}
        messages={messages}
        onClearError={error != null ? handleClearError : undefined}
        onSendMessage={handleSendMessage}
        onStop={handleStop}
        placeholder={placeholder}
        renderEmptyState={renderEmptyState}
        renderMessage={renderMessage}
        status={status}
      />
    </div>
  );
}

const meta: Meta<typeof BaseAipAgentChat> = {
  title: "Experimental/AipAgentChat",
  component: BaseAipAgentChat,
  tags: ["experimental"],
};

export default meta;
type Story = StoryObj<typeof meta>;

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

const STREAMING_CONVERSATION: ReadonlyArray<UIMessage> = [
  {
    id: "stream-user-1",
    role: "user",
    parts: [{ type: "text", text: "Tell me a joke." }],
  },
  {
    id: "stream-assistant-1",
    role: "assistant",
    parts: [{ type: "text", text: "Why did" }],
  },
];

export const Default: Story = {
  render: () => <ChatHarness />,
};

export const WithConversation: Story = {
  render: () => <ChatHarness initialMessages={SEEDED_CONVERSATION} />,
};

export const Streaming: Story = {
  render: () => (
    <ChatHarness
      initialMessages={STREAMING_CONVERSATION}
      initialStatus="streaming"
    />
  ),
};

export const WithError: Story = {
  render: () => (
    <ChatHarness
      initialMessages={[
        {
          id: "err-user-1",
          role: "user",
          parts: [{ type: "text", text: "Run the analysis on Q3 revenue." }],
        },
      ]}
      initialStatus="error"
      initialError={new Error("Stream failed: rate limited")}
    />
  ),
};

const MODEL_OPTIONS = ["gpt-4o", "gpt-4o-mini"] as const;
type ModelOption = (typeof MODEL_OPTIONS)[number];

function ModelPickerHarness(): React.ReactElement {
  const [selectedModel, setSelectedModel] = React.useState<ModelOption>(
    MODEL_OPTIONS[0],
  );

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedModel(event.target.value as ModelOption);
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
      <select onChange={handleChange} value={selectedModel}>
        {MODEL_OPTIONS.map((model) => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
    </label>
  );

  return <ChatHarness composerFooter={composerFooter} />;
}

export const WithModelPicker: Story = {
  render: () => <ModelPickerHarness />,
};

const renderCustomEmptyState = () => (
  <div style={{ textAlign: "center", padding: "24px" }}>
    <div style={{ fontSize: "48px" }}>{"\u{1F44B}"}</div>
    <div style={{ fontWeight: 600, marginTop: "8px" }}>
      Welcome to Acme Assistant
    </div>
    <div style={{ marginTop: "4px", color: "#666" }}>
      Ask anything about your ontology, dashboards, or workflows.
    </div>
  </div>
);

export const CustomEmptyState: Story = {
  render: () => <ChatHarness renderEmptyState={renderCustomEmptyState} />,
};

const renderCustomMessage = (message: UIMessage) => {
  let text = "";
  for (const part of message.parts) {
    if (part.type === "text") {
      text += part.text;
    }
  }
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
      <div
        style={{
          background: isUser ? "#dbeafe" : "#f3f4f6",
          color: "#111827",
          padding: "8px 12px",
          borderRadius: "12px",
          maxWidth: "80%",
        }}
      >
        {text}
      </div>
      <div style={{ fontSize: "10px", color: "#6b7280", marginTop: "2px" }}>
        {new Date().toLocaleTimeString()} - {message.role}
      </div>
    </div>
  );
};

export const CustomMessageRender: Story = {
  render: () => (
    <ChatHarness
      initialMessages={SEEDED_CONVERSATION}
      renderMessage={renderCustomMessage}
    />
  ),
};
