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

import invariant from "tiny-invariant";
import { beforeEach, describe, expect, it } from "vitest";

import { resolveInterfaceTypeReplacementApiNames } from "../../conversion/toMarketplace/convertInterfaceSchemaMigrations.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../defineInterfaceActionTypeConstraint.js";
import { defineInterfaceLinkConstraint } from "../defineInterfaceLinkConstraint.js";
import { defineOntology, dumpOntologyFullMetadata } from "../defineOntology.js";
import { defineSharedPropertyType } from "../defineSpt.js";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaMigrations,
  InterfaceTypeReplacement,
} from "../interface/InterfaceSchemaMigrations.js";
import type { InterfaceType } from "../interface/InterfaceType.js";

const DEPRECATED = {
  type: "deprecated",
  message: "Use the replacement",
  deadline: "2026-12-31T00:00:00Z",
} as const;

/** Schema migrations declaring a single-instruction transition. */
function migrations(
  instruction: InterfaceSchemaMigrationInstruction,
): InterfaceSchemaMigrations {
  return {
    transitions: [
      {
        id: "t1",
        title: "Some transition",
        gracePeriod: { type: "afterInstall", days: 30 },
        instructions: [instruction],
      },
    ],
  };
}

/**
 * Defines the ontology in `body`, so the cross-entity schema migration checks that run once the
 * body returns (after constraints have been attached) see the fixture.
 */
async function define(body: () => void): Promise<void> {
  await defineOntology("com.palantir.", body, undefined);
}

function migrationsIr(apiName: string) {
  return dumpOntologyFullMetadata().ontology.interfaceTypes[apiName]
    .schemaMigrations?.schemaTransitions.t1.migrations;
}

function status(apiName: string) {
  return dumpOntologyFullMetadata().ontology.interfaceTypes[apiName]
    .interfaceType.status;
}

