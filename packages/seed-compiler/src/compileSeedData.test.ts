/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type * as Ontology from "@osdk/foundry.ontologies";
import {
  createFoundrySeed,
  createOntologySeedWithMetadata,
  type OntologySeedOutput,
} from "@osdk/seed-helpers";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { compileSeedData, mergeSeedData } from "./compileSeedData.js";

type WireType = Ontology.ObjectPropertyType["type"];

const Employee = { type: "object", apiName: "Employee" } as const;
const Office = { type: "object", apiName: "Office" } as const;

/** Builds a wire `ObjectTypeFullMetadata` from a compact spec. */
function makeObjectType(
  apiName: string,
  primaryKey: string,
  properties: Record<string, WireType>,
): Ontology.ObjectTypeFullMetadata {
  return {
    objectType: {
      apiName,
      primaryKey,
      titleProperty: primaryKey,
      properties: Object.fromEntries(
        Object.entries(properties).map(([name, type]) => [
          name,
          { dataType: { type } },
        ]),
      ),
    },
    linkTypes: [],
    implementsInterfaces: [],
    implementsInterfaces2: {},
    sharedPropertyTypeMapping: {},
  } as unknown as Ontology.ObjectTypeFullMetadata;
}

const metadata = {
  ontology: {
    apiName: "test",
    displayName: "Test",
    description: "",
    rid: "ri.ontology.main.ontology.0000-0000-0000-0000",
  },
  objectTypes: {
    Employee: makeObjectType("Employee", "employeeId", {
      employeeId: "string",
      fullName: "string",
    }),
    Office: makeObjectType("Office", "officeId", { officeId: "string" }),
  },
  actionTypes: {},
  actionTypesFullMetadata: {},
  queryTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  valueTypes: {},
} as Ontology.OntologyFullMetadata;

const alice = {
  id: "alice",
  username: "alice",
  realm: "test",
  status: "ACTIVE" as const,
  attributes: {},
};
const foundry = createFoundrySeed(metadata, ({ ontologySeed, adminSeed }) => {
  const employee = ontologySeed.create(Employee, { employeeId: "emp-001" });
  const office = ontologySeed.create(Office, { officeId: "NYC" });
  ontologySeed.link(employee as never, "officeLink" as never, office as never);
  return adminSeed.createUser(alice);
});

let dir: string;

beforeEach(() => {
  dir = fs.mkdtempSync(path.join(os.tmpdir(), "seed-compiler-"));
});

afterEach(() => {
  fs.rmSync(dir, { recursive: true, force: true });
});

/** Writes a seed file with the given module source and returns its path. */
function writeSeedFile(name: string, source: string): string {
  const file = path.join(dir, name);
  fs.writeFileSync(file, source);
  return file;
}

function writeExport(name: string, value: unknown): string {
  return writeSeedFile(name, `export default ${JSON.stringify(value)};`);
}

/**
 * Writes a seed file whose default export is a serialized `createSeed()`
 * result, so the fixture content is exactly what `@osdk/seed-helpers` produces
 * rather than a hand-approximated shape.
 *
 * `context` is emitted explicitly rather than via `JSON.stringify` of the whole
 * result, because a seed function that returns nothing yields
 * `context: undefined`, which `JSON.stringify` drops — and a fixture missing
 * the key is not the shape the loader actually has to recognize.
 */
function writeSeed(
  name: string,
  fn: Parameters<typeof createOntologySeedWithMetadata>[1],
): string {
  const result = createOntologySeedWithMetadata(metadata, fn);
  return writeSeedFile(
    name,
    `export default { output: ${JSON.stringify(result.output)}, context: ${
      JSON.stringify(result.context) ?? "undefined"
    } };\n`,
  );
}

function readOutput(outputPath: string): OntologySeedOutput {
  return JSON.parse(fs.readFileSync(outputPath, "utf-8")) as OntologySeedOutput;
}

