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

import {
  defineCreateObjectAction,
  defineInterface,
  defineInterfaceActionTypeConstraint,
  defineObject,
  getOntologyDefinition,
  importOntologyEntity,
  initializeOntologyState,
  OntologyEntityTypeEnum,
} from "@osdk/maker";
import { describe, expect, it } from "vitest";

import { ReadableIdGenerator } from "../util/generateRid.js";
import { defineFunctionBackedAction } from "./defineFunctionBackedAction.js";
import { defineInterfaceImplementation } from "./defineInterfaceImplementation.js";
import { defineOntologyV2 } from "./defineOntologyV2.js";

const NAMESPACE = "com.palantir.";
const ACTION_NAME = "create-task";
const CONSTRAINT_NAME = `${NAMESPACE}createTask`;

function defineTaskInterface() {
  const interfaceType = defineInterface({ apiName: "Task", properties: {} });
  defineInterfaceActionTypeConstraint({
    interfaceType,
    apiName: "createTask",
    displayName: "Create Task",
    description: "Create a task",
    requireImplementation: false,
    parameters: [],
  });
  return interfaceType;
}

function defineTaskObject(actionTypeApiName?: string) {
  const interfaceType = defineTaskInterface();
  return defineObject({
    apiName: "task",
    displayName: "Task",
    pluralDisplayName: "Tasks",
    primaryKeyPropertyApiName: "id",
    titlePropertyApiName: "id",
    properties: { id: { type: "string" } },
    implementsInterfaces: [
      {
        implements: interfaceType,
        propertyMapping: [],
        ...(actionTypeApiName === undefined
          ? {}
          : {
              actionTypeImplementations: {
                [CONSTRAINT_NAME]: { actionTypeApiName },
              },
            }),
      },
    ],
  });
}

