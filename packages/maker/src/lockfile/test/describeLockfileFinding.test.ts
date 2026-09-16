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

import type { InterfaceSchemaMigrationInstruction } from "../../api/interface/InterfaceSchemaMigrations.js";
import {
  describeFinding,
  describeWarning,
} from "../describeLockfileFinding.js";
import type { LockedProperty } from "../OntologySchemaLockfile.js";
import type {
  LockfileFinding,
  TargetPropertyState,
} from "../validateOntologySchemaLockfile.js";

const OPTIONAL_STRING: LockedProperty = { type: "string", required: false };

describe("describeFinding", () => {
  function ambiguous(
    instructions: InterfaceSchemaMigrationInstruction[],
    targets: TargetPropertyState[],
  ): string {
    return describeFinding({
      code: "ambiguousDisappearance",
      interfaceApiName: "Person",
      transitionId: "requireLastName",
      targets,
      instructions,
    });
  }

  it("derives the finalization advice from the instructions", () => {
    expect(
      ambiguous(
        [{ type: "addRequiredProperty", property: "lastName" }],
        [
          {
            propertyApiName: "lastName",
            previous: OPTIONAL_STRING,
            next: undefined,
          },
        ],
      ),
    ).toContain('To finalize it, set "lastName" to `required: true`.');
  });

  it("names every instruction when a transition bundles several", () => {
    expect(
      ambiguous(
        [
          { type: "addRequiredProperty", property: "lastName" },
          { type: "addRequiredProperty", property: "email" },
        ],
        [
          {
            propertyApiName: "lastName",
            previous: OPTIONAL_STRING,
            next: undefined,
          },
          {
            propertyApiName: "email",
            previous: OPTIONAL_STRING,
            next: undefined,
          },
        ],
      ),
    ).toContain(
      'To finalize it, set "lastName" to `required: true`, and set "email" to ' +
        "`required: true`.",
    );
  });

  it("phrases the deletion advice over the target properties", () => {
    expect(
      ambiguous(
        [{ type: "addRequiredProperty", property: "lastName" }],
        [
          {
            propertyApiName: "lastName",
            previous: OPTIONAL_STRING,
            next: undefined,
          },
        ],
      ),
    ).toContain(
      'To delete it, leave "lastName" exactly as the lockfile records it.',
    );
  });

  it("says a transition targeting no property cannot be read either way", () => {
    expect(
      ambiguous([{ type: "addRequiredProperty", property: "x" }], []),
    ).toContain("it targets no property");
  });

  describe("remediation", () => {
    it.each<{ name: string; finding: LockfileFinding; expected: string }>([
      {
        name: "a removed property",
        finding: {
          code: "propertyRemoved",
          interfaceApiName: "Person",
          property: "lastName",
        },
        expected: 'Restore "lastName" to the interface.',
      },
      {
        name: "a newly extended interface",
        finding: {
          code: "interfaceExtensionAdded",
          interfaceApiName: "Person",
          extendedInterfaceApiName: "com.palantir.Named",
        },
        expected:
          'Stop extending "com.palantir.Named"; to require its properties, declare them on the ' +
          "interface itself and phase each one in through a migration.",
      },
      {
        name: "a changed property type",
        finding: {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "lastName",
          previousType: "string",
          nextType: "integer",
        },
        expected:
          'Restore "lastName" to "string"; to publish the new type, declare it as a new property ' +
          "under a different api name.",
      },
      {
        name: "a property that became arrayed",
        finding: {
          code: "propertyTypeChanged",
          interfaceApiName: "Person",
          property: "nicknames",
          previousType: "string",
          nextType: { type: "array", subtype: "string" },
        },
        expected:
          'property "nicknames" changed type from "string" to "string"[]',
      },
      {
        name: "a property handed over to a shared property type",
        finding: {
          code: "propertyDeclarationChanged",
          interfaceApiName: "Person",
          property: "lastName",
          previousDeclaration: "interface",
          nextDeclaration: "sharedPropertyType",
        },
        expected:
          'property "lastName" moved from defined on the interface to backed by a shared ' +
          "property type",
      },
      {
        name: "a property taken back from a shared property type",
        finding: {
          code: "propertyDeclarationChanged",
          interfaceApiName: "Person",
          property: "lastName",
          previousDeclaration: "sharedPropertyType",
          nextDeclaration: "interface",
        },
        expected: 'Declare "lastName" backed by a shared property type again.',
      },
      {
        name: "a property whose shared property type moved namespace",
        finding: {
          code: "propertyNamespaceChanged",
          interfaceApiName: "Person",
          previousApiName: "com.palantir.lastName",
          nextApiName: "com.example.lastName",
        },
        expected:
          'property "lastName" is now backed by shared property type ' +
          '"com.example.lastName" rather than "com.palantir.lastName"',
      },
      {
        name: "restoring a shared property type that moved namespace",
        finding: {
          code: "propertyNamespaceChanged",
          interfaceApiName: "Person",
          previousApiName: "com.palantir.lastName",
          nextApiName: "com.example.lastName",
        },
        expected: 'Back "lastName" with "com.palantir.lastName" again.',
      },
      {
        name: "a property that started forbidding nulls",
        finding: {
          code: "nullabilityTightened",
          interfaceApiName: "Person",
          property: "name",
          previousNullability: { noNulls: false, noEmptyCollections: false },
          nextNullability: { noNulls: true, noEmptyCollections: false },
        },
        expected:
          'property "name" tightened its nullability from unconstrained to no nulls',
      },
      {
        name: "a property that started forbidding both",
        finding: {
          code: "nullabilityTightened",
          interfaceApiName: "Person",
          property: "name",
          previousNullability: { noNulls: true, noEmptyCollections: false },
          nextNullability: { noNulls: true, noEmptyCollections: true },
        },
        expected: 'Restore "name" to no nulls.',
      },
      {
        name: "a property newly bound to a value type",
        finding: {
          code: "valueTypeChanged",
          interfaceApiName: "Person",
          property: "ssn",
          previousValueType: undefined,
          nextValueType: {
            packageNamespace: "com.example",
            apiName: "Ssn",
          },
        },
        expected:
          'property "ssn" changed its value type from none to com.example/Ssn',
      },
      {
        name: "a property rebound to a different value type",
        finding: {
          code: "valueTypeChanged",
          interfaceApiName: "Person",
          property: "ssn",
          previousValueType: {
            packageNamespace: "com.example",
            apiName: "Ssn",
          },
          nextValueType: {
            packageNamespace: "com.example",
            apiName: "Ein",
          },
        },
        expected: 'Restore "ssn" to com.example/Ssn.',
      },
      {
        name: "a property that gained a type class",
        finding: {
          code: "propertyTypeClassesChanged",
          interfaceApiName: "Person",
          property: "lastName",
          previousTypeClasses: [],
          nextTypeClasses: [{ kind: "render_hint", name: "SORTABLE" }],
        },
        expected:
          'property "lastName" changed type classes from none to ' +
          "render_hint/SORTABLE",
      },
      {
        name: "a property that lost a type class",
        finding: {
          code: "propertyTypeClassesChanged",
          interfaceApiName: "Person",
          property: "lastName",
          previousTypeClasses: [{ kind: "render_hint", name: "SORTABLE" }],
          nextTypeClasses: [],
        },
        expected: 'Restore "lastName" to render_hint/SORTABLE.',
      },
      {
        name: "a property newly constrained to the primary key",
        finding: {
          code: "primaryKeyConstraintChanged",
          interfaceApiName: "Person",
          property: "id",
          previousConstraint: "NO_RESTRICTION",
          nextConstraint: "MUST_BE_PK",
        },
        expected:
          'property "id" changed its primary key constraint from unconstrained to `MUST_BE_PK`',
      },
      {
        name: "a property whose primary key constraint was swapped",
        finding: {
          code: "primaryKeyConstraintChanged",
          interfaceApiName: "Person",
          property: "id",
          previousConstraint: "MUST_BE_PK",
          nextConstraint: "CANNOT_BE_PK",
        },
        expected: 'Restore "id" to `MUST_BE_PK`.',
      },
    ])("tells the author what to do about $name", ({ finding, expected }) => {
      expect(describeFinding(finding)).toContain(expected);
    });

    it.each<{ name: string; finding: LockfileFinding }>([
      {
        name: "an existing property becoming required",
        finding: {
          code: "propertyBecameRequired",
          interfaceApiName: "Person",
          property: "lastName",
        },
      },
      {
        name: "a new required property",
        finding: {
          code: "requiredPropertyAdded",
          interfaceApiName: "Person",
          property: "lastName",
        },
      },
    ])("suggests a transition for $name", ({ finding }) => {
      expect(describeFinding(finding)).toContain(
        '{ id: "require-lastName", title: "Require lastName", ' +
          'gracePeriod: { type: "afterInstall", days: 30 }, ' +
          'instructions: [{ type: "addRequiredProperty", property: "lastName" }] }',
      );
    });
  });

  describe("authored names", () => {
    // A shared property type publishes under a namespaced api name, which the lockfile records
    // verbatim, but the author keys it by the un-namespaced name.
    const NAMESPACED = "com.example.lastName";

    it("suggests a transition the author can actually paste", () => {
      expect(
        describeFinding({
          code: "requiredPropertyAdded",
          interfaceApiName: "Person",
          property: NAMESPACED,
        }),
      ).toContain(
        '{ id: "require-lastName", title: "Require lastName", ' +
          'gracePeriod: { type: "afterInstall", days: 30 }, ' +
          'instructions: [{ type: "addRequiredProperty", property: "lastName" }] }',
      );
    });

    it("names the key the author wrote rather than the one the lockfile records", () => {
      const message = describeFinding({
        code: "propertyRemoved",
        interfaceApiName: "Person",
        property: NAMESPACED,
      });

      expect(message).toContain('Restore "lastName" to the interface.');
      expect(message).not.toContain(NAMESPACED);
    });

    it("translates the instructions a vanished transition recorded", () => {
      expect(
        describeFinding({
          code: "ambiguousDisappearance",
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          targets: [
            {
              propertyApiName: NAMESPACED,
              previous: OPTIONAL_STRING,
              next: undefined,
            },
          ],
          instructions: [{ type: "addRequiredProperty", property: NAMESPACED }],
        }),
      ).toContain('To finalize it, set "lastName" to `required: true`.');
    });

    it("translates both sides of a changed instruction list", () => {
      expect(
        describeFinding({
          code: "instructionsChanged",
          interfaceApiName: "Person",
          transitionId: "requireLastName",
          previousInstructions: [
            {
              type: "addRequiredProperty",
              property: NAMESPACED,
            },
          ],
          nextInstructions: [
            {
              type: "addRequiredProperty",
              property: "email",
            },
          ],
        }),
      ).toContain(
        'from [addRequiredProperty("lastName")] to [addRequiredProperty("email")]',
      );
    });
  });
});

