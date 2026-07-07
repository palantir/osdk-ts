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

import { Button, ButtonGroup, InputGroup } from "@blueprintjs/core";
import type { Intent } from "@blueprintjs/core";
import React, { useMemo, useState } from "react";

import { useConsoleLogs } from "../../hooks/useConsoleLogs.js";
import type { ConsoleLogLevel } from "../../store/ConsoleLogStore.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { LogEntryCard } from "../LogEntryCard.js";

import styles from "./ConsolePanel.module.scss";

const MAX_RENDERED = 200;

const LEVEL_FILTERS: Array<ConsoleLogLevel | "all"> = [
  "all",
  "log",
  "info",
  "warn",
  "error",
  "debug",
];

/**
 * Colors each level filter with the Blueprint intent that matches the log
 * level's color in {@link LogEntryCard} (danger=red, warning=orange,
 * primary=blue), so the filter row reads as a color key for the feed.
 */
const LEVEL_INTENT: Record<ConsoleLogLevel | "all", Intent> = {
  all: "none",
  log: "none",
  info: "primary",
  warn: "warning",
  error: "danger",
  debug: "none",
};

interface ConsoleLogsViewProps {
  monitorStore: MonitorStore;
}

export const ConsoleLogsView: React.FC<ConsoleLogsViewProps> = ({
  monitorStore,
}) => {
  const { entries, clear } = useConsoleLogs(monitorStore);
  const [level, setLevel] = useState<ConsoleLogLevel | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return entries.filter(
      (entry) =>
        (level === "all" || entry.level === level) &&
        (query.length === 0 ||
          entry.args.some((arg) => arg.toLowerCase().includes(query)))
    );
  }, [entries, level, search]);

  return (
    <div className={styles.view}>
      <div className={styles.toolbar}>
        <div className={styles.searchRow}>
          <InputGroup
            fill={true}
            leftIcon="search"
            placeholder="Filter logs…"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
          />
          <Button size="small" variant="minimal" icon="trash" onClick={clear}>
            Clear
          </Button>
        </div>
        <ButtonGroup className={styles.levelFilters}>
          {LEVEL_FILTERS.map((option) => (
            <Button
              key={option}
              active={level === option}
              intent={LEVEL_INTENT[option]}
              size="small"
              onClick={() => setLevel(option)}
            >
              {option}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      {filtered.length === 0 ? (
        <div className={styles.empty}>No console output captured.</div>
      ) : (
        <div className={styles.list}>
          {/* TODO: virtualize this list so we can render every captured entry
              instead of only the most recent MAX_RENDERED. */}
          {filtered.slice(-MAX_RENDERED).map((entry) => (
            <LogEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
};
