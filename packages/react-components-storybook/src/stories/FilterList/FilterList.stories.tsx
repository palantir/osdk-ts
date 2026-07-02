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

import type { DerivedProperty, ObjectSet, Osdk, WhereClause } from "@osdk/api";
import { useOsdkClient } from "@osdk/react";
import type {
  FilterDefinitionUnion,
  FilterListProps,
  FilterState,
} from "@osdk/react-components/experimental/filter-list";
import {
  FilterList,
  getFilterKey,
} from "@osdk/react-components/experimental/filter-list";
import type { ColumnDefinition } from "@osdk/react-components/experimental/object-table";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

type EmployeeFilterListProps = FilterListProps<typeof Employee>;

const departmentFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department",
  key: "department",
  label: "Department",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
};

const teamFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "team",
  key: "team",
  label: "Team",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
};

const fullNameFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "fullName",
  key: "fullName",
  label: "Full Name",
  filterComponent: "CONTAINS_TEXT",
  filterState: { type: "CONTAINS_TEXT" },
};

const startDateFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "firstFullTimeStartDate",
  key: "firstFullTimeStartDate",
  label: "Start Date",
  filterComponent: "DATE_RANGE",
  filterState: { type: "DATE_RANGE" },
  clickToFilter: true,
  formatDate: (date) =>
    date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
};

const employeeNumberFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "employeeNumber",
  key: "employeeNumber",
  label: "Employee Number",
  filterComponent: "NUMBER_RANGE",
  filterState: { type: "NUMBER_RANGE" },
  clickToFilter: true,
};

const locationCityFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "locationCity",
  key: "locationCity",
  label: "Location City",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
};

const jobTitleMultiSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "jobTitle-multi",
  key: "jobTitle",
  label: "Job Title",
  filterComponent: "MULTI_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const sharedFilterDefinitions: FilterDefinitionUnion<Employee>[] = [
  departmentFilter,
  teamFilter,
  fullNameFilter,
  startDateFilter,
  jobTitleMultiSelectFilter,
  employeeNumberFilter,
  locationCityFilter,
];

const SIDEBAR_STYLE = { width: 320, height: 600 } as const;
const FLEX_ROW_STYLE = { display: "flex", gap: 16 } as const;
const FLEX_FILL_STYLE = { flex: 1 } as const;
const PRE_STYLE = {
  marginTop: 8,
  padding: 12,
  background: "#f5f5f5",
  borderRadius: 4,
  fontSize: 12,
  overflow: "auto" as const,
  maxHeight: 560,
} as const;
const COMBINED_LAYOUT_STYLE = {
  display: "flex",
  gap: 16,
  height: 600,
} as const;
const SIDEBAR_FIXED_STYLE = { width: 320, flexShrink: 0 } as const;

const FILTER_ICON = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M1 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1.5a1 1 0 0 1-.293.707L10 8.914V13a1 1 0 0 1-.553.894l-2 1A1 1 0 0 1 6 14v-5.086L1.293 4.207A1 1 0 0 1 1 3.5V2z" />
  </svg>
);

