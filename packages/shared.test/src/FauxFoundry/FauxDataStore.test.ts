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

import { beforeEach, describe, expect, it } from "vitest";
import type { BaseServerObject } from "./BaseServerObject.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";

describe(FauxDataStore, () => {
  describe("Simple Employee ontology", () => {
    let fauxOntology: FauxOntology;
    let fauxDataStore: FauxDataStore;

    const pks = ["a", "b", "c", "d"] as const;
    const employees = Object
      .fromEntries(
        pks.map((id) =>
          [id, {
            __apiName: "Employee",
            __primaryKey: id,
            id,
          }] as const
        ),
      ) as unknown as Record<typeof pks[number], BaseServerObject>;

    beforeEach(() => {
      fauxOntology = new FauxOntology({
        apiName: "foo",
        description: "foo",
        displayName: "foo",
        rid: "ri.foo",
      });
      fauxDataStore = new FauxDataStore(fauxOntology);

      fauxOntology.registerObjectType({
        implementsInterfaces: [],
        implementsInterfaces2: {},
        linkTypes: [{
          apiName: "peeps",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Employee",
          cardinality: "MANY",
          displayName: "Peeps",
          linkTypeRid: "rid.link-type.327",
        }, {
          apiName: "lead",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Employee",
          cardinality: "ONE",
          displayName: "Lead",
          linkTypeRid: "rid.link-type.327",
        }],
        objectType: {
          apiName: "Employee",
          description: "Employee",
          displayName: "Employee",
          rid: "ri.Employee",
          icon: {
            color: "#000000",
            name: "whoCares",
            type: "blueprint",
          },
          pluralDisplayName: "Employees",
          primaryKey: "id",
          properties: {
            id: {
              dataType: { type: "string" },
              rid: "ri.id",
              displayName: "id",
              description: "id",
            },
          },
          status: "ACTIVE",
          titleProperty: "id",
        },
        sharedPropertyTypeMapping: {},
      });
    });

    it("should work in the happy paths", () => {
      const { a, b, c, d } = employees;

      const getLeadsAndPeeps = (id: string) => ({
        lead: fauxDataStore.getLinksOrThrow("Employee", id, "lead")[0],
        peeps: fauxDataStore.getLinksOrThrow("Employee", id, "peeps"),
      });

      // set a's lead to b
      fauxDataStore.registerObject(a);
      fauxDataStore.registerObject(b);
      fauxDataStore.registerLink(a, "lead", b, "peeps");

      expect(getLeadsAndPeeps("a")).toMatchObject({
        lead: b,
        peeps: [],
      });
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: undefined,
        peeps: [a],
      });

      // try the reverse (many to one this time)
      fauxDataStore.registerObject(c);
      fauxDataStore.registerObject(d);
      // set c's lead to d
      fauxDataStore.registerLink(d, "peeps", c, "lead");

      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c],
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [],
      });

      // set b's lead to c
      fauxDataStore.registerLink(c, "peeps", b, "lead");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: c,
        peeps: [a],
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [b],
      });

      // change b's lead to d
      fauxDataStore.registerLink(d, "peeps", b, "lead");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: d,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [], // c should no longer have b as a peep
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c, b], // d has two peeps now
      });
    });
  });
});
