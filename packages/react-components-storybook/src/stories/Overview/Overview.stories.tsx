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

import type { Media, WhereClause } from "@osdk/api";
import { useOsdkObject } from "@osdk/react";
import {
  ActionForm,
  type ActionFormProps,
  type FormState,
} from "@osdk/react-components/experimental";
import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";
import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { http, passthrough } from "msw";
import React, { type CSSProperties, useCallback, useState } from "react";
import { utils, write } from "xlsx-republish";

import {
  fauxFoundry,
  MEDIA_EMPLOYEE_PK,
  updateEmployeeStoryAction,
} from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

/* cspell:words officedocument openxmlformats pldi spreadsheetml tracemonkey */

// ── Types ─────────────────────────────────────────────────

type TabId = "data" | "viewers" | "forms";

type CSSWithCustomProps = CSSProperties & { [key: `--${string}`]: string };

type ViewerTypeId =
  | "pdf"
  | "image"
  | "markdown"
  | "video"
  | "email"
  | "excel"
  | "xml"
  | "tiff"
  | "unsupported";

interface ViewerOption {
  id: ViewerTypeId;
  label: string;
}

interface MockViewerMedia {
  fileName: string;
  media: Media;
}

// ── Constants ─────────────────────────────────────────────

const TABS: Array<{ id: TabId; label: string }> = [
  { id: "data", label: "Data" },
  { id: "viewers", label: "Viewers" },
  { id: "forms", label: "Forms" },
];

const VIEWER_OPTIONS: Array<ViewerOption> = [
  { id: "pdf", label: "PDF" },
  { id: "image", label: "Image" },
  { id: "markdown", label: "Markdown" },
  { id: "video", label: "Video" },
  { id: "email", label: "Email" },
  { id: "excel", label: "Excel" },
  { id: "xml", label: "XML" },
  { id: "tiff", label: "TIFF" },
  { id: "unsupported", label: "Unsupported" },
];

const FILTER_DEFINITIONS: Array<FilterDefinitionUnion<Employee>> = [
  {
    type: "PROPERTY",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "team",
    key: "team",
    label: "Team",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "fullName",
    key: "fullName",
    label: "Full Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
];

const FILTER_WRAPPER_STYLE: CSSWithCustomProps = {
  flexShrink: 0,
  overflow: "auto",
  "--osdk-filter-list-border-radius": "0px",
};

const SAMPLE_VIDEO_URL = `${import.meta.env.BASE_URL}example.mp4`;

const SAMPLE_TIFF_URL = `${import.meta.env.BASE_URL}multi-page-tiff.tiff`;

const SAMPLE_MARKDOWN = `# Document Viewer

This markdown file is rendered through the overview selector.

- PDF uses the employee media field
- Other types use small local Storybook samples
`;

const SAMPLE_EMAIL = `From: Ada <ada@example.com>
To: Storybook <storybook@example.com>
Subject: Document Viewer Overview
Date: Wed, 01 Jul 2026 10:00:00 +0000
Content-Type: text/html; charset=utf-8

<html><body><p>The overview is showing the email renderer.</p></body></html>
`;

const SAMPLE_XML = `<?xml version="1.0"?>
<document>
  <title>Document Viewer Overview</title>
  <status>Rendered through the XML viewer</status>
</document>`;

function createSampleImageDataUrl(): string {
  const canvas = document.createElement("canvas");
  canvas.width = 480;
  canvas.height = 320;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createLinearGradient(0, 0, 480, 320);
  gradient.addColorStop(0, "#2d72d2");
  gradient.addColorStop(0.55, "#10b981");
  gradient.addColorStop(1, "#f59e0b");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 480, 320);

  ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
  ctx.fillRect(64, 56, 352, 208);
  ctx.fillStyle = "#1f2937";
  ctx.font = "700 36px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Image Viewer", 240, 136);
  ctx.font = "500 20px Arial, sans-serif";
  ctx.fillText("Overview sample", 240, 184);

  return canvas.toDataURL("image/png");
}

const SAMPLE_IMAGE_DATA_URL = createSampleImageDataUrl();

