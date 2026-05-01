/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

// Shared rendering pipeline for hover-snapshot tests. A test passes a list
// of probes-file paths to `renderHoverProbes` and snapshots each returned
// string with `toMatchFileSnapshot`. See README.md and hoverTypes.test.ts
// for an end-to-end example.

import { spawnSync } from "node:child_process";
import * as path from "node:path";
import * as ts from "typescript";

export interface RenderHoverProbesOptions {
  /** Absolute paths to probes files containing `declare const probe_*: T;` declarations. */
  probesPaths: string[];
  /** Absolute path to a tsconfig.json that can compile the probes files. */
  tsconfigPath: string;
}

/**
 * Walks every `declare const probe_*: <Type>;` declaration across the given
 * probes files, renders its type via the TypeScript compiler API, and
 * pretty-prints the result through dprint. Returns a map keyed by probes
 * path; each value is the rendered, dprint-formatted snapshot content for
 * that file (one `type <name> = ...;` declaration per probe).
 *
 * All probes files share one TS program, so types imported by multiple
 * files are parsed and checked only once.
 *
 * Every probe declaration must have a JSDoc above it describing the
 * user-facing situation it captures; a missing JSDoc throws.
 */
export function renderHoverProbes(
  opts: RenderHoverProbesOptions,
): Record<string, string> {
  const { probesPaths, tsconfigPath } = opts;
  const program = buildProgram(probesPaths, tsconfigPath);
  const checker = program.getTypeChecker();
  const out: Record<string, string> = {};
  for (const probesPath of probesPaths) {
    out[probesPath] = formatSnapshot(
      extractProbes(program, checker, probesPath),
      path.basename(probesPath),
    );
  }
  return out;
}

interface ProbeEntry {
  source: string;
  rendered: string;
}

function buildProgram(probesPaths: string[], tsconfigPath: string): ts.Program {
  const configText = ts.sys.readFile(tsconfigPath);
  if (configText == null) throw new Error(`cannot read ${tsconfigPath}`);
  const { config, error } = ts.parseConfigFileTextToJson(
    tsconfigPath,
    configText,
  );
  if (error) {
    throw new Error(ts.flattenDiagnosticMessageText(error.messageText, "\n"));
  }
  const parsed = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    path.dirname(tsconfigPath),
  );
  return ts.createProgram({
    rootNames: probesPaths,
    options: {
      ...parsed.options,
      noEmit: true,
      declaration: false,
      declarationMap: false,
    },
  });
}

function extractProbes(
  program: ts.Program,
  checker: ts.TypeChecker,
  probesPath: string,
): Record<string, ProbeEntry> {
  const sourceFile = program.getSourceFile(probesPath);
  if (sourceFile == null) {
    throw new Error(`probes file not part of program: ${probesPath}`);
  }
  const flags = ts.TypeFormatFlags.NoTruncation
    | ts.TypeFormatFlags.WriteArrayAsGenericType
    | ts.TypeFormatFlags.InTypeAlias;

  const out: Record<string, ProbeEntry> = {};
  for (const stmt of sourceFile.statements) {
    if (!ts.isVariableStatement(stmt)) continue;
    for (const decl of stmt.declarationList.declarations) {
      if (!ts.isIdentifier(decl.name)) continue;
      const name = decl.name.text;
      if (!name.startsWith("probe_")) continue;
      const symbol = checker.getSymbolAtLocation(decl.name);
      if (symbol == null) continue;
      const type = checker.getTypeOfSymbolAtLocation(symbol, decl.name);
      out[name] = {
        source: probeDescription(stmt, decl),
        rendered: scrub(checker.typeToString(type, decl, flags)),
      };
    }
  }
  return out;
}

// Missing JSDoc is a test-authoring bug, so we throw rather than silently
// falling back to an empty description.
function probeDescription(
  stmt: ts.VariableStatement,
  decl: ts.VariableDeclaration,
): string {
  const jsdoc = ts.getJSDocCommentsAndTags(stmt).find(ts.isJSDoc);
  const raw = jsdoc?.comment;
  const text = typeof raw === "string"
    ? raw
    : raw?.map((c) => c.text).join("") ?? "";
  if (text.trim().length === 0) {
    const name = ts.isIdentifier(decl.name) ? decl.name.text : "<unnamed>";
    throw new Error(
      `probe \`${name}\` is missing a JSDoc — add a /** ... */ block above its declaration`,
    );
  }
  return text.replace(/\s+/g, " ").trim();
}

// Strip absolute import paths so the snapshot is identical across machines.
function scrub(s: string): string {
  return s.replace(/import\("[^"]+"\)\./g, "");
}

// Pretty-print one probes file's worth of probes as TS-flavored snapshot
// content: `/** desc */\ntype probeName = rendered;`, joined and run through
// dprint.
function formatSnapshot(
  probes: Record<string, ProbeEntry>,
  probesFileName: string,
): string {
  const names = Object.keys(probes).sort();
  if (names.length === 0) return "";
  const header = [
    `// AUTO-GENERATED by hoverTypes.test.ts — do not edit by hand.`,
    `// Source: probes/${probesFileName}`,
    `// Update: pnpm updateSnapshots --filter=@osdk/api`,
    `// See packages/api/src/__hover_snapshot__/README.md for details.`,
  ].join("\n");
  const body = names.map((n) => {
    const { source, rendered } = probes[n];
    return `/** ${source} */\ntype ${n} = ${rendered};`;
  }).join("\n\n");
  const wrapped = `${header}\n\n${body}`;
  const result = spawnSync(
    "pnpm exec dprint fmt --stdin probes.ts",
    { input: wrapped, encoding: "utf8", shell: true },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(
      `dprint exited with status ${result.status}: ${result.stderr}`,
    );
  }
  return result.stdout;
}
