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

import type { PropertyEdit } from "../applyInterfaceSchemaTransition.js";
import {
  applyEdit,
  applyTransition,
  reproduces,
} from "../applyInterfaceSchemaTransition.js";
import type {
  LockedInterfaceSchema,
  LockedProperty,
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
  return reproduces(
    applyTransition(requireLastName, previousSchema, mode),
    source,
  );
}

describe("applyTransition", () => {
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

  describe("addRequiredProperty", () => {
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
  });
});

describe("reproduces", () => {
  it("reproduces a schema that matches every property it asserted", () => {
    const applied = applyTransition(requireLastName, previousSchema, "strict");
    expect(reproduces(applied, sourceSchema({ required: true }))).toBe(true);
  });

  it("does not reproduce a schema that differs on an asserted property", () => {
    const applied = applyTransition(requireLastName, previousSchema, "strict");
    expect(reproduces(applied, sourceSchema({ required: false }))).toBe(false);
  });

  it("ignores properties the application said nothing about", () => {
    const applied = applyTransition(requireLastName, previousSchema, "strict");
    expect(
      reproduces(applied, {
        properties: {
          firstName: { type: "integer", required: false },
          lastName: { type: "string", required: true },
        },
      }),
    ).toBe(true);
  });

  it("does not reproduce anything when the transition was inapplicable", () => {
    expect(reproduces(undefined, previousSchema)).toBe(false);
  });

  it("does not reproduce anything when the application asserted nothing", () => {
    const applied = applyTransition(
      { ...requireLastName, instructions: [] },
      previousSchema,
      "strict",
    );
    expect(applied?.touched).toStrictEqual([]);
    expect(reproduces(applied, previousSchema)).toBe(false);
  });
});

describe("applyEdit", () => {
  const lastName: LockedProperty = { type: "string", required: false };

  function edit(
    properties: Record<string, LockedProperty>,
    op: PropertyEdit,
  ): Record<string, LockedProperty> | "inapplicable" {
    return applyEdit(properties, "lastName", op) ? properties : "inapplicable";
  }

  describe("patch", () => {
    it("adjusts only the attributes it names", () => {
      expect(edit({ lastName }, { op: "patch", required: true })).toStrictEqual(
        { lastName: { type: "string", required: true } },
      );
    });

    it("asserts the property is still there when it names no attribute", () => {
      expect(edit({ lastName }, { op: "patch" })).toStrictEqual({ lastName });
      expect(edit({}, { op: "patch" })).toBe("inapplicable");
    });

    it("cannot patch a property the schema does not record", () => {
      expect(edit({}, { op: "patch", required: true })).toBe("inapplicable");
    });
  });

  describe("add", () => {
    it("introduces a property the schema does not record", () => {
      expect(edit({}, { op: "add", property: lastName })).toStrictEqual({
        lastName,
      });
    });

    it("cannot add a property the schema already records", () => {
      expect(edit({ lastName }, { op: "add", property: lastName })).toBe(
        "inapplicable",
      );
    });
  });

  describe("remove", () => {
    it("retires a property the schema records", () => {
      expect(edit({ lastName }, { op: "remove" })).toStrictEqual({});
    });

    it("cannot remove a property the schema does not record", () => {
      expect(edit({}, { op: "remove" })).toBe("inapplicable");
    });
  });

  describe("api names that collide with Object.prototype", () => {
    it.each(["constructor", "toString", "valueOf", "hasOwnProperty"])(
      "treats an unrecorded %s as absent",
      (propertyApiName) => {
        const properties: Record<string, LockedProperty> = {};

        expect(
          applyEdit(properties, propertyApiName, {
            op: "patch",
            required: true,
          }),
        ).toBe(false);
        expect(applyEdit(properties, propertyApiName, { op: "remove" })).toBe(
          false,
        );

        expect(
          applyEdit(properties, propertyApiName, {
            op: "add",
            property: lastName,
          }),
        ).toBe(true);
        expect(Object.hasOwn(properties, propertyApiName)).toBe(true);
        expect(properties[propertyApiName]).toStrictEqual(lastName);
      },
    );

    it("still records one it has already added", () => {
      const properties: Record<string, LockedProperty> = {};
      applyEdit(properties, "toString", { op: "add", property: lastName });

      expect(
        applyEdit(properties, "toString", { op: "add", property: lastName }),
      ).toBe(false);
      expect(applyEdit(properties, "toString", { op: "remove" })).toBe(true);
      expect(Object.hasOwn(properties, "toString")).toBe(false);
    });
  });
});

describe("deletion vs finalization disambiguation", () => {
  describe("addRequiredProperty", () => {
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
});
