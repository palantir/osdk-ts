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

import React, { useCallback, useState } from "react";
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
import { ShowcaseTable } from "./ShowcaseTable.js";

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

const DataPanel = React.memo(function DataPanelFn(): React.ReactElement {
  return (
    <div className={styles.osdkShowcaseDataLayout}>
      <div className={styles.osdkShowcaseDataSidebar}>
        <div className={styles.osdkShowcaseCard}>
          <ShowcaseFilterList />
        </div>
      </div>
      <div className={styles.osdkShowcaseDataMain}>
        <div className={styles.osdkShowcaseCard}>
          <ShowcaseTable />
        </div>
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
