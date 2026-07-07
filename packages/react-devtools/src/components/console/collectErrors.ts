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

import type { MonitorStore } from "../../store/MonitorStore.js";
import type { Issue } from "../issueTypes.js";

// A console.error within ±100ms of a window error with the same message is
// treated as a duplicate of that window error and dropped (buckets are 100ms
// wide; the lookup checks adjacent buckets too).
export function collectErrors(monitorStore: MonitorStore): Issue[] {
  const errors: Issue[] = [];

  for (const err of monitorStore.getMetricsStore().getActionErrors()) {
    errors.push({
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
          { actionType: err.actionType, parameters: err.parameters },
          null,
          2
        ),
      },
    });
  }

  const windowErrorBuckets = new Set<string>();
  for (const we of monitorStore.getWindowErrorStore().getEntries()) {
    const expandable: NonNullable<Issue["expandable"]> = {};
    if (we.stack) {
      expandable.stack = we.stack;
    }
    if (we.filename || we.lineno || we.colno) {
      expandable.detailsJson = JSON.stringify(
        { filename: we.filename, lineno: we.lineno, colno: we.colno },
        null,
        2
      );
    }
    const hasExpandable =
      expandable.stack !== undefined || expandable.detailsJson !== undefined;
    errors.push({
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
    windowErrorBuckets.add(`${we.message}|${Math.floor(we.timestamp / 100)}`);
  }

  for (const entry of monitorStore.getConsoleLogStore().getEntries()) {
    if (entry.level !== "error") {
      continue;
    }
    const messageText = entry.args.join(" ");
    // Window errors carry a single message string, but a mirrored console.error
    // may add extra args (e.g. console.error(message, errorObject)). Match the
    // dedup bucket on the first arg alone so the mirror is still recognized.
    const dedupKey = String(entry.args[0] ?? messageText);
    const bucket = Math.floor(entry.timestamp / 100);
    if (
      windowErrorBuckets.has(`${dedupKey}|${bucket - 1}`) ||
      windowErrorBuckets.has(`${dedupKey}|${bucket}`) ||
      windowErrorBuckets.has(`${dedupKey}|${bucket + 1}`)
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
    errors.push(issue);
  }

  errors.sort((a, b) => b.timestamp - a.timestamp);
  return errors;
}
