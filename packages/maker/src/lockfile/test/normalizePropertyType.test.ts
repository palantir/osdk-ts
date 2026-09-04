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

import { describe, expect, it } from "vitest";

import type { PropertyTypeType } from "../../api/properties/PropertyTypeType.js";
import type { LockedPropertyType } from "../LockedPropertyType.js";
import { normalizePropertyType } from "../LockedPropertyType.js";

/**
 * `LockedPropertyType` is derived from `PropertyTypeType` by a recursive mapped type, so it could
 * silently degenerate to something permissive — `unknown`, say — and then typecheck everywhere
 * while constraining nothing. These assert that it still both accepts and rejects.
 */

// @ts-expect-error not a property type at all
const _rejectsNonsense: LockedPropertyType = "not-a-property-type";

const _acceptsTheStrippedForm: LockedPropertyType = {
  type: "struct",
  structDefinition: { zip: { fieldType: "string" } },
};

const _rejectsPresentation: LockedPropertyType = {
  type: "struct",
  structDefinition: {
    // @ts-expect-error the recorded form has no display metadata
    zip: { fieldType: "string", displayMetadata: { displayName: "ZIP" } },
  },
};

/** A struct with one field whose display metadata the caller controls. */
function structWithZip(displayMetadata: {
  displayName: string;
  description?: string;
}): PropertyTypeType {
  return {
    type: "struct",
    structDefinition: { zip: { fieldType: "string", displayMetadata } },
  };
}

/** {@link structWithZip} as the lockfile records it. */
const STRIPPED_ZIP = {
  type: "struct",
  structDefinition: { zip: { fieldType: "string" } },
};

describe("normalizePropertyType", () => {
  it.each<PropertyTypeType>([
    "string",
    "integer",
    { type: "string", isLongText: true },
    { type: "decimal", precision: 10, scale: 2 },
    { type: "marking", markingType: "CBAC", markingInputGroupName: "g" },
  ])("leaves %j alone", (type) => {
    expect(normalizePropertyType(type)).toEqual(type);
  });

  it("drops struct field display metadata", () => {
    expect(
      normalizePropertyType(structWithZip({ displayName: "ZIP" })),
    ).toEqual(STRIPPED_ZIP);
  });

  it("makes renaming a struct field's display name a no-op", () => {
    expect(
      normalizePropertyType(
        structWithZip({ displayName: "ZIP", description: "The postal code" }),
      ),
    ).toEqual(
      normalizePropertyType(structWithZip({ displayName: "Postal code" })),
    );
  });

  it("keeps the rest of a struct field intact", () => {
    const normalized = normalizePropertyType({
      type: "struct",
      structDefinition: {
        zip: {
          fieldType: "string",
          displayMetadata: { displayName: "ZIP" },
          typeClasses: [{ kind: "render_hint", name: "SORTABLE" }],
          requireImplementation: true,
        },
      },
    });

    expect(normalized).toEqual({
      type: "struct",
      structDefinition: {
        zip: {
          fieldType: "string",
          typeClasses: [{ kind: "render_hint", name: "SORTABLE" }],
          requireImplementation: true,
        },
      },
    });
  });

  it("leaves a field declared by its type alone untouched", () => {
    const type: PropertyTypeType = {
      type: "struct",
      structDefinition: { street: "string" },
    };
    expect(normalizePropertyType(type)).toEqual(type);
  });

  it("strips at every depth, not just the fields of the outermost struct", () => {
    const normalized = normalizePropertyType({
      type: "struct",
      structDefinition: { street: "string" },
      mainValue: {
        fields: "street",
        type: structWithZip({ displayName: "ZIP" }),
      },
    });

    expect(normalized).toEqual({
      type: "struct",
      structDefinition: { street: "string" },
      mainValue: { fields: "street", type: STRIPPED_ZIP },
    });
  });

  it("drops keys whose value is `undefined`", () => {
    // The lockfile is compared by deep equality against one read back from disk, where an
    // explicit `undefined` cannot survive the round trip. `isDeepStrictEqual` tells a key holding
    // `undefined` from an absent one, so the two would otherwise compare unequal.
    const normalized = normalizePropertyType({
      type: "struct",
      structDefinition: { street: "string" },
      mainValue: undefined,
    });

    expect(Object.keys(normalized)).toEqual(["type", "structDefinition"]);
  });

  it("does not mutate its argument", () => {
    const type = structWithZip({ displayName: "ZIP" });
    normalizePropertyType(type);
    expect(type).toEqual(structWithZip({ displayName: "ZIP" }));
  });
});
