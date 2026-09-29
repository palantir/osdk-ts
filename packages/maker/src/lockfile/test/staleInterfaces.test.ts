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

import type {
  LockedInterfaceType,
  LockedProperty,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import {
  ONTOLOGY_SCHEMA_LOCKFILE_VERSION,
  staleInterfaces,
} from "../OntologySchemaLockfile.js";

const OPTIONAL_STRING: LockedProperty = { type: "string", required: false };
const REQUIRED_STRING: LockedProperty = { type: "string", required: true };

function lockfile(
  interfaces: Record<string, LockedInterfaceType>,
): OntologySchemaLockfile {
  return { version: ONTOLOGY_SCHEMA_LOCKFILE_VERSION, interfaces };
}

function locked(
  properties: Record<string, LockedProperty>,
): LockedInterfaceType {
  return { schema: { properties }, transitions: [] };
}

const person = locked({ firstName: REQUIRED_STRING });

describe("staleInterfaces", () => {
  it("names an interface the source added", () => {
    expect(staleInterfaces(lockfile({}), lockfile({ Person: person }))).toEqual(
      ["Person"],
    );
  });

  it("names an interface the source removed", () => {
    expect(staleInterfaces(lockfile({ Person: person }), lockfile({}))).toEqual(
      ["Person"],
    );
  });

  it("names an interface whose recorded shape changed", () => {
    expect(
      staleInterfaces(
        lockfile({ Person: locked({ lastName: OPTIONAL_STRING }) }),
        lockfile({ Person: locked({ lastName: REQUIRED_STRING }) }),
      ),
    ).toEqual(["Person"]);
  });

  it("names nothing when the two agree", () => {
    const unchanged = lockfile({ Person: person, Employee: person });
    expect(staleInterfaces(unchanged, unchanged)).toEqual([]);
  });

  it("names each interface once, in api name order", () => {
    expect(
      staleInterfaces(
        lockfile({ Person: person, Employee: person }),
        lockfile({ Person: locked({}), Manager: person }),
      ),
    ).toEqual(["Employee", "Manager", "Person"]);
  });

  describe("an api name that collides with Object.prototype", () => {
    const declaresToString = lockfile({ toString: person });

    it("reads an unchanged interface named toString as unchanged", () => {
      expect(staleInterfaces(declaresToString, declaresToString)).toEqual([]);
    });

    it("names an interface named toString the source removed", () => {
      expect(staleInterfaces(declaresToString, lockfile({}))).toEqual([
        "toString",
      ]);
    });

    it("names an interface named toString the source added", () => {
      expect(staleInterfaces(lockfile({}), declaresToString)).toEqual([
        "toString",
      ]);
    });
  });
});