describe("interface action type constraints", () => {
  it("implements a create-task constraint with an action and parameter mapping", async () => {
    const result = await defineOntologyV2(NAMESPACE, () => {
      const taskInterface = defineInterface({ apiName: "Task" });
      defineInterfaceActionTypeConstraint({
        interfaceType: taskInterface,
        apiName: "createTask",
        displayName: "Create Task",
        description: "Create a task",
        requireImplementation: true,
        parameters: [
          {
            apiName: "taskId",
            displayName: "Task ID",
            type: { type: "string", string: {} },
            requireImplementation: true,
          },
        ],
      });

      const task = defineObject({
        apiName: "task",
        displayName: "Task",
        pluralDisplayName: "Tasks",
        primaryKeyPropertyApiName: "id",
        titlePropertyApiName: "id",
        properties: { id: { type: "string" } },
      });
      const createTask = defineCreateObjectAction({
        objectType: task,
        apiName: ACTION_NAME,
      });
      defineInterfaceImplementation({
        objectType: task,
        interfaceType: taskInterface,
        actionTypeImplementations: {
          [CONSTRAINT_NAME]: {
            actionType: createTask,
            parameterMapping: { taskId: "id" },
          },
        },
      });
    });

    const { ontology } = result.ontologyIr;
    const { interfaceType } = Object.values(ontology.interfaceTypes)[0];
    const { objectType } = Object.values(ontology.objectTypes)[0];
    const { actionType } = Object.values(ontology.actionTypes)[0];
    const constraint = interfaceType.actionTypeConstraints[0];
    const [parameterConstraintRid] = Object.keys(constraint.parameters);

    expect(constraint).toMatchObject({
      metadata: { apiName: CONSTRAINT_NAME },
      requireImplementation: true,
    });
    expect(objectType.implementsInterfaces2[0].actionTypes).toEqual({
      [constraint.rid]: {
        actionTypeRid: actionType.metadata.rid,
        parameters: {
          [parameterConstraintRid]: actionType.metadata.parameters.id.rid,
        },
      },
    });
  });

  describe("action reference validation", () => {
    it("rejects an unqualified action reference even when the namespaced action is defined later", async () => {
      await expect(
        defineOntologyV2(NAMESPACE, () => {
          const objectType = defineTaskObject(ACTION_NAME);
          defineCreateObjectAction({ objectType, apiName: ACTION_NAME });
        }),
      ).rejects.toThrow(
        `Ontology Definition Error: Action "${ACTION_NAME}" referenced by action type constraint "${CONSTRAINT_NAME}" on interface "${NAMESPACE}Task" for object "${NAMESPACE}task" is not defined or imported`,
      );
    });

    it.each([`${NAMESPACE}missing-action`, "constructor"])(
      "rejects an undefined action reference: %s",
      async (actionTypeApiName) => {
        await expect(
          defineOntologyV2(NAMESPACE, () => {
            defineTaskObject(actionTypeApiName);
          }),
        ).rejects.toThrow(
          `Action "${actionTypeApiName}" referenced by action type constraint`,
        );
      },
    );

    it("reports invalid action references across objects together", async () => {
      const result = defineOntologyV2(NAMESPACE, () => {
        const objectType = defineTaskObject(`${NAMESPACE}missing-action`);
        defineObject({ ...objectType, apiName: "otherTask" });
      });

      await expect(result).rejects.toThrow(
        `for object "${NAMESPACE}task" is not defined or imported`,
      );
      await expect(result).rejects.toThrow(
        `for object "${NAMESPACE}otherTask" is not defined or imported`,
      );
    });

    it("accepts an inline reference to a qualified action defined later", async () => {
      const result = await defineOntologyV2(NAMESPACE, () => {
        const objectType = defineTaskObject(`${NAMESPACE}${ACTION_NAME}`);
        defineCreateObjectAction({ objectType, apiName: ACTION_NAME });
      });
      const { ontology } = result.ontologyIr;
      const object = Object.values(ontology.objectTypes)[0].objectType;
      const binding = Object.values(
        object.implementsInterfaces2[0].actionTypes,
      )[0];
      const action = Object.values(ontology.actionTypes)[0].actionType;
      expect(binding.actionTypeRid).toBe(action.metadata.rid);
    });

    it("accepts an existing unqualified action when it is explicitly imported", async () => {
      const result = await defineOntologyV2(NAMESPACE, () => {
        defineTaskObject(ACTION_NAME);
        importOntologyEntity({
          apiName: ACTION_NAME,
          displayName: "Existing Task Action",
          status: "active" as const,
          rules: [],
          __type: OntologyEntityTypeEnum.ACTION_TYPE,
        });
      });
      const object = Object.values(result.ontologyIr.ontology.objectTypes)[0]
        .objectType;
      const binding = Object.values(
        object.implementsInterfaces2[0].actionTypes,
      )[0];
      const imported = Object.values(
        result.ontologyIr.importedOntology.actionTypes,
      )[0].actionType;
      expect(binding.actionTypeRid).toBe(imported.metadata.rid);
      expect(
        result.shapes.inputShapes.get(
          ReadableIdGenerator.getForActionType(ACTION_NAME),
        )?.type,
      ).toBe("action");
    });

    it("also validates references registered through defineInterfaceImplementation", async () => {
      await expect(
        defineOntologyV2(NAMESPACE, () => {
          const interfaceType = defineTaskInterface();
          const objectType = defineObject({
            apiName: "task",
            displayName: "Task",
            pluralDisplayName: "Tasks",
            primaryKeyPropertyApiName: "id",
            titlePropertyApiName: "id",
            properties: { id: { type: "string" } },
          });
          const action = defineCreateObjectAction({
            objectType,
            apiName: ACTION_NAME,
          });
          defineInterfaceImplementation({
            objectType,
            interfaceType,
            actionTypeImplementations: {
              [CONSTRAINT_NAME]: {
                actionType: { ...action, apiName: ACTION_NAME },
              },
            },
          });
        }),
      ).rejects.toThrow(
        `Action "${ACTION_NAME}" referenced by action type constraint`,
      );
    });

    it("allows an optional constraint without an implementation", async () => {
      await expect(
        defineOntologyV2(NAMESPACE, () => {
          defineTaskObject();
        }),
      ).resolves.toBeDefined();
    });

    it("accepts registered function-backed actions during bootstrap before function discovery", async () => {
      await expect(
        defineOntologyV2(NAMESPACE, () => {
          defineTaskObject(`${NAMESPACE}${ACTION_NAME}`);
          defineFunctionBackedAction({
            functionApiName: "createTask",
            apiName: ACTION_NAME,
          });
        }),
      ).resolves.toBeDefined();
    });

    it("does not require an imported object's upstream action to be separately imported", async () => {
      initializeOntologyState(NAMESPACE);
      const objectType = defineTaskObject(`${NAMESPACE}${ACTION_NAME}`);
      defineCreateObjectAction({ objectType, apiName: ACTION_NAME });
      const upstreamObject =
        getOntologyDefinition().OBJECT_TYPE[objectType.apiName];

      const result = await defineOntologyV2("com.consumer.", () => {
        importOntologyEntity(upstreamObject);
      });

      expect(Object.keys(result.importedTypes.ACTION_TYPE)).toEqual([]);
      expect(
        result.shapes.inputShapes.has(
          ReadableIdGenerator.getForObjectType(upstreamObject.apiName),
        ),
      ).toBe(true);
    });
  });
});
