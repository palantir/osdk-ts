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

import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { generatePackageJson } from "../generatePackageJson.js";

describe("generatePackageJson", () => {
  let packagePath: string;

  beforeEach(async () => {
    packagePath = await mkdtemp(join(tmpdir(), "generate-package-json-test-"));
  });

  afterEach(async () => {
    await rm(packagePath, { recursive: true, force: true });
  });

  it("emits the ontology metadata subpath export", async () => {
    await generatePackageJson({
      packageName: "@my/generated-sdk",
      packageVersion: "1.2.3",
      packagePath,
      dependencies: [{
        dependencyName: "@osdk/foundry.ontologies",
        dependencyVersion: "^2.63.0",
      }],
      peerDependencies: [{
        dependencyName: "@osdk/aliases",
        dependencyVersion: "^2.0.0",
      }, {
        dependencyName: "@osdk/client",
        dependencyVersion: "^2.0.0",
      }],
      beta: true,
      packageRid: "ri.foundry.main.package.dead-beef",
      branch: "master",
    });

    expect(await readFile(join(packagePath, "package.json"), "utf-8"))
      .toMatchInlineSnapshot(`
        "{
            "name": "@my/generated-sdk",
            "version": "1.2.3",
            "main": "./cjs/index.js",
            "types": "./cjs/index.d.ts",
            "osdk": {
                "packageRid": "ri.foundry.main.package.dead-beef",
                "branch": "master"
            },
            "exports": {
                ".": {
                    "script": {
                        "types": "./dist/bundle/index.d.mts",
                        "default": "./dist/bundle/index.mjs"
                    },
                    "require": {
                        "types": "./cjs/index.d.ts",
                        "default": "./cjs/index.js"
                    },
                    "import": {
                        "types": "./esm/index.d.ts",
                        "default": "./esm/index.js"
                    },
                    "types": "./cjs/index.d.ts",
                    "default": "./cjs/index.js"
                },
                "./UNSTABLE_DO_NOT_USE/ontology-metadata": {
                    "types": "./UNSTABLE_DO_NOT_USE/ontology-metadata.d.ts",
                    "default": "./UNSTABLE_DO_NOT_USE/ontology-metadata.json"
                }
            },
            "dependencies": {
                "@osdk/foundry.ontologies": "^2.63.0"
            },
            "peerDependencies": {
                "@osdk/aliases": "^2.0.0",
                "@osdk/client": "^2.0.0"
            },
            "type": "commonjs"
        }"
      `);
  });
});
