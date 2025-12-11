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

import classNames from "classnames";
import React, { useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import { CacheInspectorTab } from "./CacheInspectorTab.js";
import { ComponentsTab } from "./ComponentsTab.js";
import styles from "./DebuggingTab.module.scss";
import { ErrorsTab } from "./ErrorsTab.js";
import { ImprovementsTab } from "./ImprovementsTab.js";

export interface DebuggingTabProps {
  monitorStore: MonitorStore;
}

type DebuggingSubTab = "components" | "errors" | "cache" | "improvements";

export const DebuggingTab: React.FC<DebuggingTabProps> = ({ monitorStore }) => {
  const [activeSubTab, setActiveSubTab] = useState<DebuggingSubTab>(
    "components",
  );

  return (
    <div className={styles.debuggingTab}>
      <div className={styles.subTabs}>
        <button
          type="button"
          className={classNames(
            styles.subTabButton,
            activeSubTab === "components" && styles.subTabButtonActive,
          )}
          onClick={() => setActiveSubTab("components")}
        >
          Components
        </button>
        <button
          type="button"
          className={classNames(
            styles.subTabButton,
            activeSubTab === "errors" && styles.subTabButtonActive,
          )}
          onClick={() => setActiveSubTab("errors")}
        >
          Errors & Warnings
        </button>
        <button
          type="button"
          className={classNames(
            styles.subTabButton,
            activeSubTab === "cache" && styles.subTabButtonActive,
          )}
          onClick={() => setActiveSubTab("cache")}
        >
          Cache Inspector
        </button>
        <button
          type="button"
          className={classNames(
            styles.subTabButton,
            activeSubTab === "improvements" && styles.subTabButtonActive,
          )}
          onClick={() => setActiveSubTab("improvements")}
        >
          Improvements
        </button>
      </div>

      <div className={styles.subTabContent}>
        {activeSubTab === "components" && (
          <ComponentsTab monitorStore={monitorStore} />
        )}
        {activeSubTab === "errors" && <ErrorsTab monitorStore={monitorStore} />}
        {activeSubTab === "cache" && (
          <CacheInspectorTab monitorStore={monitorStore} />
        )}
        {activeSubTab === "improvements" && (
          <ImprovementsTab monitorStore={monitorStore} />
        )}
      </div>
    </div>
  );
};
