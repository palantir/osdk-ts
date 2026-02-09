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

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import type { WhereClause } from "@osdk/api";
import {
  BaseFilterList,
  type FilterDefinitionUnion,
  FilterList,
  type FilterTemplate,
} from "@osdk/react-components/experimental";
import { useOsdkObjects } from "@osdk/react/experimental";
import "@osdk/react-components/styles/FilterListBundle.css";
import { useCallback, useState } from "react";

import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";
import styles from "./EmployeeFilterList.module.css";

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
    type: "property",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "CHECKBOX_LIST",
    filterState: { type: "CHECKBOX_LIST", selectedValues: [] },
  } as FilterDefinitionUnion<Employee>,
];

const FILTER_TEMPLATES: FilterTemplate[] = [
  {
    id: "department",
    label: "Department",
    key: "department",
    filterComponent: "CHECKBOX_LIST",
    icon: "office",
    category: "SINGLE_PROPERTY",
    allowMultiple: false,
  },
  {
    id: "businessTitle",
    label: "Business Title",
    key: "businessTitle",
    filterComponent: "CONTAINS_TEXT",
    icon: "id-number",
    category: "SINGLE_PROPERTY",
    allowMultiple: false,
  },
  {
    id: "locationCity",
    label: "City",
    key: "locationCity",
    filterComponent: "CHECKBOX_LIST",
    icon: "map-marker",
    category: "SINGLE_PROPERTY",
    allowMultiple: false,
  },
  {
    id: "locationState",
    label: "State",
    key: "locationState",
    filterComponent: "CHECKBOX_LIST",
    icon: "globe",
    category: "SINGLE_PROPERTY",
    allowMultiple: false,
  },
];

export function EmployeesWithFilterList(props: EmployeesWithFilterListProps) {
  const [whereClause, setWhereClause] = useState<WhereClause<Employee>>({});
  const [filterDefinitions, setFilterDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(INITIAL_FILTER_DEFINITIONS);

  const handleFilterTemplateSelected = useCallback(
    (template: FilterTemplate) => {
      const newFilter: FilterDefinitionUnion<Employee> = {
        type: "property",
        id: template.id,
        key: template.key as keyof Employee.Props,
        label: template.label,
        filterComponent: template.filterComponent,
        filterState: template.filterComponent === "CHECKBOX_LIST"
          ? { type: "CHECKBOX_LIST", selectedValues: [] }
          : template.filterComponent === "CONTAINS_TEXT"
          ? { type: "CONTAINS_TEXT", value: undefined }
          : { type: "CHECKBOX_LIST", selectedValues: [] },
      } as FilterDefinitionUnion<Employee>;

      setFilterDefinitions((prev) => [...prev, newFilter]);
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
        {/* Base FilterList (unstyled, no Blueprint tokens) */}
        <div>
          <h4 style={{ margin: "0 0 8px 0" }}>Base (unstyled)</h4>
          <BaseFilterList
            className={styles.employeeFilterList}
            objectSet={$(Employee)}
            filterDefinitions={filterDefinitions}
            onFilterClauseChanged={setWhereClause}
            title="Filters"
            showActiveFilterCount={true}
          />
        </div>

        {/* Blueprint FilterList (with BP tokens and Add Filter button) */}
        <div>
          <h4 style={{ margin: "0 0 8px 0" }}>Blueprint (styled)</h4>
          <FilterList
            className={styles.employeeFilterList}
            objectSet={$(Employee)}
            filterDefinitions={filterDefinitions}
            onFilterClauseChanged={setWhereClause}
            filterTemplates={FILTER_TEMPLATES}
            onFilterTemplateSelected={handleFilterTemplateSelected}
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
