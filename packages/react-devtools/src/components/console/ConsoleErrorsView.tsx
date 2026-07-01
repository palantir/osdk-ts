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

import { InputGroup } from "@blueprintjs/core";
import React, { useMemo, useState, useSyncExternalStore } from "react";

import { createPollingStore } from "../../hooks/createPollingStore.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import { collectErrors } from "./collectErrors.js";
import { ErrorCard } from "./ErrorCard.js";

import styles from "./ConsolePanel.module.scss";

interface ConsoleErrorsViewProps {
  monitorStore: MonitorStore;
}

/**
 * Structured error feed unifying action failures, window errors and
 * console.error. Polls the error sources while mounted via an external store.
 */
export const ConsoleErrorsView: React.FC<ConsoleErrorsViewProps> = ({
  monitorStore,
}) => {
  const store = useMemo(
    () => createPollingStore(() => collectErrors(monitorStore), 2000),
    [monitorStore]
  );
  const errors = useSyncExternalStore(store.subscribe, store.getSnapshot) ?? [];
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (query.length === 0) {
      return errors;
    }
    return errors.filter(
      (error) =>
        error.title.toLowerCase().includes(query) ||
        error.message.toLowerCase().includes(query) ||
        error.category.toLowerCase().includes(query)
    );
  }, [errors, search]);

  return (
    <div className={styles.view}>
      <div className={styles.toolbar}>
        <InputGroup
          leftIcon="search"
          placeholder="Filter errors…"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
      </div>
      {filtered.length === 0 ? (
        <div className={styles.empty}>No errors captured.</div>
      ) : (
        <div className={styles.list}>
          {filtered.map((issue) => (
            <ErrorCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </div>
  );
};
