/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceMetadata } from "@osdk/api";
import type { ObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import { sanitizeInterfacePropertyNames } from "./sanitizeInterfacePropertyNames.js";

describe("sanitizeInterfacePropertyNames", () => {
  const mockClientCtx = {
    ontologyProvider: {
      getInterfaceDefinition: (interfaceType: string) => {
        if (interfaceType === "com.example.namespace.myInterface") {
          return {
            apiName: "com.example.namespace.myInterface",
            properties: {
              // IDP - no namespace prefix
              myBirthday: "string",
              // SPTs - have namespace prefix
              "com.example.namespace.firstName": "string",
              "com.example.namespace.lastName": "string",

              // SPTS - with different namespace prefix
              "com.other.namespace.myBirthday": "string",
            },
            links: {
              toOtherInterface: {
                targetType: "interface",
                targetTypeApiName: "OtherInterface",
                multiplicity: false,
              } satisfies InterfaceMetadata.Link<any, any>,
            },
          };
        } else if (interfaceType === "OtherInterface") {
          return {
            apiName: "OtherInterface",
            properties: {
              // IDP - no namespace
              otherIdp: "string",
            },
            links: {},
          };
        }
        throw new Error(`Missing definition for '${interfaceType}'`);
      },
    } as any,
  } as MinimalClient;

  describe("filter object sets", () => {
    it("sanitizes namespaced property with IDP in where clause using field", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "com.example.namespace.myBirthday",
          value: "2024-01-01",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "myBirthday",
          value: "2024-01-01",
        },
      });
    });

    it("does not sanitize namespaced property with non-IDP in where clause using field", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "com.example.namespace.firstName",
          value: "John",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "com.example.namespace.firstName",
          value: "John",
        },
      });
    });

    it("sanitizes namespaced property with IDP in where clause using propertyIdentifier", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "property",
            apiName: "com.example.namespace.myBirthday",
          },
          value: "2024-01-01",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "property",
            apiName: "myBirthday",
          },
          value: "2024-01-01",
        },
      });
    });

    it("does not sanitize namespaced property with non-IDP in where clause using propertyIdentifier", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "property",
            apiName: "com.example.namespace.firstName",
          },
          value: "John",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "property",
            apiName: "com.example.namespace.firstName",
          },
          value: "John",
        },
      });
    });

    it("sanitizes propertyIdentifier with structField type", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "structField",
            propertyApiName: "com.example.namespace.myBirthday",
            structFieldApiName: "day",
          },
          value: 15,
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "structField",
            propertyApiName: "myBirthday",
            structFieldApiName: "day",
          },
          value: 15,
        },
      });
    });

    it("sanitizes nested propertyIdentifier with propertyWithLoadLevel type", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "propertyWithLoadLevel",
            propertyIdentifier: {
              type: "property",
              apiName: "com.example.namespace.myBirthday",
            },
            loadLevel: {
              type: "applyReducers",
            },
          },
          value: "2024-01-01",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          propertyIdentifier: {
            type: "propertyWithLoadLevel",
            propertyIdentifier: {
              type: "property",
              apiName: "myBirthday",
            },
            loadLevel: {
              type: "applyReducers",
            },
          },
          value: "2024-01-01",
        },
      });
    });

    it("handles compound 'and' queries", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "and",
          value: [
            {
              type: "eq",
              field: "com.example.namespace.myBirthday",
              value: "2024-01-01",
            },
            {
              type: "eq",
              field: "com.example.namespace.firstName",
              value: "John",
            },
          ],
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "and",
          value: [
            {
              type: "eq",
              field: "myBirthday",
              value: "2024-01-01",
            },
            {
              type: "eq",
              field: "com.example.namespace.firstName",
              value: "John",
            },
          ],
        },
      });
    });

    it("handles compound 'or' queries", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "or",
          value: [
            {
              type: "eq",
              field: "com.example.namespace.myBirthday",
              value: "2024-01-01",
            },
            {
              type: "eq",
              field: "com.example.namespace.firstName",
              value: "John",
            },
          ],
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "or",
          value: [
            {
              type: "eq",
              field: "myBirthday",
              value: "2024-01-01",
            },
            {
              type: "eq",
              field: "com.example.namespace.firstName",
              value: "John",
            },
          ],
        },
      });
    });

    it("handles 'not' queries", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "not",
          value: {
            type: "eq",
            field: "com.example.namespace.myBirthday",
            value: "2024-01-01",
          },
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "not",
          value: {
            type: "eq",
            field: "myBirthday",
            value: "2024-01-01",
          },
        },
      });
    });

    it("handles nested filter object sets", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "filter",
          objectSet: {
            type: "interfaceBase",
            interfaceType: "com.example.namespace.myInterface",
          },
          where: {
            type: "eq",
            field: "com.example.namespace.myBirthday",
            value: "2024-01-01",
          },
        },
        where: {
          type: "eq",
          field: "com.example.namespace.firstName",
          value: "John",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "filter",
          objectSet: {
            type: "interfaceBase",
            interfaceType: "com.example.namespace.myInterface",
          },
          where: {
            type: "eq",
            field: "myBirthday",
            value: "2024-01-01",
          },
        },
        where: {
          type: "eq",
          field: "com.example.namespace.firstName",
          value: "John",
        },
      });
    });

    it("does not sanitize when interface has no namespace", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "simpleProperty",
          value: "value",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "simpleProperty",
          value: "value",
        },
      });
    });

    it("does not sanitize when property has different namespace than interface", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "com.other.namespace.myBirthday",
          value: "value",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "com.example.namespace.myInterface",
        },
        where: {
          type: "eq",
          field: "com.other.namespace.myBirthday",
          value: "value",
        },
      });
    });

    it("handles interface type changes through searchAround and applies correct sanitization at each level", async () => {
      const objectSet: ObjectSet = {
        type: "filter",
        objectSet: {
          type: "searchAround",
          objectSet: {
            type: "filter",
            objectSet: {
              type: "interfaceBase",
              interfaceType: "com.example.namespace.myInterface",
            },
            where: {
              type: "eq",
              field: "com.example.namespace.myBirthday",
              value: "2024-01-01",
            },
          },
          link: "toOtherInterface",
        },
        where: {
          type: "eq",
          field: "otherIdp",
          value: "value",
        },
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "filter",
        objectSet: {
          type: "searchAround",
          objectSet: {
            type: "filter",
            objectSet: {
              type: "interfaceBase",
              interfaceType: "com.example.namespace.myInterface",
            },
            where: {
              type: "eq",
              // Should be sanitized because myBirthday is an IDP in com.example.namespace.myInterface
              field: "myBirthday",
              value: "2024-01-01",
            },
          },
          link: "toOtherInterface",
        },
        where: {
          type: "eq",
          // Should NOT be sanitized because otherIdp is evaluated in context of OtherInterface (no namespace)
          field: "otherIdp",
          value: "value",
        },
      });
    });
  });

  describe("non-filter object sets", () => {
    it("returns base object sets unchanged", async () => {
      const objectSet: ObjectSet = {
        type: "base",
        objectType: "Employee",
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual(objectSet);
    });

    it("returns interfaceBase object sets unchanged", async () => {
      const objectSet: ObjectSet = {
        type: "interfaceBase",
        interfaceType: "com.example.namespace.myInterface",
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual(objectSet);
    });

    it("returns static object sets unchanged", async () => {
      const objectSet: ObjectSet = {
        type: "static",
        objects: ["rid1", "rid2"],
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual(objectSet);
    });

    it("handles searchAround with nested filter", async () => {
      const objectSet: ObjectSet = {
        type: "searchAround",
        objectSet: {
          type: "filter",
          objectSet: {
            type: "interfaceBase",
            interfaceType: "com.example.namespace.myInterface",
          },
          where: {
            type: "eq",
            field: "com.example.namespace.myBirthday",
            value: "2024-01-01",
          },
        },
        link: "someLink",
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "searchAround",
        objectSet: {
          type: "filter",
          objectSet: {
            type: "interfaceBase",
            interfaceType: "com.example.namespace.myInterface",
          },
          where: {
            type: "eq",
            field: "myBirthday",
            value: "2024-01-01",
          },
        },
        link: "someLink",
      });
    });

    it("handles intersect with multiple filters", async () => {
      const objectSet: ObjectSet = {
        type: "intersect",
        objectSets: [
          {
            type: "filter",
            objectSet: {
              type: "interfaceBase",
              interfaceType: "com.example.namespace.myInterface",
            },
            where: {
              type: "eq",
              field: "com.example.namespace.myBirthday",
              value: "2024-01-01",
            },
          },
          {
            type: "filter",
            objectSet: {
              type: "interfaceBase",
              interfaceType: "com.example.namespace.myInterface",
            },
            where: {
              type: "eq",
              field: "com.example.namespace.firstName",
              value: "John",
            },
          },
        ],
      };

      const result = await sanitizeInterfacePropertyNames(
        mockClientCtx,
        objectSet,
      );

      expect(result).toEqual({
        type: "intersect",
        objectSets: [
          {
            type: "filter",
            objectSet: {
              type: "interfaceBase",
              interfaceType: "com.example.namespace.myInterface",
            },
            where: {
              type: "eq",
              field: "myBirthday",
              value: "2024-01-01",
            },
          },
          {
            type: "filter",
            objectSet: {
              type: "interfaceBase",
              interfaceType: "com.example.namespace.myInterface",
            },
            where: {
              type: "eq",
              field: "com.example.namespace.firstName",
              value: "John",
            },
          },
        ],
      });
    });
  });
});
