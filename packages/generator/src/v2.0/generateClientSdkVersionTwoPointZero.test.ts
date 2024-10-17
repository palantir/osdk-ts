/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ActionParameterType,
  QueryDataType,
} from "@osdk/internal.foundry.core";
import { mkdir, readdir, rmdir, writeFile } from "fs/promises";
import * as immer from "immer";
import { beforeEach, describe, expect, it, test, vi } from "vitest";
import { compileThis } from "../util/test/compileThis.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateClientSdkVersionTwoPointZero } from "./generateClientSdkVersionTwoPointZero.js";

function changeValue<T extends Record<K, any>, K extends keyof immer.Draft<T>>(
  draft: immer.Draft<T>,
  key: K,
  oldValue: immer.Draft<T>[K],
  newValue: immer.Draft<T>[K],
) {
  if (draft[key] === oldValue) {
    draft[key] = newValue;
  }
}

function changeKey<
  T extends Record<K, any>,
  K extends keyof immer.Draft<T>,
>(
  draft: immer.Draft<T>,
  oldInterfaceName: K,
  newInterfaceName: K,
) {
  if (draft[oldInterfaceName]) {
    draft[newInterfaceName] = draft[oldInterfaceName];
    delete draft[oldInterfaceName];
  }
}

function changeArrayEntry(
  draft: immer.Draft<string[]>,
  oldNew: string,
  newName: string,
) {
  const idx = draft.findIndex(a => a === oldNew);
  if (idx >= 0) {
    draft[idx] = newName;
  }
}

function changeEachEntry<T extends object>(
  wireData: immer.WritableDraft<Record<string, T>>,
  data: Record<string, string>,
  changer: (
    input: immer.Draft<T>,
    oldApiName: string,
    newApiName: string,
  ) => void,
  changeSelf?: boolean,
) {
  for (const [oldName, newName] of Object.entries(data)) {
    for (const k of Object.keys(wireData)) {
      changer(
        wireData[k],
        oldName,
        newName,
      );

      if (changeSelf && k === oldName) {
        wireData[newName] = wireData[k];
        delete wireData[k];
      }
    }
  }
}

function changeDataType(
  dataType: immer.Draft<QueryDataType | ActionParameterType>,
  oldObjectName: string,
  newObjectName: string,
) {
  if (dataType.type === "array") {
    changeDataType(dataType.subType, oldObjectName, newObjectName);
  } else if (dataType.type === "object" || dataType.type === "objectSet") {
    if (dataType.objectTypeApiName === oldObjectName) {
      dataType.objectTypeApiName = newObjectName;
    }
    if (dataType.objectApiName === oldObjectName) {
      dataType.objectApiName = newObjectName;
    }
  }
}

function changeNames(ontology: WireOntologyDefinition, newNames: {
  objects: Record<string, string>;
  spts: Record<string, string>;
  interfaces: Record<string, string>;
  actions: Record<string, string>;
  queries: Record<string, string>;
}) {
  return immer.produce(ontology, (draft) => {
    // Handle spt renames
    changeEachEntry(
      draft.sharedPropertyTypes,
      newNames.spts,
      (draft, oldSptName, newSptName) => {
        changeValue(draft, "apiName", oldSptName, newSptName);
      },
      true,
    );

    // Handle query renames
    changeEachEntry(
      draft.queryTypes,
      newNames.queries,
      (draft, oldActionName, newActionName) => {
        if (draft.apiName === oldActionName) {
          draft.apiName = newActionName;
        }
      },
      true,
    );

    // Handle action renames
    changeEachEntry(
      draft.actionTypes,
      newNames.actions,
      (draft, oldActionName, newActionName) => {
        changeValue(draft, "apiName", oldActionName, newActionName);
      },
      true,
    );

    // Handle interface renames
    changeEachEntry(
      draft.interfaceTypes,
      newNames.interfaces,
      (ifaceType, oldIfaceName, newIfaceName) => {
        changeValue(ifaceType, "apiName", oldIfaceName, newIfaceName);
        ifaceType.extendsInterfaces = ifaceType.extendsInterfaces.map(
          v => v === oldIfaceName ? newIfaceName : v,
        );
        changeEachEntry(
          ifaceType.properties,
          newNames.spts,
          (property, oldSptName, newSptName) => {
            changeValue(property, "apiName", oldSptName, newSptName);
          },
          true,
        );
      },
      true,
    );

    changeEachEntry(
      draft.objectTypes,
      newNames.interfaces,
      (objectType, oldIfaceName, newIfaceName) => {
        changeArrayEntry(
          objectType.implementsInterfaces,
          oldIfaceName,
          newIfaceName,
        );

        changeKey(
          objectType.implementsInterfaces2,
          oldIfaceName,
          newIfaceName,
        );
      },
    );

    // Handle object renames
    changeEachEntry(
      draft.queryTypes,
      newNames.objects,
      (queryType, oldObjectName, newObjectName) => {
        changeDataType(queryType.output, oldObjectName, newObjectName);

        for (const { dataType } of Object.values(queryType.parameters)) {
          changeDataType(dataType, oldObjectName, newObjectName);
        }
      },
    );

    changeEachEntry(
      draft.objectTypes,
      newNames.objects,
      ({ objectType, linkTypes }, oldObjectName, newObjectName) => {
        changeValue(objectType, "apiName", oldObjectName, newObjectName);

        for (const l of linkTypes) {
          changeValue(l, "objectTypeApiName", oldObjectName, newObjectName);
        }
      },
      true,
    );

    changeEachEntry(
      draft.actionTypes,
      newNames.objects,
      (action, oldObjectName, newObjectName) => {
        for (const op of action.operations) {
          switch (op.type) {
            case "deleteObject":
            case "modifyObject":
            case "createObject":
              if (op.objectTypeApiName === oldObjectName) {
                op.objectTypeApiName = newObjectName;
              }
          }
        }

        for (const { dataType } of Object.values(action.parameters)) {
          changeDataType(dataType, oldObjectName, newObjectName);
        }
      },
    );
  });
}

const referencedOntology = {
  "ontology": {
    "apiName": "dep",
    "rid": "ri.ontology.main.ontology.dep",
    "displayName": "",
    "description": "",
  },
  "actionTypes": {},
  "objectTypes": {
    "com.example.dep.Task": {
      implementsInterfaces: [],
      implementsInterfaces2: {},
      sharedPropertyTypeMapping: {},
      "objectType": {
        "apiName": "com.example.dep.Task",
        "primaryKey": "taskId",
        displayName: "Task",
        pluralDisplayName: "Tasks",
        icon: { type: "blueprint", color: "blue", name: "document" },

        titleProperty: "taskId",

        "properties": {
          "taskId": {
            "dataType": {
              "type": "string",
            },
          },
          "body": {
            "dataType": {
              "type": "string",
            },
          },
        },
        "status": "ACTIVE",
        "rid": "ridForTask",
      },
      "linkTypes": [],
    },
  },
  "queryTypes": {},
  "interfaceTypes": {
    "com.example.dep.SomeInterface": {
      apiName: "com.example.dep.SomeInterface",
      rid: "idk2",
      displayName: "Sum Interface",
      extendsInterfaces: [],
      properties: {
        "com.example.dep.spt": {
          apiName: "com.example.dep.spt",
          dataType: {
            type: "string",
          },
          displayName: "Some Property",
          rid: "idk",
        },
      },
      links: {},
    },
  },
  "sharedPropertyTypes": {
    "com.example.dep.spt": {
      apiName: "com.example.dep.spt",
      dataType: {
        type: "string",
      },
      displayName: "Some Property",
      rid: "idk",
    },
  },
} satisfies WireOntologyDefinition;

