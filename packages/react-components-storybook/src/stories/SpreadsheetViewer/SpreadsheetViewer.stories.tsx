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

/* cspell:words openxmlformats officedocument spreadsheetml */

import type { Media } from "@osdk/api";
import type {
  BaseSpreadsheetViewerProps,
  ParsedSpreadsheet,
  SpreadsheetViewerProps,
} from "@osdk/react-components/experimental/spreadsheet-viewer";
import {
  BaseSpreadsheetViewer,
  SpreadsheetViewer,
} from "@osdk/react-components/experimental/spreadsheet-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, passthrough } from "msw";
import { utils, write } from "xlsx-republish";

const SAMPLE_SPREADSHEET: ParsedSpreadsheet = {
  sheets: [
    {
      name: "Employees",
      rows: [
        ["Name", "Department", "Title", "Start Date", "Salary"],
        [
          "Alice Johnson",
          "Engineering",
          "Senior Engineer",
          "2022-03-15",
          "$145,000",
        ],
        [
          "Bob Smith",
          "Marketing",
          "Marketing Manager",
          "2021-07-01",
          "$120,000",
        ],
        [
          "Carol Davis",
          "Engineering",
          "Staff Engineer",
          "2020-01-10",
          "$165,000",
        ],
        ["Dave Wilson", "Sales", "Account Executive", "2023-05-20", "$95,000"],
        [
          "Eve Brown",
          "Engineering",
          "Junior Engineer",
          "2024-01-08",
          "$90,000",
        ],
      ],
    },
    {
      name: "Departments",
      rows: [
        ["Department", "Head Count", "Budget"],
        ["Engineering", "3", "$400,000"],
        ["Marketing", "1", "$120,000"],
        ["Sales", "1", "$95,000"],
      ],
    },
    {
      name: "Summary",
      rows: [
        ["Metric", "Value"],
        ["Total Employees", "5"],
        ["Total Budget", "$615,000"],
        ["Average Salary", "$123,000"],
      ],
    },
  ],
};

const SAMPLE_SPREADSHEET_URL = `${import.meta.env.BASE_URL}notional-spreadsheet-example.xlsx`;

function createMockMediaFromUrl(url: string, filename: string): Media {
  const mimeType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  return {
    fetchContents: () => fetch(url),
    fetchMetadata: () =>
      Promise.resolve({
        path: filename,
        sizeBytes: 0,
        mediaType: mimeType,
      }),
    getMediaReference: () => ({
      mimeType,
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-spreadsheet-file",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

/**
 * Creates a mock .xlsx file as an ArrayBuffer using the xlsx library,
 * then wraps it in a Media mock.
 */
function createMockSpreadsheetMedia(): Media {
  const workbook = utils.book_new();
  for (const sheet of SAMPLE_SPREADSHEET.sheets) {
    const ws = utils.aoa_to_sheet(sheet.rows as string[][]);
    utils.book_append_sheet(workbook, ws, sheet.name);
  }
  const xlsxBuffer = write(workbook, { type: "array", bookType: "xlsx" });

  return {
    fetchContents: () =>
      Promise.resolve(
        new Response(xlsxBuffer, {
          headers: {
            "Content-Type":
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        }),
      ),
    fetchMetadata: () =>
      Promise.resolve({
        path: "report.xlsx",
        sizeBytes: xlsxBuffer.byteLength,
        mediaType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
    getMediaReference: () => ({
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: "ri.mio.main.media-item.mock-spreadsheet",
          mediaSetRid: "ri.mio.main.media-set.mock-set",
          mediaSetViewRid: "ri.mio.main.media-set-view.mock-view",
        },
      },
    }),
  };
}

const meta: Meta<BaseSpreadsheetViewerProps> = {
  title: "Components/DocumentViewer/Renderers/SpreadsheetViewer",
  component: BaseSpreadsheetViewer,
  tags: ["beta"],
  args: {
    content: SAMPLE_SPREADSHEET,
  },
  render: (args: BaseSpreadsheetViewerProps) => (
    <div style={{ height: "500px" }}>
      <BaseSpreadsheetViewer {...args} />
    </div>
  ),
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    content: {
      description: "The parsed spreadsheet to render",
      control: false,
    },
    className: {
      description: "Additional CSS class name for the root element",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<SpreadsheetViewerProps> = {
  args: {
    media: createMockSpreadsheetMedia(),
  },
  render: (args: SpreadsheetViewerProps) => (
    <div style={{ height: "500px" }}>
      <SpreadsheetViewer media={args.media} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<SpreadsheetViewer media={myOsdkMedia} />`,
      },
    },
  },
};

export const WithSpreadsheet: Story = {
  parameters: {
    docs: {
      source: {
        code: `<BaseSpreadsheetViewer content={parsedSpreadsheet} />`,
      },
    },
  },
};

export const SingleSheet: Story = {
  args: {
    content: {
      sheets: [SAMPLE_SPREADSHEET.sheets[0]!],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `// With one sheet the tab bar is hidden
<BaseSpreadsheetViewer
  content={{
    sheets: [
      {
        name: "Employees",
        rows: [
          ["Name", "Department", "Salary"],
          ["Alice Johnson", "Engineering", "$145,000"],
        ],
      },
    ],
  }}
/>`,
      },
    },
  },
};

export const WithRealFile: StoryObj<SpreadsheetViewerProps> = {
  args: {
    media: createMockMediaFromUrl(
      SAMPLE_SPREADSHEET_URL,
      "notional-spreadsheet-example.xlsx",
    ),
  },
  render: (args: SpreadsheetViewerProps) => (
    <div style={{ height: "600px" }}>
      <SpreadsheetViewer media={args.media} />
    </div>
  ),
  parameters: {
    msw: {
      handlers: [
        http.get("*/notional-spreadsheet-example.xlsx", () => passthrough()),
      ],
    },
    docs: {
      source: {
        code: `// SpreadsheetViewer fetches and parses the xlsx workbook itself, so a real
// multi-sheet file needs no extra wiring
<SpreadsheetViewer media={quarter.headcountReport} />`,
      },
    },
  },
};
