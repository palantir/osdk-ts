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

import { Icon, Tag, Tooltip } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import styles from "./ComponentCard.module.scss";
import { HookRow } from "./HookRow.js";
import type { Issue } from "./issueTypes.js";
import { resolveComponentName } from "./resolveComponentName.js";

export interface ComponentCardProps {
  componentId: string;
  bindings: ComponentHookBinding[];
  formatTime?: (ms: number) => string;
  monitorStore?: MonitorStore;
  style?: React.CSSProperties;
  issues?: Issue[];
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  componentId,
  bindings,
  formatTime = (ms) => `${ms.toFixed(1)}ms`,
  monitorStore,
  style,
  issues = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  if (bindings.length === 0) {
    return null;
  }

  const componentName = resolveComponentName(bindings);

  const totalRenders = bindings.reduce((sum, b) => sum + b.renderCount, 0);
  const avgRenderDuration = bindings.reduce(
    (sum, b) => sum + b.avgRenderDuration,
    0,
  ) / bindings.length;

  const hasWarnings = bindings.length > 10;

  const errorCount = issues.filter(i => i.severity === "error").length;
  const warningCount = issues.filter(i => i.severity === "warning").length;
  const healthStatus: "healthy" | "warning" | "error" = errorCount > 0
    ? "error"
    : warningCount > 0
    ? "warning"
    : "healthy";

  return (
    <div className={styles.componentCard} style={style}>
      <div
        className={styles.header}
        onClick={() => setExpanded(!expanded)}
      >
        <div className={styles.headerLeft}>
          <Icon
            icon={expanded ? "chevron-down" : "chevron-right"}
            size={14}
            className={styles.expandIcon}
          />
          <span
            className={classNames(
              styles.healthDot,
              styles[`health_${healthStatus}`],
            )}
          />
          <span className={styles.componentName}>{componentName}</span>
        </div>

        <div className={styles.headerRight}>
          {hasWarnings && (
            <Tooltip content="This component has many hooks">
              <Tag minimal intent="warning" className={styles.warningTag}>
                <Icon icon="warning-sign" size={10} />
              </Tag>
            </Tooltip>
          )}
          <Tooltip content={`${bindings.length} OSDK hooks`}>
            <Tag minimal intent="primary" className={styles.hookCountTag}>
              {bindings.length}
            </Tag>
          </Tooltip>
          {issues.length > 0 && (
            <Tooltip
              content={`${issues.length} issue${
                issues.length !== 1 ? "s" : ""
              }`}
            >
              <Tag
                minimal
                intent={errorCount > 0 ? "danger" : "warning"}
                className={styles.issueCountTag}
              >
                <Icon icon="warning-sign" size={10} /> {issues.length}
              </Tag>
            </Tooltip>
          )}
          {issues.length === 0 && (
            <span className={styles.healthyLabel}>healthy</span>
          )}
          {totalRenders > 0 && (
            <Tooltip content={`${totalRenders} total renders`}>
              <div className={styles.renderCount}>
                <Icon icon="refresh" size={10} />
                <span>{totalRenders}</span>
              </div>
            </Tooltip>
          )}
          {avgRenderDuration > 0 && (
            <Tooltip content={`Average render time`}>
              <div className={styles.avgDuration}>
                <Icon icon="time" size={10} />
                <span>{formatTime(avgRenderDuration)}</span>
              </div>
            </Tooltip>
          )}
        </div>
      </div>

      {expanded && (
        <div className={styles.body}>
          <div className={styles.hooks}>
            {bindings.map((binding, index) => (
              <HookRow
                key={`${binding.querySignature}-${index}`}
                binding={binding}
                formatTime={formatTime}
                monitorStore={monitorStore}
              />
            ))}
          </div>
          {issues.length > 0 && (
            <div className={styles.inlineIssues}>
              {issues.map(issue => (
                <div
                  key={issue.id}
                  className={classNames(
                    styles.inlineIssue,
                    styles[`inlineIssue_${issue.severity}`],
                  )}
                >
                  <Icon
                    icon={issue.severity === "error"
                      ? "error"
                      : issue.severity === "warning"
                      ? "warning-sign"
                      : "info-sign"}
                    size={12}
                    intent={issue.severity === "error"
                      ? "danger"
                      : issue.severity === "warning"
                      ? "warning"
                      : "primary"}
                  />
                  <span className={styles.inlineIssueText}>
                    {issue.title}
                    {issue.suggestion && (
                      <span className={styles.inlineIssueSuggestion}>
                        {" \u2192 "}
                        {issue.suggestion}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
