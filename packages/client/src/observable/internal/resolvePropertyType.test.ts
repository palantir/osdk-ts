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
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";

import type { DerivedPropertyRuntimeMetadata } from "../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
import {
  isStringEncodedNumericType,
  type PropertyTypeSource,
  resolvePropertyType,
} from "./resolvePropertyType.js";

/**
 * Builds RDP runtime metadata for a single derived property. Only
 * `selectedOrCollectedPropertyType` matters to resolution; `definition` is
 * required by the type but never read here.
 */
function rdpMetadata(
  key: string,
  selectedOrCollectedPropertyType: ObjectMetadata.Property | undefined
): DerivedPropertyRuntimeMetadata {
  return {
    [key]: {
      selectedOrCollectedPropertyType,
      definition: { type: "selection" } as DerivedPropertyDefinition,
    },
  };
}

describe(isStringEncodedNumericType, () => {
  it("is true for the wire-encoded-as-string numeric types", () => {
    expect(isStringEncodedNumericType("decimal")).toBe(true);
    expect(isStringEncodedNumericType("long")).toBe(true);
  });

  it("is false for everything else", () => {
    // integer/double/float arrive as JS numbers, so they don't need this path.
    expect(isStringEncodedNumericType("integer")).toBe(false);
    expect(isStringEncodedNumericType("double")).toBe(false);
    expect(isStringEncodedNumericType("string")).toBe(false);
    expect(isStringEncodedNumericType("timestamp")).toBe(false);
    expect(isStringEncodedNumericType(undefined)).toBe(false);
  });
});

describe(resolvePropertyType, () => {
  it("returns undefined when the holder is missing", () => {
    expect(resolvePropertyType(undefined, "amount")).toBeUndefined();
  });

  it("resolves a regular property from the object metadata", () => {
    const holder: PropertyTypeSource = {
      [ObjectDefRef]: {
        properties: { amount: { type: "decimal" } },
      } as ObjectMetadata,
    };
    expect(resolvePropertyType(holder, "amount")).toBe("decimal");
  });

  it("resolves a regular property from the interface metadata", () => {
    const holder: PropertyTypeSource = {
      [InterfaceDefRef]: {
        properties: { amount: { type: "long" } },
      } as InterfaceMetadata,
    };
    expect(resolvePropertyType(holder, "amount")).toBe("long");
  });

  it("resolves a namespaced interface property by its stripped key", () => {
    // The interface view exposes the property under the namespace-stripped key
    // ("amount"), but interfaceDef.properties is keyed by the full wire apiName
    // ("a.amount"); resolution must re-qualify so numeric comparison engages.
    const holder: PropertyTypeSource = {
      [InterfaceDefRef]: {
        apiName: "a.IFoo",
        properties: { "a.amount": { type: "decimal" } },
      } as InterfaceMetadata,
    };
    expect(resolvePropertyType(holder, "amount")).toBe("decimal");
  });

  it("resolves a mixed-namespace interface property by its full key", () => {
    // When the property namespace differs from the interface namespace the view
    // exposes the full key, which the direct lookup already finds.
    const holder: PropertyTypeSource = {
      [InterfaceDefRef]: {
        apiName: "b.IFoo",
        properties: { "a.amount": { type: "long" } },
      } as InterfaceMetadata,
    };
    expect(resolvePropertyType(holder, "a.amount")).toBe("long");
  });

  it("resolves a derived property from the RDP metadata parameter", () => {
    expect(
      resolvePropertyType(
        {},
        "total",
        rdpMetadata("total", { type: "decimal" })
      )
    ).toBe("decimal");
  });

  it("resolves a derived property even without a holder", () => {
    // Derived-property types live in the metadata, not on the holder, so they
    // resolve regardless of which (object vs interface) holder is passed.
    expect(
      resolvePropertyType(
        undefined,
        "total",
        rdpMetadata("total", { type: "long" })
      )
    ).toBe("long");
  });

  it("returns undefined for a derived property without a resolvable type", () => {
    expect(
      resolvePropertyType({}, "avg", rdpMetadata("avg", undefined))
    ).toBeUndefined();
  });

  it("returns undefined for an unknown key", () => {
    const holder: PropertyTypeSource = {
      [ObjectDefRef]: {
        properties: { amount: { type: "decimal" } },
      } as ObjectMetadata,
    };
    expect(resolvePropertyType(holder, "missing")).toBeUndefined();
  });
});
