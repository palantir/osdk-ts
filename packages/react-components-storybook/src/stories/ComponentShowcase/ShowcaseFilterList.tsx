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

import type {
  FilterDefinitionUnion,
  FilterState,
} from "@osdk/react-components/experimental/filter-list";
import { FilterList } from "@osdk/react-components/experimental/filter-list";
import React from "react";
import { Employee } from "../../types/Employee.js";

const FILTER_DEFINITIONS: Array<FilterDefinitionUnion<Employee>> = [
  {
    type: "PROPERTY",
    id: "department",
    key: "department",
    label: "Department",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "fullName",
    key: "fullName",
    label: "Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    id: "emailPrimaryWork",
    key: "emailPrimaryWork",
    label: "Email",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
  {
    type: "PROPERTY",
    id: "locationCity",
    key: "locationCity",
    label: "City",
    filterComponent: "LISTOGRAM",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "team",
    key: "team",
    label: "Team",
    filterComponent: "TEXT_TAGS",
    filterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "firstFullTimeStartDate",
    key: "firstFullTimeStartDate",
    label: "Start Date",
    filterComponent: "DATE_RANGE",
    filterState: { type: "DATE_RANGE" },
  },
];

interface ShowcaseFilterListProps {
  readonly onFilterStateChanged?: (
    definition: FilterDefinitionUnion<Employee>,
    newState: FilterState,
  ) => void;
}

export const ShowcaseFilterList = React.memo(
  function ShowcaseFilterListFn(
    { onFilterStateChanged }: ShowcaseFilterListProps,
  ): React.ReactElement {
    return (
      <FilterList
        objectType={Employee}
        filterDefinitions={FILTER_DEFINITIONS}
        onFilterStateChanged={onFilterStateChanged}
      />
    );
  },
);
