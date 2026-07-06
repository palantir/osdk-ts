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

import { Callout } from "@blueprintjs/core";
import React from "react";

import { useRecommendations } from "../../hooks/useRecommendations.js";
import { levelToIntent } from "../../recommendations/levelToIntent.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { CopyPromptButton } from "../CopyPromptButton.js";

import styles from "./OverviewPanel.module.scss";

interface TopRecommendationsProps {
  monitorStore: MonitorStore;
}

/**
 * The top few performance recommendations, each with a one-click "Copy prompt"
 * button that puts an AI-ready fix prompt on the clipboard. Shares the
 * recommendation store with the Performance tab so both stay in sync.
 */
export const TopRecommendations: React.FC<TopRecommendationsProps> = ({
  monitorStore,
}) => {
  const { recommendations } = useRecommendations(monitorStore);
  const top = recommendations.slice(0, 3);

  return (
    <div className={styles.section}>
      <div className={styles.recHeader}>
        <span className={styles.sectionTitle}>Top recommendations</span>
        {recommendations.length > 0 ? (
          <CopyPromptButton
            recommendations={recommendations}
            label="Copy all"
          />
        ) : null}
      </div>
      {top.length === 0 ? (
        <div className={styles.empty}>No recommendations right now.</div>
      ) : (
        top.map((rec) => (
          <Callout
            key={rec.id}
            className={styles.recItem}
            intent={levelToIntent(rec.level)}
            title={rec.title}
          >
            <div className={styles.recBody}>{rec.description}</div>
            <div className={styles.recActions}>
              <CopyPromptButton recommendation={rec} />
            </div>
          </Callout>
        ))
      )}
    </div>
  );
};
