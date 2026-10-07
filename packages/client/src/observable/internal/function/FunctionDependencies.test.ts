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

import { addOne, Todo } from "@osdk/client.test.ontology";
import { FauxFoundry, startNodeApiServer, stubData } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import { createClient } from "../../../createClient.js";
import {
  createObservableClient,
  type ObservableClient,
} from "../../ObservableClient.js";
import { createDefer, mockObserver } from "../testUtils.js";

const defer = createDefer();

describe("Function object dependencies", () => {
  let client: ReturnType<typeof createClient>;
  let fauxFoundry: FauxFoundry;
  let observable: ObservableClient;
  let executions: number;

  beforeAll(() => {
    const setup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    ({ client, fauxFoundry } = setup);
    const ontology = fauxFoundry.getDefaultOntology();
    ontology.registerObjectType(stubData.todoWithLinkTypes);
    ontology.registerQueryType(stubData.addOneQueryType, (_request, data) => {
      executions++;
      return { value: Number(data.getObjectOrThrow(Todo.apiName, 1).text) };
    });
    return () => setup.apiServer.close();
  });

  beforeEach(() => {
    const data = fauxFoundry.getDefaultDataStore();
    data.clear();
    data.registerObject(Todo, { id: 1, text: "3" });
    data.registerObject(Todo, { id: 2, text: "7" });
    observable = createObservableClient(client);
    executions = 0;
  });

  it.each([false, true])(
    "refreshes a dependent function when a fetched object changes (already cached: %s)",
    async (alreadyCached) => {
      const dependency = await client(Todo).fetchOne(1);
      if (alreadyCached) {
        let loaded = false;
        defer(
          observable.observeObject(
            Todo,
            1,
            {},
            {
              ...mockObserver(),
              next: (payload) => {
                loaded = payload.status === "loaded";
              },
            },
          ),
        );
        await vi.waitFor(() => expect(loaded).toBe(true));
      }

      const results: unknown[] = [];
      defer(
        observable.observeFunction(
          addOne,
          { n: 2 },
          {
            dependsOnObjects: [dependency],
            dedupeInterval: 0,
          },
          {
            ...mockObserver(),
            next: (payload) => {
              if (payload.status === "loaded") results.push(payload.result);
            },
          },
        ),
      );
      await vi.waitFor(() => expect(results).toEqual([3]));

      let unrelatedLoaded = false;
      defer(
        observable.observeObject(
          Todo,
          2,
          {},
          {
            ...mockObserver(),
            next: (payload) => {
              unrelatedLoaded = payload.status === "loaded";
            },
          },
        ),
      );
      await vi.waitFor(() => expect(unrelatedLoaded).toBe(true));
      expect(results).toEqual([3]);
      expect(executions).toBe(1);

      const data = fauxFoundry.getDefaultDataStore();
      data.replaceObjectOrThrow({
        ...data.getObjectOrThrow(Todo.apiName, 1),
        text: "9",
      });
      defer(
        observable.observeObject(
          Todo,
          1,
          { mode: "force" },
          {
            ...mockObserver(),
          },
        ),
      );
      await vi.waitFor(() => expect(results).toEqual([3, 9]));
      expect(executions).toBe(2);
    },
  );
});
