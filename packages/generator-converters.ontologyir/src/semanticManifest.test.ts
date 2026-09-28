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

import type * as Ontologies from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { buildSemanticManifest } from "./semanticManifest.js";

const itemInterface: Ontologies.InterfaceType = {
  rid: "ri.interface-type.main.interface-type.Item",
  apiName: "Item",
  displayName: "Item",
  properties: {},
  allProperties: {},
  propertiesV2: {},
  allPropertiesV2: {
    zeta: {
      rid: "ri.interface-property-type.main.interface-property-type.zeta",
      apiName: "zeta",
      displayName: "Zeta",
      dataType: { type: "string" },
      requireImplementation: false,
    },
    alpha: {
      rid: "ri.interface-property-type.main.interface-property-type.alpha",
      apiName: "alpha",
      displayName: "Alpha",
      dataType: { type: "string" },
      requireImplementation: true,
      valueTypeApiName: "itemCode",
    },
  },
  extendsInterfaces: ["Named", "Asset"],
  allExtendsInterfaces: ["Named", "Asset"],
  implementedByObjectTypes: [],
  links: {},
  allLinks: {
    owner: {
      rid: "ri.interface-link-type.main.interface-link-type.owner",
      apiName: "owner",
      displayName: "Owner",
      linkedEntityApiName: {
        type: "objectTypeApiName",
        apiName: "Person",
      },
      cardinality: "ONE",
      required: true,
    },
    children: {
      rid: "ri.interface-link-type.main.interface-link-type.children",
      apiName: "children",
      displayName: "Children",
      linkedEntityApiName: {
        type: "interfaceTypeApiName",
        apiName: "Item",
      },
      cardinality: "MANY",
      required: false,
    },
  },
};

const itemCode: Ontologies.OntologyValueType = {
  apiName: "itemCode",
  displayName: "Item Code",
  rid: "ri.value-type.main.value-type.item-code",
  fieldType: { type: "string" },
  version: "2.0.0",
  constraints: [{ type: "enum", options: ["beta", "alpha"] }],
};

const quantity: Ontologies.OntologyValueType = {
  apiName: "quantity",
  displayName: "Quantity",
  rid: "ri.value-type.main.value-type.quantity",
  fieldType: { type: "integer" },
  version: "1.0.0",
  constraints: [],
};

const updateItem: Ontologies.ActionTypeV2 = {
  apiName: "updateItem",
  status: "ACTIVE",
  rid: "ri.actions.main.action-type.update-item",
  parameters: {
    zeta: {
      displayName: "Zeta",
      dataType: { type: "string" },
      required: false,
      typeClasses: [],
    },
    alpha: {
      displayName: "Alpha",
      dataType: { type: "string" },
      required: true,
      typeClasses: [],
    },
  },
  operations: [
    {
      type: "deleteLink",
      linkTypeApiNameAtoB: "children",
      linkTypeApiNameBtoA: "parent",
      aSideObjectTypeApiName: "Item",
      bSideObjectTypeApiName: "Item",
    },
    { type: "modifyObject", objectTypeApiName: "Item" },
    {
      type: "applyScenario",
      scenarioParameter: "scenario",
      objectTypeApiNames: ["Person", "Item"],
      linkTypes: [{
        objectTypeApiName: "Item",
        linkTypes: ["owner", "children"],
      }],
    },
  ],
};

function metadata(
  interfaceTypes: Record<string, Ontologies.InterfaceType>,
  valueTypes: Record<string, Ontologies.OntologyValueType>,
  actionTypes: Record<string, Ontologies.ActionTypeV2>,
): Ontologies.OntologyFullMetadata {
  return {
    ontology: {
      apiName: "exampleOntology",
      displayName: "Example Ontology",
      description: "Example ontology",
      rid: "ri.ontology.main.ontology.example",
    },
    objectTypes: {},
    actionTypes,
    queryTypes: {},
    interfaceTypes,
    sharedPropertyTypes: {},
    valueTypes,
  };
}

