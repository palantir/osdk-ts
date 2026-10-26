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

import type {
  InterfaceTypeBlockDataV2,
  InterfaceTypeSchemaTransition,
  MarketplaceInterfacePropertyType,
  OntologyBlockDataV2,
} from "@osdk/client.unstable";
import type { OutputShape } from "@osdk/client.unstable/api";
import type {
  InterfaceSchemaMigrationInstruction,
  InterfaceSchemaMigrations,
  InterfaceSchemaTransition,
  InterfaceType,
} from "@osdk/maker";
import {
  defineInterface,
  defineInterfaceActionTypeConstraint,
  defineInterfaceLinkConstraint,
  defineOntology,
  defineSharedPropertyType,
  importOntologyEntity,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import { beforeEach, describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";
import { toBlockShapeId } from "../../cli/marketplaceSerialization/CodeBlockSpec.js";
import {
  type ReadableId,
  ReadableIdGenerator,
} from "../../util/generateRid.js";

const DEADLINE = "2026-01-31T12:34:56Z";

async function convertOntology(body: () => void) {
  const result = await defineOntologyV2("com.palantir.", body);
  return result.ontologyIr.ontology;
}

async function convertInterfaces(
  body: () => void,
): Promise<InterfaceTypeBlockDataV2> {
  const blocks = Object.values((await convertOntology(body)).interfaceTypes);
  invariant(
    blocks.length === 1,
    `expected one interface, got ${blocks.length}`,
  );
  return blocks[0];
}

function transitionsOf(
  block: InterfaceTypeBlockDataV2,
): Record<string, InterfaceTypeSchemaTransition> {
  const { schemaMigrations } = block;
  invariant(schemaMigrations != null, "expected schema migrations");
  return schemaMigrations.schemaTransitions;
}

/** Block data keys transitions by their generated rid, not their authored id. */
function transitionById(
  block: InterfaceTypeBlockDataV2,
  id: string,
): InterfaceTypeSchemaTransition {
  const found = Object.values(transitionsOf(block)).find((t) => t.id === id);
  invariant(found != null, `expected a transition with id ${id}`);
  return found;
}

function transition(
  overrides: Partial<InterfaceSchemaTransition> = {},
): InterfaceSchemaTransition {
  return {
    id: "t1",
    title: "Some transition",
    gracePeriod: { type: "afterInstall", days: 30 },
    instructions: [{ type: "addRequiredProperty", property: "optional" }],
    ...overrides,
  };
}

beforeEach(async () => {
  await defineOntology("com.palantir.", () => {}, undefined);
});

describe("interface type schema migrations", () => {
  it("omits the migration block when not opted in", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({ apiName: "Foo" });
    });

    expect(block.schemaMigrations).toBeUndefined();
    expect(block.interfaceType).not.toHaveProperty("schemaMigrationsEnabled");
  });

  it("sets schemaMigrationsEnabled when opted in with no transitions", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        schemaMigrations: { transitions: [] },
      });
    });

    expect(block.interfaceType.schemaMigrationsEnabled).toBe(true);
    expect(block.schemaMigrations).toEqual({
      interfaceActionTypeConstraintRidsToApiNames: {},
      interfaceLinkTypeRidsToApiNames: {},
      interfacePropertyTypeRidsToApiNames: {},
      interfaceTypeRidsToApiNames: {},
      schemaTransitions: {},
    });
  });

  it("keys transitions by their generated rid", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: { transitions: [transition({ id: "add-owner" })] },
      });
    });

    const [[rid, only]] = Object.entries(transitionsOf(block));
    expect(rid).toMatch(
      /^ri\.ontology-metadata\.temp\.interface-schema-transition\./u,
    );
    expect(only.rid).toBe(rid);
    expect(only.id).toBe("add-owner");
  });

  it("records each transition in the block's known identifiers", async () => {
    const ontology = await convertOntology(() => {
      defineInterface({
        apiName: "Foo",
        properties: {
          optional: { required: false, type: "string" },
          other: { required: false, type: "string" },
        },
        schemaMigrations: {
          transitions: [
            transition({ id: "t1" }),
            transition({
              id: "t2",
              instructions: [
                { type: "addRequiredProperty", property: "other" },
              ],
            }),
          ],
        },
      });
    });

    const [interfaceRid] = Object.keys(ontology.interfaceTypes);
    const { interfaceTypeSchemaTransitions } = ontology.knownIdentifiers;
    const transitionRids = Object.keys(
      transitionsOf(ontology.interfaceTypes[interfaceRid]),
    );

    expect(transitionRids).toHaveLength(2);
    expect(Object.keys(interfaceTypeSchemaTransitions).sort()).toEqual(
      [...transitionRids].sort(),
    );
    // Each transition gets its own block internal id
    expect(new Set(Object.values(interfaceTypeSchemaTransitions))).toHaveLength(
      2,
    );
  });

  it("records no known identifiers for an interface without migrations", async () => {
    const ontology = await convertOntology(() => {
      defineInterface({ apiName: "Foo" });
    });

    expect(ontology.knownIdentifiers.interfaceTypeSchemaTransitions).toEqual(
      {},
    );
  });

  it("translates an afterInstall transition to daysAfterActivation", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: {
          transitions: [
            transition({
              id: "add-owner",
              title: "Require owner",
              description: "some description",
              gracePeriod: { type: "afterInstall", days: 30 },
            }),
          ],
        },
      });
    });

    expect(block.interfaceType.schemaMigrationsEnabled).toBe(true);
    expect(transitionById(block, "add-owner")).toEqual({
      rid: expect.any(String),
      id: "add-owner",
      title: "Require owner",
      description: "some description",
      gracePeriod: { type: "daysAfterActivation", daysAfterActivation: 30 },
      migrations: [
        {
          type: "addRequiredProperty",
          addRequiredProperty: { propertyTypeRid: expect.any(String) },
        },
      ],
    });
  });

  it("translates a deadline transition", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: {
          transitions: [
            transition({
              gracePeriod: { type: "deadline", deadline: DEADLINE },
            }),
          ],
        },
      });
    });

    expect(transitionById(block, "t1").gracePeriod).toEqual({
      type: "deadline",
      deadline: DEADLINE,
    });
  });

  it("strips zero milliseconds from a deadline", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: {
          transitions: [
            transition({
              gracePeriod: {
                type: "deadline",
                deadline: "2026-01-31T12:34:56.000Z",
              },
            }),
          ],
        },
      });
    });

    expect(transitionById(block, "t1").gracePeriod).toEqual({
      type: "deadline",
      deadline: "2026-01-31T12:34:56Z",
    });
  });

  it("targets an interface-defined property by its published rid", async () => {
    const block = await convertInterfaces(() => {
      defineInterface({
        apiName: "Foo",
        properties: { optional: { required: false, type: "string" } },
        schemaMigrations: { transitions: [transition()] },
      });
    });

    const [migration] = transitionById(block, "t1").migrations;
    invariant(migration.type === "addRequiredProperty");
    const { propertyTypeRid } = migration.addRequiredProperty;

    expect(block.interfaceType.propertiesV3[propertyTypeRid]).toMatchObject({
      type: "interfaceDefinedPropertyType",
      interfaceDefinedPropertyType: { apiName: "optional" },
    });
    expect(block.schemaMigrations?.interfacePropertyTypeRidsToApiNames).toEqual(
      { [propertyTypeRid]: "optional" },
    );
  });

  it("targets an SPT-backed property by its published rid", async () => {
    const block = await convertInterfaces(() => {
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
              instructions: [
                { type: "addRequiredProperty", property: "ownerSpt" },
              ],
            }),
          ],
        },
      });
    });

    const [migration] = transitionById(block, "t1").migrations;
    invariant(migration.type === "addRequiredProperty");
    const { propertyTypeRid } = migration.addRequiredProperty;

    expect(block.interfaceType.propertiesV3[propertyTypeRid]).toMatchObject({
      type: "sharedPropertyBasedPropertyType",
      sharedPropertyBasedPropertyType: {
        sharedPropertyType: { apiName: "com.palantir.ownerSpt" },
      },
    });
    expect(block.schemaMigrations?.interfacePropertyTypeRidsToApiNames).toEqual(
      { [propertyTypeRid]: "com.palantir.ownerSpt" },
    );
  });
});

