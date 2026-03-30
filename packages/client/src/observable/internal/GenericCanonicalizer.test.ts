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

import { describe, expect, it } from "vitest";
import { GenericCanonicalizer } from "./GenericCanonicalizer.js";

describe(GenericCanonicalizer, () => {
  it("returns same reference for structurally identical objects", () => {
    const gc = new GenericCanonicalizer();
    const canon1 = gc.canonicalize({ a: 1, b: 2 });
    const canon2 = gc.canonicalize({ a: 1, b: 2 });

    expect(canon1).toBe(canon2);
  });

  it("returns different references for different objects", () => {
    const gc = new GenericCanonicalizer();
    const canon1 = gc.canonicalize({ a: 1 });
    const canon2 = gc.canonicalize({ a: 2 });

    expect(canon1).not.toBe(canon2);
  });

  it("key order does not matter", () => {
    const gc = new GenericCanonicalizer();
    const canon1 = gc.canonicalize({ b: 1, a: 2 });
    const canon2 = gc.canonicalize({ a: 2, b: 1 });

    expect(canon1).toBe(canon2);
  });

  it("nested objects are compared deeply", () => {
    const gc = new GenericCanonicalizer();
    const canon1 = gc.canonicalize({ a: { x: 1 } });
    const canon2 = gc.canonicalize({ a: { x: 1 } });
    const canon3 = gc.canonicalize({ a: { y: 2 } });

    expect(canon1).toBe(canon2);
    expect(canon1).not.toBe(canon3);
  });

  it("undefined returns undefined", () => {
    const gc = new GenericCanonicalizer();
    expect(gc.canonicalize(undefined)).toBeUndefined();
  });

  it("arrays canonicalize correctly", () => {
    const gc = new GenericCanonicalizer();
    const canon1 = gc.canonicalize([{ a: 1 }]);
    const canon2 = gc.canonicalize([{ a: 1 }]);

    expect(canon1).toBe(canon2);
  });

  it("arrays with different contents differ", () => {
    const gc = new GenericCanonicalizer();
    const canon1 = gc.canonicalize([{ a: 1 }]);
    const canon2 = gc.canonicalize([{ b: 2 }]);

    expect(canon1).not.toBe(canon2);
  });
});