describe(buildSemanticManifest, () => {
  it("summarizes the generated SDK semantics", () => {
    const manifest = buildSemanticManifest(
      metadata(
        { item: itemInterface },
        { quantity, itemCode },
        { updateItem },
      ),
      { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
    );

    expect(manifest).toEqual({
      formatVersion: 1,
      packageName: "@example/item-sdk",
      packageVersion: "1.2.3",
      interfaces: [{
        apiName: "Item",
        extends: ["Asset", "Named"],
        properties: [
          { apiName: "alpha", required: true, valueTypeApiName: "itemCode" },
          { apiName: "zeta", required: false },
        ],
        links: [
          { apiName: "children", cardinality: "MANY", target: "Item" },
          { apiName: "owner", cardinality: "ONE", target: "Person" },
        ],
      }],
      valueTypes: [
        { apiName: "itemCode", version: "2.0.0", narrowed: true },
        { apiName: "quantity", version: "1.0.0", narrowed: false },
      ],
      actions: [{
        apiName: "updateItem",
        parameters: ["alpha", "zeta"],
        operations: [
          { type: "applyScenario", target: "Item" },
          { type: "applyScenario", target: "Item.children" },
          { type: "applyScenario", target: "Item.owner" },
          { type: "applyScenario", target: "Person" },
          { type: "deleteLink", target: "Item.children" },
          { type: "deleteLink", target: "Item.parent" },
          { type: "modifyObject", target: "Item" },
        ],
      }],
    });
  });

  it("does not narrow a string enum with only undefined values", () => {
    const emptyStringEnum: Ontologies.OntologyValueType = {
      apiName: "emptyStringEnum",
      displayName: "Empty String Enum",
      rid: "ri.value-type.main.value-type.empty-string-enum",
      fieldType: { type: "string" },
      version: "1.0.0",
      constraints: [{ type: "enum", options: [undefined] }],
    };

    const manifest = buildSemanticManifest(
      metadata({}, { emptyStringEnum }, {}),
      { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
    );

    expect(manifest.valueTypes).toEqual([{
      apiName: "emptyStringEnum",
      version: "1.0.0",
      narrowed: false,
    }]);
  });

  it("rejects value types that generation cannot narrow", () => {
    const invalidValueType: Ontologies.OntologyValueType = {
      ...itemCode,
      constraints: [
        { type: "enum", options: ["alpha"] },
        { type: "enum", options: ["beta"] },
      ],
    };

    expect(() =>
      buildSemanticManifest(
        metadata({}, { invalidValueType }, {}),
        { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
      )
    ).toThrowError("Expected exactly one constraint for value type itemCode");
  });

  it("records transitive interface extensions", () => {
    const manifest = buildSemanticManifest(
      metadata(
        {
          item: {
            ...itemInterface,
            extendsInterfaces: ["Named"],
            allExtendsInterfaces: ["Named", "Asset"],
          },
        },
        {},
        {},
      ),
      { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
    );

    expect(manifest.interfaces[0]?.extends).toEqual(["Asset", "Named"]);
  });

  it("rejects duplicate entity API names", () => {
    expect(() =>
      buildSemanticManifest(
        metadata(
          { first: itemInterface, second: itemInterface },
          {},
          {},
        ),
        { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
      )
    ).toThrowError("Duplicate interface API name: Item");
  });

  it("produces the same JSON regardless of metadata insertion order", () => {
    const first = buildSemanticManifest(
      metadata(
        { zeta: itemInterface, alpha: { ...itemInterface, apiName: "Asset" } },
        { quantity, itemCode },
        {
          zeta: updateItem,
          alpha: { ...updateItem, apiName: "archiveItem", operations: [] },
        },
      ),
      { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
    );
    const second = buildSemanticManifest(
      metadata(
        { alpha: { ...itemInterface, apiName: "Asset" }, zeta: itemInterface },
        { itemCode, quantity },
        {
          alpha: { ...updateItem, apiName: "archiveItem", operations: [] },
          zeta: updateItem,
        },
      ),
      { packageName: "@example/item-sdk", packageVersion: "1.2.3" },
    );

    expect(JSON.stringify(first)).toBe(JSON.stringify(second));
  });
});
