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

import { Button, InputGroup } from "@blueprintjs/core";
import classNames from "classnames";
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

interface ConsoleLogsViewProps {
  monitorStore: MonitorStore;
}

/**
 * Raw console output with a per-level filter, search, and clear. Each level
 * chip carries its live count.
 */
export const ConsoleLogsView: React.FC<ConsoleLogsViewProps> = ({
  monitorStore,
}) => {
  const { entries, clear } = useConsoleLogs(monitorStore);
  const [level, setLevel] = useState<ConsoleLogLevel | "all">("all");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    const byLevel: Record<string, number> = { all: entries.length };
    for (const entry of entries) {
      byLevel[entry.level] = (byLevel[entry.level] ?? 0) + 1;
    }
    return byLevel;
  }, [entries]);

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
        <InputGroup
          leftIcon="search"
          placeholder="Filter logs…"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          fill={true}
        />
        <div className={styles.chipRow}>
          {LEVEL_FILTERS.map((option) => (
            <button
              key={option}
              type="button"
              className={classNames(
                styles.chip,
                level === option && styles.chipActive
              )}
              onClick={() => setLevel(option)}
            >
              {option}
              {counts[option] ? ` ${counts[option]}` : ""}
            </button>
          ))}
          <Button size="small" variant="minimal" icon="trash" onClick={clear}>
            Clear
          </Button>
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className={styles.empty}>No console output captured.</div>
      ) : (
        <div className={styles.list}>
          {filtered.slice(-MAX_RENDERED).map((entry) => (
            <LogEntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
};