function createMockMedia(
  mimeType: string,
  fetchFn: () => Promise<Response>,
  fileName: string
): Media {
  return {
    fetchContents: fetchFn,
    fetchMetadata: () =>
      Promise.resolve({
        mediaType: mimeType,
        path: fileName,
        sizeBytes: 1024,
      }),
    getMediaReference: () => ({
      mimeType,
      reference: {
        type: "mediaSetViewItem" as const,
        mediaSetViewItem: {
          mediaItemRid: `ri.mio.main.media-item.${fileName}`,
          mediaSetRid: "ri.mio.main.media-set.storybook-overview",
          mediaSetViewRid: "ri.mio.main.media-set-view.storybook-overview",
        },
      },
    }),
  };
}

function createExcelMedia(): Media {
  const worksheet = utils.aoa_to_sheet([
    ["Name", "Department", "Location"],
    ["Ada Lovelace", "Engineering", "London"],
    ["Grace Hopper", "Platform", "New York"],
  ]);
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, "Employees");
  const buffer = write(workbook, { type: "array", bookType: "xlsx" });

  return createMockMedia(
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    () => Promise.resolve(new Response(buffer)),
    "employees.xlsx"
  );
}

const MOCK_VIEWER_MEDIA_BY_TYPE: Partial<
  Record<ViewerTypeId, MockViewerMedia>
> = {
  image: {
    fileName: "overview.png",
    media: createMockMedia(
      "image/png",
      () => fetch(SAMPLE_IMAGE_DATA_URL),
      "overview.png"
    ),
  },
  markdown: {
    fileName: "overview.md",
    media: createMockMedia(
      "text/markdown",
      () => Promise.resolve(new Response(SAMPLE_MARKDOWN)),
      "overview.md"
    ),
  },
  video: {
    fileName: "example.mp4",
    media: createMockMedia(
      "video/mp4",
      () => fetch(SAMPLE_VIDEO_URL),
      "example.mp4"
    ),
  },
  email: {
    fileName: "overview.eml",
    media: createMockMedia(
      "message/rfc822",
      () => Promise.resolve(new Response(SAMPLE_EMAIL)),
      "overview.eml"
    ),
  },
  excel: {
    fileName: "employees.xlsx",
    media: createExcelMedia(),
  },
  xml: {
    fileName: "overview.xml",
    media: createMockMedia(
      "application/xml",
      () => Promise.resolve(new Response(SAMPLE_XML)),
      "overview.xml"
    ),
  },
  tiff: {
    fileName: "multi-page-tiff.tiff",
    media: createMockMedia(
      "image/tiff",
      () => fetch(SAMPLE_TIFF_URL),
      "multi-page-tiff.tiff"
    ),
  },
  unsupported: {
    fileName: "overview.bin",
    media: createMockMedia(
      "application/octet-stream",
      () => Promise.resolve(new Response("Unsupported sample")),
      "overview.bin"
    ),
  },
};

const actionDefinition = updateEmployeeStoryAction.actionDefinition;

type OverviewApplyAction = Parameters<
  NonNullable<ActionFormProps<typeof actionDefinition>["onSubmit"]>
>[1];

function applyOverviewAction(
  formState: FormState<typeof actionDefinition>,
  applyAction: OverviewApplyAction
): ReturnType<OverviewApplyAction> {
  return applyAction(
    formState as unknown as Parameters<OverviewApplyAction>[0]
  );
}

// ── Tab: Data ─────────────────────────────────────────────

function DataTab(): React.ReactElement {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", height: 500 }}>
      <div
        style={{
          ...FILTER_WRAPPER_STYLE,
          width: collapsed ? "auto" : 280,
        }}
      >
        <FilterList
          objectType={Employee}
          filterDefinitions={FILTER_DEFINITIONS}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          title="Employee Filters"
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          showActiveFilterCount={true}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <ObjectTable objectType={Employee} filter={filterClause} />
      </div>
    </div>
  );
}

// ── Tab: Viewers ──────────────────────────────────────────

interface ViewersTabProps {
  selectedViewerType: ViewerTypeId;
}

