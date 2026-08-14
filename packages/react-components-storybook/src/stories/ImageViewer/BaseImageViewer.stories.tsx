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

import type { BaseImageViewerProps } from "@osdk/react-components/experimental/image-viewer";
import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

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

const baseMeta: Meta<BaseImageViewerProps> = {
  title: "Components/DocumentViewer/Renderers/ImageViewer/BaseImageViewer",
  component: BaseImageViewer,
  tags: ["beta"],
  args: {
    src: sampleImageDataUrl,
    alt: "Sample image",
  },
  render: (args: BaseImageViewerProps) => (
    <div style={{ height: "400px", width: "400px" }}>
      <BaseImageViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    src: {
      description: "Object URL or data URL pointing to the image",
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
    onError: {
      description: "Callback when the image fails to load",
      control: false,
      table: { category: "Events" },
    },
  },
};

export default baseMeta;
type Story = StoryObj<typeof baseMeta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { BaseImageViewer } from "@osdk/react-components/experimental/image-viewer";

<BaseImageViewer src={imageUrl} alt="My image" />`,
      },
    },
  },
};

export const WithErrorCallback: Story = {
  args: {
    onError: fn(),
  },
};
