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

import type { ActionTypeV2, ObjectTypeFullMetadata } from "@osdk/gateway/types";
import { mkdir, readdir, rmdir, writeFile } from "fs/promises";
import * as immer from "immer";
import { describe, expect, it, test, vi } from "vitest";
import { compileThis } from "../util/test/compileThis.js";
import { createMockMinimalFiles } from "../util/test/createMockMinimalFiles.js";
import { TodoWireOntology } from "../util/test/TodoWireOntology.js";
import type { WireOntologyDefinition } from "../WireOntologyDefinition.js";
import { generateClientSdkVersionTwoPointZero } from "./generateClientSdkVersionTwoPointZero.js";

function maybeChange<T extends Record<K, any>, K extends keyof T>(
  input: T,
  key: K,
  oldValue: string,
  newValue: string,
) {
  return immer.produce(input, (draft) => {
    if ((draft as any)[key] === oldValue) {
      (draft as any)[key] = newValue;
    }
  });
}

function changeNames(ontology: WireOntologyDefinition, newNames: {
  object: Record<string, string>;
}) {
  const newObjectNamePairs = Object.entries(newNames.object);

  return immer.produce(ontology, (draft) => {
    for (const [oldName, newName] of newObjectNamePairs) {
      for (const k of Object.keys(draft.objectTypes)) {
        draft.objectTypes[k] = changeApiNameInObject(
          draft.objectTypes[k],
          oldName,
          newName,
        );

        if (k === oldName) {
          draft.objectTypes[newName] = draft.objectTypes[k];
          delete draft.objectTypes[k];
        }
      }

      for (const k of Object.keys(draft.actionTypes)) {
        const action: immer.WritableDraft<ActionTypeV2> = draft.actionTypes[k];
        for (const op of action.operations) {
          switch (op.type) {
            case "deleteObject":
            case "modifyObject":
            case "createObject":
              if (op.objectTypeApiName === oldName) {
                op.objectTypeApiName = newName;
              }
          }
        }
        for (const { dataType } of Object.values(action.parameters)) {
          if (
            dataType.type === "object" || dataType.type === "objectSet"
          ) {
            if (dataType.objectTypeApiName === oldName) {
              dataType.objectTypeApiName = newName;
            }
            if (dataType.objectApiName === oldName) {
              dataType.objectApiName = newName;
            }
          } else if (
            dataType.type === "array" && (dataType.subType.type === "object"
              || dataType.subType.type === "objectSet")
          ) {
            if (dataType.subType.objectApiName === oldName) {
              dataType.subType.objectApiName = newName;
            }
            if (dataType.subType.objectTypeApiName === oldName) {
              dataType.subType.objectTypeApiName = newName;
            }
          }
        }
      }
    }
  });
}

function changeApiNameInObject<T extends ObjectTypeFullMetadata>(
  input: T,
  oldApiName: string,
  newApiName: string,
): T {
  return immer.produce(input, (draft) => {
    draft.objectType = maybeChange(
      draft.objectType,
      "apiName",
      oldApiName,
      newApiName,
    );
    for (const d of draft.linkTypes) {
    }
    draft.linkTypes = draft.linkTypes.map(l =>
      maybeChange(l, "objectTypeApiName", oldApiName, newApiName)
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

    const sanitizedOntology = changeNames(
      {
        ...TodoWireOntology,
        actionTypes: {
          "foo.bar.markTodoCompleted": {
            ...TodoWireOntology.actionTypes.markTodoCompleted,
            apiName: "foo.bar.markTodoCompleted",
          },
        },
        interfaceTypes: {},
        queryTypes: {
          "foo.bar.getCount": {
            ...TodoWireOntology.queryTypes.getCount,
            apiName: "foo.bar.getCount",
          },
        },
        sharedPropertyTypes: {},
      },
      { object: { "Todo": "foo.bar.Todo", "Person": "foo.bar.Person" } },
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
      import * as Actions from './ontology/actions/index.js';
      import * as Objects from './ontology/objects.js';
      import * as Queries from './ontology/queries/index.js';
      import { OntologyMetadata } from './OntologyMetadata.js';

      export interface Ontology extends OntologyDefinition<'foo.bar.Person' | 'foo.bar.Todo'> {
        metadata: OntologyMetadata;
        objects: {
          Person: Objects.Person;
          Todo: Objects.Todo;
        };
        actions: {
          markTodoCompleted: typeof Actions.markTodoCompleted;
        };
        queries: {
          getCount: typeof Queries.getCount;
        };
        interfaces: {};
      }

      export const Ontology: Ontology = {
        metadata: OntologyMetadata,
        objects: {
          Person: Objects.Person,
          Todo: Objects.Todo,
        },
        actions: {
          markTodoCompleted: Actions.markTodoCompleted,
        },
        queries: {
          getCount: Queries.getCount,
        },
        interfaces: {},
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
      export * from './ontology/actions/index.js';
      export * from './ontology/interfaces.js';
      export * from './ontology/objects.js';
      export * from './ontology/queries/index.js';
      ",
        "/foo/ontology/actions/index.ts": "export { markTodoCompleted } from './markTodoCompleted.js';
      export type { ActionParams$markTodoCompleted } from './markTodoCompleted.js';
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
        "/foo/ontology/interfaces.ts": "export {};
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
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
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
        implements: [],
        interfaceMap: {},
        inverseInterfaceMap: {},
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
        "/foo/ontology/queries/index.ts": "export * from './getCount.js';
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
