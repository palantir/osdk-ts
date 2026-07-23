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

import { BarInterface } from "@osdk/client.test.ontology";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import { createObjectSet, getWireObjectSet } from "./createObjectSet.js";

const metadata = {
  ontologyRid: "asdf",
};

function makeClient() {
  return createMinimalClient(metadata, "https://foo", () => "");
}

describe("interface-link pivotTo wire shape", () => {
  it("wraps an intersect source in asType so the backend can resolve the interface type", () => {
    const client = makeClient();

    // Mirrors what hydrateObjectSetFromRid produces for a function's interface
    // ObjectSet input: intersect([interfaceBase, reference]).
    const hydratedSource: WireObjectSet = {
      type: "intersect",
      objectSets: [
        { type: "interfaceBase", interfaceType: BarInterface.apiName },
        { type: "reference", reference: "ri.a.b.c.d" },
      ],
    };

    const pivoted = createObjectSet(BarInterface, client, hydratedSource)
      .pivotTo("toFoo");

    expect(getWireObjectSet(pivoted)).toEqual({
      type: "interfaceLinkSearchAround",
      interfaceLink: "toFoo",
      objectSet: {
        type: "asType",
        entityType: BarInterface.apiName,
        objectSet: hydratedSource,
      },
    });

    // The asType wrapper must be resolvable to an interface later, so the
    // narrow-type mapping should be registered (mirrors narrowToType).
    expect(
      client.narrowTypeInterfaceOrObjectMapping[BarInterface.apiName],
    ).toBe("interface");
  });

  it("leaves a non-intersect (interfaceBase) source untouched", () => {
    const client = makeClient();

    // Default source for an interface object set is a plain interfaceBase.
    const pivoted = createObjectSet(BarInterface, client).pivotTo("toFoo");

    expect(getWireObjectSet(pivoted)).toEqual({
      type: "interfaceLinkSearchAround",
      interfaceLink: "toFoo",
      objectSet: {
        type: "interfaceBase",
        interfaceType: BarInterface.apiName,
      },
    });

    // No asType node was emitted, so nothing should have been registered.
    expect(
      client.narrowTypeInterfaceOrObjectMapping[BarInterface.apiName],
    ).toBeUndefined();
  });
});
