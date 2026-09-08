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

/* cspell:words tracemonkey pldi openxmlformats officedocument spreadsheetml */

import type { Media } from "@osdk/api";
import type { DocumentViewerProps } from "@osdk/react-components/document-viewer";
import { DocumentViewer } from "@osdk/react-components/document-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, HttpResponse, passthrough } from "msw";
import { utils, write } from "xlsx-republish";

const SAMPLE_PDF_URL = `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

const SAMPLE_VIDEO_URL = `${import.meta.env.BASE_URL}example.mp4`;

const SAMPLE_TIFF_URL = `${import.meta.env.BASE_URL}multi-page-tiff.tiff`;

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
  () => fetch(SAMPLE_VIDEO_URL),
  "example.mp4",
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

function createMockSpreadsheetMedia(): Media {
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

const mockSpreadsheetMedia = createMockSpreadsheetMedia();

const mockTiffMedia = createMockMedia(
  "image/tiff",
  () => fetch(SAMPLE_TIFF_URL),
  "multi-page-tiff.tiff",
);

const mockUnsupportedMedia = createMockMedia(
  "application/octet-stream",
  () => Promise.resolve(new Response("")),
  "data.bin",
);

// Markdown content served under a generic MIME type, which is what
// mimeTypeOverride exists to correct. Distinct from mockUnsupportedMedia,
// whose empty body would render as a blank viewer once overridden.
const mockMislabeledMarkdownMedia = createMockMedia(
  "application/octet-stream",
  () => Promise.resolve(new Response(SAMPLE_MARKDOWN)),
  "notes.dat",
);

const meta: Meta<DocumentViewerProps> = {
  title: "Components/DocumentViewer",
  component: DocumentViewer,
  tags: ["beta"],
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
        code: `<DocumentViewer media={employee.trainingMaterial} />`,
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
  parameters: {
    docs: {
      source: {
        code: `// image/* media renders with the pan and zoom ImageViewer
<DocumentViewer media={employee.profilePhoto} />`,
      },
    },
  },
};

export const Markdown: Story = {
  args: {
    media: mockMarkdownMedia,
  },
  parameters: {
    docs: {
      source: {
        code: `// text/markdown media renders with MarkdownViewer
<DocumentViewer media={project.readme} />`,
      },
    },
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
  parameters: {
    msw: {
      handlers: [http.get("*/example.mp4", () => passthrough())],
    },
    docs: {
      source: {
        code: `// video/* media renders with VideoViewer
<DocumentViewer media={incident.bodyCamFootage} />`,
      },
    },
  },
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
  parameters: {
    docs: {
      source: {
        code: `// MIME types with no matching renderer fall back to a download prompt
<DocumentViewer media={record.rawAttachment} />`,
      },
    },
  },
};

export const Email: Story = {
  args: {
    media: mockEmailMedia,
  },
  parameters: {
    docs: {
      source: {
        code: `// message/rfc822 media renders with EmailViewer
<DocumentViewer media={thread.originalMessage} />`,
      },
    },
  },
};

export const Spreadsheet: Story = {
  args: {
    media: mockSpreadsheetMedia,
  },
  parameters: {
    docs: {
      source: {
        code: `// xlsx / xls / csv media renders with SpreadsheetViewer
<DocumentViewer media={quarter.headcountReport} />`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `// application/xml media renders with the collapsible-tree XmlViewer
<DocumentViewer media={shipment.manifest} />`,
      },
    },
  },
};

export const Tiff: Story = {
  args: {
    media: mockTiffMedia,
  },
  parameters: {
    msw: {
      handlers: [http.get("*/multi-page-tiff.tiff", () => passthrough())],
    },
    docs: {
      source: {
        code: `// image/tiff media renders with TiffViewer, which decodes in the browser.
