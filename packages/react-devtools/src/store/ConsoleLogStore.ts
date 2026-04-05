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

import { CircularBuffer } from "../utils/CircularBuffer.js";
import { SubscribableStore } from "./SubscribableStore.js";

export type ConsoleLogLevel = "log" | "warn" | "error" | "info" | "debug";

const CONSOLE_LEVELS: readonly ConsoleLogLevel[] = [
  "log",
  "warn",
  "error",
  "info",
  "debug",
] as const;

export interface ConsoleLogEntry {
  readonly id: string;
  readonly level: ConsoleLogLevel;
  readonly args: readonly string[];
  readonly timestamp: number;
  readonly source?: string;
}

let entryCounter = 0;

function nextId(): string {
  return `console-${++entryCounter}-${Date.now()}`;
}

const MAX_DEPTH = 3;
const MAX_STRING_SIZE = 10240; // 10KB
const MAX_TOTAL_SIZE = 10240; // 10KB

const INTERNAL_FRAME_PATTERN =
  /ConsoleLogStore|serializeArg|serializeValue|getCallerLocation|capEntrySize|osdkConsoleWrapper/;

// BrowserLogger formats calls with %c CSS styling and a "border: 1px solid"
// pattern from its createStyle(). We filter these from the devtools console
// because devtools monitors the same operations through its own instrumentation.
const BROWSER_LOGGER_CSS = "border: 1px solid";
function isBrowserLoggerCall(args: unknown[]): boolean {
  return typeof args[0] === "string"
    && args[0].startsWith("%c")
    && typeof args[1] === "string"
    && args[1].includes(BROWSER_LOGGER_CSS);
}

const CHROME_FRAME_REGEX_PAREN = /at\s+.*?\((.*?):(\d+):\d+\)/;
const CHROME_FRAME_REGEX_BARE = /at\s+(.*?):(\d+):\d+/;
const FIREFOX_FRAME_REGEX = /@(.*?):(\d+):\d+/;

function serializeValue(
  value: unknown,
  depth: number,
  seen: WeakSet<object>,
): string {
  if (value === null) { // eslint-disable-line eqeqeq
    return "null";
  }
  if (value === undefined) {
    return "undefined";
  }

  const type = typeof value;

  if (type === "string") {
    if (depth === 0) {
      return value as string;
    }
    return `"${value as string}"`;
  }
  if (type === "number" || type === "boolean") {
    return String(value);
  }
  if (type === "bigint") {
    return `BigInt(${String(value)})`;
  }
  if (type === "symbol") {
    return `Symbol(${(value as symbol).description ?? ""})`;
  }
  if (type === "function") {
    return `[Function: ${
      (value as (...args: readonly unknown[]) => unknown).name || "anonymous"
    }]`;
  }

  const obj = value as object;

  if (typeof Node !== "undefined" && obj instanceof Node) {
    const el = obj as { tagName?: string };
    return `[HTMLElement: ${el.tagName ?? "unknown"}]`;
  }

  if (obj instanceof Error) {
    return obj.stack ?? obj.message;
  }

  if (seen.has(obj)) {
    return "[Circular]";
  }

  if (depth >= MAX_DEPTH) {
    if (Array.isArray(obj)) {
      return `[Array(${obj.length})]`;
    }
    return "[Object]";
  }

  seen.add(obj);
  try {
    if (Array.isArray(obj)) {
      const items: string[] = [];
      for (let i = 0; i < obj.length; i++) {
        items.push(serializeValue(obj[i], depth + 1, seen));
      }
      return `[${items.join(",")}]`;
    }

    const entries: string[] = [];
    for (const key of Object.keys(obj)) {
      const val = serializeValue(
        (obj as Record<string, unknown>)[key],
        depth + 1,
        seen,
      );
      entries.push(`"${key}":${val}`);
    }
    return `{${entries.join(",")}}`;
  } catch {
    return String(obj);
  } finally {
    seen.delete(obj);
  }
}

