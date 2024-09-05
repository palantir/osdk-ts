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
    "UsesForeignSpt": {
      implementsInterfaces: [],
      implementsInterfaces2: {},
      linkTypes: [],
      objectType: {
        apiName: "UsesForeignSpt",
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
        "/foo/index.ts": "export * from './ontology/actions';
      export * from './ontology/interfaces';
      export * from './ontology/objects';
      export * from './ontology/queries';
      export { $ontologyRid } from './OntologyMetadata';
      ",
        "/foo/ontology/actions.ts": "export { deleteTodos } from './actions/deleteTodos';
      export { markTodoCompleted } from './actions/markTodoCompleted';
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

      export namespace deleteTodos {
        // Represents the definition of the parameters for the action
        export type ParamsDefinition = {
          object: {
            description: 'Todo(s) to be deleted';
            multiplicity: true;
            nullable: true;
            type: ObjectActionDataType<'Todo', Todo.Definition>;
          };
        };

        /**
         * An action which takes in an array of objects
         */
        export interface Params {
          /**
           * Todo(s) to be deleted
           */
          readonly object?: ReadonlyArray<ActionParam.ObjectType<Todo.Definition>>;
        }
        /** @deprecated **/
        export type Parameters = Params;

        // Represents the definition of the action
        export interface Definition
          extends ActionDefinition<'deleteTodos', 'Todo', deleteTodos.Signatures>,
            VersionBound<$ExpectedClientVersion> {
          apiName: 'deleteTodos';
          description: 'An action which takes in an array of objects';
          modifiedEntities: {};
          type: 'action';
          parameters: deleteTodos.ParamsDefinition;
          osdkMetadata: typeof $osdkMetadata;
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
       * @deprecated Use \`deleteTodos.Params\`
       */
      export type deleteTodos$Params = deleteTodos.Params | ReadonlyArray<deleteTodos.Params>;

      /** @deprecated Use \`deleteTodos.Definition\` **/
      export type deleteTodos = deleteTodos.Signatures;

      export const deleteTodos: deleteTodos.Definition = {
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

      export namespace markTodoCompleted {
        // Represents the definition of the parameters for the action
        export type ParamsDefinition = {
          object: {
            description: 'A Todo to mark completed';
            multiplicity: false;
            nullable: true;
            type: ObjectActionDataType<'Todo', Todo.Definition>;
          };
        };

        /**
         * An action which takes different types of parameters
         */
        export interface Params {
          /**
           * A Todo to mark completed
           */
          readonly object?: ActionParam.ObjectType<Todo.Definition>;
        }
        /** @deprecated **/
        export type Parameters = Params;

        // Represents the definition of the action
        export interface Definition
          extends ActionDefinition<'markTodoCompleted', 'Todo', markTodoCompleted.Signatures>,
            VersionBound<$ExpectedClientVersion> {
          apiName: 'markTodoCompleted';
          description: 'An action which takes different types of parameters';
          modifiedEntities: { Todo: { created: false; modified: true } };
          type: 'action';
          parameters: markTodoCompleted.ParamsDefinition;
          osdkMetadata: typeof $osdkMetadata;
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
       * @deprecated Use \`markTodoCompleted.Params\`
       */
      export type markTodoCompleted$Params = markTodoCompleted.Params | ReadonlyArray<markTodoCompleted.Params>;

      /** @deprecated Use \`markTodoCompleted.Definition\` **/
      export type markTodoCompleted = markTodoCompleted.Signatures;

      export const markTodoCompleted: markTodoCompleted.Definition = {
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
        "/foo/ontology/interfaces/SomeInterface.ts": "import type { PropertyDef as $PropertyDef, VersionBound as $VersionBound } from '@osdk/api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';

      import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
      import type {
        AggregateOpts as $AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults as $AggregationsResults,
        Augments as $Augments,
        ConvertProps as $ConvertProps,
        DefaultToFalse as $DefaultToFalse,
        FetchPageArgs as $FetchPageArgs,
        LinkedType as $LinkedType,
        LinkNames as $LinkNames,
        NullabilityAdherence as $NullabilityAdherence,
        NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        PageResult as $PageResult,
        PropertyValueWireToClient as $PropType,
        Result as $Result,
        ValidToFrom as $ValidToFrom,
      } from '@osdk/client.api';

      export type OsdkObjectLinks$SomeInterface = never;

      export namespace SomeInterface {
        export type PropertyKeys = 'SomeProperty';

        export interface Props {
          readonly SomeProperty: $PropType['string'] | undefined;
        }
        export interface StrictProps {
          readonly SomeProperty: $PropType['string'] | undefined;
        }

        export interface ObjectSet extends $ObjectSet<SomeInterface.Definition, SomeInterface.ObjectSet> {
          readonly aggregate: <const AO extends $AggregateOpts<SomeInterface.Definition>>(
            req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<SomeInterface.Definition, AO>,
          ) => Promise<$AggregationsResults<SomeInterface.Definition, AO>>;

          readonly pivotTo: <const L extends $LinkNames<SomeInterface.Definition>>(
            type: L,
          ) => $LinkedType<SomeInterface.Definition, L>['objectSet'];

          readonly fetchPage: <
            const L extends SomeInterface.PropertyKeys,
            const R extends boolean,
            const A extends $Augments,
            const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
          ) => Promise<
            $PageResult<
              SomeInterface.OsdkObject<
                (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                L
              >
            >
          >;

          readonly fetchPageWithErrors: <
            const L extends SomeInterface.PropertyKeys,
            const R extends boolean,
            const A extends $Augments,
            const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
          ) => Promise<
            $Result<
              $PageResult<
                SomeInterface.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >
          >;

          readonly asyncIter: () => AsyncIterableIterator<SomeInterface.OsdkObject>;
        }

        export interface Definition
          extends $InterfaceDefinition<'SomeInterface', SomeInterface.Definition>,
            $VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          objectSet: SomeInterface.ObjectSet;
          props: SomeInterface.Props;
          strictProps: SomeInterface.StrictProps;
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
        }

        export type OsdkObject<
          OPTIONS extends never | '$notStrict' | '$rid' = never,
          K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
        > = $Osdk<SomeInterface.Definition, K | OPTIONS> &
          Pick<
            [OPTIONS] extends [never]
              ? SomeInterface.StrictProps
              : OPTIONS extends '$notStrict'
                ? SomeInterface.Props
                : SomeInterface.StrictProps,
            K
          > & {
            readonly $link: OsdkObjectLinks$SomeInterface;
            readonly $title: string | undefined; // FIXME
            readonly $primaryKey: string | number;

            readonly $as: <NEW_Q extends $ValidToFrom<SomeInterface.Definition>>(
              type: NEW_Q | string,
            ) => $Osdk<NEW_Q, $ConvertProps<SomeInterface.Definition, NEW_Q, K>>;
          } & $OsdkObject<'SomeInterface'>;
      }

      /** @deprecated use SomeInterface.Definition **/
      export type SomeInterface = SomeInterface.Definition;

      export const SomeInterface: SomeInterface.Definition = {
        osdkMetadata: $osdkMetadata,
        objectSet: undefined as any,
        props: undefined as any,
        strictProps: undefined as any,
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
        "/foo/ontology/objects/Person.ts": "import type {
        ObjectTypeDefinition as $ObjectTypeDefinition,
        ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
        PropertyDef as $PropertyDef,
        VersionBound as $VersionBound,
      } from '@osdk/api';
      import type {
        AggregateOpts as $AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults as $AggregationsResults,
        Augments as $Augments,
        ConvertProps as $ConvertProps,
        DefaultToFalse as $DefaultToFalse,
        FetchPageArgs as $FetchPageArgs,
        LinkedType as $LinkedType,
        LinkNames as $LinkNames,
        NullabilityAdherence as $NullabilityAdherence,
        NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        OsdkObjectPropertyType as $OsdkObjectPropertyType,
        PageResult as $PageResult,
        PropertyValueClientToWire as $PropertyValueClientToWire,
        PropertyValueWireToClient as $PropType,
        Result as $Result,
        SelectArg as $SelectArg,
        ValidToFrom as $ValidToFrom,
      } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Todo } from './Todo';

      export namespace Person {
        export type PropertyKeys = 'email';

        export interface Links {
          readonly Todos: Todo.ObjectSet;
        }

        export interface Props {
          readonly email: $PropType['string'] | undefined;
        }
        export interface StrictProps {
          readonly email: $PropType['string'];
        }

        export interface ObjectSet extends $ObjectSet<Person.Definition, Person.ObjectSet> {
          readonly aggregate: <const AO extends $AggregateOpts<Person.Definition>>(
            req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Person.Definition, AO>,
          ) => Promise<$AggregationsResults<Person.Definition, AO>>;

          readonly pivotTo: <const L extends $LinkNames<Person.Definition>>(
            type: L,
          ) => $LinkedType<Person.Definition, L>['objectSet'];

          readonly fetchOne: <
            const L extends Person.PropertyKeys,
            const R extends boolean,
            const S extends false | 'throw' = $NullabilityAdherenceDefault,
          >(
            primaryKey: $PropertyValueClientToWire[Person.Definition['primaryKeyType']],
            options?: $SelectArg<Person.Definition, L, R, S>,
          ) => Promise<
            Person.OsdkObject<
              (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
              L
            >
          >;

          readonly fetchOneWithErrors: <
            const L extends Person.PropertyKeys,
            const R extends boolean,
            const S extends false | 'throw' = $NullabilityAdherenceDefault,
          >(
            primaryKey: $PropertyValueClientToWire[Person.Definition['primaryKeyType']],
            options?: $SelectArg<Person.Definition, L, R, S>,
          ) => Promise<
            $Result<
              Person.OsdkObject<
                (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                L
              >
            >
          >;

          readonly fetchPage: <
            const L extends Person.PropertyKeys,
            const R extends boolean,
            const A extends $Augments,
            const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Person.Definition, L, R, A, S>,
          ) => Promise<
            $PageResult<
              Person.OsdkObject<
                (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                L
              >
            >
          >;

          readonly fetchPageWithErrors: <
            const L extends Person.PropertyKeys,
            const R extends boolean,
            const A extends $Augments,
            const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Person.Definition, L, R, A, S>,
          ) => Promise<
            $Result<
              $PageResult<
                Person.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >
          >;

          readonly asyncIter: () => AsyncIterableIterator<Person.OsdkObject>;
        }

        export interface Definition
          extends $ObjectTypeDefinition<'Person', Person.Definition>,
            $VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          objectSet: Person.ObjectSet;
          props: Person.Props;
          strictProps: Person.StrictProps;
          description: 'A person';
          implements: [];
          interfaceMap: {};
          inverseInterfaceMap: {};
          inverseSpts: {};
          links: {
            Todos: $ObjectTypeLinkDefinition<Todo, true>;
          };
          primaryKeyApiName: 'email';
          primaryKeyType: 'string';
          properties: {
            /**
             * (no ontology metadata)
             */
            email: $PropertyDef<'string', 'non-nullable', 'single'>;
          };
          spts: {};
        }

        export type OsdkObject<
          OPTIONS extends never | '$notStrict' | '$rid' = never,
          K extends keyof Person.Props = keyof Person.Props,
        > = $Osdk<Person.Definition, K | OPTIONS> &
          Pick<
            [OPTIONS] extends [never] ? Person.StrictProps : OPTIONS extends '$notStrict' ? Person.Props : Person.StrictProps,
            K
          > & {
            readonly $link: Person.Links;
            readonly $title: string | undefined; // FIXME
            readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

            readonly $as: <NEW_Q extends $ValidToFrom<Person.Definition>>(
              type: NEW_Q | string,
            ) => $Osdk<NEW_Q, $ConvertProps<Person.Definition, NEW_Q, K>>;
          } & $OsdkObject<'Person'>;
      }

      export type Person = Person.Definition;

      export const Person: Person & $VersionBound<$ExpectedClientVersion> = {
        osdkMetadata: $osdkMetadata,
        objectSet: undefined as any,
        props: undefined as any,
        strictProps: undefined as any,
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
        "/foo/ontology/objects/Todo.ts": "import type {
        ObjectTypeDefinition as $ObjectTypeDefinition,
        ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
        PropertyDef as $PropertyDef,
        VersionBound as $VersionBound,
      } from '@osdk/api';
      import type {
        AggregateOpts as $AggregateOpts,
        AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
        AggregationsResults as $AggregationsResults,
        Augments as $Augments,
        ConvertProps as $ConvertProps,
        DefaultToFalse as $DefaultToFalse,
        FetchPageArgs as $FetchPageArgs,
        LinkedType as $LinkedType,
        LinkNames as $LinkNames,
        NullabilityAdherence as $NullabilityAdherence,
        NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
        ObjectSet as $ObjectSet,
        Osdk as $Osdk,
        OsdkObject as $OsdkObject,
        OsdkObjectPropertyType as $OsdkObjectPropertyType,
        PageResult as $PageResult,
        PropertyValueClientToWire as $PropertyValueClientToWire,
        PropertyValueWireToClient as $PropType,
        Result as $Result,
        SelectArg as $SelectArg,
        SingleLinkAccessor as $SingleLinkAccessor,
        ValidToFrom as $ValidToFrom,
      } from '@osdk/client.api';
      import type { $ExpectedClientVersion } from '../../OntologyMetadata';
      import { $osdkMetadata } from '../../OntologyMetadata';
      import type { Person } from './Person';

      export namespace Todo {
        export type PropertyKeys = 'id' | 'body' | 'complete';

        export interface Links {
          readonly Assignee: $SingleLinkAccessor<Person.Definition>;
        }

        export interface Props {
          readonly body: $PropType['string'] | undefined;
          readonly complete: $PropType['boolean'] | undefined;
          readonly id: $PropType['integer'] | undefined;
        }
        export interface StrictProps {
          readonly body: $PropType['string'] | undefined;
          readonly complete: $PropType['boolean'] | undefined;
          readonly id: $PropType['integer'];
        }

        export interface ObjectSet extends $ObjectSet<Todo.Definition, Todo.ObjectSet> {
          readonly aggregate: <const AO extends $AggregateOpts<Todo.Definition>>(
            req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Todo.Definition, AO>,
          ) => Promise<$AggregationsResults<Todo.Definition, AO>>;

          readonly pivotTo: <const L extends $LinkNames<Todo.Definition>>(
            type: L,
          ) => $LinkedType<Todo.Definition, L>['objectSet'];

          readonly fetchOne: <
            const L extends Todo.PropertyKeys,
            const R extends boolean,
            const S extends false | 'throw' = $NullabilityAdherenceDefault,
          >(
            primaryKey: $PropertyValueClientToWire[Todo.Definition['primaryKeyType']],
            options?: $SelectArg<Todo.Definition, L, R, S>,
          ) => Promise<
            Todo.OsdkObject<(S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'), L>
          >;

          readonly fetchOneWithErrors: <
            const L extends Todo.PropertyKeys,
            const R extends boolean,
            const S extends false | 'throw' = $NullabilityAdherenceDefault,
          >(
            primaryKey: $PropertyValueClientToWire[Todo.Definition['primaryKeyType']],
            options?: $SelectArg<Todo.Definition, L, R, S>,
          ) => Promise<
            $Result<
              Todo.OsdkObject<
                (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                L
              >
            >
          >;

          readonly fetchPage: <
            const L extends Todo.PropertyKeys,
            const R extends boolean,
            const A extends $Augments,
            const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Todo.Definition, L, R, A, S>,
          ) => Promise<
            $PageResult<
              Todo.OsdkObject<
                (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                L
              >
            >
          >;

          readonly fetchPageWithErrors: <
            const L extends Todo.PropertyKeys,
            const R extends boolean,
            const A extends $Augments,
            const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
          >(
            args?: $FetchPageArgs<Todo.Definition, L, R, A, S>,
          ) => Promise<
            $Result<
              $PageResult<
                Todo.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >
          >;

          readonly asyncIter: () => AsyncIterableIterator<Todo.OsdkObject>;
        }

        export interface Definition
          extends $ObjectTypeDefinition<'Todo', Todo.Definition>,
            $VersionBound<$ExpectedClientVersion> {
          osdkMetadata: typeof $osdkMetadata;
          objectSet: Todo.ObjectSet;
          props: Todo.Props;
          strictProps: Todo.StrictProps;
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
            Assignee: $ObjectTypeLinkDefinition<Person, false>;
          };
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
          spts: {};
        }

        export type OsdkObject<
          OPTIONS extends never | '$notStrict' | '$rid' = never,
          K extends keyof Todo.Props = keyof Todo.Props,
        > = $Osdk<Todo.Definition, K | OPTIONS> &
          Pick<
            [OPTIONS] extends [never] ? Todo.StrictProps : OPTIONS extends '$notStrict' ? Todo.Props : Todo.StrictProps,
            K
          > & {
            readonly $link: Todo.Links;
            readonly $title: string | undefined; // FIXME
            readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

            readonly $as: <NEW_Q extends $ValidToFrom<Todo.Definition>>(
              type: NEW_Q | string,
            ) => $Osdk<NEW_Q, $ConvertProps<Todo.Definition, NEW_Q, K>>;
          } & $OsdkObject<'Todo'>;
      }

      export type Todo = Todo.Definition;

      export const Todo: Todo & $VersionBound<$ExpectedClientVersion> = {
        osdkMetadata: $osdkMetadata,
        objectSet: undefined as any,
        props: undefined as any,
        strictProps: undefined as any,
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

      export namespace getCount {
        export interface Signature {
          (query: getCount.Parameters): Promise<QueryResult.PrimitiveType<'integer'>>;
        }

        export interface Parameters {
          /**
           * (no ontology metadata)
           */
          readonly completed: QueryParam.PrimitiveType<'boolean'>;
        }

        export interface Definition
          extends QueryDefinition<'getCount', never, getCount.Signature>,
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
      }

      /** @deprecated use \`getCount.Signature' instead */
      export type getCount = getCount.Signature;

      export const getCount: getCount.Definition = {
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
      import type { Todo } from '../objects/Todo';

      export namespace returnsTodo {
        export interface Signature {
          (query: returnsTodo.Parameters): Promise<QueryResult.ObjectType<Todo>>;
        }

        export interface Parameters {
          /**
           *   description: Random desc so we test jsdoc
           */
          readonly someTodo: QueryParam.ObjectType<Todo>;
        }

        export interface Definition
          extends QueryDefinition<'returnsTodo', 'Todo', returnsTodo.Signature>,
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
      }

      /** @deprecated use \`returnsTodo.Signature' instead */
      export type returnsTodo = returnsTodo.Signature;

      export const returnsTodo: returnsTodo.Definition = {
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

    expect(tweakedFilesForSnapshotConsistency(helper.getFiles()))
      .toMatchInlineSnapshot(`
        {
          "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = 'PLACEHOLDER';
        export const $osdkMetadata = { extraUserAgent: '' };
        ",
          "/foo/index.ts": "export * from './ontology/actions.js';
        export * from './ontology/interfaces.js';
        export * from './ontology/objects.js';
        export * from './ontology/queries.js';
        ",
          "/foo/ontology/actions.ts": "export { deleteTodos } from './actions/deleteTodos.js';
        export { markTodoCompleted } from './actions/markTodoCompleted.js';
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

        export namespace deleteTodos {
          // Represents the definition of the parameters for the action
          export type ParamsDefinition = {
            object: {
              description: 'Todo(s) to be deleted';
              multiplicity: true;
              nullable: true;
              type: ObjectActionDataType<'foo.bar.Todo', Todo.Definition>;
            };
          };

          /**
           * An action which takes in an array of objects
           */
          export interface Params {
            /**
             * Todo(s) to be deleted
             */
            readonly object?: ReadonlyArray<ActionParam.ObjectType<Todo.Definition>>;
          }
          /** @deprecated **/
          export type Parameters = Params;

          // Represents the definition of the action
          export interface Definition
            extends ActionDefinition<'deleteTodos', 'foo.bar.Todo', deleteTodos.Signatures>,
              VersionBound<$ExpectedClientVersion> {
            apiName: 'foo.bar.deleteTodos';
            description: 'An action which takes in an array of objects';
            modifiedEntities: {};
            type: 'action';
            parameters: deleteTodos.ParamsDefinition;
            osdkMetadata: typeof $osdkMetadata;
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
         * @deprecated Use \`deleteTodos.Params\`
         */
        export type deleteTodos$Params = deleteTodos.Params | ReadonlyArray<deleteTodos.Params>;

        /** @deprecated Use \`deleteTodos.Definition\` **/
        export type deleteTodos = deleteTodos.Signatures;

        export const deleteTodos: deleteTodos.Definition = {
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

        export namespace markTodoCompleted {
          // Represents the definition of the parameters for the action
          export type ParamsDefinition = {
            object: {
              description: 'A Todo to mark completed';
              multiplicity: false;
              nullable: true;
              type: ObjectActionDataType<'foo.bar.Todo', Todo.Definition>;
            };
          };

          /**
           * An action which takes different types of parameters
           */
          export interface Params {
            /**
             * A Todo to mark completed
             */
            readonly object?: ActionParam.ObjectType<Todo.Definition>;
          }
          /** @deprecated **/
          export type Parameters = Params;

          // Represents the definition of the action
          export interface Definition
            extends ActionDefinition<'markTodoCompleted', 'foo.bar.Todo', markTodoCompleted.Signatures>,
              VersionBound<$ExpectedClientVersion> {
            apiName: 'foo.bar.markTodoCompleted';
            description: 'An action which takes different types of parameters';
            modifiedEntities: { 'foo.bar.Todo': { created: false; modified: true } };
            type: 'action';
            parameters: markTodoCompleted.ParamsDefinition;
            osdkMetadata: typeof $osdkMetadata;
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
         * @deprecated Use \`markTodoCompleted.Params\`
         */
        export type markTodoCompleted$Params = markTodoCompleted.Params | ReadonlyArray<markTodoCompleted.Params>;

        /** @deprecated Use \`markTodoCompleted.Definition\` **/
        export type markTodoCompleted = markTodoCompleted.Signatures;

        export const markTodoCompleted: markTodoCompleted.Definition = {
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
          "/foo/ontology/interfaces/SomeInterface.ts": "import type { PropertyDef as $PropertyDef, VersionBound as $VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
        import type {
          AggregateOpts as $AggregateOpts,
          AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
          AggregationsResults as $AggregationsResults,
          Augments as $Augments,
          ConvertProps as $ConvertProps,
          DefaultToFalse as $DefaultToFalse,
          FetchPageArgs as $FetchPageArgs,
          LinkedType as $LinkedType,
          LinkNames as $LinkNames,
          NullabilityAdherence as $NullabilityAdherence,
          NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          PageResult as $PageResult,
          PropertyValueWireToClient as $PropType,
          Result as $Result,
          ValidToFrom as $ValidToFrom,
        } from '@osdk/client.api';

        export type OsdkObjectLinks$SomeInterface = never;

        export namespace SomeInterface {
          export type PropertyKeys = 'SomeProperty';

          export interface Props {
            readonly SomeProperty: $PropType['string'] | undefined;
          }
          export interface StrictProps {
            readonly SomeProperty: $PropType['string'] | undefined;
          }

          export interface ObjectSet extends $ObjectSet<SomeInterface.Definition, SomeInterface.ObjectSet> {
            readonly aggregate: <const AO extends $AggregateOpts<SomeInterface.Definition>>(
              req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<SomeInterface.Definition, AO>,
            ) => Promise<$AggregationsResults<SomeInterface.Definition, AO>>;

            readonly pivotTo: <const L extends $LinkNames<SomeInterface.Definition>>(
              type: L,
            ) => $LinkedType<SomeInterface.Definition, L>['objectSet'];

            readonly fetchPage: <
              const L extends SomeInterface.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
            ) => Promise<
              $PageResult<
                SomeInterface.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPageWithErrors: <
              const L extends SomeInterface.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
            ) => Promise<
              $Result<
                $PageResult<
                  SomeInterface.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >
            >;

            readonly asyncIter: () => AsyncIterableIterator<SomeInterface.OsdkObject>;
          }

          export interface Definition
            extends $InterfaceDefinition<'foo.bar.SomeInterface', SomeInterface.Definition>,
              $VersionBound<$ExpectedClientVersion> {
            osdkMetadata: typeof $osdkMetadata;
            objectSet: SomeInterface.ObjectSet;
            props: SomeInterface.Props;
            strictProps: SomeInterface.StrictProps;
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
          }

          export type OsdkObject<
            OPTIONS extends never | '$notStrict' | '$rid' = never,
            K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
          > = $Osdk<SomeInterface.Definition, K | OPTIONS> &
            Pick<
              [OPTIONS] extends [never]
                ? SomeInterface.StrictProps
                : OPTIONS extends '$notStrict'
                  ? SomeInterface.Props
                  : SomeInterface.StrictProps,
              K
            > & {
              readonly $link: OsdkObjectLinks$SomeInterface;
              readonly $title: string | undefined; // FIXME
              readonly $primaryKey: string | number;

              readonly $as: <NEW_Q extends $ValidToFrom<SomeInterface.Definition>>(
                type: NEW_Q | string,
              ) => $Osdk<NEW_Q, $ConvertProps<SomeInterface.Definition, NEW_Q, K>>;
            } & $OsdkObject<'foo.bar.SomeInterface'>;
        }

        /** @deprecated use SomeInterface.Definition **/
        export type SomeInterface = SomeInterface.Definition;

        export const SomeInterface: SomeInterface.Definition = {
          osdkMetadata: $osdkMetadata,
          objectSet: undefined as any,
          props: undefined as any,
          strictProps: undefined as any,
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
          "/foo/ontology/objects/Person.ts": "import type {
          ObjectTypeDefinition as $ObjectTypeDefinition,
          ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
          PropertyDef as $PropertyDef,
          VersionBound as $VersionBound,
        } from '@osdk/api';
        import type {
          AggregateOpts as $AggregateOpts,
          AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
          AggregationsResults as $AggregationsResults,
          Augments as $Augments,
          ConvertProps as $ConvertProps,
          DefaultToFalse as $DefaultToFalse,
          FetchPageArgs as $FetchPageArgs,
          LinkedType as $LinkedType,
          LinkNames as $LinkNames,
          NullabilityAdherence as $NullabilityAdherence,
          NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          OsdkObjectPropertyType as $OsdkObjectPropertyType,
          PageResult as $PageResult,
          PropertyValueClientToWire as $PropertyValueClientToWire,
          PropertyValueWireToClient as $PropType,
          Result as $Result,
          SelectArg as $SelectArg,
          ValidToFrom as $ValidToFrom,
        } from '@osdk/client.api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { Todo } from './Todo.js';

        export namespace Person {
          export type PropertyKeys = 'email';

          export interface Links {
            readonly Todos: Todo.ObjectSet;
          }

          export interface Props {
            readonly email: $PropType['string'] | undefined;
          }
          export interface StrictProps {
            readonly email: $PropType['string'];
          }

          export interface ObjectSet extends $ObjectSet<Person.Definition, Person.ObjectSet> {
            readonly aggregate: <const AO extends $AggregateOpts<Person.Definition>>(
              req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Person.Definition, AO>,
            ) => Promise<$AggregationsResults<Person.Definition, AO>>;

            readonly pivotTo: <const L extends $LinkNames<Person.Definition>>(
              type: L,
            ) => $LinkedType<Person.Definition, L>['objectSet'];

            readonly fetchOne: <
              const L extends Person.PropertyKeys,
              const R extends boolean,
              const S extends false | 'throw' = $NullabilityAdherenceDefault,
            >(
              primaryKey: $PropertyValueClientToWire[Person.Definition['primaryKeyType']],
              options?: $SelectArg<Person.Definition, L, R, S>,
            ) => Promise<
              Person.OsdkObject<
                (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                L
              >
            >;

            readonly fetchOneWithErrors: <
              const L extends Person.PropertyKeys,
              const R extends boolean,
              const S extends false | 'throw' = $NullabilityAdherenceDefault,
            >(
              primaryKey: $PropertyValueClientToWire[Person.Definition['primaryKeyType']],
              options?: $SelectArg<Person.Definition, L, R, S>,
            ) => Promise<
              $Result<
                Person.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPage: <
              const L extends Person.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<Person.Definition, L, R, A, S>,
            ) => Promise<
              $PageResult<
                Person.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPageWithErrors: <
              const L extends Person.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<Person.Definition, L, R, A, S>,
            ) => Promise<
              $Result<
                $PageResult<
                  Person.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >
            >;

            readonly asyncIter: () => AsyncIterableIterator<Person.OsdkObject>;
          }

          export interface Definition
            extends $ObjectTypeDefinition<'foo.bar.Person', Person.Definition>,
              $VersionBound<$ExpectedClientVersion> {
            osdkMetadata: typeof $osdkMetadata;
            objectSet: Person.ObjectSet;
            props: Person.Props;
            strictProps: Person.StrictProps;
            description: 'A person';
            implements: [];
            interfaceMap: {};
            inverseInterfaceMap: {};
            inverseSpts: {};
            links: {
              Todos: $ObjectTypeLinkDefinition<Todo, true>;
            };
            primaryKeyApiName: 'email';
            primaryKeyType: 'string';
            properties: {
              /**
               * (no ontology metadata)
               */
              email: $PropertyDef<'string', 'non-nullable', 'single'>;
            };
            spts: {};
          }

          export type OsdkObject<
            OPTIONS extends never | '$notStrict' | '$rid' = never,
            K extends keyof Person.Props = keyof Person.Props,
          > = $Osdk<Person.Definition, K | OPTIONS> &
            Pick<
              [OPTIONS] extends [never] ? Person.StrictProps : OPTIONS extends '$notStrict' ? Person.Props : Person.StrictProps,
              K
            > & {
              readonly $link: Person.Links;
              readonly $title: string | undefined; // FIXME
              readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

              readonly $as: <NEW_Q extends $ValidToFrom<Person.Definition>>(
                type: NEW_Q | string,
              ) => $Osdk<NEW_Q, $ConvertProps<Person.Definition, NEW_Q, K>>;
            } & $OsdkObject<'foo.bar.Person'>;
        }

        export type Person = Person.Definition;

        export const Person: Person & $VersionBound<$ExpectedClientVersion> = {
          osdkMetadata: $osdkMetadata,
          objectSet: undefined as any,
          props: undefined as any,
          strictProps: undefined as any,
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
          "/foo/ontology/objects/Todo.ts": "import type {
          ObjectTypeDefinition as $ObjectTypeDefinition,
          ObjectTypeLinkDefinition as $ObjectTypeLinkDefinition,
          PropertyDef as $PropertyDef,
          VersionBound as $VersionBound,
        } from '@osdk/api';
        import type {
          AggregateOpts as $AggregateOpts,
          AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
          AggregationsResults as $AggregationsResults,
          Augments as $Augments,
          ConvertProps as $ConvertProps,
          DefaultToFalse as $DefaultToFalse,
          FetchPageArgs as $FetchPageArgs,
          LinkedType as $LinkedType,
          LinkNames as $LinkNames,
          NullabilityAdherence as $NullabilityAdherence,
          NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          OsdkObjectPropertyType as $OsdkObjectPropertyType,
          PageResult as $PageResult,
          PropertyValueClientToWire as $PropertyValueClientToWire,
          PropertyValueWireToClient as $PropType,
          Result as $Result,
          SelectArg as $SelectArg,
          SingleLinkAccessor as $SingleLinkAccessor,
          ValidToFrom as $ValidToFrom,
        } from '@osdk/client.api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';
        import type { Person } from './Person.js';

        export namespace Todo {
          export type PropertyKeys = 'id' | 'body' | 'complete';

          export interface Links {
            readonly Assignee: $SingleLinkAccessor<Person.Definition>;
          }

          export interface Props {
            readonly body: $PropType['string'] | undefined;
            readonly complete: $PropType['boolean'] | undefined;
            readonly id: $PropType['integer'] | undefined;
          }
          export interface StrictProps {
            readonly body: $PropType['string'] | undefined;
            readonly complete: $PropType['boolean'] | undefined;
            readonly id: $PropType['integer'];
          }

          export interface ObjectSet extends $ObjectSet<Todo.Definition, Todo.ObjectSet> {
            readonly aggregate: <const AO extends $AggregateOpts<Todo.Definition>>(
              req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Todo.Definition, AO>,
            ) => Promise<$AggregationsResults<Todo.Definition, AO>>;

            readonly pivotTo: <const L extends $LinkNames<Todo.Definition>>(
              type: L,
            ) => $LinkedType<Todo.Definition, L>['objectSet'];

            readonly fetchOne: <
              const L extends Todo.PropertyKeys,
              const R extends boolean,
              const S extends false | 'throw' = $NullabilityAdherenceDefault,
            >(
              primaryKey: $PropertyValueClientToWire[Todo.Definition['primaryKeyType']],
              options?: $SelectArg<Todo.Definition, L, R, S>,
            ) => Promise<
              Todo.OsdkObject<(S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'), L>
            >;

            readonly fetchOneWithErrors: <
              const L extends Todo.PropertyKeys,
              const R extends boolean,
              const S extends false | 'throw' = $NullabilityAdherenceDefault,
            >(
              primaryKey: $PropertyValueClientToWire[Todo.Definition['primaryKeyType']],
              options?: $SelectArg<Todo.Definition, L, R, S>,
            ) => Promise<
              $Result<
                Todo.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPage: <
              const L extends Todo.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<Todo.Definition, L, R, A, S>,
            ) => Promise<
              $PageResult<
                Todo.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPageWithErrors: <
              const L extends Todo.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<Todo.Definition, L, R, A, S>,
            ) => Promise<
              $Result<
                $PageResult<
                  Todo.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >
            >;

            readonly asyncIter: () => AsyncIterableIterator<Todo.OsdkObject>;
          }

          export interface Definition
            extends $ObjectTypeDefinition<'foo.bar.Todo', Todo.Definition>,
              $VersionBound<$ExpectedClientVersion> {
            osdkMetadata: typeof $osdkMetadata;
            objectSet: Todo.ObjectSet;
            props: Todo.Props;
            strictProps: Todo.StrictProps;
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
              Assignee: $ObjectTypeLinkDefinition<Person, false>;
            };
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
            spts: {};
          }

          export type OsdkObject<
            OPTIONS extends never | '$notStrict' | '$rid' = never,
            K extends keyof Todo.Props = keyof Todo.Props,
          > = $Osdk<Todo.Definition, K | OPTIONS> &
            Pick<
              [OPTIONS] extends [never] ? Todo.StrictProps : OPTIONS extends '$notStrict' ? Todo.Props : Todo.StrictProps,
              K
            > & {
              readonly $link: Todo.Links;
              readonly $title: string | undefined; // FIXME
              readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

              readonly $as: <NEW_Q extends $ValidToFrom<Todo.Definition>>(
                type: NEW_Q | string,
              ) => $Osdk<NEW_Q, $ConvertProps<Todo.Definition, NEW_Q, K>>;
            } & $OsdkObject<'foo.bar.Todo'>;
        }

        export type Todo = Todo.Definition;

        export const Todo: Todo & $VersionBound<$ExpectedClientVersion> = {
          osdkMetadata: $osdkMetadata,
          objectSet: undefined as any,
          props: undefined as any,
          strictProps: undefined as any,
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

        export namespace getCount {
          export interface Signature {
            (query: getCount.Parameters): Promise<QueryResult.PrimitiveType<'integer'>>;
          }

          export interface Parameters {
            /**
             * (no ontology metadata)
             */
            readonly completed: QueryParam.PrimitiveType<'boolean'>;
          }

          export interface Definition
            extends QueryDefinition<'foo.bar.getCount', never, getCount.Signature>,
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
        }

        /** @deprecated use \`getCount.Signature' instead */
        export type getCount = getCount.Signature;

        export const getCount: getCount.Definition = {
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
        import type { Todo } from '../objects/Todo.js';

        export namespace returnsTodo {
          export interface Signature {
            (query: returnsTodo.Parameters): Promise<QueryResult.ObjectType<Todo>>;
          }

          export interface Parameters {
            /**
             *   description: Random desc so we test jsdoc
             */
            readonly someTodo: QueryParam.ObjectType<Todo>;
          }

          export interface Definition
            extends QueryDefinition<'foo.bar.returnsTodo', 'foo.bar.Todo', returnsTodo.Signature>,
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
                __OsdkTargetType?: Todo;
              };
            };
            output: {
              nullable: false;
              object: 'foo.bar.Todo';
              type: 'object';
              __OsdkTargetType?: Todo;
            };
          }
        }

        /** @deprecated use \`returnsTodo.Signature' instead */
        export type returnsTodo = returnsTodo.Signature;

        export const returnsTodo: returnsTodo.Definition = {
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

  describe("query depends on foreign object", () => {
    it("generates the correct code", async () => {
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

      expect(helper.getFiles()["/foo/ontology/queries/getTask.ts"])
        .toMatchInlineSnapshot(`
          "import type { Task as $Imported$objectTypes$com$example$dep$Task } from '@com.example.dep/osdk';
          import type { QueryDefinition, VersionBound } from '@osdk/api';
          import type { QueryParam, QueryResult } from '@osdk/client.api';
          import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';

          export namespace getTask {
            export interface Signature {
              (query: getTask.Parameters): Promise<QueryResult.ObjectType<$Imported$objectTypes$com$example$dep$Task>>;
            }

            export interface Parameters {
              /**
               * (no ontology metadata)
               */
              readonly a: QueryParam.ObjectType<$Imported$objectTypes$com$example$dep$Task>;
            }

            export interface Definition
              extends QueryDefinition<'getTask', 'com.example.dep.Task', getTask.Signature>,
                VersionBound<$ExpectedClientVersion> {
              apiName: 'getTask';
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
                  __OsdkTargetType?: $Imported$objectTypes$com$example$dep$Task;
                };
              };
              output: {
                nullable: false;
                object: 'com.example.dep.Task';
                type: 'object';
                __OsdkTargetType?: $Imported$objectTypes$com$example$dep$Task;
              };
            }
          }

          /** @deprecated use \`getTask.Signature' instead */
          export type getTask = getTask.Signature;

          export const getTask: getTask.Definition = {
            apiName: 'getTask',
            type: 'query',
            version: '0',
            parameters: {
              a: {
                type: 'object',
                object: 'com.example.dep.Task',
                nullable: false,
              },
            },
            output: {
              nullable: false,
              object: 'com.example.dep.Task',
              type: 'object',
            },
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
          undefined,
          new Map([["com.example.dep", "@com.example.dep/osdk"]]),
        ),
      ).resolves.toMatchInlineSnapshot(`undefined`);

      expect(helper.getFiles()["/foo/ontology/objects/UsesForeignSpt.ts"])
        .toMatchInlineSnapshot(`
          "import type {
            ObjectTypeDefinition as $ObjectTypeDefinition,
            PropertyDef as $PropertyDef,
            VersionBound as $VersionBound,
          } from '@osdk/api';
          import type {
            AggregateOpts as $AggregateOpts,
            AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
            AggregationsResults as $AggregationsResults,
            Augments as $Augments,
            ConvertProps as $ConvertProps,
            DefaultToFalse as $DefaultToFalse,
            FetchPageArgs as $FetchPageArgs,
            LinkedType as $LinkedType,
            LinkNames as $LinkNames,
            NullabilityAdherence as $NullabilityAdherence,
            NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
            ObjectSet as $ObjectSet,
            Osdk as $Osdk,
            OsdkObject as $OsdkObject,
            OsdkObjectPropertyType as $OsdkObjectPropertyType,
            PageResult as $PageResult,
            PropertyValueClientToWire as $PropertyValueClientToWire,
            PropertyValueWireToClient as $PropType,
            Result as $Result,
            SelectArg as $SelectArg,
            ValidToFrom as $ValidToFrom,
          } from '@osdk/client.api';
          import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
          import { $osdkMetadata } from '../../OntologyMetadata.js';

          export namespace UsesForeignSpt {
            export type PropertyKeys = 'id' | 'body';

            export type Links = never;

            export interface Props {
              readonly body: $PropType['string'] | undefined;
              readonly id: $PropType['integer'] | undefined;
            }
            export interface StrictProps {
              readonly body: $PropType['string'] | undefined;
              readonly id: $PropType['integer'];
            }

            export interface ObjectSet extends $ObjectSet<UsesForeignSpt.Definition, UsesForeignSpt.ObjectSet> {
              readonly aggregate: <const AO extends $AggregateOpts<UsesForeignSpt.Definition>>(
                req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<UsesForeignSpt.Definition, AO>,
              ) => Promise<$AggregationsResults<UsesForeignSpt.Definition, AO>>;

              readonly pivotTo: <const L extends $LinkNames<UsesForeignSpt.Definition>>(
                type: L,
              ) => $LinkedType<UsesForeignSpt.Definition, L>['objectSet'];

              readonly fetchOne: <
                const L extends UsesForeignSpt.PropertyKeys,
                const R extends boolean,
                const S extends false | 'throw' = $NullabilityAdherenceDefault,
              >(
                primaryKey: $PropertyValueClientToWire[UsesForeignSpt.Definition['primaryKeyType']],
                options?: $SelectArg<UsesForeignSpt.Definition, L, R, S>,
              ) => Promise<
                UsesForeignSpt.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >;

              readonly fetchOneWithErrors: <
                const L extends UsesForeignSpt.PropertyKeys,
                const R extends boolean,
                const S extends false | 'throw' = $NullabilityAdherenceDefault,
              >(
                primaryKey: $PropertyValueClientToWire[UsesForeignSpt.Definition['primaryKeyType']],
                options?: $SelectArg<UsesForeignSpt.Definition, L, R, S>,
              ) => Promise<
                $Result<
                  UsesForeignSpt.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >;

              readonly fetchPage: <
                const L extends UsesForeignSpt.PropertyKeys,
                const R extends boolean,
                const A extends $Augments,
                const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
              >(
                args?: $FetchPageArgs<UsesForeignSpt.Definition, L, R, A, S>,
              ) => Promise<
                $PageResult<
                  UsesForeignSpt.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >;

              readonly fetchPageWithErrors: <
                const L extends UsesForeignSpt.PropertyKeys,
                const R extends boolean,
                const A extends $Augments,
                const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
              >(
                args?: $FetchPageArgs<UsesForeignSpt.Definition, L, R, A, S>,
              ) => Promise<
                $Result<
                  $PageResult<
                    UsesForeignSpt.OsdkObject<
                      (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                      L
                    >
                  >
                >
              >;

              readonly asyncIter: () => AsyncIterableIterator<UsesForeignSpt.OsdkObject>;
            }

            export interface Definition
              extends $ObjectTypeDefinition<'UsesForeignSpt', UsesForeignSpt.Definition>,
                $VersionBound<$ExpectedClientVersion> {
              osdkMetadata: typeof $osdkMetadata;
              objectSet: UsesForeignSpt.ObjectSet;
              props: UsesForeignSpt.Props;
              strictProps: UsesForeignSpt.StrictProps;
              implements: [];
              interfaceMap: {};
              inverseInterfaceMap: {};
              inverseSpts: {
                body: 'com.example.dep.spt';
              };
              links: {};
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
              spts: {
                'com.example.dep.spt': 'body';
              };
            }

            export type OsdkObject<
              OPTIONS extends never | '$notStrict' | '$rid' = never,
              K extends keyof UsesForeignSpt.Props = keyof UsesForeignSpt.Props,
            > = $Osdk<UsesForeignSpt.Definition, K | OPTIONS> &
              Pick<
                [OPTIONS] extends [never]
                  ? UsesForeignSpt.StrictProps
                  : OPTIONS extends '$notStrict'
                    ? UsesForeignSpt.Props
                    : UsesForeignSpt.StrictProps,
                K
              > & {
                readonly $link: UsesForeignSpt.Links;
                readonly $title: string | undefined; // FIXME
                readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'integer'; nullable: false }, true>;

                readonly $as: <NEW_Q extends $ValidToFrom<UsesForeignSpt.Definition>>(
                  type: NEW_Q | string,
                ) => $Osdk<NEW_Q, $ConvertProps<UsesForeignSpt.Definition, NEW_Q, K>>;
              } & $OsdkObject<'UsesForeignSpt'>;
          }

          export type UsesForeignSpt = UsesForeignSpt.Definition;

          export const UsesForeignSpt: UsesForeignSpt & $VersionBound<$ExpectedClientVersion> = {
            osdkMetadata: $osdkMetadata,
            objectSet: undefined as any,
            props: undefined as any,
            strictProps: undefined as any,
            apiName: 'UsesForeignSpt',
            implements: [],
            interfaceMap: {},
            inverseInterfaceMap: {},
            inverseSpts: {
              body: 'com.example.dep.spt',
            },
            links: {},
            primaryKeyApiName: 'id',
            primaryKeyType: 'integer',
            properties: {
              id: {
                multiplicity: false,
                type: 'integer',
                nullable: false,
              },
              body: {
                multiplicity: false,
                type: 'string',
                nullable: true,
              },
            },
            spts: {
              'com.example.dep.spt': 'body',
            },
            type: 'object',
          };
          "
        `);
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
                type: ObjectActionDataType<'com.example.dep.Task', $Imported$objectTypes$com$example$dep$Task.Definition>;
              };
            };

            export interface Params {
              readonly body: ActionParam.PrimitiveType<'string'>;

              readonly task: ActionParam.ObjectType<$Imported$objectTypes$com$example$dep$Task.Definition>;
            }
            /** @deprecated **/
            export type Parameters = Params;

            // Represents the definition of the action
            export interface Definition
              extends ActionDefinition<'setTaskBody', 'com.example.dep.Task', setTaskBody.Signatures>,
                VersionBound<$ExpectedClientVersion> {
              apiName: 'setTaskBody';
              modifiedEntities: { 'com.example.dep.Task': { created: false; modified: true } };
              type: 'action';
              parameters: setTaskBody.ParamsDefinition;
              osdkMetadata: typeof $osdkMetadata;
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
           * @deprecated Use \`setTaskBody.Params\`
           */
          export type setTaskBody$Params = setTaskBody.Params | ReadonlyArray<setTaskBody.Params>;

          /** @deprecated Use \`setTaskBody.Definition\` **/
          export type setTaskBody = setTaskBody.Signatures;

          export const setTaskBody: setTaskBody.Definition = {
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

    expect(tweakedFilesForSnapshotConsistency(helper.getFiles()))
      .toMatchInlineSnapshot(`
        {
          "/foo/OntologyMetadata.ts": "export type $ExpectedClientVersion = 'PLACEHOLDER';
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
          "/foo/ontology/interfaces/SomeInterface.ts": "import type { PropertyDef as $PropertyDef, VersionBound as $VersionBound } from '@osdk/api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        import type { InterfaceDefinition as $InterfaceDefinition } from '@osdk/api';
        import type {
          AggregateOpts as $AggregateOpts,
          AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
          AggregationsResults as $AggregationsResults,
          Augments as $Augments,
          ConvertProps as $ConvertProps,
          DefaultToFalse as $DefaultToFalse,
          FetchPageArgs as $FetchPageArgs,
          LinkedType as $LinkedType,
          LinkNames as $LinkNames,
          NullabilityAdherence as $NullabilityAdherence,
          NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          PageResult as $PageResult,
          PropertyValueWireToClient as $PropType,
          Result as $Result,
          ValidToFrom as $ValidToFrom,
        } from '@osdk/client.api';

        export type OsdkObjectLinks$SomeInterface = never;

        export namespace SomeInterface {
          export type PropertyKeys = 'spt';

          export interface Props {
            readonly spt: $PropType['string'] | undefined;
          }
          export interface StrictProps {
            readonly spt: $PropType['string'] | undefined;
          }

          export interface ObjectSet extends $ObjectSet<SomeInterface.Definition, SomeInterface.ObjectSet> {
            readonly aggregate: <const AO extends $AggregateOpts<SomeInterface.Definition>>(
              req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<SomeInterface.Definition, AO>,
            ) => Promise<$AggregationsResults<SomeInterface.Definition, AO>>;

            readonly pivotTo: <const L extends $LinkNames<SomeInterface.Definition>>(
              type: L,
            ) => $LinkedType<SomeInterface.Definition, L>['objectSet'];

            readonly fetchPage: <
              const L extends SomeInterface.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
            ) => Promise<
              $PageResult<
                SomeInterface.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPageWithErrors: <
              const L extends SomeInterface.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<SomeInterface.Definition, L, R, A, S>,
            ) => Promise<
              $Result<
                $PageResult<
                  SomeInterface.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >
            >;

            readonly asyncIter: () => AsyncIterableIterator<SomeInterface.OsdkObject>;
          }

          export interface Definition
            extends $InterfaceDefinition<'com.example.dep.SomeInterface', SomeInterface.Definition>,
              $VersionBound<$ExpectedClientVersion> {
            osdkMetadata: typeof $osdkMetadata;
            objectSet: SomeInterface.ObjectSet;
            props: SomeInterface.Props;
            strictProps: SomeInterface.StrictProps;
            displayName: 'Sum Interface';
            implements: [];
            links: {};
            properties: {
              /**
               *   display name: 'Some Property'
               */
              spt: $PropertyDef<'string', 'nullable', 'single'>;
            };
          }

          export type OsdkObject<
            OPTIONS extends never | '$notStrict' | '$rid' = never,
            K extends keyof SomeInterface.Props = keyof SomeInterface.Props,
          > = $Osdk<SomeInterface.Definition, K | OPTIONS> &
            Pick<
              [OPTIONS] extends [never]
                ? SomeInterface.StrictProps
                : OPTIONS extends '$notStrict'
                  ? SomeInterface.Props
                  : SomeInterface.StrictProps,
              K
            > & {
              readonly $link: OsdkObjectLinks$SomeInterface;
              readonly $title: string | undefined; // FIXME
              readonly $primaryKey: string | number;

              readonly $as: <NEW_Q extends $ValidToFrom<SomeInterface.Definition>>(
                type: NEW_Q | string,
              ) => $Osdk<NEW_Q, $ConvertProps<SomeInterface.Definition, NEW_Q, K>>;
            } & $OsdkObject<'com.example.dep.SomeInterface'>;
        }

        /** @deprecated use SomeInterface.Definition **/
        export type SomeInterface = SomeInterface.Definition;

        export const SomeInterface: SomeInterface.Definition = {
          osdkMetadata: $osdkMetadata,
          objectSet: undefined as any,
          props: undefined as any,
          strictProps: undefined as any,
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
          "/foo/ontology/objects/Task.ts": "import type {
          ObjectTypeDefinition as $ObjectTypeDefinition,
          PropertyDef as $PropertyDef,
          VersionBound as $VersionBound,
        } from '@osdk/api';
        import type {
          AggregateOpts as $AggregateOpts,
          AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy as $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy,
          AggregationsResults as $AggregationsResults,
          Augments as $Augments,
          ConvertProps as $ConvertProps,
          DefaultToFalse as $DefaultToFalse,
          FetchPageArgs as $FetchPageArgs,
          LinkedType as $LinkedType,
          LinkNames as $LinkNames,
          NullabilityAdherence as $NullabilityAdherence,
          NullabilityAdherenceDefault as $NullabilityAdherenceDefault,
          ObjectSet as $ObjectSet,
          Osdk as $Osdk,
          OsdkObject as $OsdkObject,
          OsdkObjectPropertyType as $OsdkObjectPropertyType,
          PageResult as $PageResult,
          PropertyValueClientToWire as $PropertyValueClientToWire,
          PropertyValueWireToClient as $PropType,
          Result as $Result,
          SelectArg as $SelectArg,
          ValidToFrom as $ValidToFrom,
        } from '@osdk/client.api';
        import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
        import { $osdkMetadata } from '../../OntologyMetadata.js';

        export namespace Task {
          export type PropertyKeys = 'taskId' | 'body';

          export type Links = never;

          export interface Props {
            readonly body: $PropType['string'] | undefined;
            readonly taskId: $PropType['string'] | undefined;
          }
          export interface StrictProps {
            readonly body: $PropType['string'] | undefined;
            readonly taskId: $PropType['string'];
          }

          export interface ObjectSet extends $ObjectSet<Task.Definition, Task.ObjectSet> {
            readonly aggregate: <const AO extends $AggregateOpts<Task.Definition>>(
              req: $AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<Task.Definition, AO>,
            ) => Promise<$AggregationsResults<Task.Definition, AO>>;

            readonly pivotTo: <const L extends $LinkNames<Task.Definition>>(
              type: L,
            ) => $LinkedType<Task.Definition, L>['objectSet'];

            readonly fetchOne: <
              const L extends Task.PropertyKeys,
              const R extends boolean,
              const S extends false | 'throw' = $NullabilityAdherenceDefault,
            >(
              primaryKey: $PropertyValueClientToWire[Task.Definition['primaryKeyType']],
              options?: $SelectArg<Task.Definition, L, R, S>,
            ) => Promise<
              Task.OsdkObject<(S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'), L>
            >;

            readonly fetchOneWithErrors: <
              const L extends Task.PropertyKeys,
              const R extends boolean,
              const S extends false | 'throw' = $NullabilityAdherenceDefault,
            >(
              primaryKey: $PropertyValueClientToWire[Task.Definition['primaryKeyType']],
              options?: $SelectArg<Task.Definition, L, R, S>,
            ) => Promise<
              $Result<
                Task.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPage: <
              const L extends Task.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<Task.Definition, L, R, A, S>,
            ) => Promise<
              $PageResult<
                Task.OsdkObject<
                  (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                  L
                >
              >
            >;

            readonly fetchPageWithErrors: <
              const L extends Task.PropertyKeys,
              const R extends boolean,
              const A extends $Augments,
              const S extends $NullabilityAdherence = $NullabilityAdherenceDefault,
            >(
              args?: $FetchPageArgs<Task.Definition, L, R, A, S>,
            ) => Promise<
              $Result<
                $PageResult<
                  Task.OsdkObject<
                    (S extends false ? '$notStrict' : never) | ($DefaultToFalse<R> extends false ? never : '$rid'),
                    L
                  >
                >
              >
            >;

            readonly asyncIter: () => AsyncIterableIterator<Task.OsdkObject>;
          }

          export interface Definition
            extends $ObjectTypeDefinition<'com.example.dep.Task', Task.Definition>,
              $VersionBound<$ExpectedClientVersion> {
            osdkMetadata: typeof $osdkMetadata;
            objectSet: Task.ObjectSet;
            props: Task.Props;
            strictProps: Task.StrictProps;
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
              body: $PropertyDef<'string', 'nullable', 'single'>;
              /**
               * (no ontology metadata)
               */
              taskId: $PropertyDef<'string', 'non-nullable', 'single'>;
            };
            spts: {};
          }

          export type OsdkObject<
            OPTIONS extends never | '$notStrict' | '$rid' = never,
            K extends keyof Task.Props = keyof Task.Props,
          > = $Osdk<Task.Definition, K | OPTIONS> &
            Pick<
              [OPTIONS] extends [never] ? Task.StrictProps : OPTIONS extends '$notStrict' ? Task.Props : Task.StrictProps,
              K
            > & {
              readonly $link: Task.Links;
              readonly $title: string | undefined; // FIXME
              readonly $primaryKey: $OsdkObjectPropertyType<{ multiplicity: false; type: 'string'; nullable: false }, true>;

              readonly $as: <NEW_Q extends $ValidToFrom<Task.Definition>>(
                type: NEW_Q | string,
              ) => $Osdk<NEW_Q, $ConvertProps<Task.Definition, NEW_Q, K>>;
            } & $OsdkObject<'com.example.dep.Task'>;
        }

        export type Task = Task.Definition;

        export const Task: Task & $VersionBound<$ExpectedClientVersion> = {
          osdkMetadata: $osdkMetadata,
          objectSet: undefined as any,
          props: undefined as any,
          strictProps: undefined as any,
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
