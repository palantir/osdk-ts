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
import { FilterList, ObjectTable } from "@osdk/react-components/experimental";
import type {
  FilterDefinitionUnion,
  FilterListProps,
} from "@osdk/react-components/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCallback, useMemo, useState } from "react";
import { useArgs } from "storybook/preview-api";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

type EmployeeFilterListProps = FilterListProps<typeof Employee>;

function useEmployeeObjectSet() {
  const client = useOsdkClient();
  return useMemo(() => client(Employee), [client]);
}

const departmentFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department",
  key: "department",
  label: "Department",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
} as FilterDefinitionUnion<Employee>;

const teamFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "team",
  key: "team",
  label: "Team",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
} as FilterDefinitionUnion<Employee>;

const fullNameFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "fullName",
  key: "fullName",
  label: "Full Name",
  filterComponent: "CONTAINS_TEXT",
  filterState: { type: "CONTAINS_TEXT" },
} as FilterDefinitionUnion<Employee>;

const startDateFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "firstFullTimeStartDate",
  key: "firstFullTimeStartDate",
  label: "Start Date",
  filterComponent: "DATE_RANGE",
  filterState: { type: "DATE_RANGE" },
} as FilterDefinitionUnion<Employee>;

const employeeNumberFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "employeeNumber",
  key: "employeeNumber",
  label: "Employee Number",
  filterComponent: "NUMBER_RANGE",
  filterState: { type: "NUMBER_RANGE" },
} as FilterDefinitionUnion<Employee>;

const locationCityFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "locationCity",
  key: "locationCity",
  label: "Location City",
  filterComponent: "LISTOGRAM",
  filterState: { type: "EXACT_MATCH", values: [] },
} as FilterDefinitionUnion<Employee>;

const jobTitleMultiSelectFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "jobTitle-multi",
  key: "jobTitle",
  label: "Job Title",
  filterComponent: "MULTI_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
} as FilterDefinitionUnion<Employee>;

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
    objectSet: {
      description: "The object set to filter",
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
  objectSet={client(Employee)}
  filterDefinitions={[
    { type: "PROPERTY", key: "department", label: "Department", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
    { type: "PROPERTY", key: "locationCity", label: "Location City", filterComponent: "LISTOGRAM", filterState: { type: "EXACT_MATCH", values: [] } },
  ]}
/>`,
      },
    },
  },
  render: ({ objectSet: _os, ...args }) => {
    const objectSet = useEmployeeObjectSet();
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
          objectSet={objectSet}
          filterDefinitions={filterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

function AddFilterModeStory(args: Partial<EmployeeFilterListProps>) {
  const objectSet = useEmployeeObjectSet();
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
        objectSet={objectSet}
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
  objectSet={client(Employee)}
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
  const objectSet = useEmployeeObjectSet();
  const [filterClause, setFilterClause] = useState<
    WhereClause<Employee> | undefined
  >(undefined);

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
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
  objectSet={client(Employee)}
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
  objectSet={client(Employee)}
  filterDefinitions={filterDefinitions}
  title="Employee Filters"
  titleIcon={<svg>...</svg>}
/>`,
      },
    },
  },
  render: ({ objectSet: _os, ...args }) => {
    const objectSet = useEmployeeObjectSet();
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
          filterDefinitions={sharedFilterDefinitions}
          titleIcon={FILTER_ICON}
          {...args}
        />
      </div>
    );
  },
};

function WithResetButtonStory(args: Partial<EmployeeFilterListProps>) {
  const objectSet = useEmployeeObjectSet();
  const handleReset = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("Reset clicked");
  }, []);

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectSet={objectSet}
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
  objectSet={client(Employee)}
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
  objectSet={client(Employee)}
  filterDefinitions={filterDefinitions}
  showActiveFilterCount={true}
