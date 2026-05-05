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
import React, { useCallback, useMemo, useState } from "react";
import type { Employee } from "../../types/Employee.js";
import styles from "./ComponentShowcase.module.css";
import { ShowcaseFilterList } from "./ShowcaseFilterList.js";
import {
  ContactForm,
  DateRangeForm,
  SchedulingForm,
  SettingsForm,
  UploadForm,
} from "./ShowcaseForm.js";
import { ShowcasePdfViewer } from "./ShowcasePdfViewer.js";
import { MOCK_DATA, ShowcaseTable } from "./ShowcaseTable.js";
import type { Person } from "./ShowcaseTable.js";

const TABS = [
  { id: "data", label: "Data" },
  { id: "forms", label: "Forms" },
  { id: "documents", label: "Documents" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export const ComponentShowcase = React.memo(
  function ComponentShowcaseFn(): React.ReactElement {
    const [activeTab, setActiveTab] = useState<TabId>("data");

    return (
      <div className={styles.osdkShowcase}>
        <div className={styles.osdkShowcaseTabs}>
          {TABS.map((tab) => (
            <ShowcaseTab
              key={tab.id}
              tabId={tab.id}
              label={tab.label}
              isActive={tab.id === activeTab}
              onSelect={setActiveTab}
            />
          ))}
        </div>

        <div className={styles.osdkShowcaseBody}>
          {activeTab === "data" && <DataPanel />}
          {activeTab === "forms" && <FormsPanel />}
          {activeTab === "documents" && <DocumentsPanel />}
        </div>
      </div>
    );
  },
);

interface ShowcaseTabProps {
  readonly tabId: TabId;
  readonly label: string;
  readonly isActive: boolean;
  readonly onSelect: (tabId: TabId) => void;
}

const ShowcaseTab = React.memo(function ShowcaseTabFn(
  { tabId, label, isActive, onSelect }: ShowcaseTabProps,
): React.ReactElement {
  const handleClick = useCallback(() => {
    onSelect(tabId);
  }, [tabId, onSelect]);

  return (
    <button
      type="button"
      className={styles.osdkShowcaseTab}
      data-active={isActive}
      onClick={handleClick}
    >
      {label}
    </button>
  );
});

/**
 * Maps filter definition keys (Employee property names) to Person field names.
 */
const FILTER_KEY_TO_PERSON_FIELD: Record<string, keyof Person> = {
  department: "department",
  fullName: "name",
  emailPrimaryWork: "email",
  locationCity: "city",
  team: "team",
  firstFullTimeStartDate: "startDate",
};

function applyFilters(
  data: Person[],
  filterStates: Map<string, FilterState>,
): Person[] {
  let filtered = data;

  for (const [key, state] of filterStates) {
    const field = FILTER_KEY_TO_PERSON_FIELD[key];
    if (field == null) {
      continue;
    }

    if (state.type === "CONTAINS_TEXT") {
      const query = (state as { value?: string }).value?.toLowerCase();
      if (query) {
        filtered = filtered.filter((row) =>
          String(row[field]).toLowerCase().includes(query)
        );
      }
    } else if (state.type === "EXACT_MATCH") {
      const values = (state as { values: string[] }).values;
      if (values.length > 0) {
        const valueSet = new Set(values);
        filtered = filtered.filter((row) => valueSet.has(String(row[field])));
      }
    } else if (state.type === "DATE_RANGE") {
      const { minValue, maxValue } = state as {
        minValue?: Date;
        maxValue?: Date;
      };
      if (minValue != null || maxValue != null) {
        filtered = filtered.filter((row) => {
          const rowDate = new Date(String(row[field]));
          if (minValue != null && rowDate < minValue) {
            return false;
          }
          if (maxValue != null && rowDate > maxValue) {
            return false;
          }
          return true;
        });
      }
    }
  }

  return filtered;
}

const DataPanel = React.memo(function DataPanelFn(): React.ReactElement {
  const [filterStates, setFilterStates] = useState(
    () => new Map<string, FilterState>(),
  );

  const handleFilterStateChanged = useCallback(
    (definition: FilterDefinitionUnion<Employee>, newState: FilterState) => {
      setFilterStates((prev) => {
        const next = new Map(prev);
        const key = "key" in definition ? definition.key as string : "";
        if (key) {
          next.set(key, newState);
        }
        return next;
      });
    },
    [],
  );

  const filteredData = useMemo(
    () => applyFilters(MOCK_DATA, filterStates),
    [filterStates],
  );

  return (
    <div className={styles.osdkShowcaseDataLayout}>
      <div className={styles.osdkShowcaseDataSidebar}>
        <ShowcaseFilterList
          onFilterStateChanged={handleFilterStateChanged}
        />
      </div>
      <div className={styles.osdkShowcaseDataMain}>
        <ShowcaseTable data={filteredData} />
      </div>
    </div>
  );
});

const FormsPanel = React.memo(function FormsPanelFn(): React.ReactElement {
  return (
    <div className={styles.osdkShowcaseFormGrid}>
      <div className={styles.osdkShowcaseFormCard}>
        <ContactForm />
      </div>
      <div className={styles.osdkShowcaseFormCard}>
        <SettingsForm />
      </div>
      <div className={styles.osdkShowcaseFormCard}>
        <SchedulingForm />
      </div>
      <div className={styles.osdkShowcaseFormCard}>
        <UploadForm />
      </div>
      <div className={styles.osdkShowcaseFormCard}>
        <DateRangeForm />
      </div>
    </div>
  );
});

const DocumentsPanel = React.memo(
  function DocumentsPanelFn(): React.ReactElement {
    return (
      <div className={styles.osdkShowcasePdfLayout}>
        <div className={styles.osdkShowcaseCard}>
          <ShowcasePdfViewer />
        </div>
      </div>
    );
  },
);
