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

import { createThinClient, type ThinClient } from "@osdk/api";
import type { MockedFunction } from "vitest";
import { assert, beforeEach, describe, expect, it, vi } from "vitest";
import { ActionExecutionMode, ReturnEditsMode } from "../ontology-runtime";
import {
  expectFetchToBeCalledWithBody,
  expectFetchToBeCalledWithGet,
  mockFetchResponse,
} from "../util/test/fetchUtils";
import { MockOntology } from "../util/test/mockOntology";
import { MOCK_ORIGIN } from "../util/test/mocks/mockMetadata";
import { mockTodoObject } from "../util/test/mocks/mockObjects";
import { unwrapResultOrThrow } from "../util/test/resultUtils";
import { Ontology } from ".";

describe(Ontology, () => {
  let fetch: MockedFunction<typeof globalThis.fetch>;
  let client: ThinClient<typeof MockOntology>;
  beforeEach(() => {
    fetch = vi.fn();
    client = createThinClient(
      MockOntology,
      MOCK_ORIGIN,
      () => "Token",
      fetch,
    );
  });

  describe("Actions", () => {
    it("proxies action calls with parameters", async () => {
      const ontology = new Ontology(client);
      mockFetchResponse(fetch, {});
      const actionResponse = await ontology.actions.createTask({ id: 1 });
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
      const ontology = new Ontology(client);
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

      const actionResponse = await ontology.actions.createTodo({
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
      mockFetchResponse(fetch, mockTodoObject);
      const loadAddedObject = await value.edits.added[0].get();

      expectFetchToBeCalledWithGet(fetch, `Ontology/objects/Todo/1`);
      const createdObject = unwrapResultOrThrow(loadAddedObject);
      expect(createdObject.__primaryKey).toEqual(mockTodoObject.__primaryKey);
    });
  });
});
