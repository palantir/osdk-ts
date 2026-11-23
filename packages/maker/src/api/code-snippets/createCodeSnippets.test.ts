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

import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

import * as ts from "typescript";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineObject } from "../defineObject.js";
import { defineOntology } from "../defineOntology.js";

describe.each(["", "com.example.example-types."])(
  "code snippets with namespace %j",
  (namespace) => {
    let outputDir: string;

    beforeEach(async () => {
      outputDir = fs.mkdtempSync(
        path.join(os.tmpdir(), "maker-code-snippets-"),
      );
      await defineOntology(
        namespace,
        () => {
          const employee = defineObject({
            apiName: "Employee",
            displayName: "Employee",
            pluralDisplayName: "Employees",
            primaryKeyPropertyApiName: "id",
            titlePropertyApiName: "id",
            properties: { id: { type: "string" } },
          });
          defineInterface({
            apiName: "Worker",
            displayName: "Worker Profile",
            properties: { name: { type: "string" } },
          });
          defineCreateObjectAction({ apiName: "create", objectType: employee });
          defineCreateObjectAction({
            apiName: "create-employee-profile",
            objectType: employee,
          });
        },
        undefined,
        undefined,
        true,
        "@example/sdk",
        outputDir,
      );
    });

    afterEach(() => {
      fs.rmSync(outputDir, { recursive: true, force: true });
    });

    function readSnippets(apiName: string): Record<string, string> {
      return JSON.parse(
        fs.readFileSync(path.join(outputDir, namespace + apiName), "utf8"),
      );
    }

    function syntaxErrors(source: string) {
      const { diagnostics = [] } = ts.transpileModule(source, {
        compilerOptions: { target: ts.ScriptTarget.ESNext },
        reportDiagnostics: true,
      });
      return diagnostics.map((diagnostic) =>
        ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
      );
    }

    it("names snippet files by full API name", () => {
      expect(fs.readdirSync(outputDir).sort()).toEqual([
        `${namespace}Employee`,
        `${namespace}Worker`,
        `${namespace}create`,
        `${namespace}create-employee-profile`,
      ]);
    });

    it.each([
      { apiName: "create", identifier: "create" },
      {
        apiName: "create-employee-profile",
        identifier: "createEmployeeProfile",
      },
    ])(
      "uses SDK identifiers for action $apiName",
      ({ apiName, identifier }) => {
        const snippets = readSnippets(apiName);
        for (const method of ["applyAction", "batchApplyAction"]) {
          const snippet = snippets[method];
          expect(snippet).toContain(
            `import { ${identifier} } from "@example/sdk";`,
          );
          expect(snippet).toContain(`client(${identifier}).${method}(`);
          expect(syntaxErrors(snippet)).toEqual([]);
        }
      },
    );

    it.each([
      {
        apiName: "Employee",
        loadKey: "loadObjectsReference",
        metadataKey: "loadObjectMetadataSnippet",
      },
      {
        apiName: "Worker",
        loadKey: "Load pages of Worker Profile",
        metadataKey: "Load Worker Profile metadata",
      },
    ])(
      "uses SDK identifiers for $apiName",
      ({ apiName, loadKey, metadataKey }) => {
        const snippets = readSnippets(apiName);
        const subscribe = snippets["Subscribe to object sets"];
        const sdkImport = `import { ${apiName} } from "@example/sdk";`;
        for (const key of [loadKey, metadataKey]) {
          expect(snippets[key]).toContain(sdkImport);
          expect(syntaxErrors(snippets[key])).toEqual([]);
        }
        expect(snippets[loadKey]).toContain(`client(${apiName})`);
        expect(snippets[metadataKey]).toContain(`fetchMetadata(${apiName})`);
        // The subscribe template contains placeholder code that never parses,
        // so it only gets text checks.
        expect(subscribe).toContain(sdkImport);
        expect(subscribe).toContain(`client(${apiName}).subscribe(`);
      },
    );
  },
);
