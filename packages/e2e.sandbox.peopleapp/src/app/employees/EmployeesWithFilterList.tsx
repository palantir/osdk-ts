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

import type { WhereClause } from "@osdk/api";
import {
  BaseFilterList,
  type FilterDefinitionUnion,
} from "@osdk/react-components/experimental";
import "@osdk/react-components/styles.css";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useCallback, useState } from "react";

import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

interface EmployeeListItemProps {
  item: Employee.OsdkInstance;
  isSelected: boolean;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

function EmployeeListItem({
  item,
  isSelected,
  onSelect,
}: EmployeeListItemProps) {
  return (
    <ListItem
      isSelected={isSelected}
      onClick={() => onSelect(item)}
      primaryContent={item.fullName ?? "<full-name-missing>"}
      secondaryContent={
        <>
          <div>
            {item.adUsername ?? "<username-missing>"} - #{item.employeeNumber}
          </div>
          {item.department && <div>Department: {item.department}</div>}
          {item.businessTitle && <div>Title: {item.businessTitle}</div>}
        </>
      }
    />
  );
}

interface EmployeesWithFilterListProps {
  selected: Employee.OsdkInstance | undefined;
  onSelect: (employee: Employee.OsdkInstance) => void;
}

const INITIAL_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  {
    type: "PROPERTY",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "CHECKBOX_LIST",
    filterState: { type: "SELECT", selectedValues: [] },
  } as FilterDefinitionUnion<Employee>,
];

export function EmployeesWithFilterList(props: EmployeesWithFilterListProps) {
  const [whereClause, setWhereClause] = useState<WhereClause<Employee>>({});
  const [filterDefinitions, setFilterDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(INITIAL_FILTER_DEFINITIONS);

  const handleFiltersReordered = useCallback(
    (newOrder: ReadonlyArray<FilterDefinitionUnion<Employee>>) => {
      setFilterDefinitions([...newOrder]);
    },
    [],
  );

  const employees = useOsdkObjects(Employee, {
    where: whereClause,
    orderBy: { fullName: "asc" },
    pageSize: 50,
  });

  return (
    <>
      <div style={{ display: "flex", gap: "16px", height: "100%" }}>
        <div>
          <BaseFilterList
            style={{ minWidth: 280, maxWidth: 320 }}
            objectSet={$(Employee)}
            filterDefinitions={filterDefinitions}
            onFilterClauseChanged={setWhereClause}
            onFiltersReordered={handleFiltersReordered}
            title="Filters"
            showActiveFilterCount={true}
          />
        </div>

        <div style={{ flex: 1, overflow: "auto" }}>
          <div
            style={{ marginBottom: 8, padding: 8, backgroundColor: "#f0f0f0" }}
          >
            <h3>FilterList Demo</h3>
            {employees.isLoading && <div>Loading...</div>}
            {employees.error && (
              <div style={{ color: "red" }}>
                Error: {employees.error.message}
              </div>
            )}
            <div style={{ fontSize: 12, color: "#666" }}>
              {employees.data && `Found ${employees.data.length} employees`}
              {employees.fetchMore && " (more available)"}
            </div>
            <pre style={{ fontSize: 10, marginTop: 8 }}>
            Where: {JSON.stringify(whereClause, null, 2)}
            </pre>
          </div>

          <List<Employee>
            header="Employees"
            items={employees}
            Component={EmployeeListItem}
            {...props}
          />

          {employees.fetchMore && (
            <button
              type="button"
              onClick={() => employees.fetchMore?.()}
              disabled={employees.isLoading}
              style={{ marginTop: 8 }}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
}