describe("interface type schema migration output shapes", () => {
  async function convertWithShapes(body: () => void) {
    const { ontologyIr, shapes } = await defineOntologyV2(
      "com.palantir.",
      body,
    );
    const { ontology } = ontologyIr;
    const [[interfaceRid, block]] = Object.entries(ontology.interfaceTypes);
    const interfaceShape = shapes.outputShapes.get(
      ReadableIdGenerator.getForInterface(block.interfaceType.apiName),
    );
    invariant(interfaceShape?.type === "interfaceType");
    return {
      ontology,
      interfaceRid,
      block,
      outputShapes: shapes.outputShapes,
      interfaceShape: interfaceShape.interfaceType,
    };
  }

  function transitionShape(
    outputShapes: Map<ReadableId, OutputShape>,
    id: string,
  ) {
    const shape = outputShapes.get(
      ReadableIdGenerator.getForInterfaceSchemaTransition(
        "com.palantir.Foo",
        id,
      ),
    );
    invariant(
      shape?.type === "interfaceTypeSchemaTransition",
      `expected a transition output shape for ${id}`,
    );
    return shape.interfaceTypeSchemaTransition;
  }

  it("emits transition output shapes and links them from the interface", async () => {
    const { ontology, interfaceRid, block, outputShapes, interfaceShape } =
      await convertWithShapes(() => {
        defineInterface({
          apiName: "Foo",
          properties: {
            optional: { required: false, type: "string" },
            other: { required: false, type: "string" },
          },
          schemaMigrations: {
            transitions: [
              transition({
                id: "add-optional",
                title: "Add optional",
                description: "Requires optional",
              }),
              transition({
                id: "no-description",
                instructions: [
                  { type: "addRequiredProperty", property: "other" },
                ],
              }),
            ],
          },
        });
      });

    const { interfaceTypes, interfacePropertyTypes } =
      ontology.knownIdentifiers;
    const [migration] = transitionById(block, "add-optional").migrations;
    invariant(migration.type === "addRequiredProperty");
    const expectedMigrations = [
      {
        type: "addRequiredProperty",
        addRequiredProperty: {
          interfaceProperty:
            interfacePropertyTypes[
              migration.addRequiredProperty.propertyTypeRid
            ],
        },
      },
    ];

    expect(transitionShape(outputShapes, "add-optional")).toEqual({
      about: {
        fallbackTitle: "Add optional",
        fallbackDescription: "Requires optional",
        localizedTitle: {},
        localizedDescription: {},
      },
      transitionId: "add-optional",
      interfaceType: interfaceTypes[interfaceRid],
      migrations: expectedMigrations,
    });
    expect(transitionShape(outputShapes, "no-description")).toMatchObject({
      about: { fallbackTitle: "Some transition", fallbackDescription: "" },
      transitionId: "no-description",
    });
    expect([...interfaceShape.schemaTransitionMetadata].sort()).toEqual(
      Object.values(
        ontology.knownIdentifiers.interfaceTypeSchemaTransitions,
      ).sort(),
    );
  });

  it("emits no transition shapes for an interface without migrations", async () => {
    const { outputShapes, interfaceShape } = await convertWithShapes(() => {
      defineInterface({ apiName: "Foo" });
    });

    expect(interfaceShape.schemaTransitionMetadata).toEqual([]);
    expect(
      [...outputShapes.values()].filter(
        (shape) => shape.type === "interfaceTypeSchemaTransition",
      ),
    ).toEqual([]);
  });
});

