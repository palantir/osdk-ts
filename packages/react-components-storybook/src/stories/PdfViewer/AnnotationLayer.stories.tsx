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
  PdfViewerAnnotationLayerProps,
} from "@osdk/react-components/experimental/pdf-viewer";
import { PdfViewerAnnotationLayer } from "@osdk/react-components/experimental/pdf-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const MIXED_ANNOTATIONS: PdfAnnotation[] = [
  {
    id: "h1",
    type: "highlight",
    page: 1,
    rect: { x: 50, y: 700, width: 300, height: 20 },
    label: "Highlighted text",
  },
  {
    id: "u1",
    type: "underline",
    page: 1,
    rect: { x: 50, y: 650, width: 200, height: 2 },
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
];

const meta: Meta<PdfViewerAnnotationLayerProps> = {
  title: "Experimental/PdfViewer/Building Blocks/AnnotationLayer",
  component: PdfViewerAnnotationLayer,
  args: {
    annotations: MIXED_ANNOTATIONS,
    pageHeight: 792,
    scale: 1.0,
    onAnnotationClick: fn(),
  },
  render: (args: PdfViewerAnnotationLayerProps) => (
    <div
      style={{
        position: "relative",
        width: `${612 * args.scale}px`,
        height: `${args.pageHeight * args.scale}px`,
        border: "1px solid #ccc",
        background: "#fff",
      }}
    >
      <PdfViewerAnnotationLayer {...args} />
    </div>
  ),
  argTypes: {
    pageHeight: {
      description:
        "Height of the PDF page in PDF units (used for coordinate conversion)",
      control: { type: "number", min: 1 },
    },
    scale: {
      description: "Current zoom scale",
      control: { type: "number", min: 0.25, max: 5, step: 0.25 },
    },
    annotations: {
      description: "Array of annotations to render on the page",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HighlightsOnly: Story = {
  args: {
    annotations: [
      {
        id: "h1",
        type: "highlight",
        page: 1,
        rect: { x: 50, y: 700, width: 300, height: 20 },
        label: "First highlight",
      },
      {
        id: "h2",
        type: "highlight",
        page: 1,
        rect: { x: 50, y: 650, width: 250, height: 20 },
        label: "Second highlight",
      },
      {
        id: "h3",
        type: "highlight",
        page: 1,
        rect: { x: 50, y: 600, width: 350, height: 20 },
        label: "Third highlight",
        color: "#4caf50",
      },
    ],
  },
};

export const ZoomedIn: Story = {
  args: {
    scale: 2.0,
  },
};
