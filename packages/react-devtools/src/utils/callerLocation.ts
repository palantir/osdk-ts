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

// `Error.captureStackTrace`/`Error.prepareStackTrace`/`CallSite` are real V8
// APIs (Chrome, Node, Electron), already declared as globals here via
// `@types/node`. They're typed as always present because Node always has
// them — but this code runs in arbitrary browsers, where Firefox/Safari
// genuinely lack them at runtime despite what the ambient types claim. The
// `typeof Error.captureStackTrace === "function"` check below is a real
// runtime feature test, not a type-narrowing no-op.

export interface CallerLocation {
  readonly fileName: string;
  readonly line: number;
  readonly column: number;
}

// The only text-parsing path left (captureViaCallSites below needs no
// regex at all) — reached only when Error.captureStackTrace is absent, i.e.
// non-V8 engines (Firefox, Safari), which format frames as
// `name@file:line:column`. Anchored to end-of-line and excluding `@` from
// the captured group so a line this can't cleanly parse fails closed
// (returns undefined) rather than matching a garbled/partial location.
const LINE_LOCATION_REGEX = /@([^@]*):(\d+):(\d+)\s*$/u;

/** Exported for direct unit testing of the line-parsing fallback. */
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
 * V8 prefixes `.stack` with an "Error" (or "Error: message") header line
 * before the frames; Firefox/Safari do not — their frames start at index 0.
 * Detecting which shape a stack has (rather than assuming one) keeps this
 * correct on both, and lets it be verified with synthetic stacks of either
 * shape — a real Firefox/Safari stack with no header line can't be produced here,
 * since this only ever runs under V8 (Vitest/Node).
 *
 * `framesBeforeCaller` counts stack frames between the capture point and
 * the real caller, not counting the header.
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
  const column = site.getColumnNumber();
  if (fileName == null || line == null || column == null) {
    return undefined;
  }
  return { fileName, line, column };
}

/**
 * Returns the location of whoever called `boundaryFn`, skipping `boundaryFn`
 * and everything inside it. On V8 (Chrome, Node, Electron) this is done by
 * function *identity* via `Error.captureStackTrace` + the structured
 * CallSite API — immune to identifier renaming/minification, no text
 * matching against our own names involved.
 *
 * On engines without that API (Firefox, Safari) there is no identity-based
 * elision available, so this falls back to skipping a fixed, statically
 * known number of frames instead: the `new Error()` below is captured from
 * directly inside this function, which `boundaryFn` must call directly (no
 * intermediate calls) — so the real caller is always exactly 2 frames below
 * this one (this function's own frame, then `boundaryFn`'s), independent of
 * whether the engine prefixes the stack with a header line or not.
 */
export function captureCallerLocation(
  boundaryFn: (...args: unknown[]) => unknown
): CallerLocation | undefined {
  // Best-effort by contract (the `| undefined` return type): this calls into
  // host/engine internals and mutates a shared global, across arbitrary
  // browser environments we don't control. If that ever throws, callers
  // (a console.* wrapper, mid-call) must still get `undefined` back rather
  // than an exception — losing source attribution is fine, breaking the
  // user's own console.log is not.
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
