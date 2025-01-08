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
import { describe, expect, it } from "vitest";
import { modernToLegacyWhereClause } from "./modernToLegacyWhereClause.js";

type ObjAllProps = objectTypeWithAllPropertyTypes;
type structObj = BgaoNflPlayer;
describe(modernToLegacyWhereClause, () => {
  describe("api namespaces", () => {
    describe("interfaces", () => {
      it("properly converts shortname to fqApiName", () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: { "prop": { type: "integer" } },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyWhereClause({
          prop: 5,
        }, T);

        expect(r).toMatchInlineSnapshot(`
          {
            "field": "a.prop",
            "type": "eq",
            "value": 5,
          }
        `);
      });

      it("properly does not convert when interface has no apiNamespace", () => {
        const T = {
          type: "interface",
          apiName: "Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "foo": { type: "integer" },
              "b.prop": { type: "integer" },
              "prop": { type: "integer" },
            },
            apiName: "Foo",
            displayName: "",
            links: {},
            rid: "",
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyWhereClause({
          "b.prop": 5,
          foo: 6,
        }, T);

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
            ],
          }
        `);
      });

      it("gracefully handles redundant apiNamespace in property", () => {
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
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyWhereClause({
          "b.prop": 5,
          "a.foo": 6,
        }, T);

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
            ],
          }
        `);
      });

      it("properly does not convert different apiNamespaces", () => {
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
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        expect(modernToLegacyWhereClause({
          "b.prop": 5,
        }, T)).toMatchInlineSnapshot(`
          {
            "field": "b.prop",
            "type": "eq",
            "value": 5,
          }
        `);
      });
    });

    describe("objects", () => {
      it("does not convert object short property names to fq", () => {
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
          },
        } as const satisfies ObjectOrInterfaceDefinition;
        const r = modernToLegacyWhereClause({
          prop: 5,
        }, T);

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
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            geoPoint: {
              $within: [-5, 5, -10, 10],
            },
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            geoPoint: {
              $within: {
                $bbox: [-5, 5, -10, 10],
              },
            },
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            geoPoint: {
              $within: { $distance: [5, "km"], $of: [-5, 5] },
            },
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            geoPoint: {
              $within: { $distance: [5, "km"], $of: pointAsGeoJsonPoint },
            },
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            geoPoint: {
              $within: { $polygon: [[[0, 1], [3, 2], [0, 1]]] },
            },
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            geoPoint: {
              $within: {
                type: "Polygon",
                coordinates: [[[0, 1], [3, 2], [0, 1]]],
              },
            },
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
          expect(modernToLegacyWhereClause<ObjAllProps>(
            {
              geoShape: {
                $intersects: [-5, 5, -10, 10],
              },
            },
            objectTypeWithAllPropertyTypes,
          )).toMatchInlineSnapshot(`
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
          expect(modernToLegacyWhereClause<ObjAllProps>(
            {
              geoShape: {
                $intersects: {
                  $bbox: [-5, 5, -10, 10],
                },
              },
            },
            objectTypeWithAllPropertyTypes,
          )).toMatchInlineSnapshot(`
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
          expect(modernToLegacyWhereClause<ObjAllProps>(
            {
              geoShape: {
                $intersects: { $polygon: [[[0, 1], [3, 2], [0, 1]]] },
              },
            },
            objectTypeWithAllPropertyTypes,
          )).toMatchInlineSnapshot(`
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
          expect(modernToLegacyWhereClause<ObjAllProps>(
            {
              geoShape: {
                $intersects: {
                  type: "Polygon",
                  coordinates: [[[0, 1], [3, 2], [0, 1]]],
                },
              },
            },
            objectTypeWithAllPropertyTypes,
          )).toMatchInlineSnapshot(`
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

      it("inverts ne short hand properly", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          integer: { $ne: 5 },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
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
      it("converts $containsAllTerms correctly if using new type", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAllTerms: { term: "test", fuzzySearch: true } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": true,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);

        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAllTerms: { term: "test", fuzzySearch: false } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);

        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAllTerms: { term: "test" } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);
      });

      it("converts $containsAllTerms correctly if using old type", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAllTerms: "test" },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);
      });
      it("converts $containsAnyTerm correctly if using new type", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAnyTerm: { term: "test", fuzzySearch: true } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": true,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);

        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAnyTerm: { term: "test", fuzzySearch: false } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);

        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAnyTerm: { term: "test" } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);
      });

      it("converts $containsAnyTerm correctly if using old type", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAnyTerm: "test" },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAnyTerm",
          "value": "test",
        }
      `);
      });
      it("converts struct where clauses correctly", () => {
        expect(modernToLegacyWhereClause<structObj>({
          address: { state: { $eq: "NJ" } },
        }, BgaoNflPlayer)).toMatchInlineSnapshot(`
        {
          "propertyIdentifier": {
            "type": "structField",
            "apiName": {
            "propertyApiName": "address",
            "structFieldApiName": "state",
            }
          },
          "type": "eq",
          "value": "NJ",
        }
      `);

        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAllTerms: { term: "test", fuzzySearch: false } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);

        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: { $containsAllTerms: { term: "test" } },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "fuzzy": false,
          "type": "containsAllTerms",
          "value": "test",
        }
      `);
      });
    });

    describe("multiple checks", () => {
      it("properly handles multiple simple where checks", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            decimal: 5,
            integer: 10,
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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

      it("properly handles $and", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            $and: [{
              decimal: 5,
            }, {
              integer: 10,
            }],
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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

      it("properly handles $or", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>(
          {
            $or: [{
              decimal: 5,
            }, {
              integer: 10,
            }],
          },
          objectTypeWithAllPropertyTypes,
        )).toMatchInlineSnapshot(`
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
});
