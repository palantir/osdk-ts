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

import type { InterfaceMetadata, ObjectMetadata } from "@osdk/api";
import type { ObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import type { MinimalClient } from "../MinimalClientContext.js";
import { normalizeInterfaceLinkSearchArounds } from "./normalizeInterfaceLinkSearchArounds.js";

describe("normalizeInterfaceLinkSearchArounds", () => {
  const mockClientCtx = {
    ontologyProvider: {
      getInterfaceDefinition: (interfaceType: string) => {
        if (interfaceType === "TestingTaggableEntity") {
          return {
            type: "interface",
            links: {
              // The link that lands on a concrete object type -- the crux of the bug.
              testingAnnotations: {
                targetType: "object",
                targetTypeApiName: "TestingAnnotation",
                multiplicity: true,
              } satisfies InterfaceMetadata.Link<any, any>,
            },
          };
        } else if (interfaceType === "Transportation") {
          return {
            type: "interface",
            links: {
              toStation: {
                targetType: "interface",
                targetTypeApiName: "Station",
                multiplicity: true,
              } satisfies InterfaceMetadata.Link<any, any>,
            },
          };
        } else if (interfaceType === "Station") {
          return {
            type: "interface",
            links: {
              toCar: {
                targetType: "interface",
                targetTypeApiName: "Vehicle",
                multiplicity: true,
              } satisfies InterfaceMetadata.Link<any, any>,
            },
          };
        }
        throw new Error(`Missing interface definition for '${interfaceType}'`);
      },
      getObjectDefinition: (objectType: string) => {
        if (objectType === "TestingAnnotation") {
          return {
            type: "object",
            links: {
              caseDocument: {
                targetType: "CaseDocument",
                multiplicity: false,
              } satisfies ObjectMetadata.Link<any, any>,
            },
          };
        }
        throw new Error(`Missing object definition for '${objectType}'`);
      },
    } as any,
  } as MinimalClient;

  it("rewrites the second hop when the first interface link lands on an object type", async () => {
    // Exactly what runInterfacesTest3.ts produces today, and what the gateway
    // rejects with Api:UnsupportedObjectSet.
    const buggy: ObjectSet = {
      type: "interfaceLinkSearchAround",
      objectSet: {
        type: "interfaceLinkSearchAround",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "TestingTaggableEntity",
        },
        interfaceLink: "testingAnnotations",
      },
      interfaceLink: "caseDocument",
    };

    expect(
      await normalizeInterfaceLinkSearchArounds(mockClientCtx, buggy),
    ).toEqual({
      type: "searchAround",
      objectSet: {
        type: "interfaceLinkSearchAround",
        objectSet: {
          type: "interfaceBase",
          interfaceType: "TestingTaggableEntity",
        },
        interfaceLink: "testingAnnotations",
      },
      link: "caseDocument",
    });
  });

  it("leaves an all-interface chain untouched, by identity", async () => {
    const allInterfaces: ObjectSet = {
      type: "interfaceLinkSearchAround",
      objectSet: {
        type: "interfaceLinkSearchAround",
        objectSet: { type: "interfaceBase", interfaceType: "Transportation" },
        interfaceLink: "toStation",
      },
      interfaceLink: "toCar",
    };

    const result = await normalizeInterfaceLinkSearchArounds(
      mockClientCtx,
      allInterfaces,
    );

    expect(result).toBe(allInterfaces);
  });

  it("is an identity no-op for object sets with no interface link search around", async () => {
    const plain: ObjectSet = {
      type: "filter",
      objectSet: {
        type: "searchAround",
        objectSet: { type: "base", objectType: "TestingAnnotation" },
        link: "caseDocument",
      },
      where: { type: "eq", field: "name", value: "x" },
    };

    expect(
      await normalizeInterfaceLinkSearchArounds(mockClientCtx, plain),
    ).toBe(plain);
  });

  it("rewrites through intervening containers and rebuilds only that path", async () => {
    const untouchedBranch: ObjectSet = {
      type: "base",
      objectType: "TestingAnnotation",
    };
    const nested: ObjectSet = {
      type: "union",
      objectSets: [
        untouchedBranch,
        {
          type: "filter",
          objectSet: {
            type: "interfaceLinkSearchAround",
            objectSet: {
              type: "interfaceLinkSearchAround",
              objectSet: {
                type: "interfaceBase",
                interfaceType: "TestingTaggableEntity",
              },
              interfaceLink: "testingAnnotations",
            },
            interfaceLink: "caseDocument",
          },
          where: { type: "eq", field: "name", value: "x" },
        },
      ],
    };

    const result = await normalizeInterfaceLinkSearchArounds(
      mockClientCtx,
      nested,
    );

    expect(result).not.toBe(nested);
    // The sibling that needed no rewrite is preserved by identity.
    expect((result as any).objectSets[0]).toBe(untouchedBranch);
    expect((result as any).objectSets[1].objectSet.type).toBe("searchAround");
    expect((result as any).objectSets[1].objectSet.link).toBe("caseDocument");
  });

  it("rewrites inside derived property object sets", async () => {
    const withRdp: ObjectSet = {
      type: "withProperties",
      objectSet: { type: "base", objectType: "TestingAnnotation" },
      derivedProperties: {
        docCount: {
          type: "selection",
          objectSet: {
            type: "interfaceLinkSearchAround",
            objectSet: {
              type: "interfaceLinkSearchAround",
              objectSet: {
                type: "interfaceBase",
                interfaceType: "TestingTaggableEntity",
              },
              interfaceLink: "testingAnnotations",
            },
            interfaceLink: "caseDocument",
          },
          operation: { type: "count" },
        },
      },
    };

    const result = await normalizeInterfaceLinkSearchArounds(
      mockClientCtx,
      withRdp,
    );

    expect((result as any).derivedProperties.docCount.objectSet.type).toBe(
      "searchAround",
    );
  });
});
