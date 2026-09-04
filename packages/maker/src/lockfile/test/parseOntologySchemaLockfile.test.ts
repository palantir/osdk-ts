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

/**
 * A lockfile is checked in, so every one of these shapes is something an author can hand a build
 * by editing the file or resolving a merge conflict badly. Everything downstream of the parser
 * treats what it returns as well-formed.
 */
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
      [LOCKFILE_HEADER_KEY]: "I modified it anyway",
      ...wellFormed,
    };
    expect(parse(edited)).toStrictEqual(wellFormed);
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
      /expected an object with an "interfaces" key/u,
    );
  });

  it.each([
    ["missing", { transitions: [] }],
    ["null", { schema: { properties: null }, transitions: [] }],
    ["not under `schema`", { properties: {}, transitions: [] }],
  ])("rejects `schema.properties` being %s", (_name, entry) => {
    expect(() => parse(withInterface(entry))).toThrowError(
      /lock\.json: interface Person is missing `schema\.properties`/u,
    );
  });

  it.each([
    ["missing", { schema: { properties: {} } }],
    ["not an array", { schema: { properties: {} }, transitions: 1 }],
  ])("rejects `transitions` being %s", (_name, entry) => {
    expect(() => parse(withInterface(entry))).toThrowError(
      /lock\.json: interface Person is missing `transitions`/u,
    );
  });

  /** Builds a lockfile whose sole "lastName" property has the given definition. */
  function withPropertyDefinition(definition: unknown) {
    return withInterface({
      schema: { properties: { lastName: definition } },
      transitions: [],
    });
  }

  it.each([
    ["null", null],
    ["an object with no `type`", { required: false }],
    ["an object whose `type` is null", { type: null, required: false }],
  ])("rejects a property that is %s", (_name, broken) => {
    expect(() => parse(withPropertyDefinition(broken))).toThrowError(
      /lock\.json: interface Person: property "lastName" is missing `type`/u,
    );
  });

  it.each([
    ["absent", { type: "string" }],
    ['the string "false"', { type: "string", required: "false" }],
  ])("rejects a property whose `required` is %s", (_name, broken) => {
    expect(() => parse(withPropertyDefinition(broken))).toThrowError(
      /property "lastName" must declare `required` as a boolean/u,
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
      /lock\.json: interface Person records a schema migration with no id/u,
    );
  });

  it.each([
    ["absent", undefined],
    ["null", null],
    ["of an unrecognized kind", { type: "someFutureKind" }],
  ])("rejects a transition whose grace period is %s", (_name, gracePeriod) => {
    expect(() => parse(withTransition({ gracePeriod }))).toThrowError(
      /schema migration "requireLastName" has a grace period of unknown type/u,
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
        /schema migration "requireLastName" has an 'afterInstall' grace period of .*, which is not a number/u,
      );
    },
  );

  it.each([
    ["absent", { type: "deadline" }],
    ["not a string", { type: "deadline", deadline: 20260131 }],
    ["not a datetime", { type: "deadline", deadline: "next Tuesday" }],
  ])(
    "rejects a 'deadline' grace period whose deadline is %s",
    (_name, gracePeriod) => {
      expect(() => parse(withTransition({ gracePeriod }))).toThrowError(
        /schema migration "requireLastName" has a 'deadline' grace period of .*, which is not a valid datetime/u,
      );
    },
  );

  it("accepts a deadline the DSL would reject but a release could have published", () => {
    // The DSL refuses a bare date, but the lockfile records what a previous release published
    // rather than what today's DSL would accept.
    const published = withTransition({
      gracePeriod: { type: "deadline", deadline: "2026-01-31" },
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
        /schema migration "requireLastName" has no instructions/u,
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
      /schema migration "requireLastName" has an instruction of unknown type "renameProperty"/u,
    );
  });
});

describe("upgradeLockfile", () => {
  const v1 = { version: 1, interfaces: {} };

  it("leaves a lockfile already at the target version alone", () => {
    expect(upgradeLockfile(v1, 1, {}, "lock.json")).toBe(v1);
  });

  it("applies each intervening upgrader in ascending order", () => {
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
