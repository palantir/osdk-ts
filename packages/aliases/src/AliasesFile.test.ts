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
import { fileURLToPath } from "node:url";

import { describe, expect, it, vi } from "vitest";

import type { AliasesFile } from "./AliasesFile.js";
import { parseAliasesFile, serializeAliasesFile } from "./AliasesFile.js";

const FIXTURE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "__fixtures__",
);

function fixtureText(name: string): string {
  return fs.readFileSync(path.join(FIXTURE_DIR, `${name}.json`), "utf-8");
}

function fixture(name: string): AliasesFile {
  return parseAliasesFile(JSON.parse(fixtureText(name)));
}

const LEGACY_MAPS = [
  "custom",
  "datasets",
  "egressConnections",
  "mediasets",
  "models",
  "streams",
] as const;

describe("parseAliasesFile", () => {
  it("parses all three fixtures", () => {
    expect(fixture("identity").version).toBe(1);
    expect(fixture("remapped").defaults.objects?.["Todo"]?.apiName).toBe(
      "foo.bar.Todo",
    );
    expect(fixture("incomplete").defaults.actions).toEqual({
      markTodoCompleted: {
        apiName: "foo.bar.markTodoCompleted",
        id: {
          rid: "ri.ontology.main.action-type.b0000000-0000-0000-0000-000000000001",
        },
      },
    });
  });

  it("treats a legacy file with no ontology maps as empty maps and warns", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const parsed = parseAliasesFile({
      version: 1,
      defaults: { custom: { a: "b" }, models: {} },
    });

    expect(parsed.defaults).toEqual({
      custom: { a: "b" },
      datasets: {},
      egressConnections: {},
      mediasets: {},
      models: {},
      streams: {},
      actions: {},
      interfaces: {},
      objects: {},
      ontologies: {},
      queries: {},
    });
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining(
        "datasets, egressConnections, mediasets, streams",
      ),
    );
    warn.mockRestore();
  });

  it("rejects an unknown version, naming the version found", () => {
    expect(() => parseAliasesFile({ version: 2, defaults: {} })).toThrowError(
      /\$\.version: unsupported version 2; only 1 is supported/u,
    );
  });

  it("rejects an empty apiName, naming the offending path", () => {
    const json = JSON.parse(fixtureText("identity")) as {
      defaults: { objects: { Todo: { apiName: string } } };
    };
    json.defaults.objects.Todo.apiName = "";

    expect(() => parseAliasesFile(json)).toThrowError(
      /\$\.defaults\.objects\.Todo\.apiName: apiName must be a non-empty string/u,
    );
  });

  it("rejects a primary key that does not match any property target", () => {
    const json = JSON.parse(fixtureText("remapped")) as {
      defaults: { objects: { Todo: { primaryKeyApiName: string } } };
    };
    json.defaults.objects.Todo.primaryKeyApiName = "id";

    expect(() => parseAliasesFile(json)).toThrowError(
      /\$\.defaults\.objects\.Todo\.primaryKeyApiName: "id" does not match the target apiName/u,
    );
  });

  it("rejects two source names collapsing onto one target apiName", () => {
    const json = JSON.parse(fixtureText("identity")) as {
      defaults: { objects: { Person: { apiName: string } } };
    };
    json.defaults.objects.Person.apiName = "Todo";

    expect(() => parseAliasesFile(json)).toThrowError(
      /\$\.defaults\.objects\.Todo\.apiName: target apiName "Todo" is already used by \$\.defaults\.objects\.Person/u,
    );
  });
});

describe("serializeAliasesFile", () => {
  it("round-trips identity.json byte for byte", () => {
    expect(serializeAliasesFile(fixture("identity"))).toBe(
      fixtureText("identity"),
    );
  });

  it("round-trips remapped.json and incomplete.json byte for byte", () => {
    expect(serializeAliasesFile(fixture("remapped"))).toBe(
      fixtureText("remapped"),
    );
    expect(serializeAliasesFile(fixture("incomplete"))).toBe(
      fixtureText("incomplete"),
    );
  });

  it("always emits all six legacy maps, because @osdk/functions calls Object.entries on them unguarded", () => {
    // `defaults` is deliberately under-populated relative to the type, the way a
    // hand-rolled emitter would get it wrong.
    const emitted = serializeAliasesFile({
      version: 1,
      defaults: { ontologies: { ridHere: { id: { rid: "ridHere" } } } },
    } as unknown as AliasesFile);

    const parsed = JSON.parse(emitted) as { defaults: Record<string, unknown> };
    for (const map of LEGACY_MAPS) {
      expect(parsed.defaults[map], map).toEqual({});
    }
    expect(() => {
      for (const map of LEGACY_MAPS) {
        Object.entries(parsed.defaults[map] as Record<string, unknown>);
      }
    }).not.toThrow();
  });

  it("emits keys in ascending code-unit order with a trailing newline", () => {
    const emitted = serializeAliasesFile({
      version: 1,
      defaults: {
        streams: {},
        custom: {},
        models: {},
        mediasets: {},
        egressConnections: {},
        datasets: {},
        queries: { b: { apiName: "b" }, a: { apiName: "a" } },
      },
    });

    expect(emitted).toBe(`{
  "defaults": {
    "custom": {},
    "datasets": {},
    "egressConnections": {},
    "mediasets": {},
    "models": {},
    "queries": {
      "a": {
        "apiName": "a"
      },
      "b": {
        "apiName": "b"
      }
    },
    "streams": {}
  },
  "version": 1
}
`);
  });
});
