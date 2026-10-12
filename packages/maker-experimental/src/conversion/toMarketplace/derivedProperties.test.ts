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

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";

import type {
  DerivedPropertyLinkTypeSide,
  ObjectTypeBlockDataV2,
  OntologyBlockDataV2,
} from "@osdk/client.unstable";
import type {
  DerivedPropertyAggregation,
  LinkType,
  ObjectType,
  ObjectTypeDatasourceDefinition_derived,
  ObjectTypeDefinition,
} from "@osdk/maker";
import {
  defineLink,
  defineObject,
  getOntologyDefinition,
  importOntologyEntity,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import { describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";
import { generateBackingDatasetBlockResult } from "../../cli/generateBackingDataset.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";

function object(
  apiName: string,
  overrides: Partial<ObjectTypeDefinition> = {},
) {
  return defineObject({
    apiName,
    displayName: apiName,
    pluralDisplayName: apiName,
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: {
      id: { type: "string" },
      parentId: { type: "string" },
      value: { type: "double" },
      result: { type: "double" },
      total: { type: "double" },
    },
    datasources: [{ type: "dataset" }],
    ...overrides,
  });
}

function block(ontology: OntologyBlockDataV2, apiName: string) {
  const result = Object.values(ontology.objectTypes).find(
    (entry) => entry.objectType.apiName === apiName,
  );
  invariant(result !== undefined, `Missing object ${apiName}`);
  return result;
}

function propertyRid(objectBlock: ObjectTypeBlockDataV2, apiName: string) {
  const property = Object.values(objectBlock.objectType.propertyTypes).find(
    (entry) => entry.apiName === apiName,
  );
  invariant(property !== undefined, `Missing property ${apiName}`);
  return property.rid;
}

function derivedDefinitions(objectBlock: ObjectTypeBlockDataV2) {
  return objectBlock.datasources.flatMap(({ datasource }) =>
    datasource.type === "derived" ? [datasource.derived.definition] : [],
  );
}

function expectForeignProperties(
  source: ObjectTypeBlockDataV2,
  target: ObjectTypeBlockDataV2,
) {
  const [linked, aggregated] = derivedDefinitions(source);
  invariant(linked.type === "linkedProperties");
  invariant(aggregated.type === "aggregatedProperties");
  const foreignProperty = {
    type: "propertyType",
    propertyType: propertyRid(target, "value"),
  };
  expect(linked.linkedProperties.propertyTypeMapping).toEqual({
    [propertyRid(source, "result")]: foreignProperty,
  });
  expect(aggregated.aggregatedProperties.propertyTypeMapping).toEqual({
    [propertyRid(source, "total")]: {
      type: "sum",
      sum: { property: foreignProperty },
    },
  });
}

function addDerivedProperties(
  source: ObjectTypeDefinition,
  linkDefinition: ObjectTypeDatasourceDefinition_derived["linkDefinition"],
) {
  source.datasources!.push(
    { type: "derived", linkDefinition, propertyMapping: { result: "value" } },
    {
      type: "derived",
      linkDefinition,
      propertyMapping: { total: { type: "sum", property: "value" } },
    },
  );
}

const aggregations: DerivedPropertyAggregation[] = [
  { type: "count" },
  { type: "avg", property: "value" },
  { type: "sum", property: "value" },
  { type: "min", property: "value" },
  { type: "max", property: "value" },
  { type: "approximateCardinality", property: "value" },
  { type: "exactCardinality", property: "value" },
  { type: "collectList", property: "value", limit: 20 },
  { type: "collectSet", property: "value", limit: 30 },
];

describe("derived property conversion", () => {
  it.each(["direct", "empty", "empty-secured"] as const)(
    "supports inline many-to-one derived properties with %s backing",
    async (mode) => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const target = object("target");
        const link = defineLink({
          apiName: "targetToSource",
          one: { object: target.apiName, metadata: { apiName: "sources" } },
          toMany: {
            object: "com.palantir.source",
            metadata: { apiName: "target" },
          },
          manyForeignKeyProperty: "parentId",
        });
        object("source", {
          editsEnabled: true,
          includeEmptyBackingDatasource: mode !== "direct",
          properties: {
            id: { type: "string" },
            parentId: { type: "string" },
            result: { type: "double" },
            total: { type: "double" },
            values: { type: "double", array: true },
            ...(mode === "direct"
              ? {}
              : { notes: { type: "string" as const, editOnly: true } }),
          },
          datasources: [
            mode === "direct"
              ? { type: "direct" }
              : {
                  type: "dataset",
                  ...(mode === "empty-secured"
                    ? { objectSecurityPolicy: { name: "public" } }
                    : {}),
                },
            {
              type: "derived",
              linkDefinition: [{ linkType: link }],
              propertyMapping: { result: "value" },
            },
            {
              type: "derived",
              linkDefinition: [{ linkType: link }],
              propertyMapping: { total: { type: "sum", property: "value" } },
            },
            {
              type: "derived",
              linkDefinition: [{ linkType: link }],
              propertyMapping: {
                values: { type: "collectList", property: "value", limit: 100 },
              },
            },
          ],
        });
      });
      const ontology = result.ontologyIr.ontology;
      const source = block(ontology, "com.palantir.source");
      const target = block(ontology, "com.palantir.target");
      expectForeignProperties(source, target);
      const definitions = derivedDefinitions(source);
      const collection = definitions[2];
      invariant(collection.type === "aggregatedProperties");
      expect(collection.aggregatedProperties.propertyTypeMapping).toEqual({
        [propertyRid(source, "values")]: {
          type: "collectList",
          collectList: {
            linkedProperty: {
              type: "propertyType",
              propertyType: propertyRid(target, "value"),
            },
            limit: 100,
          },
        },
      });
      for (const definition of definitions) {
        const body =
          definition.type === "linkedProperties"
            ? definition.linkedProperties
            : definition.type === "aggregatedProperties"
              ? definition.aggregatedProperties
              : undefined;
        invariant(body !== undefined);
        expect(body.linkDefinition).toMatchObject({
          multiHopLink: {
            steps: [{ searchAround: { linkTypeSide: "TARGET" } }],
          },
        });
      }
      for (const name of ["result", "total", "values"]) {
        expect(
          result.shapes.inputShapes.has(
            ReadableIdGenerator.getForDatasetColumn(
              "com.palantir.source",
              name,
            ),
          ),
        ).toBe(false);
      }
      if (mode !== "direct") {
        expect(result.backingDatasourceApiNames).toContain(
          "com.palantir.source",
        );
        const buildDir = await fs.mkdtemp(
          path.join(os.tmpdir(), "derived-backing-"),
        );
        try {
          const backing = await generateBackingDatasetBlockResult(
            source,
            buildDir,
          );
          const columns = Object.values(backing.outputs).flatMap((shape) =>
            shape.type === "datasourceColumn"
              ? [shape.datasourceColumn.about.fallbackTitle]
              : [],
          );
          expect(columns).toEqual(["id", "parentId"]);
          const schema = JSON.parse(
            await fs.readFile(
              path.join(backing.block_data_directory, "schema.json"),
              "utf-8",
            ),
          );
          expect(
            schema.fieldSchemaList.map((field: { name: string }) => field.name),
          ).toEqual(["id", "parentId"]);
          for (const name of columns) {
            expect(
              result.shapes.inputShapes.has(
                ReadableIdGenerator.getForDatasetColumn(
                  "com.palantir.source",
                  name,
                ),
              ),
            ).toBe(true);
          }
        } finally {
          await fs.rm(buildDir, { recursive: true, force: true });
        }
      }
    },
  );

  it.each(aggregations)("resolves $type aggregations", async (aggregation) => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const target = object("target");
      const link = defineLink({
        apiName: "sourceToTarget",
        one: {
          object: "com.palantir.source",
          metadata: { apiName: "targets" },
        },
        toMany: { object: target, metadata: { apiName: "source" } },
        manyForeignKeyProperty: "parentId",
      });
      object("source", {
        properties: {
          id: { type: "string" },
          result: { type: "double", array: "limit" in aggregation },
        },
        datasources: [
          { type: "dataset" },
          {
            type: "derived",
            linkDefinition: [{ linkType: link }],
            propertyMapping: { result: aggregation },
          },
        ],
      });
    });
    const ontology = result.ontologyIr.ontology;
    const source = block(ontology, "com.palantir.source");
    const target = block(ontology, "com.palantir.target");
    const [derived] = derivedDefinitions(source);
    invariant(derived.type === "aggregatedProperties");
    const foreignProperty = {
      type: "propertyType",
      propertyType: propertyRid(target, "value"),
    };
    const metric =
      aggregation.type === "count"
        ? {}
        : "limit" in aggregation
          ? { linkedProperty: foreignProperty, limit: aggregation.limit }
          : { property: foreignProperty };
    expect(derived.aggregatedProperties.propertyTypeMapping).toEqual({
      [propertyRid(source, "result")]: {
        type: aggregation.type,
        [aggregation.type]: metric,
      },
    });
    expect(ontology.knownIdentifiers.propertyTypes).toHaveProperty([
      foreignProperty.propertyType,
    ]);
    const dataset = source.datasources.find(
      ({ datasource }) => datasource.type === "datasetV2",
    )?.datasource;
    invariant(dataset?.type === "datasetV2");
    expect(dataset.datasetV2.propertyMapping).not.toHaveProperty([
      propertyRid(source, "result"),
    ]);
  });

  const sides: Array<DerivedPropertyLinkTypeSide | undefined> = [
    undefined,
    "SOURCE",
    "TARGET",
  ];

  it.each(sides)("resolves linked properties from side %s", async (side) => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const one = object("one");
      const many = object("many");
      const link = defineLink({
        apiName: "oneToMany",
        one: { object: one.apiName, metadata: { apiName: "many" } },
        toMany: { object: many, metadata: { apiName: "one" } },
        manyForeignKeyProperty: "parentId",
        cardinality: "OneToOne",
      });
      addDerivedProperties(side === "TARGET" ? many : one, [
        { linkType: link, side },
      ]);
    });
    const ontology = result.ontologyIr.ontology;
    const one = block(ontology, "com.palantir.one");
    const many = block(ontology, "com.palantir.many");
    const source = side === "TARGET" ? many : one;
    expectForeignProperties(source, side === "TARGET" ? one : many);
    const [derived] = derivedDefinitions(source);
    invariant(derived.type === "linkedProperties");
    expect(derived.linkedProperties.linkDefinition).toEqual({
      type: "multiHopLink",
      multiHopLink: {
        steps: [
          {
            type: "searchAround",
            searchAround: {
              linkTypeIdentifier: {
                type: "linkType",
                linkType: Object.keys(ontology.linkTypes)[0],
              },
              linkTypeSide: side ?? "SOURCE",
            },
          },
        ],
      },
    });
  });

  describe.each(["manyToMany", "intermediary"] as const)("%s links", (kind) => {
    it.each(sides)("resolves aggregation from side %s", async (side) => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const a = object("a");
        const b = object("b");
        const many = { object: a, metadata: { apiName: "bs" } };
        const toMany = { object: b.apiName, metadata: { apiName: "as" } };
        let link: LinkType;
        if (kind === "intermediary") {
          const intermediary = object("intermediary");
          const aToIntermediary = defineLink({
            apiName: "aToIntermediary",
            one: many,
            toMany: { object: intermediary, metadata: { apiName: "a" } },
            manyForeignKeyProperty: "parentId",
          });
          const bToIntermediary = defineLink({
            apiName: "bToIntermediary",
            one: toMany,
            toMany: { object: intermediary, metadata: { apiName: "b" } },
            manyForeignKeyProperty: "id",
          });
          link = defineLink({
            apiName: "aToB",
            many: { ...many, linkToIntermediary: aToIntermediary },
            toMany: { ...toMany, linkToIntermediary: bToIntermediary },
            intermediaryObjectType: intermediary,
          });
        } else {
          link = defineLink({ apiName: "aToB", many, toMany });
        }
        const source = side === "TARGET" ? b : a;
        source.datasources!.push({
          type: "derived",
          linkDefinition: [{ linkType: link, side }],
          propertyMapping: { result: { type: "sum", property: "value" } },
        });
      });
      const ontology = result.ontologyIr.ontology;
      const a = block(ontology, "com.palantir.a");
      const b = block(ontology, "com.palantir.b");
      const source = side === "TARGET" ? b : a;
      const target = side === "TARGET" ? a : b;
      const [derived] = derivedDefinitions(source);
      invariant(derived.type === "aggregatedProperties");
      expect(derived.aggregatedProperties.propertyTypeMapping).toEqual({
        [propertyRid(source, "result")]: {
          type: "sum",
          sum: {
            property: {
              type: "propertyType",
              propertyType: propertyRid(target, "value"),
            },
          },
        },
      });
    });
  });

  it.each([undefined, "TARGET"] as const)(
    "resolves a multi-hop traversal with a reversed last step, side %s",
    async (side) => {
      const result = await defineOntologyV2("com.palantir.", () => {
        const source = object("source");
        const middle = object("middle");
        const target = object("target");
        const first = defineLink({
          apiName: "sourceToMiddle",
          one: { object: source, metadata: { apiName: "middle" } },
          toMany: { object: middle, metadata: { apiName: "source" } },
          manyForeignKeyProperty: "parentId",
          cardinality: "OneToOne",
        });
        const last = defineLink({
          apiName: "targetToMiddle",
          one: { object: target.apiName, metadata: { apiName: "middle" } },
          toMany: { object: middle, metadata: { apiName: "target" } },
          manyForeignKeyProperty: "id",
          cardinality: "OneToOne",
        });
        addDerivedProperties(source, [
          { linkType: first },
          { linkType: last, side },
        ]);
      });
      expectForeignProperties(
        block(result.ontologyIr.ontology, "com.palantir.source"),
        block(result.ontologyIr.ontology, "com.palantir.target"),
      );
      expect(
        derivedDefinitions(
          block(result.ontologyIr.ontology, "com.palantir.source"),
        )[0],
      ).toMatchObject({
        linkedProperties: {
          linkDefinition: {
            multiHopLink: {
              steps: [
                { searchAround: { linkTypeSide: "SOURCE" } },
                { searchAround: { linkTypeSide: "TARGET" } },
              ],
            },
          },
        },
      });
    },
  );

  it("infers opposite directions without mutating a shared many-to-many link definition", async () => {
    let steps: ObjectTypeDatasourceDefinition_derived["linkDefinition"] = [];
    const result = await defineOntologyV2("com.palantir.", () => {
      const a = object("a");
      const b = object("b");
      const link = defineLink({
        apiName: "aToB",
        many: { object: a.apiName, metadata: { apiName: "bs" } },
        toMany: { object: b.apiName, metadata: { apiName: "as" } },
      });
      steps = [{ linkType: link }];
      for (const source of [a, b]) {
        source.datasources!.push({
          type: "derived",
          linkDefinition: steps,
          propertyMapping: { total: { type: "sum", property: "value" } },
        });
      }
    });
    expect(steps[0].side).toBeUndefined();
    for (const [from, to, side] of [
      ["a", "b", "SOURCE"],
      ["b", "a", "TARGET"],
    ]) {
      const source = block(result.ontologyIr.ontology, "com.palantir." + from);
      const target = block(result.ontologyIr.ontology, "com.palantir." + to);
      expect(derivedDefinitions(source)[0]).toMatchObject({
        aggregatedProperties: {
          linkDefinition: {
            multiHopLink: { steps: [{ searchAround: { linkTypeSide: side } }] },
          },
          propertyTypeMapping: {
            [propertyRid(source, "total")]: {
              sum: { property: { propertyType: propertyRid(target, "value") } },
            },
          },
        },
      });
    }
  });

  it("resolves self-referential linked and aggregated properties", async () => {
    const result = await defineOntologyV2("com.palantir.", () => {
      const source = object("source");
      const link = defineLink({
        apiName: "parentToChildren",
        one: { object: source, metadata: { apiName: "children" } },
        toMany: { object: source.apiName, metadata: { apiName: "parent" } },
        manyForeignKeyProperty: "parentId",
      });
      addDerivedProperties(source, [{ linkType: link, side: "TARGET" }]);
    });
    const source = block(result.ontologyIr.ontology, "com.palantir.source");
    expectForeignProperties(source, source);
  });

  it("resolves properties through an imported link to an imported object", async () => {
    let middle: ObjectType;
    let target: ObjectType;
    let importedLink: LinkType;
    await defineOntologyV2("upstream.", () => {
      middle = getOntologyDefinition().OBJECT_TYPE[object("middle").apiName];
      target = getOntologyDefinition().OBJECT_TYPE[object("target").apiName];
      importedLink = defineLink({
        apiName: "middleToTarget",
        one: { object: middle, metadata: { apiName: "target" } },
        toMany: { object: target.apiName, metadata: { apiName: "middle" } },
        manyForeignKeyProperty: "parentId",
        cardinality: "OneToOne",
      });
    });
    const result = await defineOntologyV2("com.palantir.", () => {
      importOntologyEntity(middle);
      importOntologyEntity(target);
      importOntologyEntity(importedLink);
      const source = object("source");
      const first = defineLink({
        apiName: "sourceToMiddle",
        one: { object: source, metadata: { apiName: "middle" } },
        toMany: { object: middle, metadata: { apiName: "source" } },
        manyForeignKeyProperty: "parentId",
        cardinality: "OneToOne",
      });
      addDerivedProperties(source, [
        { linkType: first },
        { linkType: importedLink },
      ]);
    });
    expectForeignProperties(
      block(result.ontologyIr.ontology, "com.palantir.source"),
      block(result.ontologyIr.importedOntology, "upstream.target"),
    );
  });
});
