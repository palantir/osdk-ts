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

import { objectTypeWithAllPropertyTypes } from "@osdk/client.test.ontology";
import { FauxFoundry, startNodeApiServer, stubData } from "@osdk/shared.test";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

import { createClient } from "../../../createClient.js";
import {
  createObservableClient,
  type ObservableClient,
  type ObserveObjectsCallbackArgs,
} from "../../ObservableClient.js";
import { createDefer, mockObserver } from "../testUtils.js";

const defer = createDefer();

describe("Negated list filters", () => {
  let client: ReturnType<typeof createClient>;
  let fauxFoundry: FauxFoundry;
  let observable: ObservableClient;

  beforeAll(() => {
    const setup = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    ({ client, fauxFoundry } = setup);
    fauxFoundry.getDefaultOntology().registerObjectType({
      ...stubData.objectTypeWithAllPropertyTypesWithLinkTypes,
      linkTypes: [],
    });
    return () => setup.apiServer.close();
  });

  beforeEach(() => {
    const data = fauxFoundry.getDefaultDataStore();
    data.clear();
    data.registerObject(objectTypeWithAllPropertyTypes, {
      id: 1,
      stringArray: [],
    });
    observable = createObservableClient(client);
  });

  it("asks the server to confirm membership under a negated unsupported filter", async () => {
    let current:
      | ObserveObjectsCallbackArgs<typeof objectTypeWithAllPropertyTypes>
      | undefined;
    defer(
      observable.observeList(
        {
          type: objectTypeWithAllPropertyTypes,
          where: { $not: { stringArray: { $contains: "excluded" } } },
        },
        {
          ...mockObserver(),
          next: (payload) => {
            current = payload;
          },
        },
      ),
    );
    await vi.waitFor(() => expect(current?.status).toBe("loaded"));
    expect(current?.resolvedList?.map((object) => object.$primaryKey)).toEqual([
      1,
    ]);

    const data = fauxFoundry.getDefaultDataStore();
    data.replaceObjectOrThrow({
      ...data.getObjectOrThrow(objectTypeWithAllPropertyTypes.apiName, 1),
      stringArray: ["excluded"],
    });
    defer(
      observable.observeObject(
        objectTypeWithAllPropertyTypes,
        1,
        {
          mode: "force",
        },
        mockObserver(),
      ),
    );
    await vi.waitFor(() => {
      expect(current?.status).toBe("loaded");
      expect(
        current?.resolvedList?.map((object) => object.$primaryKey),
      ).toEqual([]);
    });
  });
});