function defineActionTypeConstraint(
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

describe("Interface schema migrations to ontology IR", () => {
  beforeEach(async () => {
    await defineOntology("com.palantir.", () => {}, undefined);
  });

  describe("addRequiredActionTypeConstraint", () => {
    it("emits the constraint's namespaced api name", async () => {
      await define(() => {
        const foo = defineInterface({
          apiName: "Foo",
          schemaMigrations: migrations({
            type: "addRequiredActionTypeConstraint",
            actionTypeConstraint: "doThing",
          }),
        });
        defineActionTypeConstraint(foo, "doThing", false);
      });

      expect(migrationsIr("com.palantir.Foo")).toMatchInlineSnapshot(`
        [
          {
            "addRequiredActionTypeConstraint": {
              "actionTypeConstraintRid": "com.palantir.doThing",
            },
            "type": "addRequiredActionTypeConstraint",
          },
        ]
      `);
    });

    it("keeps an already-namespaced api name", async () => {
      await define(() => {
        const foo = defineInterface({
          apiName: "Foo",
          schemaMigrations: migrations({
            type: "addRequiredActionTypeConstraint",
            actionTypeConstraint: "com.palantir.doThing",
          }),
        });
        defineActionTypeConstraint(foo, "com.palantir.doThing", false);
      });

      expect(migrationsIr("com.palantir.Foo")).toMatchInlineSnapshot(`
        [
          {
            "addRequiredActionTypeConstraint": {
              "actionTypeConstraintRid": "com.palantir.doThing",
            },
            "type": "addRequiredActionTypeConstraint",
          },
        ]
      `);
    });
  });

  describe("deprecate", () => {
    /**
     * `Old` and its replacement `New`, which inherits `name` from `Base`. Both carry the `ownerSpt`
     * SPT, whose published api name differs from its authored key, a link to `Target`, and an action
     * type constraint, each named differently on either side.
     */
    function defineReplacementPair(): {
      old: InterfaceType;
      replacement: InterfaceTypeReplacement;
    } {
      const ownerSpt = defineSharedPropertyType({
        apiName: "ownerSpt",
        type: "string",
      });
      const target = defineInterface({ apiName: "Target" });
      const base = defineInterface({
        apiName: "Base",
        properties: { name: { type: "string" } },
      });
      const newInterface = defineInterface({
        apiName: "New",
        extends: base,
        properties: {
          ownerSpt: { sharedPropertyType: ownerSpt, required: true },
        },
      });
      const replacement: InterfaceTypeReplacement = {
        interfaceType: newInterface,
        propertyMappings: { title: "name", ownerSpt: "ownerSpt" },
        linkTypeConstraintMappings: { oldTarget: "newTarget" },
        actionTypeConstraintMappings: { oldAction: "newAction" },
      };
      const old = defineInterface({
        apiName: "Old",
        status: DEPRECATED,
        properties: {
          title: { type: "string" },
          ownerSpt: { sharedPropertyType: ownerSpt, required: true },
        },
        schemaMigrations: migrations({ type: "deprecate", replacement }),
      });
      defineInterfaceLinkConstraint({
        apiName: "oldTarget",
        from: old,
        toOne: target,
      });
      defineInterfaceLinkConstraint({
        apiName: "newTarget",
        from: newInterface,
        toOne: target,
      });
      defineActionTypeConstraint(old, "oldAction", true);
      defineActionTypeConstraint(newInterface, "newAction", true);
      return { old, replacement };
    }

    it("emits an empty migration without a replacement", async () => {
      await define(() => {
        defineInterface({
          apiName: "Old",
          status: DEPRECATED,
          schemaMigrations: migrations({ type: "deprecate" }),
        });
      });

      expect(migrationsIr("com.palantir.Old")).toMatchInlineSnapshot(`
        [
          {
            "deprecate": {},
            "type": "deprecate",
          },
        ]
      `);
    });

    it("emits published api names for a locally defined replacement", async () => {
      await define(defineReplacementPair);

      expect(migrationsIr("com.palantir.Old")).toMatchInlineSnapshot(`
        [
          {
            "deprecate": {
              "replacement": {
                "actionTypeConstraintMappings": {
                  "com.palantir.oldAction": "com.palantir.newAction",
                },
                "interfaceTypeRid": "com.palantir.New",
                "linkTypeConstraintMappings": {
                  "com.palantir.oldTarget": "com.palantir.newTarget",
                },
                "propertyMappings": {
                  "com.palantir.ownerSpt": "com.palantir.ownerSpt",
                  "title": "name",
                },
              },
            },
            "type": "deprecate",
          },
        ]
      `);
    });

    it("resolves a string api name of a locally defined replacement", async () => {
      await define(() => {
        defineInterface({
          apiName: "New",
          properties: { name: { type: "string" } },
        });
        defineInterface({
          apiName: "Old",
          status: DEPRECATED,
          properties: { title: { type: "string" } },
          schemaMigrations: migrations({
            type: "deprecate",
            replacement: {
              interfaceType: "New",
              propertyMappings: { title: "name" },
            },
          }),
        });
      });
      expect(migrationsIr("com.palantir.Old")).toMatchInlineSnapshot(`
        [
          {
            "deprecate": {
              "replacement": {
                "actionTypeConstraintMappings": {},
                "interfaceTypeRid": "com.palantir.New",
                "linkTypeConstraintMappings": {},
                "propertyMappings": {
                  "title": "name",
                },
              },
            },
            "type": "deprecate",
          },
        ]
      `);
    });

    it("passes the replacement's names through when it is only known by api name", async () => {
      await define(() => {
        const ownerSpt = defineSharedPropertyType({
          apiName: "ownerSpt",
          type: "string",
        });
        const target = defineInterface({ apiName: "Target" });
        const old = defineInterface({
          apiName: "Old",
          status: DEPRECATED,
          properties: {
            ownerSpt: { sharedPropertyType: ownerSpt, required: true },
          },
          schemaMigrations: migrations({
            type: "deprecate",
            replacement: {
              interfaceType: "com.other.New",
              propertyMappings: { ownerSpt: "owner" },
              linkTypeConstraintMappings: { oldTarget: "com.other.newTarget" },
              actionTypeConstraintMappings: {
                oldAction: "com.other.newAction",
              },
            },
          }),
        });
        defineInterfaceLinkConstraint({
          apiName: "oldTarget",
          from: old,
          toOne: target,
        });
        defineActionTypeConstraint(old, "oldAction", true);
      });

      expect(migrationsIr("com.palantir.Old")).toMatchInlineSnapshot(`
        [
          {
            "deprecate": {
              "replacement": {
                "actionTypeConstraintMappings": {
                  "com.palantir.oldAction": "com.other.newAction",
                },
                "interfaceTypeRid": "com.other.New",
                "linkTypeConstraintMappings": {
                  "com.palantir.oldTarget": "com.other.newTarget",
                },
                "propertyMappings": {
                  "com.palantir.ownerSpt": "owner",
                },
              },
            },
            "type": "deprecate",
          },
        ]
      `);
    });

    describe("resolveInterfaceTypeReplacementApiNames", () => {
      it("exposes the authored key, property, and declaring interface type on each side", async () => {
        let pair: ReturnType<typeof defineReplacementPair> | undefined;
        await define(() => {
          pair = defineReplacementPair();
        });
        invariant(pair !== undefined, "expected the body to run");
        const { old, replacement } = pair;

        expect(
          resolveInterfaceTypeReplacementApiNames(old, replacement),
        ).toMatchObject({
          interfaceTypeApiName: "com.palantir.New",
          propertyMappings: [
            {
              from: {
                apiName: "title",
                authoredKey: "title",
                interfaceTypeApiName: "com.palantir.Old",
                property: { type: "string" },
              },
              to: {
                apiName: "name",
                authoredKey: "name",
                interfaceTypeApiName: "com.palantir.Base",
                property: { type: "string" },
              },
            },
            {
              from: {
                apiName: "com.palantir.ownerSpt",
                authoredKey: "ownerSpt",
                interfaceTypeApiName: "com.palantir.Old",
                property: {
                  required: true,
                  sharedPropertyType: {
                    apiName: "com.palantir.ownerSpt",
                  },
                },
              },
              to: {
                apiName: "com.palantir.ownerSpt",
                authoredKey: "ownerSpt",
                interfaceTypeApiName: "com.palantir.New",
                property: {
                  required: true,
                  sharedPropertyType: {
                    apiName: "com.palantir.ownerSpt",
                  },
                },
              },
            },
          ],
          linkTypeConstraintMappings: [
            {
              from: {
                apiName: "com.palantir.oldTarget",
                interfaceTypeApiName: "com.palantir.Old",
              },
              to: {
                apiName: "com.palantir.newTarget",
                interfaceTypeApiName: "com.palantir.New",
              },
            },
          ],
          actionTypeConstraintMappings: [
            {
              from: {
                apiName: "com.palantir.oldAction",
                interfaceTypeApiName: "com.palantir.Old",
              },
              to: {
                apiName: "com.palantir.newAction",
                interfaceTypeApiName: "com.palantir.New",
              },
            },
          ],
        });
      });
    });
  });

  describe("deprecated status", () => {
    it("carries allowNewImplementations into the IR status", () => {
      defineInterface({
        apiName: "Old",
        status: { ...DEPRECATED, allowNewImplementations: false },
      });

      expect(status("com.palantir.Old")).toMatchInlineSnapshot(`
        {
          "deprecated": {
            "allowNewImplementations": false,
            "deadline": "2026-12-31T00:00:00Z",
            "message": "Use the replacement",
            "replacedBy": undefined,
          },
          "type": "deprecated",
        }
      `);
    });

    it("omits allowNewImplementations when unset", () => {
      defineInterface({ apiName: "Old", status: DEPRECATED });

      expect(status("com.palantir.Old")).toMatchInlineSnapshot(`
        {
          "deprecated": {
            "deadline": "2026-12-31T00:00:00Z",
            "message": "Use the replacement",
            "replacedBy": undefined,
          },
          "type": "deprecated",
        }
      `);
    });
  });
});