const meta: Meta<EmployeeFilterListProps> = {
  title: "Components/FilterList",
  component: FilterList,
  tags: ["beta"],
  args: {
    title: "Filters",
    enableSorting: false,
    showResetButton: false,
    showActiveFilterCount: false,
    collapsed: false,
    onFilterClauseChanged: fn(),
    onFilterStateChanged: fn(),
    onFilterAdded: fn(),
    onFilterRemoved: fn(),
    onFilterVisibilityChange: fn(),
    onCollapsedChange: fn(),
    onReset: fn(),
  },
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
  },
  argTypes: {
    objectType: {
      description: "The object type definition for the objects being filtered",
      control: false,
    },
    objectSet: {
      description: "Optional object set to scope aggregation queries",
      control: false,
    },
    filterDefinitions: {
      description:
        "Array of filter definitions. If not provided, all filterable properties are auto-discovered.",
      control: false,
    },
    title: {
      description: "Title displayed in the filter list header",
      control: "text",
    },
    titleIcon: {
      description: "Icon displayed next to the title",
      control: false,
    },
    filterClause: {
      description:
        "The current where clause. If provided, the filter clause is controlled.",
      control: false,
    },
    onFilterClauseChanged: {
      description:
        "Called when the filter clause changes. Required in controlled mode.",
      control: false,
      table: { category: "Events" },
    },
    onFilterStateChanged: {
      description: "Called when an individual filter's state changes",
      control: false,
      table: { category: "Events" },
    },
    enableSorting: {
      description: "Enable drag-and-drop reordering of filters",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    collapsed: {
      description: "Whether the filter list panel is collapsed",
      control: "boolean",
    },
    onCollapsedChange: {
      description: "Called when the collapsed state changes",
      control: false,
      table: { category: "Events" },
    },
    showResetButton: {
      description: "Show reset filters button in header",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onReset: {
      description: "Called when the reset button is clicked",
      control: false,
      table: { category: "Events" },
    },
    showActiveFilterCount: {
      description: "Show count of active filters in header",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onFilterAdded: {
      description:
        "Called when a filter is added. If provided, users can add filters.",
      control: false,
      table: { category: "Events" },
    },
    onFilterRemoved: {
      description:
        "Called when a filter is removed. If provided, users can remove filters.",
      control: false,
      table: { category: "Events" },
    },
    onFilterVisibilityChange: {
      description:
        "Called when filter visibility or ordering changes (reorder, add, remove).",
      control: false,
      table: { category: "Events" },
    },
    addFilterMode: {
      description:
        'Controls how filter add/remove is managed. "uncontrolled" manages visibility internally; "controlled" leaves it to the consumer.',
      control: "select",
      options: ["controlled", "uncontrolled"],
      table: {
        category: "Advanced",
        defaultValue: { summary: '"uncontrolled"' },
      },
    },
    renderAddFilterButton: {
      description: "Custom render function for the add filter button.",
      control: false,
      table: { category: "Advanced" },
    },
    initialFilterStates: {
      description:
        "Initial filter states for hydrating from external storage. Merged over definition defaults on mount.",
      control: false,
      table: { category: "Advanced" },
    },
    className: {
      description: "Additional CSS class name",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`,
      },
    },
  },
  render: ({ objectType: _ot, objectSet: _os, ...args }) => {
    const filterDefinitions = useMemo(
      (): FilterDefinitionUnion<Employee>[] => [
        departmentFilter,
        locationCityFilter,
      ],
      []
    );
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

export const IntegerNumberRangeRounding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Repro for the integer-typed `NUMBER_RANGE` rounding fix. " +
          "`employeeNumber` is an `integer` property, so histogram bucket " +
          "boundaries — `(maxValue - minValue) / 20` — are usually fractional. " +
          "Click any bar in the histogram. The Min/Max boxes must show whole " +
          "integers (e.g. `657495073`), not fractional values " +
          "(e.g. `657495073.4`).",
      },
    },
  },
  render: ({ objectType: _ot, objectSet: _os, ...args }) => {
    const filterDefinitions = useMemo(
      (): FilterDefinitionUnion<Employee>[] => [employeeNumberFilter],
      []
    );
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

function WithObjectSetStory(args: Partial<EmployeeFilterListProps>) {
  const client = useOsdkClient();
  const objectSet = useMemo(
    () =>
      client(Employee).where({
        department: "Marketing",
      }),
    [client]
  );

  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [teamFilter, locationCityFilter],
    []
  );

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        objectSet={objectSet}
        filterDefinitions={filterDefinitions}
        {...args}
      />
    </div>
  );
}

export const WithObjectSet: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass an `objectSet` prop to scope filter aggregations to a subset of objects. " +
          "Here the object set is filtered to Marketing department employees, " +
          "so the listogram counts reflect only that subset.",
      },
      source: {
        code: `const client = useOsdkClient();
const objectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={objectSet}
  filterDefinitions={[
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`,
      },
    },
  },
  render: (args) => <WithObjectSetStory {...args} />,
};

function AddFilterModeStory(args: Partial<EmployeeFilterListProps>) {
  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      departmentFilter,
      teamFilter,
      {
        ...fullNameFilter,
        isVisible: false,
      } as FilterDefinitionUnion<Employee>,
      {
        ...startDateFilter,
        isVisible: false,
      } as FilterDefinitionUnion<Employee>,
      {
        ...employeeNumberFilter,
        isVisible: false,
      } as FilterDefinitionUnion<Employee>,
      {
        ...locationCityFilter,
        isVisible: false,
      } as FilterDefinitionUnion<Employee>,
    ],
    []
  );

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={filterDefinitions}
        addFilterMode="uncontrolled"
        {...args}
      />
    </div>
  );
}

export const AddFilterMode: Story = {
  args: {
    showResetButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `const filterDefinitions = [
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "fullName", label: "Full Name", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" }, isVisible: false },
  { type: "PROPERTY", key: "firstFullTimeStartDate", label: "Start Date", filterComponent: "DATE_RANGE", filterState: { type: "DATE_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "employeeNumber", label: "Employee Number", filterComponent: "NUMBER_RANGE", filterState: { type: "NUMBER_RANGE" }, isVisible: false },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] }, isVisible: false },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  addFilterMode="uncontrolled"
  showResetButton={true}
/>`,
      },
    },
  },
  render: (args) => <AddFilterModeStory {...args} />,
};

function WithAllFilterTypesStory(args: Partial<EmployeeFilterListProps>) {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  const argsOnFilterClauseChanged = args.onFilterClauseChanged;
  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
      argsOnFilterClauseChanged?.(clause);
    },
    [argsOnFilterClauseChanged]
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={sharedFilterDefinitions}
          {...args}
          filterClause={filterClause}
          onFilterClauseChanged={handleFilterClauseChanged}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <strong>Filter Clause (JSON):</strong>
        <pre style={PRE_STYLE}>
          {filterClause
            ? JSON.stringify(filterClause, null, 2)
            : "(no active filters)"}
        </pre>
      </div>
    </div>
  );
}

export const WithAllFilterTypes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "All filter component types with a controlled where clause. " +
          "Hover filter items to reveal search and exclude actions.",
      },
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`,
      },
    },
  },
  render: (args) => <WithAllFilterTypesStory {...args} />,
};

export const WithTitleAndIcon: Story = {
  args: {
    title: "Employee Filters",
  },
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`,
      },
    },
  },
  render: ({ objectType: _ot, objectSet: _os, ...args }) => {
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={sharedFilterDefinitions}
          titleIcon={FILTER_ICON}
          {...args}
        />
      </div>
    );
  },
};

function WithResetButtonStory(args: Partial<EmployeeFilterListProps>) {
  const argsOnReset = args.onReset;
  const handleReset = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Reset clicked");
    argsOnReset?.();
  }, [argsOnReset]);

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={sharedFilterDefinitions}
        {...args}
        onReset={handleReset}
      />
    </div>
  );
}

export const WithResetButton: Story = {
  args: {
    showResetButton: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
  onReset={() => console.log("Reset clicked")}
/>`,
      },
    },
  },
  render: (args) => <WithResetButtonStory {...args} />,
};

export const WithActiveFilterCount: Story = {
  args: {
    showActiveFilterCount: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`,
      },
    },
  },
  render: ({ objectType: _ot, objectSet: _os, ...args }) => {
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={sharedFilterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

export const WithSorting: Story = {
  args: {
    enableSorting: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`,
      },
    },
  },
  render: ({ objectType: _ot, objectSet: _os, ...args }) => {
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={sharedFilterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

function CollapsiblePanelStory(
  args: Partial<EmployeeFilterListProps> & {
    onCollapsedChange?: (collapsed: boolean) => void;
  }
) {
  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={sharedFilterDefinitions}
        {...args}
      />
    </div>
  );
}

export const CollapsiblePanel: Story = {
  args: {
    title: "Employee Filters",
    showActiveFilterCount: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click the collapse button to minimize the filter panel. " +
          "Active filter count is shown in the collapsed state.",
      },
      source: {
        code: `const [collapsed, setCollapsed] = useState(false);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showActiveFilterCount={true}
/>`,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<Partial<EmployeeFilterListProps>>();
    const argsOnCollapsedChange = args.onCollapsedChange;
    const handleCollapsedChange = useCallback(
      (collapsed: boolean) => {
        updateArgs({ collapsed });
        argsOnCollapsedChange?.(collapsed);
      },
      [updateArgs, argsOnCollapsedChange]
    );
    return (
      <CollapsiblePanelStory
        {...args}
        onCollapsedChange={handleCollapsedChange}
      />
    );
  },
};

export const KeywordSearch: Story = {
  parameters: {
    docs: {
      source: {
        code: `const filterDefinitions = [
  { type: "KEYWORD_SEARCH", properties: ["fullName", "department", "jobTitle", "locationCity"], label: "Search" },
  { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: ({ objectType: _ot, objectSet: _os, ...args }) => {
    const filterDefinitions = useMemo(
      (): FilterDefinitionUnion<Employee>[] => [
        {
          type: "KEYWORD_SEARCH",
          properties: ["fullName", "department", "jobTitle", "locationCity"],
          label: "Search",
        },
        departmentFilter,
        locationCityFilter,
      ],
      []
    );

    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

function WithColorMapStory(args: Partial<EmployeeFilterListProps>) {
  const withoutColorMap = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-no-color",
        key: "department",
        label: "Department (default colors)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      },
    ],
    []
  );
  const withColorMap = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-color",
        key: "department",
        label: "Department (custom colors)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        colorMap: {
          Marketing: "#e74c3c",
          Operations: "#2ecc71",
          Finance: "#3498db",
          Product: "#f39c12",
        },
      },
    ],
    []
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={withoutColorMap}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={withColorMap}
          {...args}
        />
      </div>
    </div>
  );
}

export const WithColorMap: Story = {
  parameters: {
    docs: {
      source: {
        code: `// Without colorMap: all bars use the default theme color
// With colorMap: each value gets a distinct color for its bar

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    colorMap: {
      Marketing: "#e74c3c",
      Operations: "#2ecc71",
      Finance: "#3498db",
      Product: "#f39c12",
    },
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: (args) => <WithColorMapStory {...args} />,
};

const DEPARTMENT_LABELS: Record<string, string> = {
  Marketing: "Marketing Dept.",
  Operations: "Ops Team",
  Finance: "Finance & Accounting",
  Product: "Product Group",
};

function WithRenderValueStory(args: Partial<EmployeeFilterListProps>) {
  const withoutRenderValue = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-default",
        key: "department",
        label: "Department (default)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      },
    ],
    []
  );
  const withRenderValue = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-custom",
        key: "department",
        label: "Department (custom render)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        renderValue: (value: string) => DEPARTMENT_LABELS[value] ?? value,
      },
      {
        type: "PROPERTY",
        id: "team-custom",
        key: "team",
        label: "Team (custom render)",
        filterComponent: "MULTI_SELECT",
        filterState: { type: "SELECT", selectedValues: [] },
        renderValue: (value: string) => value.toUpperCase(),
      },
    ],
    []
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={withoutRenderValue}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={withRenderValue}
          {...args}
        />
      </div>
    </div>
  );
}

export const WithRenderValue: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use `renderValue` to customize how filter values are displayed and searched. " +
          "The returned string replaces the raw value for display and search matching. " +
          "Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components.",
      },
      source: {
        code: `const DEPARTMENT_LABELS = {
  Marketing: "Marketing Dept.",
  Operations: "Ops Team",
  Finance: "Finance & Accounting",
  Product: "Product Group",
};

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => DEPARTMENT_LABELS[value] ?? value,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: (args) => <WithRenderValueStory {...args} />,
};

const DEPARTMENT_SWATCHES: Record<string, string> = {
  Marketing: "#f97316",
  Operations: "#3b82f6",
  Finance: "#10b981",
  Product: "#a855f7",
};

const SWATCH_ROW_STYLE = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
} as const;

const SWATCH_DOT_BASE_STYLE = {
  display: "inline-block",
  width: 10,
  height: 10,
  borderRadius: "50%",
  flexShrink: 0,
} as const;

function DepartmentSwatch({ value }: { value: string }) {
  const color = DEPARTMENT_SWATCHES[value] ?? "#94a3b8";
  return (
    <span style={SWATCH_ROW_STYLE}>
      <span style={{ ...SWATCH_DOT_BASE_STYLE, background: color }} />
      <span>{DEPARTMENT_LABELS[value] ?? value}</span>
    </span>
  );
}

function WithRenderValueReactNodeStory(args: Partial<EmployeeFilterListProps>) {
  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-swatch",
        key: "department",
        label: "Department (JSX)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        renderValue: (value) => <DepartmentSwatch value={value} />,
      },
      {
        type: "PROPERTY",
        id: "team-link",
        key: "team",
        label: "Team (anchor JSX)",
        filterComponent: "MULTI_SELECT",
        filterState: { type: "SELECT", selectedValues: [] },
        renderValue: (value) => (
          <a
            href={`#/team/${encodeURIComponent(value)}`}
            onClick={(event) => event.preventDefault()}
            style={{ color: "#2563eb", textDecoration: "underline" }}
          >
            {value}
          </a>
        ),
      },
    ],
    []
  );

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={filterDefinitions}
        {...args}
      />
    </div>
  );
}

