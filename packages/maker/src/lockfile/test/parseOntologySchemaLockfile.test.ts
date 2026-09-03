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

import type { OntologySchemaLockfile } from "../OntologySchemaLockfile.js";
import {
  LOCKFILE_HEADER_KEY,
  serializeLockfile,
} from "../OntologySchemaLockfile.js";
import {
  parseLockfile,
  upgradeLockfile,
} from "../parseOntologySchemaLockfile.js";

describe("parseLockfile", () => {
  const property = { type: "string", required: false };
  const transition = {
    id: "requireLastName",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions: [{ type: "addRequiredProperty", property: "lastName" }],
  };

  function parse(lockfile: unknown) {
    return parseLockfile(JSON.stringify(lockfile), "lock.json");
  }

  /** A lockfile whose sole interface entry is `entry`, well-formed or not. */
  function withInterface(entry: unknown) {
    return { version: 1, interfaces: { Person: entry } };
  }

  const wellFormed = withInterface({
    schema: { properties: { lastName: property } },
    transitions: [transition],
  });

  it("returns a well-formed lockfile unchanged", () => {
    expect(parse(wellFormed)).toStrictEqual(wellFormed);
  });

  it("drops the header comment `serializeLockfile` writes", () => {
    const onDisk = serializeLockfile(wellFormed as OntologySchemaLockfile);
    expect(onDisk).toContain(`"${LOCKFILE_HEADER_KEY}"`);
    expect(parseLockfile(onDisk, "lock.json")).toStrictEqual(wellFormed);
  });

  it("drops a header an author has rewritten, rather than preserving it", () => {
    const edited = {
      [LOCKFILE_HEADER_KEY]: "I modified it",
      ...wellFormed,
    };
    expect(parse(edited)).toStrictEqual(wellFormed);
  });

  it("accepts a lockfile that locks no interfaces", () => {
    // What the generator writes once the last interface opts back out of schema migrations.
    const none = { version: 1, interfaces: {} };
    expect(parse(none)).toStrictEqual(none);
  });

  it("accepts an interface with no properties and no transitions", () => {
    const empty = withInterface({
      schema: { properties: {} },
      transitions: [],
    });
    expect(parse(empty)).toStrictEqual(empty);
  });

  it("rejects invalid JSON", () => {
    expect(() => parseLockfile("{ not json", "lock.json")).toThrowError(
      /lock\.json is not valid JSON/u,
    );
  });

  it.each([
    ["a non-integer version", { version: 1.5, interfaces: {} }],
    ["no version at all", { interfaces: {} }],
    ["a non-object", "just a string"],
    ["null", null],
  ])("rejects %s", (_name, lockfile) => {
    expect(() => parse(lockfile)).toThrowError(
      /lock\.json is not an ontology schema lockfile: expected an integer "version" key/u,
    );
  });

  it("rejects a lockfile from a future version of maker", () => {
    expect(() => parse({ version: 99, interfaces: {} })).toThrowError(
      /lock\.json has version 99, but this version of maker only understands version 1/u,
    );
  });

  it.each([
    ["missing", { version: 1 }],
    ["null", { version: 1, interfaces: null }],
  ])("rejects `interfaces` being %s", (_name, lockfile) => {
    expect(() => parse(lockfile)).toThrowError(
      /lock\.json is not a valid ontology schema lockfile:\n {2}interfaces: Expected an object keyed by interface api name/u,
    );
  });

  it("rejects an interface entry that is not an object", () => {
    expect(() => parse(withInterface(null))).toThrowError(
      /interfaces\.Person: Expected an object recording the interface's locked schema and transitions/u,
    );
  });

  it.each([
    ["missing", { transitions: [] }],
    ["not under `schema`", { properties: {}, transitions: [] }],
  ])("rejects `schema` being %s", (_name, entry) => {
    expect(() => parse(withInterface(entry))).toThrowError(
      /interfaces\.Person\.schema: Expected an object with a "properties" key/u,
    );
  });

  it("rejects `schema.properties` being null", () => {
    const entry = { schema: { properties: null }, transitions: [] };
    expect(() => parse(withInterface(entry))).toThrowError(
      /interfaces\.Person\.schema\.properties: Expected an object keyed by property api name/u,
    );
  });

  it.each([
    ["missing", { schema: { properties: {} } }],
    ["not an array", { schema: { properties: {} }, transitions: 1 }],
  ])("rejects `transitions` being %s", (_name, entry) => {
    expect(() => parse(withInterface(entry))).toThrowError(
      /interfaces\.Person\.transitions: Expected an array of in-flight schema migrations/u,
    );
  });

  /** Builds a lockfile whose sole "lastName" property has the given definition. */
  function withPropertyDefinition(definition: unknown) {
    return withInterface({
      schema: { properties: { lastName: definition } },
      transitions: [],
    });
  }

  it("rejects a property that is not an object", () => {
    expect(() => parse(withPropertyDefinition(null))).toThrowError(
      /properties\.lastName: Expected an object recording the property's locked type/u,
    );
  });

  it.each([
    ["absent", { required: false }],
    ["null", { type: null, required: false }],
  ])("rejects a property whose `type` is %s", (_name, broken) => {
    expect(() => parse(withPropertyDefinition(broken))).toThrowError(
      /properties\.lastName\.type: Expected a recorded property type/u,
    );
  });

  it.each([
    ["absent", { type: "string" }],
    ['the string "false"', { type: "string", required: "false" }],
  ])("rejects a property whose `required` is %s", (_name, broken) => {
    expect(() => parse(withPropertyDefinition(broken))).toThrowError(
      /properties\.lastName\.required: Expected a boolean/u,
    );
  });

  /** Builds a lockfile whose sole transition is `wellFormed`'s, overridden by `overrides`. */
  function withTransition(overrides: Record<string, unknown>) {
    return withInterface({
      schema: { properties: { lastName: property } },
      transitions: [{ ...transition, ...overrides }],
    });
  }

  it.each([
    ["null", null],
    ["absent", undefined],
    ["empty", ""],
  ])("rejects a transition whose id is %s", (_name, id) => {
    expect(() => parse(withTransition({ id }))).toThrowError(
      /transitions\[0\]\.id: Expected a non-empty transition id/u,
    );
  });

  it.each([
    ["absent", undefined],
    ["null", null],
    ["of an unrecognized kind", { type: "someFutureKind" }],
  ])("rejects a transition whose grace period is %s", (_name, gracePeriod) => {
    expect(() => parse(withTransition({ gracePeriod }))).toThrowError(
      /transitions\[0\]\.gracePeriod.*Restore the grace period the last published release declared/u,
    );
  });

  it("renders a located, actionable message", () => {
    expect(() =>
      parse(withTransition({ gracePeriod: { type: "someFutureKind" } })),
    ).toThrowError(
      "lock.json is not a valid ontology schema lockfile:\n" +
        "  interfaces.Person.transitions[0].gracePeriod.type: Invalid discriminator value. " +
        "Expected 'afterInstall' | 'deadline'. Restore the grace period the last published " +
        "release declared.",
    );
  });

  it.each([
    ["absent", { type: "afterInstall" }],
    ["null", { type: "afterInstall", days: null }],
    ['the string "30"', { type: "afterInstall", days: "30" }],
  ])(
    "rejects an 'afterInstall' grace period whose days are %s",
    (_name, gracePeriod) => {
      expect(() => parse(withTransition({ gracePeriod }))).toThrowError(
        /gracePeriod\.days: Expected a number of days/u,
      );
    },
  );

  it.each([
    ["absent", { type: "deadline" }],
    ["not a string", { type: "deadline", deadline: 20260131 }],
    ["not a datetime", { type: "deadline", deadline: "next Tuesday" }],
    [
      "non-canonical fractional seconds",
      { type: "deadline", deadline: "2026-01-31T00:00:00.1Z" },
    ],
    ["date-only", { type: "deadline", deadline: "2026-01-31" }],
    [
      "offset from UTC",
      {
        type: "deadline",
        deadline: "2026-01-31T00:00:00+01:00",
      },
    ],
  ])(
    "rejects a 'deadline' grace period whose deadline is %s",
    (_name, gracePeriod) => {
      expect(() => parse(withTransition({ gracePeriod }))).toThrowError(
        /gracePeriod\.deadline: Expected an ISO-8601 UTC datetime/u,
      );
    },
  );

  it.each([
    ["2026-01-31T00:00:00Z"],
    ["2026-01-31T00:00:00.000Z"],
    ["+010000-01-01T00:00:00.000Z"],
  ])("accepts an ISO-8601 UTC deadline of %s", (deadline) => {
    const published = withTransition({
      gracePeriod: { type: "deadline", deadline },
    });
    expect(parse(published)).toStrictEqual(published);
  });

  it.each([
    ["absent", undefined],
    ["empty", []],
    ["not an array", {}],
  ])(
    "rejects a transition whose instructions are %s",
    (_name, instructions) => {
      expect(() => parse(withTransition({ instructions }))).toThrowError(
        /transitions\[0\]\.instructions: Expected a non-empty array of instructions/u,
      );
    },
  );

  it("rejects an instruction of an unrecognized type", () => {
    expect(() =>
      parse(
        withTransition({
          instructions: [{ type: "renameProperty", property: "lastName" }],
        }),
      ),
    ).toThrowError(
      /instructions\[0\]\.type: .*Restore the instruction the last published release declared/u,
    );
  });

  it("rejects an `addRequiredProperty` instruction that names no property", () => {
    expect(() =>
      parse(
        withTransition({
          instructions: [{ type: "addRequiredProperty", property: 5 }],
        }),
      ),
    ).toThrowError(
      /instructions\[0\]\.property: Expected the api name of the property to require/u,
    );
  });

  it("reports every problem at once, rather than one build at a time", () => {
    const badMerge = withInterface({
      schema: { properties: { lastName: { type: "string" } } },
      transitions: [{ ...transition, id: "", instructions: [] }],
    });

    const message = (() => {
      try {
        parse(badMerge);
        return "";
      } catch (e) {
        return (e as Error).message;
      }
    })();

    expect(message).toContain("properties.lastName.required");
    expect(message).toContain("transitions[0].id");
    expect(message).toContain("transitions[0].instructions");
  });

  /**
   * Reconcile decides a lockfile is out of date by comparing it against a freshly generated one, so
   * dropping an unrecognized key here would make a hand-edit compare equal and pass silently.
   */
  it("preserves keys it does not recognize, at every level", () => {
    const handEdited = {
      version: 1,
      handAdded: true,
      interfaces: {
        Person: {
          handAdded: true,
          schema: {
            handAdded: true,
            properties: {
              lastName: { ...property, handAdded: true },
            },
          },
          transitions: [
            {
              ...transition,
              handAdded: true,
              gracePeriod: { type: "afterInstall", days: 30, handAdded: true },
              instructions: [
                {
                  type: "addRequiredProperty",
                  property: "lastName",
                  handAdded: true,
                },
              ],
            },
          ],
        },
      },
    };

    expect(parse(handEdited)).toStrictEqual(handEdited);
  });
});

