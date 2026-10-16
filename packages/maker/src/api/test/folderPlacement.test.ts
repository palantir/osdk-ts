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

import type { EntityPermission } from "../common/EntityPermission.js";
import type { Folder } from "../common/Folder.js";
import { defineAction } from "../defineAction.js";
import { defineCreateInterfaceLinkAction } from "../defineCreateInterfaceLinkAction.js";
import { defineCreateInterfaceObjectAction } from "../defineCreateInterfaceObjectAction.js";
import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineCreateOrModifyObjectAction } from "../defineCreateOrModifyObjectAction.js";
import { defineDeleteInterfaceLinkAction } from "../defineDeleteInterfaceLinkAction.js";
import { defineDeleteInterfaceObjectAction } from "../defineDeleteInterfaceObjectAction.js";
import { defineDeleteObjectAction } from "../defineDeleteObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineLink } from "../defineLink.js";
import { defineModifyInterfaceObjectAction } from "../defineModifyInterfaceObjectAction.js";
import { defineModifyObjectAction } from "../defineModifyObjectAction.js";
import { defineObject } from "../defineObject.js";
import {
  defineOntology,
  dumpOntologyFullMetadata,
  getOntologyDefinition,
} from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";

type Placement = { folder?: Folder; permission?: EntityPermission };

const objectDefinition = {
  apiName: "Person",
  displayName: "Person",
  pluralDisplayName: "People",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string" as const } },
};

const entityFactories = [
  {
    name: "object",
    define: (placement: Placement) =>
      defineObject({ ...objectDefinition, ...placement }),
  },
  {
    name: "interface",
    define: (placement: Placement) =>
      defineInterface({ apiName: "Person", ...placement }),
  },
  {
    name: "shared property",
    define: (placement: Placement) =>
      defineSharedPropertyType({
        apiName: "name",
        type: "string",
        ...placement,
      }),
  },
  {
    name: "link",
    define: (placement: Placement) => {
      const object = defineObject(objectDefinition);
      return defineLink({
        apiName: "relatedPeople",
        many: { object, metadata: { apiName: "relatedPeople" } },
        toMany: { object, metadata: { apiName: "relatedTo" } },
        ...placement,
      });
    },
  },
  {
    name: "action",
    define: (placement: Placement) =>
      defineAction({
        apiName: "create-person",
        displayName: "Create person",
        status: "active",
        rules: [
          {
            type: "addObjectRule",
            addObjectRule: {
              objectTypeId: defineObject(objectDefinition).apiName,
              propertyValues: {},
              structFieldValues: {},
            },
          },
        ],
        ...placement,
      }),
  },
];