export const WithRenderValueAsReactNode: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`renderValue` may return any `ReactNode`, not just a string. " +
          "Use this to render avatars, anchors, status pills, or any " +
          "custom JSX inside listogram rows, dropdown items, and chips. " +
          "When the function returns non-string JSX, search matching " +
          "falls back to the raw value.",
      },
      source: {
        code: `const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
    renderValue: (value) => <DepartmentSwatch value={value} />,
  },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: (args) => <WithRenderValueReactNodeStory {...args} />,
};

function WithListogramDisplayModesStory(
  args: Partial<EmployeeFilterListProps>
) {
  const fullDefs = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "dept-full",
        key: "department",
        label: "full: label + bar + count",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        listogramConfig: { displayMode: "full" },
      },
    ],
    []
  );
  const countDefs = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "dept-count",
        key: "department",
        label: "count: label + count (no bar)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        listogramConfig: { displayMode: "count" },
      },
    ],
    []
  );
  const minimalDefs = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "dept-minimal",
        key: "department",
        label: "minimal: label only",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        listogramConfig: { displayMode: "minimal" },
      },
    ],
    []
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={fullDefs}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={countDefs}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={minimalDefs}
          {...args}
        />
      </div>
    </div>
  );
}

export const WithListogramDisplayModes: Story = {
  parameters: {
    docs: {
      source: {
        code: `// "full" (default): label + colored bar + count number
// "count": label + count number (no bar)
// "minimal": label only (no bar, no count)

const filterDefinitions = [
  { ..., listogramConfig: { displayMode: "full" } },
  { ..., listogramConfig: { displayMode: "count" } },
  { ..., listogramConfig: { displayMode: "minimal" } },
];`,
      },
    },
  },
  render: (args) => <WithListogramDisplayModesStory {...args} />,
};

function WithHiddenCountsStory(args: Partial<EmployeeFilterListProps>) {
  const withCounts = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "dept-with-count",
        key: "department",
        label: "Department (counts visible)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      },
      {
        type: "PROPERTY",
        id: "team-with-count",
        key: "team",
        label: "Team (counts visible)",
        filterComponent: "MULTI_SELECT",
        filterState: { type: "SELECT", selectedValues: [] },
      },
    ],
    []
  );
  const withoutCounts = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "dept-no-count",
        key: "department",
        label: "Department (counts hidden)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
        showCount: false,
      },
      {
        type: "PROPERTY",
        id: "team-no-count",
        key: "team",
        label: "Team (counts hidden)",
        filterComponent: "MULTI_SELECT",
        filterState: { type: "SELECT", selectedValues: [] },
        showCount: false,
      },
    ],
    []
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={withCounts}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={withoutCounts}
          {...args}
        />
      </div>
    </div>
  );
}

export const WithHiddenCounts: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use `showCount: false` on individual filter definitions to hide " +
          "aggregation counts in LISTOGRAM and MULTI_SELECT inputs. " +
          "Bar visualizations in LISTOGRAM are preserved.",
      },
      source: {
        code: `// showCount defaults to true; set false to hide counts per filter
const filterDefinitions = [
  { ..., filterComponent: "LISTOGRAM", showCount: false },
  { ..., filterComponent: "MULTI_SELECT", showCount: false },
];

<FilterList objectType={Employee} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: (args) => <WithHiddenCountsStory {...args} />,
};

