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

import { Button, Icon, type IconName, Tag, Tooltip } from "@blueprintjs/core";
import React, { useMemo } from "react";

import { useSharedTick } from "../../hooks/useSharedTick.js";
import type { MonitorStore } from "../../store/MonitorStore.js";
import type { ComponentHookBinding } from "../../utils/ComponentQueryRegistry.js";
import { formatRelativeTime } from "../../utils/format.js";
import { formatHookSignature } from "../queryParamsFormat.js";
import styles from "./ComponentsPanel.module.scss";

function getHookIcon(hookType: string): IconName {
  switch (hookType) {
    case "useOsdkObject": {
      return "document";
    }
    case "useOsdkObjects": {
      return "properties";
    }
    case "useOsdkAction": {
      return "cog";
    }
    case "useLinks": {
      return "flows";
    }
    case "useObjectSet": {
      return "database";
    }
    default: {
      return "code";
    }
  }
}

interface HookStatus {
  state: "idle" | "loading" | "success" | "stale";
  lastUpdate: number | null;
}

function renderStatus(status: HookStatus): React.ReactNode {
  if (status.state === "loading") {
    return (
      <Tag minimal intent="primary" icon="refresh" className={styles.statusBadge}>
        Loading
      </Tag>
    );
  }
  if (status.state === "success" && status.lastUpdate !== null) {
    return (
      <Tag minimal intent="success" icon="tick" className={styles.statusBadge}>
        {formatRelativeTime(status.lastUpdate)}
      </Tag>
    );
  }
  if (status.state === "stale" && status.lastUpdate !== null) {
    return (
      <Tag minimal intent="warning" icon="time" className={styles.statusBadge}>
        stale
      </Tag>
    );
  }
  return null;
}

interface HookRowProps {
  binding: ComponentHookBinding;
  monitorStore: MonitorStore;
}

/**
 * One OSDK hook within a component: its type, freshness/load state, a
 * human-readable query signature, a jump-to-source link, and render count.
 */
export const HookRow: React.FC<HookRowProps> = ({ binding, monitorStore }) => {
  const tick = useSharedTick();

  const status = useMemo((): HookStatus => {
    const lastEmission = monitorStore
      .getEventTimeline()
      .getLastEmission(binding.subscriptionId);
    if (lastEmission) {
      const age = Date.now() - lastEmission.timestamp;
      return {
        state: age > 30000 ? "stale" : "success",
        lastUpdate: lastEmission.timestamp,
      };
    }
    if (binding.renderCount > 0) {
      return { state: "loading", lastUpdate: null };
    }
    return { state: "idle", lastUpdate: null };
    // tick drives refresh of the timeline-derived status.
  }, [tick, monitorStore, binding.subscriptionId, binding.renderCount]);

  const openLocation = (): void => {
    if (binding.filePath !== undefined && binding.lineNumber !== undefined) {
      window.open(`vscode://file/${binding.filePath}:${binding.lineNumber}`);
    }
  };

  return (
    <div className={styles.hookRow}>
      <Tooltip content={binding.hookType}>
        <Tag minimal icon={getHookIcon(binding.hookType)} className={styles.hookTag}>
          {binding.hookType}
        </Tag>
      </Tooltip>
      {renderStatus(status)}
      <Tooltip content={binding.querySignature}>
        <div className={styles.signature}>{formatHookSignature(binding)}</div>
      </Tooltip>
      {binding.filePath !== undefined
        ? (
          <Tooltip content={`${binding.filePath}:${binding.lineNumber ?? ""}`}>
            <Button
              variant="minimal"
              size="small"
              icon="document-open"
              className={styles.locationButton}
              onClick={openLocation}
              text={`${binding.filePath.split("/").pop()}:${
                binding.lineNumber ?? ""
              }`}
            />
          </Tooltip>
        )
        : null}
      {binding.renderCount > 0
        ? (
          <Tooltip
            content={`${binding.renderCount} renders, avg ${
              binding.avgRenderDuration.toFixed(1)
            }ms`}
          >
            <span className={styles.renders}>
              <Icon icon="refresh" size={10} /> {binding.renderCount}
            </span>
          </Tooltip>
        )
        : null}
    </div>
  );
};
