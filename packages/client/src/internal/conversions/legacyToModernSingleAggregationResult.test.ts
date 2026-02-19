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
import {
  legacyToModernSingleAggregationResult,
  unqualifyPropName,
} from "./legacyToModernSingleAggregationResult.js";

describe("unqualifyPropName", () => {
  describe("interfaces", () => {
    it("removes namespace when it matches interface namespace", () => {
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

      expect(unqualifyPropName("a.prop", T)).toBe("prop");
    });

    it("does not remove namespace when it differs from interface namespace", () => {
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

      expect(unqualifyPropName("b.prop", T)).toBe("b.prop");
    });

    it("does not modify property when interface has no namespace", () => {
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

      expect(unqualifyPropName("prop", T)).toBe("prop");
    });

    it("does not modify property when property has no namespace", () => {
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

      expect(unqualifyPropName("prop", T)).toBe("prop");
    });
  });

  describe("objects", () => {
    it("does not modify property names for objects", () => {
      const T = {
        type: "object",
        apiName: "a.Foo",
      } as const;

      expect(unqualifyPropName("prop", T as ObjectOrInterfaceDefinition))
        .toBe("prop");
      expect(unqualifyPropName("a.prop", T as ObjectOrInterfaceDefinition))
        .toBe("a.prop");
    });
  });
});

describe(legacyToModernSingleAggregationResult, () => {
  describe("api namespaces", () => {
    describe("interfaces", () => {
      it("properly unqualifies namespaced properties in result", () => {
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

        const entry = {
          group: {},
          metrics: [
            { name: "a.prop.max", value: 100 },
            { name: "a.prop.min", value: 5 },
            { name: "count", value: 50 },
          ],
        };

        const r = legacyToModernSingleAggregationResult(entry, T);

        expect(r).toMatchInlineSnapshot(`
          {
            "prop": {
              "max": 100,
              "min": 5,
            },
          }
        `);
      });

      it("properly does not unqualify when namespace differs", () => {
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

        const entry = {
          group: {},
          metrics: [
            { name: "b.prop.max", value: 100 },
          ],
        };

        const r = legacyToModernSingleAggregationResult(entry, T);

        expect(r).toMatchInlineSnapshot(`
          {
            "b.prop": {
              "max": 100,
            },
          }
        `);
      });

      it("properly handles interface with no namespace", () => {
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

        const entry = {
          group: {},
          metrics: [
            { name: "prop.max", value: 100 },
          ],
        };

        const r = legacyToModernSingleAggregationResult(entry, T);

        expect(r).toMatchInlineSnapshot(`
          {
            "prop": {
              "max": 100,
            },
          }
        `);
      });
    });

    describe("objects", () => {
      it("does not modify property names for objects", () => {
        const T = {
          type: "object",
          apiName: "a.Foo",
        } as const;

        const entry = {
          group: {},
          metrics: [
            { name: "prop.max", value: 100 },
          ],
        };

        const r = legacyToModernSingleAggregationResult(
          entry,
          T as ObjectOrInterfaceDefinition,
        );

        expect(r).toMatchInlineSnapshot(`
          {
            "prop": {
              "max": 100,
            },
          }
        `);
      });
    });
  });
});
