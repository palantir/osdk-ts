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

import type { TypeClass } from "../../api/common/TypeClass.js";
import type { InterfaceSchemaGracePeriod } from "../../api/interface/InterfaceSchemaMigrations.js";
import type { Nullability } from "../../api/properties/Nullability.js";
import type { SourceCensus } from "../generateOntologySchemaLockfile.js";
import type {
  LockedInterfaceType,
  LockedProperty,
  LockedTransition,
  LockedValueType,
  OntologySchemaLockfile,
} from "../OntologySchemaLockfile.js";
import { ONTOLOGY_SCHEMA_LOCKFILE_VERSION } from "../OntologySchemaLockfile.js";
import type { LockfileValidationResult } from "../validateOntologySchemaLockfile.js";
import { validateOntologySchemaLockfile } from "../validateOntologySchemaLockfile.js";

const OPTIONAL_STRING: LockedProperty = { type: "string", required: false };
const REQUIRED_STRING: LockedProperty = { type: "string", required: true };
const REQUIRED_STRING_LIST: LockedProperty = {
  type: { type: "array", subtype: "string" },
  required: true,
};
const THIRTY_DAYS: InterfaceSchemaGracePeriod = {
  type: "afterInstall",
  days: 30,
};
const SHARED_REQUIRED_STRING: LockedProperty = {
  type: "string",
  required: true,
  declaredBy: "sharedPropertyType",
};
const UNCONSTRAINED: Nullability = {
  noNulls: false,
  noEmptyCollections: false,
};
const SSN: LockedValueType = {
  packageNamespace: "com.example",
  apiName: "Ssn",
};
const EIN: LockedValueType = { ...SSN, apiName: "Ein" };
const SORTABLE: TypeClass = { kind: "render_hint", name: "SORTABLE" };
const SELECTABLE: TypeClass = { kind: "render_hint", name: "SELECTABLE" };

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
      Object.entries(source.interfaces).map(
        ([interfaceApiName, { schema }]) => [interfaceApiName, schema],
      ),
    ),
  };
}

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
      expect(result.breakingChanges).toEqual([]);
      expect(result.checkpoints).toEqual([]);
      expect(result.warnings).toEqual([]);
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
      expect(result.breakingChanges).toEqual([]);
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
      expect(result.breakingChanges).toEqual([]);
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
      expect(
        result.breakingChanges.map((breakingChange) => breakingChange.code),
      ).toEqual(["ambiguousDisappearance"]);
    });

    it("still holds an opted-out interface to the last published schema", () => {
      // Dropping `schemaMigrations` ends checking from the next release on, not from this one.
      const result = validate(
        person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
        lockfile({}),
        optedOut({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyBecameRequired",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("warns that an opted-out interface will stop being checked", () => {
      const result = validate(
        lastNameInFlight,
        lockfile({}),
        optedOut({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.warnings).toEqual([
        { code: "optedOut", interfaceApiName: "Person" },
      ]);
    });

    it("accepts an interface the source no longer declares at all", () => {
      const result = validate(lastNameInFlight, lockfile({}), {
        interfaces: new Map(),
      });
      expect(result.breakingChanges).toEqual([]);
      expect(result.checkpoints).toEqual([]);
      // Deleting the interface is not opting out of checking it; there is nothing left to check.
      expect(result.warnings).toEqual([]);
    });

    it("reports nothing for an unchanged lockfile", () => {
      const result = validate(lastNameInFlight, lastNameInFlight);
      expect(result.breakingChanges).toEqual([]);
      expect(result.checkpoints).toEqual([]);
      expect(result.warnings).toEqual([]);
    });
  });

  describe("a transition disappearing", () => {
    it("reads the target becoming required as a finalization", () => {
      // `lastName` going required is the finalization; it is not also reported as a raw
      // `propertyBecameRequired` break.
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING, lastName: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([]);
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
      expect(result.breakingChanges).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          kind: "deleted",
        },
      ]);
    });

    it("rejects a disappearance that matches neither deletion or finalization", () => {
      // The target was dropped outright, so neither finalizing nor deleting reproduces this schema.
      const result = validate(
        lastNameInFlight,
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.checkpoints).toEqual([]);
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousType: "string",
          nextType: "integer",
        },
      ]);
    });

    it("rejects making a property arrayed", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({ firstName: REQUIRED_STRING_LIST }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousType: "string",
          nextType: { type: "array", subtype: "string" },
        },
      ]);
    });

    it("rejects dropping the arrayedness of a property", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING_LIST }),
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousType: { type: "array", subtype: "string" },
          nextType: "string",
        },
      ]);
    });

    it("rejects retyping the element type of an arrayed property", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING_LIST }),
        person({
          firstName: {
            type: { type: "array", subtype: "integer" },
            required: true,
          },
        }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousType: { type: "array", subtype: "string" },
          nextType: { type: "array", subtype: "integer" },
        },
      ]);
    });

    it("warns, rather than rejects, when a property stops being required", () => {
      const result = validate(
        person({ lastName: REQUIRED_STRING }),
        person({ lastName: OPTIONAL_STRING }),
      );
      expect(result.breakingChanges).toEqual([]);
      expect(result.warnings).toEqual([
        {
          code: "requirementRelaxed",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("does not warn about a property that was removed outright", () => {
      const result = validate(
        person({ lastName: REQUIRED_STRING }),
        person({}),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "propertyRemoved",
      ]);
      expect(result.warnings).toEqual([]);
    });

    it("still warns when a relaxed property also changed type", () => {
      const result = validate(
        person({ lastName: REQUIRED_STRING }),
        person({ lastName: { type: "integer", required: false } }),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "propertyTypeChanged",
      ]);
      expect(result.warnings).toEqual([
        {
          code: "requirementRelaxed",
          interfaceApiName: "Person",
          property: "lastName",
        },
      ]);
    });

    it("still warns when a relaxed property also moved to a shared property type", () => {
      const result = validate(
        person({ lastName: REQUIRED_STRING }),
        person({
          lastName: {
            type: "string",
            required: false,
            declaredBy: "sharedPropertyType",
          },
        }),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "propertyDeclarationChanged",
      ]);
      expect(result.warnings.map(({ code }) => code)).toEqual([
        "requirementRelaxed",
      ]);
    });

    it.each(["MUST_BE_PK", "CANNOT_BE_PK"] as const)(
      "rejects constraining a property to %s",
      (primaryKeyConstraint) => {
        const result = validate(
          person({ id: REQUIRED_STRING }),
          person({ id: { ...REQUIRED_STRING, primaryKeyConstraint } }),
        );
        expect(result.breakingChanges).toEqual([
          {
            code: "primaryKeyConstraintChanged",
            interfaceApiName: "Person",
            property: "id",
            previousConstraint: "NO_RESTRICTION",
            nextConstraint: primaryKeyConstraint,
          },
        ]);
      },
    );

    it("rejects swapping one primary key constraint for the other", () => {
      const result = validate(
        person({
          id: { ...REQUIRED_STRING, primaryKeyConstraint: "MUST_BE_PK" },
        }),
        person({
          id: { ...REQUIRED_STRING, primaryKeyConstraint: "CANNOT_BE_PK" },
        }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "primaryKeyConstraintChanged",
          interfaceApiName: "Person",
          property: "id",
          previousConstraint: "MUST_BE_PK",
          nextConstraint: "CANNOT_BE_PK",
        },
      ]);
    });

    it("warns, rather than rejects, when a constraint is dropped", () => {
      const result = validate(
        person({
          id: { ...REQUIRED_STRING, primaryKeyConstraint: "MUST_BE_PK" },
        }),
        person({ id: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([]);
      expect(result.warnings).toEqual([
        {
          code: "primaryKeyConstraintRelaxed",
          interfaceApiName: "Person",
          property: "id",
          previousConstraint: "MUST_BE_PK",
        },
      ]);
    });

    it.each([
      ["nulls", { noNulls: true, noEmptyCollections: false }],
      ["empty collections", { noNulls: false, noEmptyCollections: true }],
      ["both", { noNulls: true, noEmptyCollections: true }],
    ] as const)("rejects newly forbidding %s", (_name, nullability) => {
      const result = validate(
        person({ name: REQUIRED_STRING }),
        person({ name: { ...REQUIRED_STRING, nullability } }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "nullabilityTightened",
          interfaceApiName: "Person",
          property: "name",
          previousNullability: UNCONSTRAINED,
          nextNullability: nullability,
        },
      ]);
    });

    it("rejects a change that tightens one flag while loosening the other", () => {
      const result = validate(
        person({
          name: {
            ...REQUIRED_STRING,
            nullability: { noNulls: true, noEmptyCollections: false },
          },
        }),
        person({
          name: {
            ...REQUIRED_STRING,
            nullability: { noNulls: false, noEmptyCollections: true },
          },
        }),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "nullabilityTightened",
      ]);
      expect(result.warnings).toEqual([]);
    });

    it("warns, rather than rejects, when a constraint is loosened", () => {
      const previousNullability = { noNulls: true, noEmptyCollections: true };
      const result = validate(
        person({
          name: { ...REQUIRED_STRING, nullability: previousNullability },
        }),
        person({ name: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([]);
      expect(result.warnings).toEqual([
        {
          code: "nullabilityRelaxed",
          interfaceApiName: "Person",
          property: "name",
          previousNullability,
          nextNullability: UNCONSTRAINED,
        },
      ]);
    });

    it("rejects a property newly referencing a value type", () => {
      const result = validate(
        person({ ssn: REQUIRED_STRING }),
        person({ ssn: { ...REQUIRED_STRING, valueType: SSN } }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "valueTypeChanged",
          interfaceApiName: "Person",
          property: "ssn",
          previousValueType: undefined,
          nextValueType: SSN,
        },
      ]);
    });

    it("rejects a property bound to a different value type", () => {
      const result = validate(
        person({ ssn: { ...REQUIRED_STRING, valueType: SSN } }),
        person({ ssn: { ...REQUIRED_STRING, valueType: EIN } }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "valueTypeChanged",
          interfaceApiName: "Person",
          property: "ssn",
          previousValueType: SSN,
          nextValueType: EIN,
        },
      ]);
    });

    it("warns, rather than rejects, when the reference is dropped", () => {
      const result = validate(
        person({ ssn: { ...REQUIRED_STRING, valueType: SSN } }),
        person({ ssn: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([]);
      expect(result.warnings).toEqual([
        {
          code: "valueTypeRemoved",
          interfaceApiName: "Person",
          property: "ssn",
          previousValueType: SSN,
        },
      ]);
    });

    it("rejects replacing an inline property with a shared property type", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({ firstName: SHARED_REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyDeclarationChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousDeclaration: "interface",
          nextDeclaration: "sharedPropertyType",
        },
      ]);
    });

    it("rejects inlining a property a shared property type used to back", () => {
      const result = validate(
        person({ firstName: SHARED_REQUIRED_STRING }),
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyDeclarationChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousDeclaration: "sharedPropertyType",
          nextDeclaration: "interface",
        },
      ]);
    });

    it("reports a swapped binding once, not also as a type change", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({
          firstName: {
            type: "integer",
            required: true,
            declaredBy: "sharedPropertyType",
          },
        }),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "propertyDeclarationChanged",
      ]);
    });

    it("rejects adding a type class to a property", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({ firstName: { ...REQUIRED_STRING, typeClasses: [SORTABLE] } }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeClassesChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousTypeClasses: [],
          nextTypeClasses: [SORTABLE],
        },
      ]);
    });

    it("rejects dropping a type class from a property", () => {
      const result = validate(
        person({ firstName: { ...REQUIRED_STRING, typeClasses: [SORTABLE] } }),
        person({ firstName: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeClassesChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousTypeClasses: [SORTABLE],
          nextTypeClasses: [],
        },
      ]);
    });

    it("rejects swapping one type class for another", () => {
      const result = validate(
        person({ firstName: { ...REQUIRED_STRING, typeClasses: [SORTABLE] } }),
        person({
          firstName: { ...REQUIRED_STRING, typeClasses: [SELECTABLE] },
        }),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "propertyTypeClassesChanged",
          interfaceApiName: "Person",
          property: "firstName",
          previousTypeClasses: [SORTABLE],
          nextTypeClasses: [SELECTABLE],
        },
      ]);
    });

    it("reports a retyped property once, as a type change", () => {
      const result = validate(
        person({ firstName: REQUIRED_STRING }),
        person({
          firstName: {
            type: "integer",
            required: true,
            typeClasses: [SORTABLE],
          },
        }),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "propertyTypeChanged",
      ]);
    });

    it("rejects making an existing property required", () => {
      const result = validate(
        person({ lastName: OPTIONAL_STRING }),
        person({ lastName: REQUIRED_STRING }),
      );
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([]);
    });
  });

  describe("interfaces extended", () => {
    const JUST_FIRST_NAME: Record<string, LockedProperty> = {
      firstName: REQUIRED_STRING,
    };

    /** A single-interface lockfile whose interface extends the given ones. */
    function personExtending(
      extendsInterfaces: string[],
      properties: Record<string, LockedProperty> = JUST_FIRST_NAME,
    ): OntologySchemaLockfile {
      return lockfile({
        Person: {
          schema: {
            properties,
            ...(extendsInterfaces.length > 0 && { extendsInterfaces }),
          },
          transitions: [],
        },
      });
    }

    it("rejects extending a new interface", () => {
      const result = validate(personExtending([]), personExtending(["Named"]));
      expect(result.breakingChanges).toEqual([
        {
          code: "interfaceExtensionAdded",
          interfaceApiName: "Person",
          extendedInterfaceApiName: "Named",
        },
      ]);
    });

    it("warns about no longer extending an interface, rather than rejecting it", () => {
      const result = validate(personExtending(["Named"]), personExtending([]));
      expect(result.breakingChanges).toEqual([]);
      expect(result.warnings).toEqual([
        {
          code: "interfaceExtensionRemoved",
          interfaceApiName: "Person",
          extendedInterfaceApiName: "Named",
        },
      ]);
    });

    it("reports a swapped parent as both a removal and an addition", () => {
      const result = validate(
        personExtending(["Named"]),
        personExtending(["Located"]),
      );
      expect(result.breakingChanges).toEqual([
        {
          code: "interfaceExtensionAdded",
          interfaceApiName: "Person",
          extendedInterfaceApiName: "Located",
        },
      ]);
      expect(result.warnings).toEqual([
        {
          code: "interfaceExtensionRemoved",
          interfaceApiName: "Person",
          extendedInterfaceApiName: "Named",
        },
      ]);
    });

    it("reports one breaking change per parent added", () => {
      const result = validate(
        personExtending([]),
        personExtending(["Located", "Named"]),
      );
      expect(
        result.breakingChanges.map((breakingChange) =>
          breakingChange.code === "interfaceExtensionAdded"
            ? breakingChange.extendedInterfaceApiName
            : breakingChange.code,
        ),
      ).toEqual(["Located", "Named"]);
    });

    it("reports a parent gained alongside the property changes it did not explain", () => {
      const result = validate(
        personExtending([], { firstName: REQUIRED_STRING }),
        personExtending(["Named"], {
          firstName: { type: "integer", required: true },
        }),
      );
      expect(result.breakingChanges.map(({ code }) => code)).toEqual([
        "interfaceExtensionAdded",
        "propertyTypeChanged",
      ]);
    });

    it("accepts an interface that extends nothing before and after", () => {
      expect(
        validate(
          person({ firstName: REQUIRED_STRING }),
          person({
            firstName: REQUIRED_STRING,
          }),
        ).breakingChanges,
      ).toEqual([]);
    });

    it("reports dropping the parent of an interface that opted out", () => {
      // Opting out ends the checking from the next release on, not this one.
      const result = validate(
        personExtending(["Named"]),
        lockfile({}),
        censusOf(personExtending([])),
      );
      expect(result.warnings).toContainEqual({
        code: "interfaceExtensionRemoved",
        interfaceApiName: "Person",
        extendedInterfaceApiName: "Named",
      });
    });
  });

  // Each attribute gets its own detector, and one written to fire unconditionally would still
  // pass every test above. These pin the other half: silence when nothing moved.
  describe("a schema that did not change", () => {
    it.each<{ name: string; unchanged: OntologySchemaLockfile }>([
      {
        name: "an arrayed property",
        unchanged: person({ firstName: REQUIRED_STRING_LIST }),
      },
      {
        name: "an already-optional property",
        unchanged: person({ lastName: OPTIONAL_STRING }),
      },
      {
        name: "a primary key constraint",
        unchanged: person({
          id: { ...REQUIRED_STRING, primaryKeyConstraint: "MUST_BE_PK" },
        }),
      },
      {
        name: "a nullability",
        unchanged: person({
          name: {
            ...REQUIRED_STRING,
            nullability: { noNulls: true, noEmptyCollections: false },
          },
        }),
      },
      {
        name: "a value type reference",
        unchanged: person({ ssn: { ...REQUIRED_STRING, valueType: SSN } }),
      },
      {
        name: "a shared-property-backed property",
        unchanged: person({ firstName: SHARED_REQUIRED_STRING }),
      },
      {
        name: "type classes",
        unchanged: person({
          firstName: { ...REQUIRED_STRING, typeClasses: [SORTABLE] },
        }),
      },
      {
        name: "an extends list",
        unchanged: lockfile({
          Person: {
            schema: {
              properties: { firstName: REQUIRED_STRING },
              extendsInterfaces: ["Located", "Named"],
            },
            transitions: [],
          },
        }),
      },
    ])("reports nothing about $name", ({ unchanged }) => {
      const result = validate(unchanged, unchanged);
      expect(result.breakingChanges).toEqual([]);
      expect(result.warnings).toEqual([]);
    });
  });

  describe("api names that collide with Object.prototype", () => {
    it("reports removing a property named toString as a removal", () => {
      const result = validate(
        person({ toString: OPTIONAL_STRING }),
        person({}),
      );
      expect(result.breakingChanges).toEqual([
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
      expect(result.breakingChanges).toEqual([
        {
          code: "requiredPropertyAdded",
          interfaceApiName: "Person",
          property: "constructor",
        },
      ]);
    });

    it("reads an opted-out interface named toString", () => {
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
      expect(result.breakingChanges).toEqual([]);
      expect(result.checkpoints).toEqual([
        {
          interfaceApiName: "toString",
          transitionId: "requireLastName",
          kind: "finalized",
        },
      ]);
    });
  });

  it("accumulates every breaking change rather than stopping at the first", () => {
    const result = validate(
      person({ firstName: REQUIRED_STRING, lastName: OPTIONAL_STRING }),
      person({ lastName: REQUIRED_STRING, email: REQUIRED_STRING }),
    );
    expect(
      result.breakingChanges.map((breakingChange) => breakingChange.code),
    ).toEqual([
      "propertyRemoved",
      "propertyBecameRequired",
      "requiredPropertyAdded",
    ]);
  });
});
