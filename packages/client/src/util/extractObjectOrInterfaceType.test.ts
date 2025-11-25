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

import type { InterfaceMetadata, ObjectMetadata } from "@osdk/api";
import type { ObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import { extractObjectOrInterfaceType } from "./extractObjectOrInterfaceType.js";

describe("extractObjectOrInterfaceType", () => {
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
      getInterfaceDefinition: (interfaceType: string) => {
        if (interfaceType === "interface1") {
          return {
            links: {
              linkToInterface2: {
                targetType: "interface",
                targetTypeApiName: "interface2",
                multiplicity: false,
              } satisfies InterfaceMetadata.Link<any, any>,
            },
          };
        } else if (interfaceType === "interface1") {
          return {
            links: {
              linkToInterface1: {
                targetType: "interface",
                targetTypeApiName: "interface1",
                multiplicity: false,
              } satisfies InterfaceMetadata.Link<any, any>,
            },
          };
        } else {
          throw new Error(`Missing definition for '${interfaceType}'`);
        }
      },
    } as any,
  } as MinimalClient;

  const objectSetInterfaceToInterface: ObjectSet = {
    type: "interfaceLinkSearchAround",
    objectSet: {
      type: "interfaceBase",
      interfaceType: "interface1",
    },
    interfaceLink: "linkToInterface2",
  };

  it("handles 'withProperties' object set type", async () => {
    const result = await extractObjectOrInterfaceType(
      mockClientCtx,
      objectSetInterfaceToInterface,
    );

    expect(result).toEqual({ apiName: "interface2", type: "interface" });
  });

  it("handles `intersection` object set type and nested static and reference object sets", async () => {
    const intersectionObjectSet: ObjectSet = {
      type: "intersect",
      objectSets: [
        {
          type: "interfaceLinkSearchAround",
          objectSet: {
            type: "interfaceBase",
            interfaceType: "interface1",
          },
          interfaceLink: "linkToInterface2",
        },
        { type: "static", "objects": ["object1", "object2"] },
        { type: "reference", "reference": "rid.os.1234" },
      ],
    };

    const result = await extractObjectOrInterfaceType(
      mockClientCtx,
      intersectionObjectSet,
    );

    expect(result).toEqual({ apiName: "interface2", type: "interface" });
  });

  it("throws with intersect, subtract, or union having different child object types", async () => {
    const intersectionObjectSet: ObjectSet = {
      type: "union",
      objectSets: [
        {
          type: "interfaceLinkSearchAround",
          objectSet: {
            type: "interfaceBase",
            interfaceType: "interface1",
          },
          interfaceLink: "linkToInterface2",
        },
        { type: "interfaceBase", interfaceType: "interface1" },
      ],
    };

    await expect(
      extractObjectOrInterfaceType(mockClientCtx, intersectionObjectSet),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Can only have one object type when doing subtract, union]`,
    );
  });

  it("correctly gets the type of the object from narrowToType", async () => {
    const narrowToTypeObjectSet: ObjectSet = {
      type: "asType",
      entityType: "BaseType",
      objectSet: {
        type: "static",
        objects: ["object1", "object2"],
      },
    };

    const result = await extractObjectOrInterfaceType(
      {
        ...mockClientCtx,
        narrowTypeInterfaceOrObjectMapping: { BaseType: "object" },
      },
      narrowToTypeObjectSet,
    );

    expect(result).toEqual({ apiName: "BaseType", type: "object" });
  });
});
