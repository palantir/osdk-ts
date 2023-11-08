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
import type {
  ApplyActionRequestV2,
  SyncApplyActionResponseV2,
} from "@osdk/gateway/types";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ActionExecutionMode, ReturnEditsMode } from "..";
import { MockOntology } from "../util/test/mockOntology";
import { Ontology } from ".";

describe(Ontology, () => {
  const origin = "https://mock.com";
  const baseUrl = `${origin}/api/v2/ontologies/`;

  let fetch: MockedFunction<typeof globalThis.fetch>;
  let client: ThinClient<typeof MockOntology>;
  beforeEach(() => {
    fetch = vi.fn();
    client = createThinClient(
      MockOntology,
      origin,
      () => "Token",
      fetch,
    );
  });

  it("proxies action calls with parameters", async () => {
    const ontology = new Ontology(client);
    mockApplyActionResponse({});
    const actionResponse = await ontology.actions.createTask({ id: 1 });
    expect(fetch).toBeCalledWith(
      ...expectedFetchBody(`Ontology/actions/createTask/apply`, {
        parameters: {
          id: 1,
        },
        options: {},
      }),
    );
  });

  it("proxies action calls with no parameters", async () => {
    const ontology = new Ontology(client);
    mockApplyActionResponse({});
    const actionResponse = await ontology.actions.createTodo({
      mode: ActionExecutionMode.VALIDATE_AND_EXECUTE,
      returnEdits: ReturnEditsMode.ALL,
    });
    expect(fetch).toBeCalledWith(
      ...expectedFetchBody(`Ontology/actions/createTodo/apply`, {
        parameters: {},
        options: {
          mode: "VALIDATE_AND_EXECUTE",
          returnEdits: "ALL",
        },
      }),
    );
  });

  function mockApplyActionResponse(response: SyncApplyActionResponseV2) {
    fetch.mockResolvedValue({
      json: () => Promise.resolve(response),
      status: 200,
      ok: true,
    } as any);
  }

  function expectedFetchBody(
    endpoint: string,
    body: ApplyActionRequestV2,
  ): [string, RequestInit] {
    return [
      `${baseUrl}${endpoint}`,
      {
        body: JSON.stringify(body),
        headers: expect.anything(),
        method: "POST",
      },
    ];
  }
});
