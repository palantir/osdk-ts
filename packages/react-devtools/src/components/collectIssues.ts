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

import type { MonitorStore } from "../store/MonitorStore.js";
import type { Issue } from "./issueTypes.js";

const SEVERITY_ORDER: Record<Issue["severity"], number> = {
  error: 0,
  warning: 1,
  info: 2,
};

export function collectIssues(
  monitorStore: MonitorStore,
  now: number
): Issue[] {
  const issues: Issue[] = [];

  for (const err of monitorStore.getMetricsStore().getActionErrors()) {
    issues.push({
      id: err.id,
      severity: "error",
      category: "action failure",
      title: "Action failed",
      message: err.message,
      suggestion: err.validationErrors?.length
        ? "Fix validation errors before retrying"
        : undefined,
      timestamp: err.timestamp,
      expandable: {
        stack: err.stack,
        detailsJson: JSON.stringify(
          {
            actionType: err.actionType,
            parameters: err.parameters,
          },
          null,
          2
        ),
      },
    });
  }

  const windowErrors = monitorStore.getWindowErrorStore().getEntries();
  // Bucketed at 100ms granularity. The lookup checks the current bucket plus
  // the two adjacent buckets so that any console.error within ±100ms of a
  // window error collides regardless of where the timestamps fall.
  const windowErrorBuckets = new Set<string>();
  for (const we of windowErrors) {
    const expandable: NonNullable<Issue["expandable"]> = {};
    if (we.stack) {
      expandable.stack = we.stack;
    }
    if (we.filename || we.lineno || we.colno) {
      expandable.detailsJson = JSON.stringify(
        {
          filename: we.filename,
          lineno: we.lineno,
          colno: we.colno,
        },
        null,
        2
      );
    }
    const hasExpandable =
      expandable.stack !== undefined || expandable.detailsJson !== undefined;

    issues.push({
      id: `windowError-${we.id}`,
      severity: "error",
      category:
        we.kind === "unhandledrejection"
          ? "unhandled rejection"
          : "uncaught error",
      title:
        we.kind === "unhandledrejection"
          ? "Unhandled promise rejection"
          : "Uncaught error",
      message: we.message,
      timestamp: we.timestamp,
      ...(hasExpandable ? { expandable } : {}),
    });

    const bucket = Math.floor(we.timestamp / 100);
    windowErrorBuckets.add(`${we.message}|${bucket}`);
  }

  for (const entry of monitorStore.getConsoleLogStore().getEntries()) {
    if (entry.level !== "error") {
      continue;
    }
    const messageText = entry.args.join(" ");
    const bucket = Math.floor(entry.timestamp / 100);
    if (
      windowErrorBuckets.has(`${messageText}|${bucket - 1}`) ||
      windowErrorBuckets.has(`${messageText}|${bucket}`) ||
      windowErrorBuckets.has(`${messageText}|${bucket + 1}`)
    ) {
      continue;
    }
    const issue: Issue = {
      id: `console-${entry.id}`,
      severity: "error",
      category: "console error",
      title: "console.error",
      message: messageText,
      timestamp: entry.timestamp,
    };
    if (entry.source) {
      issue.expandable = {
        detailsJson: JSON.stringify({ source: entry.source }, null, 2),
      };
    }
    issues.push(issue);
  }

  for (const wr of monitorStore.getPropertyAccessTracker().getWastedRenders()) {
    issues.push({
      id: `wasted-${wr.componentId}-${wr.timestamp}`,
      severity: "warning",
      category: "wasted render",
      title: `${wr.count} renders without property access`,
      message: `${wr.componentName} renders but doesn't use the data`,
      suggestion: "Check if this component needs this data subscription",
      componentId: wr.componentId,
      componentName: wr.componentName,
      timestamp: wr.timestamp,
    });
  }

  for (const up of monitorStore
    .getPropertyAccessTracker()
    .getUnusedProperties()) {
    issues.push({
      id: `unused-${up.componentId}-${up.propertyName}`,
      severity: "info",
      category: "unused field",
      title: `"${up.propertyName}" loaded but never accessed`,
      message: `${up.componentName} fetches this field but never reads it`,
      suggestion: "Remove from query to reduce payload",
      componentId: up.componentId,
      componentName: up.componentName,
      timestamp: now,
    });
  }

  issues.sort(
    (a, b) =>
      SEVERITY_ORDER[a.severity] - SEVERITY_ORDER[b.severity] ||
      b.timestamp - a.timestamp
  );

  return issues;
}
