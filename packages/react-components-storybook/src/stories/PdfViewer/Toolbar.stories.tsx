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

import type { PdfViewerToolbarProps } from "@osdk/react-components/experimental";
import { PdfViewerToolbar } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const meta: Meta<PdfViewerToolbarProps> = {
  title: "Components/PdfViewer/Building Blocks/Toolbar",
  component: PdfViewerToolbar,
  args: {
    currentPage: 1,
    numPages: 14,
    scale: 1.0,
    sidebarOpen: false,
    enableDownload: false,
    onPageChange: fn(),
    onScaleChange: fn(),
    onSearchOpen: fn(),
    onSidebarToggle: fn(),
    onDownload: fn(),
    onRotateLeft: fn(),
    onRotateRight: fn(),
  },
  argTypes: {
    currentPage: {
      description: "Current page number (1-indexed)",
      control: { type: "number", min: 1 },
    },
    numPages: {
      description: "Total number of pages in the document",
      control: { type: "number", min: 1 },
    },
    scale: {
      description: "Current zoom scale",
      control: { type: "number", min: 0.25, max: 5, step: 0.25 },
    },
    sidebarOpen: {
      description: "Whether the sidebar toggle is in the open state",
      control: "boolean",
    },
    enableDownload: {
      description: "Whether the download button is visible",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDownload: Story = {
  args: {
    enableDownload: true,
  },
};

export const MidDocument: Story = {
  args: {
    currentPage: 7,
    numPages: 14,
    scale: 1.5,
    sidebarOpen: true,
  },
};
