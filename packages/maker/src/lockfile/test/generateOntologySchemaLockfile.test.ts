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

import { beforeEach, describe, expect, it } from "vitest";

import { defineInterface } from "../../api/defineInterface.js";
import {
  defineOntology,
  getOntologyDefinition,
} from "../../api/defineOntology.js";
import {
  censusOfSource,
  generateOntologySchemaLockfile,
} from "../generateOntologySchemaLockfile.js";
import type { OntologySchemaLockfile } from "../OntologySchemaLockfile.js";

/**
 * The lockfile for an ontology whose one enrolled interface has a struct property, with the
 * struct's one field displayed under `displayName`.
 */
async function lockAddressStruct(
  displayName: string,
): Promise<OntologySchemaLockfile> {
  await defineOntology("com.palantir.", () => {}, "/tmp/");
  defineInterface({
    apiName: "Person",
    properties: {
      address: {
        type: {
          type: "struct",
          structDefinition: {
            zip: { fieldType: "string", displayMetadata: { displayName } },
          },
        },
      },
    },
    schemaMigrations: { transitions: [] },
  });
  return generateOntologySchemaLockfile(getOntologyDefinition());
}

/**
 * The lockfile for an ontology whose one enrolled interface has a plain string property,
 * presented under `displayName`.
 */
async function lockNameProperty(
  displayName: string,
): Promise<OntologySchemaLockfile> {
  await defineOntology("com.palantir.", () => {}, "/tmp/");
  defineInterface({
    apiName: "Person",
    properties: {
      name: {
        type: "string",
        displayName,
        description: `The ${displayName} of the person`,
      },
    },
    schemaMigrations: { transitions: [] },
  });
  return generateOntologySchemaLockfile(getOntologyDefinition());
}

describe("generateOntologySchemaLockfile", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  it("records a struct type without its field display metadata", async () => {
    expect(await lockAddressStruct("ZIP")).toEqual(
      await lockAddressStruct("Postal code"),
    );
  });

  it("records a property without its own display metadata", async () => {
    expect(await lockNameProperty("Name")).toEqual(
      await lockNameProperty("Full name"),
    );
  });
});

describe("censusOfSource", () => {
  it("counts an interface that never opted in", () => {
    defineInterface({ apiName: "Unenrolled" });
    defineInterface({
      apiName: "Enrolled",
      schemaMigrations: { transitions: [] },
    });

    const ontology = getOntologyDefinition();
    expect([...censusOfSource(ontology).interfaces.keys()].sort()).toEqual([
      "com.palantir.Enrolled",
      "com.palantir.Unenrolled",
    ]);
    expect(
      Object.keys(generateOntologySchemaLockfile(ontology).interfaces),
    ).toEqual(["com.palantir.Enrolled"]);
  });

  it("records the schema of an interface that opted back out", () => {
    // This is the only record of it: validation has to read what became of its in-flight
    // transitions, and opting out drops it from the generated lockfile entirely.
    defineInterface({
      apiName: "Unenrolled",
      properties: { lastName: { type: "string", required: false } },
    });

    expect(
      censusOfSource(getOntologyDefinition()).interfaces.get(
        "com.palantir.Unenrolled",
      ),
    ).toEqual({
      properties: { lastName: { type: "string", required: false } },
    });
  });
});