describe("compileSeedData", () => {
  it("merges objects and links from every file into one JSON output", async () => {
    const a = writeSeed("01-a.mts", (seed) => {
      const office = seed.create(Office, { officeId: "NYC" });
      const emp = seed.create(Employee, {
        employeeId: "emp-001",
        fullName: "Alice",
      });
      seed.link(emp as never, "officeLink" as never, office as never);
    });
    const b = writeSeed("02-b.mts", (seed) => {
      seed.create(Employee, { employeeId: "emp-002", fullName: "Bob" });
      seed.create(Office, { officeId: "SF" });
    });

    const outputPath = path.join(dir, "out", "seed.json");
    await compileSeedData([a, b], outputPath, metadata);

    const merged = readOutput(outputPath);
    expect(merged.objects.Employee).toEqual([
      { employeeId: "emp-001", fullName: "Alice" },
      { employeeId: "emp-002", fullName: "Bob" },
    ]);
    expect(merged.objects.Office).toEqual([
      { officeId: "NYC" },
      { officeId: "SF" },
    ]);
    expect(merged.links).toHaveLength(1);
    expect(merged.links[0]).toMatchObject({
      linkType: "officeLink",
      sourceObjectType: "Employee",
      sourceKey: "emp-001",
      targetObjectType: "Office",
      targetKey: "NYC",
    });
  });

  it("resolves a link against objects created in another file", async () => {
    const a = writeSeed("01-objects.mts", (seed) => {
      seed.create(Office, { officeId: "NYC" });
      seed.create(Employee, { employeeId: "emp-001" });
    });
    const b = writeSeedFile(
      "02-links.mts",
      `export default ${JSON.stringify({
        output: {
          objects: {},
          links: [
            {
              name: "ignored",
              linkType: "officeLink",
              sourceObjectType: "Employee",
              sourceKey: "emp-001",
              targetObjectType: "Office",
              targetKey: "NYC",
            },
          ],
        },
      })};\n`,
    );

    const outputPath = path.join(dir, "seed.json");
    await compileSeedData([a, b], outputPath, metadata);

    const merged = readOutput(outputPath);
    expect(merged.objects.Employee).toHaveLength(1);
    expect(merged.links).toEqual([
      {
        // Derived from the link's identity, not carried over from the input.
        name: "Employee:emp-001:officeLink:Office:NYC",
        linkType: "officeLink",
        sourceObjectType: "Employee",
        sourceKey: "emp-001",
        targetObjectType: "Office",
        targetKey: "NYC",
      },
    ]);
  });

  it("deduplicates a link declared in two files", async () => {
    const link = (seed: Parameters<Parameters<typeof writeSeed>[1]>[0]) => {
      const office = seed.create(Office, { officeId: "NYC" });
      const emp = seed.create(Employee, { employeeId: "emp-001" });
      seed.link(emp as never, "officeLink" as never, office as never);
    };
    // Same link, but only one file may create the objects — a duplicate
    // primary key across files is an error.
    const a = writeSeed("01-a.mts", link);
    const b = writeSeedFile(
      "02-b.mts",
      `export default ${JSON.stringify({
        output: {
          objects: {},
          links: [
            {
              name: "whatever",
              linkType: "officeLink",
              sourceObjectType: "Employee",
              sourceKey: "emp-001",
              targetObjectType: "Office",
              targetKey: "NYC",
            },
          ],
        },
      })};\n`,
    );

    const outputPath = path.join(dir, "seed.json");
    await compileSeedData([a, b], outputPath, metadata);

    expect(readOutput(outputPath).links).toHaveLength(1);
  });

  it("throws naming the file when a primary key repeats across files", async () => {
    const a = writeSeed("01-a.mts", (seed) => {
      seed.create(Employee, { employeeId: "emp-001", fullName: "Alice" });
    });
    const b = writeSeed("02-b.mts", (seed) => {
      seed.create(Employee, { employeeId: "emp-001", fullName: "Alicia" });
    });

    await expect(
      compileSeedData([a, b], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(
      /Seed file '02-b\.mts': .*Employee with primary key emp-001 already exists/u,
    );
  });

  it("throws naming the object type when it is absent from the ontology", async () => {
    const file = writeSeedFile(
      "01-ghost.mts",
      `export default { output: { objects: { Ghost: [{ id: "1" }] }, links: [] } };\n`,
    );

    await expect(
      compileSeedData([file], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(
      /Seed file '01-ghost\.mts': .*Object type 'Ghost' is not defined in the ontology/u,
    );
  });

  it("propagates property validation from the builder", async () => {
    const file = writeSeedFile(
      "01-bad.mts",
      `export default { output: { objects: { Employee: [{ employeeId: "emp-001", fullName: 42 }] }, links: [] } };\n`,
    );

    await expect(
      compileSeedData([file], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(/expects string \(a string\) but got number/u);
  });

  it("throws when a seed file has no default export", async () => {
    const file = writeSeedFile("01-empty.mts", `export const nope = 1;\n`);

    await expect(
      compileSeedData([file], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(/Seed file '01-empty\.mts' must have a default export/u);
  });

  // The `{ output, context }` form is exercised by every test above, since
  // that is what `writeSeed` emits. This covers the other accepted form, and
  // omits `links` to pin that they default to [].
  it("accepts a bare OntologySeedOutput — the .output of a createSeed() result", async () => {
    const file = writeSeedFile(
      "01-bare.mts",
      `export default { objects: { Employee: [{ employeeId: "emp-001" }] } };\n`,
    );

    const outputPath = path.join(dir, "seed.json");
    await compileSeedData([file], outputPath, metadata);

    expect(readOutput(outputPath)).toEqual({
      objects: { Employee: [{ employeeId: "emp-001" }] },
      links: [],
    });
  });

  it("throws when the default export is neither accepted shape", async () => {
    // A function is `export default (seed) => {...}` with createSeed() never
    // called — it has a default export, so it must not be reported as missing.
    for (const [name, source] of [
      ["01-fn.mts", `export default function (seed) { return seed; };\n`],
      ["01-junk.mts", `export default { hello: "world" };\n`],
    ]) {
      await expect(
        compileSeedData(
          [writeSeedFile(name, source)],
          path.join(dir, "seed.json"),
          metadata,
        ),
      ).rejects.toThrow(
        new RegExp(
          `Seed file '${name}' default export is not a createSeed\\(\\) result`,
          "u",
        ),
      );
    }
  });

  it("throws when objects or links are not arrays", async () => {
    const notArray = writeSeedFile(
      "01-objects.mts",
      `export default { output: { objects: { Employee: { employeeId: "emp-001" } } } };\n`,
    );
    const badLinks = writeSeedFile(
      "02-links.mts",
      `export default { output: { objects: {}, links: "nope" } };\n`,
    );

    await expect(
      compileSeedData([notArray], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(
      /Seed file '01-objects\.mts' has a non-array entry for object type 'Employee'/u,
    );
    await expect(
      compileSeedData([badLinks], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(/Seed file '02-links\.mts' has a non-array 'links'/u);
  });

  it("wraps errors thrown while a seed file is being imported", async () => {
    const file = writeSeedFile(
      "01-boom.mts",
      `throw new Error("kaboom");\nexport default {};\n`,
    );

    await expect(
      compileSeedData([file], path.join(dir, "seed.json"), metadata),
    ).rejects.toThrow(
      /Seed file '01-boom\.mts' failed to compile:\n {2}kaboom/u,
    );
  });

  it.each([undefined, "ontology", "foundry"] as const)(
    "writes the requested JSON shape for outputFormat %s",
    async (format) => {
      const file = writeExport("foundry.mts", foundry);
      const outputPath = path.join(dir, "out", "seed.json");
      await compileSeedData([file], outputPath, metadata, format);

      const ontology = foundry.output.ontology;
      const written = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
      expect(written).toStrictEqual(
        format === "foundry"
          ? { ontology, admin: { users: [alice] } }
          : ontology,
      );
    },
  );
});

describe("mergeSeedData", () => {
  it("merges ontology and Foundry files and selects a previously loaded user", async () => {
    const bob = { ...alice, id: "bob", username: "bob" };
    const legacy = writeSeed("legacy.mts", (seed) =>
      seed.create(Office, { officeId: "SF" }),
    );
    const wrapped = writeExport("foundry.mts", foundry);
    const bare = writeExport("admin.mts", {
      ontology: { objects: {}, links: [] },
      admin: { users: [bob], currentUserId: alice.id },
    });

    await expect(
      mergeSeedData([legacy, wrapped, bare], metadata),
    ).resolves.toStrictEqual({
      ontology: {
        objects: {
          Office: [{ officeId: "SF" }, { officeId: "NYC" }],
          Employee: [{ employeeId: "emp-001" }],
        },
        links: foundry.output.ontology.links,
      },
      admin: { users: [alice, bob], currentUserId: alice.id },
    });
    await expect(mergeSeedData([bare, wrapped], metadata)).rejects.toThrow(
      /Seed file 'admin\.mts': .*User with ID alice does not exist/u,
    );
  });

  it("returns an empty admin section for legacy-only input", async () => {
    const objects = { Office: [{ officeId: "NYC" }] };
    const file = writeExport("legacy.mts", { objects });
    await expect(mergeSeedData([file], metadata)).resolves.toStrictEqual({
      ontology: { objects, links: [] },
      admin: { users: [], currentUserId: undefined },
    });
  });

  it("names the file that introduces a duplicate user", async () => {
    const first = writeExport("first.mts", foundry);
    const duplicate = writeExport("duplicate.mts", {
      ontology: { objects: {} },
      admin: { users: [alice] },
    });
    await expect(mergeSeedData([first, duplicate], metadata)).rejects.toThrow(
      /Seed file 'duplicate\.mts': .*User with ID alice already exists/u,
    );
  });

  it("names the file with a malformed admin section", async () => {
    const file = writeExport("invalid.mts", {
      ontology: { objects: {} },
      admin: { users: "bad" },
    });
    await expect(mergeSeedData([file], metadata)).rejects.toThrow(
      /invalid\.mts.*'users' array/u,
    );
  });
});
