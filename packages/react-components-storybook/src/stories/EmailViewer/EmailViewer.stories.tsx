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

import type { Media } from "@osdk/api";
import type {
  BaseEmailViewerProps,
  EmailViewerMediaProps,
} from "@osdk/react-components/experimental/email-viewer";
import {
  BaseEmailViewer,
  EmailViewer,
} from "@osdk/react-components/experimental/email-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SAMPLE_HTML_EML = `From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>, Carol Davis <carol@example.com>
Cc: Dave Wilson <dave@example.com>
Subject: Q3 Project Update - Action Items
Date: Sun, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<div style="font-family: Arial, sans-serif; padding: 16px;">
  <p>Hi team,</p>
  <p>Here's a quick update on our Q3 project milestones:</p>
  <ul>
    <li><strong>Phase 1</strong> — Completed on schedule</li>
    <li><strong>Phase 2</strong> — In progress, 80% done</li>
    <li><strong>Phase 3</strong> — Starting next week</li>
  </ul>
  <p>Please review the attached documents and respond by Friday.</p>
  <p>Best regards,<br/>Alice</p>
</div>
`;

const SAMPLE_TEXT_EML = `From: Bob Smith <bob@example.com>
To: Alice Johnson <alice@example.com>
Subject: Meeting Notes
Date: Mon, 16 Mar 2026 09:00:00 +0000
MIME-Version: 1.0
Content-Type: text/plain; charset=utf-8

Hi Alice,

Here are the meeting notes from today:

1. Discussed budget allocation
2. Reviewed timeline
3. Assigned action items

Thanks,
Bob
`;

/** Encodes a raw .eml string into the ArrayBuffer the Base component expects. */
function emlToArrayBuffer(eml: string): ArrayBuffer {
  const bytes = new TextEncoder().encode(eml);
  return bytes.buffer.slice(
    bytes.byteOffset,
    bytes.byteOffset + bytes.byteLength
  );
}

function createMockEmailMedia(emlContent: string): Media {
  return {
    fetchContents: () => Promise.resolve(new Response(emlContent)),
    fetchMetadata: () =>
      Promise.resolve({
        path: "email.eml",
        sizeBytes: emlContent.length,
        mediaType: "message/rfc822",
      }),
    getMediaReference: () => ({
      mimeType: "message/rfc822",
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-email",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const meta: Meta<BaseEmailViewerProps> = {
  title: "Components/DocumentViewer/Renderers/EmailViewer",
  component: BaseEmailViewer,
  tags: ["beta"],
  args: {
    content: emlToArrayBuffer(SAMPLE_HTML_EML),
  },
  render: (args: BaseEmailViewerProps) => (
    <div style={{ height: "500px" }}>
      <BaseEmailViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    content: {
      description: "Raw .eml bytes to parse and display",
      control: false,
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<EmailViewerMediaProps> = {
  args: {
    media: createMockEmailMedia(SAMPLE_HTML_EML),
  },
  render: (args: EmailViewerMediaProps) => (
    <div style={{ height: "500px" }}>
      <EmailViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`,
      },
    },
  },
};

export const HtmlEmail: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

// content is raw .eml bytes (e.g. from media.fetchContents())
<BaseEmailViewer content={emlBytes} />`,
      },
    },
  },
};

export const PlainTextEmail: Story = {
  args: {
    content: emlToArrayBuffer(SAMPLE_TEXT_EML),
  },
};