describe("folder placement", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  describe.each(entityFactories)("$name", ({ define }) => {
    it.each<Folder>([
      { id: "people", location: "a//b/" },
      { id: "other", location: "/other" },
    ])(
      "preserves folder %s and serializes publicProject permissions",
      (folder) => {
        const entity = define({ folder, permission: "publicProject" });
        expect(entity).toMatchObject({
          folder,
          permission: "publicProject",
        });
        const registeredEntities = Object.values(getOntologyDefinition())
          .flatMap((entities) => Object.values(entities))
          .flat();
        expect(registeredEntities).toContainEqual(
          expect.objectContaining({
            apiName: entity.apiName,
            folder,
            permission: "publicProject",
          }),
        );
        const permissions = Object.values(
          dumpOntologyFullMetadata().ontology.blockPermissionInformation!,
        ).flatMap((entities) => Object.values(entities));
        expect(permissions).toContainEqual({
          restrictionStatus: expect.objectContaining({ publicProject: true }),
        });
      },
    );

    it("accepts explicit publicProject permission", () => {
      expect(
        define({
          folder: { id: "/a", location: "a" },
          permission: "publicProject",
        }),
      ).toMatchObject({
        folder: { id: "/a", location: "a" },
        permission: "publicProject",
      });
    });

    it.each<EntityPermission>([
      "roles",
      { type: "ontologyPackage", ontologyPackageRid: "ri.ontology..package" },
    ])("preserves permission %j for experimental conversion", (permission) => {
      expect(
        define({ folder: { id: "/", location: "/" }, permission }),
      ).toMatchObject({
        folder: { id: "/", location: "/" },
        permission,
      });
    });

    it.each([{ id: "people", location: "/a/b" }])(
      "preserves %j without defaulting permission",
      (folder) => {
        const entity = define({ folder });
        expect(entity.folder).toEqual(folder);
        expect(entity.permission).toBeUndefined();
      },
    );

    it("retains un-validated paths for experimental conversion", () => {
      expect(
        define({
          folder: { id: "/a/../b", location: "a/../b" },
          permission: "publicProject",
        }).folder,
      ).toEqual({ id: "/a/../b", location: "a/../b" });
    });

    it.each([undefined, "roles"] as const)(
      "preserves permission %s when folder is omitted",
      (permission) => {
        const entity = define({ permission });
        expect(entity.folder).toBeUndefined();
        expect(entity.permission).toBe(permission);
      },
    );
  });

  it("does not mutate caller definitions", () => {
    const input = Object.freeze({
      ...objectDefinition,
      permission: "publicProject" as const,
      folder: { id: "/a//b", location: "a//b/" },
    });
    expect(defineObject(input)).toMatchObject({
      folder: { id: "/a//b", location: "a//b/" },
      permission: "publicProject",
    });
    expect(input.folder).toEqual({ id: "/a//b", location: "a//b/" });
    expect(input.permission).toBe("publicProject");
  });

  it.each([
    defineCreateObjectAction,
    defineCreateOrModifyObjectAction,
    defineModifyObjectAction,
    defineDeleteObjectAction,
  ])("%s preserves placement independently of its object", (define) => {
    const objectType = defineObject({
      ...objectDefinition,
      permission: "publicProject",
      folder: { id: "/objects", location: "/objects" },
    });
    const action = define({
      objectType,
      permission: "publicProject",
      folder: { id: "people-actions", location: "actions//people/" },
    });
    expect(action).toMatchObject({
      folder: { id: "people-actions", location: "actions//people/" },
      permission: "publicProject",
    });
    expect(
      define({
        apiName: "incompatible-action",
        objectType,
        folder: { id: "/actions", location: "/actions" },
        permission: "roles",
      }),
    ).toMatchObject({
      folder: { id: "/actions", location: "/actions" },
      permission: "roles",
    });
    expect(
      define({ apiName: "root-action", objectType }).folder,
    ).toBeUndefined();
  });

  it.each([
    defineCreateInterfaceObjectAction,
    defineModifyInterfaceObjectAction,
    defineDeleteInterfaceObjectAction,
  ])("%s preserves placement independently of its interface", (define) => {
    const interfaceType = defineInterface({
      apiName: "Person",
      permission: "publicProject",
      folder: { id: "/interfaces", location: "/interfaces" },
    });
    expect(
      define({
        interfaceType,
        permission: "publicProject",
        folder: { id: "people-actions", location: "actions//people/" },
      }),
    ).toMatchObject({
      folder: { id: "people-actions", location: "actions//people/" },
      permission: "publicProject",
    });
    expect(
      define({
        apiName: "incompatible-action",
        interfaceType,
        folder: { id: "/actions", location: "/actions" },
        permission: "roles",
      }),
    ).toMatchObject({
      folder: { id: "/actions", location: "/actions" },
      permission: "roles",
    });
  });

  it.each([defineCreateInterfaceLinkAction, defineDeleteInterfaceLinkAction])(
    "%s preserves placement",
    (define) => {
      const person = defineInterface({ apiName: "Person" });
      const company = defineInterface({ apiName: "Company" });
      const interfaceLink = defineInterfaceLinkConstraint({
        apiName: "employer",
        from: person,
        toOne: company,
      });
      expect(
        define({
          interfaceLink,
          permission: "publicProject",
          folder: { id: "link-actions", location: "actions//links/" },
        }),
      ).toMatchObject({
        folder: { id: "link-actions", location: "actions//links/" },
        permission: "publicProject",
      });
      expect(
        define({
          apiName: "incompatible-action",
          interfaceLink,
          folder: { id: "/actions", location: "/actions" },
          permission: "roles",
        }),
      ).toMatchObject({
        folder: { id: "/actions", location: "/actions" },
        permission: "roles",
      });
    },
  );
});
