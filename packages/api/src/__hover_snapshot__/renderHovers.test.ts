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

import { execFileSync } from "node:child_process";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import * as ts from "typescript";
import { describe, expect, expectTypeOf, it } from "vitest";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";
import type { KnownObjectSetMethods } from "./probes.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const probesPath = path.resolve(here, "probes.ts");
const tsconfigPath = path.resolve(here, "../../tsconfig.json");

interface Probe {
  // The TypeScript expression a user could write to get this hover, taken
  // verbatim from the type annotation in `probes.ts`. Embedded as a comment
  // in the snapshot so reviewers see what each rendered type corresponds to.
  source: string;
  // The type rendered by `checker.typeToString`, with absolute import paths
  // scrubbed so the snapshot is identical across machines.
  rendered: string;
}

interface Probes {
  [name: string]: Probe;
}

function renderProbes(): Probes {
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

  const out: Probes = {};
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

// Read the user-facing description for a probe from its JSDoc. Every probe
// must have a JSDoc (see README.md) — missing JSDoc is a test-authoring bug,
// so we throw rather than silently falling back to the type expression.
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
      `probe \`${name}\` is missing a JSDoc — add a /** ... */ block above its declaration in probes.ts`,
    );
  }
  return text.replace(/\s+/g, " ").trim();
}

// Strip absolute import paths so the snapshot is hermetic across machines.
function scrub(s: string): string {
  return s.replace(/import\("[^"]+"\)\./g, "");
}

// Pretty-print all probes by wrapping each as `type <name> = <type>;` and
// piping the batch through dprint, then splitting it back apart with the TS
// compiler API. dprint is a root devDep so its binary is on PATH when this
// test runs under `pnpm test` / `pnpm vitest`.
function formatProbes(probes: Probes): Probes {
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
  const out: Probes = {};
  for (const stmt of sf.statements) {
    if (!ts.isTypeAliasDeclaration(stmt)) continue;
    out[stmt.name.text] = {
      source: probes[stmt.name.text]!.source,
      rendered: stmt.type.getText(sf).trim(),
    };
  }
  return out;
}

// Render each probe as `// <description>\n<formatted type>` so the snapshot
// self-documents what each type corresponds to in user code.
function snapshotValue(probe: Probe): string {
  return `// ${probe.source}\n${probe.rendered}`;
}

const probes = formatProbes(renderProbes());
const probeNames = Object.keys(probes).sort();

describe("ObjectSet hover types", () => {
  // Each probe gets its own snapshot key, so changing one type only dirties
  // its own snapshot in code review. Add or edit a probe in `probes.ts` and
  // refresh with `pnpm updateSnapshots` from the repo root.
  it.each(probeNames)("%s", (name) => {
    expect(snapshotValue(probes[name])).toMatchSnapshot();
  });

  // Force probes.ts to be updated when ObjectSet grows or loses a method.
  // Compile-time assertion: every key of `ObjectSet<EmployeeApiTest>` must be
  // listed in `KnownObjectSetMethods` (probed or intentionally skipped). When
  // someone adds a new method, this fails to typecheck and names the missing
  // key — at which point the author decides whether to add a probe.
  it("KnownObjectSetMethods covers all ObjectSet members", () => {
    expectTypeOf<keyof ObjectSet<EmployeeApiTest>>()
      .toEqualTypeOf<KnownObjectSetMethods>();
  });
});
