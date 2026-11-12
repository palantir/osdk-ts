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
import * as path from "node:path";

import ts from "typescript";
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
      fs.mkdirSync("build", { recursive: true });
      outputDir = fs.mkdtempSync(path.join("build", "code-snippets-"));
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
            displayName: "Worker",
            properties: { name: { type: "string" } },
          });
          for (const apiName of ["create", "create-employee-profile"]) {
            defineCreateObjectAction({
              apiName,
              objectType: employee,
            });
          }
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

    it.each([
      ["create", "create"],
      ["create-employee-profile", "createEmployeeProfile"],
    ])("uses SDK identifiers for action %s", (apiName, identifier) => {
      const snippets = readSnippets(apiName);
      for (const method of ["applyAction", "batchApplyAction"]) {
        const snippet = snippets[method];
        expect(snippet).toContain(
          `import { ${identifier} } from "@example/sdk";`,
        );
        expect(snippet).toContain(`client(${identifier}).${method}(`);
        expect(
          ts.transpileModule(snippet, {
            compilerOptions: { target: ts.ScriptTarget.ESNext },
            reportDiagnostics: true,
          }).diagnostics,
        ).toEqual([]);
      }
    });

    it.each([
      ["Employee", "loadObjectsReference", "loadObjectMetadataSnippet"],
      ["Worker", "Load pages of Worker", "Load Worker metadata"],
    ])("uses SDK identifiers for %s", (identifier, loadKey, metadataKey) => {
      const snippets = readSnippets(identifier);
      for (const key of [loadKey, metadataKey, "Subscribe to object sets"]) {
        expect(snippets[key]).toContain(
          `import { ${identifier} } from "@example/sdk";`,
        );
      }
      expect(snippets[loadKey]).toContain(`client(${identifier})`);
      expect(snippets[metadataKey]).toContain(`fetchMetadata(${identifier})`);
      expect(snippets["Subscribe to object sets"]).toContain(
        `client(${identifier}).subscribe(`,
      );
      expect(snippets[loadKey]).toContain(`<${identifier}>`);
      expect(fs.readdirSync(outputDir).sort()).toEqual([
        `${namespace}Employee`,
        `${namespace}Worker`,
        `${namespace}create`,
        `${namespace}create-employee-profile`,
      ]);
    });
  },
);
