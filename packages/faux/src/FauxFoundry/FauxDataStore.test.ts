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
import { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import { FauxDataStore } from "./FauxDataStore.js";
import { FauxOntology } from "./FauxOntology.js";

describe(FauxDataStore, () => {
  describe("Simple Employee ontology", () => {
    let attachmentsStore: FauxAttachmentStore;
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

    const projectPks = ["p1", "p2"] as const;
    const projects = Object
      .fromEntries(
        projectPks.map((id) =>
          [id, {
            __apiName: "Project",
            __primaryKey: id,
            id,
            name: `Project ${id}`,
          }] as const
        ),
      ) as unknown as Record<typeof projectPks[number], BaseServerObject>;

    beforeEach(() => {
      attachmentsStore = new FauxAttachmentStore();
      fauxOntology = new FauxOntology({
        apiName: "foo",
        description: "foo",
        displayName: "foo",
        rid: "ri.foo",
      });
      fauxDataStore = new FauxDataStore(
        fauxOntology,
        attachmentsStore,
        /*strict*/ true,
      );

      const Employee = {
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
          foreignKeyPropertyApiName: "leadId",
        }, {
          apiName: "ownedProjects",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Project",
          cardinality: "MANY",
          displayName: "Owned Projects",
          linkTypeRid: "rid.link-type.328",
        }, {
          apiName: "contributedProjects",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Project",
          cardinality: "MANY",
          displayName: "Contributed Projects",
          linkTypeRid: "rid.link-type.329",
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
              typeClasses: [],
            },
            leadId: {
              dataType: { type: "string" },
              rid: "ri.leadId",
              displayName: "leadId",
              description: "leadId",
              typeClasses: [],
            },
          },
          status: "ACTIVE",
          titleProperty: "id",
        },
        sharedPropertyTypeMapping: {},
      } as const;

      const Project = {
        implementsInterfaces: [],
        implementsInterfaces2: {},
        linkTypes: [{
          apiName: "owner",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Employee",
          cardinality: "ONE",
          displayName: "Owner",
          linkTypeRid: "rid.link-type.328",
          foreignKeyPropertyApiName: "ownerId",
        }, {
          apiName: "contributors",
          status: "EXPERIMENTAL",
          objectTypeApiName: "Employee",
          cardinality: "MANY",
          displayName: "Contributors",
          linkTypeRid: "rid.link-type.329",
        }],
        objectType: {
          apiName: "Project",
          description: "Project",
          displayName: "Project",
          rid: "ri.Project",
          icon: {
            color: "#0000FF",
            name: "project",
            type: "blueprint",
          },
          pluralDisplayName: "Projects",
          primaryKey: "id",
          properties: {
            id: {
              dataType: { type: "string" },
              rid: "ri.proj.id",
              displayName: "id",
              description: "id",
              typeClasses: [],
            },
            name: {
              dataType: { type: "string" },
              rid: "ri.proj.name",
              displayName: "name",
              description: "name",
              typeClasses: [],
            },
            ownerId: {
              dataType: { type: "string" },
              rid: "ri.proj.ownerId",
              displayName: "ownerId",
              description: "ownerId",
              typeClasses: [],
            },
          },
          status: "ACTIVE",
          titleProperty: "name",
        },
        sharedPropertyTypeMapping: {},
      } as const;

      fauxOntology.registerObjectType(Employee);
      fauxOntology.registerObjectType(Project);
    });

    const getLeadsAndPeeps = (id: string) => ({
      lead: fauxDataStore.getLinksOrThrow("Employee", id, "lead")[0],
      peeps: fauxDataStore.getLinksOrThrow("Employee", id, "peeps"),
    });

    const getProjectLinks = (projectId: string) => ({
      owner: fauxDataStore.getLinksOrThrow("Project", projectId, "owner")[0],
      contributors: fauxDataStore.getLinksOrThrow(
        "Project",
        projectId,
        "contributors",
      ),
    });

    const getEmployeeProjectLinks = (employeeId: string) => ({
      ownedProjects: fauxDataStore.getLinksOrThrow(
        "Employee",
        employeeId,
        "ownedProjects",
      ),
      contributedProjects: fauxDataStore.getLinksOrThrow(
        "Employee",
        employeeId,
        "contributedProjects",
      ),
    });

    it("should work in the happy paths", () => {
      const { a, b, c, d } = employees;

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
      expect(fauxDataStore.getObject(b.__apiName, b.__primaryKey))
        .toMatchInlineSnapshot(`
          {
            "__apiName": "Employee",
            "__primaryKey": "b",
            "id": "b",
            "leadId": "c",
          }
        `);
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
      expect(fauxDataStore.getObject(b.__apiName, b.__primaryKey))
        .toMatchObject({
          leadId: "d",
        });
      expect(getLeadsAndPeeps("c")).toMatchObject({
        lead: d,
        peeps: [], // c should no longer have b as a peep
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c, b], // d has two peeps now
      });

      // remove b's lead
      fauxDataStore.unregisterLink(d, "peeps", b, "lead");
      expect(fauxDataStore.getObject(b.__apiName, b.__primaryKey))
        .toMatchInlineSnapshot(`
          {
            "__apiName": "Employee",
            "__primaryKey": "b",
            "id": "b",
            "leadId": undefined,
          }
        `);
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: undefined,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c], // d no longer leads b
      });

      // change b's lead to d but in the other direction
      fauxDataStore.registerLink(b, "lead", d, "peeps");
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

      // remove b's lead in the other direction
      fauxDataStore.unregisterLink(b, "lead", d, "peeps");
      expect(getLeadsAndPeeps("b")).toMatchObject({
        lead: undefined,
        peeps: [a], // b's peeps should not change
      });
      expect(getLeadsAndPeeps("d")).toMatchObject({
        lead: undefined,
        peeps: [c], // d no longer leads b
      });
    });

    it("should work with links between different object types", () => {
      const { a, b, c, d } = employees;
      const { p1, p2 } = projects;

      // Register objects
      fauxDataStore.registerObject(a);
      fauxDataStore.registerObject(b);
      fauxDataStore.registerObject(c);
      fauxDataStore.registerObject(d);
      fauxDataStore.registerObject(p1);
      fauxDataStore.registerObject(p2);

      // 1. Assign employee as project owner (ONE cardinality)
      fauxDataStore.registerLink(p1, "owner", a, "ownedProjects");

      expect(getProjectLinks("p1")).toMatchObject({
        owner: a,
        contributors: [],
      });
      expect(getEmployeeProjectLinks("a")).toMatchObject({
        ownedProjects: [p1],
        contributedProjects: [],
      });
      expect(fauxDataStore.getObject(p1.__apiName, p1.__primaryKey))
        .toMatchObject({
          ownerId: "a",
        });

      // 2. Change project ownership
      fauxDataStore.registerLink(p1, "owner", b, "ownedProjects");

      expect(getProjectLinks("p1")).toMatchObject({
        owner: b,
        contributors: [],
      });
      expect(getEmployeeProjectLinks("a")).toMatchObject({
        ownedProjects: [], // a no longer owns p1
        contributedProjects: [],
      });
      expect(getEmployeeProjectLinks("b")).toMatchObject({
        ownedProjects: [p1],
        contributedProjects: [],
      });
      expect(fauxDataStore.getObject(p1.__apiName, p1.__primaryKey))
        .toMatchObject({
          ownerId: "b",
        });

      // 3. Add project contributors (MANY cardinality)
      fauxDataStore.registerLink(p1, "contributors", c, "contributedProjects");
      fauxDataStore.registerLink(p1, "contributors", d, "contributedProjects");

      expect(getProjectLinks("p1")).toMatchObject({
        owner: b,
        contributors: [c, d],
      });
      expect(getEmployeeProjectLinks("c")).toMatchObject({
        ownedProjects: [],
        contributedProjects: [p1],
      });
      expect(getEmployeeProjectLinks("d")).toMatchObject({
        ownedProjects: [],
        contributedProjects: [p1],
      });

      // 4. Remove a contributor
      fauxDataStore.unregisterLink(
        p1,
        "contributors",
        c,
        "contributedProjects",
      );

      expect(getProjectLinks("p1")).toMatchObject({
        owner: b,
        contributors: [d], // c is removed
      });
      expect(getEmployeeProjectLinks("c")).toMatchObject({
        ownedProjects: [],
        contributedProjects: [], // no longer contributing to p1
      });
      expect(getEmployeeProjectLinks("d")).toMatchObject({
        ownedProjects: [],
        contributedProjects: [p1], // still contributing to p1
      });

      // 5. Test with multiple projects
      fauxDataStore.registerLink(p2, "contributors", b, "contributedProjects");

      expect(getProjectLinks("p2")).toMatchObject({
        owner: undefined,
        contributors: [b],
      });
      expect(getEmployeeProjectLinks("b")).toMatchObject({
        ownedProjects: [p1], // owns p1
        contributedProjects: [p2], // contributes to p2
      });

      // 6. Remove owner using the opposite direction for unregistering
      fauxDataStore.unregisterLink(b, "ownedProjects", p1, "owner");

      expect(getProjectLinks("p1")).toMatchObject({
        owner: undefined,
        contributors: [d],
      });
      expect(getEmployeeProjectLinks("b")).toMatchObject({
        ownedProjects: [], // no longer owns p1
        contributedProjects: [p2],
      });
      expect(fauxDataStore.getObject(p1.__apiName, p1.__primaryKey))
        .toMatchObject({
          "ownerId": undefined,
        });

      // 7. Test setting foreign key directly on project object
      const updatedP1 = {
        ...p1,
        ownerId: "c",
      };
      fauxDataStore.replaceObjectOrThrow(updatedP1);

      // Verify links are automatically updated
      expect(getProjectLinks("p1")).toMatchObject({
        owner: c,
        contributors: [d],
      });
      expect(getEmployeeProjectLinks("c")).toMatchObject({
        ownedProjects: [p1],
        contributedProjects: [],
      });
      expect(fauxDataStore.getObject(p1.__apiName, p1.__primaryKey))
        .toMatchObject({
          "ownerId": "c",
        });

      // 8. Test removing foreign key by setting it to undefined
      const unlinkedP1 = {
        ...p1,
        ownerId: undefined,
      };
      fauxDataStore.replaceObjectOrThrow(unlinkedP1);

      // Verify links are properly removed
      expect(getProjectLinks("p1")).toMatchObject({
        owner: undefined,
        contributors: [d],
      });
      expect(getEmployeeProjectLinks("c")).toMatchObject({
        ownedProjects: [],
        contributedProjects: [],
      });

      // 9. Test setting multiple links through foreign keys
      // Add both d and c as owners by setting one at a time
      const p2WithOwner = {
        ...p2,
        ownerId: "d",
      };
      fauxDataStore.replaceObjectOrThrow(p2WithOwner);

      expect(getProjectLinks("p2")).toMatchObject({
        owner: d,
        contributors: [b],
      });
      expect(getEmployeeProjectLinks("d")).toMatchObject({
        ownedProjects: [p2],
        contributedProjects: [p1],
      });
    });
  });
});
