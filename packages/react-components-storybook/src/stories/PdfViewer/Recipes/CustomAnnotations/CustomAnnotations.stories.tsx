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

import type {
  PdfAnnotation,
  PdfAnnotationRenderProps,
  PdfViewerProps,
} from "@osdk/react-components/experimental";
import { BasePdfViewer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

// cspell:ignore tracemonkey pldi
const SAMPLE_PDF_URL =
  `${import.meta.env.BASE_URL}compressed.tracemonkey-pldi-09.pdf`;

function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(59, 130, 246, 0.9)",
        borderRadius: "6px",
        color: "#fff",
        fontSize: "12px",
        fontWeight: 600,
        padding: "4px 8px",
        whiteSpace: "nowrap",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {annotation.label ?? "Note"}
    </div>
  );
}

function NumberBadge({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ef4444",
        borderRadius: "50%",
        color: "#fff",
        fontSize: "11px",
        fontWeight: 700,
      }}
    >
      {annotation.label ?? "1"}
    </div>
  );
}

const CUSTOM_ANNOTATIONS: PdfAnnotation[] = [
  {
    id: "tooltip-1",
    type: "custom",
    page: 1,
    rect: { x: 55, y: 400, width: 120, height: 28 },
    label: "Key finding",
    render: (props) => <TooltipAnnotation {...props} />,
  },
  {
    id: "badge-1",
    type: "custom",
    page: 1,
    rect: { x: 540, y: 692, width: 24, height: 24 },
    label: "1",
    render: (props) => <NumberBadge {...props} />,
  },
  {
    id: "badge-2",
    type: "custom",
    page: 1,
    rect: { x: 540, y: 418, width: 24, height: 24 },
    label: "2",
    render: (props) => <NumberBadge {...props} />,
  },
  {
    id: "highlight-1",
    type: "highlight",
    page: 1,
    rect: { x: 80, y: 700, width: 450, height: 14 },
    label: "Author line highlight",
  },
];

const meta: Meta<PdfViewerProps> = {
  title: "Components/PdfViewer/Recipes",
  component: BasePdfViewer,
  args: {
    src: SAMPLE_PDF_URL,
    annotations: CUSTOM_ANNOTATIONS,
    onAnnotationClick: fn(),
  },
  render: (args: PdfViewerProps) => (
    <div style={{ height: "600px" }}>
      <BasePdfViewer {...args} />
    </div>
  ),
  argTypes: {
    src: { control: false },
    annotations: { control: "object" },
    onAnnotationClick: { control: false, table: { category: "Events" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomAnnotation: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `import type { PdfAnnotationRenderProps } from "@osdk/react-components/experimental";
import { BasePdfViewer } from "@osdk/react-components/experimental";

function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: (props) => <TooltipAnnotation {...props} />,
    },
  ]}
  onAnnotationClick={(annotation) => console.log("Clicked:", annotation.id)}
/>`,
      },
    },
  },
};
