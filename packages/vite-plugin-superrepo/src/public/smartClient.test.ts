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

import type { Client, QueryDefinition } from "@osdk/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { smartClient } from "./smartClient.js";

const query: QueryDefinition<
  (args: Record<string, unknown>) => Promise<unknown>
> = { type: "query", apiName: "localFunction" };

const locator = { typeId: "employee", primaryKey: { id: 1 } };
const locatorWithData = {
  ...locator,
  properties: { name: { type: "string", string: "Alice" } },
};
const edit = { type: "deleteObject", deleteObject: { locator } };
const editV2 = {
  type: "deleteObject",
  deleteObject: {
    locator: { type: "idObjectLocator", idObjectLocator: locator },
  },
};
const media = {
  mimeType: "image/png",
  reference: {
    type: "mediaSetItem",
    mediaSetItem: { mediaSetRid: "media-set", mediaItemRid: "media-item" },
  },
};
const principal = { type: "user", user: "alice" };
const marking = {
  subValue: { type: "mandatoryMarking", mandatoryMarking: "marking-id" },
};
const notification = {
  emailNotificationContent: {
    type: "basic",
    basic: { subject: "Subject", body: "Body", links: [] },
  },
  shortNotification: {
    type: "basic",
    basic: { heading: "Heading", content: "Content", links: [] },
  },
};
const geoShape = { type: "Point", coordinates: [1, 2] };

const values: [string, unknown, unknown][] = [
  ["null", {}, undefined],
  ["binary", "aGVsbG8=", "aGVsbG8="],
  ["boolean", false, false],
  ["byte", 1, 1],
  ["integer", 2, 2],
  ["long", 3, 3],
  ["float", 1.5, 1.5],
  ["double", "NaN", "NaN"],
  ["short", 4, 4],
  ["string", "hello", "hello"],
  ["date", "2026-09-30", "2026-09-30"],
  ["decimal", "1.23", "1.23"],
  ["timestamp", "2026-09-30T12:00:00Z", "2026-09-30T12:00:00Z"],
  ["attachment", "attachment-rid", "attachment-rid"],
  ["mediaReference", media, media],
  ["list", { values: [{ type: "integer", integer: 1 }] }, [1]],
  ["set", { values: [{ type: "string", string: "a" }] }, ["a"]],
  [
    "map",
    {
      entries: [
        {
          key: { type: "string", string: "answer" },
          value: { type: "integer", integer: 42 },
        },
      ],
    },
    { answer: 42 },
  ],
  [
    "range",
    {
      min: { type: "integer", integer: 1 },
      max: { type: "integer", integer: 10 },
    },
    { min: 1, max: 10 },
  ],
  ["objectRid", "object-rid", "object-rid"],
  ["objectLocator", locator, locator],
  ["objectLocatorWithData", locatorWithData, locatorWithData],
  ["objectSetRid", "object-set-rid", "object-set-rid"],
  ["ontologyEdit", edit, edit],
  ["ontologyEditV2", editV2, editV2],
  [
    "action",
    {
      actionTypeRid: "action-rid",
      parameters: { name: { type: "string", string: "Alice" } },
    },
    { actionTypeRid: "action-rid", parameters: { name: "Alice" } },
  ],
  [
    "twoDimensionalAggregation",
    {
      buckets: [
        {
          key: {
            type: "range",
            range: { min: { type: "integer", integer: 1 } },
          },
          value: { type: "double", double: 2.5 },
        },
      ],
    },
    [{ key: { startValue: 1, endValue: undefined }, value: 2.5 }],
  ],
  [
    "threeDimensionalAggregation",
    {
      buckets: [
        {
          key: { type: "string", string: "team" },
          buckets: [
            {
              key: { type: "boolean", boolean: false },
              value: { type: "double", double: 3 },
            },
          ],
        },
      ],
    },
    [{ key: "team", groups: [{ key: false, value: 3 }] }],
  ],
  [
    "customType",
    {
      nested: { type: "list", list: { values: [{ type: "null", null: {} }] } },
    },
    { nested: [undefined] },
  ],
  ["user", "alice", "alice"],
  ["group", "team", "team"],
  ["principal", principal, principal],
  ["notification", notification, notification],
  ["modelGraphRid", "model-graph-rid", "model-graph-rid"],
  ["geoShape", geoShape, geoShape],
  ["timeSeriesRid", "time-series-rid", "time-series-rid"],
  ["marking", marking, marking],
  [
    "vector",
    {
      values: [
        { type: "double", double: 1.5 },
        { type: "double", double: "Infinity" },
      ],
    },
    [1.5, "Infinity"],
  ],
];

