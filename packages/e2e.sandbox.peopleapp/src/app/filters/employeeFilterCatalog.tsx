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

import type { FilterDefinitionUnion } from "@osdk/react-components/experimental/filter-list";
import React from "react";

import type { Employee } from "../../generatedNoCheck2/index.js";
import {
  CustomSalaryBandInput,
  isSalaryBand,
  SALARY_BANDS,
} from "./CustomSalaryBandInput.js";

/**
 * One filter per FilterList definition kind, and one per filter component,
 * so both demo tabs exercise the whole surface from a single source.
 *
 * Every entry carries an explicit `id`: several of them filter the same
 * property with different components, and the derived key would collide.
 *
 * The one component missing is TOGGLE, which needs a `boolean` property.
 * Employee has none, and neither does anything it links to (`lead` and `peeps`
 * are Employee, `primaryOffice` is Office), so it is not reachable from this
 * ontology. HAS_LINK below renders the same switch control.
 */
export const EMPLOYEE_FILTER_CATALOG: Array<FilterDefinitionUnion<Employee>> = [
  // PROPERTY — string components
  {
    type: "PROPERTY",
    id: "department-listogram",
    key: "department",
    label: "Department (LISTOGRAM)",
    filterComponent: "LISTOGRAM",
    defaultFilterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "locationCountry-textTags",
    key: "locationCountry",
    label: "Country (TEXT_TAGS)",
    filterComponent: "TEXT_TAGS",
    defaultFilterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "PROPERTY",
    id: "team-containsText",
    key: "team",
    label: "Team (CONTAINS_TEXT)",
    filterComponent: "CONTAINS_TEXT",
    defaultFilterState: { type: "CONTAINS_TEXT", value: "" },
  },
  {
    type: "PROPERTY",
    id: "locationRegion-singleSelect",
    key: "locationRegion",
    label: "Region (SINGLE_SELECT)",
    filterComponent: "SINGLE_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "PROPERTY",
    id: "jobTitle-multiSelect",
    key: "jobTitle",
    label: "Job title (MULTI_SELECT)",
    filterComponent: "MULTI_SELECT",
    // MULTI_SELECT has its own inline search, so the header monocle is noise.
    searchField: false,
    defaultFilterState: { type: "SELECT", selectedValues: [] },
  },

  // PROPERTY — numeric components
  {
    type: "PROPERTY",
    id: "salary-numberRange",
    key: "salary",
    label: "Salary (NUMBER_RANGE)",
    filterComponent: "NUMBER_RANGE",
    defaultFilterState: { type: "NUMBER_RANGE" },
    clickToFilter: true,
  },

  // PROPERTY — datetime components
  {
    type: "PROPERTY",
    id: "firstFullTimeStartDate-dateRange",
    key: "firstFullTimeStartDate",
    label: "Full-time start (DATE_RANGE)",
    filterComponent: "DATE_RANGE",
    defaultFilterState: { type: "DATE_RANGE" },
    clickToFilter: true,
  },
  {
    type: "PROPERTY",
    id: "firstInternStartDate-singleDate",
    key: "firstInternStartDate",
    label: "Intern start (SINGLE_DATE)",
    filterComponent: "SINGLE_DATE",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "PROPERTY",
    id: "firstInternStartDate-multiDate",
    key: "firstInternStartDate",
    label: "Intern start (MULTI_DATE)",
    filterComponent: "MULTI_DATE",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
  },
  {
    type: "PROPERTY",
    id: "firstFullTimeStartDate-timeline",
    key: "firstFullTimeStartDate",
    label: "Full-time start (TIMELINE)",
    filterComponent: "TIMELINE",
    defaultFilterState: { type: "TIMELINE" },
  },

  // STATIC_VALUES — values supplied inline instead of aggregated
  {
    type: "STATIC_VALUES",
    id: "workerType-static",
    key: "workerType",
    label: "Worker type (STATIC_VALUES)",
    filterComponent: "LISTOGRAM",
    values: ["Employee", "Contingent Worker", "Intern"],
    listogramConfig: { displayMode: "minimal" },
    defaultFilterState: { type: "EXACT_MATCH", values: [] },
  },

  // KEYWORD_SEARCH — one box across several string properties
  {
    type: "KEYWORD_SEARCH",
    id: "keyword-search",
    properties: ["fullName", "team", "jobTitle"],
    label: "Keyword search",
    defaultFilterState: {
      type: "keywordSearch",
      searchTerm: "",
      operator: "AND",
    },
  },

  // HAS_LINK — left unseeded, since seeding would narrow before anyone
  // touched the filter
  {
    type: "HAS_LINK",
    id: "has-lead",
    linkName: "lead",
    label: "Has a lead (HAS_LINK)",
  },

  // LINKED_PROPERTY — narrows through `onEffectiveObjectSet`, never the where
  // clause, and only when `reverseLinkName` is set
  {
    type: "LINKED_PROPERTY",
    id: "lead-department",
    linkName: "lead",
    reverseLinkName: "peeps",
    linkedPropertyKey: "department",
    label: "Lead's department (LINKED_PROPERTY)",
    filterComponent: "LISTOGRAM",
    defaultFilterState: { type: "EXACT_MATCH", values: [] },
  },
  {
    type: "LINKED_PROPERTY",
    id: "primaryOffice-name",
    linkName: "primaryOffice",
    reverseLinkName: "occupants",
    linkedPropertyKey: "name",
    label: "Office (LINKED_PROPERTY)",
    filterComponent: "MULTI_SELECT",
    defaultFilterState: { type: "SELECT", selectedValues: [] },
  },

  // CUSTOM — consumer-owned control and where clause
  {
    type: "CUSTOM",
    id: "salary-band-custom",
    key: "salary-band-custom",
    label: "Salary band (CUSTOM)",
    filterComponent: "CUSTOM",
    defaultFilterState: { type: "custom", customState: { band: "any" } },
    renderInput: ({ filterState, onFilterStateChanged }) => {
      const raw = filterState.customState.band;
      return (
        <CustomSalaryBandInput
          band={isSalaryBand(raw) ? raw : "any"}
          onBandChanged={(band) =>
            onFilterStateChanged({ type: "custom", customState: { band } })
          }
        />
      );
    },
    toWhereClause: (state) => {
      const raw = state.customState.band;
      const floor = isSalaryBand(raw) ? SALARY_BANDS[raw] : undefined;
      return floor == null ? undefined : { salary: { $gte: floor } };
    },
  },
];
