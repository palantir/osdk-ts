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

/* cspell:words Gambardella Ralls Corets Maeve */

import type { Media } from "@osdk/api";
import type {
  BaseXmlViewerProps,
  XmlViewerMediaProps,
} from "@osdk/react-components/experimental/xml-viewer";
import {
  BaseXmlViewer,
  XmlViewer,
} from "@osdk/react-components/experimental/xml-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";

const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="bk101">
    <author>Gambardella, Matthew</author>
    <title>XML Developer's Guide</title>
    <genre>Computer</genre>
    <price>44.95</price>
    <publish_date>2000-10-01</publish_date>
    <description>An in-depth look at creating applications with XML.</description>
  </book>
  <book id="bk102">
    <author>Ralls, Kim</author>
    <title>Midnight Rain</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-12-16</publish_date>
    <description>A former architect battles corporate zombies.</description>
  </book>
  <book id="bk103">
    <author>Corets, Eva</author>
    <title>Maeve Ascendant</title>
    <genre>Fantasy</genre>
    <price>5.95</price>
    <publish_date>2000-11-17</publish_date>
    <description>After the collapse of a nanotechnology society.</description>
  </book>
</catalog>`;

function createMockXmlMedia(xmlContent: string): Media {
  return {
    fetchContents: () => Promise.resolve(new Response(xmlContent)),
    fetchMetadata: () =>
      Promise.resolve({
        path: "catalog.xml",
        sizeBytes: xmlContent.length,
        mediaType: "application/xml",
      }),
    getMediaReference: () => ({
      mimeType: "application/xml",
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-xml",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const meta: Meta<BaseXmlViewerProps> = {
  title: "Components/DocumentViewer/Renderers/XmlViewer",
  component: BaseXmlViewer,
  tags: ["beta"],
  args: {
    content: SAMPLE_XML,
  },
  render: (args: BaseXmlViewerProps) => (
    <div style={{ height: "500px" }}>
      <BaseXmlViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    content: {
      description: "XML text to render",
      control: "text",
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<XmlViewerMediaProps> = {
  args: {
    media: createMockXmlMedia(SAMPLE_XML),
  },
  render: (args: XmlViewerMediaProps) => (
    <div style={{ height: "500px" }}>
      <XmlViewer {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<XmlViewer media={myOsdkMedia} />`,
      },
    },
  },
};

export const WithContent: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { BaseXmlViewer } from "@osdk/react-components/experimental/xml-viewer";

<BaseXmlViewer content={xmlString} />`,
      },
    },
  },
};
