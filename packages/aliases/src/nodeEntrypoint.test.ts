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

import { afterAll, describe, expect, it } from "vitest";

import * as browserEntrypoint from "./index.js";
import { ALIASES_JSON_FILE_ENV_VAR } from "./nodeEnvironmentLayers.js";

const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-aliases-node-"));
const aliasesPath = path.join(tmpDir, "aliases.json");

fs.writeFileSync(
  aliasesPath,
  JSON.stringify({
    version: 1,
    defaults: {
      custom: {},
      datasets: {},
      egressConnections: {},
      mediasets: {},
      models: {},
      streams: {},
      objects: {
        Todo: {
          apiName: "fromAliasesJsonFile",
          primaryKeyApiName: "id",
          properties: { id: { apiName: "id" } },
          links: {},
        },
      },
    },
  }),
);

// Set before importing the entrypoint, the way a real process does.
process.env[ALIASES_JSON_FILE_ENV_VAR] = aliasesPath;

const nodeEntrypoint = await import("./public/node.js");

afterAll(() => {
  // Computed key, and the var must really leave `process.env`, so `Reflect.deleteProperty`
  // stands in for `delete process.env[...]`.
  Reflect.deleteProperty(process.env, ALIASES_JSON_FILE_ENV_VAR);
  fs.rmSync(tmpDir, { force: true, recursive: true });
});

describe("@osdk/aliases/node", () => {
  it("installs the environment layers just by being imported", () => {
    expect(nodeEntrypoint.$resolveObjectType("Todo")).toBe(
      "fromAliasesJsonFile",
    );
  });

  it("shares one registry with the default entrypoint", () => {
    expect(browserEntrypoint.$resolveObjectType("Todo")).toBe(
      "fromAliasesJsonFile",
    );
  });

  it("exports exactly the same surface as the default entrypoint", () => {
    expect(Object.keys(nodeEntrypoint).sort()).toEqual(
      Object.keys(browserEntrypoint).sort(),
    );
  });
});
