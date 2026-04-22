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

import type {
  CompileTimeMetadata,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  QueryDefinition,
} from "@osdk/api";
import { createPlatformClient } from "@osdk/client";
import invariant from "tiny-invariant";
import type {
  MockClient,
  ObjectSetStubCallback,
  StubPatternCallback,
} from "../api/MockClient.js";
import type { QueryStubBuilder, StubBuilderFor } from "../api/StubBuilders.js";
import type { StubClient } from "../api/StubClient.js";
import { type MockObjectSetBranded } from "./createMockObjectSet.js";
import {
  type Call,
  createMockObjectSetWithResolver,
  deepEqual,
  resolveStub,
  type Stub,
} from "./createMockObjectSetWithResolver.js";

type ClientStub = Stub & { objectType: string };

type QueryStub = {
  queryApiName: string;
  params: unknown;
  value?: unknown;
  error?: Error;
};

type QueryReturnTypeFromDef<Q extends QueryDefinition> = ReturnType<
  CompileTimeMetadata<Q>["signature"]
> extends Promise<infer R> ? R : never;

type QueryParamsFromDef<Q extends QueryDefinition> =
  Parameters<CompileTimeMetadata<Q>["signature"]> extends [infer P] ? P
    : undefined;

// Well-known string key used by Foundry Platform APIs to pull the
// SharedClientContext (baseUrl, tokenProvider, fetch) off a client. Matches
// the value of `symbolClientContext` in `@osdk/shared.client2`.
const SYMBOL_CLIENT_CONTEXT = "__osdkClientContext";

export function createMockClient(): MockClient {
  const stubs: ClientStub[] = [];
  const queryStubs: QueryStub[] = [];

  const resolve = (objectType: string, calls: Call[]): unknown =>
    resolveStub(
      stubs.filter(s => s.objectType === objectType),
      calls,
      `No stub for request\n`,
    );

  const resolveQuery = (queryApiName: string, params: unknown): unknown => {
    for (const stub of queryStubs) {
      if (stub.queryApiName !== queryApiName) continue;
      if (deepEqual(stub.params, params)) {
        if (stub.error !== undefined) {
          throw stub.error;
        }
        return stub.value;
      }
    }

    const msg = `No stub for query '${queryApiName}'`;
    throw new Error(msg);
  };

  const mockClient = ((
    def: ObjectOrInterfaceDefinition | QueryDefinition,
  ) => {
    invariant("apiName" in def, "Expected ObjectType, Interface, or Query");

    if (def.type === "query") {
      return {
        executeFunction: (params?: unknown) => {
          try {
            return Promise.resolve(resolveQuery(def.apiName, params));
          } catch (e) {
            return Promise.reject(e);
          }
        },
      };
    }

    return createMockObjectSetWithResolver(
      def,
      (calls) => resolve(def.apiName, calls),
    );
  }) as MockClient;

  mockClient.when = <T>(
    callback: StubPatternCallback<T>,
  ): StubBuilderFor<T> => {
    let captured: { objectType: string; calls: Call[] } | undefined;

    const stubClient: StubClient = (def: ObjectOrInterfaceDefinition) => {
      return createMockObjectSetWithResolver(def, (calls) => {
        captured = { objectType: def.apiName, calls };
        return { data: [], nextPageToken: undefined };
      });
    };

    // The callback actually runs synchronously but all terminal methods are typed as async.
    void callback(stubClient);

    const register = (value: unknown) => {
      if (captured) stubs.push({ ...captured, value });
    };

    return {
      thenReturnObjects: register,
      thenReturnObject: register,
      thenReturnAggregation: register,
    } as unknown as StubBuilderFor<T>;
  };

  mockClient.whenObjectSet = <
    Q extends ObjectOrInterfaceDefinition,
    T,
  >(
    objectSet: ObjectSet<Q>,
    callback: ObjectSetStubCallback<Q, T>,
  ): StubBuilderFor<T> => {
    let capturedCalls: Call[] | undefined;

    const capturingProxy = createMockObjectSetWithResolver(
      objectSet.$objectSetInternals.def,
      (calls) => {
        capturedCalls = calls;
        return { data: [], nextPageToken: undefined };
      },
    );

    void callback(capturingProxy);

    const branded = objectSet as unknown as MockObjectSetBranded<Q>;

    const register = (value: unknown) => {
      if (capturedCalls) {
        branded.__registerStub(capturedCalls, value);
      }
    };

    return {
      thenReturnObjects: register,
      thenReturnObject: register,
      thenReturnAggregation: register,
    } as unknown as StubBuilderFor<T>;
  };

  mockClient.whenQuery = <Q extends QueryDefinition>(
    query: Q,
    params?: QueryParamsFromDef<Q>,
  ): QueryStubBuilder<QueryReturnTypeFromDef<Q>> => {
    return {
      thenReturn: (result: QueryReturnTypeFromDef<Q>) => {
        queryStubs.push({
          queryApiName: query.apiName,
          params,
          value: result,
        });
      },
      thenThrow: (error: Error) => {
        queryStubs.push({
          queryApiName: query.apiName,
          params,
          error,
        });
      },
    };
  };

  mockClient.clearStubs = () => {
    stubs.length = 0;
    queryStubs.length = 0;
  };

  mockClient.fetchMetadata = async () => {
    invariant(false, "fetchMetadata is not supported in mocks");
  };

  // Attach a SharedClientContext so Foundry Platform API helpers
  // (e.g. `Users.getCurrent(client)`) don't crash inside `foundryPlatformFetch`
  // on an undefined `baseUrl` before any request is made. Callers intercept the
  // actual HTTP layer themselves (MSW, vi.spyOn(globalThis, "fetch"), etc.).
  Object.defineProperty(mockClient, SYMBOL_CLIENT_CONTEXT, {
    value: createPlatformClient(
      "https://mock.invalid/",
      async () => "mock-token",
    ),
    enumerable: false,
  });

  // TODO: Implement WriteableClient operations

  return mockClient;
}
