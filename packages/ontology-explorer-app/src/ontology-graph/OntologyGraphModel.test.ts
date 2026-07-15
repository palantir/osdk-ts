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

import type { ObjectMetadata } from "@osdk/api";
import { describe, expect, it, vi } from "vitest";

import {
  OntologyGraphModel,
  type OntologyGraphModelDeps,
  type OntologyTypeInfo,
} from "./OntologyGraphModel.js";

function employeeMetadata(): ObjectMetadata {
  return {
    type: "object",
    apiName: "Employee",
    displayName: "Employee",
    pluralDisplayName: "Employees",
    description: undefined,
    rid: "ri.ontology.main.object-type.employee",
    primaryKeyApiName: "employeeNumber",
    primaryKeyType: "integer",
    titleProperty: "fullName",
    status: "ACTIVE",
    visibility: "NORMAL",
    icon: { type: "blueprint", color: "#EC9A3C", name: "person" },
    properties: {
      employeeNumber: { type: "integer", nullable: false, multiplicity: false },
      fullName: {
        type: "string",
        nullable: true,
        multiplicity: false,
        displayName: "Full Name",
      },
    },
    links: {
      primaryOffice: { targetType: "Office", multiplicity: false },
    },
    interfaceMap: {},
    inverseInterfaceMap: {},
  };
}

function officeMetadata(): ObjectMetadata {
  return {
    type: "object",
    apiName: "Office",
    displayName: "Office",
    pluralDisplayName: "Offices",
    description: undefined,
    rid: "ri.ontology.main.object-type.office",
    primaryKeyApiName: "officeId",
    primaryKeyType: "string",
    titleProperty: "officeId",
    status: undefined,
    visibility: undefined,
    icon: undefined,
    properties: {
      officeId: { type: "string", nullable: false, multiplicity: false },
    },
    links: {},
    interfaceMap: {},
    inverseInterfaceMap: {},
  };
}

function makeDeps(
  metadata: Record<string, ObjectMetadata>,
): OntologyGraphModelDeps {
  return {
    fetchObjectMetadata: (apiName) => {
      const md = metadata[apiName];
      return md
        ? Promise.resolve(md)
        : Promise.reject(new Error(`no metadata for ${apiName}`));
    },
    fetchActionMetadata: () => Promise.reject(new Error("no action metadata")),
    fetchQueryMetadata: () => Promise.reject(new Error("no query metadata")),
  };
}

function expectObject(
  model: OntologyGraphModel,
  apiName: string,
): OntologyTypeInfo {
  const entity = model.getEntity({ kind: "object", apiName });
  if (entity?.kind !== "object") {
    throw new Error(`expected object ${apiName}, got ${entity?.kind}`);
  }
  return entity;
}

describe("OntologyGraphModel", () => {
  it("loads metadata for entities marked used", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    model.markUsed([{ kind: "object", apiName: "Employee" }]);

    await vi.waitFor(() => {
      expect(expectObject(model, "Employee").loadState).toBe("loaded");
    });

    const employee = expectObject(model, "Employee");
    expect(employee.used).toBe(true);
    expect(employee.displayName).toBe("Employee");
    expect(employee.primaryKeyApiName).toBe("employeeNumber");
    expect(employee.properties.map((p) => p.apiName)).toEqual([
      "employeeNumber",
      "fullName",
    ]);
    expect(employee.links).toEqual([
      { apiName: "primaryOffice", targetType: "Office", multiplicity: false },
    ]);
  });

  it("adds link targets as unused stub nodes", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    model.markUsed([{ kind: "object", apiName: "Employee" }]);
    await vi.waitFor(() => {
      expect(model.getEntity({ kind: "object", apiName: "Office" }))
        .toBeDefined();
    });

    const office = expectObject(model, "Office");
    expect(office.loadState).toBe("stub");
    expect(office.used).toBe(false);
  });

  it("expands a stub neighbor when loadEntity is called", async () => {
    const model = new OntologyGraphModel(
      makeDeps({
        Employee: employeeMetadata(),
        Office: officeMetadata(),
      }),
    );

    model.markUsed([{ kind: "object", apiName: "Employee" }]);
    await vi.waitFor(() => {
      expect(expectObject(model, "Office").loadState).toBe("stub");
    });

    model.loadEntity({ kind: "object", apiName: "Office" });
    await vi.waitFor(() => {
      expect(expectObject(model, "Office").loadState).toBe("loaded");
    });
    expect(expectObject(model, "Office").displayName).toBe("Office");
  });

  it("loads a stub when it is later marked used", async () => {
    const model = new OntologyGraphModel(
      makeDeps({
        Employee: employeeMetadata(),
        Office: officeMetadata(),
      }),
    );

    model.markUsed([{ kind: "object", apiName: "Employee" }]);
    await vi.waitFor(() => {
      expect(expectObject(model, "Office").loadState).toBe("stub");
    });
    expect(expectObject(model, "Office").used).toBe(false);

    // Marking the stub used should flip `used` AND trigger its load, matching a
    // freshly-used entity rather than leaving it an empty stub until clicked.
    model.markUsed([{ kind: "object", apiName: "Office" }]);
    await vi.waitFor(() => {
      expect(expectObject(model, "Office").loadState).toBe("loaded");
    });
    expect(expectObject(model, "Office").used).toBe(true);
  });

  it("records an error when metadata fetch fails", async () => {
    const model = new OntologyGraphModel(makeDeps({}));

    model.markUsed([{ kind: "object", apiName: "Missing" }]);
    await vi.waitFor(() => {
      expect(expectObject(model, "Missing").loadState).toBe("error");
    });
    expect(expectObject(model, "Missing").error).toContain(
      "no metadata for Missing",
    );
  });

  it("notifies subscribers and bumps version as entities load", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    const listener = vi.fn();
    const unsubscribe = model.subscribe(listener);
    const startVersion = model.getVersion();

    model.markUsed([{ kind: "object", apiName: "Employee" }]);
    await vi.waitFor(() => {
      expect(expectObject(model, "Employee").loadState).toBe("loaded");
    });

    expect(listener).toHaveBeenCalled();
    expect(model.getVersion()).toBeGreaterThan(startVersion);
    unsubscribe();
  });

  it("does not demote an entity back to unused", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    model.markUsed([{ kind: "object", apiName: "Employee" }]);
    await vi.waitFor(() => {
      expect(expectObject(model, "Employee").loadState).toBe("loaded");
    });

    // Marking used again (e.g. a later registry sync that no longer includes
    // "Employee") must not flip `used` back to false.
    model.markUsed([]);
    expect(expectObject(model, "Employee").used).toBe(true);
  });
});
