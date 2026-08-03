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
import { fileURLToPath } from "node:url";

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { AliasesFile, DefaultAliases } from "./AliasesFile.js";
import { parseAliasesFile, serializeAliasesFile } from "./AliasesFile.js";
import {
  ALIASES_JSON_FILE_ENV_VAR,
  loadNodeEnvironmentLayers,
  RESOURCES_JSON_FILE_ENV_VAR,
} from "./nodeEnvironmentLayers.js";
import {
  $resetAliasRegistry,
  $setEnvironmentLayerLoader,
  registerPackagedAliases,
  setAliasOverride,
} from "./registry.js";
import {
  $resolveAction,
  $resolveInterfaceType,
  $resolveLink,
  $resolveObjectType,
  $resolveOntologyBranch,
  $resolveOntologyRid,
  $resolvePrimaryKey,
  $resolveProperty,
  $resolveQuery,
  $resolveQueryVersion,
} from "./resolve.js";

const FIXTURE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "__fixtures__",
);

function fixture(name: string): AliasesFile {
  return parseAliasesFile(
    JSON.parse(
      fs.readFileSync(path.join(FIXTURE_DIR, `${name}.json`), "utf-8"),
    ),
  );
}

function aliasesFile(defaults: Partial<DefaultAliases>): AliasesFile {
  return {
    version: 1,
    defaults: {
      custom: {},
      datasets: {},
      egressConnections: {},
      mediasets: {},
      models: {},
      streams: {},
      ...defaults,
    },
  };
}

function todoNamed(apiName: string): AliasesFile {
  return aliasesFile({
    objects: {
      Todo: {
        apiName,
        primaryKeyApiName: "id",
        properties: { id: { apiName: "id" } },
        links: {},
      },
    },
  });
}

let tmpDir: string;

function writeTempFile(name: string, contents: string): string {
  const filePath = path.join(tmpDir, name);
  fs.writeFileSync(filePath, contents);
  return filePath;
}

/**
 * Env vars are read once, when the layer chain is first built. A real process sets them
 * before importing anything; a test that wants to change one has to rebuild the chain,
 * which reinstalling the loader does.
 */
function reinstallEnvironmentLayers(): void {
  $setEnvironmentLayerLoader(loadNodeEnvironmentLayers);
}

/**
 * `Reflect.deleteProperty` rather than `delete process.env[name]`: the key is computed, and
 * the env var has to actually leave `process.env` for the loader (which reads it back) to
 * see it gone, so the usual "build the object without the key" rewrite does not apply.
 */
function unsetEnvVar(name: string): void {
  Reflect.deleteProperty(process.env, name);
}

beforeEach(() => {
  $resetAliasRegistry();
  tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "osdk-aliases-"));
  unsetEnvVar(ALIASES_JSON_FILE_ENV_VAR);
  unsetEnvVar(RESOURCES_JSON_FILE_ENV_VAR);
});

afterEach(() => {
  $resetAliasRegistry();
  unsetEnvVar(ALIASES_JSON_FILE_ENV_VAR);
  unsetEnvVar(RESOURCES_JSON_FILE_ENV_VAR);
  fs.rmSync(tmpDir, { force: true, recursive: true });
});

describe("layer precedence", () => {
  it("resolves from the highest populated layer of the four", () => {
    registerPackagedAliases("@example/sdk", todoNamed("fromPackaged"));
    process.env[ALIASES_JSON_FILE_ENV_VAR] = writeTempFile(
      "aliases.json",
      serializeAliasesFile(todoNamed("fromAliasesJsonFile")),
    );
    process.env[RESOURCES_JSON_FILE_ENV_VAR] = writeTempFile(
      "resources.json",
      serializeAliasesFile(todoNamed("fromResourcesJsonFile")),
    );
    reinstallEnvironmentLayers();
    setAliasOverride(todoNamed("fromOverride"));

    expect($resolveObjectType("Todo")).toBe("fromOverride");

    setAliasOverride(undefined);
    expect($resolveObjectType("Todo")).toBe("fromAliasesJsonFile");

    unsetEnvVar(ALIASES_JSON_FILE_ENV_VAR);
    reinstallEnvironmentLayers();
    expect($resolveObjectType("Todo")).toBe("fromResourcesJsonFile");

    unsetEnvVar(RESOURCES_JSON_FILE_ENV_VAR);
    reinstallEnvironmentLayers();
    expect($resolveObjectType("Todo")).toBe("fromPackaged");
  });

  it("falls through to a lower layer for keys a higher layer does not mention", () => {
    registerPackagedAliases("@example/sdk", fixture("identity"));
    setAliasOverride(todoNamed("onlyTodoIsOverridden"));

    expect($resolveObjectType("Todo")).toBe("onlyTodoIsOverridden");
    expect($resolveObjectType("Person")).toBe("Person");
    expect($resolveAction("deleteTodos")).toBe("deleteTodos");
  });

  it("builds the chain lazily on first resolve and memoizes it until a mutator runs", () => {
    const filePath = writeTempFile(
      "aliases.json",
      serializeAliasesFile(todoNamed("fromAliasesJsonFile")),
    );
    process.env[ALIASES_JSON_FILE_ENV_VAR] = filePath;
    reinstallEnvironmentLayers();

    expect($resolveObjectType("Todo")).toBe("fromAliasesJsonFile");

    fs.rmSync(filePath);
    expect($resolveObjectType("Todo")).toBe("fromAliasesJsonFile");

    setAliasOverride(undefined);
    expect(() => $resolveObjectType("Todo")).toThrowError(
      /ALIASES_JSON_FILE is set to ".*aliases\.json" but no file exists there/u,
    );
  });

  it("treats a live-preview RESOURCES_JSON_FILE as an empty layer", () => {
    registerPackagedAliases("@example/sdk", fixture("identity"));
    process.env[RESOURCES_JSON_FILE_ENV_VAR] = writeTempFile(
      "resources.json",
      JSON.stringify({ resources: {}, egress: { connections: [] } }),
    );
    reinstallEnvironmentLayers();

    expect($resolveObjectType("Todo")).toBe("Todo");
  });
});

