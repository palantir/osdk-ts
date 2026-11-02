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
import invariant from "tiny-invariant";
import { beforeEach, describe, expect, it } from "vitest";

import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type { InterfaceTypeDefinition } from "../defineInterface.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../defineInterfaceActionTypeConstraint.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import { importOntologyEntity } from "../importOntologyEntity.js";
import {
  describeFinalization,
  describeInstruction,
} from "../interface/describeInterfaceSchemaMigrationInstruction.js";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaTransition,
  InterfaceTypeReplacement,
} from "../interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../interface/InterfaceType.js";
import type { ParameterConstraintDefinition } from "../InterfaceActionTypeConstraintDefinition.js";

type AuthoredProperty = NonNullable<
  InterfaceTypeDefinition["properties"]
>[string];

const OPTIONAL_STRING: AuthoredProperty = { required: false, type: "string" };
const REQUIRED_STRING: AuthoredProperty = { required: true, type: "string" };
const REQUIRED_INTEGER: AuthoredProperty = { required: true, type: "integer" };

function addRequiredProperty(
  property: string,
): InterfaceSchemaMigrationInstruction {
  return { type: "addRequiredProperty", property };
}

function addRequiredActionTypeConstraint(
  actionTypeConstraint: string,
): InterfaceSchemaMigrationInstruction {
  return { type: "addRequiredActionTypeConstraint", actionTypeConstraint };
}

/** A replacement that is never resolved, for checks that reject an instruction before resolving it. */
const UNRESOLVED_REPLACEMENT: InterfaceTypeReplacement = {
  interfaceType: "com.other.Bar",
  propertyMappings: {},
};

