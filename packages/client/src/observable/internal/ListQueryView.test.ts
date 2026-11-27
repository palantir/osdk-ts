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

import { BehaviorSubject } from "rxjs";
import { describe, expect, it, vi } from "vitest";

import type { BaseListPayloadShape } from "./base-list/BaseListQuery.js";
import { ListQueryView, type ListQueryViewTarget } from "./ListQueryView.js";

const PAGE_SIZE = 20;

function observeListView(
  cachedCount: number,
  resolvedCount: number,
  hasMorePages = true,
) {
  const payload: BaseListPayloadShape = {
    resolvedList: Array.from({ length: resolvedCount }, (_, index) => index),
    hasMore: hasMorePages,
    fetchMore: async () => {},
    status: "loaded",
  };
  const subject = new BehaviorSubject(payload);
  const fetchMore = vi.fn(async () => {});
  const query: ListQueryViewTarget<BaseListPayloadShape> = {
    subscribe: (observer) => subject.subscribe(observer),
    registerFetchPageSize: vi.fn(),
    unregisterFetchPageSize: vi.fn(),
    getLoadedCount: () => cachedCount,
    hasMorePages: () => hasMorePages,
    notifySubscribers: vi.fn(),
    fetchMore,
  };
  const view = new ListQueryView(query, PAGE_SIZE);
  const received: BaseListPayloadShape[] = [];
  const subscription = view.subscribe({
    next: (value) => received.push(value),
    error: vi.fn(),
    complete: vi.fn(),
  });

  const firstPayload = received[0];
  if (firstPayload == null) {
    throw new Error("Expected the initial list payload");
  }
  return { firstPayload, received, fetchMore, subscription };
}

describe("ListQueryView manual fetchMore with page size 20", () => {
  it.each([
    {
      name: "fetches when the cache has only the first page",
      hasMorePages: true,
      shouldFetch: true,
    },
    {
      name: "does not fetchMore when there is only one page",
      hasMorePages: false,
      shouldFetch: false,
    },
  ])("$name", async ({ hasMorePages, shouldFetch }) => {
    const { firstPayload, fetchMore, subscription } = observeListView(
      20,
      20,
      hasMorePages,
    );

    await firstPayload.fetchMore();

    expect(fetchMore).toHaveBeenCalledTimes(shouldFetch ? 1 : 0);
    subscription.unsubscribe();
  });

  it("reuses cached entries when the resolved list fills the next page", async () => {
    const { firstPayload, received, fetchMore, subscription } = observeListView(
      40,
      40,
    );

    await firstPayload.fetchMore();

    expect(fetchMore).not.toHaveBeenCalled();
    expect(received).toHaveLength(2);
    expect(received[1]?.resolvedList).toHaveLength(40);
    subscription.unsubscribe();
  });

  it("fetches on the first click when deleted entries leave the visible page short", async () => {
    const { firstPayload, fetchMore, subscription } = observeListView(40, 39);
    expect(firstPayload.resolvedList).toHaveLength(20);
    expect(fetchMore).not.toHaveBeenCalled();

    await firstPayload.fetchMore();

    expect(fetchMore).toHaveBeenCalledOnce();
    subscription.unsubscribe();
  });
});
