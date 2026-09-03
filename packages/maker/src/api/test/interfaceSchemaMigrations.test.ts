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

import invariant from "tiny-invariant";
import { beforeEach, describe, expect, it } from "vitest";

import type { InterfaceTypeDefinition } from "../defineInterface.js";
import { defineInterface } from "../defineInterface.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaTransition,
} from "../interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../interface/InterfaceType.js";

type AuthoredProperty = NonNullable<
  InterfaceTypeDefinition["properties"]
>[string];

const OPTIONAL_STRING: AuthoredProperty = { required: false, type: "string" };

function addRequiredProperty(
  property: string,
): InterfaceSchemaMigrationInstruction {
  return { type: "addRequiredProperty", property };
}

/**
 * `count` distinct instructions, targeting `optional0`..`optional{count-1}`.
 *
 * The instruction kind is incidental — callers outside the addRequiredProperty
 * block only need instructions that survive instruction-level validation.
 */
function distinctInstructions(
  count: number,
): InterfaceSchemaMigrationInstruction[] {
  return Array.from({ length: count }, (_, n) =>
    addRequiredProperty(`optional${n}`),
  );
}

function transition(
  overrides: Partial<InterfaceSchemaTransition> = {},
): InterfaceSchemaTransition {
  return {
    id: "t1",
    title: "Some transition",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions: distinctInstructions(1),
    ...overrides,
  };
}

function distinctTransitions(count: number): InterfaceSchemaTransition[] {
  return distinctInstructions(count).map((instruction, i) =>
    transition({ id: `t${i}`, instructions: [instruction] }),
  );
}

function idOfLength(length: number): string {
  return "t".repeat(length);
}

/**
 * Interface `Foo` carrying `transitions`, declaring every property they target
 * as `required: false`.
 */
function defineWithMigrations(
  transitions: InterfaceSchemaTransition[],
  properties: Record<string, AuthoredProperty> = Object.fromEntries(
    transitions
      .flatMap((t) => t.instructions)
      .map((instruction) => [instruction.property, OPTIONAL_STRING]),
  ),
): InterfaceType {
  return defineInterface({
    apiName: "Foo",
    properties,
    schemaMigrations: { transitions },
  });
}

