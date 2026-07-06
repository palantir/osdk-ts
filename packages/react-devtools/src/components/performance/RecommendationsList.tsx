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
import { SectionHeader } from "../ui/SectionHeader.js";
import { StatusTag } from "../ui/StatusTag.js";

import styles from "./PerformancePanel.module.scss";

interface RecommendationsListProps {
  monitorStore: MonitorStore;
}

/**
 * The Suggestions section: the full ranked recommendation list, each with a
 * "Copy prompt" button that produces an AI-ready fix prompt. The header carries
 * a count badge.
 */
export const RecommendationsList: React.FC<RecommendationsListProps> = ({
  monitorStore,
}) => {
  const { recommendations } = useRecommendations(monitorStore);
  const badge =
    recommendations.length > 0 ? (
      <StatusTag variant="warning">{recommendations.length}</StatusTag>
    ) : undefined;

  return (
    <SectionHeader title="Suggestions" rightSlot={badge}>
      {recommendations.length === 0 ? (
        <div className={styles.empty}>No suggestions right now.</div>
      ) : (
        <div className={styles.recList}>
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
        </div>
      )}
    </SectionHeader>
  );
};
