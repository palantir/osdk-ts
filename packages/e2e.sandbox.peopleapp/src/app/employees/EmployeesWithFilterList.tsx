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
  type FilterDefinitionUnion,
  FilterList,
} from "@osdk/react-components/experimental";
import "@osdk/react-components/styles.css";
import { useOsdkObjects } from "@osdk/react/experimental";
import { useCallback, useMemo, useState } from "react";

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

const ALL_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  {
    type: "PROPERTY",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "CHECKBOX_LIST",
    filterState: { type: "SELECT", selectedValues: [] },
  } as FilterDefinitionUnion<Employee>,
  {
    type: "PROPERTY",
    id: "locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "CHECKBOX_LIST",
    filterState: { type: "SELECT", selectedValues: [] },
  } as FilterDefinitionUnion<Employee>,
  {
    type: "PROPERTY",
    id: "businessTitle",
    key: "businessTitle",
    label: "Business Title",
    filterComponent: "CHECKBOX_LIST",
    filterState: { type: "SELECT", selectedValues: [] },
  } as FilterDefinitionUnion<Employee>,
  {
    type: "PROPERTY",
    id: "employeeNumber",
    key: "employeeNumber",
    label: "Employee Number",
    filterComponent: "NUMBER_RANGE",
    filterState: { type: "NUMBER_RANGE" },
  } as FilterDefinitionUnion<Employee>,
  {
    type: "PROPERTY",
    id: "firstFullTimeStartDate",
    key: "firstFullTimeStartDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  } as FilterDefinitionUnion<Employee>,
];

const INITIAL_FILTER_DEFINITIONS = ALL_FILTER_DEFINITIONS.filter((def) =>
  def.id != null && ["department"].includes(def.id)
);

function AddFilterButton({
  availableFilters,
  onAdd,
}: {
  availableFilters: FilterDefinitionUnion<Employee>[];
  onAdd: (def: FilterDefinitionUnion<Employee>) => void;
}) {
  const [open, setOpen] = useState(false);

  if (availableFilters.length === 0) {
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "6px 12px",
          fontSize: 12,
          color: "var(--osdk-color-text-secondary, #666)",
          backgroundColor: "transparent",
          border: "1px solid var(--osdk-color-border-default, #e0e0e0)",
          borderRadius: 4,
          cursor: "pointer",
          transition: "all 0.2s",
          width: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor =
            "var(--osdk-color-bg-hover, #f5f5f5)";
          e.currentTarget.style.borderColor =
            "var(--osdk-color-border-hover, #ccc)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.borderColor =
            "var(--osdk-color-border-default, #e0e0e0)";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 5v14m-7-7h14" />
        </svg>
        Add filter
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            marginTop: 4,
            zIndex: 10,
            backgroundColor: "var(--osdk-color-bg-surface, #fff)",
            border: "1px solid var(--osdk-color-border-default, #e0e0e0)",
            borderRadius: 4,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {availableFilters.map((def) => (
            <button
              key={def.id}
              type="button"
              onClick={() => {
                onAdd(def);
                setOpen(false);
              }}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "8px 12px",
                fontSize: 12,
                color: "var(--osdk-color-text-secondary, #666)",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--osdk-color-bg-hover, #f5f5f5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {def.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function EmployeesWithFilterList(props: EmployeesWithFilterListProps) {
  const [whereClause, setWhereClause] = useState<WhereClause<Employee>>({});
  const [filterDefinitions, setFilterDefinitions] = useState<
    FilterDefinitionUnion<Employee>[]
  >(INITIAL_FILTER_DEFINITIONS);

  const activeIds = useMemo(
    () =>
      new Set(
        filterDefinitions.map((d) => d.id).filter((id) => id != null),
      ),
    [filterDefinitions],
  );

  const availableFilters = useMemo(
    () =>
      ALL_FILTER_DEFINITIONS.filter(
        (def) => def.id != null && !activeIds.has(def.id),
      ),
    [activeIds],
  );

  const handleAddFilter = useCallback(
    (def: FilterDefinitionUnion<Employee>) => {
      setFilterDefinitions((prev) => [...prev, def]);
    },
    [],
  );

  const handleRemoveFilter = useCallback(
    (filterKey: string) => {
      setFilterDefinitions((prev) => prev.filter((d) => d.id !== filterKey));
    },
    [],
  );

  const renderAddFilterButton = useCallback(
    () => (
      <AddFilterButton
        availableFilters={availableFilters}
        onAdd={handleAddFilter}
      />
    ),
    [availableFilters, handleAddFilter],
  );

  const employees = useOsdkObjects(Employee, {
    where: whereClause,
    orderBy: { fullName: "asc" },
    pageSize: 50,
  });

  return (
    <>
      <div style={{ display: "flex", gap: "16px", height: "100%" }}>
        <div style={{ minWidth: 280, maxWidth: 320 }}>
          <FilterList
            objectSet={$(Employee)}
            filterDefinitions={filterDefinitions}
            onFilterClauseChanged={setWhereClause}
            onFilterRemoved={handleRemoveFilter}
            renderAddFilterButton={renderAddFilterButton}
            enableSorting={true}
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
