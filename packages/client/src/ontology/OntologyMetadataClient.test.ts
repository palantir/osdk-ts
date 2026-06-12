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

import { describe, expect, it } from "vitest";
import {
  InterfaceLinkNotResolvableError,
  OntologyMetadataNotFoundError,
} from "./errors/InterfaceLinkErrors.js";
import type { OntologyMetadataSource } from "./OntologyMetadataClient.js";
import { createOntologyMetadataClient } from "./OntologyMetadataClient.js";

const source: OntologyMetadataSource = {
  getInterfaceDefinition: (n) => {
    if (n === "CategoryInterface") {
      return Promise.resolve({
        apiName: n,
        implementedBy: ["Category", "SubCategory"],
      });
    }
    return Promise.reject(new Error("nope"));
  },
  getObjectDefinition: (n) => {
    if (n === "SubCategory") {
      return Promise.resolve({
        apiName: n,
        links: {
          concreteChildren: {
            targetType: "SubCategory",
            multiplicity: true,
          },
        },
        interfaceLinkMap: {
          CategoryInterface: { childCategories: "concreteChildren" },
        },
      });
    }
    return Promise.resolve({ apiName: n, links: {}, interfaceLinkMap: {} });
  },
};

describe("OntologyMetadataClient", () => {
  const md = createOntologyMetadataClient(source, () => Promise.resolve("v1"));

  it("implementationsOf returns concrete types", async () => {
    expect(await md.implementationsOf("CategoryInterface")).toEqual([
      "Category",
      "SubCategory",
    ]);
  });

  it("implements is membership", async () => {
    expect(await md.implements("Category", "CategoryInterface")).toBe(true);
    expect(await md.implements("Group", "CategoryInterface")).toBe(false);
  });

  it("resolveLink maps interface link to concrete link", async () => {
    expect(
      await md.resolveLink("SubCategory", "childCategories"),
    ).toEqual({
      concreteLinkApiName: "concreteChildren",
      targetType: "SubCategory",
      multiplicity: true,
    });
  });

  it("resolveLink throws when not implemented", async () => {
    await expect(md.resolveLink("Group", "childCategories")).rejects
      .toBeInstanceOf(InterfaceLinkNotResolvableError);
  });

  it("implementationsOf throws typed error when interface metadata is missing", async () => {
    await expect(md.implementationsOf("Missing")).rejects.toBeInstanceOf(
      OntologyMetadataNotFoundError,
    );
  });
});
