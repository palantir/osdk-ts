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

import type { TypingIndicatorProps } from "@osdk/react-components/experimental/typing-indicator";
import { TypingIndicator } from "@osdk/react-components/experimental/typing-indicator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<TypingIndicatorProps> = {
  title: "Experimental/TypingIndicator",
  tags: ["experimental"],
  component: TypingIndicator,
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    label: {
      description:
        "Accessible label announced by screen readers. Defaults to 'Loading'.",
      control: "text",
    },
    className: {
      description:
        "Additional CSS class. Override --osdk-typing-indicator-* tokens via this class for theming.",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: {
    label: "Agent thinking",
  },
};

export const ThemedViaTokens: Story = {
  name: "Themed via CSS variables",
  parameters: {
    docs: {
      description: {
        story:
          "Override `--osdk-typing-indicator-color` / `--osdk-typing-indicator-size` "
          + "in your own stylesheet to re-theme. The component itself takes no color or size props.",
      },
    },
  },
  render: (args: TypingIndicatorProps) => (
    <div
      style={{
        // demo only — in real code, set these in a CSS module class and pass via `className`
        ["--osdk-typing-indicator-color" as string]:
          "var(--osdk-intent-primary-rest)",
        ["--osdk-typing-indicator-size" as string]: "12px",
        ["--osdk-typing-indicator-bounce" as string]: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <TypingIndicator {...args} />
      <code
        style={{ fontSize: 12, color: "var(--osdk-typography-color-muted)" }}
      >
        --osdk-typing-indicator-color: primary; size: 12px
      </code>
    </div>
  ),
};

export const InContext: Story = {
  args: {
    label: "Agent is composing a response",
  },
  render: (args: TypingIndicatorProps) => (
    <div
      style={{
        padding: "12px 16px",
        borderRadius: 8,
        background: "var(--osdk-background-secondary)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--osdk-typography-color-muted)",
      }}
    >
      <span>Agent is responding</span>
      <TypingIndicator {...args} />
    </div>
  ),
};
