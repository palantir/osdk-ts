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

import {
  defineFolder,
  defineInterface,
  defineLink,
  defineObject,
  defineSharedPropertyType,
  getFolderDefinitions,
  getOntologyDefinition,
  importOntologyEntity,
  initializeOntologyState,
} from "@osdk/maker";
import { beforeEach, describe, expect, it } from "vitest";

import { resolveFolderDefinitions } from "./foldersUtil.js";

const objectDefinition = {
  apiName: "Person",
  displayName: "Person",
  pluralDisplayName: "People",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string" as const } },
  permission: "publicProject" as const,
};

function resolveFolders() {
  return resolveFolderDefinitions(
    getFolderDefinitions(),
    getOntologyDefinition(),
  );
}

describe("resolveFolderDefinitions", () => {
  beforeEach(() => initializeOntologyState("com.example."));

  it.each(["qualified name", "definition"])(
    "rejects duplicate placement through a short name and a %s",
    (referenceType) => {
      const person = defineObject(objectDefinition);
      defineFolder({ id: "people", folder: "/people", resources: ["Person"] });
      defineFolder({
        id: "other",
        folder: "/other",
        resources: [referenceType === "definition" ? person : person.apiName],
      });
      expect(resolveFolders).toThrow('already assigned to folder "people"');
    },
  );

  it("uses resource kinds to disambiguate object and link definitions", () => {
    const person = defineObject(objectDefinition);
    const link = defineLink({
      apiName: "Person",
      many: { object: person, metadata: { apiName: "related" } },
      toMany: { object: person, metadata: { apiName: "relatedTo" } },
      permission: "publicProject",
    });
    defineFolder({
      id: "mixed",
      folder: "/mixed",
      resources: [getOntologyDefinition().OBJECT_TYPE[person.apiName], link],
    });
    expect(resolveFolders()[0].resources).toEqual([
      { __type: "OBJECT_TYPE", apiName: person.apiName },
      { __type: "LINK_TYPE", apiName: link.apiName },
    ]);
  });

  it("does not resolve a definition to a different resource kind", () => {
    const interfaceType = defineInterface({
      apiName: "Person",
      permission: "publicProject",
    });
    initializeOntologyState("com.example.");
    defineObject(objectDefinition);
    defineFolder({
      id: "people",
      folder: "/people",
      resources: [interfaceType],
    });
    expect(resolveFolders).toThrow(
      'resource "com.example.Person" is not defined in this ontology',
    );
  });

  it("checks permissions on the registered resource instead of the supplied definition", () => {
    const person = defineObject({ ...objectDefinition, permission: "roles" });
    defineFolder({
      id: "people",
      folder: "/people",
      resources: [{ ...person, permission: "publicProject" }],
    });
    expect(resolveFolders).toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
  });

  it.each(["Person", "com.example.Person"])(
    "resolves %s against both exact and namespaced resource names",
    (apiName) => {
      defineFolder({ id: "people", folder: "/people", resources: [apiName] });
      const person = defineObject(objectDefinition);
      defineLink({
        apiName: "Person",
        many: { object: person, metadata: { apiName: "related" } },
        toMany: { object: person, metadata: { apiName: "relatedTo" } },
        permission: "publicProject",
      });
      if (apiName === "Person") {
        expect(resolveFolders).toThrow(
          'resource "Person" is ambiguous; matches LINK_TYPE "Person", OBJECT_TYPE "com.example.Person"',
        );
      } else {
        expect(resolveFolders()[0].resources).toEqual([
          { __type: "OBJECT_TYPE", apiName: "com.example.Person" },
        ]);
      }
    },
  );

  it("resolves namespaced resources whose short names also exist on Object.prototype", () => {
    defineFolder({
      id: "properties",
      folder: "/properties",
      resources: ["constructor"],
    });
    defineSharedPropertyType({
      apiName: "constructor",
      type: "string",
      permission: "publicProject",
    });
    expect(resolveFolders()[0].resources).toEqual([
      { __type: "SHARED_PROPERTY_TYPE", apiName: "com.example.constructor" },
    ]);
  });

  it.each(["name", "definition"])(
    "rejects imported resources referenced by %s",
    (referenceType) => {
      const upstream = defineInterface({
        apiName: "Thing",
        permission: "publicProject",
      });
      initializeOntologyState("downstream.");
      defineFolder({
        id: "resources",
        folder: "/resources",
        resources: [referenceType === "name" ? upstream.apiName : upstream],
      });
      importOntologyEntity(upstream);
      expect(resolveFolders).toThrow(
        'resource "com.example.Thing" is not defined in this ontology',
      );
    },
  );

  it("requires publicProject permission to be explicit", () => {
    defineFolder({ id: "people", folder: "/people", resources: ["Person"] });
    defineObject({ ...objectDefinition, permission: undefined });
    expect(resolveFolders).toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
  });
});