const failures: [string, unknown][] = [
  [
    "runtimeError",
    { stacktrace: "at localFunction", parameters: { key: "value" } },
  ],
  [
    "resourceLimitExceeded",
    {
      type: "timeout",
      timeout: { timeElapsedMs: 2000, timeLimitMs: 1000 },
    },
  ],
  [
    "invalidInputs",
    [
      {
        name: "first",
        details: { type: "missingArgument", missingArgument: {} },
      },
      {
        name: "second",
        details: {
          type: "missingField",
          missingField: { fieldPath: "address.city" },
        },
      },
    ],
  ],
  [
    "invalidOutput",
    {
      details: {
        type: "numericSizeExceeded",
        numericSizeExceeded: { receivedValue: 256 },
      },
    },
  ],
  ["dataLoadingNotAllowed", { entityType: { type: "object", object: {} } }],
  [
    "undeclaredObjectTypesEdited",
    { undeclaredEditedObjectTypes: { employee: {} } },
  ],
  [
    "structuredError",
    { name: "Validation", value: { type: "string", string: "bad" } },
  ],
  [
    "deploymentError",
    {
      type: "functionVersionNotDeployed",
      functionVersionNotDeployed: { deployedVersions: ["1.0.0"] },
    },
  ],
  [
    "consistentSnapshotError",
    {
      errorName: { type: "expired", expired: {} },
      snapshotId: "snapshot-id",
    },
  ],
  ["userCanceled", {}],
];

