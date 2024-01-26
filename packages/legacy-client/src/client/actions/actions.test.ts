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
  getMockTodoObject,
  MOCK_ORIGIN,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import {
  assert,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import {
  type ActionError,
  ActionExecutionMode,
  type ActionExecutionOptions,
  type ActionResponseFromOptions,
  type Edits,
  type Result,
  ReturnEditsMode,
} from "../..";
import {
  expectFetchToBeCalledWithBody,
  expectFetchToBeCalledWithGet,
} from "../../util/test/expectUtils";
import { unwrapResultOrThrow } from "../../util/test/resultUtils";
import { createBaseOsdkObjectSet } from "../objectSets/OsdkObjectSet";
import type { OsdkLegacyObjectFrom } from "../OsdkLegacyObject";
import { type Actions } from "./actions";
import { createActionProxy } from "./createActionProxy";

describe("Actions", () => {
  let client: ClientContext<typeof MockOntology>;
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let actions: Actions<
    typeof MockOntology
  >;

  beforeEach(() => {
    fetch = vi.fn();
    client = createClientContext(
      MockOntology,
      MOCK_ORIGIN,
      () => "Token",
      undefined,
      fetch,
    );
    actions = createActionProxy<typeof MockOntology>(client);
  });

  describe("type tests", () => {
    it("creates proper parameters", async () => {
      expectTypeOf<Parameters<typeof actions.createTask>>().toMatchTypeOf<
        [
          {
            id?: number;
          },
          ActionExecutionOptions?,
        ]
      >();

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
    });

    it("skips empty parameters", () => {
      expectTypeOf<Parameters<typeof actions.createTodo>>().toMatchTypeOf<
        [
          ActionExecutionOptions?,
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
    });
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
    expect(Object.getOwnPropertyNames(actionProxy)).toMatchInlineSnapshot(`
      [
        "createTask",
        "createTodo",
        "updateTask",
      ]
    `);
  });
});
