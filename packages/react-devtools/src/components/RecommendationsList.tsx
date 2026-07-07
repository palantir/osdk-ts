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

import { useRecommendations } from "../hooks/useRecommendations.js";
import { levelToIntent } from "../recommendations/levelToIntent.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { CopyPromptButton } from "./CopyPromptButton.js";

import styles from "./RecommendationsList.module.scss";

interface RecommendationsListProps {
  monitorStore: MonitorStore;
}

/**
 * The recommendation cards for the Overview tab's "Recommendations" section.
 * Renders inside an {@link OverviewSection}, so it owns only the copy-all action
 * and the cards themselves, not the section title.
 */
export const RecommendationsList: React.FC<RecommendationsListProps> = ({
  monitorStore,
}) => {
  const { recommendations } = useRecommendations(monitorStore);

  return (
    <div className={styles.list}>
      {recommendations.length === 0 ? (
        <div className={styles.empty}>No recommendations right now.</div>
      ) : (
        <>
          <div className={styles.head}>
            <CopyPromptButton
              recommendations={recommendations}
              label="Copy all"
            />
          </div>
          {recommendations.map((rec) => (
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
          ))}
        </>
      )}
    </div>
  );
};
