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
  OntologyIrExistingObjectEditRequirement,
  OntologyIrInterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeEditsValidationCondition,
  OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
  OntologyIrInterfaceLinkRequirement,
} from "@osdk/client.unstable";
import type { InterfaceType } from "@osdk/maker";
import {
  defineInterface,
  defineInterfaceActionTypeConstraint,
  defineInterfaceLinkConstraint,
  defineObject,
  getOntologyDefinition,
  importOntologyEntity,
  initializeOntologyState,
} from "@osdk/maker";
import invariant from "tiny-invariant";
import { describe, expect, it } from "vitest";

import { defineOntologyV2 } from "../../api/defineOntologyV2.js";
import { ReadableIdGenerator } from "../../util/generateRid.js";

const NS = "com.palantir.";
const REFERENCES = {
  object: `${NS}TaskObject`,
  interface: `${NS}Task`,
  link: `${NS}relatedTasks`,
  source: "source",
  target: "target",
};

describe("interface action type constraint edit validations", () => {
  it("converts every edit and nested reference without changing entry IDs, ordering, or authored data", async () => {
    const authored = allEdits(REFERENCES);
    const original = structuredClone(authored);
    const result = await defineOntologyV2(NS, () => {
      const iface = defineInterface({ apiName: "Task" });
      defineObjectType();
      defineInterfaceLinkConstraint({
        apiName: "relatedTasks",
        from: iface,
        toMany: iface,
      });
      defineConstraint(iface, authored);
    });
    const { ontology } = result.ontologyIr;
    const iface = Object.values(ontology.interfaceTypes)[0].interfaceType;
    const object = Object.values(ontology.objectTypes)[0].objectType;
    const constraint = iface.actionTypeConstraints[0];
    const parameters = Object.entries(constraint.parameters);
    const source = parameters.find(
      ([, param]) => param.displayMetadata.apiName === "source",
    )![0];
    const target = parameters.find(
      ([, param]) => param.displayMetadata.apiName === "target",
    )![0];
    const link = iface.links[0].rid;
    expect(constraint.editsValidation).toEqual(
      allEdits({
        object: object.rid,
        interface: iface.rid,
        link,
        source,
        target,
      }),
    );
    expect(authored).toEqual(original);
    expect(
      getOntologyDefinition().INTERFACE_TYPE[`${NS}Task`]
        .actionTypeConstraints[0].editsValidation,
    ).toEqual(original);
    const known = ontology.knownIdentifiers;
    for (const [rid, mapping] of [
      [object.rid, known.objectTypes],
      [iface.rid, known.interfaceTypes],
      [link, known.interfaceLinkTypes],
      [source, known.interfaceParameterConstraints],
      [target, known.interfaceParameterConstraints],
    ] as const) {
      expect(mapping[rid]).toBeDefined();
      expect(Object.values(result.blockDataAddOn.idToBlockShapeId)).toContain(
        mapping[rid],
      );
    }
  });

  it.each([undefined, null])(
    "preserves an absent validation (%s)",
    async (editsValidation) => {
      const result = await defineOntologyV2(NS, () =>
        defineConstraint(defineInterface({ apiName: "Task" }), editsValidation),
      );
      const constraint = Object.values(
        result.ontologyIr.ontology.interfaceTypes,
      )[0].interfaceType.actionTypeConstraints[0];
      expect(constraint.editsValidation).toBe(editsValidation);
      if (editsValidation === undefined)
        expect(constraint).not.toHaveProperty("editsValidation");
    },
  );

  it("produces the same validation and references when packaged again", async () => {
    const build = () =>
      defineOntologyV2(NS, () => {
        const iface = defineInterface({ apiName: "Task" });
        defineObjectType();
        defineInterfaceLinkConstraint({
          apiName: "relatedTasks",
          from: iface,
          toMany: iface,
        });
        defineConstraint(iface, allEdits(REFERENCES));
      });
    expect((await build()).ontologyIr.ontology).toEqual(
      (await build()).ontologyIr.ontology,
    );
  });

  it("uses input shapes for imported object and interface references", async () => {
    initializeOntologyState(NS);
    defineObjectType();
    const object = getOntologyDefinition().OBJECT_TYPE[REFERENCES.object];
    const imported = defineInterface({ apiName: "Imported" });
    const validation: OntologyIrInterfaceActionTypeEditsValidation = {
      condition: {
        type: "and",
        and: {
          conditions: [
            entry({
              type: "concreteObject",
              concreteObject: {
                rid: object.apiName,
                operation: { type: "create", create: {} },
              },
            }),
            entry(
              {
                type: "interfaceObject",
                interfaceObject: {
                  rid: imported.apiName,
                  operation: { type: "create", create: {} },
                },
              },
              2,
            ),
          ],
        },
      },
    };
    const result = await defineOntologyV2(NS, () => {
      importOntologyEntity(object);
      importOntologyEntity(imported);
      defineConstraint(defineInterface({ apiName: "Task" }), validation);
    });
    const objectRid = Object.keys(
      result.ontologyIr.importedOntology.objectTypes,
    )[0];
    const interfaceRid = Object.keys(
      result.ontologyIr.importedOntology.interfaceTypes,
    )[0];
    const constraint = Object.values(
      result.ontologyIr.ontology.interfaceTypes,
    )[0].interfaceType.actionTypeConstraints[0];
    expect(constraint.editsValidation).toEqual({
      condition: {
        type: "and",
        and: {
          conditions: [
            entry({
              type: "concreteObject",
              concreteObject: {
                rid: objectRid,
                operation: { type: "create", create: {} },
              },
            }),
            entry(
              {
                type: "interfaceObject",
                interfaceObject: {
                  rid: interfaceRid,
                  operation: { type: "create", create: {} },
                },
              },
              2,
            ),
          ],
        },
      },
    });
    expect(
      result.shapes.inputShapes.get(
        ReadableIdGenerator.getForObjectType(object.apiName),
      )?.type,
    ).toBe("objectType");
    expect(
      result.shapes.inputShapes.get(
        ReadableIdGenerator.getForInterface(imported.apiName),
      )?.type,
    ).toBe("interfaceType");
    expect(
      result.ontologyIr.ontology.knownIdentifiers.objectTypes[objectRid],
    ).toBe(
      result.blockDataAddOn.idToBlockShapeId[
        ReadableIdGenerator.getForObjectType(object.apiName)
      ],
    );
    expect(
      result.ontologyIr.ontology.knownIdentifiers.interfaceTypes[interfaceRid],
    ).toBe(
      result.blockDataAddOn.idToBlockShapeId[
        ReadableIdGenerator.getForInterface(imported.apiName)
      ],
    );
  });

  it("uses the ancestor's output link through diamond inheritance", async () => {
    const result = await defineOntologyV2(NS, () => {
      const parent = defineInterface({ apiName: "Parent" });
      defineInterfaceLinkConstraint({
        apiName: "relatedTasks",
        from: parent,
        toMany: parent,
      });
      const left = defineInterface({ apiName: "Left", extends: parent });
      const right = defineInterface({ apiName: "Right", extends: parent });
      const child = defineInterface({
        apiName: "Task",
        extends: [left, right],
      });
      defineConstraint(child, linkValidation());
    });
    assertInheritedLink(result, false);
  });

  it("uses an explicitly imported ancestor's input link", async () => {
    initializeOntologyState(NS);
    const parent = defineInterface({ apiName: "Parent" });
    defineInterfaceLinkConstraint({
      apiName: "relatedTasks",
      from: parent,
      toMany: parent,
    });
    const result = await defineOntologyV2(NS, () => {
      importOntologyEntity(parent);
      defineConstraint(
        defineInterface({ apiName: "Task", extends: parent }),
        linkValidation(),
      );
    });
    assertInheritedLink(result, true);
  });

  it("resolves a truncated ancestor from its explicitly imported definition", async () => {
    initializeOntologyState(NS);
    const parent = defineInterface({ apiName: "Parent" });
    defineInterfaceLinkConstraint({
      apiName: "relatedTasks",
      from: parent,
      toMany: parent,
    });
    const stub = { ...parent, links: [] };
    const middle = defineInterface({ apiName: "Middle", extends: stub });
    const result = await defineOntologyV2(NS, () => {
      importOntologyEntity(parent);
      importOntologyEntity(middle);
      defineConstraint(
        defineInterface({ apiName: "Task", extends: middle }),
        linkValidation(),
      );
    });
    assertInheritedLink(result, true);
  });

  it("rejects an embedded ancestor without a packaged input", async () => {
    initializeOntologyState(NS);
    const parent = defineInterface({ apiName: "Parent" });
    defineInterfaceLinkConstraint({
      apiName: "relatedTasks",
      from: parent,
      toMany: parent,
    });
    const middle = defineInterface({ apiName: "Middle", extends: parent });
    await expect(
      defineOntologyV2(NS, () => {
        importOntologyEntity(middle);
        defineConstraint(
          defineInterface({ apiName: "Task", extends: middle }),
          linkValidation(),
        );
      }),
    ).rejects.toThrow(
      'Define or import interface "com.palantir.Parent" to package link',
    );
  });

  it("rejects links declared by two ancestors", async () => {
    await expect(
      defineOntologyV2(NS, () => {
        const left = defineInterface({ apiName: "Left" });
        const right = defineInterface({ apiName: "Right" });
        for (const parent of [left, right])
          defineInterfaceLinkConstraint({
            apiName: "relatedTasks",
            from: parent,
            toMany: parent,
          });
        defineConstraint(
          defineInterface({ apiName: "Task", extends: [left, right] }),
          linkValidation(),
        );
      }),
    ).rejects.toThrow("is declared on multiple interfaces");
  });

  it("rejects a link from an unrelated interface", async () => {
    await expect(
      defineOntologyV2(NS, () => {
        const other = defineInterface({ apiName: "Other" });
        defineInterfaceLinkConstraint({
          apiName: "relatedTasks",
          from: other,
          toMany: other,
        });
        defineConstraint(
          defineInterface({ apiName: "Task" }),
          linkValidation(),
        );
      }),
    ).rejects.toThrow("must belong to that interface or an ancestor");
  });

  it("rejects a link whose target interface is not packaged", async () => {
    await expect(
      defineOntologyV2(NS, () => {
        const iface = defineInterface({ apiName: "Task" });
        defineInterfaceLinkConstraint({
          apiName: "relatedTasks",
          from: iface,
          toMany: "com.missing.Target",
        });
        defineConstraint(iface, linkValidation());
      }),
    ).rejects.toThrow(
      'Define or import interface "com.missing.Target" targeted by link',
    );
  });

  it.each(["own", "inherited"])(
    "rejects parameters from another %s constraint",
    async (owner) => {
      await expect(
        defineOntologyV2(NS, () => {
          const parent = defineInterface({ apiName: "Parent" });
          const iface = defineInterface({ apiName: "Task", extends: parent });
          defineConstraint(
            owner === "own" ? iface : parent,
            undefined,
            "otherConstraint",
          );
          defineInterfaceActionTypeConstraint({
            interfaceType: iface,
            apiName: "editTask",
            displayName: "Edit Task",
            description: "Edit task",
            requireImplementation: false,
            parameters: [],
            editsValidation: {
              condition: entry({
                type: "implementingObject",
                implementingObject: {
                  type: "delete",
                  delete: {
                    editRequirement: fromParameters("source"),
                    requiredInterfaceLinkDeletions: [],
                  },
                },
              }),
            },
          });
        }),
      ).rejects.toThrow('Parameter constraint "source"');
    },
  );

  it.each(["source", "target"] as const)(
    "rejects an unknown link %s parameter",
    async (endpoint) => {
      const validation = linkValidation();
      invariant(
        validation.condition.type === "entry" &&
          validation.condition.entry.subject.type ===
            "implementingObjectInterfaceLink",
      );
      const operation =
        validation.condition.entry.subject.implementingObjectInterfaceLink;
      invariant(operation.type === "create");
      operation.create[endpoint] = {
        type: "interfaceParameterConstraintRid",
        interfaceParameterConstraintRid: "missing",
      };
      await expect(
        defineOntologyV2(NS, () => {
          const iface = defineInterface({ apiName: "Task" });
          defineInterfaceLinkConstraint({
            apiName: "relatedTasks",
            from: iface,
            toMany: iface,
          });
          defineConstraint(iface, validation);
        }),
      ).rejects.toThrow('Parameter constraint "missing"');
    },
  );

  it.each(["concreteObject", "interfaceObject"] as const)(
    "rejects a missing %s reference",
    async (type) => {
      const payload = {
        rid: "com.missing.Type",
        operation: { type: "create" as const, create: {} },
      };
      const subject: OntologyIrInterfaceActionTypeEditsValidationConditionSubject =
        type === "concreteObject"
          ? { type, concreteObject: payload }
          : { type, interfaceObject: payload };
      await expect(
        defineOntologyV2(NS, () =>
          defineConstraint(defineInterface({ apiName: "Task" }), {
            condition: entry(subject),
          }),
        ),
      ).rejects.toThrow('"com.missing.Type" referenced by edit validation');
    },
  );

  it("leaves imported policies target-owned without importing their referenced entities or mutating the input", async () => {
    initializeOntologyState(NS);
    const parent = defineInterface({ apiName: "Parent" });
    defineConstraint(parent, allEdits(REFERENCES));
    const imported = defineInterface({ apiName: "Imported", extends: parent });
    defineConstraint(imported, allEdits(REFERENCES));
    const original = structuredClone(imported);
    const result = await defineOntologyV2(NS, () => {
      importOntologyEntity(imported);
      defineInterface({ apiName: "Child", extends: imported });
    });
    expect(imported).toEqual(original);
    for (const block of [
      result.ontologyIr.importedOntology,
      result.ontologyIr.transitiveImportedOntology,
    ]) {
      const constraint = Object.values(block.interfaceTypes)[0].interfaceType
        .actionTypeConstraints[0];
      expect(constraint).not.toHaveProperty("editsValidation");
    }
    expect(result.ontologyIr.ontology.knownIdentifiers.objectTypes).toEqual({});
    expect(
      [...result.shapes.inputShapes.values()].some(
        (shape) => shape.type === "objectType",
      ),
    ).toBe(false);
  });

  it("rejects unknown variants instead of copying their references", async () => {
    const editsValidation = {
      condition: { type: "futureCondition" },
    } as unknown as OntologyIrInterfaceActionTypeEditsValidation;
    await expect(
      defineOntologyV2(NS, () =>
        defineConstraint(defineInterface({ apiName: "Task" }), editsValidation),
      ),
    ).rejects.toThrow("Unsupported edit validation variant");
  });
});

