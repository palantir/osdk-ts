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

import { Button, ButtonGroup } from "@blueprintjs/core";
import React, { useState } from "react";

import type { MonitorStore } from "../../store/MonitorStore.js";
import { ConsoleErrorsView } from "./ConsoleErrorsView.js";
import { ConsoleLogsView } from "./ConsoleLogsView.js";

import styles from "./ConsolePanel.module.scss";

type ConsoleView = "errors" | "logs";

interface ConsolePanelProps {
  monitorStore: MonitorStore;
}

export const ConsolePanel: React.FC<ConsolePanelProps> = ({ monitorStore }) => {
  const [view, setView] = useState<ConsoleView>("errors");

  return (
    <div className={styles.panel}>
      <div className={styles.segmented}>
        <ButtonGroup>
          <Button
            active={view === "errors"}
            onClick={() => setView("errors")}
            size="small"
            icon="error"
          >
            Errors
          </Button>
          <Button
            active={view === "logs"}
            onClick={() => setView("logs")}
            size="small"
            icon="console"
          >
            Logs
          </Button>
        </ButtonGroup>
      </div>
      {view === "errors" ? (
        <ConsoleErrorsView monitorStore={monitorStore} />
      ) : (
        <ConsoleLogsView monitorStore={monitorStore} />
      )}
    </div>
  );
};