describe("upgradeLockfile", () => {
  const v1 = { version: 1, interfaces: {} };

  it("leaves a lockfile already at the target version alone", () => {
    expect(upgradeLockfile(v1, 1, {}, "lock.json")).toBe(v1);
  });

  it("applies each upgrader in ascending order", () => {
    const applied: number[] = [];
    const upgraders = {
      1: (lockfile: { version: number }) => {
        applied.push(1);
        return { ...lockfile, version: 2, addedInV2: true };
      },
      2: (lockfile: { version: number }) => {
        applied.push(2);
        return { ...lockfile, version: 3, addedInV3: true };
      },
    };

    expect(upgradeLockfile(v1, 3, upgraders, "lock.json")).toStrictEqual({
      version: 3,
      interfaces: {},
      addedInV2: true,
      addedInV3: true,
    });
    expect(applied).toStrictEqual([1, 2]);
  });

  it("stops at the target version rather than running every upgrader it has", () => {
    const upgraders = {
      1: (lockfile: { version: number }) => ({ ...lockfile, version: 2 }),
      2: () => {
        throw new Error("should not run");
      },
    };

    expect(upgradeLockfile(v1, 2, upgraders, "lock.json")).toStrictEqual({
      version: 2,
      interfaces: {},
    });
  });

  it("explains itself when no upgrader covers the gap", () => {
    expect(() => upgradeLockfile(v1, 2, {}, "lock.json")).toThrowError(
      /lock\.json has version 1, which this version of maker cannot upgrade to version 2/u,
    );
  });
});
