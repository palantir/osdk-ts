/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { beforeEach, describe, expect, it } from "vitest";

import { addDependency } from "../addDependency.js";
import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { defineInterface } from "../defineInterface.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import { importOntologyEntity } from "../importOntologyEntity.js";
import { importSharedPropertyType } from "../importSharedPropertyType.js";
import { type SharedPropertyType } from "../properties/SharedPropertyType.js";

describe("Miscellaneous Tests", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  describe("Imports", () => {
    it("Legacy importing works", () => {
      const id = importSharedPropertyType({
        apiName: "id",
        packageName: "com.palantir.core.ontology.types",
        typeHint: "string",
      });
      const myInterface = defineInterface({
        apiName: "myInterface",
        properties: {
          id,
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });
    it("Simple importing works", () => {
      // does the same as "import { spt } from '@other/package'"
      const spt: SharedPropertyType = {
        apiName: "com.other.package.spt",
        nonNameSpacedApiName: "spt",
        type: "string",
        __type: OntologyEntityTypeEnum.SHARED_PROPERTY_TYPE,
      };
      importOntologyEntity(spt);

      const myInterface = defineInterface({
        apiName: "myInterface",
        properties: {
          spt,
        },
      });
      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });
    it("Export files are generated correctly", async () => {
      const generatedDir = path.resolve(
        path.join(
          __dirname,
          "..",
          "generatedNoCheck",
          "export_files_are_generated_correctly",
        ),
      );
      await defineOntology(
        "com.my.package.",
        () => {
          const mySpt = defineSharedPropertyType({
            apiName: "mySpt",
            type: "string",
          });
          const myInterface = defineInterface({
            apiName: "myInterface",
            properties: {
              mySpt,
            },
          });
          const myObject = defineObject({
            titlePropertyApiName: "bar",
            displayName: "My Object",
            pluralDisplayName: "myObjects",
            apiName: "myObject",
            primaryKeyPropertyApiName: "bar",
            properties: { bar: { type: "string" } },
            implementsInterfaces: [
              {
                implements: myInterface,
                propertyMapping: [
                  {
                    interfaceProperty: "com.my.package.mySpt",
                    mapsTo: "bar",
                  },
                ],
              },
            ],
          });
        },
        generatedDir,
      );

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/interface-types/myInterface.ts"),
          "utf8",
        ),
      ).toMatchSnapshot();

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/object-types/myObject.ts"),
          "utf8",
        ),
      ).toMatchSnapshot();

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/shared-property-types/mySpt.ts"),
          "utf8",
        ),
      ).toMatchSnapshot();
      fs.rmSync(path.resolve(path.join(generatedDir, "..")), {
        recursive: true,
        force: true,
      });
    });
    it("Extended interfaces are propagated to the static objects", async () => {
      const generatedDir = path.resolve(
        path.join(
          __dirname,
          "..",
          "generatedNoCheck",
          "extended_interfaces_are_propagated_to_the_static_objects",
        ),
      );
      await defineOntology(
        "com.palantir.",
        () => {
          const property1 = defineSharedPropertyType({
            apiName: "property1",
            type: "string",
          });
          const property2 = defineSharedPropertyType({
            apiName: "property2",
            type: "string",
          });
          const parentInterface = defineInterface({
            apiName: "parentInterface",
            properties: {
              property1,
            },
          });
          const childInterface = defineInterface({
            apiName: "childInterface",
            properties: {
              property2,
            },
            extends: [parentInterface],
          });
        },
        generatedDir,
      );

      expect(
        fs.readFileSync(
          path.join(generatedDir, "codegen/interface-types/childInterface.ts"),
          "utf8",
        ),
      ).toMatchSnapshot();
      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
    it("Extended interface properties are checked in object type property mapping", () => {
      const iProperty1 = defineSharedPropertyType({
        apiName: "iProperty1",
        type: "string",
      });
      const iProperty2 = defineSharedPropertyType({
        apiName: "iProperty2",
        type: "string",
      });
      const parentInterface = defineInterface({
        apiName: "parentInterface",
        properties: {
          iProperty1,
        },
      });
      const childInterface = defineInterface({
        apiName: "childInterface",
        properties: {
          iProperty2,
        },
        extends: [parentInterface],
      });
      const objectDef = defineObject({
        apiName: "objectDef",
        primaryKeyPropertyApiName: "property1",
        titlePropertyApiName: "property1",
        displayName: "objectDef",
        pluralDisplayName: "objectDefs",
        properties: {
          property1: { type: "string", displayName: "property1" },
          property2: { type: "string", displayName: "property2" },
        },
        implementsInterfaces: [
          {
            implements: childInterface,
            propertyMapping: [
              {
                interfaceProperty: "com.palantir.iProperty1",
                mapsTo: "property1",
              },
              {
                interfaceProperty: "com.palantir.iProperty2",
                mapsTo: "property2",
              },
            ],
          },
        ],
      });

      expect(dumpOntologyFullMetadata()).toMatchSnapshot();
    });
  });

  describe("Dependencies", () => {
    it("Correctly adds dependencies", async () => {
      const generatedDir = path.resolve(
        path.join(
          __dirname,
          "..",
          "generatedNoCheck",
          "correctly_adds_dependencies",
        ),
      );
      await defineOntology(
        "com.palantir.",
        () => {
          addDependency("com.palantir", fileURLToPath(import.meta.url));
          defineInterface({
            apiName: "myInterface",
            properties: {
              property1: { type: "string" },
            },
          });
        },
        generatedDir,
        path.join(generatedDir, "dependencies.json"),
      );

      const packageJson = JSON.parse(
        fs.readFileSync(
          path.join(__dirname, "..", "..", "..", "package.json"),
          "utf8",
        ),
      );
      expect(packageJson.version).toBeDefined();

      expect(
        fs.readFileSync(path.join(generatedDir, "dependencies.json"), "utf8"),
      ).toMatchInlineSnapshot(`
        "{
          "com.palantir": "${packageJson.version}"
        }"
      `);

      expect(
        fs.readFileSync(path.join(generatedDir, "index.ts"), "utf8"),
      ).toContain(
        `addDependency("com.palantir", new URL(import.meta.url).pathname);`,
      );

      fs.rmSync(path.join(generatedDir, ".."), {
        recursive: true,
        force: true,
      });
    });
  });
});
