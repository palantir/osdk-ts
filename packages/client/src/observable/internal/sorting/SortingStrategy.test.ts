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
import { extractNamespace } from "../../../internal/conversions/extractNamespace.js";
import { createOsdkInterface } from "../../../object/convertWireToOsdkObjects/createOsdkInterface.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  ObjectDefRef,
  RdpDefRef,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import { InterfaceDefinitions } from "../../../ontology/OntologyProvider.js";
import type { Canonical } from "../Canonical.js";
import { createOrderBySortFns } from "./SortingStrategy.js";

describe("createOrderBySortFns", () => {
  it("sorts decimal properties numerically, not lexicographically", () => {
    const holders = ["10", "9", "100", "2"].map((amount) =>
      fakeHolder({ amount }, { propertyTypes: { amount: "decimal" } })
    );

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "2",
      "9",
      "10",
      "100",
    ]);
    expect(sort({ amount: "desc" }, holders).map((h) => h.amount)).toEqual([
      "100",
      "10",
      "9",
      "2",
    ]);
  });

  it("sorts long properties numerically", () => {
    // The value-level precision/edge cases live in compareNumericStrings.test;
    // here we just assert the `long` type routes through numeric comparison.
    const holders = ["10", "9", "100"].map((id) =>
      fakeHolder({ id }, { propertyTypes: { id: "long" } })
    );

    expect(sort({ id: "asc" }, holders).map((h) => h.id)).toEqual([
      "9",
      "10",
      "100",
    ]);
    expect(sort({ id: "desc" }, holders).map((h) => h.id)).toEqual([
      "100",
      "10",
      "9",
    ]);
  });

  it("keeps real string properties lexicographic", () => {
    const holders = ["10", "9", "100"].map((name) =>
      fakeHolder({ name }, { propertyTypes: { name: "string" } })
    );

    expect(sort({ name: "asc" }, holders).map((h) => h.name)).toEqual([
      "10",
      "100",
      "9",
    ]);
  });

  it("sorts derived decimal properties numerically", () => {
    const holders = ["10", "9", "100"].map((total) =>
      fakeHolder({ total }, { derivedTypes: { total: "decimal" } })
    );

    expect(sort({ total: "asc" }, holders).map((h) => h.total)).toEqual([
      "9",
      "10",
      "100",
    ]);
  });

  it("sorts untyped derived properties lexicographically and deterministically", () => {
    // A derived property whose type can't be resolved (no metadata) is NOT
    // guessed-as-numeric from its values: numeric comparison engages only when
    // the property type is known to be decimal/long. So an untyped string-valued
    // derived property stays lexicographic ("10" sorts before "9") regardless of
    // the other values on the page -- a single, page-independent total order.
    const numericOnly = ["10", "9", "100"].map((agg) =>
      fakeHolder({ agg }, { derivedUntyped: ["agg"] })
    );
    expect(sort({ agg: "asc" }, numericOnly).map((h) => h.agg)).toEqual([
      "10",
      "100",
      "9",
    ]);

    // Adding a non-numeric sibling does not change the relative order of "10"
    // and "9" -- the ordering is stable under the contents of the page.
    const withNonNumeric = ["10", "9", "x"].map((agg) =>
      fakeHolder({ agg }, { derivedUntyped: ["agg"] })
    );
    expect(sort({ agg: "asc" }, withNonNumeric).map((h) => h.agg)).toEqual([
      "10",
      "9",
      "x",
    ]);
  });

  it("sorts numbers numerically", () => {
    const holders = [10, 9, 100, 2].map((value) =>
      fakeHolder({ value }, { propertyTypes: { value: "integer" } })
    );

    expect(sort({ value: "asc" }, holders).map((h) => h.value)).toEqual([
      2,
      9,
      10,
      100,
    ]);
  });

  it("sorts nulls last regardless of direction", () => {
    const holders = [
      fakeHolder({ amount: "5" }, { propertyTypes: { amount: "decimal" } }),
      fakeHolder({ amount: null }, { propertyTypes: { amount: "decimal" } }),
      fakeHolder({ amount: "10" }, { propertyTypes: { amount: "decimal" } }),
    ];

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "5",
      "10",
      null,
    ]);
    expect(sort({ amount: "desc" }, holders).map((h) => h.amount)).toEqual([
      "10",
      "5",
      null,
    ]);
  });

  it("sorts empty values first ascending and last descending", () => {
    // Unlike null (always last), an empty/whitespace decimal is treated as the
    // smallest value, so it leads ascending and trails descending -- matching
    // what Workshop shows for a blank cell on a numeric column.
    const holders = ["10", "", "9"].map((amount) =>
      fakeHolder({ amount }, { propertyTypes: { amount: "decimal" } })
    );

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "",
      "9",
      "10",
    ]);
    expect(sort({ amount: "desc" }, holders).map((h) => h.amount)).toEqual([
      "10",
      "9",
      "",
    ]);
  });

  it("sorts interface lists by a regular decimal property numerically", () => {
    const holders = ["10", "9", "100"].map((amount) =>
      fakeInterfaceHolder(amount, "decimal", "regular")
    );

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "9",
      "10",
      "100",
    ]);
  });

  it("sorts interface lists by a derived decimal property numerically", () => {
    // Derived properties used to be dropped entirely from the interface view;
    // now their value and type metadata are carried, so they sort numerically.
    const holders = ["10", "9", "100"].map((amount) =>
      fakeInterfaceHolder(amount, "decimal", "derived")
    );

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "9",
      "10",
      "100",
    ]);
  });

  it("sorts namespaced interface decimal properties numerically", () => {
    // The interface view exposes "a.amount" under the stripped key "amount"
    // while interfaceDef.properties is keyed "a.amount"; type resolution must
    // re-qualify so numeric (not lexicographic) comparison still engages.
    const holders = ["10", "9", "100"].map((amount) =>
      fakeInterfaceHolder(amount, "decimal", "regular", "a.IFoo")
    );

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "9",
      "10",
      "100",
    ]);
  });
});

