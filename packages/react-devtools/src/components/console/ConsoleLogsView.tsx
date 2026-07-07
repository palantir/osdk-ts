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
  InputGroup,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
} from "@blueprintjs/core";
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

  const counts = useMemo(() => {
    let error = 0;
    let warn = 0;
    for (const entry of entries) {
      if (entry.level === "error") {
        error++;
      } else if (entry.level === "warn") {
        warn++;
      }
    }
    return { error, warn, other: entries.length - error - warn };
  }, [entries]);

  const hidden = entries.length - filtered.length;

  const filterMenu = (
    <Menu>
      {LEVEL_FILTERS.map((option) => (
        <MenuItem
          key={option}
          text={option}
          active={level === option}
          onClick={() => setLevel(option)}
        />
      ))}
      <MenuDivider />
      <MenuItem icon="trash" text="Clear logs" onClick={clear} />
    </Menu>
  );

  return (
    <div className={styles.view}>
      <div className={styles.toolbar}>
        <InputGroup
          fill={true}
          leftIcon="search"
          placeholder="Filter logs…"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <div className={styles.issuesBar}>
          <span className={styles.issuesCount}>{entries.length} issues</span>
          <span className={classNames(styles.pill, styles.pillError)}>
            {counts.error}
          </span>
          <span className={classNames(styles.pill, styles.pillWarn)}>
            {counts.warn}
          </span>
          <span className={classNames(styles.pill, styles.pillOther)}>
            {counts.other}
          </span>
          {hidden > 0 ? (
            <span className={styles.hidden}>{hidden} hidden</span>
          ) : null}
          <Popover content={filterMenu} placement="bottom-end">
            <Button
              className={styles.funnel}
              variant="minimal"
              size="small"
              icon="filter"
              aria-label="Filter logs"
            />
          </Popover>
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className={styles.empty}>No console output captured.</div>
      ) : (
        <div className={styles.list}>
          {/* TODO: virtualize this list so we can render every captured entry
              instead of only the most recent MAX_RENDERED. */}
          {filtered.slice(-MAX_RENDERED).map((entry) => (
            <LogEntryCard key={entry.id} entry={entry} tinted={true} />
          ))}
        </div>
      )}
    </div>
  );
};
