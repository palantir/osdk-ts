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

import type { InterfaceSchemaGracePeriod } from "../../api/interface/InterfaceSchemaMigrations.js";
import type { SourceCensus } from "../generateOntologySchemaLockfile.js";
import type {
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import { ONTOLOGY_SCHEMA_LOCKFILE_VERSION } from "../OntologySchemaLockfile.js";
import type { LockfileValidationResult } from "../validateOntologySchemaLockfile.js";
import { validateOntologySchemaLockfile } from "../validateOntologySchemaLockfile.js";

const OPTIONAL_STRING: LockedProperty = { type: "string", required: false };
const REQUIRED_STRING: LockedProperty = { type: "string", required: true };
const THIRTY_DAYS: InterfaceSchemaGracePeriod = {
  type: "afterInstall",
  days: 30,
};

function lockfile(
  interfaces: Record<string, LockedInterfaceType>,
): OntologySchemaLockfile {
  return { version: ONTOLOGY_SCHEMA_LOCKFILE_VERSION, interfaces };
}

/** A single-interface lockfile. */
function person(
  properties: Record<string, LockedProperty>,
  transitions: LockedTransition[] = [],
): OntologySchemaLockfile {
  return lockfile({
    Person: { schema: { properties }, transitions },
  });
}

function requireProperty(id: string, property: string): LockedTransition {
  return {
    id,
    gracePeriod: THIRTY_DAYS,
    instructions: [{ type: "addRequiredProperty", property }],
  };
}

/** A census of exactly the interfaces the given lockfile enrolls. */
function censusOf(source: OntologySchemaLockfile): SourceCensus {
  return {
    interfaces: new Map(
      Object.entries(source.interfaces).map(([apiName, { schema }]) => [
        apiName,
        schema,
      ]),
    ),
  };
}

/**
 * Validates against a source that declares exactly the interfaces it enrolled, which is the
 * uninteresting case for every test not specifically about opting out or removing.
 */
function validate(
  previous: OntologySchemaLockfile,
  next: OntologySchemaLockfile,
  census?: SourceCensus,
): LockfileValidationResult {
  return validateOntologySchemaLockfile(
    previous,
    next,
    census ?? censusOf(next),
  );
}

const requireLastName = requireProperty("requireLastName", "lastName");

/** The state a release that declared `requireLastName` would have left behind. */
const lastNameInFlight = person(
  { firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING },
  [requireLastName],
);

describe("validateOntologySchemaLockfile", () => {
  describe("enrollment", () => {
    it("accepts an interface that has newly opted in", () => {
      const result = validate(
        lockfile({}),
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([]);
    });

    /** A source that still declares `Person` with these properties, but no longer enrolls it. */
    function optedOut(
      properties: Record<string, LockedProperty>,
    ): SourceCensus {
      return censusOf(person(properties));
    }

    it("reads opting out with the target made required as a finalization", () => {
      const result = validate(
        lastNameInFlight,
        lockfile({}),
        optedOut({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          kind: "finalized",
        },
      ]);
    });

    it("reads opting out with the target left optional as a deletion", () => {
      const result = validate(
        lastNameInFlight,
        lockfile({}),
        optedOut({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
      );
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          kind: "deleted",
        },
      ]);
    });

    it("rejects opting out when the schema reads as neither", () => {
      const result = validate(
        lastNameInFlight,
        lockfile({}),
        optedOut({ firstName: REQUIRED_STRING }),
      );
      expect(result.checkpoints).toEqual([]);
      expect(result.findings.map((finding) => finding.code)).toEqual([
        "ambiguousDisappearance",
      ]);
    });

    it("still holds an opted-out interface to the last published schema", () => {
      // Dropping `schemaMigrations` ends checking from the next release on, not from this one.
      const result = validate(
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
        lockfile({}),
        optedOut({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([
        {
          code: "propertyBecameRequired",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("accepts an interface the source no longer declares at all", () => {
      // Removing an interface takes every promise its transitions made with it, so there is
      // nothing left to account for either way.
      const result = validate(lastNameInFlight, lockfile({}), {
        interfaces: new Map(),
      });
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([]);
    });

    it("reports nothing for an unchanged lockfile", () => {
      const result = validate(lastNameInFlight, lastNameInFlight);
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([]);
    });
  });

  describe("a transition disappearing", () => {
    it("reads the target becoming required as a finalization", () => {
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          kind: "finalized",
        },
      ]);
    });

    it("reads the target staying optional as a deletion", () => {
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
      );
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          kind: "deleted",
        },
      ]);
    });

    it("rejects a disappearance that matches neither mode", () => {
      // The target was dropped outright, so neither finalizing nor deleting reproduces this schema.
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.checkpoints).toEqual([]);
      expect(result.findings).toEqual([
        {
          code: "ambiguousDisappearance",
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          targets: [
            {
              propertyApiName: "lastName",
              previous: OPTIONAL_STRING,
              next: undefined,
            },
          ],
          instructions: [{ type: "addRequiredProperty", property: "lastName" }],
        },
      ]);
    });

    it("does not also report the target as a raw schema break", () => {
      // `lastName` going required is the finalization, not a `propertyBecameRequired` finding.
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([]);
    });

    it("reports a transition that touches no property rather than throwing", () => {
      const touchesNothing: LockedTransition = {
        id: "touchesNothing",
        gracePeriod: THIRTY_DAYS,
        instructions: [],
      };
      const result = validate(
        person({ firstName: REQUIRED_STRING }, [touchesNothing]),
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.checkpoints).toEqual([]);
      expect(result.findings).toEqual([
        {
          code: "ambiguousDisappearance",
          interfaceApiName: "Person",
          transitionId: "touchesNothing",
          targets: [],
          instructions: [],
        },
      ]);
    });
  });

  describe("a transition that survives", () => {
    it("rejects changed instructions", () => {
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }, [
          requireProperty("requireLastName", "firstName"),
        ]),
      );
      expect(result.findings).toEqual([
        {
          code: "instructionsChanged",
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          previousInstructions: [
            { type: "addRequiredProperty", property: "lastName" },
          ],
          nextInstructions: [
            { type: "addRequiredProperty", property: "firstName" },
          ],
        },
      ]);
    });
  });

  describe("schema changes with no migration to explain them", () => {
    it("rejects removing a property", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([
        {
          code: "propertyRemoved",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("rejects changing a property's type", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({ firstName: { type: "integer", required: true } }),
      );
      expect(result.findings).toEqual([
        {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousType: "string",
          nextType: "integer",
        },
      ]);
    });

    it("rejects making an existing property required", () => {
      const result = validate(
        person({ lastName: OPTIONAL_STRING }),
        person({ lastName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([
        {
          code: "propertyBecameRequired",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("rejects adding a required property", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([
        {
          code: "requiredPropertyAdded",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("accepts adding an optional property", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
      );
      expect(result.findings).toEqual([]);
    });

    it("accepts relaxing a required property to optional", () => {
      const result = validate(
        person({ lastName: REQUIRED_STRING }),
        person({ lastName: OPTIONAL_STRING }),
      );
      expect(result.findings).toEqual([]);
    });
  });

  describe("api names that collide with Object.prototype", () => {
    // A lockfile is `JSON.parse`d, so a bare index read for one of these finds the inherited
    // function rather than `undefined` and the diff reads the entry as present.

    it("reports removing a property named toString as a removal", () => {
      const result = validate(
        person({ toString: OPTIONAL_STRING }),
        person({}),
      );
      expect(result.findings).toEqual([
        {
          code: "propertyRemoved",
          interfaceApiName: "Person",
          property: "toString",
        },
      ]);
    });

    it("reports adding a required property named constructor", () => {
      const result = validate(
        person({}),
        person({ constructor: REQUIRED_STRING }),
      );
      expect(result.findings).toEqual([
        {
          code: "requiredPropertyAdded",
          interfaceApiName: "Person",
          property: "constructor",
        },
      ]);
    });

    it("reads an opted-out interface named toString", () => {
      // A bare index read would find `Object.prototype.toString` here rather than `undefined`,
      // and so never notice that the source stopped enrolling the interface.
      const result = validate(
        lockfile({
          toString: {
            schema: { properties: { lastName: OPTIONAL_STRING } },
            transitions: [requireLastName],
          },
        }),
        lockfile({}),
        {
          interfaces: new Map([
            ["toString", { properties: { lastName: REQUIRED_STRING } }],
          ]),
        },
      );
      expect(result.findings).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "toString",
          transitionId: "requireLastName",
          kind: "finalized",
        },
      ]);
    });
  });

  it("accumulates every finding rather than stopping at the first", () => {
    const result = validate(
      person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
      person({ lastName: REQUIRED_STRING, email: REQUIRED_STRING }),
    );
    expect(result.findings.map((finding) => finding.code)).toEqual([
      "propertyRemoved",
      "propertyBecameRequired",
      "requiredPropertyAdded",
    ]);
  });
});
