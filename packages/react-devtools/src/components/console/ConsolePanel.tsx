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

import classNames from "classnames";
import React, { useState } from "react";

import type { DevToolsPanelProps } from "../../plugins/types.js";
import { ConsoleErrorsView } from "./ConsoleErrorsView.js";
import { ConsoleLogsView } from "./ConsoleLogsView.js";

import styles from "./ConsolePanel.module.scss";

type ConsoleView = "errors" | "logs";

/**
 * The Console tab: an Errors / Logs switch. Errors unifies action failures,
 * window errors and console.error into structured cards; Logs is the raw
 * console output with per-level filtering. They stay separate because
 * console.error appears in both sources and internal logs are dropped at
 * capture, so a single merged feed would double-count.
 */
export const ConsolePanel: React.FC<DevToolsPanelProps> = ({
  monitorStore,
}) => {
  const [view, setView] = useState<ConsoleView>("errors");

  return (
    <div className={styles.panel}>
      <div className={styles.segmented}>
        <div className={styles.chipRow}>
          <button
            type="button"
            className={classNames(
              styles.chip,
              view === "errors" && styles.chipActive
            )}
            onClick={() => setView("errors")}
          >
            Errors
          </button>
          <button
            type="button"
            className={classNames(
              styles.chip,
              view === "logs" && styles.chipActive
            )}
            onClick={() => setView("logs")}
          >
            Logs
          </button>
        </div>
      </div>
      {view === "errors" ? (
        <ConsoleErrorsView monitorStore={monitorStore} />
      ) : (
        <ConsoleLogsView monitorStore={monitorStore} />
      )}
    </div>
  );
};
