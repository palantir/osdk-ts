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

/* cspell:disable */

import type { Media } from "@osdk/api";
import type {
  PdfTextHighlightEvent,
  PdfViewerMediaProps,
  PdfViewerProps,
} from "@osdk/react-components/experimental";
import { BasePdfViewer, PdfViewer } from "@osdk/react-components/experimental";
import { useOsdkObject } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { delay, http } from "msw";
import { fn } from "storybook/test";
import { MEDIA_EMPLOYEE_PK } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

const SAMPLE_PDF_URL = "/compressed.tracemonkey-pldi-09.pdf";

const BOOKMARKED_PDF_URL = "/nested_outline.pdf";

function createMockMedia(url: string, filename: string): Media {
  return {
    fetchContents: () => fetch(url),
    fetchMetadata: () =>
      Promise.resolve({
        path: filename,
        sizeBytes: 1024000,
        mediaType: "application/pdf",
      }),
    getMediaReference: () => ({
      mimeType: "application/pdf",
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-pdf",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const mockMedia = createMockMedia(
  SAMPLE_PDF_URL,
  "compressed.tracemonkey-pldi-09.pdf",
);
const mockBookmarkedMedia = createMockMedia(
  BOOKMARKED_PDF_URL,
  "pdf-example-bookmarks.pdf",
);

const meta: Meta<PdfViewerMediaProps> = {
  title: "Components/PdfViewer",
  component: PdfViewer,
  args: {
    media: mockMedia,
  },
  render: (args: PdfViewerMediaProps) => (
    <div style={{ height: "600px" }}>
      <PdfViewer {...args} />
    </div>
  ),
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    media: {
      description: "The Media object to fetch PDF contents from",
      control: false,
    },
    annotations: {
      description: "Annotations to overlay on the PDF",
      control: "object",
    },
    onAnnotationClick: {
      description: "Callback fired when an annotation is clicked",
      control: false,
      table: { category: "Events" },
    },
    initialPage: {
      description: "Page to display on first render (1-indexed)",
      control: "number",
      table: { defaultValue: { summary: "1" } },
    },
    initialScale: {
      description: "Initial zoom scale",
      control: "number",
      table: { defaultValue: { summary: "1.0" } },
    },
    initialSidebarOpen: {
      description: "Whether the thumbnail sidebar is initially open",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    enableDownload: {
      description: "Whether the download button is shown in the toolbar",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    sidebarMode: {
      description: "Which sidebar panel to show when the sidebar is open",
      control: "radio",
      options: ["thumbnails", "outline"],
      table: { defaultValue: { summary: "\"thumbnails\"" } },
    },
    outlineIcons: {
      description:
        "Custom icon components for each outline depth level (0-indexed)",
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

export const WithOsdkMedia: Story = {
  render: () => {
    const { object: employee, isLoading } = useOsdkObject(
      Employee,
      MEDIA_EMPLOYEE_PK,
    );

    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{ height: "600px" }}>Loading OSDK media…</div>;
    }

    return (
      <div style={{ height: "600px" }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`,
      },
    },
  },
};

export const WithPdfUrl: StoryObj<PdfViewerProps> = {
  args: {
    src: SAMPLE_PDF_URL,
  },
  render: (args: PdfViewerProps) => (
    <div style={{ height: "600px" }}>
      <BasePdfViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code:
          `import { BasePdfViewer } from "@osdk/react-components/experimental";

<BasePdfViewer src="/compressed.tracemonkey-pldi-09.pdf" />`,
      },
    },
  },
};

export const WithAnnotations: Story = {
  args: {
    onAnnotationClick: fn(),
    annotations: [
      {
        id: "h1",
        type: "highlight",
        page: 1,
        rect: { x: 55, y: 696, width: 480, height: 24 },
        label: "Title highlight",
      },
      {
        id: "u1",
        type: "underline",
        page: 1,
        rect: { x: 88, y: 614, width: 440, height: 2 },
      },
      {
        id: "c1",
        type: "comment",
        page: 1,
        rect: { x: 538, y: 400, width: 24, height: 24 },
        label: "Review this section",
      },
      {
        id: "p1",
        type: "pin",
        page: 1,
        rect: { x: 44, y: 446, width: 16, height: 16 },
        label: "Pin marker",
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer
  media={myMediaObject}
  annotations={[
    { id: "h1", type: "highlight", page: 1, rect: { x: 55, y: 696, width: 480, height: 24 }, label: "Title highlight" },
    { id: "u1", type: "underline", page: 1, rect: { x: 88, y: 614, width: 440, height: 2 } },
    { id: "c1", type: "comment", page: 1, rect: { x: 538, y: 400, width: 24, height: 24 }, label: "Review this" },
    { id: "p1", type: "pin", page: 1, rect: { x: 44, y: 446, width: 16, height: 16 }, label: "Pin" },
  ]}
  onAnnotationClick={(annotation) => handleAnnotationClick(annotation)}
/>`,
      },
    },
  },
};

export const WithSidebar: Story = {
  args: {
    initialSidebarOpen: true,
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen />`,
      },
    },
  },
};

export const CustomScale: Story = {
  args: {
    initialScale: 1.5,
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialScale={1.5} />`,
      },
    },
  },
};

export const WithDownload: Story = {
  args: {
    enableDownload: true,
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} enableDownload />`,
      },
    },
  },
};

export const WithOutlineSidebar: Story = {
  args: {
    initialSidebarOpen: true,
    sidebarMode: "outline",
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer media={myMediaObject} initialSidebarOpen sidebarMode="outline" />`,
      },
    },
  },
};