function defineObjectType() {
  return defineObject({
    apiName: "TaskObject",
    displayName: "Task",
    pluralDisplayName: "Tasks",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: { id: { type: "string" } },
  });
}

function defineConstraint(
  interfaceType: InterfaceType,
  editsValidation?: OntologyIrInterfaceActionTypeEditsValidation | null,
  apiName = "editTask",
) {
  defineInterfaceActionTypeConstraint({
    interfaceType,
    apiName,
    displayName: "Edit Task",
    description: "Edit a task",
    requireImplementation: false,
    parameters: ["source", "target"].map((parameterApiName) => ({
      apiName: parameterApiName,
      displayName: parameterApiName,
      type: {
        type: "implementingObjectReference",
        implementingObjectReference: {},
      },
      requireImplementation: false,
    })),
    ...(editsValidation !== undefined ? { editsValidation } : {}),
  });
}

function entry(
  subject: OntologyIrInterfaceActionTypeEditsValidationConditionSubject,
  id = 1,
): OntologyIrInterfaceActionTypeEditsValidationCondition {
  return {
    type: "entry",
    entry: {
      rid: `ri.ontology.main.interface-action-type-edits-validation-entry.00000000-0000-0000-0000-${String(id).padStart(12, "0")}`,
      subject,
    },
  };
}

