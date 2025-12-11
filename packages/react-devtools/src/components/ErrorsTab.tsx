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
  NonIdealState,
  Tag,
} from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import type { MonitorStore } from "../store/MonitorStore.js";
import type {
  ActionError,
  RenderStorm,
  UnusedProperty,
  WastedRender,
} from "../types/index.js";
import styles from "./ErrorsTab.module.scss";

export interface ErrorsTabProps {
  monitorStore: MonitorStore;
}

interface ErrorEntry {
  id: string;
  type: "action-failure" | "query-error" | "validation-failure";
  severity: "error" | "warning";
  timestamp: number;
  componentName?: string;
  hookType?: string;
  message: string;
  stack?: string;
  details: Record<string, any>;
}

interface WarningEntry {
  id: string;
  type: "wasted-render" | "render-storm" | "unused-property";
  severity: "warning";
  componentName: string;
  message: string;
  details: Record<string, any>;
  suggestions: string[];
}

export const ErrorsTab: React.FC<ErrorsTabProps> = ({ monitorStore }) => {
  const [errors, setErrors] = useState<ErrorEntry[]>([]);
  const [warnings, setWarnings] = useState<WarningEntry[]>([]);
  const [filter, setFilter] = useState<"all" | "errors" | "warnings">("all");

  useEffect(() => {
    const updateData = () => {
      // Collect errors from MetricsStore
      const actionErrors = monitorStore.getMetricsStore().getActionErrors().map(
        (err: ActionError) => ({
          id: err.id,
          type: "action-failure" as const,
          severity: "error" as const,
          timestamp: err.timestamp,
          message: err.message,
          stack: err.stack,
          details: {
            actionType: err.actionType,
            parameters: err.parameters,
            validationErrors: err.validationErrors,
          },
        }),
      );

      // TODO: Add query errors when binding error tracking is implemented
      const queryErrors: ErrorEntry[] = [];

      setErrors([...actionErrors, ...queryErrors]);

      // Collect warnings
      const wastedRenders = monitorStore.getPropertyAccessTracker()
        .getWastedRenders()
        .map((wr: WastedRender) => ({
          id: `${wr.componentId}-${wr.timestamp}`,
          type: "wasted-render" as const,
          severity: "warning" as const,
          componentName: wr.componentName,
          message:
            `${wr.componentName} rendered ${wr.count} times without accessing any properties`,
          details: {
            renderCount: wr.count,
            lastRender: wr.timestamp,
          },
          suggestions: [
            "Check if this component needs to subscribe to this data",
            "Consider memoization to prevent unnecessary renders",
            "Verify render trigger is intentional",
          ],
        }));

      const renderStorms = monitorStore.getRenderAttributionTracker()
        .getRenderStorms()
        .map((storm: RenderStorm) => ({
          id: `${storm.componentId}-${storm.windowStart}`,
          type: "render-storm" as const,
          severity: "warning" as const,
          componentName: storm.componentName,
          message:
            `${storm.componentName} rendered ${storm.renderCount} times in ${storm.duration}ms`,
          details: {
            renderCount: storm.renderCount,
            duration: storm.duration,
            triggers: storm.triggers,
          },
          suggestions: [
            "Check for infinite render loops",
            "Review useEffect dependencies",
            "Consider debouncing state updates",
          ],
        }));

      const unusedProps = monitorStore.getPropertyAccessTracker()
        .getUnusedProperties()
        .map((up: UnusedProperty) => ({
          id: `${up.componentId}-${up.propertyName}`,
          type: "unused-property" as const,
          severity: "warning" as const,
          componentName: up.componentName,
          message: `Property "${up.propertyName}" is loaded but never accessed`,
          details: {
            propertyName: up.propertyName,
            totalRenders: up.totalRenders,
            timesAccessed: up.accessCount,
          },
          suggestions: [
            "Remove unused property from query to reduce payload",
            "Consider if this property should be accessed",
          ],
        }));

      setWarnings([...wastedRenders, ...renderStorms, ...unusedProps]);
    };

    updateData();
    const interval = setInterval(updateData, 2000);
    return () => clearInterval(interval);
  }, [monitorStore]);

  const filteredErrors = filter === "warnings" ? [] : errors;
  const filteredWarnings = filter === "errors" ? [] : warnings;

  return (
    <div className={styles.errorsTab}>
      <div className={styles.toolbar}>
        <h3 className={styles.title}>Errors & Warnings</h3>
        <ButtonGroup>
          <Button
            active={filter === "all"}
            onClick={() => setFilter("all")}
            size="small"
          >
            All ({errors.length + warnings.length})
          </Button>
          <Button
            active={filter === "errors"}
            onClick={() => setFilter("errors")}
            intent={errors.length > 0 ? "danger" : undefined}
            size="small"
          >
            Errors ({errors.length})
          </Button>
          <Button
            active={filter === "warnings"}
            onClick={() => setFilter("warnings")}
            intent={warnings.length > 0 ? "warning" : undefined}
            size="small"
          >
            Warnings ({warnings.length})
          </Button>
        </ButtonGroup>
      </div>

      <div className={styles.errorList}>
        {filteredErrors.length === 0 && filteredWarnings.length === 0 && (
          <NonIdealState
            icon="tick-circle"
            title="No Issues"
            description="Your app is running without errors or warnings"
          />
        )}

        {filteredErrors.map(error => (
          <ErrorCard
            key={error.id}
            error={error}
          />
        ))}

        {filteredWarnings.map(warning => (
          <WarningCard key={warning.id} warning={warning} />
        ))}
      </div>
    </div>
  );
};

