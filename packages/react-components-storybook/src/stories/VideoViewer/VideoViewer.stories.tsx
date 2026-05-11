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
import type {
  BaseVideoViewerProps,
  VideoViewerMediaProps,
} from "@osdk/react-components/experimental/video-viewer";
import {
  BaseVideoViewer,
  VideoViewer,
} from "@osdk/react-components/experimental/video-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

/**
 * Creates a minimal valid MP4 video as a blob URL.
 * Uses a tiny WebM blob that most browsers can render.
 */
function createSampleVideoUrl(): string {
  // A minimal 1-frame WebM video (base64-encoded)
  const webmBase64 =
    "GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwH/////////FUmpZpkq17GDD0JATYCGQ2hyb21lV0"
    + "WcgV2VibSBGaWxlIERhdGFTZXJ2ZXJXQdeBc2lNYXRyb3NrYSBGaWxlIEhhbmRsZXJXQdeBAAAAAAAAAABzcw";
  try {
    const bytes = atob(webmBase64);
    const arr = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
      arr[i] = bytes.charCodeAt(i);
    }
    return URL.createObjectURL(new Blob([arr], { type: "video/webm" }));
  } catch {
    // Fallback: return empty blob URL
    return URL.createObjectURL(new Blob([], { type: "video/mp4" }));
  }
}

const sampleVideoUrl = createSampleVideoUrl();

function createMockVideoMedia(
  url: string,
  mimeType: string,
  filename: string,
): Media {
  return {
    fetchContents: () => fetch(url),
    fetchMetadata: () =>
      Promise.resolve({
        path: filename,
        sizeBytes: 102400,
        mediaType: mimeType,
      }),
    getMediaReference: () => ({
      mimeType,
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

// --- BaseVideoViewer stories ---

const baseMeta: Meta<BaseVideoViewerProps> = {
  title: "Experimental/VideoViewer/BaseVideoViewer",
  tags: ["experimental"],
  component: BaseVideoViewer,
  args: {
    src: sampleVideoUrl,
    mimeType: "video/webm",
  },
  render: (args: BaseVideoViewerProps) => (
    <div style={{ height: "400px", width: "600px" }}>
      <BaseVideoViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    src: {
      description: "Object URL pointing to the video",
      control: false,
    },
    mimeType: {
      description: "MIME type for the <source> element (e.g. \"video/mp4\")",
      control: "text",
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

export default baseMeta;
type Story = StoryObj<typeof baseMeta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `import { BaseVideoViewer } from "@osdk/react-components/experimental/video-viewer";

<BaseVideoViewer src={videoUrl} mimeType="video/mp4" />`,
      },
    },
  },
};

export const WithErrorCallback: Story = {
  args: {
    onError: fn(),
  },
};

export const WithMedia: StoryObj<VideoViewerMediaProps> = {
  args: {
    media: createMockVideoMedia(sampleVideoUrl, "video/webm", "sample.webm"),
  },
  render: (args: VideoViewerMediaProps) => (
    <div style={{ height: "400px", width: "600px" }}>
      <VideoViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code:
          `import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";

<VideoViewer media={myOsdkMedia} />`,
      },
    },
  },
};
