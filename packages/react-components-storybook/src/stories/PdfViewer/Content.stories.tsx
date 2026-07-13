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

import type { PdfViewerContentProps } from "@osdk/react-components/experimental/pdf-viewer";
import { PdfViewerContent } from "@osdk/react-components/experimental/pdf-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { fn } from "storybook/test";

// cspell:disable-next-line
const SAMPLE_PDF_URL =
  "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

const meta: Meta<PdfViewerContentProps> = {
  title:
    "Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/Content",
  component: PdfViewerContent,
  tags: ["beta"],
  args: {
    src: SAMPLE_PDF_URL,
    onPageChange: fn(),
    onScaleChange: fn(),
  },
  render: (args: PdfViewerContentProps) => (
    <div style={{ height: "600px" }}>
      <PdfViewerContent {...args} />
    </div>
  ),
  argTypes: {
    src: {
      description: "PDF source — URL string, ArrayBuffer, Uint8Array, or Blob",
      control: false,
    },
    initialPage: {
      description: "Initial page number (1-indexed)",
      control: { type: "number", min: 1 },
    },
    initialScale: {
      description: "Initial zoom scale",
      control: { type: "number", min: 0.25, max: 5, step: 0.25 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ZoomedIn: Story = {
  args: {
    initialScale: 2,
  },
};

export const StartOnPage5: Story = {
  args: {
    initialPage: 5,
  },
};

/**
 * `src` also accepts a `Blob` (and `ArrayBuffer` / `Uint8Array`) for rendering
 * PDF bytes that are already in memory rather than fetched from a URL. This
 * story fetches the sample PDF into a `Blob` and hands it to the viewer.
 */
export const FromBlob: Story = {
  render: (args: PdfViewerContentProps) => {
    const [blob, setBlob] = useState<Blob | undefined>(undefined);

    useEffect(() => {
      let cancelled = false;
      void fetch(SAMPLE_PDF_URL)
        .then((response) => response.blob())
        .then((fetched) => {
          if (!cancelled) {
            setBlob(fetched);
          }
        });
      return () => {
        cancelled = true;
      };
    }, []);

    return (
      <div style={{ height: "600px" }}>
        {blob == null ? (
          "Fetching PDF into a Blob…"
        ) : (
          <PdfViewerContent {...args} src={blob} />
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `// Render PDF bytes already in memory (Blob, ArrayBuffer, or Uint8Array)
const blob = await (await fetch(pdfUrl)).blob();
<PdfViewerContent src={blob} />`,
      },
    },
  },
};
