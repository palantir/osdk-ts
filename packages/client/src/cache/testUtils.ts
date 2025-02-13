/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  ActionDefinition,
  ActionEditResponse,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
} from "@osdk/api";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import type { Mock } from "vitest";
import { afterEach, beforeEach, expect, vi, vitest } from "vitest";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import type { Client } from "../Client.js";
import type { Entry } from "./Layer.js";
import type { ListPayload } from "./ListQuery.js";
import type { ObjectPayload } from "./ObjectQuery.js";
import type { Status, Unsubscribable } from "./Store.js";

export interface MockClientHelper {
  client: Mock<Client> & Client;

  mockApplyActionOnce: () => DeferredPromise<Partial<ActionEditResponse>>;

  mockFetchOneOnce: <Q extends ObjectTypeDefinition>() => DeferredPromise<
    Partial<
      Osdk.Instance<Q>
    >
  >;
}

export function createClientMockHelper(): MockClientHelper {
  const client = vitest.fn<typeof client>() as unknown as Mock<Client> & Client;

  function mockFetchOneOnce<
    X extends Partial<OsdkBase<any>>,
  >(): DeferredPromise<X> {
    const d = pDefer<X>();

    client.mockReturnValueOnce(
      {
        fetchOne: async (a) => {
          const r = await d.promise;
          return { ...r, $primaryKey: a };
        },
      } as Pick<ObjectSet<ObjectTypeDefinition>, "fetchOne">,
    );
    return d;
  }

  function mockApplyActionOnce(): DeferredPromise<
    Partial<ActionEditResponse>
  > {
    const d = pDefer<Partial<ActionEditResponse>>();

    client.mockReturnValueOnce(
      {
        applyAction: async (_args): Promise<ActionEditResponse> => {
          const x = await d.promise;
          return {
            type: "edits",
            addedLinks: x.addedLinks ?? [],
            addedObjects: x.addedObjects ?? [],
            deletedLinksCount: x.deletedLinksCount ?? 0,
            deletedObjectsCount: x.deletedObjectsCount ?? 0,
            editedObjectTypes: x.editedObjectTypes ?? [],
            modifiedObjects: x.modifiedObjects ?? [],
          };
        },
      } as Pick<
        ActionSignatureFromDef<ActionDefinition>,
        "applyAction"
      >,
    );
    return d;
  }

  return {
    client,
    mockApplyActionOnce,
    mockFetchOneOnce,
  };
}

export function createDefer() {
  let subscriptions: Unsubscribable[];

  beforeEach(() => {
    subscriptions = [];
  });

  afterEach(() => {
    for (const s of subscriptions) {
      s.unsubscribe();
    }
    subscriptions = [];
  });

  return function defer(x: Unsubscribable): Unsubscribable {
    subscriptions.push(x);
    return x;
  };
}

export function expectSingleListCallAndClear<T extends ObjectTypeDefinition>(
  subFn: Mock<(e: ListPayload | undefined) => void>,
  resolvedList: Osdk.Instance<T>[],
): void {
  if (vitest.isFakeTimers()) {
    vitest.runOnlyPendingTimers();
  }
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      resolvedList,
    }),
  );
  subFn.mockClear();
}

export function expectSingleObjectCallAndClear<T extends ObjectTypeDefinition>(
  subFn: Mock<(e: ObjectPayload | undefined) => void>,
  object: Osdk.Instance<T>,
  status?: Status,
): void {
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      object,
      status: status ?? expect.any(String),
    }),
  );
  subFn.mockClear();
}

export async function waitForCall(
  subFn: Mock<(e: any) => void>,
  times: number = 1,
): Promise<void> {
  await vi.waitFor(() => expect(subFn).toHaveBeenCalledTimes(times));
  expect(subFn).toHaveBeenCalledTimes(times);
}

function createSubscriptionHelper() {
}

export function mockSingleSubCallback():
  & Mock<
    (e: ObjectPayload | undefined) => void
  >
  & {
    // expectLoaded: (value: unknown) => Promise<void>;
    // expectLoading: (value: unknown) => Promise<void>;
    expectLoadingAndLoaded: (q: {
      loading?: unknown;
      loaded: unknown;
    }) => Promise<void>;
  }
{
  const ret = vitest.fn((e: ObjectPayload | undefined) => {});

  //   async function expectLoaded(value: unknown) {
  //     await waitForCall(ret);
  //     // as long as we get the loaded call we are happy
  //     expect(ret).toHaveBeenLastCalledWith(
  //       cacheEntryContaining({
  //         value,
  //         status: "loaded",
  //       }),
  //     );
  //     ret.mockClear();
  //   }

  //   async function expectLoading(value: unknown) {
  //     await waitForCall(ret);
  //     // as long as we get the loaded call we are happy
  //     expect(ret).toHaveBeenCalledExactlyOnceWith(
  //       cacheEntryContaining({
  //         value,
  //         status: "loading",
  //       }),
  //     );
  //     ret.mockClear();
  //   }

  return Object.assign(ret, {
    // expectLoaded,
    // expectLoading,
    expectLoadingAndLoaded: async (
      q: { loading?: unknown; loaded: unknown },
    ) => {
      await waitForCall(ret, 2);

      // as long as we get the loaded call we are happy
      expect(ret).toHaveBeenNthCalledWith(
        1,
        q.loading,
      );
      expect(ret).toHaveBeenNthCalledWith(
        2,
        q.loaded,
      );
      expect(ret).toHaveBeenCalledTimes(2);
      ret.mockClear();
    },
  });
}

export function mockListSubCallback(): Mock<
  (x: ListPayload | undefined) => void
> {
  return vitest.fn(
    (x: ListPayload | undefined) => {},
  );
}

export function cacheEntryContaining(x: Partial<Entry<any>>): Entry<any> {
  return {
    cacheKey: x.cacheKey ?? expect.any(Object),
    value: "value" in x
      ? x.value
      : expect.toBeOneOf([expect.anything(), undefined]),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything(),
  };
}

export function objectPayloadContaining(
  x: Partial<ObjectPayload>,
): ObjectPayload {
  return {
    object: "object" in x
      ? x.object
      : expect.toBeOneOf([expect.anything(), undefined]),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything(),
  };
}

export function listPayloadContaining(
  x: Partial<ListPayload>,
): ListPayload {
  return {
    fetchMore: x.fetchMore ?? expect.any(Function),
    hasMore: x.hasMore ?? expect.any(Boolean),
    resolvedList: x.resolvedList ?? expect.anything(),
    status: x.status ?? expect.anything(),
    listEntry: x.listEntry ?? expect.anything(),
  };
}

export function applyCustomMatchers(): void {
  expect.extend({
    toBeGreaterThan: (r: number, e: number) => {
      return {
        pass: r > e,
        message: () => `expected ${r} to be greater than ${e} (lastUpdated)`,
      };
    },
  });
}

interface CustomMatchers<R = any> {
  toBeGreaterThan: (n: number) => R;
}

interface CustomAsymmetricMatchers<R = any> {
  toBeGreaterThan: (n: number) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomAsymmetricMatchers {}
}
