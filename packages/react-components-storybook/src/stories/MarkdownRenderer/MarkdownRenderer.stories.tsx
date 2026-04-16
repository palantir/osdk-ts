/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { MarkdownRendererProps } from "@osdk/react-components/experimental";
import { MarkdownRenderer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SAMPLE_MARKDOWN = `# Sample Document

## Introduction

This is a **sample markdown** document that demonstrates the *MarkdownRenderer* component.

### Features

- Headings (h1–h6)
- **Bold** and *italic* text
- ~~Strikethrough~~ text
- [Links](https://example.com) and autolinked URLs
- Inline \`code\` and fenced code blocks
- Blockquotes
- Tables
- Ordered and unordered lists
- Task lists

## Code Example

\`\`\`typescript
import { MarkdownRenderer } from "@osdk/react-components/experimental";

function App() {
  return <MarkdownRenderer content="# Hello World" />;
}
\`\`\`

## Blockquote

> This is a blockquote. It can span multiple lines and is styled with a
> left border accent.

## Table

| Feature      | Supported |
| ------------ | --------- |
| Headings     | Yes       |
| Bold/Italic  | Yes       |
| Code blocks  | Yes       |
| Tables       | Yes       |
| Images       | Yes       |

## Strikethrough

This feature is ~~deprecated~~ and should no longer be used. Use the ~~old API~~ new API instead.

## Task Lists

- [x] Set up project structure
- [x] Add markdown rendering
- [ ] Write unit tests
- [ ] Update documentation

## Autolinked URLs

Visit https://example.com for more information, or email contact@example.com.

You can also use explicit links like [GitHub](https://github.com).

## Lists

### Ordered

1. First item
2. Second item
3. Third item

### Unordered

- Item A
- Item B
- Item C

---

*End of document.*
`;

const meta: Meta<MarkdownRendererProps> = {
  title: "Experimental/MarkdownRenderer",
  tags: ["experimental"],
  component: MarkdownRenderer,
  args: {
    content: SAMPLE_MARKDOWN,
  },
  render: (args: MarkdownRendererProps) => (
    <div style={{ height: "600px" }}>
      <MarkdownRenderer {...args} />
    </div>
  ),
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    content: {
      description: "Markdown text to render",
      control: "text",
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MinimalContent: Story = {
  args: {
    content: "# Hello World\n\nA simple paragraph with **bold** and *italic*.",
  },
  render: (args: MarkdownRendererProps) => (
    <div style={{ height: "300px" }}>
      <MarkdownRenderer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code:
          `import { MarkdownRenderer } from "@osdk/react-components/experimental";

<MarkdownRenderer content="# Hello World\\n\\nA simple paragraph with **bold** and *italic*." />`,
      },
    },
  },
};
