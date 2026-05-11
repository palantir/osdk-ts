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

import { Icon, InputGroup } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { createPollingStore } from "../hooks/createPollingStore.js";
import { useActiveComponents } from "../hooks/useActiveComponents.js";
import { useConsoleLogs } from "../hooks/useConsoleLogs.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import { formatTime } from "../utils/format.js";
import { CacheInspectorTab } from "./CacheInspectorTab.js";
import { ComponentCard } from "./ComponentCard.js";
import styles from "./DebuggingTab.module.scss";
import { ImprovementsTab } from "./ImprovementsTab.js";
import { IssueCard } from "./IssueCard.js";
import type { Issue } from "./issueTypes.js";
import { LogEntryCard } from "./LogEntryCard.js";
import { resolveComponentName } from "./resolveComponentName.js";

export interface DebuggingTabProps {
  monitorStore: MonitorStore;
}

const SEVERITY_ORDER: Record<Issue["severity"], number> = {
  error: 0,
  warning: 1,
  info: 2,
};

function collectIssues(
  monitorStore: MonitorStore,
  now: number,
): Issue[] {
  const issues: Issue[] = [];

  for (const err of monitorStore.getMetricsStore().getActionErrors()) {
    issues.push({
      id: err.id,
      severity: "error",
      category: "action failure",
      title: "Action failed",
      message: err.message,
      suggestion: err.validationErrors?.length
        ? "Fix validation errors before retrying"
        : undefined,
      timestamp: err.timestamp,
      expandable: {
        stack: err.stack,
        detailsJson: JSON.stringify(
          {
            actionType: err.actionType,
            parameters: err.parameters,
          },
          null,
          2,
        ),
      },
    });
  }

  const windowErrors = monitorStore.getWindowErrorStore().getEntries();
  // Bucketed at 100ms granularity. The lookup checks the current bucket plus
  // the two adjacent buckets so that any console.error within ±100ms of a
  // window error collides regardless of where the timestamps fall.
  const windowErrorBuckets = new Set<string>();
  for (const we of windowErrors) {
    const expandable: NonNullable<Issue["expandable"]> = {};
    if (we.stack) {
      expandable.stack = we.stack;
    }
    if (we.filename || we.lineno || we.colno) {
      expandable.detailsJson = JSON.stringify(
        {
          filename: we.filename,
          lineno: we.lineno,
          colno: we.colno,
        },
        null,
        2,
      );
    }
    const hasExpandable = expandable.stack !== undefined
      || expandable.detailsJson !== undefined;

    issues.push({
      id: `windowError-${we.id}`,
      severity: "error",
      category: we.kind === "unhandledrejection"
        ? "unhandled rejection"
        : "uncaught error",
      title: we.kind === "unhandledrejection"
        ? "Unhandled promise rejection"
        : "Uncaught error",
      message: we.message,
      timestamp: we.timestamp,
      ...(hasExpandable ? { expandable } : {}),
    });

    const bucket = Math.floor(we.timestamp / 100);
    windowErrorBuckets.add(`${we.message}|${bucket}`);
  }

  for (const entry of monitorStore.getConsoleLogStore().getEntries()) {
    if (entry.level !== "error") {
      continue;
    }
    const messageText = entry.args.join(" ");
    const bucket = Math.floor(entry.timestamp / 100);
    if (
      windowErrorBuckets.has(`${messageText}|${bucket - 1}`)
      || windowErrorBuckets.has(`${messageText}|${bucket}`)
      || windowErrorBuckets.has(`${messageText}|${bucket + 1}`)
    ) {
      continue;
    }
    const issue: Issue = {
      id: `console-${entry.id}`,
      severity: "error",
      category: "console error",
      title: "console.error",
      message: messageText,
      timestamp: entry.timestamp,
    };
    if (entry.source) {
      issue.expandable = {
        detailsJson: JSON.stringify({ source: entry.source }, null, 2),
      };
    }
    issues.push(issue);
  }

  for (const wr of monitorStore.getPropertyAccessTracker().getWastedRenders()) {
    issues.push({
      id: `wasted-${wr.componentId}-${wr.timestamp}`,
      severity: "warning",
      category: "wasted render",
      title: `${wr.count} renders without property access`,
      message: `${wr.componentName} renders but doesn't use the data`,
      suggestion: "Check if this component needs this data subscription",
      componentId: wr.componentId,
      componentName: wr.componentName,
      timestamp: wr.timestamp,
    });
  }

  for (
    const up of monitorStore.getPropertyAccessTracker().getUnusedProperties()
  ) {
    issues.push({
      id: `unused-${up.componentId}-${up.propertyName}`,
      severity: "info",
      category: "unused field",
      title: `"${up.propertyName}" loaded but never accessed`,
      message: `${up.componentName} fetches this field but never reads it`,
      suggestion: "Remove from query to reduce payload",
      componentId: up.componentId,
      componentName: up.componentName,
      timestamp: now,
    });
  }

  issues.sort(
    (a, b) =>
      SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity]
      || b.timestamp - a.timestamp,
  );

  return issues;
}

