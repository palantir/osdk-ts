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
  parseLockfile,
  upgradeLockfile,
} from "../parseOntologySchemaLockfile.js";

/**
 * A lockfile is checked in, so every one of these shapes is something an author can hand a build
 * by editing the file or resolving a merge conflict badly. Everything downstream of the parser
 * treats what it returns as well-formed, so each shape has to be rejected with a message that
 * names the file — never a `TypeError` from wherever the bad value is first dereferenced.
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
    migrations: { active: [transition] },
  });

  it("returns a well-formed lockfile unchanged", () => {
    expect(parse(wellFormed)).toStrictEqual(wellFormed);
  });

  it("accepts an interface with no properties and no migrations", () => {
    const empty = withInterface({
      schema: { properties: {} },
      migrations: { active: [] },
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
      /lock\.json is not an interface schema lockfile: expected an integer "version" key/u,
    );
  });

  it("rejects a lockfile from a future version of maker", () => {
    expect(() => parse({ version: 99, interfaces: {} })).toThrowError(
      /lock\.json has version 99, but this version of maker only understands version 1/u,
    );
  });

  it.each([
    ["missing", { version: 1 }],
    // `typeof null === "object"`, so this is the shape a bare `typeof` check would wave through.
    ["null", { version: 1, interfaces: null }],
  ])("rejects `interfaces` being %s", (_name, lockfile) => {
    expect(() => parse(lockfile)).toThrowError(
      /expected an object with an "interfaces" key/u,
    );
  });

  it.each([
    ["missing", { migrations: { active: [] } }],
    ["null", { schema: { properties: null }, migrations: { active: [] } }],
    ["not under `schema`", { properties: {}, migrations: { active: [] } }],
  ])("rejects `schema.properties` being %s", (_name, entry) => {
    expect(() => parse(withInterface(entry))).toThrowError(
      /lock\.json: interface Person is missing `schema\.properties`/u,
    );
  });

  it.each([
    ["missing", { schema: { properties: {} } }],
    ["not an array", { schema: { properties: {} }, migrations: { active: 1 } }],
  ])("rejects `migrations.active` being %s", (_name, entry) => {
    expect(() => parse(withInterface(entry))).toThrowError(
      /lock\.json: interface Person is missing `migrations\.active`/u,
    );
  });

  /** Builds a lockfile whose sole property is `broken`. */
  function withProperty(broken: unknown) {
    return withInterface({
      schema: { properties: { lastName: broken } },
      migrations: { active: [] },
    });
  }

  it.each([
    ["null", null],
    ["an object with no `type`", { required: false }],
    ["an object whose `type` is null", { type: null, required: false }],
  ])("rejects a property that is %s", (_name, broken) => {
    expect(() => parse(withProperty(broken))).toThrowError(
      /lock\.json: interface Person: property "lastName" is missing `type`/u,
    );
  });

  it.each([
    ["absent", { type: "string" }],
    // The schema diff tests `required` for truthiness, so a stringified boolean inverts it.
    ['the string "false"', { type: "string", required: "false" }],
  ])("rejects a property whose `required` is %s", (_name, broken) => {
    expect(() => parse(withProperty(broken))).toThrowError(
      /property "lastName" must declare `required` as a boolean/u,
    );
  });

  /** Builds a lockfile whose sole transition is `wellFormed`'s, overridden by `overrides`. */
  function withTransition(overrides: Record<string, unknown>) {
    return withInterface({
      schema: { properties: { lastName: property } },
      migrations: { active: [{ ...transition, ...overrides }] },
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

/**
 * The upgrade chain is empty while there is only one lockfile version, so it is driven here with
 * stand-in upgraders. The point is that the machinery is in place *before* the first version bump:
 * without it, the only recovery from one is to delete the lockfile, which regenerates a fresh
 * baseline from the working copy and absorbs every breaking change accumulated since.
 */
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
