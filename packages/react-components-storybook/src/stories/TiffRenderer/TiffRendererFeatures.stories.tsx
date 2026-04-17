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

import type { TiffRendererProps } from "@osdk/react-components/experimental";
import { TiffRenderer } from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

/**
 * Helper to create a minimal 2x2 pixel TIFF in memory.
 * This produces a valid TIFF byte sequence so the component can decode it.
 */
function createSampleTiffBytes(): Uint8Array {
  const width = 2;
  const height = 2;
  const samplesPerPixel = 4;
  const rowBytes = width * samplesPerPixel;
  const imageDataLength = rowBytes * height;

  const numEntries = 10;
  const ifdOffset = 8;
  const ifdSize = 2 + numEntries * 12 + 4;
  const bitsPerSampleOffset = ifdOffset + ifdSize;
  const stripOffset = bitsPerSampleOffset + 8;
  const totalSize = stripOffset + imageDataLength;

  const buffer = new ArrayBuffer(totalSize);
  const view = new DataView(buffer);

  let offset = 0;

  // Header
  view.setUint16(offset, 0x4949, false); // Little-endian ("II")
  offset += 2;
  view.setUint16(offset, 42, true);
  offset += 2;
  view.setUint32(offset, ifdOffset, true);
  offset += 4;

  // IFD
  view.setUint16(offset, numEntries, true);
  offset += 2;

  function writeEntry(tag: number, type: number, count: number, value: number) {
    view.setUint16(offset, tag, true);
    offset += 2;
    view.setUint16(offset, type, true);
    offset += 2;
    view.setUint32(offset, count, true);
    offset += 4;
    view.setUint32(offset, value, true);
    offset += 4;
  }

  writeEntry(256, 3, 1, width); // ImageWidth
  writeEntry(257, 3, 1, height); // ImageLength
  writeEntry(258, 3, 4, bitsPerSampleOffset); // BitsPerSample
  writeEntry(259, 3, 1, 1); // Compression = None
  writeEntry(262, 3, 1, 2); // PhotometricInterpretation = RGB
  writeEntry(273, 4, 1, stripOffset); // StripOffsets
  writeEntry(277, 3, 1, samplesPerPixel); // SamplesPerPixel
  writeEntry(278, 3, 1, height); // RowsPerStrip
  writeEntry(279, 4, 1, imageDataLength); // StripByteCounts
  writeEntry(338, 3, 1, 2); // ExtraSamples = Unassociated alpha

  // Next IFD offset = 0
  view.setUint32(offset, 0, true);

  // BitsPerSample values (4 shorts)
  let bpsOffset = bitsPerSampleOffset;
  for (let i = 0; i < 4; i++) {
    view.setUint16(bpsOffset, 8, true);
    bpsOffset += 2;
  }

  // Image data: 2x2 RGBA pixels (red, green, blue, white)
  const pixelData = new Uint8Array(buffer, stripOffset, imageDataLength);
  pixelData.set([255, 0, 0, 255, 0, 255, 0, 255]);
  pixelData.set([0, 0, 255, 255, 255, 255, 255, 255], rowBytes);

  return new Uint8Array(buffer);
}

const sampleTiffBytes = createSampleTiffBytes();

const meta: Meta<TiffRendererProps> = {
  title: "Experimental/TiffRenderer",
  tags: ["experimental"],
  component: TiffRenderer,
  args: {
    content: sampleTiffBytes,
  },
  render: (args: TiffRendererProps) => (
    <div style={{ height: "400px" }}>
      <TiffRenderer {...args} />
    </div>
  ),
  parameters: {
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    content: {
      description: "TIFF bytes to render",
      control: false,
    },
    onError: {
      description: "Callback fired when rendering fails",
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
        code: `import { TiffRenderer } from "@osdk/react-components/experimental";

<TiffRenderer content={tiffBytes} />`,
      },
    },
  },
};

export const WithErrorCallback: Story = {
  args: {
    onError: fn(),
  },
  parameters: {
    docs: {
      source: {
        code: `import { TiffRenderer } from "@osdk/react-components/experimental";

<TiffRenderer content={tiffBytes} onError={() => console.error("TIFF render failed")} />`,
      },
    },
  },
};
