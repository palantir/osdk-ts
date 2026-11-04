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

import { beforeEach, describe, expect, it } from "vitest";

import { defineCreateObjectAction } from "../defineCreateObjectAction.js";
import { defineInterface } from "../defineInterface.js";
import { defineObject } from "../defineObject.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
describe("SPTs", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  it("doesn't let you create the same spt twice", () => {
    defineSharedPropertyType({
      apiName: "foo",
      type: "string",
    });

    expect(() => {
      defineSharedPropertyType({
        apiName: "foo",
        type: "string",
      });
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Shared property type com.palantir.foo already exists]`,
    );
  });

  it("uses a predefined spt", () => {
    const fooSpt = defineSharedPropertyType({
      apiName: "fooSpt",
      type: "string",
    });

    const FooInterface = defineInterface({
      apiName: "FooInterface",
      displayName: "Foo Interface",
      properties: {
        fooSpt,
      },
      icon: { color: "#00000", locator: "airplane" },
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });

  it("properly serializes both types of struct SPTs", () => {
    const fooSpt = defineSharedPropertyType({
      apiName: "fooSpt",
      type: {
        type: "struct",
        structDefinition: {
          simpleProperty: "boolean",
          complexProperty: {
            fieldType: "date",
            displayMetadata: {
              displayName: "complex property",
              description: undefined,
            },
          },
        },
      },
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });

  it("Custom string fields properly set", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: {
        type: "string",
        isLongText: true,
        supportsEfficientLeadingWildcard: true,
        supportsExactMatching: false,
        supportsPhonetic: true,
      },
    });

    defineInterface({
      apiName: "interface",
      properties: { foo: spt },
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });

  it("Custom decimal fields properly set", () => {
    const spt1 = defineSharedPropertyType({
      apiName: "precision",
      type: {
        type: "decimal",
        precision: 10,
      },
    });
    const spt2 = defineSharedPropertyType({
      apiName: "scale",
      type: {
        type: "decimal",
        scale: 5,
      },
    });

    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });
  it("Vector shared property type properly set", () => {
    defineSharedPropertyType({
      apiName: "embedding",
      type: {
        type: "vector",
        dimension: 768,
        supportsSearchWith: "COSINE_SIMILARITY",
      },
    });

    const spt =
      dumpOntologyFullMetadata().ontology.sharedPropertyTypes[
        "com.palantir.embedding"
      ].sharedPropertyType;
    expect(spt.type).toMatchSnapshot();
    expect(spt.indexedForSearch).toBe(true);
  });

  it("doesn't let you make a vector SPT an array", () => {
    defineSharedPropertyType({
      apiName: "embedding",
      array: true,
      type: {
        type: "vector",
        dimension: 768,
        supportsSearchWith: "COSINE_SIMILARITY",
      },
    });

    expect(() => dumpOntologyFullMetadata()).toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Vector property 'com.palantir.embedding' cannot be an array]`,
    );
  });

  it("Object decimal property with precision/scale works in actions", () => {
    const obj = defineObject({
      apiName: "decimalTest",
      displayName: "Decimal Test",
      pluralDisplayName: "Decimal Tests",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      properties: {
        id: { type: "string" },
        price: {
          type: { type: "decimal", precision: 10, scale: 2 },
        },
      },
    });
    const action = defineCreateObjectAction({ objectType: obj });
    const priceParam = action.parameters?.find((p) => p.id === "price");
    expect(priceParam?.type).toBe("decimal");
  });
  it("Number formatting works", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: "double",
      baseFormatter: {
        type: "number",
        number: {
          type: "base",
          base: {
            maximumFractionDigits: 1,
          },
        },
      },
    });
    expect(dumpOntologyFullMetadata()).toMatchSnapshot();
  });
  it("Aliases properly set", () => {
    const spt = defineSharedPropertyType({
      apiName: "foo",
      type: { type: "string" },
      aliases: ["alias1", "alias2"],
    });
    expect(dumpOntologyFullMetadata().ontology).toMatchSnapshot();
  });

  it("serializes publicProject permission on shared property type", async () => {
    await defineOntology(
      "com.palantir.",
      () => {
        defineSharedPropertyType({
          apiName: "mySpt",
          type: "string",
          permission: "publicProject",
        });

        const bpi =
          dumpOntologyFullMetadata().ontology.blockPermissionInformation!;
        const sptPerms = Object.values(bpi.sharedPropertyTypes);
        expect(sptPerms).toHaveLength(1);
        expect(sptPerms[0].restrictionStatus).toEqual({
          publicProject: true,
          ontologyPackageRid: null,
        });
      },
      undefined,
    );
  });
});