function WithCheckboxStory(args: Partial<EmployeeFilterListProps>) {
  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-checkbox",
        key: "department",
        label: "Department",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      },
      {
        type: "PROPERTY",
        id: "team-checkbox",
        key: "team",
        label: "Team",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      },
    ],
    []
  );

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={filterDefinitions}
        {...args}
      />
    </div>
  );
}

export const WithCheckbox: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Listogram rows always include a checkbox for multi-select. " +
          "Selecting values checks the checkbox and highlights the row. " +
          "Use the exclude toggle (three-dot menu) to invert selections.",
      },
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "team", label: "Team", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`,
      },
    },
  },
  render: (args) => <WithCheckboxStory {...args} />,
};

function WithRemovableFiltersStory(args: Partial<EmployeeFilterListProps>) {
  const [definitions, setDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(sharedFilterDefinitions);

  const argsOnFilterRemoved = args.onFilterRemoved;
  const handleFilterRemoved = useCallback(
    (filterKey: string) => {
      setDefinitions((prev) =>
        prev.filter((def) => {
          if ("key" in def) {
            return def.key !== filterKey;
          }
          return true;
        })
      );
      argsOnFilterRemoved?.(filterKey);
    },
    [argsOnFilterRemoved]
  );

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={definitions}
        {...args}
        onFilterRemoved={handleFilterRemoved}
      />
    </div>
  );
}

export const WithRemovableFilters: Story = {
  name: "Removable Filters",
  args: {
    title: "Removable Filters",
    showActiveFilterCount: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. " +
          "Clicking it removes the filter from the list.",
      },
      source: {
        code: `const [definitions, setDefinitions] = useState(filterDefinitions);

const handleFilterRemoved = (filterKey) => {
  setDefinitions(prev => prev.filter(def => def.key !== filterKey));
};

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`,
      },
    },
  },
  render: (args) => <WithRemovableFiltersStory {...args} />,
};

function WithStaticValuesStory(args: Partial<EmployeeFilterListProps>) {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "STATIC_VALUES",
        key: "department",
        label: "Department (static)",
        filterComponent: "LISTOGRAM",
        values: ["Marketing", "Operations", "Finance", "Product"],
        filterState: { type: "EXACT_MATCH", values: [] },
        listogramConfig: { displayMode: "minimal" },
      },
      {
        type: "STATIC_VALUES",
        key: "locationCity",
        label: "Office Location",
        filterComponent: "SINGLE_SELECT",
        values: ["New York", "San Francisco", "London", "Tokyo"],
        filterState: { type: "SELECT", selectedValues: [] },
      },
      {
        type: "STATIC_VALUES",
        key: "team",
        label: "Team (multi-select)",
        filterComponent: "MULTI_SELECT",
        values: ["Alpha", "Beta", "Gamma", "Delta"],
        filterState: { type: "SELECT", selectedValues: [] },
      },
      {
        type: "STATIC_VALUES",
        id: "custom-status",
        key: "status",
        label: "Status (custom clause)",
        filterComponent: "LISTOGRAM",
        values: ["Active", "Inactive"],
        filterState: { type: "EXACT_MATCH", values: [] },
        listogramConfig: { displayMode: "minimal" },
        toWhereClause: (state: FilterState) => {
          if (state.type !== "EXACT_MATCH" || state.values.length === 0) {
            return undefined;
          }
          const values = state.values as string[];
          const hasActive = values.includes("Active");
          const hasInactive = values.includes("Inactive");
          if (hasActive && hasInactive) {
            return {
              $or: [
                { employeeStatus: "Active" },
                { employeeStatus: "Inactive" },
              ],
            } as WhereClause<Employee>;
          }
          if (hasActive) {
            return { employeeStatus: "Active" } as WhereClause<Employee>;
          }
          if (hasInactive) {
            return { employeeStatus: "Inactive" } as WhereClause<Employee>;
          }
          return undefined;
        },
      },
    ],
    []
  );

  const argsOnFilterClauseChanged = args.onFilterClauseChanged;
  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
      argsOnFilterClauseChanged?.(clause);
    },
    [argsOnFilterClauseChanged]
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          {...args}
          filterClause={filterClause}
          onFilterClauseChanged={handleFilterClauseChanged}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <strong>Filter Clause (JSON):</strong>
        <pre style={PRE_STYLE}>
          {filterClause
            ? JSON.stringify(filterClause, null, 2)
            : "(no active filters)"}
        </pre>
      </div>
    </div>
  );
}

export const WithStaticValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Use `STATIC_VALUES` filter definitions to provide a fixed list of values " +
          "instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, " +
          "MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` " +
          "function for custom clause generation.",
      },
      source: {
        code: `const filterDefinitions = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    values: ["Marketing", "Operations", "Finance", "Product"],
    filterState: { type: "EXACT_MATCH", values: [] },
    listogramConfig: { displayMode: "minimal" },
  },
  {
    type: "STATIC_VALUES",
    key: "locationCity",
    label: "Office Location",
    filterComponent: "SINGLE_SELECT",
    values: ["New York", "San Francisco", "London", "Tokyo"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Team",
    filterComponent: "MULTI_SELECT",
    values: ["Alpha", "Beta", "Gamma", "Delta"],
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "status",
    label: "Status",
    filterComponent: "LISTOGRAM",
    values: ["Active", "Inactive"],
    filterState: { type: "EXACT_MATCH", values: [] },
    toWhereClause: (state) => {
      // Custom WHERE clause mapping
      if (state.type === "EXACT_MATCH" && state.values.includes("Active")) {
        return { employeeStatus: "Active" };
      }
      return undefined;
    },
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`,
      },
    },
  },
  render: (args) => <WithStaticValuesStory {...args} />,
};

