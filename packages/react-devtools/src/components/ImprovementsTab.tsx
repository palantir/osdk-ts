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

import { Button, Code, Collapse } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";
import { useRecommendations } from "../hooks/useRecommendations.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";
import styles from "./MonitoringPanel.module.scss";

interface ImprovementsTabProps {
  monitorStore: MonitorStore;
}

export const ImprovementsTab: React.FC<ImprovementsTabProps> = (
  { monitorStore },
) => {
  const { recommendations, isLoading, dismiss, refresh } = useRecommendations(
    monitorStore,
  );
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const levelIcon = (level: Recommendation["level"]) => {
    switch (level) {
      case "critical":
        return "\u{1F534}";
      case "high":
        return "\u26A0\uFE0F";
      case "medium":
        return "\u{1F4A1}";
      case "low":
        return "\u2139\uFE0F";
      default:
        return "\u2022";
    }
  };

  if (isLoading && recommendations.length === 0) {
    return <div className={styles.emptyState}>Analyzing...</div>;
  }

  if (recommendations.length === 0) {
    return (
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon}>{"\u2705"}</div>
        <div>No improvements found</div>
        <div className={styles.emptySubtext}>Your app is looking good!</div>
      </div>
    );
  }

  return (
    <div className={styles.improvementsTab}>
      <div className={styles.improvementsHeader}>
        <span>
          {recommendations.length} potential improvement
          {recommendations.length !== 1 ? "s" : ""}
        </span>
        <Button size="small" variant="minimal" icon="refresh" onClick={refresh}>
          Refresh
        </Button>
      </div>

      <div className={styles.improvementsList}>
        {recommendations.map((rec) => (
          <div key={rec.id} className={styles.improvementCard}>
            <div
              className={styles.improvementHeader}
              onClick={() =>
                toggleExpanded(rec.id)}
            >
              <span className={styles.improvementIcon}>
                {levelIcon(rec.level)}
              </span>
              <span
                className={classNames(
                  styles.improvementLevel,
                  styles[`level-${rec.level}`],
                )}
              >
                {rec.level.toUpperCase()}
              </span>
              <span className={styles.improvementCategory}>{rec.category}</span>
              <span className={styles.improvementTitle}>{rec.title}</span>
            </div>

            <div className={styles.improvementSummary}>
              {rec.suggestion}
            </div>

            <Collapse isOpen={expandedIds.has(rec.id)}>
              <div className={styles.improvementDetails}>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Impact:</span>
                  <span className={styles.detailValue}>{rec.impact}</span>
                </div>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Effort:</span>
                  <span className={styles.detailValue}>{rec.effort}</span>
                </div>
                {rec.code && (
                  <div className={styles.codeSection}>
                    <div className={styles.detailLabel}>Example:</div>
                    <Code className={styles.codeBlock}>{rec.code}</Code>
                  </div>
                )}
              </div>
            </Collapse>

            <div className={styles.improvementActions}>
              <Button
                size="small"
                variant="minimal"
                onClick={() =>
                  toggleExpanded(rec.id)}
              >
                {expandedIds.has(rec.id) ? "Hide Code" : "Show Code"}
              </Button>
              {rec.dismissible && (
                <Button
                  size="small"
                  variant="minimal"
                  onClick={() => dismiss(rec.id)}
                >
                  Dismiss
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
