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
  BaseAipAgentChatProps,
  UIMessage,
} from "@osdk/react-components/experimental/aip-agent-chat";
import {
  AipAgentChatContextPicker,
  AipAgentChatModelPicker,
  BaseAipAgentChat,
} from "@osdk/react-components/experimental/aip-agent-chat";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";
import type { JSX } from "react/jsx-runtime";

let nextId = 1;
function makeId(): string {
  return `msg-${nextId++}`;
}

function makeMessage(role: UIMessage["role"], text: string): UIMessage {
  return {
    id: makeId(),
    role,
    parts: [{ type: "text", text }],
  };
}

const SAMPLE_CONVERSATION: UIMessage[] = [
  makeMessage("user", "What can you help me with?"),
  makeMessage(
    "assistant",
    "I can assist you with a wide range of tasks! For example, I can help answer questions, analyze data, write content, brainstorm ideas, and more. What would you like to work on today?"
  ),
  makeMessage("user", "Can you summarize the latest sales report?"),
  makeMessage(
    "assistant",
    "Based on the Q1 sales report:\n\n- Total revenue: $2.4M (up 12% QoQ)\n- New customers: 148 (up 23%)\n- Average deal size: $16.2K\n- Top performing region: Northeast\n\nThe main growth driver was enterprise expansion deals. Would you like me to dig into any specific area?"
  ),
];

const SAMPLE_CONTEXT_ITEM_IDS = ["Employee", "Office", "Project"];
const SAMPLE_MODELS = ["gpt-4o", "gpt-4o-mini"];

function noopModelChange(): void {}

interface InteractiveChatProps extends Omit<
  BaseAipAgentChatProps,
  | "messages"
  | "status"
  | "error"
  | "onSendMessage"
  | "onStop"
  | "onClearError"
  | "composerActions"
  | "belowComposer"
> {
  initialMessages?: UIMessage[];
  simulateError?: boolean;
  enableModelPicker?: boolean;
  enableContextPicker?: boolean;
}

/**
 * Interactive wrapper that manages message state and simulates streaming
 * responses so the story behaves like a real chat.
 */
function InteractiveChat({
  initialMessages = [],
  simulateError = false,
  enableModelPicker = true,
  enableContextPicker = false,
  ...rest
}: InteractiveChatProps): JSX.Element {
  const [messages, setMessages] = React.useState<UIMessage[]>(initialMessages);
  const [status, setStatus] = React.useState<
    "ready" | "submitted" | "streaming"
  >("ready");
  const [error, setError] = React.useState<Error | undefined>(
    simulateError
      ? new Error("Connection timed out. Please try again.")
      : undefined
  );
  const [selectedContextItemIds, setSelectedContextItemIds] = React.useState<
    ReadonlyArray<string>
  >([]);
  const abortRef = React.useRef(false);

  const onSendMessage = React.useCallback(async (text: string) => {
    const userMsg = makeMessage("user", text);
    setMessages((prev) => [...prev, userMsg]);
    setStatus("submitted");
    abortRef.current = false;

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (abortRef.current) {
      setStatus("ready");
      return;
    }

    setStatus("streaming");
    const assistantMsg = makeMessage("assistant", "");
    setMessages((prev) => [...prev, assistantMsg]);

    const response =
      "Thanks for your message! This is a simulated response that streams in token by token to demonstrate the chat experience.";
    const words = response.split(" ");

    for (let i = 0; i < words.length; i++) {
      if (abortRef.current) break;
      await new Promise((resolve) => setTimeout(resolve, 50));
      const partialText = words.slice(0, i + 1).join(" ");
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        updated[updated.length - 1] = {
          ...last,
          parts: [{ type: "text", text: partialText }],
        };
        return updated;
      });
    }

    setStatus("ready");
  }, []);

  const onStop = React.useCallback(() => {
    abortRef.current = true;
    setStatus("ready");
  }, []);

  const onClearError = React.useCallback(() => {
    setError(undefined);
  }, []);

  return (
    <BaseAipAgentChat
      {...rest}
      belowComposer={
        enableModelPicker ? (
          <AipAgentChatModelPicker
            activeModel={SAMPLE_MODELS[0]!}
            models={SAMPLE_MODELS}
            onModelChange={noopModelChange}
          />
        ) : undefined
      }
      composerActions={
        enableContextPicker ? (
          <AipAgentChatContextPicker
            contextItemIds={SAMPLE_CONTEXT_ITEM_IDS}
            selected={selectedContextItemIds}
            onChange={setSelectedContextItemIds}
          />
        ) : undefined
      }
      error={error}
      messages={messages}
      onClearError={onClearError}
      onSendMessage={onSendMessage}
      onStop={onStop}
      status={status}
    />
  );
}

const meta: Meta<typeof InteractiveChat> = {
  title: "Components/AipAgentChat",
  component: InteractiveChat,
  tags: ["beta"],
  render: (args) => (
    <div style={{ height: "800px" }}>
      <InteractiveChat {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** Empty chat with the default welcome state. Type a message to start a simulated conversation. */
export const Default: Story = {};

/** Chat pre-populated with an existing conversation. */
export const WithConversation: Story = {
  args: {
    initialMessages: SAMPLE_CONVERSATION,
  },
};

/** Chat displaying an error banner with a dismiss button. */
export const WithError: Story = {
  args: {
    simulateError: true,
    initialMessages: SAMPLE_CONVERSATION.slice(0, 2),
  },
};

/** Custom placeholder text in the composer. */
export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Ask me anything about your data...",
  },
};

/**
 * Chat with the object-type context multi-select rendered in the composer
 * footer inline with the Send button. Pick one or more object types to load
 * their objects as context.
 */
export const WithObjectContextPicker: Story = {
  args: {
    enableContextPicker: true,
  },
};