describe.each(["typescript", "python"] as const)("%s runtime", (runtime) => {
  const executeEndpoint =
    runtime === "python"
      ? "/local-python-functions/api/functions/runtime/execute"
      : "/local-functions/functions-typescript-runtime/api/functions/runtime/execute";
  let executionResult: unknown;
  const remoteExecute = vi.fn();
  const underlyingClient = (_definition: unknown): unknown => ({
    executeFunction: remoteExecute,
  });
  const client = smartClient(underlyingClient as Client);

  beforeEach(() => {
    executionResult = { type: "success", success: {} };
    remoteExecute.mockClear();
    vi.stubGlobal(
      "fetch",
      vi.fn<typeof fetch>((input) => {
        const url = String(input);
        if (url.endsWith("/specs")) {
          const selectedRuntime = url.startsWith("/local-python-functions")
            ? "python"
            : "typescript";
          return Promise.resolve(
            Response.json({
              functions:
                selectedRuntime === runtime
                  ? [
                      {
                        locator: {
                          type: runtime,
                          [runtime]:
                            runtime === "python"
                              ? {
                                  moduleName: "functions",
                                  functionName: query.apiName,
                                }
                              : {
                                  functionName: query.apiName,
                                  sourceProvenance: {
                                    stemma: { filePath: "function.ts" },
                                  },
                                },
                        },
                      },
                    ]
                  : [],
            }),
          );
        }
        if (url.endsWith("/objectTypes")) {
          return Promise.resolve(Response.json({ data: [] }));
        }
        if (url === executeEndpoint) {
          return Promise.resolve(Response.json({ executionResult }));
        }
        throw new Error(`Unexpected request: ${url}`);
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it.each(values)("decodes %s", async (type, payload, expected) => {
    executionResult = {
      type: "success",
      success: { returnValue: { type, [type]: payload } },
    };
    await expect(client(query).executeFunction({})).resolves.toEqual(expected);
    expect(remoteExecute).not.toHaveBeenCalled();
  });

  it("preserves an absent return value", async () => {
    await expect(client(query).executeFunction({})).resolves.toBeUndefined();
  });

  it.each([{}, { min: null, max: null }])(
    "decodes unbounded ranges %j",
    async (range) => {
      executionResult = {
        type: "success",
        success: { returnValue: { type: "range", range } },
      };
      await expect(client(query).executeFunction({})).resolves.toEqual({
        min: undefined,
        max: undefined,
      });
    },
  );

  it.each(failures)("retains %s details", async (type, payload) => {
    executionResult = { type: "failed", failed: { type, [type]: payload } };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      `Function execution failed (${type}): ${JSON.stringify(payload)}`,
    );
  });

  it.each([
    "runtimeError",
    "userFacingError",
    "functionNotSupportedWithTransaction",
  ])("preserves the %s message", async (type) => {
    executionResult = {
      type: "failed",
      failed: { type, [type]: { message: "Use a valid input" } },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Use a valid input",
    );
  });

  it("reports a failure with no payload", async () => {
    executionResult = { type: "failed", failed: { type: "runtimeError" } };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Function execution failed with no error message (runtimeError)",
    );
  });

  it("retains details when the failure message is empty", async () => {
    executionResult = {
      type: "failed",
      failed: {
        type: "runtimeError",
        runtimeError: { message: "", stacktrace: "at localFunction" },
      },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      'Function execution failed (runtimeError): {"message":"","stacktrace":"at localFunction"}',
    );
  });

  it("retains unknown failure details", async () => {
    executionResult = {
      type: "failed",
      failed: { type: "futureFailure", futureFailure: { reason: "details" } },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      'Function execution failed (futureFailure): {"reason":"details"}',
    );
  });

  it.each([
    null,
    {},
    { type: "success", success: [] },
    { type: "failed", failed: [] },
    { type: "failed", failed: {} },
    { type: "futureResult", futureResult: {} },
  ])("rejects malformed execution result %j", async (result) => {
    executionResult = result;
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Unexpected response format from local runtime",
    );
  });

  it.each([
    "mediaReference",
    "objectLocator",
    "objectLocatorWithData",
    "ontologyEdit",
    "ontologyEditV2",
    "principal",
    "notification",
    "geoShape",
    "marking",
  ])("rejects malformed %s payloads", async (type) => {
    for (const payload of [undefined, null, [], "invalid"]) {
      executionResult = {
        type: "success",
        success: { returnValue: { type, [type]: payload } },
      };
      await expect(client(query).executeFunction({})).rejects.toThrow(
        `Unexpected ${type} value from local runtime`,
      );
    }
  });

  it.each([
    null,
    { type: "integer", integer: "1" },
    { type: "vector", vector: { values: [1] } },
    { type: "vector", vector: { values: [{ type: "string", string: "1" }] } },
    { type: "range", range: { min: 1 } },
    { type: "range", range: { min: { type: "boolean", boolean: false } } },
    { type: "action", action: { parameters: {} } },
    {
      type: "twoDimensionalAggregation",
      twoDimensionalAggregation: { buckets: [null] },
    },
    {
      type: "threeDimensionalAggregation",
      threeDimensionalAggregation: {
        buckets: [{ key: { type: "string", string: "a" } }],
      },
    },
    { type: "mediaReference", mediaReference: [] },
    {
      type: "list",
      list: { values: [{ type: "futureType", futureType: {} }] },
    },
  ])("rejects malformed return value %j", async (returnValue) => {
    executionResult = {
      type: "success",
      success: {
        returnValue: { type: "customType", customType: { field: returnValue } },
      },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      /(?:Unexpected|Unsupported).*local runtime/u,
    );
  });

  it("rejects unknown value tags", async () => {
    executionResult = {
      type: "success",
      success: { returnValue: { type: "futureType", futureType: {} } },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Unsupported return value type from local runtime: futureType",
    );
  });
});