const referencingOntology = {
  ontology: TodoWireOntology.ontology,
  "actionTypes": {
    "setTaskBody": {
      "apiName": "setTaskBody",
      "parameters": {
        "task": {
          "dataType": {
            "type": "object",
            "objectApiName": "com.example.dep.Task",
            "objectTypeApiName": "com.example.dep.Task",
          },
          "required": true,
        },
        "body": {
          "dataType": {
            "type": "string",
          },
          "required": true,
        },
      },
      "status": "ACTIVE",
      "rid": "ri.a.b.c.d",
      "operations": [
        {
          "type": "modifyObject",
          "objectTypeApiName": "com.example.dep.Task",
        },
      ],
    },
  },
  interfaceTypes: {
    ...referencedOntology.interfaceTypes,
  },
  objectTypes: {
    ...referencedOntology.objectTypes,
    "Thing": {
      implementsInterfaces: ["com.example.dep.SomeInterface"],
      implementsInterfaces2: {
        "com.example.dep.SomeInterface": {
          properties: {
            "com.example.dep.spt": "body",
          },
        },
      },
      linkTypes: [],
      objectType: {
        apiName: "Thing",
        displayName: "Thing",
        pluralDisplayName: "Things",
        icon: { type: "blueprint", color: "blue", name: "document" },
        primaryKey: "id",
        properties: {
          "id": {
            dataType: {
              type: "integer",
            },
          },
          "body": {
            dataType: {
              type: "string",
            },
          },
        },
        rid: "ridForThing",
        status: "ACTIVE",
        titleProperty: "id",
      },
      sharedPropertyTypeMapping: {},
    },
    "UsesForeignSpt": {
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "UsesForeignSpt",
        primaryKey: "id",
        displayName: "Uses Foreign Spt",
        icon: { type: "blueprint", color: "blue", name: "document" },
        pluralDisplayName: "Uses Foreign Spts",
        properties: {
          "id": {
            dataType: {
              type: "integer",
            },
          },
          "body": {
            dataType: {
              type: "string",
            },
          },
        },
        rid: "theRid",
        status: "ACTIVE",
        titleProperty: "id",
      },
      sharedPropertyTypeMapping: {
        "com.example.dep.spt": "body",
      },
    },
  },
  queryTypes: {
    getTask: {
      apiName: "getTask",
      output: {
        type: "object",
        objectApiName: "com.example.dep.Task",
        objectTypeApiName: "com.example.dep.Task",
      },
      parameters: {
        "a": {
          dataType: {
            type: "object",
            objectApiName: "com.example.dep.Task",
            objectTypeApiName: "com.example.dep.Task",
          },
        },
      },
      rid: "ri.a.b.c",
      version: "0",
    },
  },
  sharedPropertyTypes: {},
} satisfies WireOntologyDefinition;

const fooBarTodoWireOntology = changeNames(
  TodoWireOntology,
  {
    objects: { "Todo": "foo.bar.Todo", "Person": "foo.bar.Person" },
    actions: {
      markTodoCompleted: "foo.bar.markTodoCompleted",
      deleteTodos: "foo.bar.deleteTodos",
    },
    interfaces: {
      "SomeInterface": "foo.bar.SomeInterface",
    },
    queries: {
      "getCount": "foo.bar.getCount",
      "returnsTodo": "foo.bar.returnsTodo",
    },
    spts: {
      "SomeProperty": "foo.bar.SomeProperty",
    },
  },
);

const BASE_PATH = "/foo";