describe("missing keys", () => {
  it("names the map, the key, and every layer consulted", () => {
    registerPackagedAliases("@example/sdk", fixture("identity"));
    reinstallEnvironmentLayers();

    expect(() => $resolveObjectType("Unknown")).toThrowError(
      /no alias registered for defaults\.objects\["Unknown"\]\. Layers consulted, highest precedence first: programmatic override \(not set\), ALIASES_JSON_FILE \(not set\), RESOURCES_JSON_FILE \(not set\), packaged aliases \(@example\/sdk\)/u,
    );
  });

  it("throws for every map rather than falling back to the source name", () => {
    expect(() => $resolveOntologyRid("ridHere")).toThrowError(
      /defaults\.ontologies\["ridHere"\]/u,
    );
    expect(() => $resolveOntologyBranch("ridHere")).toThrowError(
      /defaults\.ontologies\["ridHere"\]/u,
    );
    expect(() => $resolveObjectType("Todo")).toThrowError(
      /defaults\.objects\["Todo"\]/u,
    );
    expect(() => $resolvePrimaryKey("Todo")).toThrowError(
      /defaults\.objects\["Todo"\]/u,
    );
    expect(() => $resolveInterfaceType("SomeInterface")).toThrowError(
      /defaults\.interfaces\["SomeInterface"\]/u,
    );
    expect(() => $resolveAction("deleteTodos")).toThrowError(
      /defaults\.actions\["deleteTodos"\]/u,
    );
    expect(() => $resolveQuery("getCount")).toThrowError(
      /defaults\.queries\["getCount"\]/u,
    );
    expect(() => $resolveQueryVersion("getCount")).toThrowError(
      /defaults\.queries\["getCount"\]/u,
    );
    expect(() => $resolveProperty("Todo", "body")).toThrowError(
      /defaults\.objects\["Todo"\]\.properties\["body"\] \(nor defaults\.interfaces\["Todo"\]\.properties\["body"\]\)/u,
    );
    expect(() => $resolveLink("Todo", "Assignee")).toThrowError(
      /defaults\.objects\["Todo"\]\.links\["Assignee"\]/u,
    );
  });

  it("throws a dedicated error for a query alias with no version", () => {
    registerPackagedAliases(
      "@example/sdk",
      aliasesFile({ queries: { getCount: { apiName: "foo.bar.getCount" } } }),
    );

    expect($resolveQuery("getCount")).toBe("foo.bar.getCount");
    expect(() => $resolveQueryVersion("getCount")).toThrowError(
      /the alias entry for defaults\.queries\["getCount"\] carries no "version"/u,
    );
  });
});

