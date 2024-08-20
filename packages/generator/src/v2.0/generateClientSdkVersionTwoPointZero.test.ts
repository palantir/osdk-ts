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
import { describe, expect, it, test, vi } from "vitest";
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

describe("generator", () => {
  test("should be able to generate a project", async () => {
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    await generateClientSdkVersionTwoPointZero(
      TodoWireOntology,
      "typescript-sdk/0.0.0 osdk-cli/0.0.0",
      helper.minimalFiles,
      BASE_PATH,
    );

    const files = helper.getFiles();

    expect(files).toMatchObject({
      [`${BASE_PATH}/index.ts`]: expect.anything(),
      [`${BASE_PATH}/Ontology.ts`]: expect.anything(),
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
        "/foo/Ontology.ts": "import type { OntologyDefinition } from '@osdk/api';
      import * as Actions from './ontology/actions';
      import * as Interfaces from './ontology/interfaces';
      import * as Objects from './ontology/objects';
      import * as Queries from './ontology/queries';
      import { OntologyMetadata } from './OntologyMetadata';

      export interface Ontology extends OntologyDefinition<'Person' | 'Todo'> {
        metadata: OntologyMetadata;
        objects: {
          Person: Objects.Person;
          Todo: Objects.Todo;
        };
        actions: {
          deleteTodos: typeof Actions.deleteTodos;
          markTodoCompleted: typeof Actions.markTodoCompleted;
        };
        queries: {
          getCount: typeof Queries.getCount;
          returnsTodo: typeof Queries.returnsTodo;
        };
        interfaces: {
          SomeInterface: Interfaces.SomeInterface;
        };
      }

      export const Ontology: Ontology = {
        metadata: OntologyMetadata,
        objects: {
          Person: Objects.Person,
          Todo: Objects.Todo,
        },
        actions: {
          deleteTodos: Actions.deleteTodos,
          markTodoCompleted: Actions.markTodoCompleted,
        },
        queries: {
          getCount: Queries.getCount,
          returnsTodo: Queries.returnsTodo,
        },
        interfaces: {
          SomeInterface: Interfaces.SomeInterface,
        },
      };
      ",
        "/foo/OntologyMetadata.ts": "import { OntologyMetadata as OM } from '@osdk/api';

      export type $ExpectedClientVersion = '0.21.0';
      export const $osdkMetadata = { extraUserAgent: 'typescript-sdk/0.0.0 osdk-cli/0.0.0' };

      export interface OntologyMetadata extends OM<$ExpectedClientVersion> {}

      export const OntologyMetadata: OntologyMetadata = {
        expectsClientVersion: '0.21.0',
        ontologyRid: 'ridHere',
        ontologyApiName: 'OntologyApiName',
        userAgent: 'typescript-sdk/0.0.0 osdk-cli/0.0.0',
      };
      ",
        "/foo/index.ts": "export { Ontology } from './Ontology';
      export * from './ontology/actions';
      export * from './ontology/interfaces';
      export * from './ontology/objects';
      export * from './ontology/queries';
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
        "/foo/ontology/queries/getCount.ts": "import type { VersionBound } from '@osdk/api';
      import { QueryDefinition } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';

      export interface getCount extends QueryDefinition<'getCount', never>, VersionBound<$ExpectedClientVersion> {
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

      export const getCount: getCount = {
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
        "/foo/ontology/queries/returnsTodo.ts": "import type { VersionBound } from '@osdk/api';
      import { QueryDefinition } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';

      import { Todo } from '../objects/Todo';

      export interface returnsTodo extends QueryDefinition<'returnsTodo', 'Todo'>, VersionBound<$ExpectedClientVersion> {
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

      export const returnsTodo: returnsTodo = {
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
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

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
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

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
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";

    const somePropertySpt = {
      apiName: "foo.bar.SomeProperty",
      description: "Some property",
      displayName: "Sum Property",
      dataType: {
        type: "string",
      },
      rid: "idk2",
    } as const;

    const sanitizedOntology = changeNames(
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

    await expect(
      generateClientSdkVersionTwoPointZero(
        sanitizedOntology,
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
        "/foo/Ontology.ts": "import type { OntologyDefinition } from '@osdk/api';
      import * as Actions from './ontology/actions.js';
      import * as Interfaces from './ontology/interfaces.js';
      import * as Objects from './ontology/objects.js';
      import * as Queries from './ontology/queries.js';
      import { OntologyMetadata } from './OntologyMetadata.js';

      export interface Ontology extends OntologyDefinition<'foo.bar.Person' | 'foo.bar.Todo'> {
        metadata: OntologyMetadata;
        objects: {
          Person: Objects.Person;
          Todo: Objects.Todo;
        };
        actions: {
          deleteTodos: typeof Actions.deleteTodos;
          markTodoCompleted: typeof Actions.markTodoCompleted;
        };
        queries: {
          getCount: typeof Queries.getCount;
          returnsTodo: typeof Queries.returnsTodo;
        };
        interfaces: {
          SomeInterface: Interfaces.SomeInterface;
        };
      }

      export const Ontology: Ontology = {
        metadata: OntologyMetadata,
        objects: {
          Person: Objects.Person,
          Todo: Objects.Todo,
        },
        actions: {
          deleteTodos: Actions.deleteTodos,
          markTodoCompleted: Actions.markTodoCompleted,
        },
        queries: {
          getCount: Queries.getCount,
          returnsTodo: Queries.returnsTodo,
        },
        interfaces: {
          SomeInterface: Interfaces.SomeInterface,
        },
      };
      ",
        "/foo/OntologyMetadata.ts": "import { OntologyMetadata as OM } from '@osdk/api';

      export type $ExpectedClientVersion = '0.21.0';
      export const $osdkMetadata = { extraUserAgent: '' };

      export interface OntologyMetadata extends OM<$ExpectedClientVersion> {}

      export const OntologyMetadata: OntologyMetadata = {
        expectsClientVersion: '0.21.0',
        ontologyRid: 'ridHere',
        ontologyApiName: 'OntologyApiName',
        userAgent: '',
      };
      ",
        "/foo/index.ts": "export { Ontology } from './Ontology.js';
      export * from './ontology/actions.js';
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
        "/foo/ontology/objects.ts": "export * from './objects/foo.bar.Person.js';
      export * from './objects/foo.bar.Todo.js';
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
        "/foo/ontology/queries/getCount.ts": "import type { VersionBound } from '@osdk/api';
      import { QueryDefinition } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

      export interface getCount extends QueryDefinition<'foo.bar.getCount', never>, VersionBound<$ExpectedClientVersion> {
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

      export const getCount: getCount = {
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
        "/foo/ontology/queries/returnsTodo.ts": "import type { VersionBound } from '@osdk/api';
      import { QueryDefinition } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

      export interface returnsTodo
        extends QueryDefinition<'foo.bar.returnsTodo', 'foo.bar.Todo'>,
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

      export const returnsTodo: returnsTodo = {
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
    const helper = createMockMinimalFiles();
    const BASE_PATH = "/foo";
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
});
