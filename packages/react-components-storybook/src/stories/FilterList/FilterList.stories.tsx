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
import { FilterList } from "@osdk/react-components/experimental";
import type {
  FilterListProps,
  PropertyFilterDefinition,
} from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useMemo, useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

// Create a concrete type for Storybook to parse more easily
type EmployeeFilterListProps = FilterListProps<typeof Employee>;

const meta: Meta<EmployeeFilterListProps> = {
  title: "Components/FilterList",
  component: FilterList,
  parameters: {
    msw: {
      handlers: [...fauxFoundry.handlers],
    },
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story) => (
      <div className="story-container">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    objectSet: {
      description:
        "The ObjectSet to filter. Created from the OSDK client, e.g. `client(Employee)`.",
      control: false,
    },
    title: {
      description: "Optional title to display in the filter list header.",
      control: "text",
    },
    titleIcon: {
      description: "Optional icon to display next to the title.",
      control: false,
    },
    filterDefinitions: {
      description:
        "The definition for all supported filter items in the list. If not supplied, all filterable properties will be available.",
      control: "object",
    },
    filterClause: {
      description:
        "The current where clause to filter the objectSet. If provided, the filter clause is controlled.",
      control: "object",
    },
    onFilterClauseChanged: {
      description:
        "Called when the filter clause changes. Required in controlled mode.",
      control: false,
      table: {
        category: "Events",
      },
    },
    filterOperator: {
      description: "The logical operator to join multiple filters.",
      control: { type: "select" },
      options: ["and", "or"],
      table: {
        defaultValue: { summary: "\"and\"" },
      },
    },
    onFilterStateChanged: {
      description: "Called when filter state changes.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onFilterAdded: {
      description:
        "Called when a filter is added. If provided, user will be allowed to add filters.",
      control: false,
      table: {
        category: "Events",
      },
    },
    onFilterRemoved: {
      description:
        "Called when a filter is removed. If provided, user will be allowed to remove filters.",
      control: false,
      table: {
        category: "Events",
      },
    },
    showResetButton: {
      description: "Show reset filters button in header.",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onReset: {
      description: "Called when reset button is clicked.",
      control: false,
      table: {
        category: "Events",
      },
    },
    filterTemplates: {
      description:
        "Available filter templates for the \"Add filter\" menu. When provided along with onFilterAdded, clicking the add button shows a popover with these templates organized by category.",
      control: false,
    },
    onFilterTemplateSelected: {
      description:
        "Called when a filter template is selected from the add filter menu.",
      control: false,
      table: {
        category: "Events",
      },
    },
    showActiveFilterCount: {
      description: "Show count of active filters in header.",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    className: {
      description: "Additional CSS class name.",
      control: "text",
    },
    renderAddFilterButton: {
      description:
        "Custom render function for the \"Add filter\" button. When not provided, a default button is shown if onFilterAdded is set.",
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Helper component that creates an objectSet from the OSDK client
 * and passes it through to FilterList.
 */
function FilterListWithObjectSet(
  props: Omit<EmployeeFilterListProps, "objectSet">,
) {
  const client = useOsdkClient();
  const objectSet = useMemo(() => client(Employee), [client]);
  return <FilterList {...props} objectSet={objectSet} />;
}

// -- Filter definitions for use in stories --

const textSearchFilters: PropertyFilterDefinition<typeof Employee>[] = [
  {
    type: "PROPERTY",
    key: "fullName",
    label: "Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "emailPrimaryWork",
    label: "Email",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
];

const dateRangeFilters: PropertyFilterDefinition<typeof Employee>[] = [
  {
    type: "PROPERTY",
    key: "firstFullTimeStartDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
];

const numberRangeFilters: PropertyFilterDefinition<typeof Employee>[] = [
  {
    type: "PROPERTY",
    key: "employeeNumber",
    label: "Employee Number",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  },
];

const mixedFilters: PropertyFilterDefinition<typeof Employee>[] = [
  {
    type: "PROPERTY",
    key: "fullName",
    label: "Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "firstFullTimeStartDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
  {
    type: "PROPERTY",
    key: "employeeNumber",
    label: "Employee #",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  },
];

/**
 * Default FilterList with text search filters.
 * Demonstrates basic uncontrolled usage with property-based filters.
 */
export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { FilterList } from "@osdk/react-components/experimental";

const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "fullName",
    label: "Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "emailPrimaryWork",
    label: "Email",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
];

<FilterList
  objectSet={client(Employee)}
  filterDefinitions={filterDefinitions}
/>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 320, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <FilterListWithObjectSet
        filterDefinitions={textSearchFilters}
      />
    </div>
  ),
};

/**
 * FilterList with a title and reset button.
 * Shows the header with title, active filter count, and reset functionality.
 */
export const WithTitleAndReset: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectSet={client(Employee)}
  title="Filters"
  showResetButton
  showActiveFilterCount
  filterDefinitions={filterDefinitions}
  onReset={() => console.log("Reset clicked")}
/>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 320, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <FilterListWithObjectSet
        title="Filters"
        showResetButton
        showActiveFilterCount
        filterDefinitions={textSearchFilters}
      />
    </div>
  ),
};

/**
 * FilterList with a mix of different filter types.
 * Demonstrates using text search, date range, and number range filters together.
 */
export const MixedFilterTypes: Story = {
  parameters: {
    docs: {
      source: {
        code: `const filterDefinitions = [
  {
    type: "PROPERTY",
    key: "fullName",
    label: "Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "department",
    label: "Department",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "firstFullTimeStartDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
  {
    type: "PROPERTY",
    key: "employeeNumber",
    label: "Employee #",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  },
];

<FilterList
  objectSet={client(Employee)}
  title="Employee Filters"
  showResetButton
  showActiveFilterCount
  filterDefinitions={filterDefinitions}
/>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 320, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <FilterListWithObjectSet
        title="Employee Filters"
        showResetButton
        showActiveFilterCount
        filterDefinitions={mixedFilters}
      />
    </div>
  ),
};

/**
 * FilterList with date range filters.
 * Demonstrates filtering by date properties.
 */
export const DateRangeFilter: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectSet={client(Employee)}
  title="By Start Date"
  filterDefinitions={[{
    type: "PROPERTY",
    key: "firstFullTimeStartDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  }]}
/>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 320, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <FilterListWithObjectSet
        title="By Start Date"
        filterDefinitions={dateRangeFilters}
      />
    </div>
  ),
};

/**
 * FilterList with number range filters.
 * Demonstrates filtering by numeric properties with min/max range inputs.
 */
export const NumberRangeFilter: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectSet={client(Employee)}
  title="By Employee Number"
  filterDefinitions={[{
    type: "PROPERTY",
    key: "employeeNumber",
    label: "Employee Number",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  }]}
/>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 320, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <FilterListWithObjectSet
        title="By Employee Number"
        filterDefinitions={numberRangeFilters}
      />
    </div>
  ),
};

/**
 * Controlled FilterList that exposes the where clause to the parent.
 * Shows how to use the `filterClause` and `onFilterClauseChanged` props
 * to control the filter state externally.
 */
export const ControlledFilterClause: Story = {
  parameters: {
    docs: {
      source: {
        code:
          `const [filterClause, setFilterClause] = useState<WhereClause<typeof Employee>>();

<FilterList
  objectSet={client(Employee)}
  title="Controlled Filters"
  showResetButton
  showActiveFilterCount
  filterDefinitions={filterDefinitions}
  filterClause={filterClause}
  onFilterClauseChanged={setFilterClause}
/>

{/* Use filterClause to filter an ObjectTable or other component */}`,
      },
    },
  },
  render: () => {
    const [filterClause, setFilterClause] = useState<
      WhereClause<typeof Employee> | undefined
    >();

    return (
      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            width: 320,
            border: "1px solid #e5e7eb",
            borderRadius: 8,
          }}
        >
          <FilterListWithObjectSet
            title="Controlled Filters"
            showResetButton
            showActiveFilterCount
            filterDefinitions={mixedFilters}
            filterClause={filterClause}
            onFilterClauseChanged={setFilterClause}
          />
        </div>
        <div style={{ flex: 1 }}>
          <strong>Current Where Clause:</strong>
          <pre
            style={{
              background: "#f3f4f6",
              padding: 12,
              borderRadius: 8,
              fontSize: 12,
              overflow: "auto",
              maxHeight: 300,
            }}
          >
            {filterClause
              ? JSON.stringify(filterClause, null, 2)
              : "No active filters"}
          </pre>
        </div>
      </div>
    );
  },
};

/**
 * FilterList using the OR operator to combine filters.
 * By default, multiple filters are combined with AND.
 * Set `filterOperator="or"` to combine them with OR instead.
 */
export const OrFilterOperator: Story = {
  parameters: {
    docs: {
      source: {
        code: `<FilterList
  objectSet={client(Employee)}
  title="OR Filters"
  filterOperator="or"
  showActiveFilterCount
  filterDefinitions={filterDefinitions}
/>`,
      },
    },
  },
  render: () => (
    <div style={{ width: 320, border: "1px solid #e5e7eb", borderRadius: 8 }}>
      <FilterListWithObjectSet
        title="OR Filters"
        filterOperator="or"
        showActiveFilterCount
        filterDefinitions={textSearchFilters}
      />
    </div>
  ),
};
