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

import {
  Button,
  ButtonGroup,
  Card,
  Collapse,
  Icon,
  InputGroup,
  Tag,
  Tooltip,
} from "@blueprintjs/core";
import type { CacheEntry } from "@osdk/client/observable";
import React, { useMemo, useState } from "react";
import { createPollingStore } from "../hooks/createPollingStore.js";
import type { MonitorStore } from "../store/MonitorStore.js";
import { formatBytes, formatRelativeTime } from "../utils/format.js";
import styles from "./CacheInspectorTab.module.scss";
import { CopyableCodeBlock } from "./CopyableCodeBlock.js";

function getTypeColor(type: string) {
  switch (type) {
    case "object":
      return "primary";
    case "list":
      return "success";
    case "link":
      return "warning";
    case "objectSet":
      return "danger";
    default:
      return undefined;
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case "loaded":
      return "tick-circle";
    case "loading":
      return "refresh";
    case "error":
      return "error";
    case "init":
      return "time";
    default:
      return "help";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "loaded":
      return "success";
    case "loading":
      return "primary";
    case "error":
      return "danger";
    case "init":
      return "none";
    default:
      return undefined;
  }
}

export interface CacheInspectorTabProps {
  monitorStore: MonitorStore;
}

interface CacheSnapshot {
  entries: CacheEntry[];
  stats: {
    totalEntries: number;
    totalSize: number;
    totalHits: number;
  };
}

const emptySnapshot: CacheSnapshot = {
  entries: [],
  stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
};

