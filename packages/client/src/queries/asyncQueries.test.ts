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

import { __EXPERIMENTAL__NOT_SUPPORTED_YET__executeFunctionAsync as asyncFunctions } from "@osdk/api/unstable";
import { addOne, queryAcceptsObject } from "@osdk/client.test.ontology";
import {
  LegacyFauxFoundry,
  msw,
  type SetupServer,
  startNodeApiServer,
} from "@osdk/shared.test";
import pDefer from "p-defer";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { withScenario } from "../scenarios/withScenario.js";

describe("executeFunctionAsync", () => {
  const fauxFoundry = new LegacyFauxFoundry();
  const executionId = "job/1+=";
  const executionPath = `executions/${encodeURIComponent(executionId)}`;
  let client: Client;
  let auth: () => Promise<string>;
  let apiServer: SetupServer;
  let submit: ReturnType<typeof mockPost>;
  let poll: ReturnType<typeof mockPost>;
  let cancel: ReturnType<typeof mockPost>;

  function mockPost(path: string, response: Record<string, unknown>) {
    const handler = vi.fn<(request: Request) => Response | Promise<Response>>(
      () => msw.HttpResponse.json(response),
    );
    apiServer.use(
      msw.http.post(
        `${fauxFoundry.baseUrl}api/v2/functions/${path}`,
        ({ request }) => handler(request),
      ),
    );
    return handler;
  }

  beforeAll(() => {
    ({ client, auth, apiServer } = startNodeApiServer(
      fauxFoundry,
      createClient,
    ));
    return () => apiServer.close();
  });

  beforeEach(() => {
    submit = mockPost("queries/:name/executeAsync", {
      type: "submitted",
      executionId,
    });
    poll = mockPost(`${executionPath}/getResult`, { type: "running" });
    cancel = mockPost(`${executionPath}/cancel`, { id: executionId });
  });
  afterEach(() => apiServer.resetHandlers());

  it("decodes an immediate result without polling or canceling", async () => {
    submit.mockReturnValueOnce(
      msw.HttpResponse.json({ type: "completed", value: 50031 }),
    );
    const execution = await client(asyncFunctions).executeFunctionAsync(
      queryAcceptsObject,
      {
        object: { $apiName: "Employee", $primaryKey: 50030 },
      },
    );
    expect(execution.executionId).toBeUndefined();
    expect(await execution.getResult()).toMatchObject({
      type: "succeeded",
      value: { $apiName: "Employee", $primaryKey: 50031 },
    });
    await execution.cancel();
    expect(poll).not.toHaveBeenCalled();
    expect(cancel).not.toHaveBeenCalled();
  });

  it("polls on the submission branch and caches the decoded result", async () => {
    const branch = "feature/test";
    const branchClient = createClient(
      fauxFoundry.baseUrl,
      fauxFoundry.defaultOntologyRid,
      auth,
      {
        UNSTABLE_DO_NOT_USE_BRANCH: branch,
      },
    );
    const execution = await branchClient(asyncFunctions).executeFunctionAsync(
      queryAcceptsObject,
      {
        object: { $apiName: "Employee", $primaryKey: 50030 },
      },
    );
    expect(execution.executionId).toBe(executionId);
    expect(await submit.mock.calls[0][0].json()).toMatchObject({
      branch,
      parameters: { object: 50030 },
    });
    expect(await execution.getResult()).toEqual({ type: "running" });
    poll.mockReturnValueOnce(
      msw.HttpResponse.json({ type: "succeeded", value: 50031 }),
    );
    const result = await execution.getResult({ $timeoutSeconds: 30 });
    expect(await poll.mock.calls[1][0].json()).toEqual({ branch, timeout: 30 });
    expect(result).toMatchObject({
      type: "succeeded",
      value: { $apiName: "Employee", $primaryKey: 50031 },
    });
    expect(await execution.getResult()).toEqual(result);
    expect(poll).toHaveBeenCalledTimes(2);
  });

  it("selects the latest published version for an unpinned query on the default branch", async () => {
    await client(asyncFunctions).executeFunctionAsync(
      { ...addOne, isFixedVersion: false },
      { n: 2 },
    );
    expect(await submit.mock.calls[0][0].json()).toEqual({
      ontology: fauxFoundry.defaultOntologyRid,
      parameters: { n: 2 },
      latestVersionResolution: "PUBLISH_TIME",
    });
  });

  it("rejects scenario execution before making a request", async () => {
    const fetch = vi.fn<typeof globalThis.fetch>();
    const scenario = withScenario(
      createClient(
        fauxFoundry.baseUrl,
        fauxFoundry.defaultOntologyRid,
        auth,
        {},
        fetch,
      ),
      "ri.actions..scenario.test",
    );
    await expect(
      scenario(asyncFunctions).executeFunctionAsync(addOne, { n: 1 }),
    ).rejects.toThrow(/scenario/iu);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("forwards cancellation and reports the service error on the next poll", async () => {
    const execution = await client(asyncFunctions).executeFunctionAsync(
      addOne,
      { n: 1 },
    );
    await execution.cancel();
    expect(cancel).toHaveBeenCalledOnce();
    const canceled = {
      errorCode: "INVALID_ARGUMENT",
      errorName: "AsyncQueryCanceled",
      errorInstanceId: "error-id",
      parameters: {},
    };
    poll.mockReturnValueOnce(msw.HttpResponse.json(canceled, { status: 400 }));
    await expect(execution.getResult()).rejects.toMatchObject(canceled);
  });

  it("keeps a successful result when an older poll returns running", async () => {
    const execution = await client(asyncFunctions).executeFunctionAsync(
      addOne,
      { n: 2 },
    );
    const first = pDefer<Response>();
    poll.mockReturnValueOnce(first.promise);
    const pending = execution.getResult({ $timeoutSeconds: 30 });
    await vi.waitFor(() => expect(poll).toHaveBeenCalledOnce());
    await execution.cancel();
    poll.mockReturnValueOnce(
      msw.HttpResponse.json({ type: "succeeded", value: 3 }),
    );
    expect(await execution.getResult()).toEqual({
      type: "succeeded",
      value: 3,
    });
    first.resolve(msw.HttpResponse.json({ type: "running" }));
    expect(await pending).toEqual({ type: "succeeded", value: 3 });
  });
});
