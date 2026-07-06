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

import React from "react";

import type { DevToolsPanelProps } from "../../plugins/types.js";
import { OperationsList } from "./OperationsList.js";
import { RecommendationsList } from "./RecommendationsList.js";

import styles from "./PerformancePanel.module.scss";

/**
 * The Network tab: performance suggestions (with copy-prompt buttons) and a
 * filterable timeline of recent OSDK operations. Headline metrics live on the
 * Overview tab.
 */
export const PerformancePanel: React.FC<DevToolsPanelProps> = ({
  monitorStore,
}) => {
  return (
    <div className={styles.panel}>
      <RecommendationsList monitorStore={monitorStore} />
      <OperationsList monitorStore={monitorStore} />
    </div>
  );
};
