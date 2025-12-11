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
  NonIdealState,
  Tag,
  Tooltip,
} from "@blueprintjs/core";
import type { CacheEntry } from "@osdk/client/unstable-do-not-use";
import React, { useCallback, useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import styles from "./CacheInspectorTab.module.scss";

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

export const CacheInspectorTab: React.FC<CacheInspectorTabProps> = (
  { monitorStore },
) => {
  const [snapshot, setSnapshot] = useState<CacheSnapshot>({
    entries: [],
    stats: { totalEntries: 0, totalSize: 0, totalHits: 0 },
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadSnapshot = async () => {
      setIsLoading(true);
      setLoadError(null);
      try {
        const entries = await monitorStore.getCacheEntries();
        if (!mounted) return;
        const totalSize = entries.reduce(
          (sum: number, e: CacheEntry) => sum + e.metadata.size,
          0,
        );
        const totalHits = entries.reduce(
          (sum: number, e: CacheEntry) => sum + e.metadata.hitCount,
          0,
        );
        setSnapshot({
          entries,
          stats: {
            totalEntries: entries.length,
            totalSize,
            totalHits,
          },
        });
      } catch (error) {
        if (!mounted) return;
        setLoadError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    void loadSnapshot();
    const interval = setInterval(() => void loadSnapshot(), 2000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [monitorStore]);

  const refreshSnapshot = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const entries = await monitorStore.getCacheEntries();
      const totalSize = entries.reduce(
        (sum: number, e: CacheEntry) => sum + e.metadata.size,
        0,
      );
      const totalHits = entries.reduce(
        (sum: number, e: CacheEntry) => sum + e.metadata.hitCount,
        0,
      );
      setSnapshot({
        entries,
        stats: {
          totalEntries: entries.length,
          totalSize,
          totalHits,
        },
      });
    } catch (error) {
      setLoadError(error instanceof Error ? error : new Error(String(error)));
    } finally {
      setIsLoading(false);
    }
  }, [monitorStore]);

  const filteredEntries = snapshot.entries.filter(entry => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      entry.key.toLowerCase().includes(query)
      || entry.objectType.toLowerCase().includes(query)
      || entry.type.toLowerCase().includes(query)
    );
  });

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes}B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
  };

  const formatAge = (timestamp: number) => {
    const age = Date.now() - timestamp;
    if (age < 1000) return "just now";
    if (age < 60000) return `${Math.floor(age / 1000)}s ago`;
    if (age < 3600000) return `${Math.floor(age / 60000)}m ago`;
    return `${Math.floor(age / 3600000)}h ago`;
  };

  const getTypeColor = (type: string) => {
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
  };

  const getStatusIcon = (status: string) => {
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
  };

  const getStatusColor = (status: string) => {
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
  };

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
      await refreshSnapshot();
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
        await refreshSnapshot();
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
              {formatSize(snapshot.stats.totalSize)}
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
            fill
          />
        </div>

        <ButtonGroup>
          <Button
            icon="refresh"
            onClick={() => void refreshSnapshot()}
            loading={isLoading}
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

      {(loadError || invalidateError) && (
        <div className={styles.errorBanner}>
          <Icon icon="error" intent="danger" />
          <span>{(loadError || invalidateError)?.message}</span>
          <Button
            icon="cross"
            variant="minimal"
            size="small"
            onClick={() => {
              setLoadError(null);
              setInvalidateError(null);
            }}
          />
        </div>
      )}

      <div className={styles.content}>
        {filteredEntries.length === 0 && !isLoading && (
          <NonIdealState
            icon="database"
            title={snapshot.entries.length === 0
              ? "No Cache Entries"
              : "No Matching Entries"}
            description={snapshot.entries.length === 0
              ? "The cache is empty. Query some data to see cache entries."
              : "Try a different search term."}
          />
        )}

        {filteredEntries.map((entry) => {
          const isExpanded = expandedKeys.has(entry.key);
          return (
            <Card key={entry.key} className={styles.entryCard}>
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
                    minimal
                    intent={getTypeColor(entry.type)}
                    className={styles.typeTag}
                  >
                    {entry.type}
                  </Tag>
                  <span className={styles.objectType}>{entry.objectType}</span>
                  {entry.metadata.isOptimistic && (
                    <Tooltip content="Has optimistic updates">
                      <Tag minimal intent="warning" icon="time">
                        Optimistic
                      </Tag>
                    </Tooltip>
                  )}
                </div>

                <div className={styles.entryHeaderRight}>
                  <Tooltip content={`Status: ${entry.metadata.status}`}>
                    <Tag
                      minimal
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
                      {formatAge(entry.metadata.timestamp)}
                    </span>
                  </Tooltip>
                  <Tooltip content={`Cache entry size`}>
                    <span className={styles.size}>
                      {formatSize(entry.metadata.size)}
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
                    <pre className={styles.codeBlock}>{entry.key}</pre>
                  </div>

                  {entry.queryParams
                    && Object.keys(entry.queryParams).length > 0 && (
                    <div className={styles.section}>
                      <h4>Query Parameters</h4>
                      <pre className={styles.codeBlock}>
                        {JSON.stringify(entry.queryParams, null, 2)}
                      </pre>
                    </div>
                  )}

                  {entry.data && (
                    <div className={styles.section}>
                      <h4>Cached Data</h4>
                      <pre className={styles.codeBlock}>
                        {JSON.stringify(entry.data, null, 2)}
                      </pre>
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