// See "Tiff With Pdf Conversion" for server-side PDF conversion instead.
<DocumentViewer media={claim.scannedForm} />`,
      },
    },
  },
};

export const TiffWithPdfConversion: Story = {
  args: {
    media: mockTiffMedia,
    enableTiffToPdf: true,
    fileName: "multi-page-tiff.tiff",
  },
  parameters: {
    msw: {
      handlers: [
        http.get("*/multi-page-tiff.tiff", () => passthrough()),
        http.get("*/compressed.tracemonkey-pldi-09.pdf", () => passthrough()),
        // Mock MIO transform API: submit job
        http.post("*/api/v2/mediasets/*/items/*/transform", () => {
          return HttpResponse.json({
            jobId: "mock-job-id",
            status: "SUCCESSFUL",
          });
        }),
        // Mock MIO transform API: get result — must be before getStatus
        // since the status route pattern also matches the /result suffix
        http.get(
          "*/api/v2/mediasets/*/items/*/transformationJobs/*/result",
          async () => {
            const pdf = await fetch(SAMPLE_PDF_URL);
            const buffer = await pdf.arrayBuffer();
            return new HttpResponse(buffer, {
              headers: { "Content-Type": "application/pdf" },
            });
          },
        ),
        // Mock MIO transform API: get status
        http.get("*/api/v2/mediasets/*/items/*/transformationJobs/*", () => {
          return HttpResponse.json({ status: "SUCCESSFUL" });
        }),
      ],
    },
    docs: {
      source: {
        code: `// Multi-page TIFFs are detected and converted to PDF via MIO transform API
// Falls back to TiffViewer if transform fails or for single-page TIFFs
<DocumentViewer media={myMedia} enableTiffToPdf fileName="scan.tiff" />`,
      },
    },
  },
};

/**
 * Renders the reported and effective MIME types above the viewer so the story
 * shows what the override changed, not just its end result. Both values are
 * read back from the props rather than hardcoded, so editing the
 * `mimeTypeOverride` control keeps the caption honest.
 */
function MimeTypeOverrideDemo({
  media,
  mimeTypeOverride,
  ...rest
}: DocumentViewerProps) {
  const reportedMimeType = media.getMediaReference().mimeType;
  const effectiveMimeType = mimeTypeOverride ?? reportedMimeType;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        height: "600px",
      }}
    >
      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "4px 12px",
          margin: 0,
          padding: "12px",
          border: "1px solid currentColor",
          borderRadius: "4px",
          fontSize: "12px",
          lineHeight: 1.5,
          opacity: 0.85,
        }}
      >
        <dt style={{ opacity: 0.7 }}>Reported by media</dt>
        <dd style={{ margin: 0, fontFamily: "monospace" }}>
          {reportedMimeType}
        </dd>

        <dt style={{ opacity: 0.7 }}>mimeTypeOverride</dt>
        <dd style={{ margin: 0, fontFamily: "monospace" }}>
          {mimeTypeOverride ?? "(unset)"}
        </dd>

        <dt style={{ opacity: 0.7 }}>Dispatched on</dt>
        <dd style={{ margin: 0, fontFamily: "monospace" }}>
          {effectiveMimeType}
          {mimeTypeOverride != null ? " (from the override)" : ""}
        </dd>
      </dl>

      <div style={{ flex: 1, minHeight: 0 }}>
        <DocumentViewer
          media={media}
          mimeTypeOverride={mimeTypeOverride}
          {...rest}
        />
      </div>
    </div>
  );
}

export const WithMimeTypeOverride: Story = {
  args: {
    media: mockMislabeledMarkdownMedia,
    mimeTypeOverride: "text/markdown",
  },
  render: (args: DocumentViewerProps) => <MimeTypeOverrideDemo {...args} />,
  parameters: {
    docs: {
      source: {
        code: `// This media item reports "application/octet-stream", which would hit the
// unsupported-type fallback. The override makes DocumentViewer dispatch on
// "text/markdown" instead, so MarkdownViewer handles it.
<DocumentViewer media={myMedia} mimeTypeOverride="text/markdown" />`,
      },
    },
  },
};

export const WithPdfViewerProps: Story = {
  args: {
    media: mockPdfMedia,
    pdfViewerProps: {
      defaultSidebarOpen: true,
      enableDownload: true,
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<DocumentViewer
  media={myMedia}
  pdfViewerProps={{
    defaultSidebarOpen: true,
    enableDownload: true,
  }}
/>`,
      },
    },
  },
};
