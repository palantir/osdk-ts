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

/**
 * Exercises the package boundary from resource references to Maker deployment inputs:
 * references -> generated TypeScript package -> tsc -> Node consumer -> ontology IR, input shapes, and presets.
 * Workspace dependencies are symlinked into a temporary package, so the consumer uses built
 * public package exports. No package installation or Foundry deployment is performed.
 *
 * The generated package includes same-name columns for comparison with legacy
 * authoring, renamed columns (id -> EMPLOYEE_ID, salary -> SALARY), an unsupported
 * API-name dataset reference, and a function reference backed by discovery metadata.
 * Legacy ontology equivalence and invalid-reference/type errors use explicit assertions.
 *
 * Two named external snapshots in __snapshots__/resourcePackage.integration.test.ts.snap
 * make the input and output reviewable together:
 * - "generated resource package source": the exact src/index.ts compiled and consumed.
 * - "explicit column selections": renamed-column property mappings, dataset/column
 *   input shapes, and complete presets. Property RID keys are shown as API names;
 *   shape IDs are retained so dataset/column links can be followed.
 * Full package metadata snapshots belong to @osdk/resource-generator's tests.
 *
 * Run with `pnpm turbo test --filter=@osdk/maker-experimental` to build the required
 * ESM dependencies first. Once built, update only these snapshots with:
 * `pnpm --filter @osdk/maker-experimental exec vitest run src/api/resourcePackage.integration.test.ts --update`
 */

