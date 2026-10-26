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

import { beforeEach, describe, expect, it } from "vitest";

import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import type {
  InterfaceTypeDefinition,
  SimplifiedInterfaceTypeStatus,
} from "../defineInterface.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../defineInterfaceActionTypeConstraint.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineOntology } from "../defineOntology.js";
import { importOntologyEntity } from "../importOntologyEntity.js";
import {
  describeFinalization,
  describeInstruction,
  mapPropertyNames,
} from "../interface/describeInterfaceSchemaMigrationInstruction.js";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaTransition,
  InterfaceTypeReplacement,
} from "../interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../interface/InterfaceType.js";

type AuthoredProperty = NonNullable<
  InterfaceTypeDefinition["properties"]
>[string];

const OPTIONAL_STRING: AuthoredProperty = { required: false, type: "string" };
const REQUIRED_STRING: AuthoredProperty = { required: true, type: "string" };
const REQUIRED_INTEGER: AuthoredProperty = { required: true, type: "integer" };

const DEPRECATED: SimplifiedInterfaceTypeStatus = {
  type: "deprecated",
  message: "Use Bar instead",
  deadline: "2027-01-01T00:00:00Z",
};

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

/** A replacement known only by API name, so there is nothing to check its mappings against. */
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
): void {
  defineInterfaceActionTypeConstraint({
    interfaceType,
    apiName,
    displayName: apiName,
    description: apiName,
    requireImplementation,
    parameters: [],
  });
}

/** Runs `body` as an ontology, so that the ontology-level validation runs too. */
function inOntology(body: () => void): Promise<unknown> {
  return defineOntology("com.palantir.", body, undefined);
}