describe("describeWarning", () => {
  const optedOut = describeWarning({
    code: "optedOut",
    interfaceApiName: "com.example.Person",
  });

  it("names the interface that dropped its migrations", () => {
    expect(optedOut).toContain(
      "Interface com.example.Person no longer declares `schemaMigrations`",
    );
  });

  it("says checking ends from the next release rather than this one", () => {
    expect(optedOut).toContain(
      "in-flight migrations are still resolved for this release",
    );
    expect(optedOut).toContain("from the next release on");
  });

  it("tells the author how to undo it", () => {
    expect(optedOut).toContain(
      "Restore the `schemaMigrations` block to keep the interface checked.",
    );
  });

  describe("a relaxed requirement", () => {
    const relaxed = describeWarning({
      code: "requirementRelaxed",
      interfaceApiName: "Person",
      property: "com.example.lastName",
    });

    it("names the key the author wrote", () => {
      expect(relaxed).toContain('property "lastName" is no longer required');
      expect(relaxed).not.toContain("com.example.lastName");
    });

    it("says who is affected rather than demanding a fix", () => {
      expect(relaxed).toContain("will start seeing it absent");
      expect(relaxed).toContain("Nothing to do if that was intended");
    });
  });

  describe("a dropped value type reference", () => {
    const removed = describeWarning({
      code: "valueTypeRemoved",
      interfaceApiName: "Person",
      property: "com.example.ssn",
      previousValueType: { packageNamespace: "com.example", apiName: "Ssn" },
    });

    it("names the value type that was dropped, and the authored key", () => {
      expect(removed).toContain(
        'property "ssn" no longer references value type com.example/Ssn',
      );
      expect(removed).not.toContain("com.example.ssn");
    });

    it("says who is affected rather than demanding a fix", () => {
      expect(removed).toContain("will start seeing values it rejected");
      expect(removed).toContain("Nothing to do if that was intended");
    });
  });

  describe("an interface no longer extended", () => {
    const removed = describeWarning({
      code: "interfaceExtensionRemoved",
      interfaceApiName: "Person",
      extendedInterfaceApiName: "com.palantir.Named",
    });

    it("names the interface that is no longer extended", () => {
      expect(removed).toContain(
        'Interface Person no longer extends "com.palantir.Named"',
      );
    });

    it("says who is affected rather than demanding a fix", () => {
      expect(removed).toContain("will stop seeing them");
      expect(removed).toContain("Nothing to do if that was intended");
    });
  });

  describe("a loosened nullability", () => {
    const relaxed = describeWarning({
      code: "nullabilityRelaxed",
      interfaceApiName: "Person",
      property: "com.example.name",
      previousNullability: { noNulls: true, noEmptyCollections: true },
      nextNullability: { noNulls: false, noEmptyCollections: false },
    });

    it("names both ends, and the authored key", () => {
      expect(relaxed).toContain(
        'property "name" relaxed its nullability from no nulls, no empty collections to ' +
          "unconstrained",
      );
      expect(relaxed).not.toContain("com.example.name");
    });

    it("says who is affected rather than demanding a fix", () => {
      expect(relaxed).toContain("values it previously rejected");
      expect(relaxed).toContain("Nothing to do if that was intended");
    });
  });

  describe("a dropped primary key constraint", () => {
    const relaxed = describeWarning({
      code: "primaryKeyConstraintRelaxed",
      interfaceApiName: "Person",
      property: "com.example.id",
      previousConstraint: "MUST_BE_PK",
    });

    it("names the constraint that was dropped, and the authored key", () => {
      expect(relaxed).toContain(
        'property "id" no longer constrains primary key mapping',
      );
      expect(relaxed).toContain("having been `MUST_BE_PK`");
      expect(relaxed).not.toContain("com.example.id");
    });

    it("says who is affected rather than demanding a fix", () => {
      expect(relaxed).toContain("free to map it either way");
      expect(relaxed).toContain("Nothing to do if that was intended");
    });
  });
});
