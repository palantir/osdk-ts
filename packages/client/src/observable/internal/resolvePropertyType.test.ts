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
  InterfaceDefRef,
  ObjectDefRef,
  RdpDefRef,
} from "../../object/convertWireToOsdkObjects/InternalSymbols.js";
import {
  isNumericStringType,
  type PropertyTypeSource,
  resolvePropertyType,
} from "./resolvePropertyType.js";

describe(isNumericStringType, () => {
  it("is true for the wire-encoded-as-string numeric types", () => {
    expect(isNumericStringType("decimal")).toBe(true);
    expect(isNumericStringType("long")).toBe(true);
  });

  it("is false for everything else", () => {
    // integer/double/float arrive as JS numbers, so they don't need this path.
    expect(isNumericStringType("integer")).toBe(false);
    expect(isNumericStringType("double")).toBe(false);
    expect(isNumericStringType("string")).toBe(false);
    expect(isNumericStringType("timestamp")).toBe(false);
    expect(isNumericStringType(undefined)).toBe(false);
  });
});

describe(resolvePropertyType, () => {
  it("returns undefined when the holder is missing", () => {
    expect(resolvePropertyType(undefined, "amount")).toBeUndefined();
  });

  it("resolves a regular property from the object metadata", () => {
    const holder: PropertyTypeSource = {
      [ObjectDefRef]: { properties: { amount: { type: "decimal" } } } as any,
    };
    expect(resolvePropertyType(holder, "amount")).toBe("decimal");
  });

  it("resolves a regular property from the interface metadata", () => {
    const holder: PropertyTypeSource = {
      [InterfaceDefRef]: { properties: { amount: { type: "long" } } } as any,
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
      } as any,
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
      } as any,
    };
    expect(resolvePropertyType(holder, "a.amount")).toBe("long");
  });

  it("resolves a derived property from the RDP metadata", () => {
    const holder: PropertyTypeSource = {
      [RdpDefRef]: {
        total: {
          selectedOrCollectedPropertyType: { type: "decimal" },
          definition: { type: "selection" } as any,
        },
      },
    };
    expect(resolvePropertyType(holder, "total")).toBe("decimal");
  });

  it("returns undefined for a derived property without a resolvable type", () => {
    const holder: PropertyTypeSource = {
      [RdpDefRef]: {
        avg: {
          selectedOrCollectedPropertyType: undefined,
          definition: { type: "selection" } as any,
        },
      },
    };
    expect(resolvePropertyType(holder, "avg")).toBeUndefined();
  });

  it("returns undefined for an unknown key", () => {
    const holder: PropertyTypeSource = {
      [ObjectDefRef]: { properties: { amount: { type: "decimal" } } } as any,
    };
    expect(resolvePropertyType(holder, "missing")).toBeUndefined();
  });
});
