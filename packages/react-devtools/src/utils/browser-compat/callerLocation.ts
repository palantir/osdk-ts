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

// V8-only stack APIs (Error.captureStackTrace / prepareStackTrace / CallSite)
// are typed as always-present by @types/node, but Firefox/Safari lack them at
// runtime — so the `typeof ... === "function"` check below is a real feature
// test, not a type-narrowing no-op.

export interface CallerLocation {
  readonly fileName: string;
  readonly line: number;
  readonly column?: number;
}

// Non-V8 engines (Firefox/Safari) format frames as `name@file:line:column`.
// Anchored to end-of-line and excluding `@` from the captured group so a line
// it can't parse fails closed (undefined) instead of matching a partial
// location.
const LINE_LOCATION_REGEX = /@([^@]*):(\d+):(\d+)\s*$/u;

export function parseLineLocation(line: string): CallerLocation | undefined {
  const match = LINE_LOCATION_REGEX.exec(line);
  if (!match) {
    return undefined;
  }
  return {
    fileName: match[1],
    line: Number(match[2]),
    column: Number(match[3]),
  };
}

/**
 * Returns the caller's stack line, skipping V8's "Error" header if present.
 * `framesBeforeCaller` = frames from the capture point to the caller.
 */
export function locateCallerLine(
  stack: string,
  framesBeforeCaller: number
): string | undefined {
  const lines = stack.split("\n");
  const hasHeader = parseLineLocation(lines[0]) === undefined;
  return lines[(hasHeader ? 1 : 0) + framesBeforeCaller];
}

function captureViaCallSites(
  captureStackTrace: typeof Error.captureStackTrace,
  boundaryFn: (...args: unknown[]) => unknown
): CallerLocation | undefined {
  const originalPrepareStackTrace = Error.prepareStackTrace;
  let callSites: NodeJS.CallSite[] | undefined;
  Error.prepareStackTrace = (_err, sites) => {
    callSites = sites;
  };
  try {
    const target: { stack?: unknown } = {};
    captureStackTrace(target, boundaryFn);
    // Accessing `.stack` forces the lazy formatter (our override above) to
    // run, populating `callSites` before we restore the original.
    void target.stack;
  } finally {
    Error.prepareStackTrace = originalPrepareStackTrace;
  }

  const site = callSites?.[0];
  if (!site) {
    return undefined;
  }
  const fileName = site.getFileName() ?? site.getEvalOrigin();
  const line = site.getLineNumber();
  if (fileName == null || line == null) {
    return undefined;
  }
  // column is captured when present but never rendered (formatCallerLocation
  // emits file:line), so a null column must not throw away a good file:line —
  // some native/eval call sites report one.
  const column = site.getColumnNumber();
  return column == null ? { fileName, line } : { fileName, line, column };
}

/**
 * Returns the location of whoever called `boundaryFn`. On V8 it elides
 * `boundaryFn` by function identity (minification-proof); elsewhere it skips a
 * fixed 2 frames, so `boundaryFn` must call this directly.
 */
export function captureCallerLocation(
  boundaryFn: (...args: unknown[]) => unknown
): CallerLocation | undefined {
  // Best-effort: this pokes host/engine internals and mutates a shared global.
  // If it throws, the caller gets `undefined` instead of a thrown error.
  try {
    const captureStackTrace = Error.captureStackTrace;
    if (typeof captureStackTrace === "function") {
      return captureViaCallSites(captureStackTrace, boundaryFn);
    }

    const stack = new Error().stack;
    if (!stack) {
      return undefined;
    }
    const callerLine = locateCallerLine(stack, 2);
    if (!callerLine) {
      return undefined;
    }
    return parseLineLocation(callerLine);
  } catch {
    return undefined;
  }
}

export function formatCallerLocation(
  location: CallerLocation | undefined
): string | undefined {
  if (!location) {
    return undefined;
  }
  const shortName = location.fileName.split("/").pop() ?? location.fileName;
  return `${shortName}:${location.line}`;
}
