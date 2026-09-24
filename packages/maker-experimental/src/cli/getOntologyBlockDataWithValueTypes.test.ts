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
  defineObject,
  defineValueType,
  importOntologyEntity,
  initializeOntologyState,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import { describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../api/defineOntologyV2.js";
import { getOntologyBlockDataWithValueTypes } from "./getOntologyBlockDataWithValueTypes.js";

describe("getOntologyBlockDataWithValueTypes", () => {
  it("includes an empty value type map alongside the flat ontology fields", async () => {
    const { ontologyIr, importedTypes } = await defineOntologyV2(
      "com.palantir.",
      () => {},
    );

    expect(
      getOntologyBlockDataWithValueTypes(
        ontologyIr.ontology,
        ontologyIr.valueTypes,
        importedTypes,
      ),
    ).toEqual({
      ...ontologyIr.ontology,
      valueTypes: {},
    });
  });

  it.each([undefined, "123e4567-e89b-12d3-a456-426614174000"])(
    "keys namespaced definitions by the property RID with randomness key %s and retains all versions",
    async (randomnessKey) => {
      const { ontologyIr, importedTypes } = await defineOntologyV2(
        "com.palantir.",
        () => {
          defineValueType({
            apiName: "classification",
            namespacePrefix: true,
            displayName: "Classification",
            description: "Classification labels",
            type: { type: "string" },
            version: "1.0.0",
          });
          const classification = defineValueType({
            apiName: "classification",
            namespacePrefix: true,
            displayName: "Classification",
            description: "Classification labels",
            type: { type: "string" },
            version: "2.0.0",
          });
          defineValueType({
            apiName: "unused",
            namespacePrefix: true,
            displayName: "Unused",
            type: { type: "string" },
            version: "1.0.0",
          });
          defineObject({
            apiName: "classifiedObject",
            displayName: "Classified Object",
            pluralDisplayName: "Classified Objects",
            titlePropertyApiName: "id",
            primaryKeyPropertyApiName: "id",
            properties: {
              id: { type: "string" },
              classification: {
                type: "string",
                valueType: classification,
              },
            },
          });
        },
        undefined,
        undefined,
        undefined,
        randomnessKey,
      );

      const blockData = getOntologyBlockDataWithValueTypes(
        ontologyIr.ontology,
        ontologyIr.valueTypes,
        importedTypes,
        randomnessKey,
      );
      const objectType = Object.values(blockData.objectTypes)[0].objectType;
      const property = Object.values(objectType.propertyTypes).find(
        (candidate) => candidate.apiName === "classification",
      );
      invariant(property?.valueType != null, "Value type reference is missing");

      expect(blockData.valueTypes).toEqual({
        [property.valueType.rid]: {
          metadata: {
            apiName: "com.palantir.classification",
            baseType: { type: "string", string: {} },
            displayMetadata: {
              displayName: "Classification",
              description: "Classification labels",
            },
            status: { type: "active", active: {} },
          },
          versions: [
            {
              version: "1.0.0",
              baseType: { type: "string", string: {} },
              constraints: [],
              exampleValues: [],
            },
            {
              version: "2.0.0",
              baseType: { type: "string", string: {} },
              constraints: [],
              exampleValues: [],
            },
          ],
        },
      });
    },
  );

  it("omits a local definition when only an imported version is referenced", async () => {
    initializeOntologyState("com.palantir.imported.");
    const imported = defineValueType({
      apiName: "classification",
      displayName: "Classification",
      type: { type: "string" },
      version: "2.0.0",
    });

    const { ontologyIr, importedTypes } = await defineOntologyV2(
      "com.palantir.",
      () => {
        defineValueType({
          apiName: "classification",
          displayName: "Classification",
          type: { type: "string" },
          version: "1.0.0",
        });
        importOntologyEntity(imported);
        defineObject({
          apiName: "classifiedObject",
          displayName: "Classified Object",
          pluralDisplayName: "Classified Objects",
          titlePropertyApiName: "id",
          primaryKeyPropertyApiName: "id",
          properties: {
            id: { type: "string" },
            classification: { type: "string", valueType: imported },
          },
        });
      },
    );

    const blockData = getOntologyBlockDataWithValueTypes(
      ontologyIr.ontology,
      ontologyIr.valueTypes,
      importedTypes,
    );

    expect(blockData.valueTypes).toEqual({});
  });

  it("omits local definitions that are not referenced by the ontology", async () => {
    const { ontologyIr, importedTypes } = await defineOntologyV2(
      "com.palantir.",
      () => {
        defineValueType({
          apiName: "unused",
          displayName: "Unused",
          type: { type: "string" },
          version: "1.0.0",
        });
      },
    );

    const blockData = getOntologyBlockDataWithValueTypes(
      ontologyIr.ontology,
      ontologyIr.valueTypes,
      importedTypes,
    );

    expect(blockData.valueTypes).toEqual({});
  });
});
