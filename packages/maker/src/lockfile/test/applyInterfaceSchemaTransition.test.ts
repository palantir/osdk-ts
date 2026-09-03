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

import {
  applyTransition,
  schemasAgreeOn,
} from "../applyInterfaceSchemaTransition.js";
import type {
  LockedInterfaceSchema,
  LockedTransition,
} from "../OntologySchemaLockfile.js";

const requireLastName: LockedTransition = {
  id: "requireLastName",
  gracePeriod: { type: "afterInstall", days: 30 },
  instructions: [{ type: "addRequiredProperty", property: "lastName" }],
};

const previousSchema: LockedInterfaceSchema = {
  properties: {
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: false },
  },
};

function sourceSchema(
  lastName: { required: boolean } | "absent",
): LockedInterfaceSchema {
  return {
    properties: {
      firstName: { type: "string", required: true },
      ...(lastName === "absent"
        ? {}
        : {
            lastName: { type: "string" as const, required: lastName.required },
          }),
    },
  };
}

function agreesWithSource(
  mode: "strict" | "lenient",
  source: LockedInterfaceSchema,
): boolean {
  const applied = applyTransition(requireLastName, previousSchema, mode);
  return (
    applied !== undefined &&
    schemasAgreeOn(applied.schema, source, applied.touched)
  );
}

describe("applyTransition", () => {
  it("leaves the target property optional when applied leniently", () => {
    expect(
      applyTransition(requireLastName, previousSchema, "lenient")?.schema,
    ).toStrictEqual(previousSchema);
  });

  it("makes the target property required when applied strictly", () => {
    expect(
      applyTransition(requireLastName, previousSchema, "strict")?.schema,
    ).toStrictEqual(sourceSchema({ required: true }));
  });

  it("reports the properties it changed", () => {
    expect(
      applyTransition(requireLastName, previousSchema, "strict")?.touched,
    ).toStrictEqual(["lastName"]);
  });

  it("is inapplicable to a schema missing the target property", () => {
    const schema: LockedInterfaceSchema = {
      properties: { firstName: { type: "string", required: true } },
    };
    expect(applyTransition(requireLastName, schema, "strict")).toBeUndefined();
    expect(applyTransition(requireLastName, schema, "lenient")).toBeUndefined();
  });

  it("does not mutate the schema it is given", () => {
    applyTransition(requireLastName, previousSchema, "strict");
    expect(previousSchema.properties.lastName.required).toBe(false);
  });

  it("rejects an unrecognized instruction type", () => {
    const bogus = {
      ...requireLastName,
      instructions: [{ type: "renameProperty", property: "lastName" }],
    } as unknown as LockedTransition;
    expect(() => applyTransition(bogus, previousSchema, "strict")).toThrowError(
      /Unknown schema migration instruction type: renameProperty/u,
    );
  });
});

describe("schemasAgreeOn", () => {
  const schema = (
    properties: LockedInterfaceSchema["properties"],
  ): LockedInterfaceSchema => ({ properties });

  it("agrees on a property both schemas record identically", () => {
    expect(schemasAgreeOn(previousSchema, previousSchema, ["lastName"])).toBe(
      true,
    );
  });

  it("disagrees on a property the two schemas record differently", () => {
    expect(
      schemasAgreeOn(previousSchema, sourceSchema({ required: true }), [
        "lastName",
      ]),
    ).toBe(false);
  });

  // The case a removing instruction produces: its strict application deletes the property, and the
  // source that finalized it does not declare it either. Demanding presence would report that
  // agreement as a mismatch.
  it("agrees on a property absent from both schemas", () => {
    expect(schemasAgreeOn(schema({}), schema({}), ["lastName"])).toBe(true);
  });

  it("disagrees on a property present in only one schema", () => {
    const present = schema({ lastName: { type: "string", required: false } });
    expect(schemasAgreeOn(present, schema({}), ["lastName"])).toBe(false);
    expect(schemasAgreeOn(schema({}), present, ["lastName"])).toBe(false);
  });

  it("rejects being asked about no properties at all", () => {
    expect(() =>
      schemasAgreeOn(previousSchema, previousSchema, []),
    ).toThrowError(/requires at least one property to compare/u);
  });
});

describe("deletion vs finalization disambiguation", () => {
  it("reads `required: false` as a deletion", () => {
    const source = sourceSchema({ required: false });
    expect(agreesWithSource("lenient", source)).toBe(true);
    expect(agreesWithSource("strict", source)).toBe(false);
  });

  it("reads `required: true` as a finalization", () => {
    const source = sourceSchema({ required: true });
    expect(agreesWithSource("lenient", source)).toBe(false);
    expect(agreesWithSource("strict", source)).toBe(true);
  });

  it("reads a removed property as neither", () => {
    const source = sourceSchema("absent");
    expect(agreesWithSource("lenient", source)).toBe(false);
    expect(agreesWithSource("strict", source)).toBe(false);
  });

  it("reads a retyped property as neither", () => {
    const source: LockedInterfaceSchema = {
      properties: {
        firstName: { type: "string", required: true },
        lastName: { type: "integer", required: true },
      },
    };
    expect(agreesWithSource("lenient", source)).toBe(false);
    expect(agreesWithSource("strict", source)).toBe(false);
  });
});
