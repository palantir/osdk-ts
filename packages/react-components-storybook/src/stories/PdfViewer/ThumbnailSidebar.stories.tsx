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

import {
  PdfViewerSidebar,
  usePdfDocument,
} from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

const SAMPLE_PDF_URL =
  "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

interface ThumbnailSidebarStoryProps {
  src: string;
  currentPage: number;
  onPageClick: (page: number) => void;
}

function ThumbnailSidebarWrapper({
  src,
  currentPage,
  onPageClick,
}: ThumbnailSidebarStoryProps) {
  const { document, numPages, loading, error } = usePdfDocument(src);

  if (loading) {
    return <div>Loading PDF…</div>;
  }
  if (error != null) {
    return <div>Error loading PDF: {error.message}</div>;
  }
  if (document == null) {
    return null;
  }

  return (
    <div style={{ height: "500px", width: "200px" }}>
      <PdfViewerSidebar
        document={document}
        numPages={numPages}
        currentPage={currentPage}
        onPageClick={onPageClick}
      />
    </div>
  );
}

const meta: Meta<ThumbnailSidebarStoryProps> = {
  title: "Components/PdfViewer/Building Blocks/ThumbnailSidebar",
  component: ThumbnailSidebarWrapper,
  args: {
    src: SAMPLE_PDF_URL,
    currentPage: 1,
    onPageClick: fn(),
  },
  argTypes: {
    currentPage: {
      description: "Currently active page number (1-indexed)",
      control: { type: "number", min: 1 },
    },
    src: {
      description: "PDF source URL (used to load the document)",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ActivePage: Story = {
  args: {
    currentPage: 5,
  },
};
