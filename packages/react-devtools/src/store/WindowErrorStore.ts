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

// Captures global JS errors (uncaught throws) and unhandled promise rejections
// from the host page. React's dev-mode render errors are captured separately
// via console.error in ConsoleLogStore, so we don't ship a dedicated error
// boundary alongside this.

import { CircularBuffer } from "../utils/CircularBuffer.js";
import { SubscribableStore } from "./SubscribableStore.js";

export type WindowErrorKind = "error" | "unhandledrejection";

export interface WindowErrorEntry {
  readonly id: string;
  readonly kind: WindowErrorKind;
  readonly message: string;
  readonly stack?: string;
  readonly filename?: string;
  readonly lineno?: number;
  readonly colno?: number;
  readonly timestamp: number;
}

let entryCounter = 0;

function nextId(): string {
  return `windowError-${++entryCounter}-${Date.now()}`;
}

function describeRejectionReason(
  reason: unknown,
): { message: string; stack?: string } {
  if (reason instanceof Error) {
    return { message: reason.message, stack: reason.stack };
  }
  if (typeof reason === "string") {
    return { message: reason };
  }
  try {
    return { message: JSON.stringify(reason) };
  } catch {
    return { message: String(reason) };
  }
}

export class WindowErrorStore extends SubscribableStore {
  private readonly entries: CircularBuffer<WindowErrorEntry>;
  private cachedEntries: readonly WindowErrorEntry[] | null = null;
  private installed = false;
  private suppressed = false;
  private notifyScheduled = false;

  private errorListener: ((event: ErrorEvent) => void) | null = null;
  private rejectionListener:
    | ((event: PromiseRejectionEvent) => void)
    | null = null;

  constructor(capacity: number = 1000) {
    super();
    this.entries = new CircularBuffer(capacity);
  }

  install(): void {
    if (this.installed) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }

    this.errorListener = (event: ErrorEvent) => {
      if (this.suppressed) {
        return;
      }
      const message = event.message
        || (event.error instanceof Error ? event.error.message : "Error");
      const stack = event.error instanceof Error
        ? event.error.stack
        : undefined;
      const entry: WindowErrorEntry = {
        id: nextId(),
        kind: "error",
        message,
        ...(stack !== undefined ? { stack } : {}),
        ...(event.filename ? { filename: event.filename } : {}),
        ...(typeof event.lineno === "number" ? { lineno: event.lineno } : {}),
        ...(typeof event.colno === "number" ? { colno: event.colno } : {}),
        timestamp: Date.now(),
      };
      this.entries.push(entry);
      this.cachedEntries = null;
      this.scheduleNotify();
    };

    this.rejectionListener = (event: PromiseRejectionEvent) => {
      if (this.suppressed) {
        return;
      }
      const { message, stack } = describeRejectionReason(event.reason);
      const entry: WindowErrorEntry = {
        id: nextId(),
        kind: "unhandledrejection",
        message,
        ...(stack !== undefined ? { stack } : {}),
        timestamp: Date.now(),
      };
      this.entries.push(entry);
      this.cachedEntries = null;
      this.scheduleNotify();
    };

    window.addEventListener("error", this.errorListener);
    window.addEventListener("unhandledrejection", this.rejectionListener);
    this.installed = true;
  }

  uninstall(): void {
    if (!this.installed) {
      return;
    }
    if (typeof window !== "undefined") {
      if (this.errorListener) {
        window.removeEventListener("error", this.errorListener);
      }
      if (this.rejectionListener) {
        window.removeEventListener(
          "unhandledrejection",
          this.rejectionListener,
        );
      }
    }
    this.errorListener = null;
    this.rejectionListener = null;
    this.installed = false;
  }

  suppress(): void {
    this.suppressed = true;
  }

  unsuppress(): void {
    this.suppressed = false;
  }

  recordError(error: Error, source?: string): void {
    if (this.suppressed) {
      return;
    }
    const entry: WindowErrorEntry = {
      id: nextId(),
      kind: "error",
      message: error.message,
      ...(error.stack !== undefined ? { stack: error.stack } : {}),
      ...(source !== undefined ? { filename: source } : {}),
      timestamp: Date.now(),
    };
    this.entries.push(entry);
    this.cachedEntries = null;
    this.scheduleNotify();
  }

  getEntries(): readonly WindowErrorEntry[] {
    if (this.cachedEntries != null) {
      return this.cachedEntries;
    }
    this.cachedEntries = this.entries.toArray();
    return this.cachedEntries;
  }

  getSize(): number {
    return this.entries.getSize();
  }

  clear(): void {
    this.entries.clear();
    this.cachedEntries = null;
    this.notifySubscribers();
  }

  dispose(): void {
    this.uninstall();
    this.entries.clear();
    this.cachedEntries = null;
    this.clearSubscribers();
  }

  private scheduleNotify(): void {
    if (this.notifyScheduled) {
      return;
    }
    this.notifyScheduled = true;
    queueMicrotask(() => {
      this.notifyScheduled = false;
      this.notifySubscribers();
    });
  }
}
