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

import { defineFolder } from "../defineFolder.js";
import { defineInterface } from "../defineInterface.js";
import { defineObject } from "../defineObject.js";
import {
  getFolderDefinitions,
  getOntologyDefinition,
  initializeOntologyState,
} from "../defineOntology.js";

const objectDefinition = {
  apiName: "Person",
  displayName: "Person",
  pluralDisplayName: "People",
  primaryKeyPropertyApiName: "id",
  titlePropertyApiName: "id",
  properties: { id: { type: "string" as const } },
  permission: "publicProject" as const,
};

describe("defineFolder", () => {
  beforeEach(() => initializeOntologyState("com.example."));

  it("registers mixed references without mutating definitions or retaining the caller's resource array", () => {
    const person = Object.freeze(defineObject(objectDefinition));
    const interfaceType = Object.freeze(
      defineInterface({ apiName: "IPerson", permission: "publicProject" }),
    );
    const ontology = getOntologyDefinition();
    const before = structuredClone(ontology);
    const resources = [person, interfaceType, "FutureObject"];
    const definition = Object.freeze({
      id: "people",
      folder: "domain//people/",
      resources,
    });
    const folder = defineFolder(definition);
    resources.length = 0;

    expect(definition.folder).toBe("domain//people/");
    expect(folder).toEqual({
      id: "people",
      folder: "/domain/people",
      resources: [person, interfaceType, "FutureObject"],
    });
    expect(getFolderDefinitions()).toEqual([folder]);
    expect(ontology).toEqual(before);
  });

  it("rejects duplicate IDs and normalized paths", () => {
    defineFolder({ id: "people", folder: "/people", resources: [] });
    expect(() =>
      defineFolder({ id: "people", folder: "/other", resources: [] }),
    ).toThrow('Folder id "people" is already defined');
    expect(() =>
      defineFolder({ id: "other", folder: "people//", resources: [] }),
    ).toThrow('Folder location "/people" has conflicting ids');
    expect(getFolderDefinitions()).toHaveLength(1);
  });

  it.each([
    [" .hidden /.../R&D\\Archive", "/ .hidden /.../R&D\\Archive"],
    ["日本語/é/🚀", "/日本語/é/🚀"],
  ])("normalizes %j to %j", (folder, expected) => {
    expect(defineFolder({ id: "folder", folder, resources: [] }).folder).toBe(
      expected,
    );
  });

  it.each([
    { id: " ", folder: "/a", error: "Folder id must be a non-empty string" },
    {
      id: "\uD800",
      folder: "/a",
      error: "folder id must contain valid Unicode",
    },
    {
      id: "folder",
      folder: "/",
      error: "the installation root cannot be assigned a folder id",
    },
    {
      id: "/",
      folder: "/a",
      error: "the installation root cannot be assigned a folder id",
    },
    {
      id: "folder",
      folder: "a/./b",
      error: 'folder must not contain "." or ".." path segments',
    },
    {
      id: "folder",
      folder: "a//../b",
      error: 'folder must not contain "." or ".." path segments',
    },
    {
      id: "folder",
      folder: "a\uD800b",
      error: "folder names must contain valid Unicode",
    },
  ])("rejects invalid folder $id at $folder", ({ id, folder, error }) => {
    expect(() =>
      defineFolder({
        id,
        folder,
        resources: [],
      }),
    ).toThrow(error);
    expect(getFolderDefinitions()).toEqual([]);
  });

  it("enforces the UTF-8 byte limit per folder name", () => {
    const name = "🚀".repeat(175);
    expect(
      defineFolder({ id: "folder", folder: name + "/" + name, resources: [] })
        .folder,
    ).toBe("/" + name + "/" + name);
    expect(() =>
      defineFolder({ id: "too-long", folder: name + "a", resources: [] }),
    ).toThrow("folder name must be at most 700 UTF-8 bytes (got 701)");
  });
});
