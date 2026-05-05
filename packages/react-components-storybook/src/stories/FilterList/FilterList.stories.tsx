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
import { useOsdkClient } from "@osdk/react";
import type {
  FilterDefinitionUnion,
  FilterListProps,
  FilterState,
} from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import { useArgs } from "storybook/preview-api";
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
};

const employeeNumberFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "employeeNumber",
  key: "employeeNumber",
  label: "Employee Number",
  filterComponent: "NUMBER_RANGE",
  filterState: { type: "NUMBER_RANGE" },
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
  title: "Experimental/FilterList",
  tags: ["experimental"],
  component: FilterList,
  args: {
    title: "Filters",
    enableSorting: false,
    showResetButton: false,
    showActiveFilterCount: false,
    collapsed: false,
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
    addFilterMode: {
      description:
        "Controls how filter add/remove is managed. \"uncontrolled\" manages visibility internally; \"controlled\" leaves it to the consumer.",
      control: "select",
      options: ["controlled", "uncontrolled"],
      table: {
        category: "Advanced",
        defaultValue: { summary: "\"uncontrolled\"" },
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
      [],
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
    [client],
  );

  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      teamFilter,
      locationCityFilter,
    ],
    [],
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
          "Pass an `objectSet` prop to scope filter aggregations to a subset of objects. "
          + "Here the object set is filtered to Marketing department employees, "
          + "so the listogram counts reflect only that subset.",
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
      { ...fullNameFilter, isVisible: false } as FilterDefinitionUnion<
        Employee
      >,
      { ...startDateFilter, isVisible: false } as FilterDefinitionUnion<
        Employee
      >,
      { ...employeeNumberFilter, isVisible: false } as FilterDefinitionUnion<
        Employee
      >,
      { ...locationCityFilter, isVisible: false } as FilterDefinitionUnion<
        Employee
      >,
    ],
    [],
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

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={sharedFilterDefinitions}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
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
        story: "All filter component types with a controlled where clause. "
          + "Hover filter items to reveal search and exclude actions.",
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
  const handleReset = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Reset clicked");
  }, []);

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={sharedFilterDefinitions}
        onReset={handleReset}
        {...args}
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
  },
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
        story: "Click the collapse button to minimize the filter panel. "
          + "Active filter count is shown in the collapsed state.",
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
    const handleCollapsedChange = useCallback(
      (collapsed: boolean) => updateArgs({ collapsed }),
      [updateArgs],
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
      [],
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
    [],
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
    [],
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
    [],
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
    [],
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
          "Use `renderValue` to customize how filter values are displayed and searched. "
          + "The returned string replaces the raw value for display and search matching. "
          + "Works with LISTOGRAM, MULTI_SELECT, and SINGLE_SELECT components.",
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

function WithListogramDisplayModesStory(
  args: Partial<EmployeeFilterListProps>,
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
    [],
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
    [],
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
    [],
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
    [],
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
    [],
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
          "Use `showCount: false` on individual filter definitions to hide "
          + "aggregation counts in LISTOGRAM and MULTI_SELECT inputs. "
          + "Bar visualizations in LISTOGRAM are preserved.",
      },
      source: {
        code:
          `// showCount defaults to true; set false to hide counts per filter
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
    [],
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
        story: "Listogram rows always include a checkbox for multi-select. "
          + "Selecting values checks the checkbox and highlights the row. "
          + "Use the exclude toggle (three-dot menu) to invert selections.",
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

function CombinedWithObjectTableStory(
  args: Partial<EmployeeFilterListProps>,
) {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  const handleFilterRemoved = useCallback((filterKey: string) => {
    // eslint-disable-next-line no-console
    console.log("Removed filter:", filterKey);
  }, []);

  return (
    <div style={COMBINED_LAYOUT_STYLE}>
      <div style={SIDEBAR_FIXED_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={sharedFilterDefinitions}
          onFilterRemoved={handleFilterRemoved}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <ObjectTable objectType={Employee} filter={filterClause} />
      </div>
    </div>
  );
}

export const CombinedWithObjectTable: Story = {
  args: {
    title: "Employee Filters",
    showResetButton: true,
    showActiveFilterCount: true,
    enableSorting: true,
  },
  parameters: {
    docs: {
      source: {
        code: `const [filterClause, setFilterClause] = useState(undefined);

<div style={{ display: "flex", gap: 16, height: 600 }}>
  <div style={{ width: 320 }}>
    <FilterList
      objectType={Employee}
      filterDefinitions={filterDefinitions}
      title="Employee Filters"
      showResetButton={true}
      showActiveFilterCount={true}
      enableSorting={true}
      onFilterRemoved={handleFilterRemoved}
      filterClause={filterClause}
      onFilterClauseChanged={setFilterClause}
    />
  </div>
  <div style={{ flex: 1 }}>
    <ObjectTable objectType={Employee} filter={filterClause} />
  </div>
</div>`,
      },
    },
  },
  render: (args) => <CombinedWithObjectTableStory {...args} />,
};

function CombinedWithFilteredObjectSetStory(
  args: Partial<EmployeeFilterListProps>,
) {
  const client = useOsdkClient();
  const employeeObjectSet = useMemo(
    () => client(Employee).where({ department: "Marketing" }),
    [client],
  );
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  return (
    <div style={COMBINED_LAYOUT_STYLE}>
      <div style={SIDEBAR_FIXED_STYLE}>
        <FilterList
          objectType={Employee}
          objectSet={employeeObjectSet}
          filterDefinitions={sharedFilterDefinitions}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
        />
      </div>
      <div style={FLEX_FILL_STYLE}>
        <ObjectTable
          objectType={Employee}
          objectSet={employeeObjectSet}
          filter={filterClause}
        />
      </div>
    </div>
  );
}

export const CombinedWithFilteredObjectSet: Story = {
  args: {
    title: "Marketing Employees",
    showResetButton: true,
    showActiveFilterCount: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates using a pre-filtered objectSet to scope both FilterList aggregations "
          + "and ObjectTable data to a subset of employees.",
      },
      source: {
        code: `const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({ department: "Marketing" });

<FilterList
  objectType={Employee}
  objectSet={employeeObjectSet}
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>
<ObjectTable
  objectType={Employee}
  objectSet={employeeObjectSet}
  filter={filterClause}
/>`,
      },
    },
  },
  render: (args) => <CombinedWithFilteredObjectSetStory {...args} />,
};

function WithRemovableFiltersStory(args: Partial<EmployeeFilterListProps>) {
  const [definitions, setDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(sharedFilterDefinitions);

  const handleFilterRemoved = useCallback((filterKey: string) => {
    setDefinitions((prev) =>
      prev.filter((def) => {
        if ("key" in def) {
          return def.key !== filterKey;
        }
        return true;
      })
    );
  }, []);

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={definitions}
        onFilterRemoved={handleFilterRemoved}
        {...args}
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
          "When `onFilterRemoved` is provided, each filter item shows a remove button (X) on hover. "
          + "Clicking it removes the filter from the list.",
      },
      source: {
        code:
          `const [definitions, setDefinitions] = useState(filterDefinitions);

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
    [],
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
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
          "Use `STATIC_VALUES` filter definitions to provide a fixed list of values "
          + "instead of fetching from OSDK aggregation. Supports LISTOGRAM, SINGLE_SELECT, "
          + "MULTI_SELECT, and TEXT_TAGS components. Optionally provide a `toWhereClause` "
          + "function for custom clause generation.",
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
  },
) {
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);
  const [definitions, setDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(sharedFilterDefinitions);

  const handleFilterRemoved = useCallback((filterKey: string) => {
    setDefinitions((prev) =>
      prev.filter((def) => {
        if ("key" in def) {
          return def.key !== filterKey;
        }
        return true;
      })
    );
  }, []);

  const handleReset = useCallback(() => {
    setDefinitions(sharedFilterDefinitions);
  }, []);

  return (
    <div style={COMBINED_LAYOUT_STYLE}>
      <div style={SIDEBAR_FIXED_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={definitions}
          titleIcon={FILTER_ICON}
          onReset={handleReset}
          onFilterRemoved={handleFilterRemoved}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
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
          "Demonstrates all filter list features together: collapse, reset, active count, sorting, "
          + "removable filters, per-filter search, exclude toggle, and controlled where clause "
          + "driving an ObjectTable.",
      },
      source: {
        code:
          `// All features combined: collapse, sort, search, exclude, remove, reset

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
    const handleCollapsedChange = useCallback(
      (collapsed: boolean) => updateArgs({ collapsed }),
      [updateArgs],
    );
    return (
      <FullFeaturedStory {...args} onCollapsedChange={handleCollapsedChange} />
    );
  },
};

function WithLinkedPropertyFiltersStory(
  args: Partial<EmployeeFilterListProps>,
) {
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
    ],
    [],
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
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

export const WithHasLinkFilter: Story = {
  name: "Linked Property Filters",
  parameters: {
    docs: {
      description: {
        story: "Demonstrates filtering on properties of linked objects. "
          + "HAS_LINK filters objects based on whether they have a linked object. ",
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

function CustomNameContainsFilter({
  filterState,
  onFilterStateChanged,
}: {
  filterState: { type: "custom"; customState: { value: string } };
  onFilterStateChanged: (
    state: { type: "custom"; customState: { value: string } },
  ) => void;
}) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onFilterStateChanged({
        type: "custom",
        customState: { value },
      });
    },
    [onFilterStateChanged],
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

function CustomSeniorOnlyFilterItem({
  filterState,
  onFilterStateChanged,
}: {
  filterState: { type: "custom"; customState: { seniorOnly: boolean } };
  onFilterStateChanged: (
    state: { type: "custom"; customState: { seniorOnly: boolean } },
  ) => void;
}) {
  const handleToggle = useCallback(() => {
    onFilterStateChanged({
      type: "custom",
      customState: {
        seniorOnly: !filterState.customState.seniorOnly,
      },
    });
  }, [filterState, onFilterStateChanged]);

  const isEnabled = filterState.customState.seniorOnly;

  return (
    <div
      style={{
        padding: "12px",
        backgroundColor: isEnabled ? "#e8f4f8" : "#fafafa",
        border: `2px solid ${isEnabled ? "#0066cc" : "#ddd"}`,
        borderRadius: "6px",
        cursor: "pointer",
      }}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "6px",
        }}
      >
        <input
          type="checkbox"
          checked={isEnabled}
          onChange={() => {}}
          style={{ cursor: "pointer" }}
        />
        <strong>Senior Only</strong>
      </div>
      <p
        style={{
          margin: "0",
          fontSize: "12px",
          color: "#666",
          lineHeight: "1.4",
        }}
      >
        Show only employees with "Senior" in their job title
      </p>
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
            filterState={filterState as {
              type: "custom";
              customState: { value: string };
            }}
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
    [],
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectType={Employee}
          filterDefinitions={filterDefinitions}
          filterClause={filterClause}
          onFilterClauseChanged={setFilterClause}
          {...args}
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
          "Custom filters provide full control over filtering logic and UI. "
          + "The 'Name Contains' filter uses `renderInput` for a simple custom input. ",
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
          "Empty/null filter values render via the canonical `<NoValueLabel />` "
          + "component — italic, muted, with the literal text 'No value' — across "
          + "listogram buckets, single-select dropdown options, multi-select dropdown "
          + "options, and multi-select chips. The mock dataset includes one Employee "
          + "with `department: \"\"` so the No value row is visible in the listogram.",
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

const LONG_DROPDOWN_VALUES = Array.from(
  { length: 100 },
  (_, i) => `Option ${String(i + 1).padStart(3, "0")}`,
);

const LONG_DROPDOWN_FILTERS: FilterDefinitionUnion<Employee>[] = [
  {
    type: "STATIC_VALUES",
    key: "department",
    label: "Long single-select",
    filterComponent: "SINGLE_SELECT",
    values: LONG_DROPDOWN_VALUES,
    filterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "STATIC_VALUES",
    key: "team",
    label: "Long multi-select",
    filterComponent: "MULTI_SELECT",
    values: LONG_DROPDOWN_VALUES,
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

export const LongDropdown: Story = {
  name: "Long dropdown (popup max-height)",
  parameters: {
    docs: {
      description: {
        story: "Combobox popup is capped at 320px (configurable via "
          + "`--osdk-combobox-popup-max-height`). With 100 options, the popup "
          + "becomes scrollable instead of growing tall enough to push other "
          + "UI off-screen. When the available browser height is less than "
          + "320px, the cap is lowered automatically because the rule "
          + "resolves to `min(320px, var(--available-height))`.",
      },
    },
  },
  render: () => (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={LONG_DROPDOWN_FILTERS}
      />
    </div>
  ),
};

const slashDate = (d: Date): string =>
  `${String(d.getMonth() + 1).padStart(2, "0")}/${
    String(d.getDate()).padStart(2, "0")
  }/${d.getFullYear()}`;

const slashDateParse = (text: string): Date | undefined => {
  const match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return undefined;
  return new Date(
    Number(match[3]),
    Number(match[1]) - 1,
    Number(match[2]),
  );
};

const FORMAT_DATE_FILTERS: FilterDefinitionUnion<Employee>[] = [
  {
    type: "PROPERTY",
    id: "startDate-range",
    key: "firstFullTimeStartDate",
    label: "Start date (range)",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
    formatDate: slashDate,
    parseDate: slashDateParse,
  },
  {
    type: "PROPERTY",
    id: "startDate-multi",
    key: "firstFullTimeStartDate",
    label: "Start date (multi)",
    filterComponent: "MULTI_DATE",
    filterState: {
      type: "SELECT",
      selectedValues: [new Date(2020, 4, 1), new Date(2021, 8, 15)],
    },
    formatDate: slashDate,
    parseDate: slashDateParse,
  },
  {
    type: "PROPERTY",
    id: "startDate-timeline",
    key: "firstFullTimeStartDate",
    label: "Start date (timeline)",
    filterComponent: "TIMELINE",
    filterState: {
      type: "TIMELINE",
      startDate: new Date(2020, 0, 1),
      endDate: new Date(2024, 11, 31),
    },
    formatDate: slashDate,
    parseDate: slashDateParse,
  },
];

export const FormatDate: Story = {
  name: "Per-property formatDate",
  parameters: {
    docs: {
      description: {
        story: "Date-typed property filter definitions accept optional "
          + "`formatDate` and `parseDate` callbacks (see `PropertyFilterDateExtras`). "
          + "When provided, `formatDate` is used for the date-range histogram "
          + "tooltip, multi-date chip text, and timeline labels. The HTML "
          + "`<input type=\"date\">` value attribute is unaffected and always "
          + "uses ISO `YYYY-MM-DD`. `parseDate` is plumbed through for "
          + "completeness; the built-in HTML date inputs do not invoke it.",
      },
    },
  },
  render: () => (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectType={Employee}
        filterDefinitions={FORMAT_DATE_FILTERS}
      />
    </div>
  ),
};