/** `Foo`, being replaced by `replacement`. */
function defineReplaced(
  replacement: InterfaceTypeReplacement = UNRESOLVED_REPLACEMENT,
  overrides: Partial<InterfaceTypeDefinition> = {},
): InterfaceType {
  return defineInterface({
    apiName: "Foo",
    status: DEPRECATED,
    properties: { name: REQUIRED_STRING },
    schemaMigrations: { transitions: [transition([replace(replacement)])] },
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

    it("accepts a directly declared requireImplementation:false constraint", async () => {
      await expect(
        inOntology(() => {
          defineConstraint(
            defineWithConstraintMigration("doThing"),
            "doThing",
            false,
          );
        }),
      ).resolves.toBeDefined();
    });

    it("accepts a fully-qualified constraint name", async () => {
      await expect(
        inOntology(() => {
          defineConstraint(
            defineWithConstraintMigration("com.palantir.doThing"),
            "doThing",
            false,
          );
        }),
      ).resolves.toBeDefined();
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

  describe("replace: local shape", () => {
    it("accepts a replacement known only by api name", async () => {
      await expect(
        inOntology(() => {
          defineReplaced();
        }),
      ).resolves.toBeDefined();
    });

    it("rejects an interface that is not deprecated", () => {
      expect(() =>
        defineReplaced(undefined, { status: { type: "active" } }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but interface com.palantir.Foo has status "active". Set its status to \`{ type: "deprecated", ... }\` while the migration is in flight.]`,
      );
    });

    it("rejects a replacement sharing its transition with another instruction", () => {
      expect(() =>
        defineReplaced(undefined, {
          properties: { optional: OPTIONAL_STRING },
          schemaMigrations: {
            transitions: [
              transition([
                replace(),
                { type: "addRequiredProperty", property: "optional" },
              ]),
            ],
          },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but the transition has 2 instructions. A replacement must be the only instruction of the only transition on its interface; finalize or remove the other migrations first.]`,
      );
    });

    it("rejects a replacement alongside another transition", () => {
      expect(() =>
        defineReplaced(undefined, {
          properties: { optional: OPTIONAL_STRING },
          schemaMigrations: {
            transitions: [
              transition([replace()], "t1"),
              transition(
                [{ type: "addRequiredProperty", property: "optional" }],
                "t2",
              ),
            ],
          },
        }),
      ).toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but interface com.palantir.Foo has 2 transitions. A replacement must be the only instruction of the only transition on its interface; finalize or remove the other migrations first.]`,
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
  });

  describe("replace: references", () => {
    it("accepts a replacement whose required entities are all mapped", async () => {
      await expect(
        inOntology(() => {
          const target = defineInterface({ apiName: "Target" });
          const bar = defineReplacement();
          defineInterfaceLinkConstraint({
            apiName: "barLink",
            from: bar,
            toOne: target,
          });
          defineConstraint(bar, "barAction", true);

          const foo = defineReplaced({
            interfaceType: bar,
            propertyMappings: { name: "fullName" },
            linkTypeConstraintMappings: { fooLink: "barLink" },
            actionTypeConstraintMappings: { fooAction: "barAction" },
          });
          defineInterfaceLinkConstraint({
            apiName: "fooLink",
            from: foo,
            toOne: target,
          });
          defineConstraint(foo, "fooAction", true);
        }),
      ).resolves.toBeDefined();
    });

    it("accepts an inherited property as a mapping source", async () => {
      await expect(
        inOntology(() => {
          const bar = defineReplacement();
          const parent = defineInterface({
            apiName: "Parent",
            properties: { name: REQUIRED_STRING },
            schemaMigrations: { transitions: [] },
          });
          defineReplaced(
            { interfaceType: bar, propertyMappings: { name: "fullName" } },
            { properties: {}, extends: parent },
          );
        }),
      ).resolves.toBeDefined();
    });

    it("resolves a replacement named by its un-namespaced API name", async () => {
      await expect(
        inOntology(() => {
          defineReplacement();
          defineReplaced({ interfaceType: "Bar", propertyMappings: {} });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("Bar"), but its propertyMappings does not map to property "fullName", which com.palantir.Bar requires (or will require once its in-flight migrations finalize). Map a property of com.palantir.Foo to it, so that proposals produce a valid implementation.]`,
      );
    });

    it("skips replacement checks for an interface type it has no definition for", async () => {
      await expect(
        inOntology(() => {
          defineReplaced({
            interfaceType: "com.other.Unknown",
            propertyMappings: { name: "whatever" },
          });
        }),
      ).resolves.toBeDefined();
    });

    it("validates against an imported replacement's definition", async () => {
      await expect(
        inOntology(() => {
          importOntologyEntity(importedInterface());
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
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Bar"), but interface com.palantir.Child extends it. An interface type may not be replaced while another interface type extends it; remove the extension first.]`,
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

    it("rejects a deprecated replacement", async () => {
      await expect(
        inOntology(() => {
          const bar = defineReplacement({ status: DEPRECATED });
          defineReplaced({
            interfaceType: bar,
            propertyMappings: { name: "fullName" },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but com.palantir.Bar is itself deprecated. Replace com.palantir.Foo with an interface type that is not deprecated.]`,
      );
    });

    it("rejects a replacement that is itself being replaced", async () => {
      await expect(
        inOntology(() => {
          importOntologyEntity({
            ...importedInterface(),
            schemaMigrations: { transitions: [transition([replace()])] },
          });
          defineReplaced({
            interfaceType: "com.other.Imported",
            propertyMappings: { name: "fullName" },
          });
        }),
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.other.Imported"), but com.other.Imported is itself being replaced. Replace com.palantir.Foo with an interface type that is not being replaced.]`,
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
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its propertyMappings does not map to property "fullName", which com.palantir.Bar requires (or will require once its in-flight migrations finalize). Map a property of com.palantir.Foo to it, so that proposals produce a valid implementation.]`,
        );
      });

      it("accepts an unmapped optional target", async () => {
        await expect(
          inOntology(() => {
            defineReplaced({
              interfaceType: defineReplacement({
                properties: { fullName: OPTIONAL_STRING },
              }),
              propertyMappings: {},
            });
          }),
        ).resolves.toBeDefined();
      });

      it("rejects an unmapped target the replacement is migrating to required", async () => {
        await expect(
          inOntology(() => {
            defineReplaced({
              interfaceType: defineReplacement({
                properties: { fullName: OPTIONAL_STRING },
                schemaMigrations: {
                  transitions: [
                    transition([
                      { type: "addRequiredProperty", property: "fullName" },
                    ]),
                  ],
                },
              }),
              propertyMappings: {},
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its propertyMappings does not map to property "fullName", which com.palantir.Bar requires (or will require once its in-flight migrations finalize). Map a property of com.palantir.Foo to it, so that proposals produce a valid implementation.]`,
        );
      });
    });

    describe("linkTypeConstraintMappings", () => {
      function defineWithLinks(
        barLink: { many: boolean; required: boolean; to?: string },
        mappings: Record<string, string>,
      ): void {
        const target = defineInterface({ apiName: "Target" });
        const other = defineInterface({ apiName: "Other" });
        const bar = defineReplacement();
        const barTo = barLink.to === "Other" ? other : target;
        defineInterfaceLinkConstraint(
          barLink.many
            ? {
                apiName: "barLink",
                from: bar,
                toMany: barTo,
                required: barLink.required,
              }
            : {
                apiName: "barLink",
                from: bar,
                toOne: barTo,
                required: barLink.required,
              },
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
          inOntology(() =>
            defineWithLinks(
              { many: false, required: false },
              { fooLink: "missing" },
            ),
          ),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose linkTypeConstraintMappings maps to link type constraint "missing", but com.palantir.Bar has no such link type constraint.]`,
        );
      });

      it("rejects mismatched cardinality", async () => {
        await expect(
          inOntology(() =>
            defineWithLinks(
              { many: true, required: true },
              { fooLink: "barLink" },
            ),
          ),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose linkTypeConstraintMappings maps link type constraint "fooLink" to "barLink", but its cardinality SINGLE does not match MANY.]`,
        );
      });

      it("rejects a mismatched linked entity", async () => {
        await expect(
          inOntology(() =>
            defineWithLinks(
              { many: false, required: true, to: "Other" },
              { fooLink: "barLink" },
            ),
          ),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), whose linkTypeConstraintMappings maps link type constraint "fooLink" to "barLink", but its linked entity interface com.palantir.Target does not match interface com.palantir.Other.]`,
        );
      });

      it("rejects an unmapped required target", async () => {
        await expect(
          inOntology(() =>
            defineWithLinks({ many: false, required: true }, {}),
          ),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its linkTypeConstraintMappings does not map to link type constraint "com.palantir.barLink", which com.palantir.Bar requires (or will require once its in-flight migrations finalize). Map a link type constraint of com.palantir.Foo to it, so that proposals produce a valid implementation.]`,
        );
      });

      it("accepts an unmapped optional target", async () => {
        await expect(
          inOntology(() =>
            defineWithLinks({ many: false, required: false }, {}),
          ),
        ).resolves.toBeDefined();
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
              actionTypeConstraintMappings: { missing: "barAction" },
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
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its actionTypeConstraintMappings does not map to action type constraint "com.palantir.barAction", which com.palantir.Bar requires (or will require once its in-flight migrations finalize). Map a action type constraint of com.palantir.Foo to it, so that proposals produce a valid implementation.]`,
        );
      });

      it("rejects an unmapped target the replacement is migrating to required", async () => {
        await expect(
          inOntology(() => {
            const bar = defineReplacement({
              schemaMigrations: {
                transitions: [transition([requireConstraint("barAction")])],
              },
            });
            defineConstraint(bar, "barAction", false);
            defineReplaced({
              interfaceType: bar,
              propertyMappings: { name: "fullName" },
            });
          }),
        ).rejects.toThrowErrorMatchingInlineSnapshot(
          `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares replace("com.palantir.Bar"), but its actionTypeConstraintMappings does not map to action type constraint "com.palantir.barAction", which com.palantir.Bar requires (or will require once its in-flight migrations finalize). Map a action type constraint of com.palantir.Foo to it, so that proposals produce a valid implementation.]`,
        );
      });
    });
  });

  describe("prose", () => {
    it("describes each instruction and its finalization", () => {
      const instructions: InterfaceSchemaMigrationInstruction[] = [
        requireConstraint("doThing"),
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
            "addRequiredActionTypeConstraint("doThing")",
            "set "doThing" to \`requireImplementation: true\`",
          ],
          [
            "replace("com.other.Bar")",
            "keep the interface's \`deprecated\` status",
          ],
        ]
      `);
    });

    it("renames only the keys of a replacement's property mappings", () => {
      expect(
        mapPropertyNames(
          replace({
            interfaceType: "com.other.Bar",
            propertyMappings: { name: "fullName" },
            linkTypeConstraintMappings: { fooLink: "barLink" },
          }),
          (key) => `com.palantir.${key}`,
        ),
      ).toEqual(
        replace({
          interfaceType: "com.other.Bar",
          propertyMappings: { "com.palantir.name": "fullName" },
          linkTypeConstraintMappings: { fooLink: "barLink" },
        }),
      );
    });

    it("leaves an action type constraint migration unchanged", () => {
      const instruction = requireConstraint("doThing");
      expect(mapPropertyNames(instruction, (key) => `x.${key}`)).toEqual(
        instruction,
      );
    });
  });
});

function importedInterface(): InterfaceType {
  return {
    apiName: "com.other.Imported",
    displayMetadata: { displayName: "Imported" },
    propertiesV2: {},
    propertiesV3: { fullName: { type: "string", required: true } },
    extendsInterfaces: [],
    links: [],
    actionTypeConstraints: [],
    status: { type: "active", active: {} },
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
  };
}
