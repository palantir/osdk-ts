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
import type { VideoViewerMediaProps } from "@osdk/react-components/experimental/video-viewer";
import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, passthrough } from "msw";
import { fn } from "storybook/test";

const SAMPLE_VIDEO_URL = `${import.meta.env.BASE_URL}example.mp4`;

function createMockMedia(url: string, filename: string): Media {
  return {
    fetchContents: () => fetch(url),
    fetchMetadata: () =>
      Promise.resolve({
        path: filename,
        sizeBytes: 0,
        mediaType: "video/mp4",
      }),
    getMediaReference: () => ({
      mimeType: "video/mp4",
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-video",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const mockMedia = createMockMedia(SAMPLE_VIDEO_URL, "example.mp4");

const meta: Meta<VideoViewerMediaProps> = {
  title: "Components/DocumentViewer/Renderers/VideoViewer",
  component: VideoViewer,
  tags: ["beta"],
  args: {
    media: mockMedia,
  },
  render: (args: VideoViewerMediaProps) => (
    <div style={{ height: "400px", width: "600px" }}>
      <VideoViewer media={args.media} onError={args.onError} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
    msw: {
      handlers: [http.get("*/example.mp4", () => passthrough())],
    },
  },
  argTypes: {
    media: {
      description: "The OSDK Media object to fetch video from",
      control: false,
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
    onError: {
      description: "Callback when the video fails to load",
      control: false,
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";

<VideoViewer media={myOsdkMedia} />`,
      },
    },
  },
};

export const WithErrorCallback: Story = {
  args: {
    media: {
      fetchContents: () => Promise.reject(new Error("Failed to fetch video")),
      fetchMetadata: () =>
        Promise.resolve({
          path: "broken.mp4",
          sizeBytes: 0,
          mediaType: "video/mp4",
        }),
      getMediaReference: () => ({
        mimeType: "video/mp4",
        reference: {
          type: "mediaSetViewItem" as const,
          mediaSetViewItem: {
            mediaItemRid: "ri.mio.main.media-item.mock-error",
            mediaSetRid: "ri.mio.main.media-set.mock-set",
            mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
          },
        },
      }),
    },
    onError: fn(),
  },
};