function fromParameters(
  ...names: string[]
): OntologyIrExistingObjectEditRequirement {
  return {
    type: "objectsFromParameterRequirement",
    objectsFromParameterRequirement: {
      interfaceParameterConstraintRids: names,
    },
  };
}

function linkValidation(
  link = REFERENCES.link,
): OntologyIrInterfaceActionTypeEditsValidation {
  return {
    condition: entry({
      type: "implementingObjectInterfaceLink",
      implementingObjectInterfaceLink: {
        type: "create",
        create: {
          interfaceLinkTypeRid: link,
          source: { type: "anyCompatibleObject", anyCompatibleObject: {} },
          target: { type: "anyCompatibleObject", anyCompatibleObject: {} },
        },
      },
    }),
  };
}

function allEdits(
  refs: typeof REFERENCES,
): OntologyIrInterfaceActionTypeEditsValidation {
  const requirement = fromParameters(refs.source, refs.target);
  const anyObject: OntologyIrExistingObjectEditRequirement = {
    type: "anyObjectOfType",
    anyObjectOfType: {},
  };
  const linkRequirement: OntologyIrInterfaceLinkRequirement = {
    type: "implementingObjectInterfaceLink",
    implementingObjectInterfaceLink: {
      interfaceLinkTypeRid: refs.link,
      interfaceLinkedObjectRequirement: {
        type: "interfaceParameterConstraintRid",
        interfaceParameterConstraintRid: refs.target,
      },
    },
  };
  const anyLink: OntologyIrInterfaceLinkRequirement = {
    type: "implementingObjectInterfaceLink",
    implementingObjectInterfaceLink: {
      interfaceLinkTypeRid: refs.link,
      interfaceLinkedObjectRequirement: {
        type: "anyCompatibleObject",
        anyCompatibleObject: {},
      },
    },
  };
  const link = {
    interfaceLinkTypeRid: refs.link,
    source: {
      type: "interfaceParameterConstraintRid" as const,
      interfaceParameterConstraintRid: refs.source,
    },
    target: {
      type: "interfaceParameterConstraintRid" as const,
      interfaceParameterConstraintRid: refs.target,
    },
  };
  const subjects: OntologyIrInterfaceActionTypeEditsValidationConditionSubject[] =
    [
      {
        type: "concreteObject",
        concreteObject: {
          rid: refs.object,
          operation: { type: "create", create: {} },
        },
      },
      {
        type: "concreteObject",
        concreteObject: {
          rid: refs.object,
          operation: {
            type: "modify",
            modify: { editRequirement: requirement },
          },
        },
      },
      {
        type: "concreteObject",
        concreteObject: {
          rid: refs.object,
          operation: { type: "delete", delete: { editRequirement: anyObject } },
        },
      },
      {
        type: "interfaceObject",
        interfaceObject: {
          rid: refs.interface,
          operation: { type: "create", create: {} },
        },
      },
      {
        type: "interfaceObject",
        interfaceObject: {
          rid: refs.interface,
          operation: { type: "modify", modify: { editRequirement: anyObject } },
        },
      },
      {
        type: "interfaceObject",
        interfaceObject: {
          rid: refs.interface,
          operation: {
            type: "delete",
            delete: { editRequirement: requirement },
          },
        },
      },
      {
        type: "implementingObject",
        implementingObject: {
          type: "create",
          create: {
            requiredInterfaceLinkCreations: [linkRequirement, anyLink],
          },
        },
      },
      {
        type: "implementingObject",
        implementingObject: {
          type: "modify",
          modify: {
            editRequirement: requirement,
            requiredInterfaceLinkCreations: [linkRequirement],
            requiredInterfaceLinkDeletions: [anyLink],
          },
        },
      },
      {
        type: "implementingObject",
        implementingObject: {
          type: "delete",
          delete: {
            editRequirement: requirement,
            requiredInterfaceLinkDeletions: [linkRequirement],
          },
        },
      },
      {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: { type: "create", create: link },
      },
      {
        type: "implementingObjectInterfaceLink",
        implementingObjectInterfaceLink: {
          type: "delete",
          delete: {
            ...link,
            target: { type: "anyCompatibleObject", anyCompatibleObject: {} },
          },
        },
      },
    ];
  const conditions = subjects.map((subject, index) =>
    entry(subject, index + 1),
  );
  return {
    condition: {
      type: "and",
      and: {
        conditions: [
          conditions[0],
          { type: "and", and: { conditions: conditions.slice(1) } },
        ],
      },
    },
  };
}

