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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { getWireObjectSet } from "../objectSet/createObjectSet.js";
import { buildObjectSetFromLinkDefByType } from "./buildObjectSetFromLinkDef.js";

describe("buildObjectSetFromLinkDefByType", () => {
  let client: Client;

  beforeAll(() => {
    const fauxFoundry = new FauxFoundry("https://stack.palantir.com/");
    const fauxOntology = fauxFoundry.getDefaultOntology();
    ontologies.addEmployeeOntology(fauxOntology);

    const testSetup = startNodeApiServer(fauxFoundry, createClient);
    client = testSetup.client;

    return () => {
      testSetup.apiServer.close();
    };
  });

  const sourceType = {
    type: "object" as const,
    apiName: "Employee",
    __DefinitionMetadata: {
      type: "object" as const,
      primaryKeyApiName: "employeeId",
    },
  } as ObjectOrInterfaceDefinition;

  it("builds ObjectSet with single pivot using type def", async () => {
    const linkDef = {
      segments: [{ type: "pivotTo" as const, linkName: "lead" }],
    };

    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      50030,
      linkDef,
    );

    const wireOs = getWireObjectSet(objectSet);
    expect(wireOs.type).toBe("searchAround");
  });

  it("builds ObjectSet with union set operation", async () => {
    const linkDef = {
      segments: [{ type: "pivotTo" as const, linkName: "lead" }],
      setOperations: [{
        type: "union" as const,
        other: {
          segments: [{ type: "pivotTo" as const, linkName: "peeps" }],
        },
      }],
    };

    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      50030,
      linkDef,
    );

    const wireOs = getWireObjectSet(objectSet);
    expect(wireOs.type).toBe("union");
    expect("objectSets" in wireOs && wireOs.objectSets).toHaveLength(2);
  });

  it("builds ObjectSet with intersect set operation", async () => {
    const linkDef = {
      segments: [{ type: "pivotTo" as const, linkName: "lead" }],
      setOperations: [{
        type: "intersect" as const,
        other: {
          segments: [{ type: "pivotTo" as const, linkName: "peeps" }],
        },
      }],
    };

    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      50030,
      linkDef,
    );

    const wireOs = getWireObjectSet(objectSet);
    expect(wireOs.type).toBe("intersect");
    expect("objectSets" in wireOs && wireOs.objectSets).toHaveLength(2);
  });

  it("builds ObjectSet with subtract set operation", async () => {
    const linkDef = {
      segments: [{ type: "pivotTo" as const, linkName: "lead" }],
      setOperations: [{
        type: "subtract" as const,
        other: {
          segments: [{ type: "pivotTo" as const, linkName: "peeps" }],
        },
      }],
    };

    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      50030,
      linkDef,
    );

    const wireOs = getWireObjectSet(objectSet);
    expect(wireOs.type).toBe("subtract");
    expect("objectSets" in wireOs && wireOs.objectSets).toHaveLength(2);
  });

  it("builds ObjectSet with multiple set operations", async () => {
    const linkDef = {
      segments: [{ type: "pivotTo" as const, linkName: "lead" }],
      setOperations: [
        {
          type: "union" as const,
          other: {
            segments: [{ type: "pivotTo" as const, linkName: "peeps" }],
          },
        },
        {
          type: "intersect" as const,
          other: {
            segments: [{ type: "pivotTo" as const, linkName: "lead" }],
          },
        },
      ],
    };

    const objectSet = await buildObjectSetFromLinkDefByType(
      client,
      sourceType,
      50030,
      linkDef,
    );

    const wireOs = getWireObjectSet(objectSet);
    // The second operation wraps the first: intersect(union(base, peeps), lead)
    expect(wireOs.type).toBe("intersect");
  });
});
