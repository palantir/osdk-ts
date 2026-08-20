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

import type { OntologyIr } from "@osdk/client.unstable";
import type * as Ontologies from "@osdk/foundry.ontologies";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { OntologyIrToFullMetadataConverter } from "./OntologyIrToFullMetadataConverter.js";
import { buildSemanticManifest } from "./semanticManifest.js";

function isOntologyIr(value: object): value is OntologyIr {
  return "ontology" in value
    && typeof value.ontology === "object"
    && value.ontology != null
    && "importedOntology" in value
    && typeof value.importedOntology === "object"
    && value.importedOntology != null;
}

function envelopeMetadata(): Ontologies.OntologyFullMetadata {
  const parsed: object = JSON.parse(
    readFileSync(
      fileURLToPath(
        new URL("./__fixtures__/envelope/ontology.json", import.meta.url),
      ),
      "utf8",
    ),
  );
  if (!isOntologyIr(parsed)) {
    throw new Error("Invalid fixture");
  }
  return OntologyIrToFullMetadataConverter.getFullMetadataFromEnvelope(parsed);
}

describe(buildSemanticManifest, () => {
  it("records interface-link operations from official action operations", () => {
    const manifest = buildSemanticManifest(envelopeMetadata(), {
      packageName: "@example/item-sdk",
      packageVersion: "0.0.0-dev",
      ontologyIdentity: "portable",
    });

    expect(
      manifest.interfaces.find((entry) => entry.apiName === "local.Item"),
    ).toMatchObject({
      apiName: "local.Item",
      extends: ["imported.Parent"],
    });
    expect(
      manifest.interfaces.find((entry) => entry.apiName === "local.Item"),
    ).not.toHaveProperty("implementerCompleteness");
    expect(
      manifest.actions.find((entry) => entry.apiName === "createItemLink")
        ?.operations,
    ).toContainEqual({
      type: "createInterfaceLink",
      target: "local.Item.observations",
    });
  });

  it("sorts imports and records value-type narrowing", () => {
    const manifest = buildSemanticManifest(envelopeMetadata(), {
      packageName: "@example/item-sdk",
      packageVersion: "0.0.0-dev",
      ontologyIdentity: "portable",
      imports: [
        {
          kind: "valueType",
          apiName: "externalCategory",
          package: "@example/core-sdk",
        },
        {
          kind: "interface",
          apiName: "imported.Parent",
          package: "@example/core-sdk",
        },
      ],
    });

    expect(manifest.valueTypes).toContainEqual({
      apiName: "recordState",
      version: "1.0.0",
      narrowed: true,
    });
    expect(manifest.valueTypes).toContainEqual({
      apiName: "externalCategory",
      version: "1.0.0",
      narrowed: false,
    });
    expect(manifest.externalPackages).toEqual({
      "interface:imported.Parent": "@example/core-sdk",
      "valueType:externalCategory": "@example/core-sdk",
    });
    expect(manifest.interfaces.map((entry) => entry.apiName)).not.toContain(
      "imported.Parent",
    );
    expect(manifest.exclusions).toEqual([]);
  });

  it("records standard action operations", () => {
    const metadata = OntologyIrToFullMetadataConverter.getFullMetadataFromIr({
      actionTypes: {
        createRestaurant: {
          actionType: {
            metadata: {
              apiName: "createRestaurant",
              displayMetadata: {
                applyingMessage: [],
                description: "Create a restaurant",
                displayName: "Create restaurant",
                successMessage: [],
                typeClasses: [],
              },
              formContentOrdering: [],
              parameterOrdering: [],
              parameters: {},
              sections: {},
              status: { type: "active", active: {} },
            },
            actionTypeLogic: {
              logic: {
                rules: [{
                  type: "addObjectRule",
                  addObjectRule: {
                    objectTypeId: "Restaurant",
                    propertyValues: {},
                    structFieldValues: {},
                  },
                }],
              },
              validation: {
                actionTypeLevelValidation: { rules: {} },
                parameterValidations: {},
                sectionValidations: {},
              },
            },
          },
        },
      },
      interfaceTypes: {},
      linkTypes: {},
      objectTypes: {},
      sharedPropertyTypes: {},
    });

    const manifest = buildSemanticManifest(metadata, {
      packageName: "@example/sdk",
      packageVersion: "1.0.0",
      ontologyIdentity: "portable",
    });

    expect(manifest.actions[0]?.operations).toEqual([
      { type: "createObject", target: "Restaurant" },
    ]);
  });

  it("does not mark null-only boolean enums as narrowed", () => {
    const metadata = OntologyIrToFullMetadataConverter.getFullMetadataFromIr({
      actionTypes: {},
      interfaceTypes: {},
      linkTypes: {},
      objectTypes: {},
      sharedPropertyTypes: {},
    });
    const valueType: Ontologies.OntologyValueType = {
      apiName: "optionalToggle",
      displayName: "Optional Toggle",
      rid: "ri.ontology.main.value-type.maybe-flag",
      fieldType: { type: "boolean" },
      version: "1.0.0",
      constraints: [{
        type: "enum",
        options: [undefined],
      }],
    };

    const manifest = buildSemanticManifest({
      ...metadata,
      valueTypes: { optionalToggle: valueType },
    }, {
      packageName: "@example/sdk",
      packageVersion: "1.0.0",
      ontologyIdentity: "portable",
    });

    expect(manifest.valueTypes).toContainEqual({
      apiName: "optionalToggle",
      version: "1.0.0",
      narrowed: false,
    });
  });
});
