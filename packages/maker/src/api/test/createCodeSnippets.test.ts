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

import { mkdirSync, mkdtempSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import * as ts from "typescript";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { createCodeSnippets } from "../code-snippets/createCodeSnippets.js";
import {
  actionSnippetCases,
  actionSnippetPackageName,
  createActionSnippetOntology,
  readActionSnippets,
} from "./actionSnippetTestUtils.js";

function findNodes<T extends ts.Node>(
  node: ts.Node,
  predicate: (candidate: ts.Node) => candidate is T,
): T[] {
  const matches: T[] = [];
  function visit(candidate: ts.Node): void {
    if (predicate(candidate)) {
      matches.push(candidate);
    }
    ts.forEachChild(candidate, visit);
  }
  visit(node);
  return matches;
}

function getActionCall(file: ts.SourceFile, method: string): ts.CallExpression {
  const calls = findNodes(file, ts.isCallExpression).filter(
    (node) =>
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.name.text === method,
  );
  expect(calls).toHaveLength(1);
  const call = calls[0];
  if (call === undefined) {
    throw new Error(`Missing ${method} call`);
  }
  return call;
}

describe("createCodeSnippets action examples", () => {
  let outputDir: string;

  beforeEach(() => {
    const buildDir = fileURLToPath(
      new URL("../../../build/action-snippets/", import.meta.url),
    );
    mkdirSync(buildDir, { recursive: true });
    outputDir = mkdtempSync(join(buildDir, "render-"));
    createCodeSnippets(
      createActionSnippetOntology(),
      actionSnippetPackageName,
      outputDir,
    );
  });

  afterEach(() => {
    rmSync(outputDir, { recursive: true, force: true });
  });

  it("keeps fully qualified API names as filenames", () => {
    const filenames = readdirSync(outputDir);
    for (const { apiName, exportName } of actionSnippetCases) {
      expect(filenames).toContain(apiName);
      if (apiName !== exportName) {
        expect(filenames).not.toContain(exportName);
      }
      expect(
        Object.keys(readActionSnippets(outputDir, apiName)).sort(),
      ).toEqual(["applyAction", "batchApplyAction"]);
    }
  });

  describe.each(actionSnippetCases)("$apiName", (action) => {
    it.each(["applyAction", "batchApplyAction"])(
      "renders valid TypeScript and the exact SDK export for %s",
      (method) => {
        const snippets = readActionSnippets(outputDir, action.apiName);
        const text =
          method === "applyAction"
            ? snippets.applyAction
            : snippets.batchApplyAction;
        const result = ts.transpileModule(text, {
          fileName: `${method}.ts`,
          reportDiagnostics: true,
          compilerOptions: {
            target: ts.ScriptTarget.ES2022,
            module: ts.ModuleKind.ESNext,
          },
        });
        expect(
          result.diagnostics?.map((diagnostic) =>
            ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
          ) ?? [],
        ).toEqual([]);

        const file = ts.createSourceFile(
          `${method}.ts`,
          text,
          ts.ScriptTarget.ES2022,
          true,
        );
        const sdkImports = findNodes(file, ts.isImportDeclaration).filter(
          (node) =>
            ts.isStringLiteral(node.moduleSpecifier) &&
            node.moduleSpecifier.text === actionSnippetPackageName,
        );
        expect(sdkImports).toHaveLength(1);
        const bindings = sdkImports[0]?.importClause?.namedBindings;
        if (bindings === undefined || !ts.isNamedImports(bindings)) {
          throw new Error("Expected a named SDK import");
        }
        expect(
          bindings.elements.map((element) => ({
            name: element.name.text,
            importedName: element.propertyName?.text ?? element.name.text,
          })),
        ).toEqual([
          { name: action.exportName, importedName: action.exportName },
        ]);

        const call = getActionCall(file, method);
        if (
          !ts.isPropertyAccessExpression(call.expression) ||
          !ts.isCallExpression(call.expression.expression)
        ) {
          throw new Error("Expected an action selected through the client");
        }
        expect(
          call.expression.expression.arguments.map((arg) => arg.getText()),
        ).toEqual([action.exportName]);
        expect(text).not.toMatch(/\{\{[\s\S]*?\}\}/u);
      },
    );
  });

  describe.each(actionSnippetCases.filter((action) => action.hasParameters))(
    "$apiName parameters",
    (action) => {
      it.each(["applyAction", "batchApplyAction"])(
        "accepts typed Params rather than empty arguments for %s",
        (method) => {
          const snippets = readActionSnippets(outputDir, action.apiName);
          const text =
            method === "applyAction"
              ? snippets.applyAction
              : snippets.batchApplyAction;
          const file = ts.createSourceFile(
            `${method}.ts`,
            text,
            ts.ScriptTarget.ES2022,
            true,
          );
          const paramsTypes = findNodes(file, ts.isTypeReferenceNode).filter(
            (node) => node.typeName.getText() === `${action.exportName}.Params`,
          );
          expect(paramsTypes.length).toBeGreaterThan(0);
          const call = getActionCall(file, method);
          expect(call.arguments.length).toBeGreaterThan(0);
          expect(call.arguments[0]?.getText().replace(/\s/gu, "")).not.toMatch(
            /^(?:\{\}|\[\]|\[\{\}(?:,\{\})*,?\])$/u,
          );
          expect(findNodes(file, ts.isAsExpression)).toHaveLength(0);
          expect(findNodes(file, ts.isTypeAssertionExpression)).toHaveLength(0);
        },
      );
    },
  );

  it.each(["applyAction", "batchApplyAction"])(
    "renders %s without placeholder Params when there are no parameters",
    (method) => {
      const action = actionSnippetCases.find(
        (candidate) => candidate.exportName === "refresh",
      );
      if (action === undefined) {
        throw new Error("Missing action without parameters");
      }
      const snippets = readActionSnippets(outputDir, action.apiName);
      const text =
        method === "applyAction"
          ? snippets.applyAction
          : snippets.batchApplyAction;
      const file = ts.createSourceFile(
        `${method}.ts`,
        text,
        ts.ScriptTarget.ES2022,
        true,
      );
      const call = getActionCall(file, method);
      const args = call.arguments[0];
      if (args === undefined) {
        throw new Error("Missing action arguments");
      }
      const params = ts.isArrayLiteralExpression(args) ? args.elements : [args];
      expect(params.length).toBeGreaterThan(0);
      for (const param of params) {
        expect(ts.isObjectLiteralExpression(param)).toBe(true);
        if (ts.isObjectLiteralExpression(param)) {
          expect(param.properties).toHaveLength(0);
        }
      }
      expect(findNodes(file, ts.isParameter)).toHaveLength(0);
    },
  );
});
