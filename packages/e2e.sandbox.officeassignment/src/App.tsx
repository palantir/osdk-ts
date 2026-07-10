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

import React from "react";

import { Tabs, type TabSpec } from "./components/Tabs/Tabs.js";
import { AssignmentsTab } from "./tabs/AssignmentsTab/AssignmentsTab.js";
import { StatusUpdatesTab } from "./tabs/StatusUpdatesTab/StatusUpdatesTab.js";

import styles from "./App.module.css";

const TAB_ASSIGNMENTS = "assignments";
const TAB_STATUS_UPDATES = "statusUpdates";

const TABS: readonly TabSpec[] = [
  { id: TAB_ASSIGNMENTS, label: "Assignments" },
  { id: TAB_STATUS_UPDATES, label: "Status Updates" },
];

export function App(): React.JSX.Element {
  const [activeTab, setActiveTab] = React.useState<string>(TAB_ASSIGNMENTS);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <span className={styles.title}>Office Assignment</span>
        <span className={styles.subtitle}>
          OSDK e2e sandbox · Workforce ontology
        </span>
      </header>
      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className={styles.tabContent}>
        {/* Remount on tab change so per-tab filter/selection state resets cleanly. */}
        {activeTab === TAB_ASSIGNMENTS ? (
          <AssignmentsTab key={TAB_ASSIGNMENTS} />
        ) : (
          <StatusUpdatesTab key={TAB_STATUS_UPDATES} />
        )}
      </div>
    </div>
  );
}
