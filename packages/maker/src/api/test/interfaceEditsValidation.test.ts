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
  OntologyIrInterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeEditsValidationCondition,
} from "@osdk/client.unstable";
import { assert, beforeEach, describe, expect, it } from "vitest";

import type { InterfaceType } from "../../index.js";
import { defineInterface } from "../defineInterface.js";
import { defineInterfaceActionTypeConstraint } from "../defineInterfaceActionTypeConstraint.js";
import { defineObject } from "../defineObject.js";
import { initializeOntologyState } from "../defineOntology.js";
import type {
  InterfaceActionTypeEditsValidationConditionDefinition,
  InterfaceActionTypeEditsValidationDefinition,
  InterfaceActionTypeEditsValidationSubjectDefinition,
} from "../interface/InterfaceActionTypeEditsValidationDefinition.js";

const NS = "com.palantir.";

beforeEach(() => initializeOntologyState(NS));

describe("edit validation entry IDs", () => {
  it("generates a scoped RID from the entry ID without changing the authored tree", () => {
    const authored: InterfaceActionTypeEditsValidationDefinition = {
      condition: entry("require-task-update"),
    };
    const original = structuredClone(authored);
    const validation = defineConstraint(
      defineInterface({ apiName: "Task" }),
      authored,
    );
    expect(validation).toEqual({
      condition: {
        type: "entry",
        entry: {
          rid: "ri.ontology-metadata.temp.interface-action-type-edits-validation-entry.a7f818eb-4c43-5dbb-973f-09a1080463e3",
          subject:
            authored.condition.type === "entry"
              ? authored.condition.entry.subject
              : undefined,
        },
      },
    });
    expect(authored).toEqual(original);
    expect(validation.condition).not.toHaveProperty("entry.id");
  });

  it("keeps the same RID across builds and normalizes the constraint namespace", () => {
    const authored = { condition: entry("require-task-update") };
    const first = defineConstraint(
      defineInterface({ apiName: "Task" }),
      authored,
    );
    initializeOntologyState(NS);
    const second = defineConstraint(
      defineInterface({ apiName: "Task" }),
      authored,
      `${NS}editTask`,
    );
    expect(second).toEqual(first);
  });

  it("keeps existing IDs when rules are edited, reordered, nested, added, or removed", () => {
    const first = defineConstraint(defineInterface({ apiName: "Task" }), {
      condition: {
        type: "and",
        and: {
          conditions: [entry("first"), entry("second"), entry("removed")],
        },
      },
    });
    const [firstRid, secondRid, removedRid] = entryRids(first.condition);
    initializeOntologyState(NS);
    const updated = defineConstraint(defineInterface({ apiName: "Task" }), {
      condition: {
        type: "and",
        and: {
          conditions: [
            entry("second", "delete"),
            {
              type: "and",
              and: { conditions: [entry("first"), entry("added")] },
            },
          ],
        },
      },
    });
    const rids = entryRids(updated.condition);
    expect(rids.slice(0, 2)).toEqual([secondRid, firstRid]);
    expect(rids).not.toContain(removedRid);
    expect(rids[2]).not.toBe(firstRid);
    expect(rids[2]).not.toBe(secondRid);
    expect(rids[2]).not.toBe(removedRid);
  });

  it("allows the same entry ID in different constraints and interfaces without collisions", () => {
    const first = defineInterface({ apiName: "First" });
    const second = defineInterface({ apiName: "Second" });
    const authored = { condition: entry("same-id") };
    const validations = [
      defineConstraint(first, authored, "firstConstraint"),
      defineConstraint(first, authored, "secondConstraint"),
      defineConstraint(second, authored, "firstConstraint"),
    ];
    expect(
      new Set(
        validations.flatMap((validation) => entryRids(validation.condition)),
      ).size,
    ).toBe(3);
  });

  it("rejects duplicate IDs across nested conditions before adding the constraint", () => {
    const iface = defineInterface({ apiName: "Task" });
    expect(() =>
      defineConstraint(iface, {
        condition: {
          type: "and",
          and: {
            conditions: [
              entry("duplicate"),
              { type: "and", and: { conditions: [entry("duplicate")] } },
            ],
          },
        },
      }),
    ).toThrow('Duplicate edit validation entry ID "duplicate"');
    expect(iface.actionTypeConstraints).toEqual([]);
  });

  it.each(["", " ", "\n"])("rejects a blank ID (%j)", (id) => {
    const iface = defineInterface({ apiName: "Task" });
    expect(() => defineConstraint(iface, { condition: entry(id) })).toThrow(
      "must not be blank",
    );
    expect(iface.actionTypeConstraints).toEqual([]);
  });

  it("converts object and interface definitions into API names without copying their metadata", () => {
    const owner = defineInterface({ apiName: "Owner" });
    const task = defineInterface({ apiName: "Task" });
    const object = defineObject({
      apiName: "TaskObject",
      displayName: "Task",
      pluralDisplayName: "Tasks",
      primaryKeyPropertyApiName: "id",
      titlePropertyApiName: "id",
      properties: { id: { type: "string" } },
    });
    const authored: InterfaceActionTypeEditsValidationDefinition = {
      condition: {
        type: "and",
        and: {
          conditions: [
            {
              type: "entry",
              entry: {
                id: "create-object",
                subject: {
                  type: "concreteObject",
                  concreteObject: {
                    objectType: object,
                    operation: { type: "create", create: {} },
                  },
                },
              },
            },
            {
              type: "entry",
              entry: {
                id: "create-interface-object",
                subject: {
                  type: "interfaceObject",
                  interfaceObject: {
                    interfaceType: task,
                    operation: { type: "create", create: {} },
                  },
                },
              },
            },
          ],
        },
      },
    };
    const original = structuredClone(authored);
    const validation = defineConstraint(owner, authored);
    assert(validation.condition.type === "and");
    const subjects = validation.condition.and.conditions.map((condition) => {
      assert(condition.type === "entry");
      return condition.entry.subject;
    });
    expect(subjects).toEqual([
      {
        type: "concreteObject",
        concreteObject: {
          rid: `${NS}TaskObject`,
          operation: { type: "create", create: {} },
        },
      },
      {
        type: "interfaceObject",
        interfaceObject: {
          rid: `${NS}Task`,
          operation: { type: "create", create: {} },
        },
      },
    ]);
    expect(authored).toEqual(original);
  });

  it("rejects unknown subject variants before adding the constraint", () => {
    const task = defineInterface({ apiName: "Task" });
    const subject = {
      type: "futureSubject",
    } as unknown as InterfaceActionTypeEditsValidationSubjectDefinition;
    expect(() =>
      defineConstraint(task, {
        condition: { type: "entry", entry: { id: "unknown", subject } },
      }),
    ).toThrow("Unsupported edit validation variant");
    expect(task.actionTypeConstraints).toEqual([]);
  });

  it("requires an authored ID instead of accepting a handwritten RID", () => {
    const authored: InterfaceActionTypeEditsValidationDefinition = {
      condition: {
        type: "entry",
        entry: {
          // @ts-expect-error Authors provide an id; Maker creates the rid.
          rid: "ri.ontology.main.interface-action-type-edits-validation-entry.00000000-0000-0000-0000-000000000001",
          subject: {
            type: "implementingObject",
            implementingObject: {
              type: "create",
              create: { requiredInterfaceLinkCreations: [] },
            },
          },
        },
      },
    };
    expect(() =>
      defineConstraint(defineInterface({ apiName: "Task" }), authored),
    ).toThrow("must not be blank");
  });
});

