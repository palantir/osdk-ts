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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { describe, expect, it } from "vitest";
import { modernToLegacyAggregationClause } from "./modernToLegacyAggregationClause.js";

describe(modernToLegacyAggregationClause, () => {
  describe("api namespaces", () => {
    describe("interfaces", () => {
      it("properly converts shortname to fqApiName for aggregation", () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "prop": { type: "integer" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyAggregationClause({
          "prop:max": "unordered",
          "prop:min": "asc",
          "$count": "desc",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "direction": undefined,
              "field": "a.prop",
              "name": "a.prop.max",
              "type": "max",
            },
            {
              "direction": "ASC",
              "field": "a.prop",
              "name": "a.prop.min",
              "type": "min",
            },
            {
              "direction": "DESC",
              "name": "count",
              "type": "count",
            },
          ]
        `);
      });

      it("properly does not convert when interface has no apiNamespace", () => {
        const T = {
          type: "interface",
          apiName: "Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "prop": { type: "integer" },
            },
            apiName: "Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyAggregationClause({
          "prop:sum": "unordered",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "direction": undefined,
              "field": "prop",
              "name": "prop.sum",
              "type": "sum",
            },
          ]
        `);
      });

      it("gracefully handles redundant apiNamespace in property", () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "a.prop": { type: "integer" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyAggregationClause({
          "a.prop:avg": "unordered",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "direction": undefined,
              "field": "a.prop",
              "name": "a.prop.avg",
              "type": "avg",
            },
          ]
        `);
      });

      it("properly does not convert different apiNamespaces", () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "b.prop": { type: "integer" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyAggregationClause({
          "b.prop:exactDistinct": "unordered",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "direction": undefined,
              "field": "b.prop",
              "name": "b.prop.exactDistinct",
              "type": "exactDistinct",
            },
          ]
        `);
      });
    });

    describe("objects", () => {
      it("does not convert object short property names to fq", () => {
        const T = {
          type: "object",
          apiName: "a.Foo",
        } as const;

        const r = modernToLegacyAggregationClause({
          "prop:approximateDistinct": "unordered",
        }, T as ObjectOrInterfaceDefinition);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "direction": undefined,
              "field": "prop",
              "name": "prop.approximateDistinct",
              "type": "approximateDistinct",
            },
          ]
        `);
      });
    });
  });
});
