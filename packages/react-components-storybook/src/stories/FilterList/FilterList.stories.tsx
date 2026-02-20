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
import { BaseFilterList } from "@osdk/react-components/experimental";
import type {
  BaseFilterListProps,
  FilterDefinitionUnion,
} from "@osdk/react-components/experimental";
import { useOsdkClient } from "@osdk/react/experimental";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemo, useState } from "react";
import { fauxFoundry } from "../../mocks/fauxFoundry.js";
import { Employee } from "../../types/Employee.js";

const handlers = [...fauxFoundry.handlers];

type EmployeeFilterListProps = BaseFilterListProps<typeof Employee>;

const meta: Meta<EmployeeFilterListProps> = {
  title: "Components/FilterList",
  component: BaseFilterList,
  parameters: {
    msw: {
      handlers,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", maxWidth: 360 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

function FilterListWithObjectSet({
  filterDefinitions,
  title,
  showResetButton,
  showActiveFilterCount,
  onFilterClauseChanged,
  ...rest
}: Omit<EmployeeFilterListProps, "objectSet"> & {
  onFilterClauseChanged?: (clause: WhereClause<typeof Employee>) => void;
}) {
  const client = useOsdkClient();
  const objectSet = useMemo(() => client(Employee), [client]);

  return (
    <BaseFilterList
      objectSet={objectSet}
      filterDefinitions={filterDefinitions}
      title={title}
      showResetButton={showResetButton}
      showActiveFilterCount={showActiveFilterCount}
      onFilterClauseChanged={onFilterClauseChanged}
      {...rest}
    />
  );
}

const textFilters: Array<FilterDefinitionUnion<typeof Employee>> = [
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
    key: "jobTitle",
    label: "Job Title",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    key: "locationCity",
    label: "City",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
];

export const Default: Story = {
  render: () => (
    <FilterListWithObjectSet
      title="Filters"
      filterDefinitions={textFilters}
      showResetButton
      showActiveFilterCount
    />
  ),
};

const mixedFilters: Array<FilterDefinitionUnion<typeof Employee>> = [
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
    filterComponent: "SINGLE_DATE",
    filterState: { type: "SELECT", selectedValues: [] },
  },
];

export const WithDateFilter: Story = {
  render: () => (
    <FilterListWithObjectSet
      title="Employee Filters"
      filterDefinitions={mixedFilters}
      showResetButton
      showActiveFilterCount
    />
  ),
};

export const WithKeywordSearch: Story = {
  render: () => {
    const filters: Array<FilterDefinitionUnion<typeof Employee>> = [
      {
        type: "KEYWORD_SEARCH",
        label: "Search employees",
        defaultFilterState: {
          type: "keywordSearch",
          searchTerm: "",
          operator: "AND",
        },
      },
      ...textFilters.slice(1),
    ];

    return (
      <FilterListWithObjectSet
        title="Search & Filter"
        filterDefinitions={filters}
        showResetButton
        showActiveFilterCount
      />
    );
  },
};

export const ControlledFilterClause: Story = {
  render: () => {
    const [clause, setClause] = useState<WhereClause<typeof Employee>>({});

    return (
      <div>
        <FilterListWithObjectSet
          title="Controlled Filters"
          filterDefinitions={textFilters}
          showResetButton
          showActiveFilterCount
          onFilterClauseChanged={setClause}
        />
        <pre
          style={{
            marginTop: 16,
            padding: 12,
            background: "#f5f5f5",
            borderRadius: 4,
            fontSize: 12,
            overflow: "auto",
          }}
        >
          {JSON.stringify(clause, null, 2)}
        </pre>
      </div>
    );
  },
};

export const NoHeader: Story = {
  render: () => (
    <FilterListWithObjectSet
      filterDefinitions={textFilters.slice(0, 2)}
    />
  ),
};
