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

import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import * as ts from "typescript";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import type { MinimalFs } from "../../generator/src/MinimalFs.js";
import { generateClientSdkVersionTwoPointZero } from "../../generator/src/v2.0/generateClientSdkVersionTwoPointZero.js";
import { createCodeSnippets } from "../src/api/code-snippets/createCodeSnippets.js";
import { dumpOntologyFullMetadata } from "../src/api/defineOntology.js";
import {
  actionSnippetCases,
  actionSnippetPackageName,
  createActionSnippetOntology,
  readActionSnippets,
} from "../src/api/test/actionSnippetTestUtils.js";
import {
  createSnippetProgram,
  describeSnippetDiagnostics,
} from "./compileActionSnippets.js";

describe("action examples compiled against generated SDK declarations", () => {
  const projectDir = fileURLToPath(new URL("../../../", import.meta.url));
  let outputDir: string;
  let sdkDir: string;
  let declarations: ReadonlyMap<string, string> = new Map();
  let compilerOptions: ts.CompilerOptions;

  beforeAll(async () => {
    const buildDir = fileURLToPath(
      new URL("../build/action-snippets/", import.meta.url),
    );
    mkdirSync(buildDir, { recursive: true });
    outputDir = mkdtempSync(join(buildDir, "compile-"));
    sdkDir = join(outputDir, "sdk");
    compilerOptions = {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      strict: true,
      skipLibCheck: true,
      types: [],
      baseUrl: projectDir,
      paths: {
        [actionSnippetPackageName]: [join(sdkDir, "index.d.ts")],
        "@osdk/api": [join(projectDir, "packages/api/build/types/index.d.ts")],
        "@osdk/api/*": [
          join(projectDir, "packages/api/build/types/public/*.d.ts"),
        ],
        "@osdk/client": [
          join(projectDir, "packages/client/build/types/index.d.ts"),
        ],
      },
    };

    const ontology = createActionSnippetOntology();
    createCodeSnippets(ontology, actionSnippetPackageName, outputDir);
    const metadata = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(
      dumpOntologyFullMetadata().ontology,
    );
    const generated = new Map<string, string>();
    const fs: MinimalFs = {
      mkdir: () => Promise.resolve(),
      readdir: () => Promise.resolve([]),
      writeFile: (filename, contents) => {
        generated.set(resolve(filename), contents);
        return Promise.resolve();
      },
    };
    await generateClientSdkVersionTwoPointZero(
      metadata,
      "typescript-sdk/0.0.0",
      fs,
      sdkDir,
      "module",
    );
    const program = createSnippetProgram(generated, [...generated.keys()], {
      ...compilerOptions,
      declaration: true,
      emitDeclarationOnly: true,
    });
    expect(
      describeSnippetDiagnostics(ts.getPreEmitDiagnostics(program)),
    ).toEqual([]);

    const emitted = new Map<string, string>();
    const result = program.emit(undefined, (filename, contents) => {
      if (resolve(filename).startsWith(`${resolve(sdkDir)}${sep}`)) {
        emitted.set(resolve(filename), contents);
      }
    });
    expect(describeSnippetDiagnostics(result.diagnostics)).toEqual([]);
    expect(result.emitSkipped).toBe(false);
    expect(emitted.has(join(sdkDir, "index.d.ts"))).toBe(true);
    declarations = emitted;
  }, 60_000);

  afterAll(() => {
    rmSync(outputDir, { recursive: true, force: true });
  });

  function compileExample(text: string): readonly ts.Diagnostic[] {
    const filename = join(outputDir, "examples", "example.ts");
    const files = new Map(declarations);
    files.set(filename, text);
    files.set(
      join(dirname(filename), "client.ts"),
      `import type { Client } from "@osdk/client";
export declare const client: Client;`,
    );
    const program = createSnippetProgram(files, [filename], {
      ...compilerOptions,
      noEmit: true,
    });
    return ts.getPreEmitDiagnostics(program);
  }

  it("preserves required and optional interface parameters in real SDK types", () => {
    const diagnostics = compileExample(`
import { client } from "./client";
import { linkParentChildren, linkParentChild, linkParentRequiredChildren } from "${actionSnippetPackageName}";

declare const source: linkParentChildren.Params["source"];
declare const target: linkParentChild.Params["target"];

const withoutTarget: linkParentChildren.Params = { source };
const withTargets: linkParentChildren.Params = { source, target: [] };
const withTarget: linkParentChild.Params = { source, target };
const withRequiredTargets: linkParentRequiredChildren.Params = { source, target: [target] };

client(linkParentChildren).applyAction(withoutTarget);
client(linkParentChildren).batchApplyAction([withoutTarget, withTargets]);
client(linkParentChild).applyAction(withTarget);
client(linkParentChild).batchApplyAction([withTarget]);
client(linkParentRequiredChildren).applyAction(withRequiredTargets);
client(linkParentRequiredChildren).batchApplyAction([withRequiredTargets]);
`);
    expect(describeSnippetDiagnostics(diagnostics)).toEqual([]);
  });

  it("rejects both apply and batch when the required interface parameter is missing", () => {
    const diagnostics = compileExample(`
import { client } from "./client";
import { linkParentChildren } from "${actionSnippetPackageName}";
client(linkParentChildren).applyAction({});
client(linkParentChildren).batchApplyAction([{}]);
`);
    expect(diagnostics).toHaveLength(2);
    for (const diagnostic of diagnostics) {
      expect(
        ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
      ).toContain("source");
      expect([2345, 2741]).toContain(diagnostic.code);
    }
  });

  it.each(["linkParentChild", "linkParentRequiredChildren"])(
    "rejects apply and batch without the required target for %s",
    (actionName) => {
      const diagnostics = compileExample(`
import { client } from "./client";
import { ${actionName} } from "${actionSnippetPackageName}";
declare const source: ${actionName}.Params["source"];
client(${actionName}).applyAction({ source });
client(${actionName}).batchApplyAction([{ source }]);
`);
      expect(diagnostics).toHaveLength(2);
      for (const diagnostic of diagnostics) {
        expect(
          ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
        ).toContain("target");
        expect([2345, 2741]).toContain(diagnostic.code);
      }
    },
  );

  describe.each(actionSnippetCases)("$apiName", (action) => {
    it.each(["applyAction", "batchApplyAction"])(
      "compiles the complete rendered %s example",
      (method) => {
        const snippets = readActionSnippets(outputDir, action.apiName);
        const text =
          method === "applyAction"
            ? snippets.applyAction
            : snippets.batchApplyAction;
        expect(describeSnippetDiagnostics(compileExample(text))).toEqual([]);
      },
    );
  });
});
