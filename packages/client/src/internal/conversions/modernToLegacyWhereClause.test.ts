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

import type { ObjectOrInterfaceDefinition, WhereClause } from "@osdk/api";
import {
  BgaoNflPlayer,
  objectTypeWithAllPropertyTypes,
} from "@osdk/client.test.ontology";
import type { Point } from "geojson";
import { expectType } from "ts-expect";
import type { Mock } from "vitest";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { createMinimalClient } from "../../createMinimalClient.js";
import type { MinimalClient } from "../../MinimalClientContext.js";
import { modernToLegacyWhereClause } from "./modernToLegacyWhereClause.js";

const metadata = {
  expectsClientVersion: "0.0.0",
  ontologyRid: "ri.a.b.c.d",
  ontologyApiName: "apiName",
  userAgent: "",
};

let mockFetch: Mock;
let clientCtx: MinimalClient;

beforeAll(() => {
  mockFetch = vi.fn();

  clientCtx = createMinimalClient(
    metadata,
    "https://host.com",
    async () => "myAccessToken",
    {},
    mockFetch,
  );
});

type ObjAllProps = objectTypeWithAllPropertyTypes;
type structObj = BgaoNflPlayer;
describe(modernToLegacyWhereClause, () => {
  describe("api namespaces", () => {
    describe("interfaces", () => {
      it("properly converts shortname to fqApiName", async () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "prop": { type: "integer" },
              "prop2": {
                type: { "innerProp1": "string", "innerProp2": "float" },
              },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = await modernToLegacyWhereClause(
          {
            $and: [
              { prop: { $eq: 5 } },
              { prop2: { innerProp1: { $eq: "myProp" } } },
            ],
          },
          T,
          clientCtx,
        );

        expect(r).toMatchInlineSnapshot(`
          {
            "type": "and",
            "value": [
              {
                "field": "a.prop",
                "type": "eq",
                "value": 5,
              },
              {
                "field": undefined,
                "propertyIdentifier": {
                  "propertyApiName": "a.prop2",
                  "structFieldApiName": "innerProp1",
                  "type": "structField",
                },
                "type": "eq",
                "value": "myProp",
              },
            ],
          }
        `);
      });

      it("properly does not convert when interface has no apiNamespace", async () => {
        const T = {
          type: "interface",
          apiName: "Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "foo": { type: "integer" },
              "b.prop": { type: "integer" },
              "prop": { type: "integer" },
              "c.prop2": {
                type: { "innerProp1": "string", "innerProp2": "float" },
              },
            },
            apiName: "Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = await modernToLegacyWhereClause(
          {
            "b.prop": 5,
            foo: 6,
            "c.prop2": { innerProp1: { $eq: "myProp" } },
          },
          T,
          clientCtx,
        );

        expect(r).toMatchInlineSnapshot(`
          {
            "type": "and",
            "value": [
              {
                "field": "b.prop",
                "type": "eq",
                "value": 5,
              },
              {
                "field": "foo",
                "type": "eq",
                "value": 6,
              },
              {
                "field": undefined,
                "propertyIdentifier": {
                  "propertyApiName": "c.prop2",
                  "structFieldApiName": "innerProp1",
                  "type": "structField",
                },
                "type": "eq",
                "value": "myProp",
              },
            ],
          }
        `);
      });

      it("gracefully handles redundant apiNamespace in property", async () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "a.foo": { type: "integer" },
              "b.prop": { type: "integer" },
              "prop": { type: "integer" },
              "c.prop2": {
                type: { "innerProp1": "string", "innerProp2": "float" },
              },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = await modernToLegacyWhereClause(
          {
            "b.prop": 5,
            "a.foo": 6,
            "c.prop2": { innerProp1: { $eq: "myProp" } },
          },
          T,
          clientCtx,
        );

        expect(r).toMatchInlineSnapshot(`
          {
            "type": "and",
            "value": [
              {
                "field": "b.prop",
                "type": "eq",
                "value": 5,
              },
              {
                "field": "a.foo",
                "type": "eq",
                "value": 6,
              },
              {
                "field": undefined,
                "propertyIdentifier": {
                  "propertyApiName": "c.prop2",
                  "structFieldApiName": "innerProp1",
                  "type": "structField",
                },
                "type": "eq",
                "value": "myProp",
              },
            ],
          }
        `);
      });

      it("properly does not convert different apiNamespaces", async () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "a.foo": { type: "integer" },
              "b.prop": { type: "integer" },
              "prop": { type: "integer" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        expect(
          await modernToLegacyWhereClause(
            {
              "b.prop": 5,
            },
            T,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "field": "b.prop",
            "type": "eq",
            "value": 5,
          }
        `);
      });
    });

    describe("objects", () => {
      it("does not convert object short property names to fq", async () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "a.foo": { type: "integer" },
              "prop": { type: "integer" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;
        const r = await modernToLegacyWhereClause(
          {
            prop: 5,
          },
          T,
          clientCtx,
        );

        expect(r).toMatchInlineSnapshot(`
          {
            "field": "a.prop",
            "type": "eq",
            "value": 5,
          }
        `);
      });
    });
  });

  describe("single checks", () => {
    describe("$within", () => {
      it("properly generates bbox shortcut", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              geoPoint: {
                $within: [-5, 5, -10, 10],
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "field": "geoPoint",
            "type": "withinBoundingBox",
            "value": {
              "bottomRight": {
                "coordinates": [
                  -10,
                  5,
                ],
                "type": "Point",
              },
              "topLeft": {
                "coordinates": [
                  -5,
                  10,
                ],
                "type": "Point",
              },
            },
          }
        `);
      });

      it("properly generates bbox long form", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              geoPoint: {
                $within: {
                  $bbox: [-5, 5, -10, 10],
                },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "field": "geoPoint",
            "type": "withinBoundingBox",
            "value": {
              "bottomRight": {
                "coordinates": [
                  -10,
                  5,
                ],
                "type": "Point",
              },
              "topLeft": {
                "coordinates": [
                  -5,
                  10,
                ],
                "type": "Point",
              },
            },
          }
        `);
      });

      it("properly generates within radius", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              geoPoint: {
                $within: { $distance: [5, "km"], $of: [-5, 5] },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "geoPoint",
          "type": "withinDistanceOf",
          "value": {
            "center": {
              "coordinates": [
                -5,
                5,
              ],
              "type": "Point",
            },
            "distance": {
              "unit": "KILOMETERS",
              "value": 5,
            },
          },
        }
      `);
      });

      it("properly generates within radius of geopoint", async () => {
        // suppose you loaded an object with a geopoint field
        // and you want to find all objects within 5 km of that point
        const pointAsGeoJsonPoint: Point = {
          type: "Point",
          coordinates: [-5, 5],
        };
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              geoPoint: {
                $within: { $distance: [5, "km"], $of: pointAsGeoJsonPoint },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "geoPoint",
          "type": "withinDistanceOf",
          "value": {
            "center": {
              "coordinates": [
                -5,
                5,
              ],
              "type": "Point",
            },
            "distance": {
              "unit": "KILOMETERS",
              "value": 5,
            },
          },
        }
      `);
      });

      it("properly generates within polygon", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              geoPoint: {
                $within: { $polygon: [[[0, 1], [3, 2], [0, 1]]] },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "field": "geoPoint",
            "type": "withinPolygon",
            "value": {
              "coordinates": [
                [
                  [
                    0,
                    1,
                  ],
                  [
                    3,
                    2,
                  ],
                  [
                    0,
                    1,
                  ],
                ],
              ],
              "type": "Polygon",
            },
          }
        `);
      });

      it("properly generates within polygon geojson", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              geoPoint: {
                $within: {
                  type: "Polygon",
                  coordinates: [[[0, 1], [3, 2], [0, 1]]],
                },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "field": "geoPoint",
            "type": "withinPolygon",
            "value": {
              "coordinates": [
                [
                  [
                    0,
                    1,
                  ],
                  [
                    3,
                    2,
                  ],
                  [
                    0,
                    1,
                  ],
                ],
              ],
              "type": "Polygon",
            },
          }
        `);
      });
      it("check types", async () => {
        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: [-5, 5, -10, 10],
          },
        });

        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: { $distance: [2, "centimeter"], $of: [2, 2] },
          },
        });

        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: { $polygon: [[[0, 1], [3, 2], [0, 1]]] },
          },
        });

        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: {
              type: "Polygon",
              coordinates: [[[0, 1], [3, 2], [0, 1]]],
            },
          },
        });

        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: { $bbox: [-5, 5, -10, 10] },
          },
        });

        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: {
              $bbox: [-5, 5, -10, 10],
              // @ts-expect-error
              $distance: [2, "centimeter"],
              // @ts-expect-error
              $of: [2, 2],
            },
          },
        });
        expectType<WhereClause<ObjAllProps>>({
          geoPoint: {
            $within: {
              $polygon: [[[0, 1], [3, 2], [0, 1]]],
              // @ts-expect-error
              $bbox: [2, 2, 2, 2],
            },
          },
        });
      });
      describe("$intersects", () => {
        it("properly generates bbox shortcut", async () => {
          expect(
            await modernToLegacyWhereClause<ObjAllProps>(
              {
                geoShape: {
                  $intersects: [-5, 5, -10, 10],
                },
              },
              objectTypeWithAllPropertyTypes,
              clientCtx,
            ),
          ).toMatchInlineSnapshot(`
        {
          "field": "geoShape",
          "type": "intersectsBoundingBox",
          "value": {
            "bottomRight": {
              "coordinates": [
                -10,
                5,
              ],
              "type": "Point",
            },
            "topLeft": {
              "coordinates": [
                -5,
                10,
              ],
              "type": "Point",
            },
          },
        }
      `);
        });
        it("properly generates bbox long form", async () => {
          expect(
            await modernToLegacyWhereClause<ObjAllProps>(
              {
                geoShape: {
                  $intersects: {
                    $bbox: [-5, 5, -10, 10],
                  },
                },
              },
              objectTypeWithAllPropertyTypes,
              clientCtx,
            ),
          ).toMatchInlineSnapshot(`
          {
            "field": "geoShape",
            "type": "intersectsBoundingBox",
            "value": {
              "bottomRight": {
                "coordinates": [
                  -10,
                  5,
                ],
                "type": "Point",
              },
              "topLeft": {
                "coordinates": [
                  -5,
                  10,
                ],
                "type": "Point",
              },
            },
          }
        `);
        });

        it("properly generates intersects polygon", async () => {
          expect(
            await modernToLegacyWhereClause<ObjAllProps>(
              {
                geoShape: {
                  $intersects: { $polygon: [[[0, 1], [3, 2], [0, 1]]] },
                },
              },
              objectTypeWithAllPropertyTypes,
              clientCtx,
            ),
          ).toMatchInlineSnapshot(`
            {
              "field": "geoShape",
              "type": "intersectsPolygon",
              "value": {
                "coordinates": [
                  [
                    [
                      0,
                      1,
                    ],
                    [
                      3,
                      2,
                    ],
                    [
                      0,
                      1,
                    ],
                  ],
                ],
                "type": "Polygon",
              },
            }
          `);
        });

        it("properly generates within polygon geojson", async () => {
          expect(
            await modernToLegacyWhereClause<ObjAllProps>(
              {
                geoShape: {
                  $intersects: {
                    type: "Polygon",
                    coordinates: [[[0, 1], [3, 2], [0, 1]]],
                  },
                },
              },
              objectTypeWithAllPropertyTypes,
              clientCtx,
            ),
          ).toMatchInlineSnapshot(`
            {
              "field": "geoShape",
              "type": "intersectsPolygon",
              "value": {
                "coordinates": [
                  [
                    [
                      0,
                      1,
                    ],
                    [
                      3,
                      2,
                    ],
                    [
                      0,
                      1,
                    ],
                  ],
                ],
                "type": "Polygon",
              },
            }
          `);
        });
      });

      it("inverts ne short hand properly", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              integer: { $ne: 5 },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "type": "not",
          "value": {
            "field": "integer",
            "type": "eq",
            "value": 5,
          },
        }
      `);
      });
      it("converts $containsAllTerms correctly if using new type", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: {
                $containsAllTerms: { term: "test", fuzzySearch: true },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": true,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);

        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: {
                $containsAllTerms: { term: "test", fuzzySearch: false },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);

        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: { $containsAllTerms: { term: "test" } },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);
      });

      it("converts $containsAllTerms correctly if using old type", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: { $containsAllTerms: "test" },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);
      });
      it("converts $containsAnyTerm correctly if using new type", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: { $containsAnyTerm: { term: "test", fuzzySearch: true } },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": true,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);

        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: {
                $containsAnyTerm: { term: "test", fuzzySearch: false },
              },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);

        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: { $containsAnyTerm: { term: "test" } },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);
      });

      it("converts $containsAnyTerm correctly if using old type", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              string: { $containsAnyTerm: "test" },
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);
      });
      it("converts struct where clauses correctly", async () => {
        expect(
          await modernToLegacyWhereClause<structObj>(
            {
              address: { state: { $eq: "NJ" } },
            },
            BgaoNflPlayer,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "field": undefined,
            "propertyIdentifier": {
              "propertyApiName": "address",
              "structFieldApiName": "state",
              "type": "structField",
            },
            "type": "eq",
            "value": "NJ",
          }
        `);

        expect(
          await modernToLegacyWhereClause<structObj>(
            {
              $and: [
                { address: { state: { $eq: "NJ" } } },
                { address: { city: { $containsAnyTerm: "N" } } },
              ],
            },
            BgaoNflPlayer,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": undefined,
              "propertyIdentifier": {
                "propertyApiName": "address",
                "structFieldApiName": "state",
                "type": "structField",
              },
              "type": "eq",
              "value": "NJ",
            },
            {
              "field": undefined,
              "fuzzy": false,
              "propertyIdentifier": {
                "propertyApiName": "address",
                "structFieldApiName": "city",
                "type": "structField",
              },
              "type": "containsAnyTerm",
              "value": "N",
            },
          ],
        }
      `);

        expect(
          await modernToLegacyWhereClause<structObj>(
            {
              $or: [
                { address: { state: { $eq: "NJ" } } },
                { address: { city: { $containsAnyTerm: "N" } } },
                { gamesPlayed: { $gt: 5 } },
              ],
            },
            BgaoNflPlayer,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
      {
        "type": "or",
        "value": [
          {
            "field": undefined,
            "propertyIdentifier": {
              "propertyApiName": "address",
              "structFieldApiName": "state",
              "type": "structField",
            },
            "type": "eq",
            "value": "NJ",
          },
          {
            "field": undefined,
            "fuzzy": false,
            "propertyIdentifier": {
              "propertyApiName": "address",
              "structFieldApiName": "city",
              "type": "structField",
            },
            "type": "containsAnyTerm",
            "value": "N",
          },
          {
            "field": "gamesPlayed",
            "type": "gt",
            "value": 5,
          },
        ],
      }
    `);
      });
    });

    describe("multiple checks", () => {
      it("properly handles multiple simple where checks", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              decimal: 5,
              integer: 10,
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": "decimal",
              "type": "eq",
              "value": 5,
            },
            {
              "field": "integer",
              "type": "eq",
              "value": 10,
            },
          ],
        }
      `);
      });

      it("properly handles $and", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              $and: [{
                decimal: 5,
              }, {
                integer: 10,
              }],
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
          {
            "type": "and",
            "value": [
              {
                "field": "decimal",
                "type": "eq",
                "value": 5,
              },
              {
                "field": "integer",
                "type": "eq",
                "value": 10,
              },
            ],
          }
        `);
      });

      it("properly handles $or", async () => {
        expect(
          await modernToLegacyWhereClause<ObjAllProps>(
            {
              $or: [{
                decimal: 5,
              }, {
                integer: 10,
              }],
            },
            objectTypeWithAllPropertyTypes,
            clientCtx,
          ),
        ).toMatchInlineSnapshot(`
            {
              "type": "or",
              "value": [
                {
                  "field": "decimal",
                  "type": "eq",
                  "value": 5,
                },
                {
                  "field": "integer",
                  "type": "eq",
                  "value": 10,
                },
              ],
            }
          `);
      });
    });
  });

  describe("$primaryKey", () => {
    it("properly converts $primaryKey", async () => {
      expect(
        await modernToLegacyWhereClause<ObjAllProps>(
          {
            $or: [{
              $primaryKey: 5,
            }, {
              $primaryKey: 10,
            }],
          },
          objectTypeWithAllPropertyTypes,
          {
            ...clientCtx,
            // poor man's mock
            ontologyProvider: {
              async getObjectDefinition(_apiName: string) {
                return Promise.resolve({
                  primaryKeyApiName: "id",
                });
              },
            } as any,
          },
        ),
      ).toMatchInlineSnapshot(`
            {
              "type": "or",
              "value": [
                {
                  "field": "id",
                  "type": "eq",
                  "value": 5,
                },
                {
                  "field": "id",
                  "type": "eq",
                  "value": 10,
                },
              ],
            }
          `);
    });
  });
});