function assertInheritedLink(
  result: Awaited<ReturnType<typeof defineOntologyV2>>,
  imported: boolean,
) {
  const ontology = result.ontologyIr.ontology;
  const parentOntology = imported
    ? result.ontologyIr.importedOntology
    : ontology;
  const parent = Object.values(parentOntology.interfaceTypes).find(
    (block) => block.interfaceType.apiName === `${NS}Parent`,
  )!.interfaceType;
  const child = Object.values(ontology.interfaceTypes).find(
    (block) => block.interfaceType.apiName === `${NS}Task`,
  )!.interfaceType;
  const linkRid = parent.links[0].rid;
  expect(child.actionTypeConstraints[0].editsValidation).toEqual(
    linkValidation(linkRid),
  );
  const readableId = ReadableIdGenerator.getForInterfaceLinkType(
    `${NS}Parent`,
    REFERENCES.link,
  );
  expect(
    (imported ? result.shapes.inputShapes : result.shapes.outputShapes).get(
      readableId,
    )?.type,
  ).toBe("interfaceLinkType");
  expect(ontology.knownIdentifiers.interfaceLinkTypes[linkRid]).toBe(
    result.blockDataAddOn.idToBlockShapeId[readableId],
  );
  expect(
    result.shapes.outputShapes.has(
      ReadableIdGenerator.getForInterfaceLinkType(`${NS}Task`, REFERENCES.link),
    ),
  ).toBe(false);
}