describe("generator", () => {
  let helper: ReturnType<typeof createMockMinimalFiles>;
  beforeEach(async () => {
    helper = createMockMinimalFiles();
  });

  test("should be able to generate a project", async () => {
    await generateClientSdkVersionTwoPointZero(
      TodoWireOntology,
      "typescript-sdk/0.0.0 osdk-cli/0.0.0",
      helper.minimalFiles,
      BASE_PATH,
    );

    const files = helper.getFiles();

    expect(files).toMatchObject({
      [`${BASE_PATH}/index.ts`]: expect.anything(),
      [`${BASE_PATH}/OntologyMetadata.ts`]: expect.anything(),
      [`${BASE_PATH}/ontology/objects/Todo.ts`]: expect.anything(),
    });

    const diagnostics = compileThis(helper.getFiles(), BASE_PATH);
    for (const q of diagnostics) {
      console.error(
        `${q.file?.fileName}:${q.file?.getLineStarts()} ${q.messageText}`,
      );
    }

    // TODO: Certain errors are expected since we can't resolve the static code, but we should fix them.
    const errors = diagnostics.filter(q => q.code !== 2792);
    expect(errors).toHaveLength(0);

    expect(
      tweakedFilesForSnapshotConsistency(helper.getFiles()),
    ).toMatchInlineSnapshot(`
      {
        "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = 'PLACEHOLDER';
      export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/0.0.0 osdk-cli/0.0.0' };

      export const $ontologyRid = 'ridHere';
      ",
        "/foo/index.ts": "export { deleteTodos, markTodoCompleted } from './ontology/actions';
      export * as $Actions from './ontology/actions';
      export { SomeInterface } from './ontology/interfaces';
      export * as $Interfaces from './ontology/interfaces';
      export { Person, Todo } from './ontology/objects';
      export * as $Objects from './ontology/objects';
      export { getCount, returnsTodo } from './ontology/queries';
      export * as $Queries from './ontology/queries';
      export { $ontologyRid } from './OntologyMetadata';
      ",
        "/foo/ontology/actions.ts": "export { deleteTodos } from './actions/deleteTodos';
      export { markTodoCompleted } from './actions/markTodoCompleted';
      ",
        "/foo/ontology/actions/deleteTodos.ts": "import type {
        ActionDefinition,
        ActionMetadata,
        ActionParam,
        ActionReturnTypeForOptions,
        ApplyActionOptions,
        ApplyBatchActionOptions,
      } from '@osdk/api';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Todo } from '../objects/Todo';

      export namespace deleteTodos {
        // Represents the definition of the parameters for the action
        export type ParamsDefinition = {
          object: {
            description: 'Todo(s) to be deleted';
            multiplicity: true;
            nullable: true;
            type: ActionMetadata.DataType.Object<Todo>;
          };
        };

        /**
         * An action which takes in an array of objects
         */
        export interface Params {
          /**
           * Todo(s) to be deleted
           */
          readonly object?: ReadonlyArray<ActionParam.ObjectType<Todo>>;
        }

        // Represents a fqn of the action
        export interface Signatures {
          /**
           * An action which takes in an array of objects
           */
          applyAction<P extends deleteTodos.Params, OP extends ApplyActionOptions>(
            args: P,
            options?: OP,
          ): Promise<ActionReturnTypeForOptions<OP>>;

          batchApplyAction<P extends ReadonlyArray<deleteTodos.Params>, OP extends ApplyBatchActionOptions>(
            args: P,
            options?: OP,
          ): Promise<ActionReturnTypeForOptions<OP>>;
        }
      }

      /**
       * An action which takes in an array of objects
       * @param {ActionParam.ObjectType<Todo>} [object] Todo(s) to be deleted
       */
      export interface deleteTodos extends ActionDefinition<deleteTodos.Signatures> {
        __DefinitionMetadata?: {
          apiName: 'deleteTodos';
          description: 'An action which takes in an array of objects';
          modifiedEntities: {};
          parameters: deleteTodos.ParamsDefinition;
          rid: 'ri.ontology.main.action-type.8f94017d-cf17-4fa8-84c3-8e01e5d594f2';
          status: 'ACTIVE';
          type: 'action';

          signatures: deleteTodos.Signatures;
        };
        apiName: 'deleteTodos';
        type: 'action';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const deleteTodos: deleteTodos = {
        apiName: 'deleteTodos',
        type: 'action',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/actions/markTodoCompleted.ts": "import type {
        ActionDefinition,
        ActionMetadata,
        ActionParam,
        ActionReturnTypeForOptions,
        ApplyActionOptions,
        ApplyBatchActionOptions,
      } from '@osdk/api';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Todo } from '../objects/Todo';

      export namespace markTodoCompleted {
        // Represents the definition of the parameters for the action
        export type ParamsDefinition = {
          object: {
            description: 'A Todo to mark completed';
            multiplicity: false;
            nullable: true;
            type: ActionMetadata.DataType.Object<Todo>;
          };
        };

        /**
         * An action which takes different types of parameters
         */
        export interface Params {
          /**
           * A Todo to mark completed
           */
          readonly object?: ActionParam.ObjectType<Todo>;
        }

        // Represents a fqn of the action
        export interface Signatures {
          /**
           * An action which takes different types of parameters
           */
          applyAction<P extends markTodoCompleted.Params, OP extends ApplyActionOptions>(
            args: P,
            options?: OP,
          ): Promise<ActionReturnTypeForOptions<OP>>;

          batchApplyAction<P extends ReadonlyArray<markTodoCompleted.Params>, OP extends ApplyBatchActionOptions>(
            args: P,
            options?: OP,
          ): Promise<ActionReturnTypeForOptions<OP>>;
        }
      }

      /**
       * An action which takes different types of parameters
       * @param {ActionParam.ObjectType<Todo>} [object] A Todo to mark completed
       */
      export interface markTodoCompleted extends ActionDefinition<markTodoCompleted.Signatures> {
        __DefinitionMetadata?: {
          apiName: 'markTodoCompleted';
          description: 'An action which takes different types of parameters';
          modifiedEntities: {
            Todo: {
              created: false;
              modified: true;
            };
          };
          parameters: markTodoCompleted.ParamsDefinition;
          rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
          status: 'ACTIVE';
          type: 'action';

          signatures: markTodoCompleted.Signatures;
        };
        apiName: 'markTodoCompleted';
        type: 'action';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const markTodoCompleted: markTodoCompleted = {
        apiName: 'markTodoCompleted',
        type: 'action',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/interfaces.ts": "export { SomeInterface } from './interfaces/SomeInterface';
      ",
        "/foo/ontology/interfaces/SomeInterface.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
      import { $osdkMetadata } from '../../OntologyMetadata';

      import type {
        InterfaceDefinition as $InterfaceDefinition,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        PropertyValueWireToClient as $PropType,
      } from '@osdk/api';

      export type OsdkObjectLinks$SomeInterface = {};

      export namespace SomeInterface {
        export type PropertyKeys = 'SomeProperty';

        export interface Props {
          readonly SomeProperty: $PropType['string'] | undefined;
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | '$rid' = never,
          K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
        > = $Osdk.Instance<SomeInterface, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | '$rid' = never,
          K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface SomeInterface extends $InterfaceDefinition {
        osdkMetadata: typeof $osdkMetadata;
        type: 'interface';
        apiName: 'SomeInterface';
        __DefinitionMetadata?: {
          objectSet: SomeInterface.ObjectSet;
          props: SomeInterface.Props;
          linksType: OsdkObjectLinks$SomeInterface;
          strictProps: SomeInterface.StrictProps;
          apiName: 'SomeInterface';
          description: 'Some interface';
          displayName: 'Sum Interface';
          implements: [];
          links: {};
          properties: {
            /**
             *   display name: 'Sum Property',
             *   description: Some property
             */
            SomeProperty: $PropertyDef<'string', 'nullable', 'single'>;
          };
          rid: 'idk';
          type: 'interface';
        };
      }

      export const SomeInterface: SomeInterface = {
        type: 'interface',
        apiName: 'SomeInterface',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/objects.ts": "export { Person } from './objects/Person';
      export { Todo } from './objects/Todo';
      ",
        "/foo/ontology/objects/Person.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import type { Todo } from './Todo';
      import type {
        PropertyKeys as $PropertyKeys,
        ObjectTypeDefinition as $ObjectTypeDefinition,
        ObjectMetadata as $ObjectMetadata,
      } from '@osdk/api';
      import type {
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        PropertyValueWireToClient as $PropType,
        SingleLinkAccessor as $SingleLinkAccessor,
      } from '@osdk/api';

      export namespace Person {
        export type PropertyKeys = 'email';

        export interface Links {
          readonly Todos: Todo.ObjectSet;
        }

        export interface Props {
          readonly email: $PropType['string'];
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | '$rid' = never,
          K extends keyof Person.Props = keyof Person.Props,
        > = $Osdk.Instance<Person, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | '$rid' = never,
          K extends keyof Person.Props = keyof Person.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface Person extends $ObjectTypeDefinition {
        osdkMetadata: typeof $osdkMetadata;
        type: 'object';
        apiName: 'Person';
        __DefinitionMetadata?: {
          objectSet: Person.ObjectSet;
          props: Person.Props;
          linksType: Person.Links;
          strictProps: Person.StrictProps;
          apiName: 'Person';
          description: 'A person';
          displayName: 'Person';
          icon: {
            type: 'blueprint';
            name: 'document';
            color: 'blue';
          };
          implements: [];
          interfaceMap: {};
          inverseInterfaceMap: {};
          links: {
            Todos: $ObjectMetadata.Link<Todo, true>;
          };
          pluralDisplayName: 'Persons';
          primaryKeyApiName: 'email';
          primaryKeyType: 'string';
          properties: {
            /**
             * (no ontology metadata)
             */
            email: $PropertyDef<'string', 'non-nullable', 'single'>;
          };
          rid: 'ridForPerson';
          status: 'ACTIVE';
          titleProperty: 'email';
          type: 'object';
        };
      }

      export const Person: Person = {
        type: 'object',
        apiName: 'Person',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/objects/Todo.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import type { Person } from './Person';
      import type {
        PropertyKeys as $PropertyKeys,
        ObjectTypeDefinition as $ObjectTypeDefinition,
        ObjectMetadata as $ObjectMetadata,
      } from '@osdk/api';
      import type {
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        PropertyValueWireToClient as $PropType,
        SingleLinkAccessor as $SingleLinkAccessor,
      } from '@osdk/api';

      export namespace Todo {
        export type PropertyKeys = 'id' | 'body' | 'complete';

        export interface Links {
          readonly Assignee: $SingleLinkAccessor<Person>;
        }

        export interface Props {
          readonly body: $PropType['string'] | undefined;
          readonly complete: $PropType['boolean'] | undefined;
          readonly id: $PropType['integer'];
        }
        export type StrictProps = Props;

        export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}

        export type OsdkInstance<
          OPTIONS extends never | '$rid' = never,
          K extends keyof Todo.Props = keyof Todo.Props,
        > = $Osdk.Instance<Todo, OPTIONS, K>;

        /** @deprecated use OsdkInstance */
        export type OsdkObject<
          OPTIONS extends never | '$rid' = never,
          K extends keyof Todo.Props = keyof Todo.Props,
        > = OsdkInstance<OPTIONS, K>;
      }

      export interface Todo extends $ObjectTypeDefinition {
        osdkMetadata: typeof $osdkMetadata;
        type: 'object';
        apiName: 'Todo';
        __DefinitionMetadata?: {
          objectSet: Todo.ObjectSet;
          props: Todo.Props;
          linksType: Todo.Links;
          strictProps: Todo.StrictProps;
          apiName: 'Todo';
          description: 'Its a todo item.';
          displayName: 'AwesomeTodoDisplayname';
          icon: {
            type: 'blueprint';
            name: 'document';
            color: 'blue';
          };
          implements: ['SomeInterface'];
          interfaceMap: {
            SomeInterface: {
              SomeProperty: 'body';
            };
          };
          inverseInterfaceMap: {
            SomeInterface: {
              body: 'SomeProperty';
            };
          };
          links: {
            Assignee: $ObjectMetadata.Link<Person, false>;
          };
          pluralDisplayName: 'AwesomeTodoDisplayNames';
          primaryKeyApiName: 'id';
          primaryKeyType: 'integer';
          properties: {
            /**
             *   display name: 'Body',
             *   description: The text of the todo
             */
            body: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            complete: $PropertyDef<'boolean', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            id: $PropertyDef<'integer', 'non-nullable', 'single'>;
          };
          rid: 'ridForTodo';
          status: 'ACTIVE';
          titleProperty: 'body';
          type: 'object';
        };
      }

      export const Todo: Todo = {
        type: 'object',
        apiName: 'Todo',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/queries.ts": "export { getCount } from './queries/getCount';
      export { returnsTodo } from './queries/returnsTodo';
      ",
        "/foo/ontology/queries/getCount.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';

      export namespace getCount {
        export interface Signature {
          (query: getCount.Parameters): Promise<getCount.ReturnType>;
        }

        export interface Parameters {
          /**
           * (no ontology metadata)
           */
          readonly completed: QueryParam.PrimitiveType<'boolean'>;
        }

        export type ReturnType = QueryResult.PrimitiveType<'integer'>;
      }

      export interface getCount extends QueryDefinition<getCount.Signature>, VersionBound<$ExpectedClientVersion> {
        __DefinitionMetadata?: {
          apiName: 'getCount';
          rid: 'rid.query.1';
          type: 'query';
          version: '0';
          parameters: {
            /**
             * (no ontology metadata)
             */
            completed: {
              nullable: false;
              type: 'boolean';
            };
          };
          output: {
            nullable: false;
            type: 'integer';
          };
          signature: getCount.Signature;
        };
        apiName: 'getCount';
        type: 'query';
        version: '0';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const getCount: getCount = {
        apiName: 'getCount',
        type: 'query',
        version: '0',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/queries/returnsTodo.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Todo } from '../objects/Todo';

      export namespace returnsTodo {
        export interface Signature {
          (query: returnsTodo.Parameters): Promise<returnsTodo.ReturnType>;
        }

        export interface Parameters {
          /**
           *   description: Random desc so we test jsdoc
           */
          readonly someTodo: QueryParam.ObjectType<Todo>;
        }

        export type ReturnType = QueryResult.ObjectType<Todo>;
      }

      export interface returnsTodo extends QueryDefinition<returnsTodo.Signature>, VersionBound<$ExpectedClientVersion> {
        __DefinitionMetadata?: {
          apiName: 'returnsTodo';
          rid: 'rid.query.2';
          type: 'query';
          version: '0';
          parameters: {
            /**
             *   description: Random desc so we test jsdoc
             */
            someTodo: {
              description: 'Random desc so we test jsdoc';
              nullable: false;
              object: 'Todo';
              type: 'object';
              __OsdkTargetType?: Todo;
            };
          };
          output: {
            nullable: false;
            object: 'Todo';
            type: 'object';
            __OsdkTargetType?: Todo;
          };
          signature: returnsTodo.Signature;
        };
        apiName: 'returnsTodo';
        type: 'query';
        version: '0';
        osdkMetadata: typeof $osdkMetadata;
      }

      export const returnsTodo: returnsTodo = {
        apiName: 'returnsTodo',
        type: 'query',
        version: '0',
        osdkMetadata: $osdkMetadata,
      };
      ",
      }
    `);
  });

  test("throws an error when target destination is not empty", async () => {
    helper.minimalFiles.readdir = vi.fn(async (_path: string) => ["file"]);

    await expect(async () => {
      await expect(generateClientSdkVersionTwoPointZero(
        TodoWireOntology,
        "typescript-sdk/0.0.0 osdk-cli/0.0.0",
        helper.minimalFiles,
        BASE_PATH,
      )).rejects.toThrow();
    });
  });

  it("throws an error if a namespace is provided that all top levels do not use", async () => {
    await expect(
      generateClientSdkVersionTwoPointZero(
        { ...TodoWireOntology },
        "",
        helper.minimalFiles,
        BASE_PATH,
        "module",
      ),
    );

    // Disabled for now since we can't really enforce it from dev console at the moment
    // .rejects.toThrowErrorMatchingInlineSnapshot(
    //   `[Error: Found type { ns:'undefined', shortName: 'Todo'} but it is not in the generation namespace 'foo.bar'. This violates the contract of the generator.]`,
    // );
  });

  it("does not throw an error if a namespace is provided that all top levels use", async () => {
    await expect(
      generateClientSdkVersionTwoPointZero(
        fooBarTodoWireOntology,
        "",
        helper.minimalFiles,
        BASE_PATH,
        "module",
      ),
    ).resolves.toMatchInlineSnapshot(`undefined`);

    expect(helper.getFiles()["/foo/ontology/objects/foo.bar.Todo.ts"])
      .toBeUndefined();

    expect(helper.getFiles()["/foo/ontology/objects/Todo.ts"])
      .not.toBeUndefined();

    expect(tweakedFilesForSnapshotConsistency(helper.getFiles()))
      .toMatchInlineSnapshot(`
        {
          "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = 'PLACEHOLDER';
        export const $osdkMetadata = { extraUserAgent: '' };

        export const $ontologyRid = 'ridHere';
        ",
          "/foo/index.ts": "export { deleteTodos, markTodoCompleted } from './ontology/actions.js';
        export * as $Actions from './ontology/actions.js';
        export { SomeInterface } from './ontology/interfaces.js';
        export * as $Interfaces from './ontology/interfaces.js';
        export { Person, Todo } from './ontology/objects.js';
        export * as $Objects from './ontology/objects.js';
        export { getCount, returnsTodo } from './ontology/queries.js';
        export * as $Queries from './ontology/queries.js';
        export { $ontologyRid } from './OntologyMetadata.js';
        ",
          "/foo/ontology/actions.ts": "export { deleteTodos } from './actions/deleteTodos.js';
        export { markTodoCompleted } from './actions/markTodoCompleted.js';
        ",
          "/foo/ontology/actions/deleteTodos.ts": "import type {
          ActionDefinition,
          ActionMetadata,
          ActionParam,
          ActionReturnTypeForOptions,
          ApplyActionOptions,
          ApplyBatchActionOptions,
        } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { Todo } from '../objects/Todo.js';

        export namespace deleteTodos {
          // Represents the definition of the parameters for the action
          export type ParamsDefinition = {
            object: {
              description: 'Todo(s) to be deleted';
              multiplicity: true;
              nullable: true;
              type: ActionMetadata.DataType.Object<Todo>;
            };
          };

          /**
           * An action which takes in an array of objects
           */
          export interface Params {
            /**
             * Todo(s) to be deleted
             */
            readonly object?: ReadonlyArray<ActionParam.ObjectType<Todo>>;
          }

          // Represents a fqn of the action
          export interface Signatures {
            /**
             * An action which takes in an array of objects
             */
            applyAction<P extends deleteTodos.Params, OP extends ApplyActionOptions>(
              args: P,
              options?: OP,
            ): Promise<ActionReturnTypeForOptions<OP>>;

            batchApplyAction<P extends ReadonlyArray<deleteTodos.Params>, OP extends ApplyBatchActionOptions>(
              args: P,
              options?: OP,
            ): Promise<ActionReturnTypeForOptions<OP>>;
          }
        }

        /**
         * An action which takes in an array of objects
         * @param {ActionParam.ObjectType<Todo>} [object] Todo(s) to be deleted
         */
        export interface deleteTodos extends ActionDefinition<deleteTodos.Signatures> {
          __DefinitionMetadata?: {
            apiName: 'foo.bar.deleteTodos';
            description: 'An action which takes in an array of objects';
            modifiedEntities: {};
            parameters: deleteTodos.ParamsDefinition;
            rid: 'ri.ontology.main.action-type.8f94017d-cf17-4fa8-84c3-8e01e5d594f2';
            status: 'ACTIVE';
            type: 'action';

            signatures: deleteTodos.Signatures;
          };
          apiName: 'foo.bar.deleteTodos';
          type: 'action';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const deleteTodos: deleteTodos = {
          apiName: 'foo.bar.deleteTodos',
          type: 'action',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/actions/markTodoCompleted.ts": "import type {
          ActionDefinition,
          ActionMetadata,
          ActionParam,
          ActionReturnTypeForOptions,
          ApplyActionOptions,
          ApplyBatchActionOptions,
        } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { Todo } from '../objects/Todo.js';

        export namespace markTodoCompleted {
          // Represents the definition of the parameters for the action
          export type ParamsDefinition = {
            object: {
              description: 'A Todo to mark completed';
              multiplicity: false;
              nullable: true;
              type: ActionMetadata.DataType.Object<Todo>;
            };
          };

          /**
           * An action which takes different types of parameters
           */
          export interface Params {
            /**
             * A Todo to mark completed
             */
            readonly object?: ActionParam.ObjectType<Todo>;
          }

          // Represents a fqn of the action
          export interface Signatures {
            /**
             * An action which takes different types of parameters
             */
            applyAction<P extends markTodoCompleted.Params, OP extends ApplyActionOptions>(
              args: P,
              options?: OP,
            ): Promise<ActionReturnTypeForOptions<OP>>;

            batchApplyAction<P extends ReadonlyArray<markTodoCompleted.Params>, OP extends ApplyBatchActionOptions>(
              args: P,
              options?: OP,
            ): Promise<ActionReturnTypeForOptions<OP>>;
          }
        }

        /**
         * An action which takes different types of parameters
         * @param {ActionParam.ObjectType<Todo>} [object] A Todo to mark completed
         */
        export interface markTodoCompleted extends ActionDefinition<markTodoCompleted.Signatures> {
          __DefinitionMetadata?: {
            apiName: 'foo.bar.markTodoCompleted';
            description: 'An action which takes different types of parameters';
            modifiedEntities: {
              'foo.bar.Todo': {
                created: false;
                modified: true;
              };
            };
            parameters: markTodoCompleted.ParamsDefinition;
            rid: 'ri.ontology.main.action-type.9f84017d-cf17-4fa8-84c3-8e01e5d594f2';
            status: 'ACTIVE';
            type: 'action';

            signatures: markTodoCompleted.Signatures;
          };
          apiName: 'foo.bar.markTodoCompleted';
          type: 'action';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const markTodoCompleted: markTodoCompleted = {
          apiName: 'foo.bar.markTodoCompleted',
          type: 'action',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/interfaces.ts": "export { SomeInterface } from './interfaces/SomeInterface.js';
        ",
          "/foo/ontology/interfaces/SomeInterface.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        import type {
          InterfaceDefinition as $InterfaceDefinition,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          PropertyValueWireToClient as $PropType,
        } from '@osdk/api';

        export type OsdkObjectLinks$SomeInterface = {};

        export namespace SomeInterface {
          export type PropertyKeys = 'SomeProperty';

          export interface Props {
            readonly SomeProperty: $PropType['string'] | undefined;
          }
          export type StrictProps = Props;

          export interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {}

          export type OsdkInstance<
            OPTIONS extends never | '$rid' = never,
            K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
          > = $Osdk.Instance<SomeInterface, OPTIONS, K>;

          /** @deprecated use OsdkInstance */
          export type OsdkObject<
            OPTIONS extends never | '$rid' = never,
            K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
          > = OsdkInstance<OPTIONS, K>;
        }

        export interface SomeInterface extends $InterfaceDefinition {
          osdkMetadata: typeof $osdkMetadata;
          type: 'interface';
          apiName: 'foo.bar.SomeInterface';
          __DefinitionMetadata?: {
            objectSet: SomeInterface.ObjectSet;
            props: SomeInterface.Props;
            linksType: OsdkObjectLinks$SomeInterface;
            strictProps: SomeInterface.StrictProps;
            apiName: 'foo.bar.SomeInterface';
            description: 'Some interface';
            displayName: 'Sum Interface';
            implements: [];
            links: {};
            properties: {
              /**
               *   display name: 'Sum Property',
               *   description: Some property
               */
              SomeProperty: $PropertyDef<'string', 'nullable', 'single'>;
            };
            rid: 'idk';
            type: 'interface';
          };
        }

        export const SomeInterface: SomeInterface = {
          type: 'interface',
          apiName: 'foo.bar.SomeInterface',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/objects.ts": "export { Person } from './objects/Person.js';
        export { Todo } from './objects/Todo.js';
        ",
          "/foo/ontology/objects/Person.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import type { Todo } from './Todo.js';
        import type {
          PropertyKeys as $PropertyKeys,
          ObjectTypeDefinition as $ObjectTypeDefinition,
          ObjectMetadata as $ObjectMetadata,
        } from '@osdk/api';
        import type {
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          PropertyValueWireToClient as $PropType,
          SingleLinkAccessor as $SingleLinkAccessor,
        } from '@osdk/api';

        export namespace Person {
          export type PropertyKeys = 'email';

          export interface Links {
            readonly Todos: Todo.ObjectSet;
          }

          export interface Props {
            readonly email: $PropType['string'];
          }
          export type StrictProps = Props;

          export interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {}

          export type OsdkInstance<
            OPTIONS extends never | '$rid' = never,
            K extends keyof Person.Props = keyof Person.Props,
          > = $Osdk.Instance<Person, OPTIONS, K>;

          /** @deprecated use OsdkInstance */
          export type OsdkObject<
            OPTIONS extends never | '$rid' = never,
            K extends keyof Person.Props = keyof Person.Props,
          > = OsdkInstance<OPTIONS, K>;
        }

        export interface Person extends $ObjectTypeDefinition {
          osdkMetadata: typeof $osdkMetadata;
          type: 'object';
          apiName: 'foo.bar.Person';
          __DefinitionMetadata?: {
            objectSet: Person.ObjectSet;
            props: Person.Props;
            linksType: Person.Links;
            strictProps: Person.StrictProps;
            apiName: 'foo.bar.Person';
            description: 'A person';
            displayName: 'Person';
            icon: {
              type: 'blueprint';
              name: 'document';
              color: 'blue';
            };
            implements: [];
            interfaceMap: {};
            inverseInterfaceMap: {};
            links: {
              Todos: $ObjectMetadata.Link<Todo, true>;
            };
            pluralDisplayName: 'Persons';
            primaryKeyApiName: 'email';
            primaryKeyType: 'string';
            properties: {
              /**
               * (no ontology metadata)
               */
              email: $PropertyDef<'string', 'non-nullable', 'single'>;
            };
            rid: 'ridForPerson';
            status: 'ACTIVE';
            titleProperty: 'email';
            type: 'object';
          };
        }

        export const Person: Person = {
          type: 'object',
          apiName: 'foo.bar.Person',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/objects/Todo.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import type { Person } from './Person.js';
        import type {
          PropertyKeys as $PropertyKeys,
          ObjectTypeDefinition as $ObjectTypeDefinition,
          ObjectMetadata as $ObjectMetadata,
        } from '@osdk/api';
        import type {
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          PropertyValueWireToClient as $PropType,
          SingleLinkAccessor as $SingleLinkAccessor,
        } from '@osdk/api';

        export namespace Todo {
          export type PropertyKeys = 'id' | 'body' | 'complete';

          export interface Links {
            readonly Assignee: $SingleLinkAccessor<Person>;
          }

          export interface Props {
            readonly body: $PropType['string'] | undefined;
            readonly complete: $PropType['boolean'] | undefined;
            readonly id: $PropType['integer'];
          }
          export type StrictProps = Props;

          export interface ObjectSet extends $ObjectSet<Todo, Todo.ObjectSet> {}

          export type OsdkInstance<
            OPTIONS extends never | '$rid' = never,
            K extends keyof Todo.Props = keyof Todo.Props,
          > = $Osdk.Instance<Todo, OPTIONS, K>;

          /** @deprecated use OsdkInstance */
          export type OsdkObject<
            OPTIONS extends never | '$rid' = never,
            K extends keyof Todo.Props = keyof Todo.Props,
          > = OsdkInstance<OPTIONS, K>;
        }

        export interface Todo extends $ObjectTypeDefinition {
          osdkMetadata: typeof $osdkMetadata;
          type: 'object';
          apiName: 'foo.bar.Todo';
          __DefinitionMetadata?: {
            objectSet: Todo.ObjectSet;
            props: Todo.Props;
            linksType: Todo.Links;
            strictProps: Todo.StrictProps;
            apiName: 'foo.bar.Todo';
            description: 'Its a todo item.';
            displayName: 'AwesomeTodoDisplayname';
            icon: {
              type: 'blueprint';
              name: 'document';
              color: 'blue';
            };
            implements: ['foo.bar.SomeInterface'];
            interfaceMap: {
              'foo.bar.SomeInterface': {
                SomeProperty: 'body';
              };
            };
            inverseInterfaceMap: {
              'foo.bar.SomeInterface': {
                body: 'SomeProperty';
              };
            };
            links: {
              Assignee: $ObjectMetadata.Link<Person, false>;
            };
            pluralDisplayName: 'AwesomeTodoDisplayNames';
            primaryKeyApiName: 'id';
            primaryKeyType: 'integer';
            properties: {
              /**
               *   display name: 'Body',
               *   description: The text of the todo
               */
              body: $PropertyDef<'string', 'nullable', 'single'>;
              /**
               * (no ontology metadata)
               */
              complete: $PropertyDef<'boolean', 'nullable', 'single'>;
              /**
               * (no ontology metadata)
               */
              id: $PropertyDef<'integer', 'non-nullable', 'single'>;
            };
            rid: 'ridForTodo';
            status: 'ACTIVE';
            titleProperty: 'body';
            type: 'object';
          };
        }

        export const Todo: Todo = {
          type: 'object',
          apiName: 'foo.bar.Todo',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/queries.ts": "export { getCount } from './queries/getCount.js';
        export { returnsTodo } from './queries/returnsTodo.js';
        ",
          "/foo/ontology/queries/getCount.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
        import type { QueryParam, QueryResult } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export namespace getCount {
          export interface Signature {
            (query: getCount.Parameters): Promise<getCount.ReturnType>;
          }

          export interface Parameters {
            /**
             * (no ontology metadata)
             */
            readonly completed: QueryParam.PrimitiveType<'boolean'>;
          }

          export type ReturnType = QueryResult.PrimitiveType<'integer'>;
        }

        export interface getCount extends QueryDefinition<getCount.Signature>, VersionBound<$ExpectedClientVersion> {
          __DefinitionMetadata?: {
            apiName: 'foo.bar.getCount';
            rid: 'rid.query.1';
            type: 'query';
            version: '0';
            parameters: {
              /**
               * (no ontology metadata)
               */
              completed: {
                nullable: false;
                type: 'boolean';
              };
            };
            output: {
              nullable: false;
              type: 'integer';
            };
            signature: getCount.Signature;
          };
          apiName: 'foo.bar.getCount';
          type: 'query';
          version: '0';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const getCount: getCount = {
          apiName: 'foo.bar.getCount',
          type: 'query',
          version: '0',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/queries/returnsTodo.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
        import type { QueryParam, QueryResult } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { Todo } from '../objects/Todo.js';

        export namespace returnsTodo {
          export interface Signature {
            (query: returnsTodo.Parameters): Promise<returnsTodo.ReturnType>;
          }

          export interface Parameters {
            /**
             *   description: Random desc so we test jsdoc
             */
            readonly someTodo: QueryParam.ObjectType<Todo>;
          }

          export type ReturnType = QueryResult.ObjectType<Todo>;
        }

        export interface returnsTodo extends QueryDefinition<returnsTodo.Signature>, VersionBound<$ExpectedClientVersion> {
          __DefinitionMetadata?: {
            apiName: 'foo.bar.returnsTodo';
            rid: 'rid.query.2';
            type: 'query';
            version: '0';
            parameters: {
              /**
               *   description: Random desc so we test jsdoc
               */
              someTodo: {
                description: 'Random desc so we test jsdoc';
                nullable: false;
                object: 'foo.bar.Todo';
                type: 'object';
                __OsdkTargetType?: Todo;
              };
            };
            output: {
              nullable: false;
              object: 'foo.bar.Todo';
              type: 'object';
              __OsdkTargetType?: Todo;
            };
            signature: returnsTodo.Signature;
          };
          apiName: 'foo.bar.returnsTodo';
          type: 'query';
          version: '0';
          osdkMetadata: typeof $osdkMetadata;
        }

        export const returnsTodo: returnsTodo = {
          apiName: 'foo.bar.returnsTodo',
          type: 'query',
          version: '0',
          osdkMetadata: $osdkMetadata,
        };
        ",
        }
      `);
  });

  it("guards against empty objects", async () => {
    await generateClientSdkVersionTwoPointZero(
      {
        ontology: TodoWireOntology.ontology,
        actionTypes: {},
        interfaceTypes: {},
        objectTypes: {},
        queryTypes: {},
        sharedPropertyTypes: {},
      },
      "",
      helper.minimalFiles,
      BASE_PATH,
    );

    expect(helper.getFiles()[`${BASE_PATH}/ontology/objects.ts`]).toEqual(
      "export {};\n",
    );
  });

  test.skip("runs generator locally", async () => {
    try {
      await rmdir(`${__dirname}/generated`, { recursive: true });
    } catch (e) {
    }
    await mkdir(`${__dirname}/generated`, { recursive: true });
    await generateClientSdkVersionTwoPointZero(
      TodoWireOntology,
      "typescript-sdk/0.0.0 osdk-cli/0.0.0",
      {
        writeFile: async (path, contents) => {
          await writeFile(path, contents, { flag: "w" });
        },
        mkdir: async (path, options) => {
          await mkdir(path, options);
        },
        readdir: async (path) => await readdir(path),
      },
      `${__dirname}/generated/`,
    );
  });

  describe("$ontologyRid", () => {
    it("does not exist when an ontology api name is provided", async () => {
      const BASE_PATH = "/foo";

      await expect(
        generateClientSdkVersionTwoPointZero(
          fooBarTodoWireOntology,
          "",
          helper.minimalFiles,
          BASE_PATH,
          "module",
          new Map(),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      // expect(helper.getFiles()["/foo/index.ts"]).not.toContain(
      //   "$ontologyRid",
      // );
    });

    it("does exist when an ontology api name is not provided", async () => {
      const BASE_PATH = "/foo";

      await expect(
        generateClientSdkVersionTwoPointZero(
          TodoWireOntology,
          "",
          helper.minimalFiles,
          BASE_PATH,
          "module",
          undefined,
          new Map(),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/index.ts"]).toContain(
        "$ontologyRid",
      );
    });
  });

  describe("query depends on foreign object", () => {
    it("generates the correct code", async () => {
      await expect(
        generateClientSdkVersionTwoPointZero(
          referencingOntology,
          "",
          helper.minimalFiles,
          BASE_PATH,
          "module",
          new Map([["com.example.dep.Task", "@com.example.dep/osdk"]]),
          new Map([["com.example.dep.SomeInterface", "@com.example.dep/osdk"]]),
          new Map([["com.example.dep.spt", "@com.example.dep/osdk"]]),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/ontology/queries/getTask.ts"])
        .toMatchInlineSnapshot(`
          "import type { QueryDefinition, VersionBound } from '@osdk/api';
          import type { QueryParam, QueryResult } from '@osdk/api';
          import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
          import { $osdkMetadata } from '../../OntologyMetadata.js';
          import type { Task as $Imported$com$example$dep$Task } from '@com.example.dep/osdk';

          export namespace getTask {
            export interface Signature {
              (query: getTask.Parameters): Promise<getTask.ReturnType>;
            }

            export interface Parameters {
              /**
               * (no ontology metadata)
               */
              readonly a: QueryParam.ObjectType<$Imported$com$example$dep$Task>;
            }

            export type ReturnType = QueryResult.ObjectType<$Imported$com$example$dep$Task>;
          }

          export interface getTask extends QueryDefinition<getTask.Signature>, VersionBound<$ExpectedClientVersion> {
            __DefinitionMetadata?: {
              apiName: 'getTask';
              rid: 'ri.a.b.c';
              type: 'query';
              version: '0';
              parameters: {
                /**
                 * (no ontology metadata)
                 */
                a: {
                  nullable: false;
                  object: 'com.example.dep.Task';
                  type: 'object';
                  __OsdkTargetType?: $Imported$com$example$dep$Task;
                };
              };
              output: {
                nullable: false;
                object: 'com.example.dep.Task';
                type: 'object';
                __OsdkTargetType?: $Imported$com$example$dep$Task;
              };
              signature: getTask.Signature;
            };
            apiName: 'getTask';
            type: 'query';
            version: '0';
            osdkMetadata: typeof $osdkMetadata;
          }

          export const getTask: getTask = {
            apiName: 'getTask',
            type: 'query',
            version: '0',
            osdkMetadata: $osdkMetadata,
          };
          "
        `);
    });
  });

  describe("object uses on foreign spt", () => {
    it("stuff", async () => {
      await expect(
        generateClientSdkVersionTwoPointZero(
          referencingOntology,
          "",
          helper.minimalFiles,
          BASE_PATH,
          "module",
          new Map([["com.example.dep.Task", "@com.example.dep/osdk"]]),
          new Map([["com.example.dep.SomeInterface", "@com.example.dep/osdk"]]),
          new Map([["com.example.dep.spt", "@com.example.dep/osdk"]]),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/ontology/objects/UsesForeignSpt.ts"])
        .toMatchInlineSnapshot(`
          "import type { PropertyDef as $PropertyDef } from '@osdk/api';
          import { $osdkMetadata } from '../../OntologyMetadata.js';
          import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
          import type {
            PropertyKeys as $PropertyKeys,
            ObjectTypeDefinition as $ObjectTypeDefinition,
            ObjectMetadata as $ObjectMetadata,
          } from '@osdk/api';
          import type {
            ObjectSet as $ObjectSet,
            Osdk as $Osdk,
            OsdkObject as $OsdkObject,
            PropertyValueWireToClient as $PropType,
            SingleLinkAccessor as $SingleLinkAccessor,
          } from '@osdk/api';

          export namespace UsesForeignSpt {
            export type PropertyKeys = 'id' | 'body';

            export type Links = {};

            export interface Props {
              readonly body: $PropType['string'] | undefined;
              readonly id: $PropType['integer'];
            }
            export type StrictProps = Props;

            export interface ObjectSet extends $ObjectSet<UsesForeignSpt, UsesForeignSpt.ObjectSet> {}

            export type OsdkInstance<
              OPTIONS extends never | '$rid' = never,
              K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props,
            > = $Osdk.Instance<UsesForeignSpt, OPTIONS, K>;

            /** @deprecated use OsdkInstance */
            export type OsdkObject<
              OPTIONS extends never | '$rid' = never,
              K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props,
            > = OsdkInstance<OPTIONS, K>;
          }

          export interface UsesForeignSpt extends $ObjectTypeDefinition {
            osdkMetadata: typeof $osdkMetadata;
            type: 'object';
            apiName: 'UsesForeignSpt';
            __DefinitionMetadata?: {
              objectSet: UsesForeignSpt.ObjectSet;
              props: UsesForeignSpt.Props;
              linksType: UsesForeignSpt.Links;
              strictProps: UsesForeignSpt.StrictProps;
              apiName: 'UsesForeignSpt';
              displayName: 'Uses Foreign Spt';
              icon: {
                type: 'blueprint';
                color: 'blue';
                name: 'document';
              };
              implements: [];
              interfaceMap: {};
              inverseInterfaceMap: {};
              links: {};
              pluralDisplayName: 'Uses Foreign Spts';
              primaryKeyApiName: 'id';
              primaryKeyType: 'integer';
              properties: {
                /**
                 * (no ontology metadata)
                 */
                body: $PropertyDef<'string', 'nullable', 'single'>;
                /**
                 * (no ontology metadata)
                 */
                id: $PropertyDef<'integer', 'non-nullable', 'single'>;
              };
              rid: 'theRid';
              status: 'ACTIVE';
              titleProperty: 'id';
              type: 'object';
            };
          }

          export const UsesForeignSpt: UsesForeignSpt = {
            type: 'object',
            apiName: 'UsesForeignSpt',
            osdkMetadata: $osdkMetadata,
          };
          "
        `);
    });
  });

  describe("action depends on foreign object", () => {
    it("can generate the action", async () => {
      await expect(
        generateClientSdkVersionTwoPointZero(
          referencingOntology,
          "",
          helper.minimalFiles,
          BASE_PATH,
          "module",
          new Map([["com.example.dep.Task", "@com.example.dep/osdk"]]),
          new Map([["com.example.dep.SomeInterface", "@com.example.dep/osdk"]]),
          new Map([["com.example.dep.spt", "@com.example.dep/osdk"]]),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/ontology/actions/setTaskBody.ts"])
        .toMatchInlineSnapshot(`
          "import type {
            ActionDefinition,
            ActionMetadata,
            ActionParam,
            ActionReturnTypeForOptions,
            ApplyActionOptions,
            ApplyBatchActionOptions,
          } from '@osdk/api';
          import { $osdkMetadata } from '../../OntologyMetadata.js';
          import type { Task as $Imported$com$example$dep$Task } from '@com.example.dep/osdk';

          export namespace setTaskBody {
            // Represents the definition of the parameters for the action
            export type ParamsDefinition = {
              body: {
                multiplicity: false;
                nullable: false;
                type: 'string';
              };
              task: {
                multiplicity: false;
                nullable: false;
                type: ActionMetadata.DataType.Object<$Imported$com$example$dep$Task>;
              };
            };

            export interface Params {
              readonly body: ActionParam.PrimitiveType<'string'>;

              readonly task: ActionParam.ObjectType<$Imported$com$example$dep$Task>;
            }

            // Represents a fqn of the action
            export interface Signatures {
              applyAction<P extends setTaskBody.Params, OP extends ApplyActionOptions>(
                args: P,
                options?: OP,
              ): Promise<ActionReturnTypeForOptions<OP>>;

              batchApplyAction<P extends ReadonlyArray<setTaskBody.Params>, OP extends ApplyBatchActionOptions>(
                args: P,
                options?: OP,
              ): Promise<ActionReturnTypeForOptions<OP>>;
            }
          }

          /**
           * @param {ActionParam.PrimitiveType<"string">} body
           * @param {ActionParam.ObjectType<$Imported$com$example$dep$Task>} task
           */
          export interface setTaskBody extends ActionDefinition<setTaskBody.Signatures> {
            __DefinitionMetadata?: {
              apiName: 'setTaskBody';
              modifiedEntities: {
                'com.example.dep.Task': {
                  created: false;
                  modified: true;
                };
              };
              parameters: setTaskBody.ParamsDefinition;
              rid: 'ri.a.b.c.d';
              status: 'ACTIVE';
              type: 'action';

              signatures: setTaskBody.Signatures;
            };
            apiName: 'setTaskBody';
            type: 'action';
            osdkMetadata: typeof $osdkMetadata;
          }

          export const setTaskBody: setTaskBody = {
            apiName: 'setTaskBody',
            type: 'action',
            osdkMetadata: $osdkMetadata,
          };
          "
        `);
    });
  });

  it("can generate an sdk package that is entirely a library", async () => {
    await expect(
      generateClientSdkVersionTwoPointZero(
        referencedOntology,
        "",
        helper.minimalFiles,
        BASE_PATH,
        "module",
      ),
    ).resolves.toMatchInlineSnapshot(`undefined`);

    expect(tweakedFilesForSnapshotConsistency(helper.getFiles()))
      .toMatchInlineSnapshot(`
        {
          "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = 'PLACEHOLDER';
        export const $osdkMetadata = { extraUserAgent: '' };

        export const $ontologyRid = 'ri.ontology.main.ontology.dep';
        ",
          "/foo/index.ts": "export {} from './ontology/actions.js';
        export * as $Actions from './ontology/actions.js';
        export { SomeInterface } from './ontology/interfaces.js';
        export * as $Interfaces from './ontology/interfaces.js';
        export { Task } from './ontology/objects.js';
        export * as $Objects from './ontology/objects.js';
        export {} from './ontology/queries.js';
        export * as $Queries from './ontology/queries.js';
        export { $ontologyRid } from './OntologyMetadata.js';
        ",
          "/foo/ontology/actions.ts": "export {};
        ",
          "/foo/ontology/interfaces.ts": "export { SomeInterface } from './interfaces/SomeInterface.js';
        ",
          "/foo/ontology/interfaces/SomeInterface.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        import type {
          InterfaceDefinition as $InterfaceDefinition,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          PropertyValueWireToClient as $PropType,
        } from '@osdk/api';

        export type OsdkObjectLinks$SomeInterface = {};

        export namespace SomeInterface {
          export type PropertyKeys = 'spt';

          export interface Props {
            readonly spt: $PropType['string'] | undefined;
          }
          export type StrictProps = Props;

          export interface ObjectSet extends $ObjectSet<SomeInterface, SomeInterface.ObjectSet> {}

          export type OsdkInstance<
            OPTIONS extends never | '$rid' = never,
            K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
          > = $Osdk.Instance<SomeInterface, OPTIONS, K>;

          /** @deprecated use OsdkInstance */
          export type OsdkObject<
            OPTIONS extends never | '$rid' = never,
            K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
          > = OsdkInstance<OPTIONS, K>;
        }

        export interface SomeInterface extends $InterfaceDefinition {
          osdkMetadata: typeof $osdkMetadata;
          type: 'interface';
          apiName: 'com.example.dep.SomeInterface';
          __DefinitionMetadata?: {
            objectSet: SomeInterface.ObjectSet;
            props: SomeInterface.Props;
            linksType: OsdkObjectLinks$SomeInterface;
            strictProps: SomeInterface.StrictProps;
            apiName: 'com.example.dep.SomeInterface';
            displayName: 'Sum Interface';
            implements: [];
            links: {};
            properties: {
              /**
               *   display name: 'Some Property'
               */
              spt: $PropertyDef<'string', 'nullable', 'single'>;
            };
            rid: 'idk2';
            type: 'interface';
          };
        }

        export const SomeInterface: SomeInterface = {
          type: 'interface',
          apiName: 'com.example.dep.SomeInterface',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/objects.ts": "export { Task } from './objects/Task.js';
        ",
          "/foo/ontology/objects/Task.ts": "import type { PropertyDef as $PropertyDef } from '@osdk/api';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import type {
          PropertyKeys as $PropertyKeys,
          ObjectTypeDefinition as $ObjectTypeDefinition,
          ObjectMetadata as $ObjectMetadata,
        } from '@osdk/api';
        import type {
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          PropertyValueWireToClient as $PropType,
          SingleLinkAccessor as $SingleLinkAccessor,
        } from '@osdk/api';

        export namespace Task {
          export type PropertyKeys = 'taskId' | 'body';

          export type Links = {};

          export interface Props {
            readonly body: $PropType['string'] | undefined;
            readonly taskId: $PropType['string'];
          }
          export type StrictProps = Props;

          export interface ObjectSet extends $ObjectSet<Task, Task.ObjectSet> {}

          export type OsdkInstance<
            OPTIONS extends never | '$rid' = never,
            K extends keyof Task.Props = keyof Task.Props,
          > = $Osdk.Instance<Task, OPTIONS, K>;

          /** @deprecated use OsdkInstance */
          export type OsdkObject<
            OPTIONS extends never | '$rid' = never,
            K extends keyof Task.Props = keyof Task.Props,
          > = OsdkInstance<OPTIONS, K>;
        }

        export interface Task extends $ObjectTypeDefinition {
          osdkMetadata: typeof $osdkMetadata;
          type: 'object';
          apiName: 'com.example.dep.Task';
          __DefinitionMetadata?: {
            objectSet: Task.ObjectSet;
            props: Task.Props;
            linksType: Task.Links;
            strictProps: Task.StrictProps;
            apiName: 'com.example.dep.Task';
            displayName: 'Task';
            icon: {
              type: 'blueprint';
              color: 'blue';
              name: 'document';
            };
            implements: [];
            interfaceMap: {};
            inverseInterfaceMap: {};
            links: {};
            pluralDisplayName: 'Tasks';
            primaryKeyApiName: 'taskId';
            primaryKeyType: 'string';
            properties: {
              /**
               * (no ontology metadata)
               */
              body: $PropertyDef<'string', 'nullable', 'single'>;
              /**
               * (no ontology metadata)
               */
              taskId: $PropertyDef<'string', 'non-nullable', 'single'>;
            };
            rid: 'ridForTask';
            status: 'ACTIVE';
            titleProperty: 'taskId';
            type: 'object';
          };
        }

        export const Task: Task = {
          type: 'object',
          apiName: 'com.example.dep.Task',
          osdkMetadata: $osdkMetadata,
        };
        ",
          "/foo/ontology/queries.ts": "export {};
        ",
        }
      `);
  });
});

function tweakedFilesForSnapshotConsistency(
  files: {
    [k: string]: string;
  },
) {
  const ret = { ...files };

  ret["/foo/OntologyMetadata.ts"] = ret["/foo/OntologyMetadata.ts"].replace(
    /export type \$ExpectedClientVersion = '.*?';/,
    `export type $ExpectedClientVersion = 'PLACEHOLDER';`,
  );

  return ret;
}
