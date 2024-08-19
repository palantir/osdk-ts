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

import type { ActionParameterType, QueryDataType } from "@osdk/gateway/types";
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
  interfaceTypes: {},
  objectTypes: {
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
  },
  queryTypes: {},
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

    expect(helper.getFiles()).toMatchInlineSnapshot(`
      {
        "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = '0.21.0';
      export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/0.0.0 osdk-cli/0.0.0' };

      export const $ontologyRid = 'ridHere';
      ",
        "/foo/index.ts": "export * from './ontology/actions';
      export * from './ontology/interfaces';
      export * from './ontology/objects';
      export * from './ontology/queries';
      export { $ontologyRid } from './OntologyMetadata';
      ",
        "/foo/ontology/actions.ts": "export { deleteTodos } from './actions/deleteTodos';
      export type { ActionParams$deleteTodos } from './actions/deleteTodos';
      export { markTodoCompleted } from './actions/markTodoCompleted';
      export type { ActionParams$markTodoCompleted } from './actions/markTodoCompleted';
      ",
        "/foo/ontology/actions/deleteTodos.ts": "import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
      import type {
        ActionParam,
        ActionReturnTypeForOptions,
        ApplyActionOptions,
        ApplyBatchActionOptions,
      } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Todo } from '../objects/Todo';

      // Represents the definition of the parameters for the action
      export type ActionDef$deleteTodos$Params = {
        object: {
          description: 'Todo(s) to be deleted';
          multiplicity: true;
          nullable: true;
          type: ObjectActionDataType<'Todo', Todo>;
        };
      };

      /**
       * An action which takes in an array of objects
       */
      export interface ActionParams$deleteTodos {
        /**
         * Todo(s) to be deleted
         */
        readonly object?: ReadonlyArray<ActionParam.ObjectType<Todo>>;
      }

      /**
       * @deprecated Use \`ActionParams$deleteTodos\`
       */
      export type deleteTodos$Params = ActionParams$deleteTodos | ReadonlyArray<ActionParams$deleteTodos>;

      // Represents a fqn of the action
      export interface deleteTodos {
        /**
         * An action which takes in an array of objects
         */
        <
          P extends ActionParams$deleteTodos | ReadonlyArray<ActionParams$deleteTodos>,
          OP extends P extends ReadonlyArray<ActionParams$deleteTodos> ? ApplyBatchActionOptions : ApplyActionOptions,
        >(
          args: P,
          options?: OP,
        ): Promise<ActionReturnTypeForOptions<OP>>;
      }

      // Represents the definition of the action
      export interface ActionDef$deleteTodos
        extends ActionDefinition<'deleteTodos', 'Todo', deleteTodos>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'deleteTodos';
        description: 'An action which takes in an array of objects';
        modifiedEntities: {};
        type: 'action';
        parameters: ActionDef$deleteTodos$Params;
        osdkMetadata: typeof $osdkMetadata;
      }

      export const deleteTodos: ActionDef$deleteTodos = {
        apiName: 'deleteTodos',
        description: 'An action which takes in an array of objects',
        modifiedEntities: {},
        parameters: {
          object: {
            multiplicity: true,
            type: {
              type: 'object',
              object: 'Todo',
            },
            nullable: true,
            description: 'Todo(s) to be deleted',
          },
        },
        type: 'action',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/actions/markTodoCompleted.ts": "import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
      import type {
        ActionParam,
        ActionReturnTypeForOptions,
        ApplyActionOptions,
        ApplyBatchActionOptions,
      } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Todo } from '../objects/Todo';

      // Represents the definition of the parameters for the action
      export type ActionDef$markTodoCompleted$Params = {
        object: {
          description: 'A Todo to mark completed';
          multiplicity: false;
          nullable: true;
          type: ObjectActionDataType<'Todo', Todo>;
        };
      };

      /**
       * An action which takes different types of parameters
       */
      export interface ActionParams$markTodoCompleted {
        /**
         * A Todo to mark completed
         */
        readonly object?: ActionParam.ObjectType<Todo>;
      }

      /**
       * @deprecated Use \`ActionParams$markTodoCompleted\`
       */
      export type markTodoCompleted$Params = ActionParams$markTodoCompleted | ReadonlyArray<ActionParams$markTodoCompleted>;

      // Represents a fqn of the action
      export interface markTodoCompleted {
        /**
         * An action which takes different types of parameters
         */
        <
          P extends ActionParams$markTodoCompleted | ReadonlyArray<ActionParams$markTodoCompleted>,
          OP extends P extends ReadonlyArray<ActionParams$markTodoCompleted> ? ApplyBatchActionOptions : ApplyActionOptions,
        >(
          args: P,
          options?: OP,
        ): Promise<ActionReturnTypeForOptions<OP>>;
      }

      // Represents the definition of the action
      export interface ActionDef$markTodoCompleted
        extends ActionDefinition<'markTodoCompleted', 'Todo', markTodoCompleted>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'markTodoCompleted';
        description: 'An action which takes different types of parameters';
        modifiedEntities: { Todo: { created: false; modified: true } };
        type: 'action';
        parameters: ActionDef$markTodoCompleted$Params;
        osdkMetadata: typeof $osdkMetadata;
      }

      export const markTodoCompleted: ActionDef$markTodoCompleted = {
        apiName: 'markTodoCompleted',
        description: 'An action which takes different types of parameters',
        modifiedEntities: {
          Todo: {
            created: false,
            modified: true,
          },
        },
        parameters: {
          object: {
            multiplicity: false,
            type: {
              type: 'object',
              object: 'Todo',
            },
            nullable: true,
            description: 'A Todo to mark completed',
          },
        },
        type: 'action',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/interfaces.ts": "export * from './interfaces/SomeInterface';
      ",
        "/foo/ontology/interfaces/SomeInterface.ts": "import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';

      export interface SomeInterface
        extends InterfaceDefinition<'SomeInterface', SomeInterface>,
          VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        description: 'Some interface';
        displayName: 'Sum Interface';
        implements: [];
        links: {};
        properties: {
          /**
           *   display name: 'Sum Property',
           *   description: Some property
           */
          SomeProperty: PropertyDef<'string', 'nullable', 'single'>;
        };
      }

      export const SomeInterface: SomeInterface = {
        osdkMetadata: $osdkMetadata,
        apiName: 'SomeInterface',
        description: 'Some interface',
        displayName: 'Sum Interface',
        implements: [],
        links: {},
        properties: {
          SomeProperty: {
            displayName: 'Sum Property',
            multiplicity: false,
            description: 'Some property',
            type: 'string',
            nullable: true,
          },
        },
        type: 'interface',
      };
      ",
        "/foo/ontology/objects.ts": "export * from './objects/Person';
      export * from './objects/Todo';
      ",
        "/foo/ontology/objects/Person.ts": "import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';

      import type { Todo } from './Todo';

      export interface Person extends ObjectTypeDefinition<'Person', Person>, VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        description: 'A person';
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        inverseSpts: {};
        links: {
          Todos: ObjectTypeLinkDefinition<Todo, true>;
        };
        primaryKeyApiName: 'email';
        primaryKeyType: 'string';
        properties: {
          /**
           * (no ontology metadata)
           */
          email: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        spts: {};
      }

      export const Person: Person = {
        osdkMetadata: $osdkMetadata,
        apiName: 'Person',
        description: 'A person',
        implements: [],
        interfaceMap: {},
        inverseInterfaceMap: {},
        inverseSpts: {},
        links: {
          Todos: {
            multiplicity: true,
            targetType: 'Todo',
          },
        },
        primaryKeyApiName: 'email',
        primaryKeyType: 'string',
        properties: {
          email: {
            multiplicity: false,
            type: 'string',
            nullable: false,
          },
        },
        spts: {},
        type: 'object',
      };
      ",
        "/foo/ontology/objects/Todo.ts": "import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';

      import type { Person } from './Person';

      export interface Todo extends ObjectTypeDefinition<'Todo', Todo>, VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        description: 'Its a todo item.';
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
        inverseSpts: {};
        links: {
          Assignee: ObjectTypeLinkDefinition<Person, false>;
        };
        primaryKeyApiName: 'id';
        primaryKeyType: 'integer';
        properties: {
          /**
           *   display name: 'Body',
           *   description: The text of the todo
           */
          body: PropertyDef<'string', 'nullable', 'single'>;
          /**
           * (no ontology metadata)
           */
          complete: PropertyDef<'boolean', 'nullable', 'single'>;
          /**
           * (no ontology metadata)
           */
          id: PropertyDef<'integer', 'non-nullable', 'single'>;
        };
        spts: {};
      }

      export const Todo: Todo = {
        osdkMetadata: $osdkMetadata,
        apiName: 'Todo',
        description: 'Its a todo item.',
        implements: ['SomeInterface'],
        interfaceMap: {
          SomeInterface: {
            SomeProperty: 'body',
          },
        },
        inverseInterfaceMap: {
          SomeInterface: {
            body: 'SomeProperty',
          },
        },
        inverseSpts: {},
        links: {
          Assignee: {
            multiplicity: false,
            targetType: 'Person',
          },
        },
        primaryKeyApiName: 'id',
        primaryKeyType: 'integer',
        properties: {
          id: {
            multiplicity: false,
            type: 'integer',
            nullable: false,
          },
          body: {
            displayName: 'Body',
            multiplicity: false,
            description: 'The text of the todo',
            type: 'string',
            nullable: true,
          },
          complete: {
            multiplicity: false,
            type: 'boolean',
            nullable: true,
          },
        },
        spts: {},
        type: 'object',
      };
      ",
        "/foo/ontology/queries.ts": "export * from './queries/getCount';
      export * from './queries/returnsTodo';
      ",
        "/foo/ontology/queries/getCount.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';

      export interface getCount {
        (query: QueryParams$getCount): Promise<QueryResult.PrimitiveType<'integer'>>;
      }

      export interface QueryParams$getCount {
        /**
         * (no ontology metadata)
         */
        readonly completed: QueryParam.PrimitiveType<'boolean'>;
      }

      export interface QueryDef$getCount
        extends QueryDefinition<'getCount', never, getCount>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'getCount';
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
      }

      export const getCount: QueryDef$getCount = {
        apiName: 'getCount',
        type: 'query',
        version: '0',
        parameters: {
          completed: {
            type: 'boolean',
            nullable: false,
          },
        },
        output: {
          nullable: false,
          type: 'integer',
        },
      };
      ",
        "/foo/ontology/queries/returnsTodo.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';

      import { Todo } from '../objects/Todo';

      export interface returnsTodo {
        (query: QueryParams$returnsTodo): Promise<QueryResult.ObjectType<Todo>>;
      }

      export interface QueryParams$returnsTodo {
        /**
         *   description: Random desc so we test jsdoc
         */
        readonly someTodo: QueryParam.ObjectType<Todo>;
      }

      export interface QueryDef$returnsTodo
        extends QueryDefinition<'returnsTodo', 'Todo', returnsTodo>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'returnsTodo';
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
      }

      export const returnsTodo: QueryDef$returnsTodo = {
        apiName: 'returnsTodo',
        type: 'query',
        version: '0',
        parameters: {
          someTodo: {
            description: 'Random desc so we test jsdoc',
            type: 'object',
            object: 'Todo',
            nullable: false,
          },
        },
        output: {
          nullable: false,
          object: 'Todo',
          type: 'object',
        },
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
        "foo.bar",
      ),
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `[Error: Expected { ns:'undefined', shortName: 'Todo'} to be in namespace 'foo.bar' or in a provided package mapping]`,
    );
  });

  it("does not throw an error if a namespace is provided that all top levels use", async () => {
    await expect(
      generateClientSdkVersionTwoPointZero(
        fooBarTodoWireOntology,
        "",
        helper.minimalFiles,
        BASE_PATH,
        "module",
        "foo.bar",
      ),
    ).resolves.toMatchInlineSnapshot(`undefined`);

    expect(helper.getFiles()["/foo/ontology/objects/foo.bar.Todo.ts"])
      .toBeUndefined();

    expect(helper.getFiles()["/foo/ontology/objects/Todo.ts"])
      .not.toBeUndefined();

    expect(helper.getFiles()).toMatchInlineSnapshot(`
      {
        "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = '0.21.0';
      export const $osdkMetadata = { extraUserAgent: '' };
      ",
        "/foo/index.ts": "export * from './ontology/actions.js';
      export * from './ontology/interfaces.js';
      export * from './ontology/objects.js';
      export * from './ontology/queries.js';
      ",
        "/foo/ontology/actions.ts": "export { deleteTodos } from './actions/deleteTodos.js';
      export type { ActionParams$deleteTodos } from './actions/deleteTodos.js';
      export { markTodoCompleted } from './actions/markTodoCompleted.js';
      export type { ActionParams$markTodoCompleted } from './actions/markTodoCompleted.js';
      ",
        "/foo/ontology/actions/deleteTodos.ts": "import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
      import type {
        ActionParam,
        ActionReturnTypeForOptions,
        ApplyActionOptions,
        ApplyBatchActionOptions,
      } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';
      import type { Todo } from '../objects/Todo.js';

      // Represents the definition of the parameters for the action
      export type ActionDef$deleteTodos$Params = {
        object: {
          description: 'Todo(s) to be deleted';
          multiplicity: true;
          nullable: true;
          type: ObjectActionDataType<'foo.bar.Todo', Todo>;
        };
      };

      /**
       * An action which takes in an array of objects
       */
      export interface ActionParams$deleteTodos {
        /**
         * Todo(s) to be deleted
         */
        readonly object?: ReadonlyArray<ActionParam.ObjectType<Todo>>;
      }

      /**
       * @deprecated Use \`ActionParams$deleteTodos\`
       */
      export type deleteTodos$Params = ActionParams$deleteTodos | ReadonlyArray<ActionParams$deleteTodos>;

      // Represents a fqn of the action
      export interface deleteTodos {
        /**
         * An action which takes in an array of objects
         */
        <
          P extends ActionParams$deleteTodos | ReadonlyArray<ActionParams$deleteTodos>,
          OP extends P extends ReadonlyArray<ActionParams$deleteTodos> ? ApplyBatchActionOptions : ApplyActionOptions,
        >(
          args: P,
          options?: OP,
        ): Promise<ActionReturnTypeForOptions<OP>>;
      }

      // Represents the definition of the action
      export interface ActionDef$deleteTodos
        extends ActionDefinition<'deleteTodos', 'foo.bar.Todo', deleteTodos>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'foo.bar.deleteTodos';
        description: 'An action which takes in an array of objects';
        modifiedEntities: {};
        type: 'action';
        parameters: ActionDef$deleteTodos$Params;
        osdkMetadata: typeof $osdkMetadata;
      }

      export const deleteTodos: ActionDef$deleteTodos = {
        apiName: 'foo.bar.deleteTodos',
        description: 'An action which takes in an array of objects',
        modifiedEntities: {},
        parameters: {
          object: {
            multiplicity: true,
            type: {
              type: 'object',
              object: 'foo.bar.Todo',
            },
            nullable: true,
            description: 'Todo(s) to be deleted',
          },
        },
        type: 'action',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/actions/markTodoCompleted.ts": "import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
      import type {
        ActionParam,
        ActionReturnTypeForOptions,
        ApplyActionOptions,
        ApplyBatchActionOptions,
      } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';
      import type { Todo } from '../objects/Todo.js';

      // Represents the definition of the parameters for the action
      export type ActionDef$markTodoCompleted$Params = {
        object: {
          description: 'A Todo to mark completed';
          multiplicity: false;
          nullable: true;
          type: ObjectActionDataType<'foo.bar.Todo', Todo>;
        };
      };

      /**
       * An action which takes different types of parameters
       */
      export interface ActionParams$markTodoCompleted {
        /**
         * A Todo to mark completed
         */
        readonly object?: ActionParam.ObjectType<Todo>;
      }

      /**
       * @deprecated Use \`ActionParams$markTodoCompleted\`
       */
      export type markTodoCompleted$Params = ActionParams$markTodoCompleted | ReadonlyArray<ActionParams$markTodoCompleted>;

      // Represents a fqn of the action
      export interface markTodoCompleted {
        /**
         * An action which takes different types of parameters
         */
        <
          P extends ActionParams$markTodoCompleted | ReadonlyArray<ActionParams$markTodoCompleted>,
          OP extends P extends ReadonlyArray<ActionParams$markTodoCompleted> ? ApplyBatchActionOptions : ApplyActionOptions,
        >(
          args: P,
          options?: OP,
        ): Promise<ActionReturnTypeForOptions<OP>>;
      }

      // Represents the definition of the action
      export interface ActionDef$markTodoCompleted
        extends ActionDefinition<'markTodoCompleted', 'foo.bar.Todo', markTodoCompleted>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'foo.bar.markTodoCompleted';
        description: 'An action which takes different types of parameters';
        modifiedEntities: { 'foo.bar.Todo': { created: false; modified: true } };
        type: 'action';
        parameters: ActionDef$markTodoCompleted$Params;
        osdkMetadata: typeof $osdkMetadata;
      }

      export const markTodoCompleted: ActionDef$markTodoCompleted = {
        apiName: 'foo.bar.markTodoCompleted',
        description: 'An action which takes different types of parameters',
        modifiedEntities: {
          'foo.bar.Todo': {
            created: false,
            modified: true,
          },
        },
        parameters: {
          object: {
            multiplicity: false,
            type: {
              type: 'object',
              object: 'foo.bar.Todo',
            },
            nullable: true,
            description: 'A Todo to mark completed',
          },
        },
        type: 'action',
        osdkMetadata: $osdkMetadata,
      };
      ",
        "/foo/ontology/interfaces.ts": "export * from './interfaces/SomeInterface.js';
      ",
        "/foo/ontology/interfaces/SomeInterface.ts": "import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';

      export interface SomeInterface
        extends InterfaceDefinition<'foo.bar.SomeInterface', SomeInterface>,
          VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        description: 'Some interface';
        displayName: 'Sum Interface';
        implements: [];
        links: {};
        properties: {
          /**
           *   display name: 'Sum Property',
           *   description: Some property
           */
          SomeProperty: PropertyDef<'string', 'nullable', 'single'>;
        };
      }

      export const SomeInterface: SomeInterface = {
        osdkMetadata: $osdkMetadata,
        apiName: 'foo.bar.SomeInterface',
        description: 'Some interface',
        displayName: 'Sum Interface',
        implements: [],
        links: {},
        properties: {
          SomeProperty: {
            displayName: 'Sum Property',
            multiplicity: false,
            description: 'Some property',
            type: 'string',
            nullable: true,
          },
        },
        type: 'interface',
      };
      ",
        "/foo/ontology/objects.ts": "export * from './objects/Person.js';
      export * from './objects/Todo.js';
      ",
        "/foo/ontology/objects/Person.ts": "import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';

      import type { Todo } from './Todo.js';

      export interface Person extends ObjectTypeDefinition<'foo.bar.Person', Person>, VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        description: 'A person';
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        inverseSpts: {};
        links: {
          Todos: ObjectTypeLinkDefinition<Todo, true>;
        };
        primaryKeyApiName: 'email';
        primaryKeyType: 'string';
        properties: {
          /**
           * (no ontology metadata)
           */
          email: PropertyDef<'string', 'non-nullable', 'single'>;
        };
        spts: {};
      }

      export const Person: Person = {
        osdkMetadata: $osdkMetadata,
        apiName: 'foo.bar.Person',
        description: 'A person',
        implements: [],
        interfaceMap: {},
        inverseInterfaceMap: {},
        inverseSpts: {},
        links: {
          Todos: {
            multiplicity: true,
            targetType: 'foo.bar.Todo',
          },
        },
        primaryKeyApiName: 'email',
        primaryKeyType: 'string',
        properties: {
          email: {
            multiplicity: false,
            type: 'string',
            nullable: false,
          },
        },
        spts: {},
        type: 'object',
      };
      ",
        "/foo/ontology/objects/Todo.ts": "import type { ObjectTypeDefinition, ObjectTypeLinkDefinition, PropertyDef, VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
      import { $osdkMetadata } from '../../OntologyMetadata.js';

      import type { Person } from './Person.js';

      export interface Todo extends ObjectTypeDefinition<'foo.bar.Todo', Todo>, VersionBound<$ExpectedClientVersion> {
        osdkMetadata: typeof $osdkMetadata;
        description: 'Its a todo item.';
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
        inverseSpts: {};
        links: {
          Assignee: ObjectTypeLinkDefinition<Person, false>;
        };
        primaryKeyApiName: 'id';
        primaryKeyType: 'integer';
        properties: {
          /**
           *   display name: 'Body',
           *   description: The text of the todo
           */
          body: PropertyDef<'string', 'nullable', 'single'>;
          /**
           * (no ontology metadata)
           */
          complete: PropertyDef<'boolean', 'nullable', 'single'>;
          /**
           * (no ontology metadata)
           */
          id: PropertyDef<'integer', 'non-nullable', 'single'>;
        };
        spts: {};
      }

      export const Todo: Todo = {
        osdkMetadata: $osdkMetadata,
        apiName: 'foo.bar.Todo',
        description: 'Its a todo item.',
        implements: ['foo.bar.SomeInterface'],
        interfaceMap: {
          'foo.bar.SomeInterface': {
            SomeProperty: 'body',
          },
        },
        inverseInterfaceMap: {
          'foo.bar.SomeInterface': {
            body: 'SomeProperty',
          },
        },
        inverseSpts: {},
        links: {
          Assignee: {
            multiplicity: false,
            targetType: 'foo.bar.Person',
          },
        },
        primaryKeyApiName: 'id',
        primaryKeyType: 'integer',
        properties: {
          id: {
            multiplicity: false,
            type: 'integer',
            nullable: false,
          },
          body: {
            displayName: 'Body',
            multiplicity: false,
            description: 'The text of the todo',
            type: 'string',
            nullable: true,
          },
          complete: {
            multiplicity: false,
            type: 'boolean',
            nullable: true,
          },
        },
        spts: {},
        type: 'object',
      };
      ",
        "/foo/ontology/queries.ts": "export * from './queries/getCount.js';
      export * from './queries/returnsTodo.js';
      ",
        "/foo/ontology/queries/getCount.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

      export interface getCount {
        (query: QueryParams$getCount): Promise<QueryResult.PrimitiveType<'integer'>>;
      }

      export interface QueryParams$getCount {
        /**
         * (no ontology metadata)
         */
        readonly completed: QueryParam.PrimitiveType<'boolean'>;
      }

      export interface QueryDef$getCount
        extends QueryDefinition<'foo.bar.getCount', never, getCount>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'foo.bar.getCount';
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
      }

      export const getCount: QueryDef$getCount = {
        apiName: 'foo.bar.getCount',
        type: 'query',
        version: '0',
        parameters: {
          completed: {
            type: 'boolean',
            nullable: false,
          },
        },
        output: {
          nullable: false,
          type: 'integer',
        },
      };
      ",
        "/foo/ontology/queries/returnsTodo.ts": "import type { QueryDefinition, VersionBound } from '@osdk/api';
      import type { QueryParam, QueryResult } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

      import { Todo } from '../objects/Todo.js';

      export interface returnsTodo {
        (query: QueryParams$returnsTodo): Promise<QueryResult.ObjectType<Todo>>;
      }

      export interface QueryParams$returnsTodo {
        /**
         *   description: Random desc so we test jsdoc
         */
        readonly someTodo: QueryParam.ObjectType<Todo>;
      }

      export interface QueryDef$returnsTodo
        extends QueryDefinition<'foo.bar.returnsTodo', 'foo.bar.Todo', returnsTodo>,
          VersionBound<$ExpectedClientVersion> {
        apiName: 'foo.bar.returnsTodo';
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
            __OsdkTargetType?: foo.bar.Todo;
          };
        };
        output: {
          nullable: false;
          object: 'foo.bar.Todo';
          type: 'object';
          __OsdkTargetType?: foo.bar.Todo;
        };
      }

      export const returnsTodo: QueryDef$returnsTodo = {
        apiName: 'foo.bar.returnsTodo',
        type: 'query',
        version: '0',
        parameters: {
          someTodo: {
            description: 'Random desc so we test jsdoc',
            type: 'object',
            object: 'foo.bar.Todo',
            nullable: false,
          },
        },
        output: {
          nullable: false,
          object: 'foo.bar.Todo',
          type: 'object',
        },
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
          "foo.bar",
          new Map(),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/index.ts"]).not.toContain(
        "$ontologyRid",
      );
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

  describe("action depends on foreign object", () => {
    it("stuff", async () => {
      await expect(
        generateClientSdkVersionTwoPointZero(
          referencingOntology,
          "",
          helper.minimalFiles,
          BASE_PATH,
          "module",
          undefined,
          new Map([["com.example.dep", "@com.example.dep/osdk"]]),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/ontology/actions/setTaskBody.ts"])
        .toMatchInlineSnapshot(`
          "import type { Task as $Imported$objectTypes$com$example$dep$Task } from '@com.example.dep/osdk';
          import type { ActionDefinition, ObjectActionDataType, VersionBound } from '@osdk/api';
          import type {
            ActionParam,
            ActionReturnTypeForOptions,
            ApplyActionOptions,
            ApplyBatchActionOptions,
          } from '@osdk/client.api';
          import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
          import { $osdkMetadata } from '../../OntologyMetadata.js';

          // Represents the definition of the parameters for the action
          export type ActionDef$setTaskBody$Params = {
            body: {
              multiplicity: false;
              nullable: false;
              type: 'string';
            };
            task: {
              multiplicity: false;
              nullable: false;
              type: ObjectActionDataType<'com.example.dep.Task', $Imported$objectTypes$com$example$dep$Task>;
            };
          };

          export interface ActionParams$setTaskBody {
            readonly body: ActionParam.PrimitiveType<'string'>;

            readonly task: ActionParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>;
          }

          /**
           * @deprecated Use \`ActionParams$setTaskBody\`
           */
          export type setTaskBody$Params = ActionParams$setTaskBody | ReadonlyArray<ActionParams$setTaskBody>;

          // Represents a fqn of the action
          export interface setTaskBody {
            <
              P extends ActionParams$setTaskBody | ReadonlyArray<ActionParams$setTaskBody>,
              OP extends P extends ReadonlyArray<ActionParams$setTaskBody> ? ApplyBatchActionOptions : ApplyActionOptions,
            >(
              args: P,
              options?: OP,
            ): Promise<ActionReturnTypeForOptions<OP>>;
          }

          // Represents the definition of the action
          export interface ActionDef$setTaskBody
            extends ActionDefinition<'setTaskBody', 'com.example.dep.Task', setTaskBody>,
              VersionBound<$ExpectedClientVersion> {
            apiName: 'setTaskBody';
            modifiedEntities: { 'com.example.dep.Task': { created: false; modified: true } };
            type: 'action';
            parameters: ActionDef$setTaskBody$Params;
            osdkMetadata: typeof $osdkMetadata;
          }

          export const setTaskBody: ActionDef$setTaskBody = {
            apiName: 'setTaskBody',
            modifiedEntities: {
              'com.example.dep.Task': {
                created: false,
                modified: true,
              },
            },
            parameters: {
              task: {
                multiplicity: false,
                type: {
                  type: 'object',
                  object: 'com.example.dep.Task',
                },
                nullable: false,
              },
              body: {
                multiplicity: false,
                type: 'string',
                nullable: false,
              },
            },
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
        undefined,
        new Map([["com.example.dep", "@com.example.dep/osdk"]]),
      ),
    ).resolves.toMatchInlineSnapshot(`undefined`);

    expect(helper.getFiles())
      .toMatchInlineSnapshot(`
        {
          "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = '0.21.0';
        export const $osdkMetadata = { extraUserAgent: '' };

        export const $ontologyRid = 'ri.ontology.main.ontology.dep';
        ",
          "/foo/index.ts": "export * from './ontology/actions.js';
        export * from './ontology/interfaces.js';
        export * from './ontology/objects.js';
        export * from './ontology/queries.js';
        export { $ontologyRid } from './OntologyMetadata.js';
        ",
          "/foo/ontology/actions.ts": "export {};
        ",
          "/foo/ontology/interfaces.ts": "export * from './interfaces/SomeInterface.js';
        ",
          "/foo/ontology/interfaces/SomeInterface.ts": "import type { InterfaceDefinition, PropertyDef, VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export interface SomeInterface
          extends InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface>,
            VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          displayName: 'Sum Interface';
          implements: [];
          links: {};
          properties: {
            /**
             *   display name: 'Some Property'
             */
            spt: PropertyDef<'string', 'nullable', 'single'>;
          };
        }

        export const SomeInterface: SomeInterface = {
          osdkMetadata: $osdkMetadata,
          apiName: 'com.example.dep.SomeInterface',
          displayName: 'Sum Interface',
          implements: [],
          links: {},
          properties: {
            spt: {
              displayName: 'Some Property',
              multiplicity: false,
              type: 'string',
              nullable: true,
            },
          },
          type: 'interface',
        };
        ",
          "/foo/ontology/objects.ts": "export * from './objects/Task.js';
        ",
          "/foo/ontology/objects/Task.ts": "import type { ObjectTypeDefinition, PropertyDef, VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export interface Task
          extends ObjectTypeDefinition<'com.example.dep.Task', $external$com$example.dep.Task>,
            VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          implements: [];
          interfaceMap: {};
          inverseInterfaceMap: {};
          inverseSpts: {};
          links: {};
          primaryKeyApiName: 'taskId';
          primaryKeyType: 'string';
          properties: {
            /**
             * (no ontology metadata)
             */
            body: PropertyDef<'string', 'nullable', 'single'>;
            /**
             * (no ontology metadata)
             */
            taskId: PropertyDef<'string', 'non-nullable', 'single'>;
          };
          spts: {};
        }

        export const Task: Task = {
          osdkMetadata: $osdkMetadata,
          apiName: 'com.example.dep.Task',
          implements: [],
          interfaceMap: {},
          inverseInterfaceMap: {},
          inverseSpts: {},
          links: {},
          primaryKeyApiName: 'taskId',
          primaryKeyType: 'string',
          properties: {
            taskId: {
              multiplicity: false,
              type: 'string',
              nullable: false,
            },
            body: {
              multiplicity: false,
              type: 'string',
              nullable: true,
            },
          },
          spts: {},
          type: 'object',
        };
        ",
          "/foo/ontology/queries.ts": "export {};
        ",
        }
      `);
  });
});
