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

import type { MessageInputProps } from "@osdk/react-components/experimental/message-input";
import { MessageInput } from "@osdk/react-components/experimental/message-input";
import type { Meta, StoryObj } from "@storybook/react-vite";
import * as React from "react";

const noop = () => {};

const meta: Meta<MessageInputProps> = {
  title: "Experimental/MessageInput",
  tags: ["experimental"],
  component: MessageInput,
  args: {
    onSendMessage: noop,
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    onSendMessage: {
      description: "Called when the user submits a message.",
    },
    placeholder: {
      description: "Placeholder shown in the input.",
      control: "text",
    },
    sendLabel: {
      description: "Label of the send button.",
      control: "text",
    },
    disabled: {
      description: "Disables all controls.",
      control: "boolean",
    },
    className: {
      description:
        "Additional CSS class. Override --osdk-message-input-* tokens via this class.",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithConfigureButton: Story = {
  args: {
    onConfigure: noop,
  },
};

export const WithAttachmentTrigger: Story = {
  args: {
    attachmentTrigger: (
      <button
        type="button"
        style={{
          background: "transparent",
          border: "1px solid var(--osdk-surface-border-color-default)",
          borderRadius: 4,
          color: "var(--osdk-typography-color-muted)",
          cursor: "pointer",
          fontSize: 13,
          padding: "6px 10px",
        }}
      >
        + Attach
      </button>
    ),
  },
};

const ControlledAutoScroll = (args: MessageInputProps) => {
  const [autoScroll, setAutoScroll] = React.useState(true);
  return (
    <MessageInput
      {...args}
      autoScroll={autoScroll}
      onAutoScrollChange={setAutoScroll}
    />
  );
};

export const WithAutoScrollToggle: Story = {
  render: ControlledAutoScroll,
};

export const FullActions: Story = {
  args: {
    onConfigure: noop,
    attachmentTrigger: (
      <button
        type="button"
        style={{
          background: "transparent",
          border: "1px solid var(--osdk-surface-border-color-default)",
          borderRadius: 4,
          color: "var(--osdk-typography-color-muted)",
          cursor: "pointer",
          fontSize: 13,
          padding: "6px 10px",
        }}
      >
        + Attach
      </button>
    ),
  },
  render: ControlledAutoScroll,
};
