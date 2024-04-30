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

import { createClientContext } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import {
  apiServer,
  getMockTodoObject,
  MOCK_ORIGIN,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import {
  assert,
  beforeAll,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import { ActionExecutionMode, ReturnEditsMode } from "../..";
import type {
  ActionError,
  ActionExecutionOptions,
  ActionResponseFromOptions,
  Edits,
  Result,
} from "../..";
import { Ontology as MockOntologyGenerated } from "../../generatedNoCheck/Ontology";
import { USER_AGENT } from "../../USER_AGENT";
import {
  expectFetchToBeCalledWithBody,
  expectFetchToBeCalledWithGet,
} from "../../util/test/expectUtils";
import { unwrapResultOrThrow } from "../../util/test/resultUtils";
import type {
  BatchActionExecutionOptions,
  BatchActionResponseFromOptions,
  BulkActionExecutionOptions,
  BulkActionResponseFromOptions,
} from "../baseTypes";
import { createBaseOsdkObjectSet } from "../objectSets/OsdkObjectSet";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import type { Actions, BatchActions, BulkActions } from "./actions";
import {
  createActionProxy,
  createBatchActionProxy,
  createBulkActionProxy,
} from "./createActionProxy";

describe("Actions", () => {
  let client: ClientContext<typeof MockOntology>;
  let sharedClient: ClientContext<typeof MockOntologyGenerated>;
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let actions: Actions<
    typeof MockOntology
  >;
  let bulkActions: BulkActions<typeof MockOntology>;
  let batchActions: BatchActions<typeof MockOntology>;
  let sharedBulkActions: BulkActions<typeof MockOntologyGenerated>;

  beforeAll(async () => {
    apiServer.listen();
    sharedClient = createClientContext(
      MockOntologyGenerated,
      "https://stack.palantir.com",
      () => "myAccessToken",
      USER_AGENT,
      globalThis.fetch,
    );
    sharedBulkActions = createBulkActionProxy<typeof MockOntologyGenerated>(
      sharedClient,
    );
  });

  beforeEach(() => {
    fetch = vi.fn();
    client = createClientContext(
      MockOntology,
      MOCK_ORIGIN,
      () => "Token",
      USER_AGENT,
      fetch,
    );
    actions = createActionProxy<typeof MockOntology>(client);
    bulkActions = createBulkActionProxy<typeof MockOntology>(client);
    batchActions = createBatchActionProxy<typeof MockOntology>(client);
  });

  describe("type tests", () => {
    it("creates proper parameters", async () => {
      expectTypeOf<Parameters<typeof actions.createTask>>().toEqualTypeOf<
        [
          {
            id?: number;
          },
          ActionExecutionOptions?,
        ]
      >();

      expectTypeOf<Parameters<typeof bulkActions.createTask>>()
        .toEqualTypeOf<
          [
            {
              id?: number;
            }[],
            BulkActionExecutionOptions?,
          ]
        >();

      expectTypeOf<Parameters<typeof bulkActions.createTask>>()
        .toEqualTypeOf<
          [
            {
              id?: number;
            }[],
            BatchActionExecutionOptions?,
          ]
        >();

      expectTypeOf<Parameters<typeof batchActions.createTask>>()
        .toEqualTypeOf<
          [
            {
              id?: number;
            }[],
            BatchActionExecutionOptions?,
          ]
        >();

      expectTypeOf<typeof actions.createTask>()
        // @ts-expect-error
        .toBeCallableWith([{ id: 1 }]);

      expectTypeOf<typeof bulkActions.createTask>().toBeCallableWith([{
        id: 1,
      }], {
        // @ts-expect-error
        mode: ActionExecutionMode.VALIDATE_AND_EXECUTE,
        returnEdits: ReturnEditsMode.ALL,
      });

      expectTypeOf<typeof batchActions.createTask>().toBeCallableWith([{
        id: 1,
      }], {
        // @ts-expect-error
        mode: ActionExecutionMode.VALIDATE_AND_EXECUTE,
        returnEdits: ReturnEditsMode.ALL,
      });

      expectTypeOf<ReturnType<typeof actions.createTask>>().toMatchTypeOf<
        Promise<
          Result<
            ActionResponseFromOptions<
              ActionExecutionOptions,
              Edits<OsdkLegacyObjectFrom<typeof MockOntology, "Task">, void>
            >,
            ActionError
          >
        >
      >();

      expectTypeOf<ReturnType<typeof bulkActions.createTask>>().toMatchTypeOf<
        Promise<
          Result<
            BulkActionResponseFromOptions<
              BulkActionExecutionOptions,
              Edits<OsdkLegacyObjectFrom<typeof MockOntology, "Task">, void>
            >,
            ActionError
          >
        >
      >();

      expectTypeOf<ReturnType<typeof bulkActions.createTask>>().toMatchTypeOf<
        Promise<
          Result<
            BatchActionResponseFromOptions<
              BatchActionExecutionOptions,
              Edits<OsdkLegacyObjectFrom<typeof MockOntology, "Task">, void>
            >,
            ActionError
          >
        >
      >();

      expectTypeOf<ReturnType<typeof batchActions.createTask>>().toMatchTypeOf<
        Promise<
          Result<
            BatchActionResponseFromOptions<
              BatchActionExecutionOptions,
              Edits<OsdkLegacyObjectFrom<typeof MockOntology, "Task">, void>
            >,
            ActionError
          >
        >
      >();
    });

    it("skips empty parameters", () => {
      expectTypeOf<Parameters<typeof actions.createTodo>>().toMatchTypeOf<
        [
          ActionExecutionOptions?,
        ]
      >();

      expectTypeOf<Parameters<typeof bulkActions.createTodo>>().toEqualTypeOf<
        [
          Record<string, never>[],
          BulkActionExecutionOptions?,
        ]
      >();

      expectTypeOf<Parameters<typeof bulkActions.createTodo>>().toEqualTypeOf<
        [
          Record<string, never>[],
          BatchActionExecutionOptions?,
        ]
      >();

      expectTypeOf<Parameters<typeof batchActions.createTodo>>().toEqualTypeOf<
        [
          Record<string, never>[],
          BatchActionExecutionOptions?,
        ]
      >();
    });

    it("maps Object types correctly", () => {
      expectTypeOf<Parameters<typeof actions.updateTask>>().toMatchTypeOf<
        [
          {
            task?:
              | OsdkLegacyObjectFrom<typeof MockOntology, "Task">
              | OsdkLegacyObjectFrom<
                typeof MockOntology,
                "Task"
              >["__primaryKey"];
          },
          ActionExecutionOptions?,
        ]
      >();

      expectTypeOf<Parameters<typeof batchActions.updateTask>>().toMatchTypeOf<
        [
          {
            task?:
              | OsdkLegacyObjectFrom<typeof MockOntology, "Task">
              | OsdkLegacyObjectFrom<
                typeof MockOntology,
                "Task"
              >["__primaryKey"];
          }[],
          ActionExecutionOptions?,
        ]
      >();

      expectTypeOf<ReturnType<typeof actions.updateTask>>().toMatchTypeOf<
        Promise<
          Result<
            ActionResponseFromOptions<
              ActionExecutionOptions,
              Edits<
                void,
                OsdkLegacyObjectFrom<typeof MockOntology, "Task">
              >
            >,
            ActionError
          >
        >
      >();

      expectTypeOf<ReturnType<typeof bulkActions.updateTask>>().toMatchTypeOf<
        Promise<
          Result<
            BulkActionResponseFromOptions<
              BulkActionExecutionOptions,
              Edits<
                void,
                OsdkLegacyObjectFrom<typeof MockOntology, "Task">
              >
            >,
            ActionError
          >
        >
      >();

      expectTypeOf<ReturnType<typeof bulkActions.updateTask>>().toMatchTypeOf<
        Promise<
          Result<
            BatchActionResponseFromOptions<
              BatchActionExecutionOptions,
              Edits<
                void,
                OsdkLegacyObjectFrom<typeof MockOntology, "Task">
              >
            >,
            ActionError
          >
        >
      >();

      expectTypeOf<ReturnType<typeof batchActions.updateTask>>().toMatchTypeOf<
        Promise<
          Result<
            BatchActionResponseFromOptions<
              BatchActionExecutionOptions,
              Edits<
                void,
                OsdkLegacyObjectFrom<typeof MockOntology, "Task">
              >
            >,
            ActionError
          >
        >
      >();
    });

    describe("proxy", () => {
      it("proxies action calls with parameters", async () => {
        mockFetchResponse(fetch, {});
        const actionResponse = await actions.createTask({ id: 1 });
        expectFetchToBeCalledWithBody(
          fetch,
          `Ontology/actions/createTask/apply`,
          {
            parameters: {
              id: 1,
            },
            options: {},
          },
        );
        expect(actionResponse.type).toEqual("ok");
      });

      it("proxies action calls with no parameters and parses edits", async () => {
        mockFetchResponse(fetch, {
          edits: {
            type: "edits",
            edits: [{
              type: "addObject",
              primaryKey: 1,
              objectType: "Todo",
            }],
            addedObjectCount: 1,
            modifiedObjectsCount: 0,
            addedLinksCount: 0,
          },
        });

        const actionResponse = await actions.createTodo({
          mode: ActionExecutionMode.VALIDATE_AND_EXECUTE,
          returnEdits: ReturnEditsMode.ALL,
        });

        expectFetchToBeCalledWithBody(
          fetch,
          `Ontology/actions/createTodo/apply`,
          {
            parameters: {},
            options: {
              mode: "VALIDATE_AND_EXECUTE",
              returnEdits: "ALL",
            },
          },
        );

        const value = unwrapResultOrThrow(actionResponse);
        assert(value.edits.type === "edits");
        mockFetchResponse(fetch, getMockTodoObject());
        const loadAddedObject = await value.edits.added[0].get();

        expectFetchToBeCalledWithGet(fetch, `Ontology/objects/Todo/1`);
        const createdObject = unwrapResultOrThrow(loadAddedObject);
        expect(createdObject.__primaryKey).toEqual(
          getMockTodoObject().__primaryKey,
        );
      });
    });

    it("proxies action calls transforms arguments", async () => {
      const taskOs = createBaseOsdkObjectSet(client, "Task");
      mockFetchResponse(fetch, getMockTodoObject());
      const taskObjectResult = await taskOs.get(1);
      const taskObject = unwrapResultOrThrow(taskObjectResult);

      mockFetchResponse(fetch, {});
      const actionResponse = await actions.updateTask({
        task: taskObject,
        tasks: taskOs,
      }, {});

      expectFetchToBeCalledWithBody(
        fetch,
        `Ontology/actions/updateTask/apply`,
        {
          parameters: {
            task: 1,
            tasks: {
              type: "base",
              objectType: "Task",
            },
          },
          options: {
            mode: "VALIDATE_AND_EXECUTE",
            returnEdits: "NONE",
          },
        },
      );

      assert(actionResponse.type === "ok");
    });

    it("proxies action calls takes object primary key", async () => {
      const taskOs = createBaseOsdkObjectSet(client, "Task");
      mockFetchResponse(fetch, getMockTodoObject());

      mockFetchResponse(fetch, {});
      const actionResponse = await actions.updateTask({
        task: 1,
        tasks: taskOs,
      }, {});

      expectFetchToBeCalledWithBody(
        fetch,
        `Ontology/actions/updateTask/apply`,
        {
          parameters: {
            task: 1,
            tasks: {
              type: "base",
              objectType: "Task",
            },
          },
          options: {
            mode: "VALIDATE_AND_EXECUTE",
            returnEdits: "NONE",
          },
        },
      );

      assert(actionResponse.type === "ok");
    });

    it("has an enumerable list of actions", () => {
      const actionProxy = createActionProxy(client);
      const bulkActionProxy = createBulkActionProxy(client);
      expect(Object.getOwnPropertyNames(actionProxy)).toMatchInlineSnapshot(`
      [
        "createTask",
        "createTodo",
        "updateTask",
      ]
    `);
      expect(Object.getOwnPropertyNames(bulkActionProxy)).toMatchInlineSnapshot(
        `
      [
        "createTask",
        "createTodo",
        "updateTask",
      ]
    `,
      );
    });
  });

  it("conditionally returns edits in batch mode", async () => {
    const result = await sharedBulkActions.moveOffice([
      {
        officeId: "SEA",
        newAddress: "456 Good Place",
        newCapacity: 40,
      },
      {
        officeId: "NYC",
        newAddress: "123 Main Street",
        newCapacity: 80,
      },
    ], { returnEdits: ReturnEditsMode.ALL });

    expect(unwrapResultOrThrow(result)).toMatchInlineSnapshot(` 
   {
  "edits": {
    "added": [],
    "modified": [
      {
        "apiName": "Office",
        "fetchOneWithErrors": [Function],
        "get": [Function],
        "primaryKey": "SEA",
      },
      {
        "apiName": "Office",
        "fetchOneWithErrors": [Function],
        "get": [Function],
        "primaryKey": "NYC",
      },
    ],
    "type": "edits",
  },
}`);

    const noEditsResult = await sharedBulkActions.moveOffice([
      {
        officeId: "SEA",
        newAddress: "456 Good Place",
        newCapacity: 40,
      },
      {
        officeId: "NYC",
        newAddress: "123 Main Street",
        newCapacity: 80,
      },
    ]);

    expect(unwrapResultOrThrow(noEditsResult)).toMatchInlineSnapshot(` 
  {}
  `);
  });
});
