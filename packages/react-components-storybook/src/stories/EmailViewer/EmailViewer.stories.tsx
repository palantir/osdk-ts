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
  ParsedEmail,
} from "@osdk/react-components/experimental/email-viewer";
import {
  BaseEmailViewer,
  EmailViewer,
} from "@osdk/react-components/experimental/email-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SAMPLE_EMAIL: ParsedEmail = {
  subject: "Q3 Project Update - Action Items",
  from: { name: "Alice Johnson", address: "alice@example.com" },
  to: [
    { name: "Bob Smith", address: "bob@example.com" },
    { name: "Carol Davis", address: "carol@example.com" },
  ],
  cc: [{ name: "Dave Wilson", address: "dave@example.com" }],
  date: "2026-03-15T14:30:00Z",
  html: `
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
  `,
  text: undefined,
};

const SAMPLE_TEXT_EMAIL: ParsedEmail = {
  subject: "Meeting Notes",
  from: { name: "Bob Smith", address: "bob@example.com" },
  to: [{ name: "Alice Johnson", address: "alice@example.com" }],
  cc: [],
  date: "2026-03-16T09:00:00Z",
  html: undefined,
  text:
    "Hi Alice,\n\nHere are the meeting notes from today:\n\n1. Discussed budget allocation\n2. Reviewed timeline\n3. Assigned action items\n\nThanks,\nBob",
};

const SAMPLE_EML_CONTENT = `From: Alice Johnson <alice@example.com>
To: Bob Smith <bob@example.com>
Subject: Test Email
Date: Sat, 15 Mar 2026 14:30:00 +0000
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p><p>This is a <strong>test email</strong>.</p></body></html>
`;

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
    email: SAMPLE_EMAIL,
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
    email: {
      description: "Parsed email data",
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
    media: createMockEmailMedia(SAMPLE_EML_CONTENT),
  },
  render: (args: EmailViewerMediaProps) => (
    <div style={{ height: "500px" }}>
      <EmailViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code:
          `import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";

<EmailViewer media={myOsdkMedia} />`,
      },
    },
  },
};

export const HtmlEmail: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `import { BaseEmailViewer } from "@osdk/react-components/experimental/email-viewer";

<BaseEmailViewer email={parsedEmail} />`,
      },
    },
  },
};

export const PlainTextEmail: Story = {
  args: {
    email: SAMPLE_TEXT_EMAIL,
  },
};