/>`,
      },
    },
  },
  render: ({ objectSet: _os, ...args }) => {
    const objectSet = useEmployeeObjectSet();
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
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
  objectSet={client(Employee)}
  filterDefinitions={filterDefinitions}
  enableSorting={true}
/>`,
      },
    },
  },
  render: ({ objectSet: _os, ...args }) => {
    const objectSet = useEmployeeObjectSet();
    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
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
  const objectSet = useEmployeeObjectSet();

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectSet={objectSet}
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
  objectSet={client(Employee)}
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

<FilterList objectSet={client(Employee)} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: ({ objectSet: _os, ...args }) => {
    const objectSet = useEmployeeObjectSet();
    const filterDefinitions = useMemo(
      (): FilterDefinitionUnion<Employee>[] => [
        {
          type: "KEYWORD_SEARCH",
          properties: ["fullName", "department", "jobTitle", "locationCity"],
          label: "Search",
        } as FilterDefinitionUnion<Employee>,
        departmentFilter,
        locationCityFilter,
      ],
      [],
    );

    return (
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
          filterDefinitions={filterDefinitions}
          {...args}
        />
      </div>
    );
  },
};

function WithColorMapStory(args: Partial<EmployeeFilterListProps>) {
  const objectSet = useEmployeeObjectSet();
  const withoutColorMap = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-no-color",
        key: "department",
        label: "Department (default colors)",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      } as FilterDefinitionUnion<Employee>,
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
      } as FilterDefinitionUnion<Employee>,
    ],
    [],
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
          filterDefinitions={withoutColorMap}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
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

<FilterList objectSet={client(Employee)} filterDefinitions={filterDefinitions} />`,
      },
    },
  },
  render: (args) => <WithColorMapStory {...args} />,
};

function WithListogramDisplayModesStory(
  args: Partial<EmployeeFilterListProps>,
) {
  const objectSet = useEmployeeObjectSet();
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
      } as FilterDefinitionUnion<Employee>,
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
      } as FilterDefinitionUnion<Employee>,
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
      } as FilterDefinitionUnion<Employee>,
    ],
    [],
  );

  return (
    <div style={FLEX_ROW_STYLE}>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
          filterDefinitions={fullDefs}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
          filterDefinitions={countDefs}
          {...args}
        />
      </div>
      <div style={SIDEBAR_STYLE}>
        <FilterList
          objectSet={objectSet}
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

function WithCheckboxStory(args: Partial<EmployeeFilterListProps>) {
  const objectSet = useEmployeeObjectSet();
  const filterDefinitions = useMemo(
    (): FilterDefinitionUnion<Employee>[] => [
      {
        type: "PROPERTY",
        id: "department-checkbox",
        key: "department",
        label: "Department",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      } as FilterDefinitionUnion<Employee>,
      {
        type: "PROPERTY",
        id: "team-checkbox",
        key: "team",
        label: "Team",
        filterComponent: "LISTOGRAM",
        filterState: { type: "EXACT_MATCH", values: [] },
      } as FilterDefinitionUnion<Employee>,
    ],
    [],
  );

  return (
    <div style={SIDEBAR_STYLE}>
      <FilterList
        objectSet={objectSet}
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
  objectSet={client(Employee)}
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
  const objectSet = useEmployeeObjectSet();
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
          objectSet={objectSet}
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
      objectSet={client(Employee)}
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

function WithRemovableFiltersStory(args: Partial<EmployeeFilterListProps>) {
  const objectSet = useEmployeeObjectSet();
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
        objectSet={objectSet}
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
  objectSet={client(Employee)}
  filterDefinitions={definitions}
  onFilterRemoved={handleFilterRemoved}
  title="Removable Filters"
/>`,
      },
    },
  },
  render: (args) => <WithRemovableFiltersStory {...args} />,
};

function FullFeaturedStory(
  args: Partial<EmployeeFilterListProps> & {
    onCollapsedChange?: (collapsed: boolean) => void;
  },
) {
  const objectSet = useEmployeeObjectSet();
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
          objectSet={objectSet}
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
  objectSet={client(Employee)}
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
