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

import { Icon } from "@blueprintjs/core";
import type { IconName } from "@blueprintjs/icons";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import type { WhereClause } from "@osdk/api";
import {
  FilterList,
  type FilterTemplate,
  type PropertyFilterDefinition,
} from "@osdk/react-components/experimental";
import { useOsdkObjects } from "@osdk/react/experimental";
import "@osdk/react-components/styles/FilterListBundle.css";
import { useCallback, useState } from "react";

import { List } from "../../components/List.js";
import { ListItem } from "../../components/ListItem.js";
import { $ } from "../../foundryClient.js";
import { Employee } from "../../generatedNoCheck2/index.js";

type FilterablePropertyKeys =
  | "department"
  | "businessTitle"
  | "workerType"
  | "locationCity"
  | "team"
  | "locationCountry"
  | "jobTitle"
  | "businessArea";

interface ActiveFilterInstance
  extends PropertyFilterDefinition<Employee, FilterablePropertyKeys>
{
  instanceId: string;
}

const FILTER_TEMPLATES: FilterTemplate[] = [
  {
    id: "department",
    label: "Department",
    key: "department",
    filterComponent: "CHECKBOX_LIST",
    icon: "office",
    dataIndicator: "histogram",
    showSelectAll: true,
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "businessTitle",
    label: "Business Title",
    key: "businessTitle",
    filterComponent: "CONTAINS_TEXT",
    icon: "id-number",
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "workerType",
    label: "Worker Type",
    key: "workerType",
    filterComponent: "CHECKBOX_LIST",
    icon: "people",
    dataIndicator: "histogram",
    showSelectAll: true,
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "locationCity",
    label: "City",
    key: "locationCity",
    filterComponent: "CHECKBOX_LIST",
    icon: "map-marker",
    dataIndicator: "histogram",
    showSelectAll: true,
    maxVisibleItems: 5,
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "team",
    label: "Team",
    key: "team",
    filterComponent: "CHECKBOX_LIST",
    icon: "people",
    dataIndicator: "histogram",
    showSelectAll: true,
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "locationCountry",
    label: "Country",
    key: "locationCountry",
    filterComponent: "CHECKBOX_LIST",
    icon: "globe",
    dataIndicator: "count",
    showSelectAll: true,
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "jobTitle",
    label: "Job Title",
    key: "jobTitle",
    filterComponent: "CONTAINS_TEXT",
    icon: "briefcase",
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
  {
    id: "businessArea",
    label: "Business Area",
    key: "businessArea",
    filterComponent: "CHECKBOX_LIST",
    icon: "diagram-tree",
    dataIndicator: "none",
    showSelectAll: true,
    allowMultiple: true,
    category: "SINGLE_PROPERTY",
  },
];

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

function getInitialFilterState(component: string) {
  switch (component) {
    case "CHECKBOX_LIST":
      return { type: "CHECKBOX_LIST" as const, selectedValues: [] };
    case "CONTAINS_TEXT":
      return { type: "CONTAINS_TEXT" as const, value: undefined };
    default:
      return { type: "CHECKBOX_LIST" as const, selectedValues: [] };
  }
}

function createFilterInstance(
  template: FilterTemplate,
  instanceNum?: number,
  handlers?: {
    onResetFilter: (instanceId: string) => void;
    onRemoveFilter: (instanceId: string) => void;
  },
): ActiveFilterInstance {
  const instanceId = `${template.key}-${Date.now()}-${Math.random()}`;
  const label = instanceNum
    ? `${template.label} (${instanceNum})`
    : template.label;

  return {
    type: "property",
    key: template.key as FilterablePropertyKeys,
    label,
    filterComponent: template.filterComponent as PropertyFilterDefinition<
      Employee,
      FilterablePropertyKeys
    >["filterComponent"],
    filterState: getInitialFilterState(template.filterComponent),
    icon: typeof template.icon === "string"
      ? <Icon icon={template.icon as IconName} />
      : template.icon,
    dataIndicator: template.dataIndicator,
    showSelectAll: template.showSelectAll,
    maxVisibleItems: template.maxVisibleItems,
    showOverflowMenu: true,
    onResetFilter: handlers
      ? () => handlers.onResetFilter(instanceId)
      : undefined,
    onRemoveFilter: handlers
      ? () => handlers.onRemoveFilter(instanceId)
      : undefined,
    instanceId,
  };
}

export function EmployeesWithFilterList(props: EmployeesWithFilterListProps) {
  const [whereClause, setWhereClause] = useState<WhereClause<Employee>>({});

  const [activeFilters, setActiveFilters] = useState<ActiveFilterInstance[]>(
    () => {
      const handlers = {
        onResetFilter: (instanceId: string) => {
          setActiveFilters((prev) =>
            prev.map((filter) =>
              filter.instanceId === instanceId
                ? {
                  ...filter,
                  filterState: getInitialFilterState(filter.filterComponent),
                }
                : filter
            )
          );
        },
        onRemoveFilter: (instanceId: string) => {
          setActiveFilters((prev) =>
            prev.filter((f) => f.instanceId !== instanceId)
          );
        },
      };

      return [
        createFilterInstance(FILTER_TEMPLATES[0], undefined, handlers),
        createFilterInstance(FILTER_TEMPLATES[1], undefined, handlers),
      ];
    },
  );

  const handleAddFilter = useCallback(
    (template: FilterTemplate) => {
      const handlers = {
        onResetFilter: (instanceId: string) => {
          setActiveFilters((prev) =>
            prev.map((filter) =>
              filter.instanceId === instanceId
                ? {
                  ...filter,
                  filterState: getInitialFilterState(filter.filterComponent),
                }
                : filter
            )
          );
        },
        onRemoveFilter: (instanceId: string) => {
          setActiveFilters((prev) =>
            prev.filter((f) => f.instanceId !== instanceId)
          );
        },
      };

      const currentCount =
        activeFilters.filter((f) => f.key === template.key).length;
      const instanceNum = currentCount > 0 ? currentCount + 1 : undefined;
      const newFilter = createFilterInstance(template, instanceNum, handlers);
      setActiveFilters((prev) => [...prev, newFilter]);
    },
    [activeFilters],
  );

  const employees = useOsdkObjects(Employee, {
    where: whereClause,
    orderBy: { fullName: "asc" },
    pageSize: 50,
  });

  return (
    <>
      <div style={{ display: "flex", gap: "16px", height: "100%" }}>
        <FilterList
          objectSet={$(Employee)}
          filterDefinitions={activeFilters}
          onFilterClauseChanged={setWhereClause}
          title="Employee Filters"
          showResetButton
          showActiveFilterCount
          showAddFilterButton
          filterTemplates={FILTER_TEMPLATES}
          onFilterTemplateSelected={handleAddFilter}
          persistenceKey="employee-filters-demo"
        />

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
