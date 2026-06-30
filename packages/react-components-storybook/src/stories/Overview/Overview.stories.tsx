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

import type { WhereClause } from "@osdk/api";
import { useOsdkObject } from "@osdk/react";
import {
  ActionForm,
  type ActionFormProps,
  type FormState,
} from "@osdk/react-components/experimental";
import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { type CSSProperties, useCallback, useState } from "react";

import {
  fauxFoundry,
  MEDIA_EMPLOYEE_PK,
  updateEmployeeStoryAction,
} from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

// ── Types ─────────────────────────────────────────────────

type TabId = "data" | "viewers" | "forms";

type CSSWithCustomProps = CSSProperties & { [key: `--${string}`]: string };

// ── Constants ─────────────────────────────────────────────

const TABS: Array<{ id: TabId; label: string }> = [
  { id: "data", label: "Data" },
  { id: "viewers", label: "Viewers" },
  { id: "forms", label: "Forms" },
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

function ViewersTab(): React.ReactElement {
  const { object: employee, isLoading } = useOsdkObject(
    Employee,
    MEDIA_EMPLOYEE_PK
  );

  const hasMedia = !isLoading && employee?.employeeDocuments != null;

  return (
    <div style={{ height: 400, position: "relative" }}>
      {hasMedia && <PdfViewer media={employee.employeeDocuments} />}
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
          Loading PDF…
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

  const handleTabChange = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const tab = event.currentTarget.dataset.tab as TabId;
      setActiveTab(tab);
    },
    []
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
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
      </div>

      {activeTab === "data" && <DataTab />}
      {activeTab === "viewers" && <ViewersTab />}
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
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
