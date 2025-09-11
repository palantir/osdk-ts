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

import type { DerivedPropertyDefinition } from "@osdk/foundry.ontologies";
import { beforeEach, describe, expect, it } from "vitest";
import { RdpCanonicalizer } from "./RdpCanonicalizer.js";

describe("RdpCanonicalizer", () => {
  let canonicalizer: RdpCanonicalizer;

  beforeEach(() => {
    canonicalizer = new RdpCanonicalizer();
  });

  const createMockDefinition = (value: string): DerivedPropertyDefinition => ({
    type: "property",
    apiName: value,
  });

  it("returns undefined for undefined input", () => {
    expect(canonicalizer.canonicalize(undefined)).toBeUndefined();
  });

  it("generates canonical IDs for definitions", () => {
    const def1 = createMockDefinition("prop1");
    const result1 = canonicalizer.canonicalize(def1);

    expect(result1).toBeDefined();
    expect(result1).toMatch(/^rdp_[a-f0-9]{16}$/);
  });

  it("canonicalizes identical definitions to same ID", () => {
    const def1 = createMockDefinition("prop1");
    const def2 = createMockDefinition("prop1");

    const result1 = canonicalizer.canonicalize(def1);
    const result2 = canonicalizer.canonicalize(def2);

    expect(result1).toBe(result2);
  });

  it("returns different IDs for different definitions", () => {
    const def1 = createMockDefinition("prop1");
    const def2 = createMockDefinition("prop2");

    const result1 = canonicalizer.canonicalize(def1);
    const result2 = canonicalizer.canonicalize(def2);

    expect(result1).not.toBe(result2);
  });

  it("caches identical definitions", () => {
    const def = createMockDefinition("test");

    const result1 = canonicalizer.canonicalize(def);
    const result2 = canonicalizer.canonicalize(def);

    expect(result1).toBe(result2);
  });

  it("handles complex RDP structures", () => {
    const complexDef: DerivedPropertyDefinition = {
      type: "selection",
      objectSet: {
        type: "searchAround",
        objectSet: {
          type: "methodInput",
        },
        link: "linkToObject",
      },
      operation: {
        type: "get",
        selectedPropertyApiName: "someProperty",
      },
    } as any;

    const result = canonicalizer.canonicalize(complexDef);

    expect(result).toBeDefined();
    expect(result).toMatch(/^rdp_[a-f0-9]{16}$/);
  });

  it("handles definitions with different key order but same content", () => {
    const def1: DerivedPropertyDefinition = {
      type: "selection",
      operation: {
        type: "count",
        selectedPropertyApiName: "someProperty",
      },
      objectSet: {
        type: "base",
        objectType: "SomeType",
      },
    } as any;

    const def2: DerivedPropertyDefinition = {
      type: "selection",
      objectSet: {
        type: "base",
        objectType: "SomeType",
      },
      operation: {
        type: "count",
        selectedPropertyApiName: "someProperty",
      },
    } as any;

    const result1 = canonicalizer.canonicalize(def1);
    const result2 = canonicalizer.canonicalize(def2);

    expect(result1).toBe(result2);
  });
});