function FullFeaturedStory(
  args: Partial<EmployeeFilterListProps> & {
    onCollapsedChange?: (collapsed: boolean) => void;
  }
) {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);
  const [definitions, setDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(sharedFilterDefinitions);

  const argsOnFilterRemoved = args.onFilterRemoved;
  const handleFilterRemoved = useCallback(
    (filterKey: string) => {
      setDefinitions((prev) =>
        prev.filter((def) => {
          if ("key" in def) {
            return def.key !== filterKey;
          }
          return true;
        })
      );
      argsOnFilterRemoved?.(filterKey);
    },
    [argsOnFilterRemoved]
  );

  const argsOnReset = args.onReset;
  const handleReset = useCallback(() => {
    setDefinitions(sharedFilterDefinitions);
    argsOnReset?.();
  }, [argsOnReset]);

  const argsOnFilterClauseChanged = args.onFilterClauseChanged;
  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
      argsOnFilterClauseChanged?.(clause);
    },
    [argsOnFilterClauseChanged]
  );

  return (
    <div style={COMBINED_LAYOUT_STYLE}>
      <div style={SIDEBAR_FIXED_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={definitions}
          titleIcon={FILTER_ICON}
          {...args}
          onReset={handleReset}
          onFilterRemoved={handleFilterRemoved}
          filterClause={filterClause}
          onFilterClauseChanged={handleFilterClauseChanged}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <ObjectTable objectType={Employee} filter={filterClause} />
      </div>
    </div>
  );
}

export const FullFeatured: Story = {
  name: "Full Featured",
  args: {
    title: "Employee Filters",
    showResetButton: true,
    showActiveFilterCount: true,
    enableSorting: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates all filter list features together: collapse, reset, active count, sorting, " +
          "removable filters, per-filter search, exclude toggle, and controlled where clause " +
          "driving an ObjectTable.",
      },
      source: {
        code: `// All features combined: collapse, sort, search, exclude, remove, reset

<FilterList
  objectType={Employee}
  filterDefinitions={definitions}
  title="Employee Filters"
  titleIcon={<FilterIcon />}
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  showResetButton={true}
  showActiveFilterCount={true}
  onReset={handleReset}
  onFilterRemoved={handleFilterRemoved}
  enableSorting={true}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`,
      },
    },
  },
  render: (args) => {
    const [, updateArgs] = useArgs<Partial<EmployeeFilterListProps>>();
    const argsOnCollapsedChange = args.onCollapsedChange;
    const handleCollapsedChange = useCallback(
      (collapsed: boolean) => {
        updateArgs({ collapsed });
        argsOnCollapsedChange?.(collapsed);
      },
      [updateArgs, argsOnCollapsedChange]
    );
    return (
      <FullFeaturedStory {...args} onCollapsedChange={handleCollapsedChange} />
    );
  },
};

function WithLinkedPropertyFiltersStory(
  args: Partial<EmployeeFilterListProps>
) {
  const client = useOsdkClient();
  const objectSet = useMemo(() => client(Employee), [client]);
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "HAS_LINK",
        linkName: "lead",
        label: "Has Manager",
        filterState: { type: "hasLink", hasLink: false },
      },
      {
        type: "LINKED_PROPERTY",
        linkName: "lead",
        reverseLinkName: "peeps",
        linkedPropertyKey: "department",
        linkedFilterComponent: "MULTI_SELECT",
        linkedFilterState: { type: "SELECT", selectedValues: [] },
        filterState: {
          type: "linkedProperty",
          linkedFilterState: { type: "SELECT", selectedValues: [] },
        },
        label: "Manager Department",
      } as FilterDefinitionUnion<Employee>,
    ],
    []
  );

  const argsOnFilterClauseChanged = args.onFilterClauseChanged;
  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
      argsOnFilterClauseChanged?.(clause);
    },
    [argsOnFilterClauseChanged]
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          objectSet={objectSet}
          filterDefinitions={filterDefinitions}
          {...args}
          filterClause={filterClause}
          onFilterClauseChanged={handleFilterClauseChanged}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <strong>Filter Clause (JSON):</strong>
        <p>Note: LINKED_PROPERTY filter is not applied through where clause</p>
        <pre style={PRE_STYLE}>
          {filterClause
            ? JSON.stringify(filterClause, null, 2)
            : "(no active filters)"}
        </pre>
      </div>
    </div>
  );
}

export const WithLinkedPropertyFilters: Story = {
  name: "Linked Property Filters",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates filtering on properties of linked objects. " +
          "HAS_LINK filters objects based on whether they have a linked object. " +
          "LINKED_PROPERTY filters on a property of the linked object and " +
          "exposes the same overflow (…) controls as direct property filters — " +
          "the inline Keeping/Excluding dropdown and Clear all.",
      },
      source: {
        code: `// HAS_LINK and LINKED_PROPERTY filter definitions
const filterDefinitions = [
  {
    type: "HAS_LINK",
    linkName: "lead",
    label: "Has Manager",
    filterState: { type: "hasLink", hasLink: false },
  },
  {
    type: "LINKED_PROPERTY",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "department",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    label: "Manager Department",
  },
];

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`,
      },
    },
  },
  render: (args) => <WithLinkedPropertyFiltersStory {...args} />,
};

// ---------------------------------------------------------------------------
// Combined linked + direct filters with dual-objectSet zero-count rendering
// ---------------------------------------------------------------------------

const combinedDepartmentFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "combined-department",
  key: "department",
  label: "Department",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
};

const combinedLocationCityFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "combined-locationCity",
  key: "locationCity",
  label: "Location City",
  filterComponent: "MULTI_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const combinedLeadNameFilter: FilterDefinitionUnion<Employee> = {
  type: "LINKED_PROPERTY",
  id: "combined-lead-name",
  linkName: "lead",
  reverseLinkName: "peeps",
  linkedPropertyKey: "fullName",
  linkedFilterComponent: "MULTI_SELECT",
  linkedFilterState: { type: "SELECT", selectedValues: [] },
  filterState: {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
  },
  searchField: false,
  label: "Manager Name",
} as FilterDefinitionUnion<Employee>;

const COMBINED_LINKED_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  combinedLeadNameFilter,
  combinedDepartmentFilter,
  combinedLocationCityFilter,
];

type CombinedTableRdps = { managerName: "string" };

// Surface the linked "Manager Name" in the table via a derived-property column
// (pivotTo("lead").selectProperty("fullName")) so the active linked filter's
// effect on the rows is visible alongside the direct properties.
const COMBINED_TABLE_COLUMNS: ColumnDefinition<Employee, CombinedTableRdps>[] =
  [
    { locator: { type: "property", id: "fullName" } },
    { locator: { type: "property", id: "department" } },
    { locator: { type: "property", id: "locationCity" } },
    {
      locator: {
        type: "rdp",
        id: "managerName",
        creator: (baseObjectSet: DerivedProperty.Builder<Employee, false>) =>
          baseObjectSet.pivotTo("lead").selectProperty("fullName"),
      },
      renderHeader: () => "Manager Name",
      renderCell: (object: Osdk.Instance<Employee>) => {
        if ("managerName" in object) {
          return <span>{object.managerName as string}</span>;
        }
        return <span style={{ color: "#999" }}>No Manager</span>;
      },
    },
  ];

function CombinedWithObjectTableStory(args: Partial<EmployeeFilterListProps>) {
  const client = useOsdkClient();
  const baseObjectSet = useMemo(() => client(Employee), [client]);

  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);
  const [effectiveObjectSet, setEffectiveObjectSet] =
    useState<ObjectSet<Employee>>(baseObjectSet);

  const argsOnFilterClauseChanged = args.onFilterClauseChanged;
  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
      argsOnFilterClauseChanged?.(clause);
    },
    [argsOnFilterClauseChanged]
  );

  return (
    <div style={COMBINED_LAYOUT_STYLE}>
      <div style={SIDEBAR_FIXED_STYLE}>
        <FilterList
          {...args}
          objectType={Employee}
          objectSet={baseObjectSet}
          filterDefinitions={COMBINED_LINKED_FILTER_DEFINITIONS}
          filterClause={filterClause}
          onFilterClauseChanged={handleFilterClauseChanged}
          onEffectiveObjectSet={setEffectiveObjectSet}
          showFilteredOutValues={true}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <ObjectTable
          objectType={Employee}
          objectSet={effectiveObjectSet}
          columnDefinitions={COMBINED_TABLE_COLUMNS}
        />
      </div>
    </div>
  );
}

export const CombinedWithObjectTable: Story = {
  name: "Combined with Object Table",
  parameters: {
    docs: {
      description: {
        story:
          "A linked filter (Manager Name) and direct property filters coexist in " +
          "one FilterList alongside an ObjectTable. Pass the unfiltered scope as " +
          "`objectSet`; FilterList applies the linked-filter narrowing internally " +
          "and emits the fully-narrowed `ObjectSet` via `onEffectiveObjectSet` for " +
          "the table. The table surfaces the linked manager via a derived-property " +
          '`Manager Name` column (`pivotTo("lead").selectProperty("fullName")`). ' +
          "With `showFilteredOutValues`, direct-facet values absent under the " +
          "active linked filter render as greyed-out count=0 filtered-out rows.",
      },
      source: {
        code: `const baseObjectSet = useMemo(() => client(Employee), [client]);
const [effectiveObjectSet, setEffectiveObjectSet] = useState(baseObjectSet);

const filterDefinitions: FilterDefinitionUnion<Employee>[] = [
  {
    type: "LINKED_PROPERTY",
    id: "combined-lead-name",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "fullName",
    linkedFilterComponent: "MULTI_SELECT",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
    filterState: {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: [] },
    },
    searchField: false,
    label: "Manager Name",
  },
  {
    type: "PROPERTY",
    id: "combined-department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "combined-locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "MULTI_SELECT",
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

type RDPs = { managerName: "string" };
const columnDefinitions: ColumnDefinition<Employee, RDPs>[] = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  { locator: { type: "property", id: "locationCity" } },
  {
    locator: {
      type: "rdp",
      id: "managerName",
      creator: (baseObjectSet) =>
        baseObjectSet.pivotTo("lead").selectProperty("fullName"),
    },
    renderHeader: () => "Manager Name",
    renderCell: (object) =>
      "managerName" in object
        ? <span>{object.managerName}</span>
        : <span style={{ color: "#999" }}>No Manager</span>,
  },
];

<FilterList
  objectType={Employee}
  objectSet={baseObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
  onEffectiveObjectSet={setEffectiveObjectSet}
  showFilteredOutValues
/>
<ObjectTable
  objectType={Employee}
  objectSet={effectiveObjectSet}
  columnDefinitions={columnDefinitions}
/>`,
      },
    },
  },
  render: (args) => <CombinedWithObjectTableStory {...args} />,
};

