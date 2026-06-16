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

import { Icon } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useState } from "react";
import type { ConsoleLogEntry } from "../store/ConsoleLogStore.js";
import { formatRelativeTime } from "../utils/format.js";
import styles from "./LogEntryCard.module.scss";

export interface LogEntryCardProps {
  entry: ConsoleLogEntry;
  style?: React.CSSProperties;
}

const levelConfig: Record<
  ConsoleLogEntry["level"],
  {
    icon: "error" | "warning-sign" | "info-sign" | "code" | "console";
    color: string;
    className: string;
  }
> = {
  error: {
    icon: "error",
    color: "var(--dt-red)",
    className: styles.levelError,
  },
  warn: {
    icon: "warning-sign",
    color: "var(--dt-orange)",
    className: styles.levelWarn,
  },
  info: {
    icon: "info-sign",
    color: "var(--dt-blue)",
    className: styles.levelInfo,
  },
  debug: {
    icon: "code",
    color: "var(--dt-gray)",
    className: styles.levelDebug,
  },
  log: {
    icon: "console",
    color: "var(--dt-text-tertiary)",
    className: styles.levelLog,
  },
};

export const LogEntryCard: React.FC<LogEntryCardProps> = ({ entry, style }) => {
  const [expanded, setExpanded] = useState(false);
  const config = levelConfig[entry.level];

  const summary = entry.args.join(" ");
  const isMultiline = summary.includes("\n") || summary.length > 120;

  return (
    <div
      className={classNames(styles.logEntry, config.className)}
      onClick={() => {
        if (isMultiline) {
          setExpanded(!expanded);
        }
      }}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && isMultiline) {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
      role={isMultiline ? "button" : undefined}
      tabIndex={isMultiline ? 0 : undefined}
      aria-expanded={isMultiline ? expanded : undefined}
      style={style}
    >
      <Icon
        icon={config.icon}
        size={12}
        color={config.color}
        className={styles.levelBadge}
      />
      <div className={styles.content}>
        <div className={styles.args}>
          {expanded ? summary : summary.split("\n")[0]}
        </div>
        {expanded && isMultiline && (
          <pre className={styles.argsExpanded}>{summary}</pre>
        )}
      </div>
      <div className={styles.meta}>
        {entry.source && (
          <span className={styles.source} title={entry.source}>
            {entry.source}
          </span>
        )}
        <span className={styles.timestamp}>
          {formatRelativeTime(entry.timestamp)}
        </span>
      </div>
    </div>
  );
};
