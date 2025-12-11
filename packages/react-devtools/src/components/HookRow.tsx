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

import { Button, Icon, Tag, Tooltip } from "@blueprintjs/core";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import type { ComponentHookBinding } from "../utils/ComponentQueryRegistry.js";
import styles from "./HookRow.module.scss";

export interface HookRowProps {
  binding: ComponentHookBinding;
  formatTime?: (ms: number) => string;
  monitorStore?: any; // Optional MonitorStore for status tracking
}

interface HookStatus {
  state: "idle" | "loading" | "success" | "error" | "stale";
  lastUpdate: number | null;
  age: number | null;
  errorMessage?: string;
}

/**
 * Displays a single hook binding with its type, query, and source location.
 * Shows real-time status indicators for loading/error/success states.
 */
export const HookRow: React.FC<HookRowProps> = ({
  binding,
  formatTime = (ms) => `${ms.toFixed(1)}ms`,
  monitorStore,
}) => {
  const [status, setStatus] = useState<HookStatus>({
    state: "idle",
    lastUpdate: null,
    age: null,
  });

  // Track hook status from EventTimeline
  useEffect(() => {
    if (!monitorStore) return;

    const updateStatus = () => {
      const timeline = monitorStore.getEventTimeline();
      const lastEmission = timeline.getLastEmission(binding.subscriptionId);

      if (lastEmission) {
        const age = Date.now() - lastEmission.timestamp;
        const isStale = age > 30000; // 30 seconds

        setStatus({
          state: isStale ? "stale" : "success",
          lastUpdate: lastEmission.timestamp,
          age,
        });
      } else if (binding.renderCount > 0) {
        // Hook has rendered but no emission yet - might be loading
        setStatus({
          state: "loading",
          lastUpdate: null,
          age: null,
        });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 1000);
    return () => clearInterval(interval);
  }, [binding.subscriptionId, binding.renderCount, monitorStore]);

  const handleClickLocation = () => {
    const filePath = binding.originalFilePath || binding.filePath;
    const lineNumber = binding.originalLineNumber || binding.lineNumber;

    if (filePath && lineNumber) {
      window.open(`vscode://file/${filePath}:${lineNumber}`);
    }
  };

  const getHookIcon = (hookType: string) => {
    switch (hookType) {
      case "useOsdkObject":
        return "document";
      case "useOsdkObjects":
        return "properties";
      case "useOsdkAction":
        return "cog";
      case "useLinks":
        return "flows";
      case "useObjectSet":
        return "database";
      default:
        return "code";
    }
  };

  const getHookColor = (hookType: string) => {
    switch (hookType) {
      case "useOsdkObject":
        return styles.hookObject;
      case "useOsdkObjects":
        return styles.hookObjects;
      case "useOsdkAction":
        return styles.hookAction;
      case "useLinks":
        return styles.hookLinks;
      case "useObjectSet":
        return styles.hookObjectSet;
      default:
        return "";
    }
  };

  const truncateSignature = (sig: string, maxLength: number = 50) => {
    if (sig.length <= maxLength) return sig;
    return `${sig.substring(0, maxLength)}...`;
  };

  const getStatusBadge = () => {
    if (!monitorStore) return null;

    const formatAge = (ms: number) => {
      if (ms < 1000) return "just now";
      if (ms < 60000) return `${Math.floor(ms / 1000)}s ago`;
      if (ms < 3600000) return `${Math.floor(ms / 60000)}m ago`;
      return `${Math.floor(ms / 3600000)}h ago`;
    };

    switch (status.state) {
      case "loading":
        return (
          <Tooltip content="Loading data...">
            <Tag
              minimal
              intent="primary"
              icon="refresh"
              className={styles.statusBadge}
            >
              Loading
            </Tag>
          </Tooltip>
        );
      case "success":
        return status.age != null
          ? (
            <Tooltip content={`Last updated ${formatAge(status.age)}`}>
              <Tag
                minimal
                intent="success"
                icon="tick"
                className={styles.statusBadge}
              >
                {formatAge(status.age)}
              </Tag>
            </Tooltip>
          )
          : null;
      case "stale":
        return status.age != null
          ? (
            <Tooltip content={`Data is stale (${formatAge(status.age)})`}>
              <Tag
                minimal
                intent="warning"
                icon="time"
                className={styles.statusBadge}
              >
                Stale
              </Tag>
            </Tooltip>
          )
          : null;
      case "error":
        return (
          <Tooltip content={status.errorMessage || "Error loading data"}>
            <Tag
              minimal
              intent="danger"
              icon="error"
              className={styles.statusBadge}
            >
              Error
            </Tag>
          </Tooltip>
        );
      case "idle":
      default:
        return null;
    }
  };

  return (
    <div className={styles.hookRow}>
      <Tooltip content={binding.hookType}>
        <div
          className={classNames(
            styles.hookBadge,
            getHookColor(binding.hookType),
          )}
        >
          <Icon icon={getHookIcon(binding.hookType)} size={12} />
          <span className={styles.hookType}>{binding.hookType}</span>
        </div>
      </Tooltip>

      {getStatusBadge()}

      <Tooltip content={binding.querySignature}>
        <div className={styles.querySignature}>
          {truncateSignature(binding.querySignature)}
        </div>
      </Tooltip>

      {binding.filePath && (
        <Tooltip
          content={binding.originalFilePath
            ? `${binding.originalFilePath}:${binding.originalLineNumber}`
            : `${binding.filePath}:${binding.lineNumber}`}
        >
          <Button
            variant="minimal"
            size="small"
            icon="document"
            className={styles.locationButton}
            onClick={handleClickLocation}
            text={binding.originalFilePath
              ? `${
                binding.originalFilePath.split("/").pop()
              }:${binding.originalLineNumber}`
              : `${binding.filePath.split("/").pop()}:${binding.lineNumber}`}
          />
        </Tooltip>
      )}

      {binding.renderCount > 0 && (
        <Tooltip
          content={`Renders: ${binding.renderCount}, Avg: ${
            formatTime(binding.avgRenderDuration)
          }`}
        >
          <div className={styles.performance}>
            <Icon icon="time" size={10} />
            <span>{formatTime(binding.avgRenderDuration)}</span>
          </div>
        </Tooltip>
      )}
    </div>
  );
};
