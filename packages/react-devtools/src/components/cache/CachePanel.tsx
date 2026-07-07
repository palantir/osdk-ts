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

import type { FC } from "react";
import React from "react";

import type { MonitorStore } from "../../store/MonitorStore.js";
import { CacheInspectorTab } from "../CacheInspectorTab.js";
import { OverviewSection } from "../OverviewSection.js";
import { CacheTimeline } from "./CacheTimeline.js";

import styles from "./CachePanel.module.scss";

interface CachePanelProps {
  monitorStore: MonitorStore;
}

export const CachePanel: FC<CachePanelProps> = ({ monitorStore }) => {
  return (
    <div className={styles.panel}>
      <OverviewSection title="Cache inspector">
        <CacheInspectorTab monitorStore={monitorStore} />
      </OverviewSection>
      <OverviewSection title="Activity timeline">
        <p className={styles.description}>
          Recent cache hits and misses in reverse chronological order — a hit
          was served from the normalized cache, a miss went to the network.
        </p>
        <CacheTimeline monitorStore={monitorStore} />
      </OverviewSection>
    </div>
  );
};