function CustomNameContainsFilter({
  filterState,
  onFilterStateChanged,
}: {
  filterState: { type: "custom"; customState: { value: string } };
  onFilterStateChanged: (state: {
    type: "custom";
    customState: { value: string };
  }) => void;
}) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onFilterStateChanged({
        type: "custom",
        customState: { value },
      });
    },
    [onFilterStateChanged]
  );

  const handleClear = useCallback(() => {
    onFilterStateChanged({
      type: "custom",
      customState: { value: "" },
    });
  }, [onFilterStateChanged]);

  return (
    <div style={{ padding: "12px 0", display: "flex", gap: "8px" }}>
      <input
        type="text"
        value={filterState.customState.value}
        onChange={handleChange}
        placeholder="Enter name substring..."
        style={{
          flex: 1,
          padding: "6px 8px",
          fontSize: "14px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {filterState.customState.value && (
        <button
          onClick={handleClear}
          style={{
            padding: "6px 12px",
            fontSize: "12px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
}

function WithCustomFiltersStory(args: Partial<EmployeeFilterListProps>) {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "CUSTOM",
        key: "custom-name-contains",
        label: "Name Contains",
        filterComponent: "CUSTOM",
        filterState: { type: "custom", customState: { value: "" } },
        renderInput: ({ filterState, onFilterStateChanged }) => (
          <CustomNameContainsFilter
            filterState={
              filterState as {
                type: "custom";
                customState: { value: string };
              }
            }
            onFilterStateChanged={onFilterStateChanged}
          />
        ),
        toWhereClause: (state) => {
          const value = (state.customState as { value?: string })?.value;
          if (!value) return undefined;
          return {
            fullName: { $containsAnyTerm: value },
          };
        },
      },
    ],
    []
  );

  const argsOnFilterClauseChanged = args.onFilterClauseChanged;
  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
      argsOnFilterClauseChanged?.(clause);
    },
    [argsOnFilterClauseChanged]
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          {...args}
          filterClause={filterClause}
          onFilterClauseChanged={handleFilterClauseChanged}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <strong>Filter Clause (JSON):</strong>
        <pre style={PRE_STYLE}>
          {filterClause
            ? JSON.stringify(filterClause, null, 2)
            : "(no active filters)"}
        </pre>
      </div>
    </div>
  );
}

export const WithCustomFilters: Story = {
  name: "Custom Filters",
  parameters: {
    docs: {
      description: {
        story:
          "Custom filters provide full control over filtering logic and UI. " +
          "The 'Name Contains' filter uses `renderInput` for a simple custom input. ",
      },
      source: {
        code: `// Custom filter with renderInput
const nameContainsFilter = {
  type: "CUSTOM",
  key: "custom-name-contains",
  label: "Name Contains",
  filterComponent: "CUSTOM",
  filterState: { type: "custom", customState: { value: "" } },
  renderInput: ({ filterState, onFilterStateChanged }) => (
    <input
      type="text"
      value={filterState.customState.value}
      onChange={(e) =>
        onFilterStateChanged({
          type: "custom",
          customState: { value: e.target.value },
        })
      }
      placeholder="Enter name substring..."
    />
  ),
  toWhereClause: (state) => {
    const value = state.customState.value;
    if (!value) return undefined;
    return { fullName: { $containsAnyTerm: value } };
  },
};

<FilterList
  objectType={Employee}
  filterDefinitions={[nameContainsFilter]}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>`,
      },
    },
  },
  render: (args) => <WithCustomFiltersStory {...args} />,
};

const departmentMultiSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department-multi",
  key: "department",
  label: "Department",
  filterComponent: "MULTI_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const departmentSingleSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department-single",
  key: "department",
  label: "Department (single)",
  filterComponent: "SINGLE_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const NO_VALUE_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  departmentFilter,
  departmentMultiSelectFilter,
  departmentSingleSelectFilter,
  employeeNumberFilter,
];

export const NoValueRendering: Story = {
  name: "No value rendering",
  parameters: {
    docs: {
      description: {
        story:
          "Empty/null filter values render via the canonical `<NoValueLabel />` " +
          "component — italic, muted, with the literal text 'No value' — across " +
          "listogram buckets, single-select dropdown options, multi-select dropdown " +
          "options, and multi-select chips. The mock dataset includes one Employee " +
          'with `department: ""` so the No value row is visible in the listogram.',
      },
    },
  },
  render: () => (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={NO_VALUE_FILTER_DEFINITIONS}
      />
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Hydrating saved filter state via initialFilterStates
// ---------------------------------------------------------------------------

const locationCitySingleSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "locationCity-single",
  key: "locationCity",
  label: "Location City (single)",
  filterComponent: "SINGLE_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const linkedDepartmentMultiSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "LINKED_PROPERTY",
  linkName: "lead",
  reverseLinkName: "peeps",
  linkedPropertyKey: "department",
  linkedFilterComponent: "MULTI_SELECT",
  linkedFilterState: { type: "SELECT", selectedValues: [] },
  filterState: {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
  },
  label: "Manager Department (linked multi)",
} as FilterDefinitionUnion<Employee>;

const linkedCitySingleSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "LINKED_PROPERTY",
  linkName: "lead",
  reverseLinkName: "peeps",
  linkedPropertyKey: "locationCity",
  linkedFilterComponent: "SINGLE_SELECT",
  linkedFilterState: { type: "SELECT", selectedValues: [] },
  filterState: {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: [] },
  },
  label: "Manager City (linked single)",
} as FilterDefinitionUnion<Employee>;

const SAVED_FILTER_STATES = new Map<string, FilterState>([
  // "Research", "Chief Scientist", and "Berlin" are NOT in the mock employee
  // dataset — they simulate saved selections that currently have zero matching
  // rows. Each filter type still renders them so users can see and clear them.
  // Note: filtered-out values in one filter cascade into other filters'
  // aggregation queries, so all counts show 0. This is a known limitation
  // tracked separately.
  ["department", { type: "EXACT_MATCH", values: ["Marketing", "Research"] }],
  [
    "jobTitle-multi",
    {
      type: "SELECT",
      selectedValues: ["Marketing Manager", "Chief Scientist"],
    },
  ],
  ["locationCity-single", { type: "SELECT", selectedValues: ["Berlin"] }],
  // Linked property filters — filtered-out values are merged via
  // mergeAggregationValues in LinkedMultiSelectInput, LinkedSingleSelectInput,
  // and LinkedListogramInput.
  [
    "linkedProperty:lead:department",
    {
      type: "linkedProperty",
      linkedFilterState: {
        type: "SELECT",
        selectedValues: ["Marketing", "Research"],
      },
    },
  ],
  [
    "linkedProperty:lead:locationCity",
    {
      type: "linkedProperty",
      linkedFilterState: { type: "SELECT", selectedValues: ["Berlin"] },
    },
  ],
]);

const INITIAL_STATE_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  departmentFilter,
  jobTitleMultiSelectFilter,
  locationCitySingleSelectFilter,
  linkedDepartmentMultiSelectFilter,
  linkedCitySingleSelectFilter,
];

function WithInitialFilterStatesStory(args: Partial<EmployeeFilterListProps>) {
  const client = useOsdkClient();
  // Linked property filters require an objectSet to call pivotTo() on.
  const objectSet = useMemo(() => client(Employee), [client]);

  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  const handleFilterClauseChanged = useCallback(
    (clause: WhereClause<Employee>) => {
      setFilterClause(clause);
    },
    []
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          {...args}
          objectType={Employee}
          objectSet={objectSet}
          filterDefinitions={INITIAL_STATE_FILTER_DEFINITIONS}
          initialFilterStates={SAVED_FILTER_STATES}
          onFilterClauseChanged={handleFilterClauseChanged}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <h4>Active where clause</h4>
        <pre style={PRE_STYLE}>
          {filterClause ? JSON.stringify(filterClause, null, 2) : "(none)"}
        </pre>
      </div>
    </div>
  );
}

