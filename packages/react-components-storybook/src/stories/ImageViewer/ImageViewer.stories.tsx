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

import type { Media } from "@osdk/api";
import type { ImageViewerMediaProps } from "@osdk/react-components/experimental/image-viewer";
import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";

/**
 * Creates a sample PNG image as a data URL.
 * Generates a 200x200 canvas with a gradient.
 */
function createSampleImageDataUrl(): string {
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
  return canvas.toDataURL("image/png");
}

const sampleImageDataUrl = createSampleImageDataUrl();

function createMockImageMedia(
  dataUrl: string,
  mimeType: string,
  filename: string
): Media {
  return {
    fetchContents: async () => {
      const response = await fetch(dataUrl);
      return response;
    },
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
          mediaItemRid: "ri.mio.main.media-item.mock-image",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const meta: Meta<ImageViewerMediaProps> = {
  title: "Components/DocumentViewer/Renderers/ImageViewer",
  component: ImageViewer,
  tags: ["beta"],
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    media: {
      description: "The Media object to fetch image contents from",
      control: false,
    },
    alt: {
      description: "Alt text for accessibility",
      control: "text",
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
  },
};

export default meta;

export const Default: StoryObj<ImageViewerMediaProps> = {
  args: {
    media: createMockImageMedia(sampleImageDataUrl, "image/png", "sample.png"),
    alt: "Sample image loaded from Media",
  },
  render: (args: ImageViewerMediaProps) => (
    <div style={{ height: "400px", width: "400px" }}>
      <ImageViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";

<ImageViewer media={myOsdkMedia} alt="My image" />`,
      },
    },
  },
};
