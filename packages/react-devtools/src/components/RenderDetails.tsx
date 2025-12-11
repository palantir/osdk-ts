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

import { Callout, Card, Tag } from "@blueprintjs/core";
import React from "react";
import type { RenderEvent } from "../utils/RenderAttributionTracker.js";
import { getPerformanceColor } from "../visualization/colors.js";
import styles from "./RenderDetails.module.scss";

export interface RenderDetailsProps {
  event: RenderEvent;
  onClose?: () => void;
}

export function RenderDetails(
  { event, onClose }: RenderDetailsProps,
): React.JSX.Element {
  const performanceColor = getPerformanceColor(event.duration);
  const confidencePercent = Math.round(event.trigger.confidence * 100);

  const getConfidenceIntent = (confidence: number) => {
    if (confidence >= 0.9) return "success";
    if (confidence >= 0.7) return "warning";
    return "danger";
  };

  const getTriggerLabel = (type: string) => {
    const labels: Record<string, string> = {
      "osdk-data-change": "OSDK Data Change",
      "parent-render": "Parent Render",
      "state-change": "State Change",
      "props-change": "Props Change",
      "force-update": "Force Update",
      "context-change": "Context Change",
    };
    return labels[type] || type;
  };

  const getSuggestion = () => {
    const { trigger, duration } = event;

    if (duration > 50) {
      return {
        intent: "danger" as const,
        message:
          "This render took longer than 50ms. Consider optimizing expensive computations or breaking the component into smaller pieces.",
      };
    }

    if (trigger.type === "force-update" && trigger.confidence < 0.5) {
      return {
        intent: "warning" as const,
        message:
          "Unable to determine what caused this render. This might indicate unnecessary re-renders.",
      };
    }

    if (trigger.type === "parent-render") {
      return {
        intent: "primary" as const,
        message:
          "This component re-rendered because its parent re-rendered. Consider using React.memo() if this component doesn't depend on parent state.",
      };
    }

    if (
      trigger.type === "osdk-data-change"
      && trigger.osdkDetails?.changeReason === "optimistic-update"
    ) {
      return {
        intent: "success" as const,
        message:
          "This render was triggered by an optimistic update, providing instant feedback to the user.",
      };
    }

    return null;
  };

  const suggestion = getSuggestion();

  return (
    <Card className={styles.renderDetails}>
      <div className={styles.header}>
        <h3>{event.componentName}</h3>
        {onClose && (
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>

      <div className={styles.metrics}>
        <div className={styles.metric}>
          <span className={styles.label}>Render #</span>
          <span className={styles.value}>{event.renderNumber}</span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>Duration</span>
          <span
            className={styles.value}
            style={{ color: performanceColor }}
          >
            {event.duration.toFixed(2)}ms
          </span>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>Phase</span>
          <Tag minimal>{event.phase}</Tag>
        </div>
        <div className={styles.metric}>
          <span className={styles.label}>Time</span>
          <span className={styles.value}>
            {new Date(event.timestamp).toLocaleTimeString()}
          </span>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Trigger Attribution</h4>
        <div className={styles.trigger}>
          <Tag
            size="large"
            intent={getConfidenceIntent(event.trigger.confidence)}
          >
            {getTriggerLabel(event.trigger.type)}
          </Tag>
          <span className={styles.confidence}>
            {confidencePercent}% confidence
          </span>
        </div>
      </div>

      {event.trigger.osdkDetails && (
        <div className={styles.section}>
          <h4>OSDK Details</h4>
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Subscription:</span>
              <code className={styles.detailValue}>
                {event.trigger.osdkDetails.subscriptionId}
              </code>
            </div>
            {event.trigger.osdkDetails.objectKey && (
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Object:</span>
                <code className={styles.detailValue}>
                  {event.trigger.osdkDetails.objectKey}
                </code>
              </div>
            )}
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Reason:</span>
              <Tag minimal>
                {event.trigger.osdkDetails.changeReason}
              </Tag>
            </div>
          </div>
        </div>
      )}

      {event.trigger.parentDetails && (
        <div className={styles.section}>
          <h4>Parent Component</h4>
          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Component:</span>
              <code className={styles.detailValue}>
                {event.trigger.parentDetails.parentComponentName}
              </code>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>ID:</span>
              <code className={styles.detailValue}>
                {event.trigger.parentDetails.parentComponentId}
              </code>
            </div>
          </div>
        </div>
      )}

      {suggestion && (
        <Callout intent={suggestion.intent} className={styles.suggestion}>
          <strong>Suggestion:</strong> {suggestion.message}
        </Callout>
      )}

      <div className={styles.section}>
        <h4>Component ID</h4>
        <code className={styles.componentId}>{event.componentId}</code>
      </div>
    </Card>
  );
}
