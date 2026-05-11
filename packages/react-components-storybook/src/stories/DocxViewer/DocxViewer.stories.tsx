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
import type {
  BaseDocxViewerProps,
  DocxViewerMediaProps,
} from "@osdk/react-components/experimental/docx-viewer";
import {
  BaseDocxViewer,
  DocxViewer,
} from "@osdk/react-components/experimental/docx-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

/**
 * Creates a minimal DOCX file (ZIP containing XML) as an ArrayBuffer.
 * This is a simplified version — docx-preview may not render it perfectly,
 * but it exercises the component lifecycle.
 */
function createMinimalDocxBuffer(): ArrayBuffer {
  // A real .docx is a ZIP file. For the story, we use an empty ArrayBuffer
  // which will trigger the error state, demonstrating error handling.
  return new ArrayBuffer(0);
}

const sampleDocxBuffer = createMinimalDocxBuffer();

function createMockDocxMedia(buffer: ArrayBuffer): Media {
  return {
    fetchContents: () => Promise.resolve(new Response(buffer)),
    fetchMetadata: () =>
      Promise.resolve({
        path: "sample.docx",
        sizeBytes: buffer.byteLength,
        mediaType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      }),
    getMediaReference: () => ({
      mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
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

const meta: Meta<BaseDocxViewerProps> = {
  title: "Experimental/DocxViewer",
  tags: ["experimental"],
  component: BaseDocxViewer,
  args: {
    src: sampleDocxBuffer,
  },
  render: (args: BaseDocxViewerProps) => (
    <div style={{ height: "600px" }}>
      <BaseDocxViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    src: {
      description: "DOCX file contents as an ArrayBuffer",
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
          `import { BaseDocxViewer } from "@osdk/react-components/experimental/docx-viewer";

<BaseDocxViewer src={docxArrayBuffer} />`,
      },
    },
  },
};

export const WithErrorCallback: Story = {
  args: {
    onError: fn(),
  },
};

export const WithMedia: StoryObj<DocxViewerMediaProps> = {
  args: {
    media: createMockDocxMedia(sampleDocxBuffer),
  },
  render: (args: DocxViewerMediaProps) => (
    <div style={{ height: "600px" }}>
      <DocxViewer {...args} />
    </div>
  ),
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
