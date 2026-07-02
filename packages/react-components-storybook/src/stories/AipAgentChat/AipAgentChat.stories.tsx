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
import { BaseAipAgentChat } from "@osdk/react-components/experimental/aip-agent-chat";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

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

/**
 * Interactive wrapper that manages message state and simulates streaming
 * responses so the story behaves like a real chat.
 */
function InteractiveChat(
  props: Omit<
    BaseAipAgentChatProps,
    | "messages"
    | "status"
    | "error"
    | "onSendMessage"
    | "onStop"
    | "onClearError"
  > & {
    initialMessages?: UIMessage[];
    simulateError?: boolean;
  }
) {
  const { initialMessages = [], simulateError = false, ...rest } = props;
  const [messages, setMessages] = React.useState<UIMessage[]>(initialMessages);
  const [status, setStatus] = React.useState<
    "ready" | "submitted" | "streaming"
  >("ready");
  const [error, setError] = React.useState<Error | undefined>(
    simulateError
      ? new Error("Connection timed out. Please try again.")
      : undefined
  );
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
  title: "Beta/AipAgentChat",
  component: InteractiveChat,
  render: (args) => (
    <div style={{ height: "600px", maxWidth: "700px" }}>
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
