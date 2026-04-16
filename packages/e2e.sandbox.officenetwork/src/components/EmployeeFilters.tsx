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

import {
  type FilterDefinitionUnion,
  FilterList,
} from "@osdk/react-components/experimental";
import React, { useCallback, useMemo, useState } from "react";
import { Employee } from "../generatedNoCheck2/index.js";

const ALL_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  {
    type: "PROPERTY",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  } as FilterDefinitionUnion<Employee>,
  {
    type: "PROPERTY",
    id: "locationCity",
    key: "locationCity",
    label: "Location City",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  } as FilterDefinitionUnion<Employee>,
  {
    type: "PROPERTY",
    id: "businessTitle",
    key: "businessTitle",
    label: "Business Title",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
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

const INITIAL_FILTERS = ALL_FILTER_DEFINITIONS.filter(
  (def) => def.id != null && ["department", "locationCity"].includes(def.id),
);

const FILTER_SIDEBAR_WIDTH = 256;

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
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[var(--officenetwork-text-secondary)] hover:text-[var(--officenetwork-text-primary)] hover:bg-[var(--officenetwork-bg-elevated)] rounded transition-colors w-full"
      >
        <svg
          className="size-3.5"
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
        <div className="absolute left-0 right-0 mt-1 z-10 bg-[var(--officenetwork-bg-surface)] border border-[var(--officenetwork-border-default)] rounded shadow-lg">
          {availableFilters.map((def) => (
            <button
              key={def.id}
              type="button"
              onClick={() => {
                onAdd(def);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-xs text-[var(--officenetwork-text-secondary)] hover:text-[var(--officenetwork-text-primary)] hover:bg-[var(--officenetwork-bg-elevated)] transition-colors"
            >
              {def.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface EmployeeFiltersProps {
  onFilterClauseChanged?: (
    clause: Parameters<
      NonNullable<
        React.ComponentProps<typeof FilterList>["onFilterClauseChanged"]
      >
    >[0],
  ) => void;
}

export function EmployeeFilters({
  onFilterClauseChanged,
}: EmployeeFiltersProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [filterDefinitions, setFilterDefinitions] =
    useState<FilterDefinitionUnion<Employee>[]>(INITIAL_FILTERS);

  const activeIds = useMemo(
    () =>
      new Set(filterDefinitions.map((d) => d.id).filter((id) => id != null)),
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

  const handleRemoveFilter = useCallback((filterKey: string) => {
    setFilterDefinitions((prev) => prev.filter((d) => d.id !== filterKey));
  }, []);

  const renderAddFilterButton = useCallback(
    () => (
      <AddFilterButton
        availableFilters={availableFilters}
        onAdd={handleAddFilter}
      />
    ),
    [availableFilters, handleAddFilter],
  );

  const containerStyle = useMemo(
    () => ({
      width: collapsed ? undefined : FILTER_SIDEBAR_WIDTH,
      height: "100%" as const,
    }),
    [collapsed],
  );

  return (
    <div style={containerStyle}>
      <FilterList
        objectType={Employee}
        filterDefinitions={filterDefinitions}
        onFilterClauseChanged={onFilterClauseChanged}
        onFilterRemoved={handleRemoveFilter}
        enableSorting={true}
        addFilterMode="controlled"
        renderAddFilterButton={renderAddFilterButton}
        title="Employee Filters"
        showActiveFilterCount={true}
        showResetButton={true}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
      />
    </div>
  );
}
