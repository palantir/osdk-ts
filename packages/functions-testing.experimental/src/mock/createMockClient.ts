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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  PageResult,
} from "@osdk/api";
import type { Client } from "@osdk/client";
import invariant from "tiny-invariant";
import { type Call, createMockObjectSet, deepEqual } from "./MockObjectSet.js";

type Stub = { objectType: string; calls: Call[]; value: unknown };

type IsOsdkObject<T> = T extends { $apiName: string } ? true : false;

export interface FetchPageStubBuilder<T> {
  thenReturnObjects(objects: T[]): void;
}

export interface FetchOneStubBuilder<T> {
  thenReturnObject(object: T): void;
}

export interface AggregateStubBuilder<T> {
  thenReturnAggregation(result: T): void;
}

export type StubBuilderFor<T> = T extends PageResult<infer U>
  ? FetchPageStubBuilder<U>
  : IsOsdkObject<T> extends true ? FetchOneStubBuilder<T>
  : AggregateStubBuilder<T>;

export type StubClient = {
  <Q extends ObjectTypeDefinition>(o: Q): ObjectSet<Q>;
  <Q extends InterfaceDefinition>(o: Q): ObjectSet<Q>;
};

export type StubPatternCallback<T> = (client: StubClient) => Promise<T>;

export interface MockClient extends Client {
  when<T>(callback: StubPatternCallback<T>): StubBuilderFor<T>;
  clearStubs(): void;
}

export function createMockClient(): MockClient {
  const stubs: Stub[] = [];

  const resolve = (objectType: string, calls: Call[]): unknown => {
    for (const stub of stubs) {
      if (stub.objectType !== objectType) continue;
      if (stub.calls.length !== calls.length) continue;
      if (
        stub.calls.every(([m, a], i) =>
          calls[i][0] === m && deepEqual(a, calls[i][1])
        )
      ) {
        const terminal = calls[calls.length - 1][0];
        if (terminal === "fetchPage") {
          return { data: stub.value, nextPageToken: undefined };
        }
        return stub.value;
      }
    }

    // TODO: Include more info about the stub and existing stubs in this error message
    const msg = `No stub for request\n`;
    throw new Error(msg);
  };

  const mockClient = ((def: ObjectOrInterfaceDefinition) => {
    invariant("apiName" in def, "Expected ObjectType or Interface");
    return createMockObjectSet(def, (calls) => resolve(def.apiName, calls));
  }) as MockClient;

  mockClient.when = <T>(
    callback: StubPatternCallback<T>,
  ): StubBuilderFor<T> => {
    let captured: { objectType: string; calls: Call[] } | undefined;

    const stubClient: StubClient = (def: ObjectOrInterfaceDefinition) => {
      return createMockObjectSet(def, (calls) => {
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

  mockClient.clearStubs = () => {
    stubs.length = 0;
  };

  mockClient.fetchMetadata = async () => {
    invariant(false, "fetchMetadata is not supported in mocks");
  };

  // TODO: Implement WriteableClient operations

  return mockClient;
}
