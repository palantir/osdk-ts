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
import { useConsoleLogs } from "../hooks/useConsoleLogs.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { CacheInspectorTab } from "./CacheInspectorTab.js";
import { collectIssues } from "./collectIssues.js";
import { ImprovementsTab } from "./ImprovementsTab.js";
import { IssueCard } from "./IssueCard.js";
import type { Issue } from "./issueTypes.js";
import { LogEntryCard } from "./LogEntryCard.js";

import styles from "./DebuggingTab.module.scss";

export interface DebuggingTabProps {
  monitorStore: MonitorStore;
}

export const DebuggingTab: React.FC<DebuggingTabProps> = ({ monitorStore }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cacheExpanded, setCacheExpanded] = useState(false);
  const [consoleExpanded, setConsoleExpanded] = useState(true);
  const [improvementsExpanded, setImprovementsExpanded] = useState(true);

  const componentRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const {
    entries: consoleEntries,
    count: consoleCount,
    clear: clearConsole,
  } = useConsoleLogs(monitorStore);

  const issueStore = React.useMemo(
    () =>
      createPollingStore(() => collectIssues(monitorStore, Date.now()), 2000),
    [monitorStore]
  );
  const issues =
    React.useSyncExternalStore(issueStore.subscribe, issueStore.getSnapshot) ??
    [];

  const cacheCountStore = React.useMemo(
    () =>
      createPollingStore(async () => {
        const entries = await monitorStore.loadCacheEntries();
        return entries.length;
      }, 5000),
    [monitorStore]
  );
  const cacheCount =
    React.useSyncExternalStore(
      cacheCountStore.subscribe,
      cacheCountStore.getSnapshot
    ) ?? 0;

  const searchFilter = useCallback(
    (issue: Issue) => {
      if (!searchQuery.trim()) {
        return true;
      }
      const q = searchQuery.toLowerCase();
      return (
        issue.title.toLowerCase().includes(q) ||
        issue.message.toLowerCase().includes(q) ||
        (issue.componentName?.toLowerCase().includes(q) ?? false) ||
        issue.category.toLowerCase().includes(q)
      );
    },
    [searchQuery]
  );

  const errorIssues = useMemo(
    () => issues.filter((i) => i.severity === "error").filter(searchFilter),
    [issues, searchFilter]
  );

  const filteredConsoleEntries = useMemo(() => {
    if (!searchQuery.trim()) {
      return consoleEntries;
    }
    const q = searchQuery.toLowerCase();
    return consoleEntries.filter(
      (entry) =>
        entry.args.some((arg) => arg.toLowerCase().includes(q)) ||
        entry.level.includes(q) ||
        (entry.source?.toLowerCase().includes(q) ?? false)
    );
  }, [consoleEntries, searchQuery]);

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
          placeholder="Search issues..."
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
              styles.errorSectionHeader
            )}
          >
            <Icon icon="error" size={14} color="var(--dt-red)" />
            <span>Errors</span>
            <span className={styles.sectionCount}>{errorIssues.length}</span>
          </div>
          {errorIssues.length === 0 ? (
            <div className={styles.emptyState}>No errors</div>
          ) : (
            errorIssues.map((issue, index) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                onComponentClick={handleComponentClick}
                style={{ "--entrance-index": index } as React.CSSProperties}
              />
            ))
          )}
        </div>

        <div className={styles.section}>
          <button
            type="button"
            className={styles.sectionHeaderButton}
            onClick={() => setConsoleExpanded(!consoleExpanded)}
          >
            <Icon icon="console" size={14} color="var(--dt-text-tertiary)" />
            <span>Console</span>
            <span className={styles.sectionCount}>{consoleCount}</span>
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
          {consoleExpanded &&
            (filteredConsoleEntries.length === 0 ? (
              <div className={styles.emptyState}>
                No console output captured
              </div>
            ) : (
              filteredConsoleEntries
                .slice(-100)
                .map((entry, index) => (
                  <LogEntryCard
                    key={entry.id}
                    entry={entry}
                    style={{ "--entrance-index": index } as React.CSSProperties}
                  />
                ))
            ))}
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