function defineConstraint(
  interfaceType: InterfaceType,
  editsValidation: InterfaceActionTypeEditsValidationDefinition,
  apiName = "editTask",
): OntologyIrInterfaceActionTypeEditsValidation {
  defineInterfaceActionTypeConstraint({
    interfaceType,
    apiName,
    displayName: "Edit Task",
    description: "Edit a task",
    requireImplementation: false,
    parameters: [],
    editsValidation,
  });
  return interfaceType.actionTypeConstraints.at(-1)!.editsValidation!;
}

function entry(
  id: string,
  operation: "create" | "delete" = "create",
): InterfaceActionTypeEditsValidationConditionDefinition {
  return {
    type: "entry",
    entry: {
      id,
      subject: {
        type: "implementingObject",
        implementingObject:
          operation === "create"
            ? { type: "create", create: { requiredInterfaceLinkCreations: [] } }
            : {
                type: "delete",
                delete: {
                  editRequirement: {
                    type: "anyObjectOfType",
                    anyObjectOfType: {},
                  },
                  requiredInterfaceLinkDeletions: [],
                },
              },
      },
    },
  };
}

function entryRids(
  condition: OntologyIrInterfaceActionTypeEditsValidationCondition,
): string[] {
  return condition.type === "entry"
    ? [condition.entry.rid]
    : condition.and.conditions.flatMap(entryRids);
}