export const WithInitialFilterStates: Story = {
  name: "With initial filter states",
  parameters: {
    docs: {
      description: {
        story:
          "Pass `initialFilterStates` to hydrate filters from saved state " +
          "(e.g. localStorage or URL params). Selections are restored on " +
          "mount, including values that currently have zero matching rows " +
          "— they appear with a count of 0 so users can see and clear them. " +
          "Demonstrated across LISTOGRAM, MULTI_SELECT, SINGLE_SELECT, " +
          "and LINKED_PROPERTY filters.",
      },
      source: {
        code: `// "Research", "Chief Scientist", and "Berlin" are not in the current
// dataset — they represent saved selections with zero matching rows
// today. The filter list still shows them so users can see and clear them.
const savedStates = new Map([
  // Direct property filters
  ["department", { type: "EXACT_MATCH", values: ["Marketing", "Research"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Marketing Manager", "Chief Scientist"] }],
  ["locationCity-single", { type: "SELECT", selectedValues: ["Berlin"] }],
  // Linked property filters
  ["linkedProperty:lead:department", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Marketing", "Research"] },
  }],
  ["linkedProperty:lead:locationCity", {
    type: "linkedProperty",
    linkedFilterState: { type: "SELECT", selectedValues: ["Berlin"] },
  }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  onFilterClauseChanged={handleFilterClauseChanged}
/>`,
      },
    },
  },
  render: (args) => <WithInitialFilterStatesStory {...args} />,
};

const RESET_GATE_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  departmentFilter,
  jobTitleMultiSelectFilter,
];

const RESET_GATE_INITIAL_STATES = new Map<string, FilterState>([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  [
    "jobTitle-multi",
    {
      type: "SELECT",
      selectedValues: ["Software Engineer"],
    },
  ],
]);

function serializeFilterStates(states: Map<string, FilterState>): string {
  const sortedKeys = [...states.keys()].sort();
  const obj: Record<string, FilterState> = {};
  for (const key of sortedKeys) {
    const value = states.get(key);
    if (value !== undefined) {
      obj[key] = value;
    }
  }
  return JSON.stringify(obj, null, 2);
}

interface ResetGateMirrorProps {
  initialFilterStates?: Map<string, FilterState>;
  storyArgs: Partial<EmployeeFilterListProps>;
}

function ResetGateMirror({
  initialFilterStates,
  storyArgs,
}: ResetGateMirrorProps) {
  const initialMirror = useMemo<Map<string, FilterState>>(() => {
    const map = new Map<string, FilterState>();
    for (const def of RESET_GATE_DEFINITIONS) {
      if (def.type === "PROPERTY" && def.filterState) {
        map.set(getFilterKey(def), def.filterState);
      }
    }
    if (initialFilterStates) {
      for (const [key, state] of initialFilterStates) {
        map.set(key, state);
      }
    }
    return map;
  }, [initialFilterStates]);

  const [mirror, setMirror] = useState<Map<string, FilterState>>(
    () => new Map(initialMirror)
  );

  const argsOnFilterStateChanged = storyArgs.onFilterStateChanged;
  const handleFilterStateChanged = useCallback(
    (definition: FilterDefinitionUnion<Employee>, newState: FilterState) => {
      setMirror((prev) => {
        const next = new Map(prev);
        next.set(getFilterKey(definition), newState);
        return next;
      });
      argsOnFilterStateChanged?.(definition, newState);
    },
    [argsOnFilterStateChanged]
  );

  const argsOnReset = storyArgs.onReset;
  const handleReset = useCallback(() => {
    setMirror(new Map(initialMirror));
    argsOnReset?.();
  }, [argsOnReset, initialMirror]);

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          {...storyArgs}
          objectType={Employee}
          filterDefinitions={RESET_GATE_DEFINITIONS}
          initialFilterStates={initialFilterStates}
          showResetButton={true}
          onFilterStateChanged={handleFilterStateChanged}
          onReset={handleReset}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <h4>Filter state dump</h4>
        <pre data-testid="filter-state-dump" style={PRE_STYLE}>
          {serializeFilterStates(mirror)}
        </pre>
        <h4>Initial snapshot</h4>
        <pre data-testid="filter-state-initial" style={PRE_STYLE}>
          {serializeFilterStates(initialMirror)}
        </pre>
      </div>
    </div>
  );
}

function WithResetButtonEmptyInitialStory(
  args: Partial<EmployeeFilterListProps>
) {
  return <ResetGateMirror storyArgs={args} />;
}

export const WithResetButtonEmptyInitial: Story = {
  args: {
    showResetButton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Reset button is disabled-by-default until the user diverges from " +
          "the initial (empty string) snapshot. After clicking reset the filter " +
          "state returns to the initial snapshot and the button disables " +
          "itself again.",
      },
      source: {
        code: `<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  showResetButton={true}
/>`,
      },
    },
  },
  render: (args) => <WithResetButtonEmptyInitialStory {...args} />,
};

function WithResetButtonNonEmptyInitialStory(
  args: Partial<EmployeeFilterListProps>
) {
  return (
    <ResetGateMirror
      storyArgs={args}
      initialFilterStates={RESET_GATE_INITIAL_STATES}
    />
  );
}

export const WithResetButtonNonEmptyInitial: Story = {
  args: {
    showResetButton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Reset button stays disabled on mount even though there are active " +
          "selections, because the live filter state matches the initial " +
          "snapshot. Changing a selection enables the button; clicking it " +
          "restores the initial snapshot, not an empty state.",
      },
      source: {
        code: `const savedStates = new Map([
  ["department", { type: "EXACT_MATCH", values: ["Engineering"] }],
  ["jobTitle-multi", { type: "SELECT", selectedValues: ["Software Engineer"] }],
]);

<FilterList
  objectType={Employee}
  filterDefinitions={filterDefinitions}
  initialFilterStates={savedStates}
  showResetButton={true}
/>`,
      },
    },
  },
  render: (args) => <WithResetButtonNonEmptyInitialStory {...args} />,
};
