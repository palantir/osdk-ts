/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { AliasesFile } from "@osdk/aliases";
import { readFileSync } from "node:fs";
import { beforeEach, describe, expect, it } from "vitest";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import { generateClientSdkVersionTwoPointZero } from "./generateClientSdkVersionTwoPointZero.js";

const BASE_PATH = "/foo";

const identityFixture = readFileSync(
  new URL(
    "../../../aliases/src/__fixtures__/identity.json",
    import.meta.url,
  ),
  "utf-8",
);

describe("generateAliasesFile", () => {
  let helper: ReturnType<typeof createMockMinimalFiles>;
  let aliasesJson: string;
  let aliases: AliasesFile;

  beforeEach(async () => {
    helper = createMockMinimalFiles();
    await generateClientSdkVersionTwoPointZero(
      TodoWireOntology,
      "typescript-sdk/0.0.0 osdk-cli/0.0.0",
      helper.minimalFiles,
      BASE_PATH,
    );
    aliasesJson = helper.getFiles()[`${BASE_PATH}/aliases.json`];
    aliases = JSON.parse(aliasesJson) as AliasesFile;
  });

  it("is byte identical to the identity fixture for TodoWireOntology", () => {
    expect(aliasesJson).toEqual(identityFixture);
  });

  it("emits aliases.ts with the same content as aliases.json", async () => {
    const aliasesTs = helper.getFiles()[`${BASE_PATH}/aliases.ts`];
    // Must be an explicit annotation, not `satisfies`: consumers build with
    // --isolatedDeclarations, which rejects `satisfies` with TS9010.
    expect(aliasesTs).toContain("export const $packagedAliases: AliasesFile =");
    expect(aliasesTs).not.toContain("satisfies AliasesFile");

    // prettier rewrites the quoting style, so evaluate the literal instead of
    // comparing text
    const literal = aliasesTs.slice(
      aliasesTs.indexOf("{", aliasesTs.indexOf("$packagedAliases")),
      aliasesTs.lastIndexOf("}") + 1,
    );
    const module = await import(
      `data:text/javascript,export default ${encodeURIComponent(literal)}`
    ) as { default: AliasesFile };
    expect(module.default).toEqual(aliases);
  });

  it("registers the packaged aliases from OntologyMetadata.ts", () => {
    expect(helper.getFiles()[`${BASE_PATH}/OntologyMetadata.ts`]).toContain(
      "registerPackagedAliases('ridHere', $packagedAliases)",
    );
  });

  it("registers under the given sdk id when one is provided", async () => {
    const other = createMockMinimalFiles();
    await generateClientSdkVersionTwoPointZero(
      TodoWireOntology,
      "typescript-sdk/0.0.0 osdk-cli/0.0.0",
      other.minimalFiles,
      BASE_PATH,
      "module",
      new Map(),
      new Map(),
      new Map(),
      false,
      [],
      "@osdk/my-sdk",
    );
    expect(other.getFiles()[`${BASE_PATH}/OntologyMetadata.ts`]).toContain(
      "registerPackagedAliases('@osdk/my-sdk', $packagedAliases)",
    );
  });

  it("carries all six legacy resource maps as empty objects", () => {
    expect(aliases.defaults.custom).toEqual({});
    expect(aliases.defaults.datasets).toEqual({});
    expect(aliases.defaults.mediasets).toEqual({});
    expect(aliases.defaults.streams).toEqual({});
    expect(aliases.defaults.models).toEqual({});
    expect(aliases.defaults.egressConnections).toEqual({});
  });

  it("has an entry for every ontology entity and no entry for anything else", () => {
    expect(Object.keys(aliases.defaults.ontologies ?? {})).toEqual([
      TodoWireOntology.ontology.rid,
    ]);
    expect(Object.keys(aliases.defaults.objects ?? {}).sort()).toEqual(
      Object.keys(TodoWireOntology.objectTypes).sort(),
    );
    expect(Object.keys(aliases.defaults.interfaces ?? {}).sort()).toEqual(
      Object.keys(TodoWireOntology.interfaceTypes).sort(),
    );
    expect(Object.keys(aliases.defaults.actions ?? {}).sort()).toEqual(
      Object.keys(TodoWireOntology.actionTypes).sort(),
    );
    expect(Object.keys(aliases.defaults.queries ?? {}).sort()).toEqual(
      Object.keys(TodoWireOntology.queryTypes).sort(),
    );
  });

  it("has an entry for every property and link of every object type", () => {
    for (
      const [apiName, { objectType, linkTypes }] of Object.entries(
        TodoWireOntology.objectTypes,
      )
    ) {
      const entry = aliases.defaults.objects?.[apiName];
      expect(entry).toBeDefined();
      expect(Object.keys(entry!.properties).sort()).toEqual(
        Object.keys(objectType.properties).sort(),
      );
      expect(Object.keys(entry!.links).sort()).toEqual(
        linkTypes.map(l => l.apiName).sort(),
      );
      expect(entry!.primaryKeyApiName).toEqual(objectType.primaryKey);
    }
  });

  it("carries the concrete version for every query", () => {
    for (
      const [apiName, query] of Object.entries(TodoWireOntology.queryTypes)
    ) {
      expect(aliases.defaults.queries?.[apiName]?.version).toEqual(
        query.version,
      );
    }
  });
});
