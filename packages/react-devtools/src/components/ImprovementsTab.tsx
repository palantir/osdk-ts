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

import { Button, Code, Collapse, Icon } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";
import { useRecommendations } from "../hooks/useRecommendations.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { Recommendation } from "../utils/PerformanceRecommendationEngine.js";
import styles from "./ImprovementsTab.module.scss";

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

  const levelIcon = (level: Recommendation["level"]): React.ReactNode => {
    switch (level) {
      case "critical":
        return <Icon icon="error" intent="danger" size={14} />;
      case "high":
        return <Icon icon="warning-sign" intent="warning" size={14} />;
      case "medium":
        return <Icon icon="lightbulb" intent="primary" size={14} />;
      case "low":
        return <Icon icon="info-sign" intent="primary" size={14} />;
      default:
        return <Icon icon="dot" size={14} />;
    }
  };

  return (
    <div className={styles.improvementsTab}>
      {isLoading && recommendations.length === 0
        ? <div className={styles.emptyState}>Analyzing...</div>
        : recommendations.length === 0
        ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <Icon icon="tick-circle" intent="success" size={32} />
            </div>
            <div>No improvements found</div>
            <div className={styles.emptySubtext}>
              Your app is looking good!
            </div>
          </div>
        )
        : null}

      {recommendations.length > 0 && (
        <>
          <div className={styles.improvementsHeader}>
            <span>
              {recommendations.length} potential improvement
              {recommendations.length !== 1 ? "s" : ""}
            </span>
            <Button
              size="small"
              variant="minimal"
              icon="refresh"
              onClick={refresh}
            >
              Refresh
            </Button>
          </div>

          <div className={styles.improvementsList}>
            {recommendations.map((rec, index) => (
              <div
                key={rec.id}
                className={styles.improvementCard}
                style={{ "--entrance-index": index } as React.CSSProperties}
              >
                <div
                  className={styles.improvementHeader}
                  onClick={() => toggleExpanded(rec.id)}
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
                  <span className={styles.improvementCategory}>
                    {rec.category}
                  </span>
                  <span className={styles.improvementTitle}>{rec.title}</span>
                </div>

                <div className={styles.improvementSummary}>
                  {rec.suggestion}
                </div>

                {rec.code && (
                  <Collapse isOpen={expandedIds.has(rec.id)}>
                    <div className={styles.improvementDetails}>
                      <div className={styles.codeSection}>
                        <Code className={styles.codeBlock}>{rec.code}</Code>
                      </div>
                    </div>
                  </Collapse>
                )}

                <div className={styles.improvementActions}>
                  {rec.code && (
                    <Button
                      size="small"
                      variant="minimal"
                      onClick={() => toggleExpanded(rec.id)}
                    >
                      {expandedIds.has(rec.id) ? "Hide Code" : "Show Code"}
                    </Button>
                  )}
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
        </>
      )}
    </div>
  );
};
