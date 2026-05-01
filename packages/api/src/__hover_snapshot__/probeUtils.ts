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

// Shared rendering pipeline for hover-snapshot tests. A test wiring up its
// own probes file passes its paths to `renderHoverProbes` and snapshots each
// returned entry. See README.md and renderHovers.test.ts for an end-to-end
// example.

import { execFileSync } from "node:child_process";
import * as path from "node:path";
import * as ts from "typescript";

export interface HoverProbe {
  /** Plain-English description from the probe's JSDoc. */
  source: string;
  /**
   * Type rendered by `checker.typeToString`, with absolute import paths
   * scrubbed and pretty-printed via dprint.
   */
  rendered: string;
}

export interface RenderHoverProbesOptions {
  /** Absolute path to a probes file containing `declare const probe_*: T;` declarations. */
  probesPath: string;
  /** Absolute path to a tsconfig.json that can compile the probes file. */
  tsconfigPath: string;
}

/**
 * Walks every `declare const probe_*: <Type>;` declaration in the probes file,
 * renders its type via the TypeScript compiler API, and pretty-prints the
 * result through dprint. Returns one entry per probe keyed by declaration
 * name.
 *
 * Every probe declaration must have a JSDoc above it describing the
 * user-facing situation it captures; a missing JSDoc throws.
 */
export function renderHoverProbes(
  opts: RenderHoverProbesOptions,
): Record<string, HoverProbe> {
  return formatProbes(extractProbes(opts));
}

/**
 * Compose a `HoverProbe` into the standard snapshot value:
 * `// <description>\n<formatted type>`. Tests can call this directly inside
 * an `it.each` or build their own composition if they want a different
 * layout.
 */
export function snapshotValue(probe: HoverProbe): string {
  return `// ${probe.source}\n${probe.rendered}`;
}

function extractProbes(
  opts: RenderHoverProbesOptions,
): Record<string, HoverProbe> {
  const { probesPath, tsconfigPath } = opts;
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
  const program = ts.createProgram({
    rootNames: [probesPath],
    options: {
      ...parsed.options,
      noEmit: true,
      declaration: false,
      declarationMap: false,
    },
  });
  const sourceFile = program.getSourceFile(probesPath);
  if (sourceFile == null) {
    throw new Error(`probes file not part of program: ${probesPath}`);
  }
  const checker = program.getTypeChecker();
  const flags = ts.TypeFormatFlags.NoTruncation
    | ts.TypeFormatFlags.WriteArrayAsGenericType
    | ts.TypeFormatFlags.InTypeAlias;

  const out: Record<string, HoverProbe> = {};
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

// Read the user-facing description for a probe from its JSDoc. Missing JSDoc
// is a test-authoring bug, so we throw rather than silently falling back.
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

// Pretty-print all probes by wrapping them as `type <name> = <type>;`,
// piping the batch through dprint, then splitting it back apart with the TS
// compiler API. dprint is a root devDep so its binary is on PATH when this
// runs under `pnpm test` / `pnpm vitest`.
function formatProbes(
  probes: Record<string, HoverProbe>,
): Record<string, HoverProbe> {
  const names = Object.keys(probes);
  if (names.length === 0) return {};
  const wrapped = names.map((n) => `type ${n} = ${probes[n].rendered};`).join(
    "\n\n",
  );
  const formatted = execFileSync(
    "dprint",
    ["fmt", "--stdin", "probes.ts"],
    { input: wrapped, encoding: "utf8" },
  );
  const sf = ts.createSourceFile(
    "probes.ts",
    formatted,
    ts.ScriptTarget.Latest,
    true,
  );
  const out: Record<string, HoverProbe> = {};
  for (const stmt of sf.statements) {
    if (!ts.isTypeAliasDeclaration(stmt)) continue;
    out[stmt.name.text] = {
      source: probes[stmt.name.text]!.source,
      rendered: stmt.type.getText(sf).trim(),
    };
  }
  return out;
}