export const Loading: StoryObj<PdfViewerProps> = {
  args: {
    src: "/loading.pdf",
  },
  render: (args: PdfViewerProps) => (
    <div style={{ height: "600px" }}>
      <BasePdfViewer {...args} />
    </div>
  ),
  parameters: {
    msw: {
      handlers: [
        http.get("/loading.pdf", async () => {
          await delay("infinite");
        }),
      ],
    },
  },
};

export const Error: StoryObj<PdfViewerProps> = {
  args: {
    src: "/error.pdf",
  },
  render: (args: PdfViewerProps) => (
    <div style={{ height: "600px" }}>
      <BasePdfViewer {...args} />
    </div>
  ),
  parameters: {
    msw: {
      handlers: [
        http.get("/error.pdf", () => {
          return new Response("Server Error", { status: 500 });
        }),
      ],
    },
  },
};

function HighlightModeDemo({
  src,
  onTextHighlight: onTextHighlightAction,
  onHighlightDelete: onHighlightDeleteAction,
}: {
  src: string;
  onTextHighlight?: (event: PdfTextHighlightEvent) => void;
  onHighlightDelete?: (event: PdfTextHighlightEvent) => void;
}) {
  return (
    <div style={{ height: "600px" }}>
      <BasePdfViewer
        src={src}
        highlightEnabled
        onTextHighlight={onTextHighlightAction}
        onHighlightDelete={onHighlightDeleteAction}
      />
    </div>
  );
}

export const WithHighlightMode: StoryObj<PdfViewerProps> = {
  args: {
    onTextHighlight: fn(),
    onHighlightDelete: fn(),
  },
  render: (args) => (
    <HighlightModeDemo
      src={SAMPLE_PDF_URL}
      onTextHighlight={args.onTextHighlight}
      onHighlightDelete={args.onHighlightDelete}
    />
  ),
  parameters: {
    docs: {
      source: {
        code:
          `import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { PdfAnnotation, PdfTextHighlightEvent } from "@osdk/react-components/experimental";

function MyPdfViewer({ src }: { src: string }) {
  const [annotations, setAnnotations] = useState<PdfAnnotation[]>([]);

  const handleTextHighlight = useCallback((event: PdfTextHighlightEvent) => {
    setAnnotations((prev) => [...prev, {
      id: crypto.randomUUID(),
      type: "highlight",
      page: event.page,
      rect: event.rects[0],
      rects: event.rects,
      color: event.color,
      label: event.selectedText,
    }]);
  }, []);

  // Click a highlight to remove it
  const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
    setAnnotations((prev) => prev.filter((a) => a.id !== annotation.id));
  }, []);

  return (
    <BasePdfViewer
      src={src}
      highlightEnabled
      onTextHighlight={handleTextHighlight}
      annotations={annotations}
      onAnnotationClick={handleAnnotationClick}
    />
  );
}`,
      },
    },
  },
};

export const WithEmbeddedOutline: Story = {
  args: {
    media: mockBookmarkedMedia,
    initialSidebarOpen: true,
    sidebarMode: "outline",
  },
};

export const InteractiveForm: StoryObj<PdfViewerProps> = {
  args: {
    src: "/interactive-form-pdf.pdf",
    onFormSubmit: fn(),
    onFormChange: fn(),
  },
  render: (args: PdfViewerProps) => (
    <div style={{ height: "600px" }}>
      <BasePdfViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code:
          `import { BasePdfViewer } from "@osdk/react-components/experimental";

<BasePdfViewer
  src="https://example.com/interactive-form.pdf"
  onFormChange={(fieldName, value) => console.log(fieldName, value)}
  onFormSubmit={(data) => console.log("Form submitted:", data)}
/>`,
      },
    },
  },
};
