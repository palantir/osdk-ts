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

import MagicString from "magic-string";
import { parseSync } from "oxc-parser";

// A babel-free version of the one rule from `babel-plugin-dev-expression` this
// repo relies on: rewriting `invariant(cond, "message", ...args)` call sites so
// the developer message is dropped in production builds.
//
// We removed babel from the transpile pipeline (oxc-transform now handles TS/JSX),
// but oxc has no plugin host, so this transform is applied directly. Every
// `invariant(cond, ...rest)` call becomes:
//
//   (!(cond) ? process.env.NODE_ENV !== "production"
//     ? invariant(false, ...rest)   // dev: keep the message
//     : invariant(false)            // prod: message stripped, DCE'd by the consumer's bundler
//     : void 0)
//
// The ternary (expression) form is a drop-in replacement for the CallExpression
// node itself, so it is valid in statement or expression position and preserves
// the trailing `;`. `invariant` returns void, so `: void 0` keeps semantics.
//
// Scope (verified across the repo): only `invariant` is used (always the bare
// default import from `tiny-invariant`, never aliased). `warning` has no call
// sites and `__DEV__` is only ever declared locally, so neither is handled here
// (matching dev-expression, which only rewrites the *global* `__DEV__`).

/** @param {string} filename */
function langForFile(filename) {
  if (filename.endsWith(".tsx")) return "tsx";
  if (filename.endsWith(".jsx")) return "jsx";
  if (
    filename.endsWith(".ts") || filename.endsWith(".mts")
    || filename.endsWith(".cts")
  ) {
    return "ts";
  }
  return "js";
}

/**
 * Depth-first walk over an oxc-parser ESTree program, invoking `visit` on every
 * node that has a `type`.
 * @param {any} node
 * @param {(n: any) => void} visit
 */
function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  if (typeof node.type === "string") visit(node);
  for (const key in node) {
    if (key === "type" || key === "start" || key === "end") continue;
    const value = node[key];
    if (Array.isArray(value)) {
      for (const child of value) walk(child, visit);
    } else if (value && typeof value === "object" && "type" in value) {
      walk(value, visit);
    }
  }
}

/**
 * Rewrite `invariant(...)` call sites so their messages can be dropped in
 * production. Returns `null` (no change) when the file has no `invariant(` calls
 * or fails to parse (the caller's transpiler will surface any real parse error).
 *
 * @param {string} code
 * @param {string} filename
 * @returns {{ code: string, map: import("magic-string").SourceMap } | null}
 */
export function applyDevExpression(code, filename) {
  // Cheap bail-out: the vast majority of files have no invariant() calls, so we
  // avoid parsing them entirely.
  if (!code.includes("invariant(")) return null;

  let program;
  try {
    const result = parseSync(filename, code, { lang: langForFile(filename) });
    if (result.errors && result.errors.length > 0) return null;
    program = result.program;
  } catch {
    return null;
  }

  /** @type {Array<{ start: number, end: number, cond: string, rest: string }>} */
  const matches = [];
  walk(program, (node) => {
    if (
      node.type === "CallExpression"
      && node.callee
      && node.callee.type === "Identifier"
      && node.callee.name === "invariant"
      && node.arguments.length >= 1
      // ignore spread as the condition (`invariant(...args)`) — can't rewrite safely
      && node.arguments[0].type !== "SpreadElement"
    ) {
      const args = node.arguments;
      const cond = code.slice(args[0].start, args[0].end);
      const rest = args.length > 1
        ? code.slice(args[1].start, args[args.length - 1].end)
        : "";
      matches.push({ start: node.start, end: node.end, cond, rest });
    }
  });

  if (matches.length === 0) return null;

  // Apply outermost-first; skip any match nested inside a previous one so
  // magic-string never sees overlapping overwrites.
  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const ms = new MagicString(code);
  let lastEnd = -1;
  for (const m of matches) {
    if (m.start < lastEnd) continue; // contained in / overlapping a prior match
    const devCall = m.rest ? `invariant(false, ${m.rest})` : "invariant(false)";
    const replacement =
      `(!(${m.cond}) ? process.env.NODE_ENV !== "production" ? ${devCall} : invariant(false) : void 0)`;
    ms.overwrite(m.start, m.end, replacement);
    lastEnd = m.end;
  }

  return {
    code: ms.toString(),
    map: ms.generateMap({
      hires: true,
      source: filename,
      includeContent: false,
    }),
  };
}

const TRANSFORMABLE = /\.(?:c|m)?[jt]sx?$/;

/**
 * rolldown/rollup plugin wrapper so the same rewrite runs in the tsdown bundle
 * path. rolldown composes the returned sourcemap into the bundle automatically.
 * @returns {import("rolldown").Plugin}
 */
export function devExpressionPlugin() {
  return {
    name: "osdk-dev-expression",
    transform(code, id) {
      if (id.includes("node_modules") || !TRANSFORMABLE.test(id)) return null;
      return applyDevExpression(code, id);
    },
  };
}
