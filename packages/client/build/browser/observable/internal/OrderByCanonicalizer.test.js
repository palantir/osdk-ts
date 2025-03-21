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

import { setFlagsFromString } from "v8";
import { describe, expect, it, vi } from "vitest";
import { runInNewContext } from "vm";
import { OrderByCanonicalizer } from "./OrderByCanonicalizer.js";
describe(OrderByCanonicalizer, () => {
  it("it canonicalizes", () => {
    const obc = new OrderByCanonicalizer();
    const canon1 = obc.canonicalize({
      a: "asc",
      b: "desc"
    });
    const canon2 = obc.canonicalize({
      a: "asc",
      b: "desc"
    });

    // Ref equal
    expect(canon1).toBe(canon2);

    // Deep equal
    expect(canon1).toEqual({
      a: "asc",
      b: "desc"
    });
    const canonShort = obc.canonicalize({
      a: "asc"
    });
    const canonLong = obc.canonicalize({
      a: "asc",
      b: "desc",
      c: "asc"
    });
    expect(canonShort).not.toEqual(canon1);
    expect(canonLong).not.toEqual(canon1);
  });
  it("cleans up", async () => {
    const callback = vi.fn((...args) => {
      console.log("args", args);
    });
    const f = new FinalizationRegistry(callback);
    const obc = new OrderByCanonicalizer();
    {
      let canon1 = obc.canonicalize({
        a: "asc"
      });
      expect(canon1).toEqual({
        a: "asc"
      });
      f.register(canon1, "hi");
      canon1 = undefined;
    }

    // enabling trace-gc
    setFlagsFromString("--expose_gc");
    const gc = runInNewContext("gc");
    await vi.waitFor(() => {
      gc();
      expect(callback).toHaveBeenCalledExactlyOnceWith("hi");
    });
  });
});
//# sourceMappingURL=OrderByCanonicalizer.test.js.map