interface FakeHolderRefs {
  /** Type of a regular property keyed by property name. */
  propertyTypes?: Record<string, unknown>;
  /** Type of a derived (RDP) property keyed by property name. */
  derivedTypes?: Record<string, unknown>;
  /** Derived properties present but without a statically-known type. */
  derivedUntyped?: readonly string[];
}

/**
 * Builds a minimal holder that exposes only what the orderBy comparator reads:
 * the property values plus the metadata symbols used to resolve property types.
 */
function fakeHolder(
  values: Record<string, unknown>,
  refs: FakeHolderRefs = {},
): ObjectHolder {
  const holder: { [k: string]: unknown } & {
    [ObjectDefRef]?: unknown;
    [RdpDefRef]?: unknown;
  } = { ...values };

  if (refs.propertyTypes != null) {
    holder[ObjectDefRef] = {
      properties: Object.fromEntries(
        Object.entries(refs.propertyTypes).map((
          [name, type],
        ) => [name, { type }]),
      ),
    };
  }

  if (refs.derivedTypes != null || refs.derivedUntyped != null) {
    const rdp: Record<string, unknown> = {};
    for (const [name, type] of Object.entries(refs.derivedTypes ?? {})) {
      rdp[name] = { selectedOrCollectedPropertyType: { type } };
    }
    for (const name of refs.derivedUntyped ?? []) {
      rdp[name] = { selectedOrCollectedPropertyType: undefined };
    }
    holder[RdpDefRef] = rdp;
  }

  return holder as ObjectHolder;
}

/**
 * Builds a real interface holder (via createOsdkInterface) over an underlying
 * object with a single `amount` property, so the comparator is exercised
 * against the actual interface view -- including the namespace-stripped keys
 * and the derived-property metadata it now carries.
 *
 * For "regular" the property lives in the interface metadata; for "derived" it
 * lives only in the RDP metadata (as a runtime-derived property would).
 */
function fakeInterfaceHolder(
  amount: unknown,
  type: string,
  kind: "regular" | "derived",
  interfaceApiName: string = "IFoo",
): InterfaceHolder {
  // A namespaced interface property's full apiName carries the interface's
  // namespace; the interface view exposes it under the stripped "amount".
  const [namespace] = extractNamespace(interfaceApiName);
  const ifaceProp = namespace != null ? `${namespace}.amount` : "amount";

  const underlying: Record<string | symbol, unknown> = {
    amount,
    [ObjectDefRef]: {
      [InterfaceDefinitions]: {},
      apiName: "Obj",
      displayName: "",
      interfaceMap: {
        [interfaceApiName]: kind === "regular" ? { [ifaceProp]: "amount" } : {},
      },
      inverseInterfaceMap: {},
      links: {},
      pluralDisplayName: "",
      primaryKeyApiName: "id",
      primaryKeyType: "string",
      properties: { "amount": { type } },
      type: "object",
      titleProperty: "amount",
      rid: "",
      status: "ACTIVE",
      icon: undefined,
      visibility: undefined,
      description: undefined,
    },
  };

  if (kind === "derived") {
    underlying[RdpDefRef] = {
      "amount": {
        selectedOrCollectedPropertyType: { type },
        definition: { type: "selection" },
      },
    };
  }

  return createOsdkInterface(underlying as any, {
    "apiName": interfaceApiName,
    displayName: "",
    links: {},
    properties: kind === "regular" ? { [ifaceProp]: { type } } : {},
    rid: "",
    type: "interface",
    implements: [],
    description: undefined,
  });
}

function sort(
  orderBy: Record<string, "asc" | "desc">,
  holders: Array<ObjectHolder | InterfaceHolder>,
): Array<ObjectHolder | InterfaceHolder> {
  const sortFns = createOrderBySortFns(
    orderBy as Canonical<Record<string, "asc" | "desc" | undefined>>,
  );
  return [...holders].sort((a, b) => {
    for (const fn of sortFns) {
      const ret = fn(a, b);
      if (ret !== 0) {
        return ret;
      }
    }
    return 0;
  });
}
