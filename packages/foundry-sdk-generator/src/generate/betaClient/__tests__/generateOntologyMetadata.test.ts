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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { access, mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  generateOntologyMetadata,
  ONTOLOGY_METADATA_DTS_PATH,
  ONTOLOGY_METADATA_JSON_PATH,
} from "../generateOntologyMetadata.js";
import { generatePackageJson } from "../generatePackageJson.js";

const ONTOLOGY_METADATA_SUBPATH = "./UNSTABLE_DO_NOT_USE/ontology-metadata";

const emptyOntologyMetadata: OntologyFullMetadata = {
  ontology: {
    apiName: "default-ontology",
    displayName: "Ontology",
    description: "The default ontology",
    rid: "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
  },
  objectTypes: {},
  actionTypes: {},
  queryTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  valueTypes: {},
};

const ontologyMetadataWithObjectType: OntologyFullMetadata = {
  ...emptyOntologyMetadata,
  objectTypes: {
    Employee: {
      objectType: {
        apiName: "Employee",
        displayName: "Employee",
        pluralDisplayName: "Employees",
        aliases: [],
        datasources: [],
        status: "ACTIVE",
        icon: { type: "blueprint", color: "#00B3A4", name: "person" },
        primaryKey: "employeeId",
        titleProperty: "employeeId",
        rid: "ri.ontology.main.object-type.employee",
        properties: {
          employeeId: {
            dataType: { type: "integer" },
            rid: "ri.ontology.main.property.employee-id",
            typeClasses: [],
          },
        },
      },
      linkTypes: [],
      implementsInterfaces: [],
      implementsInterfaces2: {},
      sharedPropertyTypeMapping: {},
    },
  },
};

describe("generateOntologyMetadata", () => {
  let packagePath: string;

  beforeEach(async () => {
    packagePath = await mkdtemp(join(tmpdir(), "ontology-metadata-test-"));
  });

  afterEach(async () => {
    await rm(packagePath, { recursive: true, force: true });
  });

  async function generate(metadata: OntologyFullMetadata) {
    await generateOntologyMetadata({
      metadata,
      path: join(packagePath, ONTOLOGY_METADATA_JSON_PATH),
      typePath: join(packagePath, ONTOLOGY_METADATA_DTS_PATH),
    });

    return {
      json: await readFile(
        join(packagePath, ONTOLOGY_METADATA_JSON_PATH),
        "utf-8",
      ),
      dts: await readFile(
        join(packagePath, ONTOLOGY_METADATA_DTS_PATH),
        "utf-8",
      ),
    };
  }

  it("writes the metadata as pretty printed json", async () => {
    const { json } = await generate(emptyOntologyMetadata);
    expect(json).toMatchInlineSnapshot(`
      "{
        "ontology": {
          "apiName": "default-ontology",
          "displayName": "Ontology",
          "description": "The default ontology",
          "rid": "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361"
        },
        "objectTypes": {},
        "actionTypes": {},
        "queryTypes": {},
        "interfaceTypes": {},
        "sharedPropertyTypes": {},
        "valueTypes": {}
      }"
    `);
  });

  it("writes nested metadata as pretty printed json", async () => {
    const { json } = await generate(ontologyMetadataWithObjectType);
    expect(json).toMatchInlineSnapshot(`
      "{
        "ontology": {
          "apiName": "default-ontology",
          "displayName": "Ontology",
          "description": "The default ontology",
          "rid": "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361"
        },
        "objectTypes": {
          "Employee": {
            "objectType": {
              "apiName": "Employee",
              "displayName": "Employee",
              "pluralDisplayName": "Employees",
              "status": "ACTIVE",
              "icon": {
                "type": "blueprint",
                "color": "#00B3A4",
                "name": "person"
              },
              "primaryKey": "employeeId",
              "titleProperty": "employeeId",
              "rid": "ri.ontology.main.object-type.employee",
              "properties": {
                "employeeId": {
                  "dataType": {
                    "type": "integer"
                  },
                  "rid": "ri.ontology.main.property.employee-id",
                  "typeClasses": []
                }
              }
            },
            "linkTypes": [],
            "implementsInterfaces": [],
            "implementsInterfaces2": {},
            "sharedPropertyTypeMapping": {}
          }
        },
        "actionTypes": {},
        "queryTypes": {},
        "interfaceTypes": {},
        "sharedPropertyTypes": {},
        "valueTypes": {}
      }"
    `);
  });

  it("declares the json as OntologyFullMetadata", async () => {
    const { dts } = await generate(emptyOntologyMetadata);
    expect(dts).toMatchInlineSnapshot(`
      "import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";

      declare const ontologyFullMetadata: OntologyFullMetadata;

      export = ontologyFullMetadata;
      "
    `);
  });

  it("is reachable as a package.json subpath export", async () => {
    await generate(emptyOntologyMetadata);
    await generatePackageJson({
      packageName: "@my/generated-sdk",
      packageVersion: "1.2.3",
      packagePath,
      dependencies: [],
      beta: true,
    });

    const packageJson = JSON.parse(
      await readFile(join(packagePath, "package.json"), "utf-8"),
    ) as { exports: Record<string, Record<string, string>> };
    const subpathExport = packageJson.exports[ONTOLOGY_METADATA_SUBPATH];

    expect(subpathExport).toEqual({
      types: "./UNSTABLE_DO_NOT_USE/ontology-metadata.d.ts",
      default: "./UNSTABLE_DO_NOT_USE/ontology-metadata.json",
    });

    expect(Object.keys(subpathExport)).toEqual(["types", "default"]);

    await expect(access(join(packagePath, subpathExport.types))).resolves
      .toBeUndefined();
    await expect(access(join(packagePath, subpathExport.default))).resolves
      .toBeUndefined();
  });
});
