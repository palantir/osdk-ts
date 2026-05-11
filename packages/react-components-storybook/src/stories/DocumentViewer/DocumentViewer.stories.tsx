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

/* cspell:words tracemonkey pldi openxmlformats officedocument wordprocessingml spreadsheetml */

import type { Media } from "@osdk/api";
import type { DocumentViewerProps } from "@osdk/react-components/experimental/document-viewer";
import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { utils, write } from "xlsx";

const SAMPLE_PDF_URL =
  `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

/**
 * Creates a sample PNG image as a Blob.
 */
function createSampleImageBlob(): Blob {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 200;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createLinearGradient(0, 0, 200, 200);
  gradient.addColorStop(0, "#3b82f6");
  gradient.addColorStop(0.5, "#8b5cf6");
  gradient.addColorStop(1, "#ec4899");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 200, 200);
  ctx.fillStyle = "white";
  ctx.font = "bold 24px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Sample", 100, 90);
  ctx.fillText("Image", 100, 120);

  // Convert canvas to blob synchronously via data URL
  const dataUrl = canvas.toDataURL("image/png");
  const byteString = atob(dataUrl.split(",")[1]!);
  const arr = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    arr[i] = byteString.charCodeAt(i);
  }
  return new Blob([arr], { type: "image/png" });
}

const SAMPLE_MARKDOWN = `# Sample Document

This is a **sample markdown** document rendered by the DocumentViewer.

- Item 1
- Item 2
- Item 3
`;

function createMockMedia(
  mimeType: string,
  fetchFn: () => Promise<Response>,
  filename: string,
): Media {
  return {
    fetchContents: fetchFn,
    fetchMetadata: () =>
      Promise.resolve({
        path: filename,
        sizeBytes: 1024,
        mediaType: mimeType,
      }),
    getMediaReference: () => ({
      mimeType,
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const imageBlob = createSampleImageBlob();

const mockPdfMedia = createMockMedia(
  "application/pdf",
  () => fetch(SAMPLE_PDF_URL),
  "document.pdf",
);

const mockImageMedia = createMockMedia(
  "image/png",
  () => Promise.resolve(new Response(imageBlob)),
  "photo.png",
);

const mockMarkdownMedia = createMockMedia(
  "text/markdown",
  () => Promise.resolve(new Response(SAMPLE_MARKDOWN)),
  "readme.md",
);

const mockVideoMedia = createMockMedia(
  "video/mp4",
  () => Promise.resolve(new Response(new Blob([], { type: "video/mp4" }))),
  "clip.mp4",
);

const mockDocxMedia = createMockMedia(
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  () => Promise.resolve(new Response(new ArrayBuffer(0))),
  "document.docx",
);

const SAMPLE_EML = `From: Alice <alice@example.com>
To: Bob <bob@example.com>
Subject: Test Email
Date: Sun, 15 Mar 2026 14:30:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>Hello Bob!</p></body></html>
`;

const mockEmailMedia = createMockMedia(
  "message/rfc822",
  () => Promise.resolve(new Response(SAMPLE_EML)),
  "message.eml",
);

const SAMPLE_XML = `<?xml version="1.0"?>
<catalog>
  <book id="1">
    <title>XML Developer's Guide</title>
    <price>44.95</price>
  </book>
</catalog>`;

const mockXmlMedia = createMockMedia(
  "application/xml",
  () => Promise.resolve(new Response(SAMPLE_XML)),
  "data.xml",
);

function createMockExcelMedia(): Media {
  const ws = utils.aoa_to_sheet([
    ["Name", "Department", "Salary"],
    ["Alice", "Engineering", "$145,000"],
    ["Bob", "Marketing", "$120,000"],
  ]);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, "Sheet1");
  const buf = write(wb, { type: "array", bookType: "xlsx" });
  return createMockMedia(
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    () => Promise.resolve(new Response(buf)),
    "report.xlsx",
  );
}

const mockExcelMedia = createMockExcelMedia();

const mockUnsupportedMedia = createMockMedia(
  "application/octet-stream",
  () => Promise.resolve(new Response("")),
  "data.bin",
);

const meta: Meta<DocumentViewerProps> = {
  title: "Experimental/DocumentViewer",
  tags: ["experimental"],
  component: DocumentViewer,
  args: {
    media: mockPdfMedia,
  },
  render: (args: DocumentViewerProps) => (
    <div style={{ height: "600px", width: "100%" }}>
      <DocumentViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    media: {
      description: "The OSDK Media object to render",
      control: false,
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
    mimeTypeOverride: {
      description: "Override the auto-detected MIME type",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Pdf: Story = {
  args: {
    media: mockPdfMedia,
  },
  parameters: {
    docs: {
      source: {
        code:
          `import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />`,
      },
    },
  },
};

export const Image: Story = {
  args: {
    media: mockImageMedia,
  },
  render: (args: DocumentViewerProps) => (
    <div style={{ height: "400px", width: "400px" }}>
      <DocumentViewer {...args} />
    </div>
  ),
};

export const Markdown: Story = {
  args: {
    media: mockMarkdownMedia,
  },
};

export const Video: Story = {
  args: {
    media: mockVideoMedia,
  },
  render: (args: DocumentViewerProps) => (
    <div style={{ height: "400px", width: "600px" }}>
      <DocumentViewer {...args} />
    </div>
  ),
};

export const UnsupportedType: Story = {
  args: {
    media: mockUnsupportedMedia,
  },
  render: (args: DocumentViewerProps) => (
    <div style={{ height: "200px", width: "400px" }}>
      <DocumentViewer {...args} />
    </div>
  ),
};

export const Docx: Story = {
  args: {
    media: mockDocxMedia,
  },
};

export const Email: Story = {
  args: {
    media: mockEmailMedia,
  },
};

export const Excel: Story = {
  args: {
    media: mockExcelMedia,
  },
};

export const Xml: Story = {
  args: {
    media: mockXmlMedia,
  },
  render: (args: DocumentViewerProps) => (
    <div style={{ height: "400px", width: "600px" }}>
      <DocumentViewer {...args} />
    </div>
  ),
};

export const WithMimeTypeOverride: Story = {
  args: {
    media: mockUnsupportedMedia,
    mimeTypeOverride: "text/markdown",
  },
  parameters: {
    docs: {
      source: {
        code:
          `import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

// Override auto-detected MIME type
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`,
      },
    },
  },
};

export const WithPdfViewerProps: Story = {
  args: {
    media: mockPdfMedia,
    pdfViewerProps: {
      initialSidebarOpen: true,
      enableDownload: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code:
          `import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    initialSidebarOpen: true,
    enableDownload: true,
  }}
/>`,
      },
    },
  },
};