function serializeArg(arg: unknown): string {
  const seen = new WeakSet<object>();
  const result = serializeValue(arg, 0, seen);
  if (result.length > MAX_STRING_SIZE) {
    return result.slice(0, MAX_STRING_SIZE) + "...truncated";
  }
  return result;
}

function getCallerLocation(): string | undefined {
  const err = new Error();
  const stack = err.stack;
  if (!stack) {
    return undefined;
  }

  const lines = stack.split("\n");

  for (const line of lines) {
    if (INTERNAL_FRAME_PATTERN.test(line)) {
      continue;
    }

    let match = CHROME_FRAME_REGEX_PAREN.exec(line);
    if (!match) {
      match = CHROME_FRAME_REGEX_BARE.exec(line);
    }
    if (!match) {
      match = FIREFOX_FRAME_REGEX.exec(line);
    }

    if (match) {
      const filePath = match[1];
      const lineNum = match[2];
      const fileName = filePath.split("/").pop() ?? filePath;
      return `${fileName}:${lineNum}`;
    }
  }

  return undefined;
}

function capEntrySize(args: string[]): string[] {
  let totalSize = 0;
  for (const arg of args) {
    totalSize += arg.length;
  }

  if (totalSize <= MAX_TOTAL_SIZE) {
    return args;
  }

  const result = args.slice();
  while (totalSize > MAX_TOTAL_SIZE) {
    let longestIndex = 0;
    let longestLength = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i].length > longestLength) {
        longestLength = result[i].length;
        longestIndex = i;
      }
    }
    if (longestLength <= 40) {
      break;
    }
    const replacement = `...truncated (${longestLength} bytes)`;
    totalSize += replacement.length - longestLength;
    result[longestIndex] = replacement;
  }
  return result;
}

export class ConsoleLogStore extends SubscribableStore {
  private readonly entries: CircularBuffer<ConsoleLogEntry>;
  private cachedEntries: readonly ConsoleLogEntry[] | null = null;
  private readonly originals = new Map<
    ConsoleLogLevel,
    (...args: unknown[]) => void
  >();
  private readonly wrappers = new Map<
    ConsoleLogLevel,
    (...args: unknown[]) => void
  >();
  private installed = false;
  private suppressed = false;
  private capturing = false;
  private notifyScheduled = false;

  constructor(capacity: number = 1000) {
    super();
    this.entries = new CircularBuffer(capacity);
  }

  install(): void {
    if (this.installed) {
      return;
    }

    for (const level of CONSOLE_LEVELS) {
      const original = console[level]; // eslint-disable-line no-console
      this.originals.set(level, original);

      const store = this;
      const wrapper = function osdkConsoleWrapper(
        this: Console,
        ...args: unknown[]
      ) {
        original.apply(this ?? console, args);

        if (store.suppressed || store.capturing || isBrowserLoggerCall(args)) {
          return;
        }

        store.capturing = true;
        try {
          const source = getCallerLocation();
          const serializedArgs = capEntrySize(args.map(serializeArg));
          const entry: ConsoleLogEntry = {
            id: nextId(),
            level,
            args: serializedArgs,
            timestamp: Date.now(),
            ...(source !== undefined ? { source } : {}),
          };

          store.entries.push(entry);
          store.cachedEntries = null;
          store.scheduleNotify();
        } catch {
        } finally {
          store.capturing = false;
        }
      };

      console[level] = wrapper; // eslint-disable-line no-console
      this.wrappers.set(level, wrapper);
    }

    this.installed = true;
  }

  uninstall(): void {
    if (!this.installed) {
      return;
    }

    for (const level of CONSOLE_LEVELS) {
      const original = this.originals.get(level);
      const ourWrapper = this.wrappers.get(level);
      if (original && ourWrapper && console[level] === ourWrapper) { // eslint-disable-line no-console
        console[level] = original; // eslint-disable-line no-console
      }
    }

    this.originals.clear();
    this.wrappers.clear();
    this.installed = false;
  }

  suppress(): void {
    this.suppressed = true;
  }

  unsuppress(): void {
    this.suppressed = false;
  }

  getEntries(): readonly ConsoleLogEntry[] {
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