export const DebuggingTab: React.FC<DebuggingTabProps> = ({ monitorStore }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cacheExpanded, setCacheExpanded] = useState(false);
  const [consoleExpanded, setConsoleExpanded] = useState(true);
  const [improvementsExpanded, setImprovementsExpanded] = useState(true);

  const componentRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const activeComponents = useActiveComponents(monitorStore);
  const { entries: consoleEntries, count: consoleCount, clear: clearConsole } =
    useConsoleLogs(monitorStore);

  const issueStore = React.useMemo(
    () =>
      createPollingStore(
        () => collectIssues(monitorStore, Date.now()),
        2000,
      ),
    [monitorStore],
  );
  const issues = React.useSyncExternalStore(
    issueStore.subscribe,
    issueStore.getSnapshot,
  ) ?? [];

  const cacheCountStore = React.useMemo(
    () =>
      createPollingStore(
        async () => {
          const entries = await monitorStore.loadCacheEntries();
          return entries.length;
        },
        5000,
      ),
    [monitorStore],
  );
  const cacheCount = React.useSyncExternalStore(
    cacheCountStore.subscribe,
    cacheCountStore.getSnapshot,
  ) ?? 0;

  const searchFilter = useCallback((issue: Issue) => {
    if (!searchQuery.trim()) {
      return true;
    }
    const q = searchQuery.toLowerCase();
    return issue.title.toLowerCase().includes(q)
      || issue.message.toLowerCase().includes(q)
      || (issue.componentName?.toLowerCase().includes(q) ?? false)
      || issue.category.toLowerCase().includes(q);
  }, [searchQuery]);

  const errorIssues = useMemo(
    () => issues.filter(i => i.severity === "error").filter(searchFilter),
    [issues, searchFilter],
  );

  const filteredConsoleEntries = useMemo(() => {
    if (!searchQuery.trim()) {
      return consoleEntries;
    }
    const q = searchQuery.toLowerCase();
    return consoleEntries.filter(
      (entry) =>
        entry.args.some((arg) => arg.toLowerCase().includes(q))
        || entry.level.includes(q)
        || (entry.source?.toLowerCase().includes(q) ?? false),
    );
  }, [consoleEntries, searchQuery]);

  const issuesByComponent = useMemo(() => {
    const map = new Map<string, Issue[]>();
    for (const issue of issues) {
      if (issue.componentId) {
        const existing = map.get(issue.componentId);
        if (existing) {
          existing.push(issue);
        } else {
          map.set(issue.componentId, [issue]);
        }
      }
    }
    return map;
  }, [issues]);

  const filteredComponents = useMemo<Map<string, ComponentHookBinding[]>>(
    () => {
      if (!searchQuery.trim()) {
        return activeComponents;
      }

      const q = searchQuery.toLowerCase();
      const filtered = new Map<string, ComponentHookBinding[]>();

      for (const [componentId, bindings] of activeComponents) {
        const displayName = resolveComponentName(bindings).toLowerCase();

        if (
          displayName.includes(q)
          || componentId.includes(q)
        ) {
          filtered.set(componentId, bindings);
        }
      }

      return filtered;
    },
    [activeComponents, searchQuery],
  );

  const handleComponentClick = useCallback((componentId: string) => {
    const el = componentRefs.current.get(componentId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.click();
    }
  }, []);

  return (
    <div className={styles.debuggingTab}>
      <div className={styles.controls}>
        <InputGroup
          leftIcon="search"
          placeholder="Search issues and components..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
          fill={true}
        />
      </div>

      <div className={styles.feed}>
        <div className={styles.section}>
          <div
            className={classNames(
              styles.sectionHeader,
              styles.errorSectionHeader,
            )}
          >
            <Icon icon="error" size={14} color="var(--dt-red)" />
            <span>Errors</span>
            <span className={styles.sectionCount}>
              {errorIssues.length}
            </span>
          </div>
          {errorIssues.length === 0
            ? (
              <div className={styles.emptyState}>
                No errors
              </div>
            )
            : errorIssues.map((issue, index) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                onComponentClick={handleComponentClick}
                style={{ "--entrance-index": index } as React.CSSProperties}
              />
            ))}
        </div>

        <div className={styles.section}>
          <button
            type="button"
            className={styles.sectionHeaderButton}
            onClick={() => setConsoleExpanded(!consoleExpanded)}
          >
            <Icon icon="console" size={14} color="var(--dt-text-tertiary)" />
            <span>Console</span>
            <span className={styles.sectionCount}>
              {consoleCount}
            </span>
            {consoleCount > 0 && (
              <span
                className={styles.sectionCount}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.stopPropagation();
                  clearConsole();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                    e.preventDefault();
                    clearConsole();
                  }
                }}
              >
                clear
              </span>
            )}
            <Icon
              icon={consoleExpanded ? "chevron-down" : "chevron-right"}
              size={14}
              className={styles.sectionChevron}
            />
          </button>
          {consoleExpanded && (
            filteredConsoleEntries.length === 0
              ? (
                <div className={styles.emptyState}>
                  No console output captured
                </div>
              )
              : filteredConsoleEntries.slice(-100).map((entry, index) => (
                <LogEntryCard
                  key={entry.id}
                  entry={entry}
                  style={{ "--entrance-index": index } as React.CSSProperties}
                />
              ))
          )}
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Components</span>
            <span className={styles.sectionCount}>
              {filteredComponents.size}
            </span>
          </div>
          {filteredComponents.size === 0 && (
            <div className={styles.emptyState}>
              {searchQuery
                ? "No components match your search"
                : "No active components found"}
            </div>
          )}
          {Array.from(filteredComponents).map(
            ([componentId, bindings], index) => (
              <div
                key={componentId}
                ref={(el) => {
                  if (el) {
                    componentRefs.current.set(componentId, el);
                  } else {
                    componentRefs.current.delete(componentId);
                  }
                }}
              >
                <ComponentCard
                  componentId={componentId}
                  bindings={bindings}
                  formatTime={formatTime}
                  monitorStore={monitorStore}
                  issues={issuesByComponent.get(componentId)}
                  style={{ "--entrance-index": index } as React.CSSProperties}
                />
              </div>
            ),
          )}
        </div>

        <div className={styles.section}>
          <button
            type="button"
            className={styles.sectionHeaderButton}
            onClick={() => setImprovementsExpanded(!improvementsExpanded)}
          >
            <span>Improvements</span>
            <Icon
              icon={improvementsExpanded ? "chevron-down" : "chevron-right"}
              size={14}
              className={styles.sectionChevron}
            />
          </button>
          {improvementsExpanded && (
            <ImprovementsTab monitorStore={monitorStore} />
          )}
        </div>

        <div className={styles.section}>
          <button
            type="button"
            className={styles.sectionHeaderButton}
            onClick={() => setCacheExpanded(!cacheExpanded)}
          >
            <span>Cache</span>
            <span className={styles.sectionCount}>{cacheCount} entries</span>
            <Icon
              icon={cacheExpanded ? "chevron-down" : "chevron-right"}
              size={14}
              className={styles.sectionChevron}
            />
          </button>
          {cacheExpanded && <CacheInspectorTab monitorStore={monitorStore} />}
        </div>
      </div>
    </div>
  );
};
