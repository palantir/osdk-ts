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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { createClient, isObjectSet } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useStableObjectSet } from "../core/useStableObjectSet.js";

const client = createClient(
  "https://stack.palantir.com/",
  "ri.ontology.main.ontology.dummy",
  async () => "token"
);

type EmployeeSet = ObjectSet<typeof Employee>;

describe("useStableObjectSet", () => {
  it("returns undefined when given undefined", () => {
    const { result } = renderHook(() => useStableObjectSet(undefined));
    expect(result.current).toBeUndefined();
  });

  it("returns the same reference across renders when wire form is unchanged", () => {
    const os = client(Employee) as EmployeeSet;
    expect(isObjectSet(os)).toBe(true);

    const { result, rerender } = renderHook(
      ({ value }: { value: EmployeeSet | undefined }) =>
        useStableObjectSet(value as ObjectSet<ObjectTypeDefinition>),
      { initialProps: { value: os } }
    );

    const first = result.current;
    rerender({ value: os });
    expect(result.current).toBe(first);
  });

  it(
    "returns a stable reference for two different ObjectSet instances with " +
      "equal wire forms",
    () => {
      const osA = client(Employee) as EmployeeSet;
      const osB = client(Employee) as EmployeeSet;

      expect(isObjectSet(osA)).toBe(true);
      expect(isObjectSet(osB)).toBe(true);
      expect(osA).not.toBe(osB);

      const { result, rerender } = renderHook(
        ({ value }: { value: EmployeeSet }) =>
          useStableObjectSet(value as ObjectSet<ObjectTypeDefinition>),
        { initialProps: { value: osA } }
      );

      const first = result.current;
      rerender({ value: osB });

      // Wire forms are equal
      expect(result.current).toBe(first);
    }
  );

  it(
    "returns a new reference when the wire form changes (e.g. different " +
      "filter chains)",
    () => {
      const osA = client(Employee).where({ employeeId: 1 }) as EmployeeSet;
      const osB = client(Employee).where({ employeeId: 2 }) as EmployeeSet;
      expect(isObjectSet(osA)).toBe(true);
      expect(isObjectSet(osB)).toBe(true);

      const { result, rerender } = renderHook(
        ({ value }: { value: EmployeeSet }) =>
          useStableObjectSet(value as ObjectSet<ObjectTypeDefinition>),
        { initialProps: { value: osA } }
      );

      const first = result.current;
      expect(first).toBe(osA);

      rerender({ value: osB });

      expect(result.current).toBe(osB);
      expect(result.current).not.toBe(first);
    }
  );

  it("transitions between undefined and a defined ObjectSet", () => {
    const os = client(Employee) as EmployeeSet;

    const { result, rerender } = renderHook(
      ({ value }: { value: EmployeeSet | undefined }) =>
        useStableObjectSet(value as ObjectSet<ObjectTypeDefinition>),
      {
        initialProps: { value: undefined as EmployeeSet | undefined },
      }
    );

    expect(result.current).toBeUndefined();

    rerender({ value: os });
    expect(result.current).toBe(os);

    rerender({ value: undefined });
    expect(result.current).toBeUndefined();
  });
});