const DEPRECATED = {
  type: "deprecated",
  message: "Use the replacement",
  deadline: "2026-12-31T00:00:00Z",
} as const;

/** Schema migrations declaring a single-instruction transition. */
function migrations(
  instruction: InterfaceSchemaMigrationInstruction,
): InterfaceSchemaMigrations {
  return { transitions: [transition({ instructions: [instruction] })] };
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

/**
 * `Old` and its replacement `New`, which inherits `name` from `Base`. Both carry the `ownerSpt` SPT,
 * a link to `Target`, and an action type constraint, each named differently on either side.
 */
function defineReplacementPair(
  replacementOf: (newInterface: InterfaceType) => InterfaceType | string = (
    newInterface,
  ) => newInterface,
): void {
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
    properties: { ownerSpt: { sharedPropertyType: ownerSpt, required: true } },
  });
  const old = defineInterface({
    apiName: "Old",
    status: DEPRECATED,
    properties: {
      title: { type: "string" },
      ownerSpt: { sharedPropertyType: ownerSpt, required: true },
    },
    schemaMigrations: migrations({
      type: "replace",
      replacement: {
        interfaceType: replacementOf(newInterface),
        propertyMappings: { title: "name", ownerSpt: "ownerSpt" },
        linkTypeConstraintMappings: { oldTarget: "newTarget" },
        actionTypeConstraintMappings: { oldAction: "newAction" },
      },
    }),
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
}

/** An interface type declared as an input to the project, with a property and a constraint. */
function importedInterface(): InterfaceType {
  return {
    apiName: "com.other.Imported",
    displayMetadata: { displayName: "Imported" },
    propertiesV2: {},
    propertiesV3: { fullName: { type: "string", required: true } },
    extendsInterfaces: [],
    links: [],
    actionTypeConstraints: [
      {
        metadata: {
          apiName: "com.other.importedAction",
          displayName: "importedAction",
          description: "importedAction",
        },
        parameters: {},
        requireImplementation: true,
      },
    ],
    status: { type: "active", active: {} },
    __type: OntologyEntityTypeEnum.INTERFACE_TYPE,
  };
}

/** Replaces `Old` with the imported interface type, which is referenced by API name. */
function defineImportedReplacement(): void {
  importOntologyEntity(importedInterface());
  const old = defineInterface({
    apiName: "Old",
    status: DEPRECATED,
    properties: { title: { type: "string" } },
    schemaMigrations: migrations({
      type: "replace",
      replacement: {
        interfaceType: "com.other.Imported",
        propertyMappings: { title: "fullName" },
        actionTypeConstraintMappings: {
          oldAction: "com.other.importedAction",
        },
      },
    }),
  });
  defineActionTypeConstraint(old, "oldAction", true);
}

function blockOf(
  ontology: OntologyBlockDataV2,
  apiName: string,
): { rid: string; block: InterfaceTypeBlockDataV2 } {
  const found = Object.entries(ontology.interfaceTypes).find(
    ([, block]) => block.interfaceType.apiName === apiName,
  );
  invariant(found != null, `expected an interface ${apiName}`);
  return { rid: found[0], block: found[1] };
}

function wirePropertyApiName(property: MarketplaceInterfacePropertyType) {
  return property.type === "interfaceDefinedPropertyType"
    ? property.interfaceDefinedPropertyType.apiName
    : property.sharedPropertyBasedPropertyType.sharedPropertyType.apiName;
}

/** The rids an interface block publishes its own members under. */
function memberRids(ontology: OntologyBlockDataV2, apiName: string) {
  const { interfaceType } = blockOf(ontology, apiName).block;
  const find = (
    entries: Array<[string, string]>,
    kind: string,
    name: string,
  ): string => {
    const found = entries.find(([, candidate]) => candidate === name);
    invariant(found != null, `expected ${apiName} to declare ${kind} ${name}`);
    return found[0];
  };
  return {
    property: (name: string) =>
      find(
        Object.entries(interfaceType.propertiesV3).map(([rid, property]) => [
          rid,
          wirePropertyApiName(property),
        ]),
        "property",
        name,
      ),
    link: (name: string) =>
      find(
        interfaceType.links.map((link) => [link.rid, link.metadata.apiName]),
        "link",
        name,
      ),
    actionTypeConstraint: (name: string) =>
      find(
        interfaceType.actionTypeConstraints.map((constraint) => [
          constraint.rid,
          constraint.metadata.apiName,
        ]),
        "action type constraint",
        name,
      ),
  };
}

function onlyMigration(block: InterfaceTypeBlockDataV2) {
  const [migration] = transitionById(block, "t1").migrations;
  return migration;
}

describe("addRequiredActionTypeConstraint and replace schema migrations", () => {
  it("targets an action type constraint by its published rid", async () => {
    const block = await convertInterfaces(() => {
      const foo = defineInterface({
        apiName: "Foo",
        schemaMigrations: migrations({
          type: "addRequiredActionTypeConstraint",
          actionTypeConstraint: "doThing",
        }),
      });
      defineActionTypeConstraint(foo, "doThing", false);
    });

    const [constraint] = block.interfaceType.actionTypeConstraints;
    expect(constraint.requireImplementation).toBe(false);
    expect(onlyMigration(block)).toEqual({
      type: "addRequiredActionTypeConstraint",
      addRequiredActionTypeConstraint: {
        actionTypeConstraintRid: constraint.rid,
      },
    });
    expect(block.schemaMigrations).toMatchObject({
      interfaceActionTypeConstraintRidsToApiNames: {
        [constraint.rid]: "com.palantir.doThing",
      },
      interfaceLinkTypeRidsToApiNames: {},
      interfacePropertyTypeRidsToApiNames: {},
      interfaceTypeRidsToApiNames: {},
    });
  });

  it("maps a locally defined replacement's members by their published rids", async () => {
    const ontology = await convertOntology(() => defineReplacementPair());
    const { block } = blockOf(ontology, "com.palantir.Old");
    const newRid = blockOf(ontology, "com.palantir.New").rid;
    const old = memberRids(ontology, "com.palantir.Old");
    const replacement = memberRids(ontology, "com.palantir.New");
    // `name` is inherited, so it's published by the interface that declares it
    const base = memberRids(ontology, "com.palantir.Base");

    expect(onlyMigration(block)).toEqual({
      type: "replace",
      replace: {
        replacement: {
          interfaceTypeRid: newRid,
          propertyMappings: {
            [old.property("title")]: base.property("name"),
            // SPT-backed properties share an rid derived from the SPT's
            [old.property("com.palantir.ownerSpt")]: replacement.property(
              "com.palantir.ownerSpt",
            ),
          },
          linkTypeConstraintMappings: {
            [old.link("com.palantir.oldTarget")]: replacement.link(
              "com.palantir.newTarget",
            ),
          },
          actionTypeConstraintMappings: {
            [old.actionTypeConstraint("com.palantir.oldAction")]:
              replacement.actionTypeConstraint("com.palantir.newAction"),
          },
        },
      },
    });
    expect(block.schemaMigrations).toMatchObject({
      interfaceActionTypeConstraintRidsToApiNames: {
        [old.actionTypeConstraint("com.palantir.oldAction")]:
          "com.palantir.oldAction",
        [replacement.actionTypeConstraint("com.palantir.newAction")]:
          "com.palantir.newAction",
      },
      interfaceLinkTypeRidsToApiNames: {
        [old.link("com.palantir.oldTarget")]: "com.palantir.oldTarget",
        [replacement.link("com.palantir.newTarget")]: "com.palantir.newTarget",
      },
      interfacePropertyTypeRidsToApiNames: {
        [old.property("title")]: "title",
        [base.property("name")]: "name",
        [old.property("com.palantir.ownerSpt")]: "com.palantir.ownerSpt",
      },
      interfaceTypeRidsToApiNames: { [newRid]: "com.palantir.New" },
    });
  });

  it("resolves a replacement referenced by the API name of a local interface", async () => {
    const byObject = onlyMigration(
      blockOf(
        await convertOntology(() => defineReplacementPair()),
        "com.palantir.Old",
      ).block,
    );
    const byApiName = onlyMigration(
      blockOf(
        await convertOntology(() => defineReplacementPair(() => "New")),
        "com.palantir.Old",
      ).block,
    );

    expect(byApiName).toEqual(byObject);
  });

  it("maps an imported replacement onto the rids of its imported block data", async () => {
    const { ontologyIr } = await defineOntologyV2(
      "com.palantir.",
      defineImportedReplacement,
    );
    const { ontology, importedOntology } = ontologyIr;
    const { block } = blockOf(ontology, "com.palantir.Old");
    const importedRid = blockOf(importedOntology, "com.other.Imported").rid;
    const old = memberRids(ontology, "com.palantir.Old");
    const imported = memberRids(importedOntology, "com.other.Imported");

    expect(onlyMigration(block)).toEqual({
      type: "replace",
      replace: {
        replacement: {
          interfaceTypeRid: importedRid,
          propertyMappings: {
            [old.property("title")]: imported.property("fullName"),
          },
          linkTypeConstraintMappings: {},
          actionTypeConstraintMappings: {
            [old.actionTypeConstraint("com.palantir.oldAction")]:
              imported.actionTypeConstraint("com.other.importedAction"),
          },
        },
      },
    });
    expect(block.schemaMigrations?.interfaceTypeRidsToApiNames).toEqual({
      [importedRid]: "com.other.Imported",
    });
  });

  it("rejects a replacement that is neither defined locally nor imported", async () => {
    await expect(
      convertOntology(() => {
        defineInterface({
          apiName: "Old",
          status: DEPRECATED,
          properties: { title: { type: "string" } },
          schemaMigrations: migrations({
            type: "replace",
            replacement: {
              interfaceType: "com.other.Unknown",
              propertyMappings: { title: "fullName" },
            },
          }),
        });
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Interface com.palantir.Old is being replaced by com.other.Unknown, which is neither defined in this ontology nor imported. Import it with \`importOntologyEntity\` so that it becomes an input to this block.]`,
    );
  });

  it("runs the cross-entity checks once the body has attached constraints", async () => {
    await expect(
      convertOntology(() => {
        const foo = defineInterface({
          apiName: "Foo",
          schemaMigrations: migrations({
            type: "addRequiredActionTypeConstraint",
            actionTypeConstraint: "doThing",
          }),
        });
        defineActionTypeConstraint(foo, "doThing", true);
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Invariant failed: Schema migration transition "t1" on interface com.palantir.Foo declares addRequiredActionTypeConstraint("doThing"), but action type constraint "com.palantir.doThing" is \`requireImplementation: true\`. Only action type constraints declared \`requireImplementation: false\` may be targeted.]`,
    );
  });

  it("rejects mapping to an SPT-backed property of an imported replacement", async () => {
    await expect(
      convertOntology(() => {
        const ownerSpt = defineSharedPropertyType({
          apiName: "ownerSpt",
          type: "string",
        });
        importOntologyEntity(ownerSpt);
        importOntologyEntity({
          ...importedInterface(),
          actionTypeConstraints: [],
          propertiesV3: {
            ownerSpt: {
              sharedPropertyType: ownerSpt,
              required: true,
            },
          },
        });
        defineInterface({
          apiName: "Old",
          status: DEPRECATED,
          properties: { title: { type: "string" } },
          schemaMigrations: migrations({
            type: "replace",
            replacement: {
              interfaceType: "com.other.Imported",
              propertyMappings: { title: "ownerSpt" },
            },
          }),
        });
      }),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Interface com.palantir.Old is being replaced by com.other.Imported, mapping property "title" to the SPT-backed property "com.palantir.ownerSpt" of imported interface com.other.Imported. Mapping to imported SPT-backed properties is not supported yet, because they have no interface property type input shape to reference.]`,
    );
  });
});

describe("addRequiredActionTypeConstraint and replace output shapes", () => {
  async function convertWithShapes(body: () => void) {
    const { ontologyIr, shapes } = await defineOntologyV2(
      "com.palantir.",
      body,
    );
    return { ontology: ontologyIr.ontology, shapes };
  }

  function migrationShape(
    outputShapes: Map<ReadableId, OutputShape>,
    interfaceApiName: string,
  ) {
    const shape = outputShapes.get(
      ReadableIdGenerator.getForInterfaceSchemaTransition(
        interfaceApiName,
        "t1",
      ),
    );
    invariant(shape?.type === "interfaceTypeSchemaTransition");
    const [migration] = shape.interfaceTypeSchemaTransition.migrations;
    return migration;
  }

  const blockId = (readableId: ReadableId) => toBlockShapeId(readableId);

  it("references the targeted action type constraint's output shape", async () => {
    const { shapes } = await convertWithShapes(() => {
      const foo = defineInterface({
        apiName: "Foo",
        schemaMigrations: migrations({
          type: "addRequiredActionTypeConstraint",
          actionTypeConstraint: "doThing",
        }),
      });
      defineActionTypeConstraint(foo, "doThing", false);
    });
    const constraintId =
      ReadableIdGenerator.getForInterfaceActionTypeConstraint(
        "com.palantir.Foo",
        "com.palantir.doThing",
      );

    expect(shapes.outputShapes.get(constraintId)?.type).toBe(
      "interfaceActionTypeConstraint",
    );
    expect(migrationShape(shapes.outputShapes, "com.palantir.Foo")).toEqual({
      type: "addRequiredActionTypeConstraint",
      addRequiredActionTypeConstraint: {
        actionTypeConstraint: blockId(constraintId),
      },
    });
  });

  it("references a locally defined replacement's output shapes", async () => {
    const { shapes } = await convertWithShapes(() => defineReplacementPair());
    const ids = {
      newInterface: ReadableIdGenerator.getForInterface("com.palantir.New"),
      title: ReadableIdGenerator.getForInterfaceProperty(
        "com.palantir.Old",
        "title",
      ),
      name: ReadableIdGenerator.getForInterfaceProperty(
        "com.palantir.Base",
        "name",
      ),
      // `ownerSpt` backs properties of more than one interface
      ownerSpt: ReadableIdGenerator.getForSptBackedInterfaceProperty(
        "com.palantir.ownerSpt",
      ),
      oldTarget: ReadableIdGenerator.getForInterfaceLinkType(
        "com.palantir.Old",
        "com.palantir.oldTarget",
      ),
      newTarget: ReadableIdGenerator.getForInterfaceLinkType(
        "com.palantir.New",
        "com.palantir.newTarget",
      ),
      oldAction: ReadableIdGenerator.getForInterfaceActionTypeConstraint(
        "com.palantir.Old",
        "com.palantir.oldAction",
      ),
      newAction: ReadableIdGenerator.getForInterfaceActionTypeConstraint(
        "com.palantir.New",
        "com.palantir.newAction",
      ),
    };

    for (const id of Object.values(ids)) {
      expect(shapes.outputShapes.has(id), id).toBe(true);
    }
    expect(migrationShape(shapes.outputShapes, "com.palantir.Old")).toEqual({
      type: "replace",
      replace: {
        replacement: {
          interfaceType: blockId(ids.newInterface),
          propertyMappings: {
            [blockId(ids.title)]: blockId(ids.name),
            [blockId(ids.ownerSpt)]: blockId(ids.ownerSpt),
          },
          linkTypeConstraintMappings: {
            [blockId(ids.oldTarget)]: blockId(ids.newTarget),
          },
          actionTypeConstraintMappings: {
            [blockId(ids.oldAction)]: blockId(ids.newAction),
          },
        },
      },
    });
  });

  it("references an imported replacement's input shapes", async () => {
    const { shapes } = await convertWithShapes(defineImportedReplacement);
    const ids = {
      imported: ReadableIdGenerator.getForInterface("com.other.Imported"),
      fullName: ReadableIdGenerator.getForInterfaceProperty(
        "com.other.Imported",
        "fullName",
      ),
      importedAction: ReadableIdGenerator.getForInterfaceActionTypeConstraint(
        "com.other.Imported",
        "com.other.importedAction",
      ),
    };

    for (const id of Object.values(ids)) {
      expect(shapes.inputShapes.has(id), id).toBe(true);
      expect(shapes.outputShapes.has(id), id).toBe(false);
    }
    expect(migrationShape(shapes.outputShapes, "com.palantir.Old")).toEqual({
      type: "replace",
      replace: {
        replacement: {
          interfaceType: blockId(ids.imported),
          propertyMappings: {
            [blockId(
              ReadableIdGenerator.getForInterfaceProperty(
                "com.palantir.Old",
                "title",
              ),
            )]: blockId(ids.fullName),
          },
          linkTypeConstraintMappings: {},
          actionTypeConstraintMappings: {
            [blockId(
              ReadableIdGenerator.getForInterfaceActionTypeConstraint(
                "com.palantir.Old",
                "com.palantir.oldAction",
              ),
            )]: blockId(ids.importedAction),
          },
        },
      },
    });
  });
});
