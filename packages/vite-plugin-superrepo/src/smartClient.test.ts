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
import { createClient } from "@osdk/client";
import type {
  FailedResult,
  Value,
} from "@osdk/client.unstable/functionExecutor";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { smartClient } from "./public/smartClient.js";

const query: QueryDefinition<
  (args: Record<string, unknown>) => Promise<unknown>
> = { type: "query", apiName: "localFunction" };

const locator = { typeId: "employee", primaryKey: { id: 1 } };

const valueFixtures = {
  null: { value: { type: "null", null: {} }, expected: undefined },
  binary: {
    value: { type: "binary", binary: "aGVsbG8=" },
    expected: "aGVsbG8=",
  },
  boolean: { value: { type: "boolean", boolean: false }, expected: false },
  byte: { value: { type: "byte", byte: 1 }, expected: 1 },
  integer: { value: { type: "integer", integer: 2 }, expected: 2 },
  long: { value: { type: "long", long: 3 }, expected: 3 },
  float: { value: { type: "float", float: 1.5 }, expected: 1.5 },
  double: { value: { type: "double", double: "NaN" }, expected: "NaN" },
  short: { value: { type: "short", short: 4 }, expected: 4 },
  string: { value: { type: "string", string: "hello" }, expected: "hello" },
  date: { value: { type: "date", date: "2026-09-30" }, expected: "2026-09-30" },
  decimal: { value: { type: "decimal", decimal: "1.23" }, expected: "1.23" },
  timestamp: {
    value: { type: "timestamp", timestamp: "2026-09-30T12:00:00Z" },
    expected: "2026-09-30T12:00:00Z",
  },
  attachment: {
    value: { type: "attachment", attachment: "attachment-rid" },
    unsupported: true,
  },
  mediaReference: {
    value: {
      type: "mediaReference",
      mediaReference: {
        mimeType: "image/png",
        reference: {
          type: "mediaSetItem",
          mediaSetItem: {
            mediaSetRid: "media-set",
            mediaItemRid: "media-item",
          },
        },
      },
    },
    unsupported: true,
  },
  list: {
    value: {
      type: "list",
      list: { values: [{ type: "integer", integer: 1 }] },
    },
    expected: [1],
  },
  set: {
    value: { type: "set", set: { values: [{ type: "string", string: "a" }] } },
    expected: ["a"],
  },
  map: {
    value: {
      type: "map",
      map: {
        entries: [
          {
            key: { type: "string", string: "answer" },
            value: { type: "integer", integer: 42 },
          },
        ],
      },
    },
    expected: { answer: 42 },
  },
  range: {
    value: {
      type: "range",
      range: {
        min: { type: "integer", integer: 1 },
        max: { type: "integer", integer: 10 },
      },
    },
    expected: { min: 1, max: 10 },
  },
  objectRid: {
    value: { type: "objectRid", objectRid: "object-rid" },
    unsupported: true,
  },
  objectLocator: {
    value: { type: "objectLocator", objectLocator: locator },
    unsupported: true,
  },
  objectLocatorWithData: {
    value: {
      type: "objectLocatorWithData",
      objectLocatorWithData: {
        ...locator,
        properties: { name: { type: "string", string: "Alice" } },
      },
    },
    unsupported: true,
  },
  objectSetRid: {
    value: { type: "objectSetRid", objectSetRid: "object-set-rid" },
    unsupported: true,
  },
  ontologyEdit: {
    value: {
      type: "ontologyEdit",
      ontologyEdit: { type: "deleteObject", deleteObject: { locator } },
    },
    unsupported: true,
  },
  ontologyEditV2: {
    value: {
      type: "ontologyEditV2",
      ontologyEditV2: {
        type: "deleteObject",
        deleteObject: {
          locator: { type: "idObjectLocator", idObjectLocator: locator },
        },
      },
    },
    unsupported: true,
  },
  action: {
    value: {
      type: "action",
      action: {
        actionTypeRid: "action-rid",
        parameters: { name: { type: "string", string: "Alice" } },
      },
    },
    unsupported: true,
  },
  twoDimensionalAggregation: {
    value: {
      type: "twoDimensionalAggregation",
      twoDimensionalAggregation: {
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
    },
    expected: [{ key: { startValue: 1, endValue: undefined }, value: 2.5 }],
  },
  threeDimensionalAggregation: {
    value: {
      type: "threeDimensionalAggregation",
      threeDimensionalAggregation: {
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
    },
    expected: [{ key: "team", groups: [{ key: false, value: 3 }] }],
  },
  customType: {
    value: {
      type: "customType",
      customType: {
        nested: {
          type: "list",
          list: { values: [{ type: "null", null: {} }] },
        },
      },
    },
    expected: { nested: [undefined] },
  },
  user: { value: { type: "user", user: "alice" }, expected: "alice" },
  group: { value: { type: "group", group: "team" }, expected: "team" },
  principal: {
    value: { type: "principal", principal: { type: "user", user: "alice" } },
    unsupported: true,
  },
  notification: {
    value: {
      type: "notification",
      notification: {
        emailNotificationContent: {
          type: "basic",
          basic: { subject: "Subject", body: "Body", links: [] },
        },
        shortNotification: {
          type: "basic",
          basic: { heading: "Heading", content: "Content", links: [] },
        },
      },
    },
    unsupported: true,
  },
  modelGraphRid: {
    value: { type: "modelGraphRid", modelGraphRid: "model-graph-rid" },
    unsupported: true,
  },
  geoShape: {
    value: {
      type: "geoShape",
      geoShape: { type: "Point", coordinates: [1, 2] },
    },
    expected: { type: "Point", coordinates: [1, 2] },
  },
  timeSeriesRid: {
    value: { type: "timeSeriesRid", timeSeriesRid: "time-series-rid" },
    unsupported: true,
  },
  marking: {
    value: {
      type: "marking",
      marking: {
        subValue: { type: "mandatoryMarking", mandatoryMarking: "marking-id" },
      },
    },
    unsupported: true,
  },
  vector: {
    value: {
      type: "vector",
      vector: {
        values: [
          { type: "double", double: 1.5 },
          { type: "double", double: "Infinity" },
        ],
      },
    },
    expected: [1.5, "Infinity"],
  },
} satisfies {
  [K in Value["type"]]: { value: Extract<Value, { type: K }> } & (
    | { expected: unknown }
    | { unsupported: true }
  );
};

const failureFixtures = {
  runtimeError: {
    value: {
      type: "runtimeError",
      runtimeError: {
        stacktrace: "at localFunction",
        parameters: { key: "value" },
      },
    },
    expected:
      'Function execution failed (runtimeError): {"stacktrace":"at localFunction","parameters":{"key":"value"}}',
  },
  resourceLimitExceeded: {
    value: {
      type: "resourceLimitExceeded",
      resourceLimitExceeded: {
        type: "timeout",
        timeout: { timeElapsedMs: 2000, timeLimitMs: 1000 },
      },
    },
    expected:
      'Function execution failed (resourceLimitExceeded): {"type":"timeout","timeout":{"timeElapsedMs":2000,"timeLimitMs":1000}}',
  },
  invalidInputs: {
    value: {
      type: "invalidInputs",
      invalidInputs: [
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
    },
    expected:
      'Function execution failed (invalidInputs): [{"name":"first","details":{"type":"missingArgument","missingArgument":{}}},{"name":"second","details":{"type":"missingField","missingField":{"fieldPath":"address.city"}}}]',
  },
  invalidOutput: {
    value: {
      type: "invalidOutput",
      invalidOutput: {
        details: {
          type: "numericSizeExceeded",
          numericSizeExceeded: { receivedValue: 256 },
        },
      },
    },
    expected:
      'Function execution failed (invalidOutput): {"details":{"type":"numericSizeExceeded","numericSizeExceeded":{"receivedValue":256}}}',
  },
  dataLoadingNotAllowed: {
    value: {
      type: "dataLoadingNotAllowed",
      dataLoadingNotAllowed: { entityType: { type: "object", object: {} } },
    },
    expected:
      'Function execution failed (dataLoadingNotAllowed): {"entityType":{"type":"object","object":{}}}',
  },
  undeclaredObjectTypesEdited: {
    value: {
      type: "undeclaredObjectTypesEdited",
      undeclaredObjectTypesEdited: {
        undeclaredEditedObjectTypes: { employee: {} },
      },
    },
    expected:
      'Function execution failed (undeclaredObjectTypesEdited): {"undeclaredEditedObjectTypes":{"employee":{}}}',
  },
  structuredError: {
    value: {
      type: "structuredError",
      structuredError: {
        name: "Validation",
        value: { type: "string", string: "bad" },
      },
    },
    expected:
      'Function execution failed (structuredError): {"name":"Validation","value":{"type":"string","string":"bad"}}',
  },
  deploymentError: {
    value: {
      type: "deploymentError",
      deploymentError: {
        type: "functionVersionNotDeployed",
        functionVersionNotDeployed: { deployedVersions: ["1.0.0"] },
      },
    },
    expected:
      'Function execution failed (deploymentError): {"type":"functionVersionNotDeployed","functionVersionNotDeployed":{"deployedVersions":["1.0.0"]}}',
  },
  consistentSnapshotError: {
    value: {
      type: "consistentSnapshotError",
      consistentSnapshotError: {
        errorName: { type: "expired", expired: {} },
        snapshotId: "snapshot-id",
      },
    },
    expected:
      'Function execution failed (consistentSnapshotError): {"errorName":{"type":"expired","expired":{}},"snapshotId":"snapshot-id"}',
  },
  userCanceled: {
    value: { type: "userCanceled", userCanceled: {} },
    expected: "Function execution failed (userCanceled): {}",
  },
  userFacingError: {
    value: {
      type: "userFacingError",
      userFacingError: { message: "Use a valid input" },
    },
    expected: "Use a valid input",
  },
  functionNotSupportedWithTransaction: {
    value: {
      type: "functionNotSupportedWithTransaction",
      functionNotSupportedWithTransaction: {
        message: "Transactions are not supported",
      },
    },
    expected: "Transactions are not supported",
  },
} satisfies {
  [K in FailedResult["type"]]: {
    value: Extract<FailedResult, { type: K }>;
    expected: string;
  };
};

describe.each(["typescript", "python"] as const)("%s runtime", (runtime) => {
  const executeEndpoint =
    runtime === "python"
      ? "/local-python-functions/api/functions/runtime/execute"
      : "/local-functions/functions-typescript-runtime/api/functions/runtime/execute";
  let executionResult: unknown;
  let client: Client;
  let originalClient: Client;
  let remoteOutput: unknown;
  let remoteValue: unknown;
  const remoteFetch = vi.fn<typeof fetch>();

  beforeEach(() => {
    executionResult = { type: "success", success: {} };
    remoteOutput = { type: "string" };
    remoteValue = "hello";
    remoteFetch.mockReset();
    remoteFetch.mockImplementation((input) => {
      const url = String(input);
      if (url.endsWith(`/queryTypes/${query.apiName}`)) {
        return Promise.resolve(
          Response.json({
            apiName: query.apiName,
            rid: "ri.function-registry.main.function.fn",
            version: "1.0.0",
            parameters: {},
            output: remoteOutput,
          }),
        );
      }
      if (url.endsWith(`/queries/${query.apiName}/execute`)) {
        return Promise.resolve(Response.json({ value: remoteValue }));
      }
      if (url.endsWith("/objectTypes/Employee/fullMetadata?preview=true")) {
        return Promise.resolve(
          Response.json({
            objectType: {
              apiName: "Employee",
              primaryKey: "id",
              titleProperty: "id",
              icon: { type: "blueprint", color: "blue", name: "person" },
              properties: { id: { dataType: { type: "integer" } } },
              rid: "ri.ontology.main.object-type.employee",
              status: "ACTIVE",
            },
            linkTypes: [],
            implementsInterfaces: [],
            implementsInterfaces2: {},
            sharedPropertyTypeMapping: {},
          }),
        );
      }
      throw new Error(`Unexpected remote request: ${url}`);
    });
    originalClient = createClient(
      "https://example.test",
      "ri.ontology.main.ontology.test",
      () => Promise.resolve("token"),
      undefined,
      remoteFetch,
    );
    client = smartClient(originalClient);
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

  it.each(Object.entries(valueFixtures))(
    "handles %s",
    async (type, fixture) => {
      executionResult = {
        type: "success",
        success: { returnValue: fixture.value },
      };
      const result = client(query).executeFunction({});
      if ("unsupported" in fixture) {
        await expect(result).rejects.toThrow(
          `Unsupported return value type from local runtime: ${type}. Return primitive values or collections of primitives instead.`,
        );
      } else {
        await expect(result).resolves.toEqual(fixture.expected);
      }
      expect(remoteFetch).not.toHaveBeenCalled();
    },
  );

  it.each([
    ["string", { type: "string" }, "hello"],
    ["list", { type: "array", subType: { type: "integer" } }, [1]],
    ["set", { type: "set", subType: { type: "string" } }, ["a"]],
    [
      "map",
      {
        type: "entrySet",
        keyType: { type: "string" },
        valueType: { type: "integer" },
      },
      [{ key: "answer", value: 42 }],
    ],
    [
      "twoDimensionalAggregation",
      {
        type: "twoDimensionalAggregation",
        keyType: { type: "range", subType: { type: "integer" } },
        valueType: { type: "double" },
      },
      { groups: [{ key: { startValue: 1 }, value: 2.5 }] },
    ],
    [
      "threeDimensionalAggregation",
      {
        type: "threeDimensionalAggregation",
        keyType: { type: "string" },
        valueType: {
          keyType: { type: "boolean" },
          valueType: { type: "double" },
        },
      },
      { groups: [{ key: "team", groups: [{ key: false, value: 3 }] }] },
    ],
  ] as const)(
    "matches the OSDK response for %s",
    async (type, output, value) => {
      remoteOutput = output;
      remoteValue = value;
      executionResult = {
        type: "success",
        success: { returnValue: valueFixtures[type].value },
      };
      const remote = await originalClient(query).executeFunction({});
      expect(remote).toEqual(valueFixtures[type].expected);
      await expect(client(query).executeFunction({})).resolves.toEqual(remote);
      expect(remoteFetch).toHaveBeenCalledTimes(2);
    },
  );

  it("rejects object locators that would require OSDK object hydration", async () => {
    remoteOutput = { type: "object", objectTypeApiName: "Employee" };
    remoteValue = 1;
    await expect(
      originalClient(query).executeFunction({}),
    ).resolves.toMatchObject({
      $apiName: "Employee",
      $primaryKey: 1,
      $objectSpecifier: "Employee:1",
    });
    executionResult = {
      type: "success",
      success: { returnValue: valueFixtures.objectLocator.value },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Unsupported return value type from local runtime: objectLocator. Return primitive values or collections of primitives instead.",
    );
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

  it.each(Object.entries(failureFixtures))(
    "retains %s details",
    async (_type, fixture) => {
      executionResult = { type: "failed", failed: fixture.value };
      await expect(client(query).executeFunction({})).rejects.toThrow(
        fixture.expected,
      );
    },
  );

  it("preserves runtime error messages without parameters", async () => {
    executionResult = {
      type: "failed",
      failed: {
        type: "runtimeError",
        runtimeError: { message: "Use a valid input" },
      },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Use a valid input",
    );
  });

  it("describes a failure with no payload", async () => {
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
        runtimeError: {
          message: "",
          stacktrace: "at localFunction",
          parameters: {},
        },
      },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      'Function execution failed (runtimeError): {"message":"","stacktrace":"at localFunction","parameters":{}}',
    );
  });

  it("retains unknown failure details", async () => {
    executionResult = {
      type: "failed",
      failed: { type: "futureFailure", futureFailure: { reason: "details" } },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      'Function execution failed: {"type":"futureFailure","futureFailure":{"reason":"details"}}',
    );
  });

  it.each([
    null,
    {},
    { type: "success", success: [] },
    { type: "futureResult", futureResult: {} },
  ])("rejects malformed execution result %j", async (result) => {
    executionResult = result;
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Unexpected response format from local runtime",
    );
  });

  it.each([[], {}, { type: 1 }])(
    "rejects malformed failure %j",
    async (failed) => {
      executionResult = { type: "failed", failed };
      await expect(client(query).executeFunction({})).rejects.toThrow(
        "Unexpected response format from local runtime",
      );
    },
  );

  it("rejects unknown tags in nested values", async () => {
    executionResult = {
      type: "success",
      success: {
        returnValue: {
          type: "list",
          list: { values: [{ type: "futureType", futureType: {} }] },
        },
      },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Unsupported return value from local runtime",
    );
  });

  it.each([
    "list",
    "set",
    "map",
    "vector",
    "twoDimensionalAggregation",
    "threeDimensionalAggregation",
  ])("decodes an omitted empty %s collection", async (type) => {
    executionResult = {
      type: "success",
      success: { returnValue: { type, [type]: {} } },
    };
    await expect(client(query).executeFunction({})).resolves.toEqual(
      type === "map" ? {} : [],
    );
  });

  it("rejects unknown value tags", async () => {
    executionResult = {
      type: "success",
      success: { returnValue: { type: "futureType", futureType: {} } },
    };
    await expect(client(query).executeFunction({})).rejects.toThrow(
      "Unsupported return value from local runtime",
    );
  });
});