describe("Interface schema migrations", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, "/tmp/");
  });

  describe("opting in", () => {
    it("carries the authored migrations onto the interface", () => {
      const authored = transition({ description: "some description" });

      expect(defineWithMigrations([authored]).schemaMigrations).toEqual({
        transitions: [authored],
      });
    });

    it("accepts an opted-in but empty transitions array", () => {
      const result = defineInterface({
        apiName: "Foo",
        schemaMigrations: { transitions: [] },
      });
      expect(result.schemaMigrations).toEqual({ transitions: [] });
    });

    it("leaves schemaMigrations undefined when not opted in", () => {
      const result = defineInterface({ apiName: "Foo" });
      expect(result.schemaMigrations).toBeUndefined();
    });

    it("does not register the interface when validation fails", () => {
      expect(() => defineWithMigrations([transition({ title: "" })])).toThrow();

      expect(dumpOntologyFullMetadata().ontology.interfaceTypes).toEqual({});
    });

    it("does not alias the authored migrations", () => {
      const authored = { transitions: [transition()] };

      const result = defineInterface({
        apiName: "Foo",
        properties: { optional0: OPTIONAL_STRING },
        schemaMigrations: authored,
      });
      authored.transitions.push(transition({ id: "sneaked-in" }));

      expect(result.schemaMigrations!.transitions).toHaveLength(1);
    });
  });

  describe("inherited properties", () => {
    it("rejects a transition targeting a property from an extended interface", () => {
      const parent = defineInterface({
        apiName: "Parent",
        properties: { inherited: OPTIONAL_STRING },
      });

      expect(() =>
        defineInterface({
          apiName: "Child",
          extends: parent,
          schemaMigrations: {
            transitions: [
              transition({
                instructions: [addRequiredProperty("inherited")],
              }),
            ],
          },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Child references property "inherited" via addRequiredProperty, but interface com.palantir.Child does not declare that property. Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("accepts the same transition declared on the interface that owns the property", () => {
      expect(() =>
        defineInterface({
          apiName: "Parent",
          properties: { inherited: OPTIONAL_STRING },
          schemaMigrations: {
            transitions: [
              transition({
                instructions: [addRequiredProperty("inherited")],
              }),
            ],
          },
        }),
      ).not.toThrow();
    });
  });

  describe("addRequiredProperty", () => {
    function defineTargeting(property: string, declaration: AuthoredProperty) {
      return () =>
        defineWithMigrations(
          [
            transition({
              instructions: [addRequiredProperty(property)],
            }),
          ],
          { [property]: declaration },
        );
    }

    it("rejects the same instruction repeated across transitions", () => {
      const instruction = addRequiredProperty("optional0");

      expect(() =>
        defineWithMigrations([
          transition({ id: "t1", instructions: [instruction] }),
          transition({ id: "t2", instructions: [instruction] }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t2" on interface com.palantir.Foo repeats the instruction addRequiredProperty("optional0"), which transition "t1" already declares.]`,
      );
    });

    it("accepts an interface-defined property declared required:false", () => {
      expect(
        defineTargeting("opt", { required: false, type: "string" }),
      ).not.toThrow();
    });

    it("rejects a target property that does not exist", () => {
      expect(() =>
        defineWithMigrations(
          [
            transition({
              instructions: [addRequiredProperty("missing")],
            }),
          ],
          {},
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo references property "missing" via addRequiredProperty, but interface com.palantir.Foo does not declare that property. Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("rejects a target property named after an Object.prototype member", () => {
      expect(() =>
        defineWithMigrations(
          [
            transition({
              instructions: [addRequiredProperty("toString")],
            }),
          ],
          {},
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo references property "toString" via addRequiredProperty, but interface com.palantir.Foo does not declare that property. Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("rejects a target property that is required (explicit required:true)", () => {
      expect(
        defineTargeting("req", { required: true, type: "string" }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo targets property "req" via addRequiredProperty, but that property is required. Only properties declared required: false may be targeted.]`,
      );
    });

    it("rejects a target property that is required by default (required omitted)", () => {
      expect(
        defineTargeting("def", { type: "string" }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo targets property "def" via addRequiredProperty, but that property is required. Only properties declared required: false may be targeted.]`,
      );
    });

    it("accepts an SPT-backed property declared required:false", () => {
      const optSpt = defineSharedPropertyType({
        apiName: "optSpt",
        type: "string",
      });

      expect(
        defineTargeting("optSpt", {
          sharedPropertyType: optSpt,
          required: false,
        }),
      ).not.toThrow();
    });

    it("rejects an SPT-backed property declared required:true", () => {
      const reqSpt = defineSharedPropertyType({
        apiName: "reqSpt",
        type: "string",
      });

      expect(
        defineTargeting("reqSpt", {
          sharedPropertyType: reqSpt,
          required: true,
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo targets property "reqSpt" via addRequiredProperty, but that property is required. Only properties declared required: false may be targeted.]`,
      );
    });

    it("rejects a bare SPT, which is required by default", () => {
      const bareSpt = defineSharedPropertyType({
        apiName: "bareSpt",
        type: "string",
      });

      expect(
        defineTargeting("bareSpt", bareSpt),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo targets property "bareSpt" via addRequiredProperty, but that property is required. Only properties declared required: false may be targeted.]`,
      );
    });
  });

  describe("transition ids", () => {
    it("accepts an id at the 150 character limit", () => {
      expect(() =>
        defineWithMigrations([transition({ id: idOfLength(150) })]),
      ).not.toThrow();
    });

    it("accepts letters, digits, underscores, and dashes", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "Add_owner-V2" })]),
      ).not.toThrow();
    });

    it("accepts an id starting with a digit", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "1-add-owner" })]),
      ).not.toThrow();
    });

    it("rejects an empty id", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "" on interface com.palantir.Foo must be between 1 and 150 characters, but was 0.]`,
      );
    });

    it("rejects an id longer than 150 characters", () => {
      expect(() =>
        defineWithMigrations([transition({ id: idOfLength(151) })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt" on interface com.palantir.Foo must be between 1 and 150 characters, but was 151.]`,
      );
    });

    it("rejects an id that does not start with a letter or digit", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "-add-owner" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "-add-owner" on interface com.palantir.Foo must match ^[a-zA-Z0-9][a-zA-Z0-9_-]*$: a letter or digit followed by letters, digits, underscores, or dashes.]`,
      );
    });

    it("rejects an id containing whitespace", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "add owner" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "add owner" on interface com.palantir.Foo must match ^[a-zA-Z0-9][a-zA-Z0-9_-]*$: a letter or digit followed by letters, digits, underscores, or dashes.]`,
      );
    });

    it("rejects an id containing a dot", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "add.owner" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "add.owner" on interface com.palantir.Foo must match ^[a-zA-Z0-9][a-zA-Z0-9_-]*$: a letter or digit followed by letters, digits, underscores, or dashes.]`,
      );
    });

    it("rejects duplicate transition ids", () => {
      const [first, second] = distinctTransitions(2);

      expect(() =>
        defineWithMigrations([
          { ...first, id: "dup" },
          { ...second, id: "dup" },
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Duplicate schema migration transition id "dup" on interface com.palantir.Foo.]`,
      );
    });
  });

  describe("title and description", () => {
    it("accepts a title at the 500 character limit", () => {
      expect(() =>
        defineWithMigrations([transition({ title: "x".repeat(500) })]),
      ).not.toThrow();
    });

    it("rejects an empty title", () => {
      expect(() =>
        defineWithMigrations([transition({ title: "" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo must have a title between 1 and 500 characters, but was 0.]`,
      );
    });

    it("rejects a title longer than 500 characters", () => {
      expect(() =>
        defineWithMigrations([transition({ title: "x".repeat(501) })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo must have a title between 1 and 500 characters, but was 501.]`,
      );
    });

    it("accepts a description at the 2000 character limit", () => {
      expect(() =>
        defineWithMigrations([transition({ description: "x".repeat(2000) })]),
      ).not.toThrow();
    });

    it("rejects a description longer than 2000 characters", () => {
      expect(() =>
        defineWithMigrations([transition({ description: "x".repeat(2001) })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a description of length 2001, which exceeds the maximum of 2000.]`,
      );
    });
  });

  describe("afterInstall grace period bounds", () => {
    it("accepts the lower edge (7 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 7 } }),
        ]),
      ).not.toThrow();
    });

    it("accepts the upper edge (180 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 180 } }),
        ]),
      ).not.toThrow();
    });

    it("rejects below the lower edge (6 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 6 } }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has an 'afterInstall' grace period of 6 days, but days must be an integer in [7, 180] (inclusive).]`,
      );
    });

    it("rejects above the upper edge (181 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 181 } }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has an 'afterInstall' grace period of 181 days, but days must be an integer in [7, 180] (inclusive).]`,
      );
    });

    it("rejects a non-integer number of days", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 30.5 } }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has an 'afterInstall' grace period of 30.5 days, but days must be an integer in [7, 180] (inclusive).]`,
      );
    });
  });

  describe("deadline grace period", () => {
    it("accepts a well-formed deadline", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T00:00:00.000Z",
            },
          }),
        ]),
      ).not.toThrow();
    });

    it("accepts a deadline with zero milliseconds absent", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "2026-01-31T00:00:00Z" },
          }),
        ]),
      ).not.toThrow();
    });

    it("accepts a deadline with non-zero milliseconds", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T12:34:56.789Z",
            },
          }),
        ]),
      ).not.toThrow();
    });

    // Authoring/generation should not depend on when it runs, so an already-elapsed deadline
    // is accepted here and instead gets rejected at installation-time.
    it("accepts a deadline in the past", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2020-06-01T00:00:00.000Z",
            },
          }),
        ]),
      ).not.toThrow();
    });

    it("rejects an invalid date", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "not-a-date" },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "not-a-date", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a non-UTC offset", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T00:00:00.000+05:00",
            },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "2026-01-31T00:00:00.000+05:00", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a date without a time", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "2026-01-31" },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "2026-01-31", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a time without an offset", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T00:00:00",
            },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "2026-01-31T00:00:00", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a locale-formatted date", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "Jan 31 2026" },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "Jan 31 2026", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });
  });

  describe("instruction count bounds", () => {
    it("rejects empty instructions", () => {
      expect(() =>
        defineWithMigrations([transition({ instructions: [] })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo must have at least one instruction.]`,
      );
    });

    it("accepts 500 distinct instructions", () => {
      expect(() =>
        defineWithMigrations([
          transition({ instructions: distinctInstructions(500) }),
        ]),
      ).not.toThrow();
    });

    it("rejects 501 instructions", () => {
      expect(() =>
        defineWithMigrations([
          transition({ instructions: distinctInstructions(501) }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has 501 instructions, which exceeds the maximum of 500.]`,
      );
    });
  });

  describe("conversion to wire block data", () => {
    function blockData() {
      return dumpOntologyFullMetadata().ontology.interfaceTypes[
        "com.palantir.Foo"
      ];
    }

    function transitions() {
      const { schemaMigrations } = blockData();
      invariant(schemaMigrations != null, "expected schema migrations");
      return schemaMigrations.schemaTransitions;
    }

    it("omits the migration block when not opted in", () => {
      defineInterface({ apiName: "Foo" });

      expect(blockData().schemaMigrations).toBeUndefined();
      expect(blockData().interfaceType).not.toHaveProperty(
        "schemaMigrationsEnabled",
      );
    });

    it("sets schemaMigrationsEnabled when opted in with no transitions", () => {
      defineInterface({
        apiName: "Foo",
        schemaMigrations: { transitions: [] },
      });

      expect(blockData().interfaceType.schemaMigrationsEnabled).toBe(true);
      expect(blockData().schemaMigrations).toEqual({
        interfacePropertyTypeRidsToApiNames: {},
        schemaTransitions: {},
      });
    });

    it("keys transitions by their id", () => {
      defineWithMigrations([
        transition({ id: "t0", instructions: [addRequiredProperty("a")] }),
        transition({ id: "t1", instructions: [addRequiredProperty("b")] }),
      ]);

      expect(Object.keys(transitions())).toEqual(["t0", "t1"]);
    });

    it("maps each targeted property to its published api name", () => {
      const spt = defineSharedPropertyType({
        apiName: "ownerSpt",
        type: "string",
      });

      defineInterface({
        apiName: "Foo",
        properties: {
          optional0: OPTIONAL_STRING,
          ownerSpt: { sharedPropertyType: spt, required: false },
        },
        schemaMigrations: {
          transitions: [
            transition({
              instructions: [
                addRequiredProperty("optional0"),
                addRequiredProperty("ownerSpt"),
              ],
            }),
          ],
        },
      });

      expect(
        blockData().schemaMigrations?.interfacePropertyTypeRidsToApiNames,
      ).toEqual({
        optional0: "optional0",
        "com.palantir.ownerSpt": "com.palantir.ownerSpt",
      });
    });

    it("translates an afterInstall transition to daysAfterActivation", () => {
      defineWithMigrations([
        transition({
          id: "add-owner",
          title: "Require owner",
          description: "some description",
          gracePeriod: { type: "afterInstall", days: 30 },
        }),
      ]);

      expect(transitions()).toEqual({
        "add-owner": {
          id: "add-owner",
          title: "Require owner",
          description: "some description",
          gracePeriod: { type: "daysAfterActivation", daysAfterActivation: 30 },
          migrations: [
            {
              type: "addRequiredProperty",
              addRequiredProperty: { propertyTypeRid: "optional0" },
            },
          ],
        },
      });
    });

    it("translates a deadline transition", () => {
      defineWithMigrations([
        transition({
          gracePeriod: { type: "deadline", deadline: "2026-01-31T12:34:56Z" },
        }),
      ]);

      expect(transitions().t1.gracePeriod).toEqual({
        type: "deadline",
        deadline: "2026-01-31T12:34:56Z",
      });
    });

    it("strips zero milliseconds from a deadline", () => {
      defineWithMigrations([
        transition({
          gracePeriod: {
            type: "deadline",
            deadline: "2026-01-31T12:34:56.000Z",
          },
        }),
      ]);

      expect(transitions().t1.gracePeriod).toEqual({
        type: "deadline",
        deadline: "2026-01-31T12:34:56Z",
      });
    });

    it("preserves non-zero milliseconds on a deadline", () => {
      defineWithMigrations([
        transition({
          gracePeriod: {
            type: "deadline",
            deadline: "2026-01-31T12:34:56.789Z",
          },
        }),
      ]);

      expect(transitions().t1.gracePeriod).toEqual({
        type: "deadline",
        deadline: "2026-01-31T12:34:56.789Z",
      });
    });

    it("resolves an SPT-backed property to the shared property type's api name", () => {
      const spt = defineSharedPropertyType({
        apiName: "ownerSpt",
        type: "string",
      });

      defineInterface({
        apiName: "Foo",
        properties: { ownerSpt: { sharedPropertyType: spt, required: false } },
        schemaMigrations: {
          transitions: [
            transition({
              instructions: [addRequiredProperty("ownerSpt")],
            }),
          ],
        },
      });

      expect(transitions().t1.migrations).toEqual([
        {
          type: "addRequiredProperty",
          addRequiredProperty: { propertyTypeRid: "com.palantir.ownerSpt" },
        },
      ]);
    });
  });

  describe("transition count bounds", () => {
    it("accepts 20 transitions", () => {
      expect(() => defineWithMigrations(distinctTransitions(20))).not.toThrow();
    });

    it("rejects 21 transitions", () => {
      expect(() =>
        defineWithMigrations(distinctTransitions(21)),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface com.palantir.Foo has 21 schema migration transitions, which exceeds the maximum of 20.]`,
      );
    });
  });
});
