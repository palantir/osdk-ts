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

import { describeLockfileChanges } from "../describeLockfileChanges.js";
import type { SourceCensus } from "../generateOntologySchemaLockfile.js";
import type {
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import { ONTOLOGY_SCHEMA_LOCKFILE_VERSION } from "../OntologySchemaLockfile.js";

const OPTIONAL_STRING: LockedProperty = { type: "string", required: false };
const REQUIRED_STRING: LockedProperty = { type: "string", required: true };

const requireLastName: LockedTransition = {
  id: "requireLastName",
  gracePeriod: { type: "afterInstall", days: 30 },
  instructions: [{ type: "addRequiredProperty", property: "lastName" }],
};

function lockfile(
  interfaces: Record<string, LockedInterfaceType>,
): OntologySchemaLockfile {
  return { version: ONTOLOGY_SCHEMA_LOCKFILE_VERSION, interfaces };
}

function person(
  properties: Record<string, LockedProperty>,
  transitions: LockedTransition[] = [],
): OntologySchemaLockfile {
  return lockfile({ Person: { schema: { properties }, transitions } });
}

/** A source that still declares `Person`, whether or not it still enrolls it. */
const declaresPerson: SourceCensus = {
  interfaces: new Map([["Person", { properties: {} }]]),
};

const declaresNothing: SourceCensus = { interfaces: new Map() };

describe("describeLockfileChanges", () => {
  it("reports nothing when the two agree", () => {
    const unchanged = person({ firstName: REQUIRED_STRING });
    expect(describeLockfileChanges(unchanged, unchanged, declaresPerson)).toBe(
      "",
    );
  });

  it("names an interface that newly opted in", () => {
    expect(
      describeLockfileChanges(
        lockfile({}),
        person({ firstName: REQUIRED_STRING }),
        declaresPerson,
      ),
    ).toBe("+ Person (now opted into schema migrations)");
  });

  it("tells opting back out from deleting the interface", () => {
    const before = person({ firstName: REQUIRED_STRING });
    expect(describeLockfileChanges(before, lockfile({}), declaresPerson)).toBe(
      "- Person (no longer opted into schema migrations)",
    );
    expect(describeLockfileChanges(before, lockfile({}), declaresNothing)).toBe(
      "- Person (interface no longer defined)",
    );
  });

  it("renders added, removed, retyped and re-required properties", () => {
    expect(
      describeLockfileChanges(
        person({ gone: OPTIONAL_STRING, kept: OPTIONAL_STRING }),
        person({ kept: REQUIRED_STRING, added: OPTIONAL_STRING }),
        declaresPerson,
      ),
    ).toBe(
      [
        "Person:",
        `  + property "added" ("string", required: false)`,
        `  - property "gone"`,
        `  ~ property "kept" required false -> true`,
      ].join("\n"),
    );
  });

  it("renders an added migration and an extended grace period", () => {
    expect(
      describeLockfileChanges(
        person({}, []),
        person({}, [requireLastName]),
        declaresPerson,
      ),
    ).toBe(["Person:", '  + migration "requireLastName"'].join("\n"));

    expect(
      describeLockfileChanges(
        person({}, [requireLastName]),
        person({}, [
          {
            ...requireLastName,
            gracePeriod: { type: "afterInstall", days: 60 },
          },
        ]),
        declaresPerson,
      ),
    ).toBe(
      [
        "Person:",
        `  ~ migration "requireLastName" grace period 30 days after install -> 60 days after install`,
      ].join("\n"),
    );
  });
});
