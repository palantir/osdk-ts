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

import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";
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
    label: "Full Name",
    filterComponent: "CONTAINS_TEXT",
    filterState: { type: "CONTAINS_TEXT" },
  },
];

export const ShowcaseFilterList = React.memo(
  function ShowcaseFilterListFn(): React.ReactElement {
    return (
      <FilterList
        objectType={Employee}
        filterDefinitions={FILTER_DEFINITIONS}
      />
    );
  },
);
