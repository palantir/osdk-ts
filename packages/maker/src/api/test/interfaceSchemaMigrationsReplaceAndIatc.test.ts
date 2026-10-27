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

import type { OntologyIr } from "@osdk/client.unstable";
import { beforeEach, describe, expect, it } from "vitest";

import { defineInterface } from "../defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../defineInterfaceActionTypeConstraint.js";
import { defineOntology } from "../defineOntology.js";
import { mapPropertyNames } from "../interface/describeInterfaceSchemaMigrationInstruction.js";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaTransition,
} from "../interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../interface/InterfaceType.js";
import type { ParameterConstraintDefinition } from "../InterfaceActionTypeConstraintDefinition.js";

function transition(
  instructions: InterfaceSchemaMigrationInstruction[],
  id = "t1",
): InterfaceSchemaTransition {
  return {
    id,
    title: "Some transition",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions,
  };
}

function requireConstraint(
  actionTypeConstraint: string,
): InterfaceSchemaMigrationInstruction {
  return { type: "addRequiredActionTypeConstraint", actionTypeConstraint };
}

function defineConstraint(
  interfaceType: InterfaceType,
  apiName: string,
  requireImplementation: boolean,
  parameters: ParameterConstraintDefinition[] = [],
): void {
  defineInterfaceActionTypeConstraint({
    interfaceType,
    apiName,
    displayName: apiName,
    description: apiName,
    requireImplementation,
    parameters,
  });
}

/** Runs `body` as an ontology, so that the ontology-level validation runs too. */
function inOntology(body: () => void): Promise<OntologyIr> {
  return defineOntology("com.palantir.", body, undefined);
}

describe("addRequiredActionTypeConstraint and replace schema migrations", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  describe("addRequiredActionTypeConstraint", () => {
    function defineWithConstraintMigration(
      actionTypeConstraint: string,
    ): InterfaceType {
      return defineInterface({
        apiName: "Foo",
        schemaMigrations: {
          transitions: [transition([requireConstraint(actionTypeConstraint)])],
        },
      });
    }

    it("is not supported in ontology IR", async () => {
      await expect(
        inOntology(() => {
          defineConstraint(
            defineWithConstraintMigration("doThing"),
            "doThing",
            false,
          );
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: addRequiredActionTypeConstraint schema migrations are not supported in ontology IR. Define the ontology with @osdk/maker-experimental to publish them.]`,
      );
    });

    it("rejects a constraint that is not declared", async () => {
      await expect(
        inOntology(() => {
          defineWithConstraintMigration("doThing");
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredActionTypeConstraint("doThing"), but interface com.palantir.Foo does not declare action type constraint "com.palantir.doThing". Declare it with \`defineInterfaceActionTypeConstraint\` and \`requireImplementation: false\`.]`,
      );
    });

    it("rejects a constraint inherited from an extended interface", async () => {
      await expect(
        inOntology(() => {
          const parent = defineInterface({
            apiName: "Parent",
            schemaMigrations: { transitions: [] },
          });
          defineConstraint(parent, "doThing", false);
          defineInterface({
            apiName: "Child",
            extends: parent,
            schemaMigrations: {
              transitions: [transition([requireConstraint("doThing")])],
            },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Child declares addRequiredActionTypeConstraint("doThing"), but interface com.palantir.Child does not declare action type constraint "com.palantir.doThing". Action type constraints inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("rejects a constraint that is already requireImplementation:true", async () => {
      await expect(
        inOntology(() => {
          defineConstraint(
            defineWithConstraintMigration("doThing"),
            "doThing",
            true,
          );
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredActionTypeConstraint("doThing"), but action type constraint "com.palantir.doThing" is \`requireImplementation: true\`. Only action type constraints declared \`requireImplementation: false\` may be targeted.]`,
      );
    });

    it("rejects two transitions targeting the same constraint, however it is named", () => {
      expect(() =>
        defineInterface({
          apiName: "Foo",
          schemaMigrations: {
            transitions: [
              transition([requireConstraint("doThing")], "t1"),
              transition([requireConstraint("com.palantir.doThing")], "t2"),
            ],
          },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t2" on interface com.palantir.Foo declares addRequiredActionTypeConstraint("com.palantir.doThing"), which conflicts with addRequiredActionTypeConstraint("doThing") already declared by transition "t1". A property or action type constraint may be migrated by at most one in-flight transition.]`,
      );
    });
  });

  describe("prose", () => {
    it("leaves an action type constraint migration unchanged", () => {
      const instruction = requireConstraint("doThing");
      expect(mapPropertyNames(instruction, (key) => `x.${key}`)).toEqual(
        instruction,
      );
    });
  });
});
