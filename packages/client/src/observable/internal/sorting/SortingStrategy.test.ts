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
import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { describe, expect, it } from "vitest";
import type { DerivedPropertyRuntimeMetadata } from "../../../derivedProperties/derivedPropertyRuntimeMetadata.js";
import type { InterfaceHolder } from "../../../object/convertWireToOsdkObjects/InterfaceHolder.js";
import {
  InterfaceDefRef,
  ObjectDefRef,
} from "../../../object/convertWireToOsdkObjects/InternalSymbols.js";
import type { ObjectHolder } from "../../../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { Canonical } from "../Canonical.js";
import { createOrderBySortFns } from "./SortingStrategy.js";

type Holder = ObjectHolder | InterfaceHolder;

describe("createOrderBySortFns", () => {
  it("sorts decimal properties numerically, not lexicographically", () => {
    const holders = ["10", "9", "100", "2"].map((amount) =>
      objectHolder({ amount }, { amount: "decimal" })
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
      objectHolder({ id }, { id: "long" })
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
      objectHolder({ name }, { name: "string" })
    );

    expect(sort({ name: "asc" }, holders).map((h) => h.name)).toEqual([
      "10",
      "100",
      "9",
    ]);
  });

  it("sorts derived decimal properties (get selection) numerically", () => {
    const holders = ["10", "9", "100"].map((total) => objectHolder({ total }));
    const md = derivedMetadata({ total: { type: "decimal" } });

    expect(sort({ total: "asc" }, holders, md).map((h) => h.total)).toEqual([
      "9",
      "10",
      "100",
    ]);
  });

  it("sorts derived long properties (min/max aggregation) numerically", () => {
    // min/max preserve the aggregated property's type, so a max over a `long`
    // column is captured as `long` and must sort by value, not lexically.
    const holders = ["10", "9", "100"].map((maxScore) =>
      objectHolder({ maxScore })
    );
    const md = derivedMetadata({ maxScore: { type: "long" } });

    expect(sort({ maxScore: "asc" }, holders, md).map((h) => h.maxScore))
      .toEqual([
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
    const md = derivedMetadata({ agg: undefined });

    const numericOnly = ["10", "9", "100"].map((agg) => objectHolder({ agg }));
    expect(sort({ agg: "asc" }, numericOnly, md).map((h) => h.agg)).toEqual([
      "10",
      "100",
      "9",
    ]);

    // Adding a non-numeric sibling does not change the relative order of "10"
    // and "9" -- the ordering is stable under the contents of the page.
    const withNonNumeric = ["10", "9", "x"].map((agg) => objectHolder({ agg }));
    expect(sort({ agg: "asc" }, withNonNumeric, md).map((h) => h.agg)).toEqual([
      "10",
      "9",
      "x",
    ]);
  });

  it("sorts numbers numerically", () => {
    const holders = [10, 9, 100, 2].map((value) =>
      objectHolder({ value }, { value: "integer" })
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
      objectHolder({ amount: "5" }, { amount: "decimal" }),
      objectHolder({ amount: null }, { amount: "decimal" }),
      objectHolder({ amount: "10" }, { amount: "decimal" }),
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
      objectHolder({ amount }, { amount: "decimal" })
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
      interfaceHolder({ amount }, { amount: "decimal" })
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
      interfaceHolder({ amount }, { "a.amount": "decimal" }, "a.IFoo")
    );

    expect(sort({ amount: "asc" }, holders).map((h) => h.amount)).toEqual([
      "9",
      "10",
      "100",
    ]);
  });
});

/**
 * Builds a minimal object holder exposing only what the comparator reads: the
 * property values plus the object metadata used to resolve a regular property's
 * declared type.
 */
function objectHolder(
  values: Record<string, unknown>,
  propertyTypes: Record<string, string> = {},
): ObjectHolder {
  const holder: { [k: string]: unknown } & { [ObjectDefRef]?: unknown } = {
    ...values,
    [ObjectDefRef]: {
      properties: Object.fromEntries(
        Object.entries(propertyTypes).map(([name, type]) => [name, { type }]),
      ),
    },
  };
  return holder as ObjectHolder;
}

/**
 * Builds a minimal interface holder. The interface view exposes a property
 * under its namespace-stripped key (`amount`) while `interfaceProperties` is
 * keyed by the full wire apiName (`a.amount`) -- matching what createOsdkInterface
 * produces -- so the namespace re-qualification path is exercised.
 */
function interfaceHolder(
  values: Record<string, unknown>,
  interfaceProperties: Record<string, string>,
  apiName: string = "IFoo",
): InterfaceHolder {
  const holder: { [k: string]: unknown } & { [InterfaceDefRef]?: unknown } = {
    ...values,
    [InterfaceDefRef]: {
      apiName,
      properties: Object.fromEntries(
        Object.entries(interfaceProperties).map((
          [name, type],
        ) => [name, { type }]),
      ),
    },
  };
  return holder as InterfaceHolder;
}

/**
 * Builds RDP runtime metadata keyed by property name. A `undefined` type models
 * a derived property whose type can't be resolved (e.g. a `sum`/`avg`
 * aggregation, which is delivered as a JS number anyway).
 */
function derivedMetadata(
  types: Record<string, ObjectMetadata.Property | undefined>,
): DerivedPropertyRuntimeMetadata {
  return Object.fromEntries(
    Object.entries(types).map(([name, selectedOrCollectedPropertyType]) => [
      name,
      {
        selectedOrCollectedPropertyType,
        definition: { type: "selection" } as DerivedPropertyDefinition,
      },
    ]),
  );
}

function sort(
  orderBy: Record<string, "asc" | "desc">,
  holders: Holder[],
  derivedPropertyMetadata: DerivedPropertyRuntimeMetadata = {},
): Holder[] {
  const sortFns = createOrderBySortFns(
    orderBy as Canonical<Record<string, "asc" | "desc" | undefined>>,
  );
  return [...holders].sort((a, b) => {
    for (const fn of sortFns) {
      const ret = fn(a, b, derivedPropertyMetadata);
      if (ret !== 0) {
        return ret;
      }
    }
    return 0;
  });
}
