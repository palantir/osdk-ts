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
  };
}

describe("OntologyGraphModel", () => {
  it("loads metadata for types marked used", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    model.markUsed(["Employee"]);

    await vi.waitFor(() => {
      expect(model.getType("Employee")?.loadState).toBe("loaded");
    });

    const employee = model.getType("Employee");
    expect(employee?.used).toBe(true);
    expect(employee?.displayName).toBe("Employee");
    expect(employee?.primaryKeyApiName).toBe("employeeNumber");
    expect(employee?.properties.map((p) => p.apiName)).toEqual([
      "employeeNumber",
      "fullName",
    ]);
    expect(employee?.links).toEqual([
      { apiName: "primaryOffice", targetType: "Office", multiplicity: false },
    ]);
  });

  it("adds link targets as unused stub nodes", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    model.markUsed(["Employee"]);
    await vi.waitFor(() => {
      expect(model.getType("Office")).toBeDefined();
    });

    const office = model.getType("Office");
    expect(office?.loadState).toBe("stub");
    expect(office?.used).toBe(false);
  });

  it("expands a stub neighbor when loadType is called", async () => {
    const model = new OntologyGraphModel(
      makeDeps({
        Employee: employeeMetadata(),
        Office: officeMetadata(),
      }),
    );

    model.markUsed(["Employee"]);
    await vi.waitFor(() => {
      expect(model.getType("Office")?.loadState).toBe("stub");
    });

    model.loadType("Office");
    await vi.waitFor(() => {
      expect(model.getType("Office")?.loadState).toBe("loaded");
    });
    expect(model.getType("Office")?.displayName).toBe("Office");
  });

  it("records an error when metadata fetch fails", async () => {
    const model = new OntologyGraphModel(makeDeps({}));

    model.markUsed(["Missing"]);
    await vi.waitFor(() => {
      expect(model.getType("Missing")?.loadState).toBe("error");
    });
    expect(model.getType("Missing")?.error).toContain(
      "no metadata for Missing",
    );
  });

  it("notifies subscribers and bumps version as types load", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    const listener = vi.fn();
    const unsubscribe = model.subscribe(listener);
    const startVersion = model.getVersion();

    model.markUsed(["Employee"]);
    await vi.waitFor(() => {
      expect(model.getType("Employee")?.loadState).toBe("loaded");
    });

    expect(listener).toHaveBeenCalled();
    expect(model.getVersion()).toBeGreaterThan(startVersion);
    unsubscribe();
  });

  it("does not demote a type back to unused", async () => {
    const model = new OntologyGraphModel(
      makeDeps({ Employee: employeeMetadata() }),
    );

    model.markUsed(["Employee"]);
    await vi.waitFor(() => {
      expect(model.getType("Employee")?.loadState).toBe("loaded");
    });

    // Marking used again (e.g. a later registry sync that no longer includes
    // "Employee") must not flip `used` back to false.
    model.markUsed([]);
    expect(model.getType("Employee")?.used).toBe(true);
  });
});
