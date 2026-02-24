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
import { modernToLegacyGroupByClause } from "./modernToLegacyGroupByClause.js";

describe(modernToLegacyGroupByClause, () => {
  describe("api namespaces", () => {
    describe("interfaces", () => {
      it("properly converts shortname to fqApiName for groupBy", () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "prop": { type: "string" },
              "prop2": { type: "integer" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyGroupByClause({
          prop: "exact",
          prop2: { $exactWithLimit: 10 },
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "field": "a.prop",
              "type": "exact",
            },
            {
              "field": "a.prop2",
              "maxGroupCount": 10,
              "type": "exact",
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
              "prop": { type: "string" },
            },
            apiName: "Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyGroupByClause({
          prop: "exact",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "field": "prop",
              "type": "exact",
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
              "a.prop": { type: "string" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyGroupByClause({
          "a.prop": "exact",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "field": "a.prop",
              "type": "exact",
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
              "b.prop": { type: "string" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyGroupByClause({
          "b.prop": "exact",
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "field": "b.prop",
              "type": "exact",
            },
          ]
        `);
      });

      it("properly converts with $exact options", () => {
        const T = {
          type: "interface",
          apiName: "a.Foo",
          __DefinitionMetadata: {
            type: "interface",
            properties: {
              "prop": { type: "string" },
            },
            apiName: "a.Foo",
            displayName: "",
            links: {},
            rid: "",
            description: undefined,
          },
        } as const satisfies ObjectOrInterfaceDefinition;

        const r = modernToLegacyGroupByClause({
          prop: { $exact: { $limit: 100, $defaultValue: "default" } },
        }, T);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "defaultValue": "default",
              "field": "a.prop",
              "includeNullValues": undefined,
              "maxGroupCount": 100,
              "type": "exact",
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

        const r = modernToLegacyGroupByClause({
          "prop": "exact",
        }, T as ObjectOrInterfaceDefinition);

        expect(r).toMatchInlineSnapshot(`
          [
            {
              "field": "prop",
              "type": "exact",
            },
          ]
        `);
      });
    });
  });
});
