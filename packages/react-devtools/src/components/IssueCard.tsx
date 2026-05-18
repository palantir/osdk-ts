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

import { Button, Collapse, Icon, Tag } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";
import { formatRelativeTime } from "../utils/format.js";
import { CopyableCodeBlock } from "./CopyableCodeBlock.js";
import styles from "./IssueCard.module.scss";
import type { Issue } from "./issueTypes.js";

export interface IssueCardProps {
  issue: Issue;
  onComponentClick?: (componentId: string) => void;
  style?: React.CSSProperties;
}

const severityIcon: Record<
  Issue["severity"],
  {
    icon: "error" | "warning-sign" | "info-sign";
    intent: "danger" | "warning" | "primary";
  }
> = {
  error: { icon: "error", intent: "danger" },
  warning: { icon: "warning-sign", intent: "warning" },
  info: { icon: "info-sign", intent: "primary" },
};

const severityClass: Record<Issue["severity"], string> = {
  error: styles.severityError,
  warning: styles.severityWarning,
  info: styles.severityInfo,
};

export const IssueCard: React.FC<IssueCardProps> = ({
  issue,
  onComponentClick,
  style,
}) => {
  const [expanded, setExpanded] = useState(false);

  const { icon, intent } = severityIcon[issue.severity];
  const hasDetails = issue.expandable
    && (issue.expandable.stack || issue.expandable.detailsJson
      || issue.expandable.code);

  return (
    <div
      className={classNames(styles.issueCard, severityClass[issue.severity])}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={hasDetails ? expanded : undefined}
      style={style}
    >
      <div className={styles.header}>
        <Icon icon={icon} intent={intent} className={styles.icon} />
        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.category}>
              {issue.category.toUpperCase()}
            </span>
            <span className={styles.title}>{issue.title}</span>
          </div>
          <div className={styles.message}>{issue.message}</div>
          {issue.suggestion && (
            <div className={styles.suggestion}>{issue.suggestion}</div>
          )}
        </div>
        <div className={styles.meta}>
          {issue.componentName && (
            <Tag
              minimal={true}
              className={styles.componentTag}
              interactive={!!onComponentClick && !!issue.componentId}
              onClick={(e: React.MouseEvent) => {
                if (onComponentClick && issue.componentId) {
                  e.stopPropagation();
                  onComponentClick(issue.componentId);
                }
              }}
            >
              {issue.componentName}
            </Tag>
          )}
          <span className={styles.timestamp}>
            {formatRelativeTime(issue.timestamp)}
          </span>
          {hasDetails && (
            <Button
              variant="minimal"
              size="small"
              icon={expanded ? "chevron-up" : "chevron-down"}
              className={styles.expandButton}
            />
          )}
        </div>
      </div>

      {hasDetails && (
        <Collapse isOpen={expanded}>
          <div className={styles.details}>
            {issue.expandable?.stack && (
              <>
                <h6>Stack Trace</h6>
                <CopyableCodeBlock className={styles.codeBlock}>
                  {issue.expandable.stack}
                </CopyableCodeBlock>
              </>
            )}
            {issue.expandable?.detailsJson && (
              <>
                <h6>Details</h6>
                <CopyableCodeBlock className={styles.codeBlock}>
                  {issue.expandable.detailsJson}
                </CopyableCodeBlock>
              </>
            )}
            {issue.expandable?.code && (
              <>
                <h6>Example</h6>
                <CopyableCodeBlock className={styles.codeBlock}>
                  {issue.expandable.code}
                </CopyableCodeBlock>
              </>
            )}
          </div>
        </Collapse>
      )}
    </div>
  );
};
