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
import type {
  FilterDefinitionUnion,
  FilterState,
} from "@osdk/react-components/experimental/filter-list";
import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/experimental/filter-list";
import type { Meta, StoryObj } from "@storybook/react-vite";
import classnames from "classnames";
import React, { useCallback } from "react";

import { Employee } from "../../../types/Employee.js";

import styles from "./HorizontalToolbar.module.css";

const sitesFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "locationCity",
  key: "locationCity",
  label: "Sites",
  filterComponent: "MULTI_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const specialtiesFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "department",
  key: "department",
  label: "Specialties",
  filterComponent: "MULTI_SELECT",
  filterState: { type: "SELECT", selectedValues: [] },
};

const consultantsFilter: FilterDefinitionUnion<Employee> = {
  type: "PROPERTY",
  id: "fullName",
  key: "fullName",
  label: "Consultants",
  filterComponent: "CONTAINS_TEXT",
  filterState: { type: "CONTAINS_TEXT" },
};

const TOOLBAR_FILTER_DEFINITIONS: FilterDefinitionUnion<Employee>[] = [
  sitesFilter,
  specialtiesFilter,
  consultantsFilter,
];

const EMPTY_WHERE_CLAUSE: WhereClause<Employee> = {};

function GearIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
      <path d="M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z" />
    </svg>
  );
}

function ClockIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 4.5V8L10.5 9.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LayersIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2L2 5l6 3 6-3-6-3z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M2 9l6 3 6-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const TOOLBAR_ICONS: ReadonlyArray<{
  label: string;
  Icon: React.ComponentType;
  extraClass?: string;
}> = [
  { label: "Settings", Icon: GearIcon },
  { label: "History", Icon: ClockIcon },
  { label: "Layers", Icon: LayersIcon, extraClass: styles.layersButton },
];

interface FilterToolbarItemProps {
  filterKey: string;
  definition: FilterDefinitionUnion<Employee>;
  filterState: FilterState | undefined;
  whereClause: WhereClause<Employee>;
  objectType: typeof Employee;
  setFilterState: (key: string, state: FilterState) => void;
  clearFilterState: (key: string) => void;
}

function InlineFilterField({
  filterKey,
  definition,
  filterState,
  whereClause,
  objectType,
  setFilterState,
}: FilterToolbarItemProps): React.ReactElement {
  const handleStateChange = useCallback(
    (state: FilterState) => setFilterState(filterKey, state),
    [filterKey, setFilterState]
  );
  return (
    <span className={styles.inlineFieldGroup}>
      <span className={styles.label}>{getFilterLabel(definition)}</span>
      <span className={styles.inlineInputWrapper}>
        <FilterInput
          objectType={objectType}
          definition={definition}
          filterState={filterState}
          onFilterStateChanged={handleStateChange}
          whereClause={whereClause}
        />
      </span>
    </span>
  );
}

function PopoverFilterField({
  filterKey,
  definition,
  filterState,
  whereClause,
  objectType,
  setFilterState,
  clearFilterState,
}: FilterToolbarItemProps): React.ReactElement {
  const handleStateChange = useCallback(
    (state: FilterState) => setFilterState(filterKey, state),
    [filterKey, setFilterState]
  );
  const handleRemove = useCallback(
    () => clearFilterState(filterKey),
    [filterKey, clearFilterState]
  );
  return (
    <FilterPopover
      label={getFilterLabel(definition)}
      summary={summarizeFilterValue(definition, filterState)}
      isActive={filterHasActiveState(filterState)}
      onRemove={handleRemove}
      labelPlacement="top"
    >
      <FilterInput
        objectType={objectType}
        definition={definition}
        filterState={filterState}
        onFilterStateChanged={handleStateChange}
        whereClause={whereClause}
        layout="inline"
      />
    </FilterPopover>
  );
}

function FilterToolbarItem(props: FilterToolbarItemProps): React.ReactElement {
  const { definition } = props;
  const isInline =
    definition.type === "PROPERTY" &&
    definition.filterComponent === "CONTAINS_TEXT";
  return isInline ? (
    <InlineFilterField {...props} />
  ) : (
    <PopoverFilterField {...props} />
  );
}

interface HorizontalFilterToolbarProps {
  objectType: typeof Employee;
  filterDefinitions: FilterDefinitionUnion<Employee>[];
}

function HorizontalFilterToolbar({
  objectType,
  filterDefinitions,
}: HorizontalFilterToolbarProps): React.ReactElement {
  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
  } = useFilterListState({ objectType, filterDefinitions });

  return (
    <div className={styles.toolbar}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        return (
          <FilterToolbarItem
            key={key}
            filterKey={key}
            definition={definition}
            filterState={filterStates.get(key)}
            whereClause={perFilterWhereClauses.get(key) ?? EMPTY_WHERE_CLAUSE}
            objectType={objectType}
            setFilterState={setFilterState}
            clearFilterState={clearFilterState}
          />
        );
      })}
      <div className={styles.iconButtonGroup}>
        {TOOLBAR_ICONS.map(({ label, Icon, extraClass }) => (
          <button
            key={label}
            type="button"
            className={classnames(styles.iconButton, extraClass)}
            aria-label={label}
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}

const meta: Meta<typeof HorizontalFilterToolbar> = {
  title: "Components/FilterList/Recipes",
  component: HorizontalFilterToolbar,
  tags: ["beta"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const HorizontalToolbar: Story = {
  name: "Horizontal toolbar",
  parameters: {
    docs: {
      description: {
        story:
          "Composes `useFilterListState`, `FilterPopover`, and " +
          "`FilterInput` into a custom inline toolbar. Each filter renders " +
          "as a label + popover trigger; the popup opens the standard input " +
          "UI for that filter type. The trailing utility buttons (settings, " +
          "history, layers) are owned entirely by the consumer — `FilterList`" +
          " never sees them. Replace the SVG icons with your own and swap " +
          "the wrapper styles to match your design system.",
      },
      source: {
        code: `import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/experimental/filter-list";

function HorizontalFilterToolbar({ objectType, filterDefinitions }) {
  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
  } = useFilterListState({ objectType, filterDefinitions });

  return (
    <div className={styles.toolbar}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        return (
          <FilterPopover
            key={key}
            label={getFilterLabel(definition)}
            summary={summarizeFilterValue(definition, filterStates.get(key))}
            isActive={filterHasActiveState(filterStates.get(key))}
            onRemove={() => clearFilterState(key)}
            labelPlacement="top"
          >
            <FilterInput
              objectType={objectType}
              definition={definition}
              filterState={filterStates.get(key)}
              onFilterStateChanged={(state) => setFilterState(key, state)}
              whereClause={perFilterWhereClauses.get(key) ?? {}}
              layout="inline"
            />
          </FilterPopover>
        );
      })}
      {/* Trailing utility buttons are owned entirely by the consumer. */}
    </div>
  );
}

<HorizontalFilterToolbar
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT", filterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT", filterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" } },
  ]}
/>`,
      },
    },
  },
  render: () => (
    <HorizontalFilterToolbar
      objectType={Employee}
      filterDefinitions={TOOLBAR_FILTER_DEFINITIONS}
    />
  ),
};
