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
  ActionReturnTypeForOptions,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  OsdkBase,
} from "@osdk/api";

import type { Mock } from "vitest";
import { afterEach, beforeEach, expect, vi, vitest } from "vitest";
import type { ActionSignatureFromDef } from "../actions/applyAction.js";
import type { Client } from "../Client.js";
import type { Unsubscribable } from "./Cache.js";
import type { Entry } from "./Layer.js";
import type { ListPayload } from "./ListQuery.js";
import type { ObjectEntry } from "./ObjectQuery.js";

export interface MockClientHelper {
  client: Mock<Client> & Client;
  mockApplyActionOnce: (x: Partial<ActionEditResponse>) => void;
  mockFetchOneOnce: <X extends Partial<OsdkBase<any>>>(
    r: X,
    waitForPromise?: Promise<any>,
  ) => void;
}

export function createClientMockHelper(): MockClientHelper {
  const client = vitest.fn<typeof client>() as unknown as Mock<Client> & Client;

  function mockFetchOneOnce<X extends Partial<OsdkBase<any>>>(
    r: X,
    waitForPromise?: Promise<any>,
  ): void {
    client.mockReturnValueOnce(
      {
        fetchOne: async (a) => {
          await waitForPromise;
          return { ...r, $primaryKey: a };
        },
      } as Pick<ObjectSet<ObjectTypeDefinition>, "fetchOne">,
    );
  }

  function mockApplyActionOnce(x: Partial<ActionEditResponse>): void {
    client.mockReturnValueOnce(
      {
        applyAction: async (
          a,
        ): Promise<ActionReturnTypeForOptions<{ $returnEdits: true }>> => {
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
  subFn: Mock<(e: ObjectEntry | undefined) => void>,
  value: Osdk.Instance<T>,
): void {
  expect(subFn).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({ value: { data: value } }),
  );
  subFn.mockClear();
}

export async function waitForCall(
  subFn: Mock<(e: ObjectEntry | undefined) => void>,
  times: number = 1,
): Promise<void> {
  await vi.waitFor(() => expect(subFn).toHaveBeenCalledTimes(times));
  expect(subFn).toHaveBeenCalledTimes(times);
}

function createSubscriptionHelper() {
}

export function mockSingleSubCallback(): Mock<
  (e: ObjectEntry | undefined) => void
> {
  return vitest.fn((e: ObjectEntry | undefined) => {});
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
    value: x.value ?? expect.anything(),
    status: x.status ?? expect.anything(),
    lastUpdated: x.lastUpdated ?? expect.anything(),
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

interface CustomMatchers<R = unknown> {
  toBeGreaterThan: (n: number) => R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
