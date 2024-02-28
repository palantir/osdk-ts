/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it, vi } from "vitest";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createAsyncCache } from "./Cache.js";

describe("AsyncCache", () => {
  it("does not double factory", async () => {
    const resolveToKey = (client: MinimalClient, key: string) =>
      new Promise<string>((resolve, reject) => {
        setTimeout(() => resolve(key), 100);
      });

    const mock = vi.fn(resolveToKey);
    const cache = createAsyncCache(mock);

    const fauxClient = {} as MinimalClient;

    await Promise.all([
      cache.get(fauxClient, "a"),
      cache.get(fauxClient, "a"),
      cache.get(fauxClient, "a"),
      cache.get(fauxClient, "b"),
      cache.get(fauxClient, "b"),
      cache.get(fauxClient, "b"),
      cache.get(fauxClient, "b"),
    ]);

    expect(mock).toHaveBeenCalledTimes(2);
  });
});