function replace(
  replacement: InterfaceTypeReplacement = UNRESOLVED_REPLACEMENT,
): InterfaceSchemaMigrationInstruction {
  return { type: "replace", replacement };
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

const STRING_PARAMETER: ParameterConstraintDefinition["type"] = {
  type: "string",
  string: {},
};

function parameter(
  apiName: string,
  {
    requireImplementation = false,
    type = STRING_PARAMETER,
  }: Partial<
    Pick<ParameterConstraintDefinition, "requireImplementation" | "type">
  > = {},
): ParameterConstraintDefinition {
  return { apiName, displayName: apiName, type, requireImplementation };
}

/** An interface type published by another ontology, for importing with `importOntologyEntity`. */
function importedInterface(
  overrides: Partial<InterfaceType> = {},
): InterfaceType {
  return {
    apiName: "com.other.Imported",
    displayMetadata: { displayName: "Imported" },
    propertiesV2: {},
    propertiesV3: {},
    extendsInterfaces: [],
    links: [],
    actionTypeConstraints: [],
    status: { type: "active", active: {} },
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
    ...overrides,
  };
}

/** Runs `body` as an ontology, so that the ontology-level validation runs too. */
function inOntology(body: () => void): Promise<OntologyIr> {
  return defineOntology("com.palantir.", body, undefined);
}

/** `Foo`, being replaced by `replacement`. */
function defineReplaced(
  replacement: InterfaceTypeReplacement = UNRESOLVED_REPLACEMENT,
  overrides: Partial<InterfaceTypeDefinition> = {},
): InterfaceType {
  return defineInterface({
    apiName: "Foo",
    properties: { name: REQUIRED_STRING },
    schemaMigrations: {
      transitions: [transition({ instructions: [replace(replacement)] })],
    },
    ...overrides,
  });
}

function defineReplacement(
  overrides: Partial<InterfaceTypeDefinition> = {},
): InterfaceType {
  return defineInterface({
    apiName: "Bar",
    properties: { fullName: REQUIRED_STRING },
    ...overrides,
  });
}

/**
 * `count` distinct instructions, targeting `optional0`..`optional{count-1}`.
 *
 * The instruction kind is incidental — callers outside the addRequiredProperty
 * block only need instructions that survive instruction-level validation.
 */
function distinctInstructions(
  count: number,
): InterfaceSchemaMigrationInstruction[] {
  return Array.from({ length: count }, (_, n) =>
    addRequiredProperty(`optional${n}`),
  );
}

function transition(
  overrides: Partial<InterfaceSchemaTransition> = {},
): InterfaceSchemaTransition {
  return {
    id: "t1",
    title: "Some transition",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions: distinctInstructions(1),
    ...overrides,
  };
}

function distinctTransitions(count: number): InterfaceSchemaTransition[] {
  return distinctInstructions(count).map((instruction, i) =>
    transition({ id: `t${i}`, instructions: [instruction] }),
  );
}

function idOfLength(length: number): string {
  return "t".repeat(length);
}

/**
 * Interface `Foo` carrying `transitions`, declaring every property they target
 * as `required: false`.
 */
function defineWithMigrations(
  transitions: InterfaceSchemaTransition[],
  properties: Record<string, AuthoredProperty> = Object.fromEntries(
    transitions
      .flatMap((t) => t.instructions)
      .flatMap((instruction) =>
        instruction.type === "addRequiredProperty"
          ? [[instruction.property, OPTIONAL_STRING]]
          : [],
      ),
  ),
): InterfaceType {
  return defineInterface({
    apiName: "Foo",
    properties,
    schemaMigrations: { transitions },
  });
}

describe("Interface schema migrations", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  describe("opting in", () => {
    it("carries the authored migrations onto the interface", () => {
      const authored = transition({ description: "some description" });

      expect(defineWithMigrations([authored]).schemaMigrations).toEqual({
        transitions: [authored],
      });
    });

    it("accepts an opted-in but empty transitions array", () => {
      const result = defineInterface({
        apiName: "Foo",
        schemaMigrations: { transitions: [] },
      });
      expect(result.schemaMigrations).toEqual({ transitions: [] });
    });

    it("leaves schemaMigrations undefined when not opted in", () => {
      const result = defineInterface({ apiName: "Foo" });
      expect(result.schemaMigrations).toBeUndefined();
    });

    it("does not register the interface when validation fails", () => {
      expect(() => defineWithMigrations([transition({ title: "" })])).toThrow();

      expect(dumpOntologyFullMetadata().ontology.interfaceTypes).toEqual({});
    });

    it("does not alias the authored migrations", () => {
      const authored = { transitions: [transition()] };

      const result = defineInterface({
        apiName: "Foo",
        properties: { optional0: OPTIONAL_STRING },
        schemaMigrations: authored,
      });
      authored.transitions.push(transition({ id: "sneaked-in" }));

      expect(result.schemaMigrations!.transitions).toHaveLength(1);
    });
  });

  describe("inherited properties", () => {
    it("rejects a transition targeting a property from an extended interface", () => {
      const parent = defineInterface({
        apiName: "Parent",
        properties: { inherited: OPTIONAL_STRING },
        schemaMigrations: { transitions: [] },
      });

      expect(() =>
        defineInterface({
          apiName: "Child",
          extends: parent,
          schemaMigrations: {
            transitions: [
              transition({
                instructions: [addRequiredProperty("inherited")],
              }),
            ],
          },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Child declares addRequiredProperty("inherited"), but interface com.palantir.Child does not declare property "inherited". Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("accepts the same transition declared on the interface that owns the property", () => {
      expect(() =>
        defineInterface({
          apiName: "Parent",
          properties: { inherited: OPTIONAL_STRING },
          schemaMigrations: {
            transitions: [
              transition({
                instructions: [addRequiredProperty("inherited")],
              }),
            ],
          },
        }),
      ).not.toThrow();
    });
  });

  describe("family opt-in", () => {
    it("accepts a hierarchy that opts in as a whole", () => {
      const parent = defineInterface({
        apiName: "Parent",
        schemaMigrations: { transitions: [] },
      });

      expect(() =>
        defineInterface({
          apiName: "Child",
          extends: parent,
          schemaMigrations: { transitions: [] },
        }),
      ).not.toThrow();
    });

    it("accepts a hierarchy where nobody opts in", () => {
      const parent = defineInterface({ apiName: "Parent" });

      expect(() =>
        defineInterface({ apiName: "Child", extends: parent }),
      ).not.toThrow();
    });

    it("rejects opting in an interface whose parent has not", () => {
      const parent = defineInterface({ apiName: "Parent" });

      expect(() =>
        defineInterface({
          apiName: "Child",
          extends: parent,
          schemaMigrations: { transitions: [] },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface com.palantir.Child declares \`schemaMigrations\`, but the interface it extends, com.palantir.Parent, does not. Interface schema migrations must be enabled for an entire interface hierarchy, since an object type implementing com.palantir.Child must implement the properties it inherits from com.palantir.Parent too. Add \`schemaMigrations\` to com.palantir.Parent, or remove it from com.palantir.Child.]`,
      );
    });

    it("rejects extending an opted-in interface without opting in", () => {
      const parent = defineInterface({
        apiName: "Parent",
        schemaMigrations: { transitions: [] },
      });

      expect(() =>
        defineInterface({ apiName: "Child", extends: parent }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface com.palantir.Child extends com.palantir.Parent, which declares \`schemaMigrations\`, but com.palantir.Child does not. Interface schema migrations must be enabled for an entire interface hierarchy, since an object type implementing com.palantir.Child must implement the properties it inherits from com.palantir.Parent too. Add \`schemaMigrations\` to com.palantir.Child, or remove it from com.palantir.Parent.]`,
      );
    });

    it("rejects a sibling that has not opted in", () => {
      const parent = defineInterface({
        apiName: "Parent",
        schemaMigrations: { transitions: [] },
      });
      defineInterface({
        apiName: "OptedInChild",
        extends: parent,
        schemaMigrations: { transitions: [] },
      });

      expect(() =>
        defineInterface({ apiName: "OtherChild", extends: parent }),
      ).toThrow(/Interface com\.palantir\.OtherChild extends/u);
    });

    it("rejects an ancestor further up that has not opted in", () => {
      const grandparent = defineInterface({ apiName: "Grandparent" });

      expect(() =>
        defineInterface({
          apiName: "Parent",
          extends: grandparent,
          schemaMigrations: { transitions: [] },
        }),
      ).toThrow(/the interface it extends, com\.palantir\.Grandparent/u);
    });

    it("checks every parent, not just the first", () => {
      const optedIn = defineInterface({
        apiName: "OptedIn",
        schemaMigrations: { transitions: [] },
      });
      const notOptedIn = defineInterface({ apiName: "NotOptedIn" });

      expect(() =>
        defineInterface({
          apiName: "Child",
          extends: [optedIn, notOptedIn],
          schemaMigrations: { transitions: [] },
        }),
      ).toThrow(/the interface it extends, com\.palantir\.NotOptedIn/u);
    });

    it("does not register the interface when the check fails", () => {
      const parent = defineInterface({
        apiName: "Parent",
        schemaMigrations: { transitions: [] },
      });

      expect(() =>
        defineInterface({ apiName: "Child", extends: parent }),
      ).toThrow();

      expect(
        Object.keys(dumpOntologyFullMetadata().ontology.interfaceTypes),
      ).toEqual(["com.palantir.Parent"]);
    });

    it("says nothing about a parent imported from another ontology", () => {
      const imported = importedInterface();
      importOntologyEntity(imported);

      expect(() =>
        defineInterface({
          apiName: "Child",
          extends: imported,
          schemaMigrations: { transitions: [] },
        }),
      ).not.toThrow();
    });
  });

  describe("conflicting instructions", () => {
    it("rejects two transitions migrating the same property", () => {
      const instruction = addRequiredProperty("optional0");

      expect(() =>
        defineWithMigrations([
          transition({ id: "t1", instructions: [instruction] }),
          transition({ id: "t2", instructions: [instruction] }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t2" on interface com.palantir.Foo declares addRequiredProperty("optional0"), which conflicts with addRequiredProperty("optional0") already declared by transition "t1". Each element of an interface schema may be migrated by at most one in-flight transition.]`,
      );
    });

    it("rejects one transition migrating the same property twice", () => {
      const instruction = addRequiredProperty("optional0");

      expect(() =>
        defineWithMigrations([
          transition({ id: "t1", instructions: [instruction, instruction] }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("optional0"), which conflicts with addRequiredProperty("optional0") already declared by transition "t1". Each element of an interface schema may be migrated by at most one in-flight transition.]`,
      );
    });

    it("rejects two transitions migrating the same action type constraint, however it is named", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            id: "t1",
            instructions: [addRequiredActionTypeConstraint("doThing")],
          }),
          transition({
            id: "t2",
            instructions: [
              addRequiredActionTypeConstraint("com.palantir.doThing"),
            ],
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t2" on interface com.palantir.Foo declares addRequiredActionTypeConstraint("com.palantir.doThing"), which conflicts with addRequiredActionTypeConstraint("doThing") already declared by transition "t1". Each element of an interface schema may be migrated by at most one in-flight transition.]`,
      );
    });
  });

  describe("addRequiredProperty", () => {
    function defineTargeting(property: string, declaration: AuthoredProperty) {
      return () =>
        defineWithMigrations(
          [
            transition({
              instructions: [addRequiredProperty(property)],
            }),
          ],
          { [property]: declaration },
        );
    }

    it("accepts an interface-defined property declared required:false", () => {
      expect(
        defineTargeting("opt", { required: false, type: "string" }),
      ).not.toThrow();
    });

    it("rejects a target property that does not exist", () => {
      expect(() =>
        defineWithMigrations(
          [
            transition({
              instructions: [addRequiredProperty("missing")],
            }),
          ],
          {},
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("missing"), but interface com.palantir.Foo does not declare property "missing". Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("rejects a target property named after an Object.prototype member", () => {
      expect(() =>
        defineWithMigrations(
          [
            transition({
              instructions: [addRequiredProperty("toString")],
            }),
          ],
          {},
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("toString"), but interface com.palantir.Foo does not declare property "toString". Properties inherited from an extended interface must be migrated by a transition on the interface that declares them.]`,
      );
    });

    it("rejects a target property that is required (explicit required:true)", () => {
      expect(
        defineTargeting("req", { required: true, type: "string" }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("req"), but property "req" is required. Only properties declared \`required: false\` may be targeted.]`,
      );
    });

    it("rejects a target property that is required by default (required omitted)", () => {
      expect(
        defineTargeting("def", { type: "string" }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("def"), but property "def" is required. Only properties declared \`required: false\` may be targeted.]`,
      );
    });

    it("accepts an SPT-backed property declared required:false", () => {
      const optSpt = defineSharedPropertyType({
        apiName: "optSpt",
        type: "string",
      });

      expect(
        defineTargeting("optSpt", {
          sharedPropertyType: optSpt,
          required: false,
        }),
      ).not.toThrow();
    });

    it("rejects an SPT-backed property declared required:true", () => {
      const reqSpt = defineSharedPropertyType({
        apiName: "reqSpt",
        type: "string",
      });

      expect(
        defineTargeting("reqSpt", {
          sharedPropertyType: reqSpt,
          required: true,
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("reqSpt"), but property "reqSpt" is required. Only properties declared \`required: false\` may be targeted.]`,
      );
    });

    it("rejects a bare SPT, which is required by default", () => {
      const bareSpt = defineSharedPropertyType({
        apiName: "bareSpt",
        type: "string",
      });

      expect(
        defineTargeting("bareSpt", bareSpt),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredProperty("bareSpt"), but property "bareSpt" is required. Only properties declared \`required: false\` may be targeted.]`,
      );
    });
  });

  describe("addRequiredActionTypeConstraint", () => {
    function defineTargeting(actionTypeConstraint: string): InterfaceType {
      return defineWithMigrations([
        transition({
          instructions: [addRequiredActionTypeConstraint(actionTypeConstraint)],
        }),
      ]);
    }

    it("is not supported in ontology IR", async () => {
      await expect(
        inOntology(() => {
          defineConstraint(defineTargeting("doThing"), "doThing", false);
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: addRequiredActionTypeConstraint schema migrations are not supported in ontology IR. Define the ontology with SuperRepo instead to use them.]`,
      );
    });

    it("rejects a constraint that is not declared", async () => {
      await expect(
        inOntology(() => {
          defineTargeting("doThing");
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
              transitions: [
                transition({
                  instructions: [addRequiredActionTypeConstraint("doThing")],
                }),
              ],
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
          defineConstraint(defineTargeting("doThing"), "doThing", true);
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredActionTypeConstraint("doThing"), but action type constraint "com.palantir.doThing" is \`requireImplementation: true\`. Only action type constraints declared \`requireImplementation: false\` may be targeted.]`,
      );
    });
  });

  describe("replace: local shape", () => {
    it("rejects a replacement sharing its transition with another instruction", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            instructions: [replace(), addRequiredProperty("optional0")],
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but the transition has 2 instructions. A replacement must be the only instruction of the only transition on its interface, and stays declared as a tombstone; finalize or remove the other migrations first.]`,
      );
    });

    it("rejects a replacement alongside another transition", () => {
      expect(() =>
        defineWithMigrations([
          transition({ id: "t1", instructions: [replace()] }),
          transition({
            id: "t2",
            instructions: [addRequiredProperty("optional0")],
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but interface com.palantir.Foo has 2 transitions. A replacement must be the only instruction of the only transition on its interface, and stays declared as a tombstone; finalize or remove the other migrations first.]`,
      );
    });

    it("rejects two sources mapped to the same target", () => {
      expect(() =>
        defineReplaced(
          {
            interfaceType: "com.palantir.Bar",
            propertyMappings: { first: "fullName", second: "fullName" },
          },
          {
            properties: { first: REQUIRED_STRING, second: REQUIRED_STRING },
          },
        ),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose propertyMappings maps both "first" and "second" to "fullName". Each target may be mapped from at most one source.]`,
      );
    });

    it("rejects two parameters mapped to the same target", () => {
      expect(() =>
        defineReplaced({
          interfaceType: "com.palantir.Bar",
          propertyMappings: { name: "fullName" },
          actionTypeConstraintMappings: {
            fooAction: {
              actionTypeConstraint: "barAction",
              parameterMappings: { first: "target", second: "target" },
            },
          },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose actionTypeConstraintMappings["fooAction"].parameterMappings maps both "first" and "second" to "target". Each target may be mapped from at most one source.]`,
      );
    });
  });

  describe("replace: references", () => {
    it("accepts a fully-mapped replacement named by its un-namespaced API name", async () => {
      await expect(
        inOntology(() => {
          defineReplacement();
          defineReplaced({
            interfaceType: "Bar",
            propertyMappings: { name: "fullName" },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: replace schema migrations are not supported in ontology IR. Define the ontology with SuperRepo instead to use them.]`,
      );
    });

    it("rejects a replacement that is neither defined locally nor imported", async () => {
      await expect(
        inOntology(() => {
          defineReplaced({
            interfaceType: "com.other.Unknown",
            propertyMappings: { name: "whatever" },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Interface com.palantir.Foo is being replaced by com.other.Unknown, which is neither defined in this ontology nor imported. Import it with \`importOntologyEntity\` so that it becomes an input to this block.]`,
      );
    });

    it("validates against an imported replacement's definition", async () => {
      await expect(
        inOntology(() => {
          importOntologyEntity(
            importedInterface({
              propertiesV3: { fullName: { type: "string", required: true } },
            }),
          );
          defineReplaced({
            interfaceType: "com.other.Imported",
            propertyMappings: { name: "missing" },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Imported"), whose propertyMappings maps to property "missing", but com.other.Imported has no such property.]`,
      );
    });

    it("rejects an interface extending the replaced interface", async () => {
      await expect(
        inOntology(() => {
          const foo = defineReplaced();
          defineInterface({
            apiName: "Child",
            extends: foo,
            schemaMigrations: { transitions: [] },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but interface com.palantir.Child extends it. An interface type may not be replaced while another interface type extends it; replace or remove the extension first.]`,
      );
    });

    it("rejects replacing an interface with itself", async () => {
      await expect(
        inOntology(() => {
          defineReplaced({
            interfaceType: "Foo",
            propertyMappings: { name: "name" },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("Foo"), but an interface type cannot be replaced by itself.]`,
      );
    });

    it("rejects a replacement the replaced interface extends", async () => {
      await expect(
        inOntology(() => {
          const bar = defineReplacement({
            schemaMigrations: { transitions: [] },
          });
          defineReplaced(
            { interfaceType: bar, propertyMappings: { name: "fullName" } },
            { extends: bar },
          );
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but one of com.palantir.Foo and com.palantir.Bar extends the other. The replacement must be unrelated to the interface type it replaces.]`,
      );
    });

    // A local extender is caught by the check above, so only an imported one reaches this
    it("rejects an imported replacement that extends the replaced interface", async () => {
      await expect(
        inOntology(() => {
          const foo = defineReplaced({
            interfaceType: "com.other.Imported",
            propertyMappings: {},
          });
          importOntologyEntity(importedInterface({ extendsInterfaces: [foo] }));
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Imported"), but one of com.palantir.Foo and com.other.Imported extends the other. The replacement must be unrelated to the interface type it replaces.]`,
      );
    });

    describe("propertyMappings", () => {
      it("rejects a source the replaced interface does not have", async () => {
        await expect(
          inOntology(() => {
            defineReplaced({
              interfaceType: defineReplacement(),
              propertyMappings: { name: "fullName", missing: "other" },
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose propertyMappings maps from property "missing", but com.palantir.Foo has no such property.]`,
        );
      });

      it("rejects a target the replacement does not have", async () => {
        await expect(
          inOntology(() => {
            defineReplaced({
              interfaceType: defineReplacement(),
              propertyMappings: { name: "missing" },
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose propertyMappings maps to property "missing", but com.palantir.Bar has no such property.]`,
        );
      });

      it("rejects mismatched property types", async () => {
        await expect(
          inOntology(() => {
            defineReplaced({
              interfaceType: defineReplacement({
                properties: { fullName: REQUIRED_INTEGER },
              }),
              propertyMappings: { name: "fullName" },
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose propertyMappings maps property "name" to "fullName", but its type "string" does not match "integer".]`,
        );
      });

      it("rejects an unmapped required target", async () => {
        await expect(
          inOntology(() => {
            defineReplaced({
              interfaceType: defineReplacement(),
              propertyMappings: {},
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its propertyMappings does not map to property "fullName", which com.palantir.Bar requires. Map com.palantir.Foo's corresponding property to it, so that automatically-generated changes produce a valid implementation.]`,
        );
      });
    });

    describe("linkTypeConstraintMappings", () => {
      /** `fooLink` on `Foo` (to one `Target`) and a required `barLink` on `Bar`. */
      function defineWithLinks(
        mappings: Record<string, string>,
        barLink: { many?: boolean; to?: "Target" | "Other" } = {},
      ): void {
        const target = defineInterface({ apiName: "Target" });
        const bar = defineReplacement();
        const barTo =
          barLink.to === "Other"
            ? defineInterface({ apiName: "Other" })
            : target;
        defineInterfaceLinkConstraint(
          barLink.many
            ? { apiName: "barLink", from: bar, toMany: barTo, required: true }
            : { apiName: "barLink", from: bar, toOne: barTo, required: true },
        );
        const foo = defineReplaced({
          interfaceType: bar,
          propertyMappings: { name: "fullName" },
          linkTypeConstraintMappings: mappings,
        });
        defineInterfaceLinkConstraint({
          apiName: "fooLink",
          from: foo,
          toOne: target,
        });
      }

      it("rejects a target the replacement does not have", async () => {
        await expect(
          inOntology(() => defineWithLinks({ fooLink: "missing" })),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose linkTypeConstraintMappings maps to link type constraint "missing", but com.palantir.Bar has no such link type constraint.]`,
        );
      });

      it("rejects mismatched cardinality", async () => {
        await expect(
          inOntology(() =>
            defineWithLinks({ fooLink: "barLink" }, { many: true }),
          ),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose linkTypeConstraintMappings maps link type constraint "fooLink" to "barLink", but its cardinality SINGLE does not match MANY.]`,
        );
      });

      it("rejects a mismatched linked entity", async () => {
        await expect(
          inOntology(() =>
            defineWithLinks({ fooLink: "barLink" }, { to: "Other" }),
          ),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose linkTypeConstraintMappings maps link type constraint "fooLink" to "barLink", but its linked entity interface com.palantir.Target does not match interface com.palantir.Other.]`,
        );
      });

      it("rejects an unmapped required target", async () => {
        await expect(
          inOntology(() => defineWithLinks({})),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its linkTypeConstraintMappings does not map to link type constraint "com.palantir.barLink", which com.palantir.Bar requires. Map com.palantir.Foo's corresponding link type constraint to it, so that automatically-generated changes produce a valid implementation.]`,
        );
      });
    });

    describe("actionTypeConstraintMappings", () => {
      it("rejects a source the replaced interface does not have", async () => {
        await expect(
          inOntology(() => {
            const bar = defineReplacement();
            defineConstraint(bar, "barAction", false);
            defineReplaced({
              interfaceType: bar,
              propertyMappings: { name: "fullName" },
              actionTypeConstraintMappings: {
                missing: { actionTypeConstraint: "barAction" },
              },
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose actionTypeConstraintMappings maps from action type constraint "missing", but com.palantir.Foo has no such action type constraint.]`,
        );
      });

      it("rejects an unmapped required target", async () => {
        await expect(
          inOntology(() => {
            const bar = defineReplacement();
            defineConstraint(bar, "barAction", true);
            defineReplaced({
              interfaceType: bar,
              propertyMappings: { name: "fullName" },
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its actionTypeConstraintMappings does not map to action type constraint "com.palantir.barAction", which com.palantir.Bar requires. Map com.palantir.Foo's corresponding action type constraint to it, so that automatically-generated changes produce a valid implementation.]`,
        );
      });

      describe("parameterMappings", () => {
        /** `fooAction` on `Foo` mapped to `barAction` on `Bar`, each with the given parameters. */
        function defineWithParameters(
          fooParameters: ParameterConstraintDefinition[],
          barParameters: ParameterConstraintDefinition[],
          parameterMappings: Record<string, string>,
        ): void {
          const bar = defineReplacement();
          defineConstraint(bar, "barAction", false, barParameters);
          const foo = defineReplaced({
            interfaceType: bar,
            propertyMappings: { name: "fullName" },
            actionTypeConstraintMappings: {
              fooAction: {
                actionTypeConstraint: "barAction",
                parameterMappings,
              },
            },
          });
          defineConstraint(foo, "fooAction", false, fooParameters);
        }

        it("rejects a source the replaced constraint does not have", async () => {
          await expect(
            inOntology(() =>
              defineWithParameters([], [parameter("target")], {
                missing: "target",
              }),
            ),
          ).rejects.toThrowErrorMatchingInlineSnapshot(
            `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose actionTypeConstraintMappings["fooAction"].parameterMappings maps from parameter "missing", but com.palantir.fooAction has no such parameter.]`,
          );
        });

        it("rejects a target the replacement constraint does not have", async () => {
          await expect(
            inOntology(() =>
              defineWithParameters([parameter("subject")], [], {
                subject: "missing",
              }),
            ),
          ).rejects.toThrowErrorMatchingInlineSnapshot(
            `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose actionTypeConstraintMappings["fooAction"].parameterMappings maps to parameter "missing", but com.palantir.barAction has no such parameter.]`,
          );
        });

        it("rejects mismatched types", async () => {
          await expect(
            inOntology(() =>
              defineWithParameters(
                [parameter("subject")],
                [
                  parameter("target", {
                    type: { type: "integer", integer: {} },
                  }),
                ],
                { subject: "target" },
              ),
            ),
          ).rejects.toThrowErrorMatchingInlineSnapshot(
            `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose actionTypeConstraintMappings["fooAction"].parameterMappings maps parameter "subject" to "target", but its type {"type":"string","string":{}} does not match {"type":"integer","integer":{}}.]`,
          );
        });

        it("rejects an unmapped required target", async () => {
          await expect(
            inOntology(() =>
              defineWithParameters(
                [parameter("subject")],
                [parameter("target", { requireImplementation: true })],
                {},
              ),
            ),
          ).rejects.toThrowErrorMatchingInlineSnapshot(
            `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its actionTypeConstraintMappings["fooAction"].parameterMappings does not map to parameter "target", which com.palantir.barAction requires. Map com.palantir.fooAction's corresponding parameter to it, so that automatically-generated changes produce a valid implementation.]`,
          );
        });
      });
    });
  });

  describe("prose", () => {
    it("describes each instruction and its finalization, if any", () => {
      const instructions: InterfaceSchemaMigrationInstruction[] = [
        addRequiredProperty("optional0"),
        addRequiredActionTypeConstraint("doThing"),
        replace(),
      ];
      expect(
        instructions.map((instruction) => [
          describeInstruction(instruction),
          describeFinalization(instruction),
        ]),
      ).toMatchInlineSnapshot(`
        [
          [
            "addRequiredProperty("optional0")",
            "set "optional0" to \`required: true\`",
          ],
          [
            "addRequiredActionTypeConstraint("doThing")",
            "set "doThing" to \`requireImplementation: true\`",
          ],
          [
            "replace("com.other.Bar")",
            undefined,
          ],
        ]
      `);
    });
  });

  describe("transition ids", () => {
    it("accepts an id at the 150 character limit", () => {
      expect(() =>
        defineWithMigrations([transition({ id: idOfLength(150) })]),
      ).not.toThrow();
    });

    it("accepts letters, digits, underscores, and dashes", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "Add_owner-V2" })]),
      ).not.toThrow();
    });

    it("accepts an id starting with a digit", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "1-add-owner" })]),
      ).not.toThrow();
    });

    it("rejects an empty id", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "" on interface com.palantir.Foo must be between 1 and 150 characters, but was 0.]`,
      );
    });

    it("rejects an id longer than 150 characters", () => {
      expect(() =>
        defineWithMigrations([transition({ id: idOfLength(151) })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt" on interface com.palantir.Foo must be between 1 and 150 characters, but was 151.]`,
      );
    });

    it("rejects an id that does not start with a letter or digit", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "-add-owner" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "-add-owner" on interface com.palantir.Foo must match ^[a-zA-Z0-9][a-zA-Z0-9_-]*$: a letter or digit followed by letters, digits, underscores, or dashes.]`,
      );
    });

    it("rejects an id containing whitespace", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "add owner" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "add owner" on interface com.palantir.Foo must match ^[a-zA-Z0-9][a-zA-Z0-9_-]*$: a letter or digit followed by letters, digits, underscores, or dashes.]`,
      );
    });

    it("rejects an id containing a dot", () => {
      expect(() =>
        defineWithMigrations([transition({ id: "add.owner" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition id "add.owner" on interface com.palantir.Foo must match ^[a-zA-Z0-9][a-zA-Z0-9_-]*$: a letter or digit followed by letters, digits, underscores, or dashes.]`,
      );
    });

    it("rejects duplicate transition ids", () => {
      const [first, second] = distinctTransitions(2);

      expect(() =>
        defineWithMigrations([
          { ...first, id: "dup" },
          { ...second, id: "dup" },
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Duplicate schema migration transition id "dup" on interface com.palantir.Foo.]`,
      );
    });
  });

  describe("title and description", () => {
    it("accepts a title at the 500 character limit", () => {
      expect(() =>
        defineWithMigrations([transition({ title: "x".repeat(500) })]),
      ).not.toThrow();
    });

    it("rejects an empty title", () => {
      expect(() =>
        defineWithMigrations([transition({ title: "" })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo must have a title between 1 and 500 characters, but was 0.]`,
      );
    });

    it("rejects a title longer than 500 characters", () => {
      expect(() =>
        defineWithMigrations([transition({ title: "x".repeat(501) })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo must have a title between 1 and 500 characters, but was 501.]`,
      );
    });

    it("accepts a description at the 2000 character limit", () => {
      expect(() =>
        defineWithMigrations([transition({ description: "x".repeat(2000) })]),
      ).not.toThrow();
    });

    it("rejects a description longer than 2000 characters", () => {
      expect(() =>
        defineWithMigrations([transition({ description: "x".repeat(2001) })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a description of length 2001, which exceeds the maximum of 2000.]`,
      );
    });
  });

  describe("afterInstall grace period bounds", () => {
    it("accepts the lower edge (7 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 7 } }),
        ]),
      ).not.toThrow();
    });

    it("accepts the upper edge (180 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 180 } }),
        ]),
      ).not.toThrow();
    });

    it("rejects below the lower edge (6 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 6 } }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has an 'afterInstall' grace period of 6 days, but days must be an integer in [7, 180] (inclusive).]`,
      );
    });

    it("rejects above the upper edge (181 days)", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 181 } }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has an 'afterInstall' grace period of 181 days, but days must be an integer in [7, 180] (inclusive).]`,
      );
    });

    it("rejects a non-integer number of days", () => {
      expect(() =>
        defineWithMigrations([
          transition({ gracePeriod: { type: "afterInstall", days: 30.5 } }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has an 'afterInstall' grace period of 30.5 days, but days must be an integer in [7, 180] (inclusive).]`,
      );
    });
  });

  describe("deadline grace period", () => {
    it("accepts a well-formed deadline", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T00:00:00.000Z",
            },
          }),
        ]),
      ).not.toThrow();
    });

    it("accepts a deadline with zero milliseconds absent", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "2026-01-31T00:00:00Z" },
          }),
        ]),
      ).not.toThrow();
    });

    it("accepts a deadline with non-zero milliseconds", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T12:34:56.789Z",
            },
          }),
        ]),
      ).not.toThrow();
    });

    // Authoring/generation should not depend on when it runs, so an already-elapsed deadline
    // is accepted here and instead gets rejected at installation-time.
    it("accepts a deadline in the past", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2020-06-01T00:00:00.000Z",
            },
          }),
        ]),
      ).not.toThrow();
    });

    it("rejects an invalid date", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "not-a-date" },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "not-a-date", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a non-UTC offset", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T00:00:00.000+05:00",
            },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "2026-01-31T00:00:00.000+05:00", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a date without a time", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "2026-01-31" },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "2026-01-31", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a time without an offset", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: {
              type: "deadline",
              deadline: "2026-01-31T00:00:00",
            },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "2026-01-31T00:00:00", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });

    it("rejects a locale-formatted date", () => {
      expect(() =>
        defineWithMigrations([
          transition({
            gracePeriod: { type: "deadline", deadline: "Jan 31 2026" },
          }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has a 'deadline' grace period of "Jan 31 2026", which is not a canonical ISO-8601 UTC datetime (e.g. "2026-01-31T00:00:00Z").]`,
      );
    });
  });

  describe("instruction count bounds", () => {
    it("rejects empty instructions", () => {
      expect(() =>
        defineWithMigrations([transition({ instructions: [] })]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo must have at least one instruction.]`,
      );
    });

    it("accepts 500 distinct instructions", () => {
      expect(() =>
        defineWithMigrations([
          transition({ instructions: distinctInstructions(500) }),
        ]),
      ).not.toThrow();
    });

    it("rejects 501 instructions", () => {
      expect(() =>
        defineWithMigrations([
          transition({ instructions: distinctInstructions(501) }),
        ]),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo has 501 instructions, which exceeds the maximum of 500.]`,
      );
    });
  });

  describe("conversion to wire block data", () => {
    function blockData() {
      return dumpOntologyFullMetadata().ontology.interfaceTypes[
        "com.palantir.Foo"
      ];
    }

    function transitions() {
      const { schemaMigrations } = blockData();
      invariant(schemaMigrations != null, "expected schema migrations");
      return schemaMigrations.schemaTransitions;
    }

    it("omits the migration block when not opted in", () => {
      defineInterface({ apiName: "Foo" });

      expect(blockData().schemaMigrations).toBeUndefined();
      expect(blockData().interfaceType).not.toHaveProperty(
        "schemaMigrationsEnabled",
      );
    });

    it("sets schemaMigrationsEnabled when opted in with no transitions", () => {
      defineInterface({
        apiName: "Foo",
        schemaMigrations: { transitions: [] },
      });

      expect(blockData().interfaceType.schemaMigrationsEnabled).toBe(true);
      expect(blockData().schemaMigrations).toEqual({ schemaTransitions: {} });
    });

    it("keys transitions by their id", () => {
      defineWithMigrations([
        transition({ id: "t0", instructions: [addRequiredProperty("a")] }),
        transition({ id: "t1", instructions: [addRequiredProperty("b")] }),
      ]);

      expect(Object.keys(transitions())).toEqual(["t0", "t1"]);
    });

    it("resolves every targeted property to its published api name", () => {
      const spt = defineSharedPropertyType({
        apiName: "ownerSpt",
        type: "string",
      });

      defineInterface({
        apiName: "Foo",
        properties: {
          optional0: OPTIONAL_STRING,
          ownerSpt: { sharedPropertyType: spt, required: false },
        },
        schemaMigrations: {
          transitions: [
            transition({
              instructions: [
                addRequiredProperty("optional0"),
                addRequiredProperty("ownerSpt"),
              ],
            }),
          ],
        },
      });

      expect(transitions().t1.migrations).toEqual([
        {
          type: "addRequiredProperty",
          addRequiredProperty: { propertyTypeRid: "optional0" },
        },
        {
          type: "addRequiredProperty",
          addRequiredProperty: { propertyTypeRid: "com.palantir.ownerSpt" },
        },
      ]);
    });

    it("translates an afterInstall transition to daysAfterActivation", () => {
      defineWithMigrations([
        transition({
          id: "add-owner",
          title: "Require owner",
          description: "some description",
          gracePeriod: { type: "afterInstall", days: 30 },
        }),
      ]);

      expect(transitions()).toEqual({
        "add-owner": {
          id: "add-owner",
          title: "Require owner",
          description: "some description",
          gracePeriod: { type: "daysAfterActivation", daysAfterActivation: 30 },
          migrations: [
            {
              type: "addRequiredProperty",
              addRequiredProperty: { propertyTypeRid: "optional0" },
            },
          ],
        },
      });
    });

    it("translates a deadline transition", () => {
      defineWithMigrations([
        transition({
          gracePeriod: { type: "deadline", deadline: "2026-01-31T12:34:56Z" },
        }),
      ]);

      expect(transitions().t1.gracePeriod).toEqual({
        type: "deadline",
        deadline: "2026-01-31T12:34:56Z",
      });
    });

    it("strips zero milliseconds from a deadline", () => {
      defineWithMigrations([
        transition({
          gracePeriod: {
            type: "deadline",
            deadline: "2026-01-31T12:34:56.000Z",
          },
        }),
      ]);

      expect(transitions().t1.gracePeriod).toEqual({
        type: "deadline",
        deadline: "2026-01-31T12:34:56Z",
      });
    });

    it("preserves non-zero milliseconds on a deadline", () => {
      defineWithMigrations([
        transition({
          gracePeriod: {
            type: "deadline",
            deadline: "2026-01-31T12:34:56.789Z",
          },
        }),
      ]);

      expect(transitions().t1.gracePeriod).toEqual({
        type: "deadline",
        deadline: "2026-01-31T12:34:56.789Z",
      });
    });

    it("resolves an SPT-backed property to the shared property type's api name", () => {
      const spt = defineSharedPropertyType({
        apiName: "ownerSpt",
        type: "string",
      });

      defineInterface({
        apiName: "Foo",
        properties: { ownerSpt: { sharedPropertyType: spt, required: false } },
        schemaMigrations: {
          transitions: [
            transition({
              instructions: [addRequiredProperty("ownerSpt")],
            }),
          ],
        },
      });

      expect(transitions().t1.migrations).toEqual([
        {
          type: "addRequiredProperty",
          addRequiredProperty: { propertyTypeRid: "com.palantir.ownerSpt" },
        },
      ]);
    });
  });

  describe("transition count bounds", () => {
    it("accepts 20 transitions", () => {
      expect(() => defineWithMigrations(distinctTransitions(20))).not.toThrow();
    });

    it("rejects 21 transitions", () => {
      expect(() =>
        defineWithMigrations(distinctTransitions(21)),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Interface com.palantir.Foo has 21 schema migration transitions, which exceeds the maximum of 20.]`,
      );
    });
  });
});
