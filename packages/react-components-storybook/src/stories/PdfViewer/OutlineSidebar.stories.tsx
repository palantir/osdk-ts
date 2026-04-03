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
  OutlineItem,
  PdfViewerOutlineSidebarProps,
} from "@osdk/react-components/experimental";
import { PdfViewerOutlineSidebar } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const SAMPLE_OUTLINE: OutlineItem[] = [
  { title: "Introduction", depth: 0, pageNumber: 1, bold: true, italic: false },
  {
    title: "Background",
    depth: 1,
    pageNumber: 2,
    bold: false,
    italic: false,
  },
  {
    title: "Motivation",
    depth: 1,
    pageNumber: 3,
    bold: false,
    italic: false,
  },
  {
    title: "Architecture",
    depth: 0,
    pageNumber: 4,
    bold: true,
    italic: false,
  },
  {
    title: "System Overview",
    depth: 1,
    pageNumber: 5,
    bold: false,
    italic: false,
  },
  {
    title: "Component Design",
    depth: 1,
    pageNumber: 6,
    bold: false,
    italic: false,
  },
  {
    title: "Data Flow",
    depth: 2,
    pageNumber: 7,
    bold: false,
    italic: true,
  },
  {
    title: "Implementation",
    depth: 0,
    pageNumber: 8,
    bold: true,
    italic: false,
  },
  { title: "Results", depth: 0, pageNumber: 10, bold: true, italic: false },
  { title: "Conclusion", depth: 0, pageNumber: 12, bold: true, italic: false },
];

const meta: Meta<PdfViewerOutlineSidebarProps> = {
  title: "Components/PdfViewer/Building Blocks/OutlineSidebar",
  component: PdfViewerOutlineSidebar,
  args: {
    outlineItems: SAMPLE_OUTLINE,
    currentPage: 1,
    onItemClick: fn(),
    sidebarMode: "outline",
    onSidebarModeChange: fn(),
  },
  render: (args: PdfViewerOutlineSidebarProps) => (
    <div style={{ height: "400px", width: "240px" }}>
      <PdfViewerOutlineSidebar {...args} />
    </div>
  ),
  argTypes: {
    currentPage: {
      description: "Currently active page number (1-indexed)",
      control: { type: "number", min: 1 },
    },
    outlineItems: {
      description: "Array of outline items to display",
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActiveSection: Story = {
  args: {
    currentPage: 6,
  },
};

export const Empty: Story = {
  args: {
    outlineItems: [],
  },
};