describe("registerPackagedAliases", () => {
  it("merges disjoint SDKs into one packaged layer", () => {
    registerPackagedAliases(
      "@example/a",
      aliasesFile({
        objects: {
          Todo: {
            apiName: "foo.bar.Todo",
            primaryKeyApiName: "id",
            properties: {},
            links: {},
          },
        },
      }),
    );
    registerPackagedAliases(
      "@example/b",
      aliasesFile({
        actions: { deleteTodos: { apiName: "foo.bar.deleteTodos" } },
      }),
    );

    expect($resolveObjectType("Todo")).toBe("foo.bar.Todo");
    expect($resolveAction("deleteTodos")).toBe("foo.bar.deleteTodos");
  });

  it("accepts the same key twice with identical values", () => {
    registerPackagedAliases("@example/a", fixture("identity"));
    registerPackagedAliases("@example/b", fixture("identity"));

    expect($resolveObjectType("Todo")).toBe("Todo");
  });

  it("throws naming both SDKs when the same key carries different values", () => {
    registerPackagedAliases("@example/a", todoNamed("fromA"));

    expect(() =>
      registerPackagedAliases("@example/b", todoNamed("fromB")),
    ).toThrowError(
      /conflicting packaged aliases for defaults\.objects\.Todo: "@example\/a" registered .*"fromA".* but "@example\/b" registered .*"fromB"/u,
    );
  });

  it("throws when one SDK registers twice with different contents", () => {
    registerPackagedAliases("@example/a", todoNamed("first"));

    expect(() =>
      registerPackagedAliases("@example/a", todoNamed("second")),
    ).toThrowError(
      /"@example\/a" registered packaged aliases twice with different contents/u,
    );
    expect(() =>
      registerPackagedAliases("@example/a", todoNamed("first")),
    ).not.toThrow();
  });
});

describe("identity fixture", () => {
  beforeEach(() => {
    registerPackagedAliases("@example/todo-sdk", fixture("identity"));
  });

  it("is a fixed point for every resolver", () => {
    expect({
      ontologyRid: $resolveOntologyRid("ridHere"),
      ontologyBranch: $resolveOntologyBranch("ridHere"),
      objectType: $resolveObjectType("Todo"),
      primaryKey: $resolvePrimaryKey("Todo"),
      interfaceType: $resolveInterfaceType("SomeInterface"),
      action: $resolveAction("markTodoCompleted"),
      query: $resolveQuery("getCount"),
      queryVersion: $resolveQueryVersion("getCount"),
      property: $resolveProperty("Todo", "body"),
      interfaceProperty: $resolveProperty("SomeInterface", "SomeProperty"),
      link: $resolveLink("Todo", "Assignee"),
    }).toEqual({
      ontologyRid: "ridHere",
      ontologyBranch: undefined,
      objectType: "Todo",
      primaryKey: "id",
      interfaceType: "SomeInterface",
      action: "markTodoCompleted",
      query: "getCount",
      queryVersion: "1.1.0",
      property: "body",
      interfaceProperty: "SomeProperty",
      link: "Assignee",
    });
  });
});

describe("remapped fixture", () => {
  beforeEach(() => {
    registerPackagedAliases("@example/todo-sdk", fixture("remapped"));
  });

  it("returns the target names, including a renamed primary key", () => {
    expect({
      ontologyRid: $resolveOntologyRid("ridHere"),
      objectType: $resolveObjectType("Todo"),
      primaryKey: $resolvePrimaryKey("Todo"),
      action: $resolveAction("deleteTodos"),
      queryVersion: $resolveQueryVersion("returnsTodo"),
      property: $resolveProperty("Todo", "body"),
      link: $resolveLink("Person", "Todos"),
    }).toEqual({
      ontologyRid:
        "ri.ontology.main.ontology.b0000000-0000-0000-0000-00000000000b",
      objectType: "foo.bar.Todo",
      primaryKey: "todoId",
      action: "foo.bar.deleteTodos",
      queryVersion: "3.2.1",
      property: "text",
      link: "assignedTodos",
    });
  });
});

describe("incomplete fixture", () => {
  beforeEach(() => {
    registerPackagedAliases("@example/todo-sdk", fixture("incomplete"));
  });

  it("resolves every Tier 1 key even though properties and links are missing", () => {
    // Tier 1 never asks for a property or a link, so a file that omits
    // objects.Todo.properties.body and empties objects.Todo.links is fully usable.
    expect({
      objectType: $resolveObjectType("Todo"),
      primaryKey: $resolvePrimaryKey("Todo"),
      interfaceType: $resolveInterfaceType("SomeInterface"),
    }).toEqual({
      objectType: "foo.bar.Todo",
      primaryKey: "todoId",
      interfaceType: "foo.bar.SomeInterface",
    });
    expect(() => $resolveProperty("Todo", "body")).toThrowError(
      /no alias registered for defaults\.objects\["Todo"\]\.properties\["body"\]/u,
    );
    expect(() => $resolveLink("Todo", "Assignee")).toThrowError(
      /no alias registered for defaults\.objects\["Todo"\]\.links\["Assignee"\]/u,
    );
  });

  it("throws for the dropped action rather than falling back", () => {
    expect($resolveAction("markTodoCompleted")).toBe(
      "foo.bar.markTodoCompleted",
    );
    expect(() => $resolveAction("deleteTodos")).toThrowError(
      /no alias registered for defaults\.actions\["deleteTodos"\]/u,
    );
  });

  it("resolves a property whose optional id is omitted", () => {
    // `id` is documentation for humans and future tooling; nothing in resolution reads it.
    expect($resolveProperty("SomeInterface", "SomeProperty")).toBe(
      "foo.bar.SomeProperty",
    );
  });
});