export const CacheInspectorTab: React.FC<CacheInspectorTabProps> = (
  { monitorStore },
) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const snapshotStore = React.useMemo(
    () =>
      createPollingStore(async () => {
        const entries = await monitorStore.getCacheEntries();
        const totalSize = entries.reduce(
          (sum: number, e: CacheEntry) => sum + e.metadata.size,
          0,
        );
        const totalHits = entries.reduce(
          (sum: number, e: CacheEntry) => sum + (e.metadata.hitCount ?? 0),
          0,
        );
        return {
          entries,
          stats: {
            totalEntries: entries.length,
            totalSize,
            totalHits,
          },
        };
      }, 2000),
    [monitorStore],
  );
  const polledSnapshot = React.useSyncExternalStore(
    snapshotStore.subscribe,
    snapshotStore.getSnapshot,
  );

  const snapshot: CacheSnapshot = polledSnapshot ?? emptySnapshot;

  const filteredEntries = useMemo(() =>
    snapshot.entries.filter(entry => {
      if (!searchQuery.trim()) {
        return true;
      }
      const query = searchQuery.toLowerCase();
      return (
        entry.key.toLowerCase().includes(query)
        || entry.objectType.toLowerCase().includes(query)
        || entry.type.toLowerCase().includes(query)
      );
    }), [snapshot.entries, searchQuery]);

  const toggleExpanded = (key: string) => {
    const newSet = new Set(expandedKeys);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setExpandedKeys(newSet);
  };

  const [invalidateError, setInvalidateError] = useState<Error | null>(null);

  const handleInvalidate = async (entry: CacheEntry) => {
    setInvalidateError(null);
    try {
      await monitorStore.invalidateCacheEntry(entry);
      snapshotStore.forceRefresh();
    } catch (error) {
      setInvalidateError(
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  };

  const handleClearAll = async () => {
    if (
      confirm("Clear entire cache? This will force all queries to refetch.")
    ) {
      setInvalidateError(null);
      try {
        await monitorStore.clearCache();
        snapshotStore.forceRefresh();
      } catch (error) {
        setInvalidateError(
          error instanceof Error ? error : new Error(String(error)),
        );
      }
    }
  };

  return (
    <div className={styles.cacheInspector}>
      <div className={styles.toolbar}>
        <h3 className={styles.title}>Cache Inspector</h3>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Entries</span>
            <span className={styles.statValue}>
              {snapshot.stats.totalEntries}
            </span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statLabel}>Total Size</span>
            <span className={styles.statValue}>
              {formatBytes(snapshot.stats.totalSize)}
            </span>
          </div>

          <div className={styles.stat}>
            <span className={styles.statLabel}>Total Hits</span>
            <span className={styles.statValue}>{snapshot.stats.totalHits}</span>
          </div>
        </div>
      </div>

      <div className={styles.toolbarActions}>
        <div className={styles.search}>
          <InputGroup
            leftIcon="search"
            placeholder="Search cache entries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fill={true}
          />
        </div>

        <ButtonGroup>
          <Button
            icon="refresh"
            onClick={() => snapshotStore.forceRefresh()}
            size="small"
          >
            Refresh
          </Button>
          <Button
            icon="trash"
            intent="danger"
            onClick={() => void handleClearAll()}
            size="small"
          >
            Clear All
          </Button>
        </ButtonGroup>
      </div>

      {invalidateError && (
        <div className={styles.errorBanner}>
          <Icon icon="error" intent="danger" />
          <span>{invalidateError.message}</span>
          <Button
            icon="cross"
            variant="minimal"
            size="small"
            onClick={() => {
              setInvalidateError(null);
            }}
          />
        </div>
      )}

      <div className={styles.content}>
        {polledSnapshot === undefined && (
          <div className={styles.skeletonList}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={styles.skeletonEntry}>
                <div className={styles.skeletonTag} />
                <div className={styles.skeletonText} />
                <div className={styles.skeletonBadge} />
              </div>
            ))}
          </div>
        )}

        {filteredEntries.length === 0 && polledSnapshot !== undefined && (
          <div className={styles.emptyState}>
            <Icon icon="database" size={28} />
            <div className={styles.emptyTitle}>
              {snapshot.entries.length === 0
                ? "No Cache Entries"
                : "No Matching Entries"}
            </div>
            <div className={styles.emptyDescription}>
              {snapshot.entries.length === 0
                ? "The cache is empty. Query some data to see cache entries."
                : "Try a different search term."}
            </div>
          </div>
        )}

        {filteredEntries.map((entry, index) => {
          const isExpanded = expandedKeys.has(entry.key);
          return (
            <Card
              key={entry.key}
              className={styles.entryCard}
              style={{ "--entrance-index": index } as React.CSSProperties}
            >
              <div
                className={styles.entryHeader}
                onClick={() => toggleExpanded(entry.key)}
              >
                <div className={styles.entryHeaderLeft}>
                  <Icon
                    icon={isExpanded ? "chevron-down" : "chevron-right"}
                    size={14}
                    className={styles.expandIcon}
                  />
                  <Tag
                    minimal={true}
                    intent={getTypeColor(entry.type)}
                    className={styles.typeTag}
                  >
                    {entry.type}
                  </Tag>
                  <span className={styles.objectType}>{entry.objectType}</span>
                  {entry.metadata.isOptimistic && (
                    <Tooltip content="Has optimistic updates">
                      <Tag minimal={true} intent="warning" icon="time">
                        Optimistic
                      </Tag>
                    </Tooltip>
                  )}
                </div>

                <div className={styles.entryHeaderRight}>
                  <Tooltip content={`Status: ${entry.metadata.status}`}>
                    <Tag
                      minimal={true}
                      intent={getStatusColor(entry.metadata.status)}
                      icon={getStatusIcon(entry.metadata.status)}
                    >
                      {entry.metadata.status}
                    </Tag>
                  </Tooltip>
                  <Tooltip
                    content={`Last updated: ${
                      new Date(entry.metadata.timestamp).toLocaleString()
                    }`}
                  >
                    <span className={styles.age}>
                      {formatRelativeTime(entry.metadata.timestamp)}
                    </span>
                  </Tooltip>
                  <Tooltip content={`Cache entry size`}>
                    <span className={styles.size}>
                      {formatBytes(entry.metadata.size)}
                    </span>
                  </Tooltip>
                  <Button
                    icon="refresh"
                    variant="minimal"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      void handleInvalidate(entry);
                    }}
                  />
                </div>
              </div>

              <Collapse isOpen={isExpanded}>
                <div className={styles.entryBody}>
                  <div className={styles.section}>
                    <h4>Cache Key</h4>
                    <CopyableCodeBlock className={styles.codeBlock}>
                      {entry.key}
                    </CopyableCodeBlock>
                  </div>

                  {entry.type === "list"
                    && (entry.where != null || entry.orderBy != null) && (
                    <div className={styles.section}>
                      <h4>Query Parameters</h4>
                      <CopyableCodeBlock className={styles.codeBlock}>
                        {JSON.stringify(
                          {
                            where: entry.where,
                            orderBy: entry.orderBy,
                            pageSize: entry.pageSize,
                          },
                          null,
                          2,
                        )}
                      </CopyableCodeBlock>
                    </div>
                  )}

                  {entry.type === "link" && entry.linkName != null && (
                    <div className={styles.section}>
                      <h4>Link</h4>
                      <CopyableCodeBlock className={styles.codeBlock}>
                        {entry.linkName}
                      </CopyableCodeBlock>
                    </div>
                  )}

                  {entry.data !== undefined && (
                    <div className={styles.section}>
                      <h4>Cached Data</h4>
                      <CopyableCodeBlock className={styles.codeBlock}>
                        {JSON.stringify(entry.data, null, 2)}
                      </CopyableCodeBlock>
                    </div>
                  )}
                </div>
              </Collapse>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