const ErrorCard: React.FC<{ error: ErrorEntry }> = ({ error }) => {
  const [expanded, setExpanded] = useState(false);

  const formatTime = (timestamp: number): string => {
    const now = Date.now();
    const diff = now - timestamp;
    if (diff < 1000) return "just now";
    if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <Card
      className={styles.errorCard}
      interactive
      onClick={() => setExpanded(!expanded)}
    >
      <div className={styles.errorHeader}>
        <Icon icon="error" intent="danger" className={styles.errorIcon} />
        <div className={styles.errorTitle}>
          <h5 className={styles.errorMessage}>{error.message}</h5>
          <div className={styles.errorMeta}>
            {error.componentName && <Tag minimal>{error.componentName}</Tag>}
            <span className={styles.timestamp}>
              {formatTime(error.timestamp)}
            </span>
          </div>
        </div>
        <Button
          variant="minimal"
          size="small"
          icon={expanded ? "chevron-up" : "chevron-down"}
        />
      </div>

      <Collapse isOpen={expanded}>
        <div className={styles.errorDetails}>
          {error.stack && (
            <>
              <h6>Stack Trace</h6>
              <pre className={styles.stackTrace}>{error.stack}</pre>
            </>
          )}

          {Object.keys(error.details).length > 0 && (
            <>
              <h6>Details</h6>
              <pre
                className={styles.detailsJson}
              >{JSON.stringify(error.details, null, 2)}</pre>
            </>
          )}
        </div>
      </Collapse>
    </Card>
  );
};

const WarningCard: React.FC<{ warning: WarningEntry }> = ({ warning }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className={styles.warningCard}
      interactive
      onClick={() => setExpanded(!expanded)}
    >
      <div className={styles.warningHeader}>
        <Icon
          icon="warning-sign"
          intent="warning"
          className={styles.warningIcon}
        />
        <div className={styles.warningTitle}>
          <h5 className={styles.warningMessage}>{warning.message}</h5>
          <Tag minimal>{warning.componentName}</Tag>
        </div>
        <Button
          variant="minimal"
          size="small"
          icon={expanded ? "chevron-up" : "chevron-down"}
        />
      </div>

      <Collapse isOpen={expanded}>
        <div className={styles.warningDetails}>
          {Object.keys(warning.details).length > 0 && (
            <>
              <h6>Details</h6>
              <pre
                className={styles.detailsJson}
              >{JSON.stringify(warning.details, null, 2)}</pre>
            </>
          )}

          {warning.suggestions.length > 0 && (
            <>
              <h6>Suggestions</h6>
              <ul className={styles.suggestions}>
                {warning.suggestions.map((suggestion, i) => (
                  <li key={i}>{suggestion}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Collapse>
    </Card>
  );
};