function ViewersTab({
  selectedViewerType,
}: ViewersTabProps): React.ReactElement {
  const { object: employee, isLoading } = useOsdkObject(
    Employee,
    MEDIA_EMPLOYEE_PK
  );

  const selectedMockMedia = MOCK_VIEWER_MEDIA_BY_TYPE[selectedViewerType];
  const selectedMedia =
    selectedViewerType === "pdf"
      ? employee?.employeeDocuments
      : selectedMockMedia?.media;
  const selectedFileName =
    selectedViewerType === "pdf"
      ? "compressed.tracemonkey-pldi-09.pdf"
      : selectedMockMedia?.fileName;
  const hasMedia = selectedMedia != null;
  const loadingMessage = isLoading ? "Loading document..." : "No media found.";

  return (
    <div style={{ height: 400, position: "relative" }}>
      {hasMedia && (
        <DocumentViewer
          key={selectedViewerType}
          media={selectedMedia}
          fileName={selectedFileName}
        />
      )}
      {!hasMedia && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--osdk-typography-color-muted, #666)",
          }}
        >
          {loadingMessage}
        </div>
      )}
    </div>
  );
}

// ── Tab: Forms ────────────────────────────────────────────

function FormsTab(): React.ReactElement {
  const handleSubmit = useCallback(
    (
      formState: FormState<typeof actionDefinition>,
      applyAction: OverviewApplyAction
    ) => {
      return applyOverviewAction(formState, applyAction);
    },
    []
  );

  return (
    <div className="osdkFormCard">
      <ActionForm actionDefinition={actionDefinition} onSubmit={handleSubmit} />
    </div>
  );
}

// ── Main component ────────────────────────────────────────

function ComponentOverview(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<TabId>("data");
  const [selectedViewerType, setSelectedViewerType] =
    useState<ViewerTypeId>("pdf");

  const handleTabChange = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const tab = event.currentTarget.dataset.tab as TabId;
      setActiveTab(tab);
    },
    []
  );

  const handleViewerTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedViewerType(event.currentTarget.value as ViewerTypeId);
    },
    []
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom:
            "1px solid var(--osdk-surface-border-color-default, #d1d5db)",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            data-tab={tab.id}
            onClick={handleTabChange}
            style={{
              padding: "10px 20px",
              fontWeight: activeTab === tab.id ? 600 : 400,
              color:
                activeTab === tab.id
                  ? "var(--osdk-intent-primary-rest, #2d72d2)"
                  : "var(--osdk-typography-color-muted, #666)",
              backgroundColor: "transparent",
              border: "none",
              borderBottom:
                activeTab === tab.id
                  ? "2px solid var(--osdk-intent-primary-rest, #2d72d2)"
                  : "2px solid transparent",
              cursor: "pointer",
            }}
          >
            {tab.label}
          </button>
        ))}
        {activeTab === "viewers" && (
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginLeft: "auto",
              marginRight: 16,
              color: "var(--osdk-typography-color-muted, #666)",
              fontSize: 13,
            }}
          >
            Viewer type
            <select
              value={selectedViewerType}
              onChange={handleViewerTypeChange}
              style={{
                height: 32,
                minWidth: 140,
                border:
                  "1px solid var(--osdk-surface-border-color-default, #d1d5db)",
                borderRadius: 4,
                background:
                  "var(--osdk-surface-background-color-default, #fff)",
                color: "var(--osdk-typography-color-default, #111827)",
                padding: "0 8px",
              }}
            >
              {VIEWER_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>

      {activeTab === "data" && <DataTab />}
      {activeTab === "viewers" && (
        <ViewersTab selectedViewerType={selectedViewerType} />
      )}
      {activeTab === "forms" && <FormsTab />}
    </div>
  );
}

const meta: Meta = {
  title: "Components/Overview",
  component: ComponentOverview,
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    docs: { source: { code: null } },
    msw: {
      handlers: [
        ...fauxFoundry.handlers,
        http.get("*/example.mp4", () => passthrough()),
        http.get("*/multi-page-tiff.tiff", () => passthrough()),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
