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

        const r = modernToLegacyWhereClause({
          $and: [
            { prop: { $eq: 5 } },
            { prop2: { innerProp1: { $eq: "myProp" } } },
          ],
        }, T);

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

        const r = modernToLegacyWhereClause({
          "b.prop": 5,
          foo: 6,
          "c.prop2": { innerProp1: { $eq: "myProp" } },
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

        const r = modernToLegacyWhereClause({
          "b.prop": 5,
          "a.foo": 6,
          "c.prop2": { innerProp1: { $eq: "myProp" } },
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
            description: undefined,
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
            description: undefined,
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
      it("converts $interval $match", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: {
            $interval: {
              $match: "test phrase",
              $maxGaps: 1,
              $ordered: true,
            },
          },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "rule": {
            "maxGaps": 1,
            "ordered": true,
            "query": "test phrase",
            "type": "match",
          },
          "type": "interval",
        }
      `);
      });
      it("converts $interval $prefixOnLastTerm", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: {
            $interval: {
              $match: "test phr",
              $prefixOnLastTerm: true,
            },
          },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
        {
          "field": "string",
          "rule": {
            "query": "test phr",
            "type": "prefixOnLastToken",
          },
          "type": "interval",
        }
      `);
      });
      it("converts $interval $and", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: {
            $interval: {
              $and: [{
                $match: "test",
                $ordered: true,
              }, {
                $match: "phrase",
                $ordered: true,
              }],
              $maxGaps: 0,
              $ordered: true,
            },
          },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
          {
            "field": "string",
            "rule": {
              "maxGaps": 0,
              "ordered": true,
              "rules": [
                {
                  "maxGaps": undefined,
                  "ordered": true,
                  "query": "test",
                  "type": "match",
                },
                {
                  "maxGaps": undefined,
                  "ordered": true,
                  "query": "phrase",
                  "type": "match",
                },
              ],
              "type": "allOf",
            },
            "type": "interval",
          }
        `);
      });
      it("converts $interval $or", () => {
        expect(modernToLegacyWhereClause<ObjAllProps>({
          string: {
            $interval: {
              $or: [{
                $match: "test",
                $ordered: true,
              }, {
                $match: "phrase",
                $ordered: true,
              }],
            },
          },
        }, objectTypeWithAllPropertyTypes)).toMatchInlineSnapshot(`
          {
            "field": "string",
            "rule": {
              "rules": [
                {
                  "maxGaps": undefined,
                  "ordered": true,
                  "query": "test",
                  "type": "match",
                },
                {
                  "maxGaps": undefined,
                  "ordered": true,
                  "query": "phrase",
                  "type": "match",
                },
              ],
              "type": "anyOf",
            },
            "type": "interval",
          }
        `);
      });
      it("converts struct where clauses correctly", () => {
        expect(modernToLegacyWhereClause<structObj>({
          address: { state: { $eq: "NJ" } },
        }, BgaoNflPlayer)).toMatchInlineSnapshot(`
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

        expect(modernToLegacyWhereClause<structObj>({
          $and: [
            { address: { state: { $eq: "NJ" } } },
            { address: { city: { $containsAnyTerm: "N" } } },
          ],
        }, BgaoNflPlayer)).toMatchInlineSnapshot(`
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

        expect(modernToLegacyWhereClause<structObj>({
          $or: [
            { address: { state: { $eq: "NJ" } } },
            { address: { city: { $containsAnyTerm: "N" } } },
            { gamesPlayed: { $gt: 5 } },
          ],
        }, BgaoNflPlayer)).toMatchInlineSnapshot(`
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
      it("converts struct arrays correctly", () => {
        expect(
          modernToLegacyWhereClause<structObj>({
            $and: [{
              addressArray: { $contains: { zipCode: { $gte: 10001 } } },
            }, {
              addressArray: {
                $contains: {
                  location: {
                    $within: [1, 2, 3, 4],
                  },
                },
              },
            }],
          }, BgaoNflPlayer),
        )
          .toMatchInlineSnapshot(`
            {
              "type": "and",
              "value": [
                {
                  "field": undefined,
                  "propertyIdentifier": {
                    "propertyApiName": "addressArray",
                    "structFieldApiName": "zipCode",
                    "type": "structField",
                  },
                  "type": "gte",
                  "value": 10001,
                },
                {
                  "field": undefined,
                  "propertyIdentifier": {
                    "propertyApiName": "addressArray",
                    "structFieldApiName": "location",
                    "type": "structField",
                  },
                  "type": "withinBoundingBox",
                  "value": {
                    "bottomRight": {
                      "coordinates": [
                        3,
                        2,
                      ],
                      "type": "Point",
                    },
                    "topLeft": {
                      "coordinates": [
                        1,
                        4,
                      ],
                      "type": "Point",
                    },
                  },
                },
              ],
            }
          `);
      });

      it("converts primitive arrays with nested filters correctly", () => {
        expect(
          modernToLegacyWhereClause<ObjAllProps>({
            integerArray: { $contains: { $lt: 5 } },
          }, objectTypeWithAllPropertyTypes),
        ).toMatchInlineSnapshot(`
          {
            "field": "integerArray",
            "type": "lt",
            "value": 5,
          }
        `);

        expect(
          modernToLegacyWhereClause<ObjAllProps>({
            stringArray: { $contains: { $startsWith: "test" } },
          }, objectTypeWithAllPropertyTypes),
        ).toMatchInlineSnapshot(`
          {
            "field": "stringArray",
            "type": "startsWith",
            "value": "test",
          }
        `);

        expect(
          modernToLegacyWhereClause<ObjAllProps>({
            booleanArray: { $contains: { $eq: true } },
          }, objectTypeWithAllPropertyTypes),
        ).toMatchInlineSnapshot(`
          {
            "field": "booleanArray",
            "type": "eq",
            "value": true,
          }
        `);
      });

      it("converts primitive arrays with multiple nested filter conditions", () => {
        expect(
          modernToLegacyWhereClause<ObjAllProps>({
            $and: [
              { integerArray: { $contains: { $gte: 1 } } },
              { integerArray: { $contains: { $lt: 10 } } },
            ],
          }, objectTypeWithAllPropertyTypes),
        ).toMatchInlineSnapshot(`
          {
            "type": "and",
            "value": [
              {
                "field": "integerArray",
                "type": "gte",
                "value": 1,
              },
              {
                "field": "integerArray",
                "type": "lt",
                "value": 10,
              },
            ],
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

  describe("mixed $ operators and regular properties", () => {
    it("should handle $not operator with regular properties at top level", () => {
      const whereClause: WhereClause<ObjAllProps> = {
        integer: { $eq: 5 },
        $not: { string: { $in: ["a", "b", "c"] } },
      };

      const result = modernToLegacyWhereClause(
        whereClause,
        objectTypeWithAllPropertyTypes,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": "integer",
              "type": "eq",
              "value": 5,
            },
            {
              "type": "not",
              "value": {
                "field": "string",
                "type": "in",
                "value": [
                  "a",
                  "b",
                  "c",
                ],
              },
            },
          ],
        }
      `);
    });

    it("should handle multiple regular properties with $not at top level", () => {
      const whereClause: WhereClause<ObjAllProps> = {
        integer: 5,
        boolean: true,
        $not: { string: { $eq: "excluded" } },
      };

      const result = modernToLegacyWhereClause(
        whereClause,
        objectTypeWithAllPropertyTypes,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": "integer",
              "type": "eq",
              "value": 5,
            },
            {
              "field": "boolean",
              "type": "eq",
              "value": true,
            },
            {
              "type": "not",
              "value": {
                "field": "string",
                "type": "eq",
                "value": "excluded",
              },
            },
          ],
        }
      `);
    });
  });

  describe("RDP properties", () => {
    type TestRDPs = {
      reportCount: "integer";
      managerName: "string";
    };

    const mockObjectType = {
      type: "object" as const,
      apiName: "TestObject",
      __DefinitionMetadata: {
        type: "object" as const,
        apiName: "TestObject",
        displayName: "Test Object",
        description: undefined,
        properties: {
          department: { type: "string" as const },
          status: { type: "string" as const },
        },
        rid: "test-rid",
        primaryKeyApiName: "id",
        titleProperty: "department",
        links: {},
        primaryKeyType: "string" as const,
        icon: undefined,
        visibility: undefined,
        pluralDisplayName: "Test Objects",
        status: undefined,
        interfaceMap: {},
        inverseInterfaceMap: {},
      },
    };

    it("should handle RDP properties at top level", () => {
      const whereClause: WhereClause<typeof mockObjectType, TestRDPs> = {
        department: "Engineering",
        reportCount: { $gte: 5 },
        managerName: "John",
      };

      const rdpNames = new Set(["reportCount", "managerName"]);

      const result = modernToLegacyWhereClause(
        whereClause,
        mockObjectType,
        rdpNames,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": "department",
              "type": "eq",
              "value": "Engineering",
            },
            {
              "field": undefined,
              "propertyIdentifier": {
                "apiName": "reportCount",
                "type": "property",
              },
              "type": "gte",
              "value": 5,
            },
            {
              "field": undefined,
              "propertyIdentifier": {
                "apiName": "managerName",
                "type": "property",
              },
              "type": "eq",
              "value": "John",
            },
          ],
        }
      `);
    });

    it("should handle RDP properties in $and clauses", () => {
      const whereClause: WhereClause<typeof mockObjectType, TestRDPs> = {
        $and: [
          { department: "Engineering" },
          { reportCount: { $gte: 5 } },
        ],
      };

      const rdpNames = new Set(["reportCount"]);

      const result = modernToLegacyWhereClause(
        whereClause,
        mockObjectType,
        rdpNames,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": "department",
              "type": "eq",
              "value": "Engineering",
            },
            {
              "field": undefined,
              "propertyIdentifier": {
                "apiName": "reportCount",
                "type": "property",
              },
              "type": "gte",
              "value": 5,
            },
          ],
        }
      `);
    });

    it("should handle complex nested structures with RDP", () => {
      const whereClause: WhereClause<typeof mockObjectType, TestRDPs> = {
        department: "Engineering",
        $and: [
          {
            $or: [
              { status: "active" },
              { reportCount: { $gte: 10 } },
            ],
          },
          {
            managerName: { $ne: "Admin" },
          },
        ],
      };

      const rdpNames = new Set(["reportCount", "managerName"]);

      const result = modernToLegacyWhereClause(
        whereClause,
        mockObjectType,
        rdpNames,
      );

      // The actual structure flattens the nested $and differently
      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": "department",
              "type": "eq",
              "value": "Engineering",
            },
            {
              "type": "and",
              "value": [
                {
                  "type": "or",
                  "value": [
                    {
                      "field": "status",
                      "type": "eq",
                      "value": "active",
                    },
                    {
                      "field": undefined,
                      "propertyIdentifier": {
                        "apiName": "reportCount",
                        "type": "property",
                      },
                      "type": "gte",
                      "value": 10,
                    },
                  ],
                },
                {
                  "type": "not",
                  "value": {
                    "field": undefined,
                    "propertyIdentifier": {
                      "apiName": "managerName",
                      "type": "property",
                    },
                    "type": "eq",
                    "value": "Admin",
                  },
                },
              ],
            },
          ],
        }
      `);
    });
  });

  describe("special properties ($title and $primaryKey)", () => {
    const mockObjectType = {
      type: "object" as const,
      apiName: "Employee",
      __DefinitionMetadata: {
        type: "object" as const,
        apiName: "Employee",
        displayName: "Employee",
        description: undefined,
        properties: {
          employeeId: { type: "integer" as const },
          fullName: { type: "string" as const },
          department: { type: "string" as const },
        },
        rid: "test-rid",
        primaryKeyApiName: "employeeId",
        titleProperty: "fullName",
        links: {},
        primaryKeyType: "integer" as const,
        icon: undefined,
        visibility: undefined,
        pluralDisplayName: "Employees",
        status: undefined,
        interfaceMap: {},
        inverseInterfaceMap: {},
      },
    };

    it("should handle $title with explicit $eq filter", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $title: { $eq: "John" } },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "field": undefined,
          "propertyIdentifier": {
            "type": "titleProperty",
          },
          "type": "eq",
          "value": "John",
        }
      `);
    });

    it("should handle $title with shorthand string value", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $title: "John" },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "field": undefined,
          "propertyIdentifier": {
            "type": "titleProperty",
          },
          "type": "eq",
          "value": "John",
        }
      `);
    });

    it("should handle $primaryKey with $eq filter", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $primaryKey: { $eq: 42 } },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "field": undefined,
          "propertyIdentifier": {
            "type": "primaryKeyProperty",
          },
          "type": "eq",
          "value": 42,
        }
      `);
    });

    it("should handle $primaryKey with $gt filter", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $primaryKey: { $gt: 100 } },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "field": undefined,
          "propertyIdentifier": {
            "type": "primaryKeyProperty",
          },
          "type": "gt",
          "value": 100,
        }
      `);
    });

    it("should handle $title combined with regular property", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $title: { $eq: "John" }, department: "Engineering" },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": undefined,
              "propertyIdentifier": {
                "type": "titleProperty",
              },
              "type": "eq",
              "value": "John",
            },
            {
              "field": "department",
              "type": "eq",
              "value": "Engineering",
            },
          ],
        }
      `);
    });

    it("should handle $title and $primaryKey in $and clause", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        {
          $and: [
            { $title: { $startsWith: "J" } },
            { $primaryKey: { $gt: 10 } },
          ],
        },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "and",
          "value": [
            {
              "field": undefined,
              "propertyIdentifier": {
                "type": "titleProperty",
              },
              "type": "startsWith",
              "value": "J",
            },
            {
              "field": undefined,
              "propertyIdentifier": {
                "type": "primaryKeyProperty",
              },
              "type": "gt",
              "value": 10,
            },
          ],
        }
      `);
    });

    it("should handle $title in $not clause", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $not: { $title: { $eq: "Admin" } } },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "type": "not",
          "value": {
            "field": undefined,
            "propertyIdentifier": {
              "type": "titleProperty",
            },
            "type": "eq",
            "value": "Admin",
          },
        }
      `);
    });

    it("should handle $primaryKey with $in filter", () => {
      const result = modernToLegacyWhereClause<typeof mockObjectType>(
        { $primaryKey: { $in: [1, 2, 3] } },
        mockObjectType,
      );

      expect(result).toMatchInlineSnapshot(`
        {
          "field": undefined,
          "propertyIdentifier": {
            "type": "primaryKeyProperty",
          },
          "type": "in",
          "value": [
            1,
            2,
            3,
          ],
        }
      `);
    });
  });
});
