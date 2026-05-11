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

/* cspell:words openxmlformats officedocument wordprocessingml */

import type { Media } from "@osdk/api";
import type { DocxViewerMediaProps } from "@osdk/react-components/experimental/docx-viewer";
import { DocxViewer } from "@osdk/react-components/experimental/docx-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, passthrough } from "msw";
import { fn } from "storybook/test";

const SAMPLE_DOCX_URL = `${import.meta.env.BASE_URL}notional-word-example.docx`;

const DOCX_MIME_TYPE =
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

function createMockMedia(url: string, filename: string): Media {
  return {
    fetchContents: () => fetch(url),
    fetchMetadata: () =>
      Promise.resolve({
        path: filename,
        sizeBytes: 0,
        mediaType: DOCX_MIME_TYPE,
      }),
    getMediaReference: () => ({
      mimeType: DOCX_MIME_TYPE,
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-docx",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const mockMedia = createMockMedia(
  SAMPLE_DOCX_URL,
  "notional-word-example.docx",
);

const meta: Meta<DocxViewerMediaProps> = {
  title: "Experimental/DocxViewer",
  tags: ["experimental"],
  component: DocxViewer,
  args: {
    media: mockMedia,
  },
  render: (args: DocxViewerMediaProps) => (
    <div style={{ height: "600px" }}>
      <DocxViewer media={args.media} onError={args.onError} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
    msw: {
      handlers: [
        http.get("*/notional-word-example.docx", () => passthrough()),
      ],
    },
  },
  argTypes: {
    media: {
      description: "The OSDK Media object to fetch DOCX from",
      control: false,
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
    onError: {
      description: "Callback when rendering fails",
      control: false,
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `import { DocxViewer } from "@osdk/react-components/experimental/docx-viewer";

<DocxViewer media={myOsdkMedia} />`,
      },
    },
  },
};

export const WithErrorCallback: Story = {
  args: {
    media: {
      fetchContents: () =>
        Promise.reject(new Error("Failed to fetch document")),
      fetchMetadata: () =>
        Promise.resolve({
          path: "broken.docx",
          sizeBytes: 0,
          mediaType: DOCX_MIME_TYPE,
        }),
      getMediaReference: () => ({
        mimeType: DOCX_MIME_TYPE,
        reference: {
          type: "mediaSetViewItem" as const,
          mediaSetViewItem: {
            mediaItemRid: "ri.mio.main.media-item.mock-error",
            mediaSetRid: "ri.mio.main.media-set.mock-set",
            mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
          },
        },
      }),
    },
    onError: fn(),
  },
};
