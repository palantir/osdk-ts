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

import type { PdfViewerProps } from "@osdk/react-components/experimental";
import { BasePdfRenderer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { delay, http } from "msw";
import { fn } from "storybook/test";
const SAMPLE_PDF_URL =
  "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

const meta: Meta<PdfViewerProps> = {
  title: "Components/PdfViewer",
  component: BasePdfRenderer,
  args: {
    src: SAMPLE_PDF_URL,
  },
  render: (args: PdfViewerProps) => (
    <div style={{ height: "600px" }}>
      <BasePdfRenderer {...args} />
    </div>
  ),
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    src: {
      description: "PDF source — URL string or ArrayBuffer",
      control: "text",
    },
    annotations: {
      description:
        "Annotations to overlay on the PDF, keyed by page number (1-indexed)",
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
    downloadEnabled: {
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

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer src="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf" />`,
      },
    },
  },
};

export const WithAnnotations: Story = {
  args: {
    onAnnotationClick: fn(),
    annotations: {
      1: [
        {
          id: "h1",
          type: "highlight",
          page: 1,
          rect: { x: 100, y: 700, width: 200, height: 20 },
          label: "Important text",
        },
        {
          id: "u1",
          type: "underline",
          page: 1,
          rect: { x: 100, y: 650, width: 150, height: 2 },
        },
        {
          id: "c1",
          type: "comment",
          page: 1,
          rect: { x: 400, y: 600, width: 24, height: 24 },
          label: "Review this section",
        },
        {
          id: "p1",
          type: "pin",
          page: 1,
          rect: { x: 300, y: 500, width: 16, height: 16 },
          label: "Pin marker",
        },
      ],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer
  src="..."
  annotations={{
    1: [
      { id: "h1", type: "highlight", page: 1, rect: { x: 100, y: 700, width: 200, height: 20 }, label: "Important text" },
      { id: "u1", type: "underline", page: 1, rect: { x: 100, y: 650, width: 150, height: 2 } },
      { id: "c1", type: "comment", page: 1, rect: { x: 400, y: 600, width: 24, height: 24 }, label: "Review this" },
      { id: "p1", type: "pin", page: 1, rect: { x: 300, y: 500, width: 16, height: 16 }, label: "Pin" },
    ],
  }}
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

<PdfViewer src="..." initialSidebarOpen />`,
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

<PdfViewer src="..." initialScale={1.5} />`,
      },
    },
  },
};

export const WithDownload: Story = {
  args: {
    downloadEnabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `import { PdfViewer } from "@osdk/react-components/experimental";

<PdfViewer src="..." downloadEnabled />`,
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

<PdfViewer src="..." initialSidebarOpen sidebarMode="outline" />`,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    src: "/loading.pdf",
  },
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

export const Error: Story = {
  args: {
    src: "/error.pdf",
  },
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
