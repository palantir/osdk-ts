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
import { describeFinding } from "../describeLockfileFinding.js";
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
