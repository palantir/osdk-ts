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

import { Subscription } from "rxjs";
import { describe, expect, it, vitest } from "vitest";

import type { Query } from "./Query.js";
import { QuerySubscription } from "./QuerySubscription.js";

describe("QuerySubscription", () => {
  it("revalidates the underlying query with force defaulting to true", async () => {
    const mockRevalidate = vitest.fn().mockResolvedValue(undefined);
    const mockQuery = {
      revalidate: mockRevalidate,
    } as unknown as Query<any, any, any>;
    const subscription = new Subscription();

    const querySub = new QuerySubscription(mockQuery, subscription);

    await querySub.revalidate();

    expect(mockRevalidate).toHaveBeenCalledTimes(1);
    expect(mockRevalidate).toHaveBeenCalledWith(true);
  });

  it("revalidates the underlying query with force parameter when provided", async () => {
    const mockRevalidate = vitest.fn().mockResolvedValue(undefined);
    const mockQuery = {
      revalidate: mockRevalidate,
    } as unknown as Query<any, any, any>;
    const subscription = new Subscription();

    const querySub = new QuerySubscription(mockQuery, subscription);

    await querySub.revalidate(false);

    expect(mockRevalidate).toHaveBeenCalledTimes(1);
    expect(mockRevalidate).toHaveBeenCalledWith(false);
  });

  it("unsubscribes the underlying subscription", () => {
    const subscription = new Subscription();
    const unsubscribeSpy = vitest.spyOn(subscription, "unsubscribe");
    const mockQuery = {
      revalidate: vitest.fn(),
    } as unknown as Query<any, any, any>;

    const querySub = new QuerySubscription(mockQuery, subscription);
    querySub.unsubscribe();

    expect(unsubscribeSpy).toHaveBeenCalledTimes(1);
  });
});
