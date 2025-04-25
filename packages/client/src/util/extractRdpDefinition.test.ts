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

import type { ObjectMetadata } from "@osdk/api";
import type { ObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import { extractRdpDefinition } from "./extractRdpDefinition.js";

describe("extractRdpDefinition", () => {
  const mockClientCtx = {
    ontologyProvider: {
      getObjectDefinition: (objectType: string) => {
        if (objectType === "BaseType") {
          return {
            links: {
              testLink1: {
                targetType: "SecondType",
                "multiplicity": "many",
              } satisfies ObjectMetadata.Link<any, any>,
            },
          };
        } else if (objectType === "SecondType") {
          return {
            links: {
              testLink2: {
                targetType: "ThirdType",
                "multiplicity": "many",
              } satisfies ObjectMetadata.Link<any, any>,
            },
          };
        } else if (objectType === "ThirdType") {
          return {
            properties: {
              testProperty: {
                type: "attachment",
              } satisfies ObjectMetadata.Property,
            },
          };
        } else {
          throw new Error(`Missing definition for '${objectType}'`);
        }
      },
    } as any,
  } as MinimalClient;

  const objectSetWithRdps: ObjectSet = {
    type: "withProperties",
    objectSet: {
      type: "searchAround",
      objectSet: { type: "base", objectType: "BaseType" },
      link: "testLink1",
    },
    derivedProperties: {
      myRdp: {
        type: "selection",
        objectSet: {
          type: "searchAround",
          objectSet: { type: "methodInput" },
          link: "testLink2",
        },
        operation: { type: "get", selectedPropertyApiName: "testProperty" },
      },
    },
  };

  it("handles 'withProperties' object set type", async () => {
    const result = await extractRdpDefinition(
      mockClientCtx,
      objectSetWithRdps,
    );

    expect(result).toMatchInlineSnapshot(
      `
      {
        "myRdp": {
          "type": "attachment",
        },
      }
    `,
    );
  });

  it("combines definitions from multiple derived properties", async () => {
    const nestedObjectSet: ObjectSet = {
      type: "withProperties",
      objectSet: objectSetWithRdps,
      derivedProperties: {
        rdp1: {
          type: "selection",
          objectSet: {
            type: "searchAround",
            objectSet: { type: "methodInput" },
            link: "testLink2",
          },
          operation: {
            type: "collectList",
            selectedPropertyApiName: "testProperty",
            limit: 100,
          },
        },
        rdp2: {
          type: "selection",
          objectSet: {
            type: "searchAround",
            objectSet: { type: "methodInput" },
            link: "testLink2",
          },
          operation: {
            type: "collectSet",
            selectedPropertyApiName: "testProperty",
            limit: 100,
          },
        },
      },
    };

    const result = await extractRdpDefinition(
      mockClientCtx,
      nestedObjectSet,
    );

    expect(result).toMatchInlineSnapshot(`
      {
        "myRdp": {
          "type": "attachment",
        },
        "rdp1": {
          "type": "attachment",
        },
        "rdp2": {
          "type": "attachment",
        },
      }
    `);
  });

  it("handles `intersection` object set type and nested static and reference object sets", async () => {
    const intersectionObjectSet: ObjectSet = {
      type: "intersect",
      objectSets: [
        {
          type: "searchAround",
          objectSet: { type: "base", objectType: "BaseType" },
          link: "testLink1",
        },
        { type: "static", "objects": ["object1", "object2"] },
        { type: "reference", "reference": "rid.os.1234" },
      ],
    };

    const RdpWithIntersectionBaseObjectSet: ObjectSet = {
      type: "withProperties",
      objectSet: intersectionObjectSet,
      derivedProperties: {
        myRdp: {
          type: "selection",
          objectSet: {
            type: "searchAround",
            objectSet: { type: "methodInput" },
            link: "testLink2",
          },
          operation: {
            type: "get",
            selectedPropertyApiName: "testProperty",
          },
        },
      },
    };

    const result = await extractRdpDefinition(
      mockClientCtx,
      RdpWithIntersectionBaseObjectSet,
    );

    expect(result).toMatchInlineSnapshot(
      `
      {
        "myRdp": {
          "type": "attachment",
        },
      }
    `,
    );
  });

  it("throws with intersect, subtract, or union having nested RDPs", async () => {
    const intersectionObjectSetWithNestedRdps: ObjectSet = {
      type: "intersect",
      objectSets: [objectSetWithRdps, {
        type: "base",
        objectType: "ThirdType",
      }],
    };

    await expect(
      extractRdpDefinition(mockClientCtx, intersectionObjectSetWithNestedRdps),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Object sets combined using intersect, subtract, or union must not contain any derived property definitions]`,
    );
  });

  it("throes with intersect, subtract, or union having different child object types", async () => {
    const intersectionObjectSet: ObjectSet = {
      type: "intersect",
      objectSets: [
        {
          type: "searchAround",
          objectSet: { type: "base", objectType: "BaseType" },
          link: "testLink1",
        },
        { type: "base", objectType: "BaseType" },
      ],
    };

    const RdpWithIntersectionBaseObjectSet: ObjectSet = {
      type: "withProperties",
      objectSet: intersectionObjectSet,
      derivedProperties: {
        myRdp: {
          type: "selection",
          objectSet: {
            type: "searchAround",
            objectSet: { type: "methodInput" },
            link: "testLink2",
          },
          operation: {
            type: "get",
            selectedPropertyApiName: "testProperty",
          },
        },
      },
    };

    await expect(
      extractRdpDefinition(mockClientCtx, RdpWithIntersectionBaseObjectSet),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: All object sets in an intersect, subtract, or union must have the same child object type]`,
    );
  });
});