import { execFileSync } from "node:child_process";
import {
  mkdtemp,
  mkdir,
  readFile,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { createRequire } from "node:module";
import * as os from "node:os";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import { generateResourcePackage } from "@osdk/resource-generator";
import { expect, it } from "vitest";

import type { FunctionsIr } from "./defineOntologyV2.js";

const datasetRid =
  "ri.foundry.main.dataset.12345678-1234-1234-1234-123456789abc";

it("generates a package consumed by existing Maker APIs and emits deployment presets", async () => {
  const output = await mkdtemp(
    path.join(os.tmpdir(), "maker-resource-package-"),
  );
  try {
    await generateResourcePackage(
      {
        resources: {
          employees: {
            type: "dataset",
            locator: { type: "rid", rid: datasetRid },
            schema: {
              columns: { id: { type: "string" }, salary: { type: "integer" } },
            },
          },
          renamedEmployees: {
            type: "dataset",
            locator: { type: "rid", rid: datasetRid },
            schema: {
              columns: {
                EMPLOYEE_ID: { type: "string" },
                SALARY: { type: "integer" },
              },
            },
          },
          localEmployees: {
            type: "dataset",
            locator: { type: "apiName", apiName: "employees" },
          },
          updateTags: {
            type: "function",
            locator: {
              type: "apiName",
              namespace: "com.acme",
              apiName: "updateTags",
            },
          },
        },
      },
      {
        packageName: "@example/resources",
        packageVersion: "1.0.0",
        resourceVersion: "*",
        outputDirectory: output,
      },
    );
    expect(
      await readFile(path.join(output, "src/index.ts"), "utf8"),
    ).toMatchSnapshot("generated resource package source");

    // Symlink required packages
    await mkdir(path.join(output, "node_modules/@osdk"), { recursive: true });
    for (const name of ["resource", "maker", "maker-experimental"]) {
      await symlink(
        fileURLToPath(new URL(`../../../${name}`, import.meta.url)),
        path.join(output, "node_modules/@osdk", name),
      );
    }

    // Generate the required FunctionsIr
    const functionsIrFile = path.join(output, "functions-ir.json");
    await writeFile(
      functionsIrFile,
      JSON.stringify({
        discoveredFunctions: [
          {
            locator: {
              type: "typescript",
              typescript: { functionName: "updateTags" },
            },
            inputs: [
              { name: "tags", dataType: { type: "string" }, required: true },
            ],
            output: { type: "void" },
            customTypes: {},
          },
        ],
      } satisfies FunctionsIr),
    );

    // Compile the generated resource package and then create path to compiled .mjs file
    execFileSync(process.execPath, [
      createRequire(import.meta.url).resolve("typescript/lib/tsc.js"),
      "-p",
      path.join(output, "tsconfig.json"),
    ]);
    const consumer = path.join(output, "consumer.mjs");

    await writeFile(
      consumer,
      `
import { employees, renamedEmployees, localEmployees, updateTags } from "@example/resources";
import { column, defineObject } from "@osdk/maker";
import { defineFunctionBackedAction, defineOntologyV2 } from "@osdk/maker-experimental";
const base = {
  apiName: "Employee", displayName: "Employee", pluralDisplayName: "Employees",
  titlePropertyApiName: "id", primaryKeyPropertyApiName: "id",
  properties: { id: { type: "string" }, salary: { type: "integer" } },
};
const compile = (dataset, legacy = false, columns = { id: "id", salary: "salary" }) => defineOntologyV2("com.acme.", () => {
  defineObject({ ...base,
    properties: {
      id: { type: "string", source: dataset ? column(dataset, columns.id) : undefined },
      salary: { type: "integer", source: dataset ? column(dataset, columns.salary) : undefined },
    },
    datasources: [{ type: "dataset", ...(dataset ? { dataset } : {}) }],
  });
  defineFunctionBackedAction(legacy ? { functionApiName: "updateTags" } : { function: updateTags });
}, undefined, undefined, ${JSON.stringify(functionsIrFile)});
const referenced = await compile(employees);
const legacy = await compile(undefined, true);
const renamed = await compile(renamedEmployees, false, { id: "EMPLOYEE_ID", salary: "SALARY" });
const object = Object.values(renamed.ontologyIr.ontology.objectTypes)[0];
const dataset = object.datasources.find(({ datasource }) => datasource.type === "datasetV2").datasource.datasetV2;
const propertyMapping = Object.fromEntries(
  Object.entries(dataset.propertyMapping).map(([rid, mapping]) => [object.objectType.propertyTypes[rid].apiName, mapping]),
);

// Include each shape's ID so dataset/column references can be followed in the snapshot.
const inputShapes = Object.fromEntries(
  [...renamed.shapes.inputShapes]
    .filter(([, shape]) => shape.type === "tabularDatasource" || shape.type === "datasourceColumn")
    .map(([id, shape]) => [id, { blockShapeId: renamed.blockDataAddOn.idToBlockShapeId[id], ...shape }]),
);

let logicalError;
try { await compile(localEmployees); }
catch (error) { logicalError = error.message; }

let validationError;
try {
  await defineOntologyV2("com.acme.", () => defineObject({ ...base,
    datasources: [{ type: "dataset", dataset: employees }],
    properties: {
      id: { type: "string", source: column(employees, "id") },
      salary: { type: "string", source: column(employees, "salary") },
    },
  }));
} catch (error) { validationError = error.message; }

console.log(JSON.stringify({
  datasetIntegration: {
    propertyMapping,
    inputShapes,
    presets: Object.fromEntries(renamed.inputPresets),
  },
  logicalError,
  shapes: Object.fromEntries(referenced.shapes.inputShapes),
  unchangedOntology: JSON.stringify(referenced.ontologyIr.ontology) === JSON.stringify(legacy.ontologyIr.ontology),
  validationError,
}));
`,
    );
    const result: {
      datasetIntegration: {
        propertyMapping: Record<string, { type: string; column: string }>;
        inputShapes: Record<string, unknown>;
        presets: Record<string, unknown>;
      };
      logicalError: string;
      shapes: Record<string, { type: string }>;
      unchangedOntology: boolean;
      validationError: string;
    } = JSON.parse(
      execFileSync(process.execPath, [consumer], {
        cwd: output,
        encoding: "utf8",
        stdio: ["pipe", "pipe", "pipe"],
      }),
    );

    const id = "dataset-datasource-com.acme.Employee";
    expect(result.datasetIntegration).toMatchSnapshot(
      "explicit column selections",
    );

    expect(result.logicalError).toContain("requires a RID locator");
    expect(result.shapes[id].type).toBe("tabularDatasource");
    expect(
      Object.values(result.shapes).some((shape) => shape.type === "function"),
    ).toBe(true);
    expect(result.unchangedOntology).toBe(true);
    expect(result.validationError).toContain('Column "salary" is incompatible');
  } finally {
    await rm(output, { recursive: true, force: true });
  }
}, 30_000);
