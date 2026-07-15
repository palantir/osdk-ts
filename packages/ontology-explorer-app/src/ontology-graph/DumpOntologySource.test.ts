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

// @vitest-environment node

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";

import { DumpOntologySource } from "./DumpOntologySource.js";
import {
  type OntologyEntityRef,
  OntologyGraphModel,
} from "./OntologyGraphModel.js";

const dumpText = readFileSync(
  fileURLToPath(new URL("./__fixtures__/sampleOntology.json", import.meta.url)),
  "utf-8",
);

describe("DumpOntologySource", () => {
  it("converts wire metadata into SDK ObjectMetadata with properties and links", async () => {
    const source = DumpOntologySource.parse(dumpText);
    const employee = await source.fetchObjectMetadata("Employee");

    expect(employee.apiName).toBe("Employee");
    expect(employee.primaryKeyApiName).toBe("id");
    expect(Object.keys(employee.properties)).toEqual(
      expect.arrayContaining(["id", "name", "title"]),
    );
    expect(employee.links.office).toMatchObject({
      targetType: "Office",
      multiplicity: false,
    });
    expect(employee.links.reports).toMatchObject({
      targetType: "Employee",
      multiplicity: true,
    });
  });

  it("converts wire metadata into SDK ActionMetadata with parameters and edits", async () => {
    const source = DumpOntologySource.parse(dumpText);

    const update = await source.fetchActionMetadata("updateDepartment");
    expect(update.apiName).toBe("updateDepartment");
    expect(Object.keys(update.parameters)).toEqual(
      expect.arrayContaining(["department", "name"]),
    );
    expect(update.modifiedEntities?.Department).toMatchObject({
      modified: true,
    });

    const create = await source.fetchActionMetadata("createOffice");
    expect(create.modifiedEntities?.Office).toMatchObject({ created: true });
  });

  it("converts wire metadata into SDK QueryMetadata with parameters and output", async () => {
    const source = DumpOntologySource.parse(dumpText);
    const query = await source.fetchQueryMetadata("getHeadcount");

    expect(query.apiName).toBe("getHeadcount");
    expect(Object.keys(query.parameters)).toEqual(
      expect.arrayContaining(["office"]),
    );
    expect(query.output).toBeDefined();
  });

  it("rejects fetch for an entity not in the dump", async () => {
    const source = DumpOntologySource.parse(dumpText);
    await expect(source.fetchObjectMetadata("Nope")).rejects.toThrow(/Nope/);
    await expect(source.fetchActionMetadata("Nope")).rejects.toThrow(/Nope/);
    await expect(source.fetchQueryMetadata("Nope")).rejects.toThrow(/Nope/);
  });

  it("throws a clear error on invalid JSON", () => {
    expect(() => DumpOntologySource.parse("not json")).toThrow(/valid JSON/);
  });

  it("throws a clear error on valid JSON with no objectTypes map", () => {
    expect(() => DumpOntologySource.parse("{}")).toThrow(/objectTypes/);
    expect(() => DumpOntologySource.parse("null")).toThrow(/objectTypes/);
    expect(() => DumpOntologySource.parse("42")).toThrow(/objectTypes/);
    expect(() => DumpOntologySource.parse("{\"objectTypes\":null}")).toThrow(
      /objectTypes/,
    );
  });

  it("seed marks every dump entity used and loads it into the model", async () => {
    const source = DumpOntologySource.parse(dumpText);
    const model = new OntologyGraphModel(source);

    source.seed(model);

    const loaded = (ref: OntologyEntityRef) =>
      model.getEntity(ref)?.loadState === "loaded";

    await vi.waitFor(() => {
      expect(loaded({ kind: "object", apiName: "Employee" })).toBe(true);
      expect(loaded({ kind: "object", apiName: "Office" })).toBe(true);
      expect(loaded({ kind: "object", apiName: "Department" })).toBe(true);
      expect(loaded({ kind: "action", apiName: "updateDepartment" })).toBe(
        true,
      );
      expect(loaded({ kind: "action", apiName: "createOffice" })).toBe(true);
      expect(loaded({ kind: "query", apiName: "getHeadcount" })).toBe(true);
    });
  });
});
