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

import { NonIdealState, Tag } from "@blueprintjs/core";
import React from "react";

import { useActiveComponents } from "../hooks/useActiveComponents.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { MonitoringTab } from "./MonitoringPanel.js";

import styles from "./MonitoringPanel.module.scss";

const OSDK_DOCS_URL =
  "https://www.palantir.com/docs/foundry/ontology-sdk/overview";

export interface OverviewTabProps {
  monitorStore: MonitorStore;
  /**
   * Switches the panel's active tab. Passed from `MonitoringPanel` so the
   * Overview's counts and metric cards can navigate to the view that explains
   * them. Not yet consumed in the skeleton slice.
   */
  setActiveTab: (tab: MonitoringTab) => void;
}

/**
 * The Overview tab — an at-a-glance summary of the monitored client's ontology
 * usage and health metrics. This skeleton slice renders only the "no ontology"
 * empty state; the ontology counts and metric cards are added in later slices.
 */
export function OverviewTab({
  monitorStore,
}: OverviewTabProps): React.JSX.Element {
  const activeComponents = useActiveComponents(monitorStore);
  const hasOntology = activeComponents.size > 0;

  return (
    <div className={styles.overviewTab}>
      {hasOntology ? null : (
        <NonIdealState
          icon="cube"
          title="No ontology linked"
          description={
            <>
              This app has not referenced any ontology yet. See the{" "}
              <a href={OSDK_DOCS_URL} target="_blank" rel="noreferrer">
                OSDK docs
              </a>{" "}
              to connect your app to an ontology.
            </>
          }
          action={<Tag intent="danger">No ontology found</Tag>}
        />
      )}
    </div>
  );
}
