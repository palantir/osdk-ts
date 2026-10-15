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
import { defineValueType } from "../defineValueType.js";

type Placement = { folder?: string; permission?: EntityPermission };

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
    it.each(["a//b/", "/", ""])(
      "normalizes %s and serializes publicProject permissions",
      (folder) => {
        const entity = define({ folder, permission: "publicProject" });
        const expectedFolder = folder === "a//b/" ? "/a/b" : "/";
        expect(entity).toMatchObject({
          folder: expectedFolder,
          permission: "publicProject",
        });
        const registeredEntities = Object.values(getOntologyDefinition())
          .flatMap((entities) => Object.values(entities))
          .flat();
        expect(registeredEntities).toContainEqual(
          expect.objectContaining({
            apiName: entity.apiName,
            folder: expectedFolder,
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
        define({ folder: "a", permission: "publicProject" }),
      ).toMatchObject({
        folder: "/a",
        permission: "publicProject",
      });
    });

    it.each<EntityPermission>([
      "roles",
      { type: "ontologyPackage", ontologyPackageRid: "ri.ontology..package" },
    ])("rejects incompatible permission %j", (permission) => {
      expect(() => define({ folder: "/", permission })).toThrow(
        'folder placement requires permission to be explicitly set to "publicProject"',
      );
    });

    it.each(["", "/", "/a/b"])(
      "rejects %j without explicit permission",
      (folder) => {
        expect(() => define({ folder })).toThrow(
          'folder placement requires permission to be explicitly set to "publicProject"',
        );
      },
    );

    it("rejects traversal", () => {
      expect(() =>
        define({ folder: "a/../b", permission: "publicProject" }),
      ).toThrow('folder must not contain "." or ".." path segments');
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
      folder: "a//b/",
    });
    expect(defineObject(input)).toMatchObject({
      folder: "/a/b",
      permission: "publicProject",
    });
    expect(input.folder).toBe("a//b/");
    expect(input.permission).toBe("publicProject");
  });

  it("normalizes value types without introducing ontology permissions", () => {
    const input = Object.freeze({
      apiName: "Name",
      displayName: "Name",
      version: "1.0.0",
      type: { type: "string" as const },
      folder: "a//b/",
    });
    const valueType = defineValueType(input);
    expect(valueType.folder).toBe("/a/b");
    expect(valueType).not.toHaveProperty("permission");
    expect(getOntologyDefinition().VALUE_TYPE.Name).toEqual([valueType]);
    expect(input.folder).toBe("a//b/");
    expect(() =>
      defineValueType({
        ...input,
        version: "2.0.0",
        folder: "a/./b",
      }),
    ).toThrow('folder must not contain "." or ".." path segments');
  });

  it.each([
    defineCreateObjectAction,
    defineCreateOrModifyObjectAction,
    defineModifyObjectAction,
    defineDeleteObjectAction,
  ])("%s validates placement independently of its object", (define) => {
    const objectType = defineObject({
      ...objectDefinition,
      permission: "publicProject",
      folder: "/objects",
    });
    const action = define({
      objectType,
      permission: "publicProject",
      folder: "actions//people/",
    });
    expect(action).toMatchObject({
      folder: "/actions/people",
      permission: "publicProject",
    });
    expect(() =>
      define({
        apiName: "incompatible-action",
        objectType,
        folder: "/actions",
        permission: "roles",
      }),
    ).toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
    expect(
      define({ apiName: "root-action", objectType }).folder,
    ).toBeUndefined();
  });

  it.each([
    defineCreateInterfaceObjectAction,
    defineModifyInterfaceObjectAction,
    defineDeleteInterfaceObjectAction,
  ])("%s validates placement independently of its interface", (define) => {
    const interfaceType = defineInterface({
      apiName: "Person",
      permission: "publicProject",
      folder: "/interfaces",
    });
    expect(
      define({
        interfaceType,
        permission: "publicProject",
        folder: "actions//people/",
      }),
    ).toMatchObject({
      folder: "/actions/people",
      permission: "publicProject",
    });
    expect(() =>
      define({
        apiName: "incompatible-action",
        interfaceType,
        folder: "/actions",
        permission: "roles",
      }),
    ).toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
  });

  it.each([defineCreateInterfaceLinkAction, defineDeleteInterfaceLinkAction])(
    "%s validates placement",
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
          folder: "actions//links/",
        }),
      ).toMatchObject({
        folder: "/actions/links",
        permission: "publicProject",
      });
      expect(() =>
        define({
          apiName: "incompatible-action",
          interfaceLink,
          folder: "/actions",
          permission: "roles",
        }),
      ).toThrow(
        'folder placement requires permission to be explicitly set to "publicProject"',
      );
    },
  );
});
