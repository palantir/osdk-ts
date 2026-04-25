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

import type { ObjectSet, ObjectTypeDefinition } from "@osdk/api";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkAggregation } from "../src/new/useOsdkAggregation.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const mockObjectSet = {
  $__EXPERIMENTAL_objectSet: true,
  type: MockObjectType,
  $objectSetInternals: { def: MockObjectType },
} as unknown as ObjectSet<typeof MockObjectType>;

const aggregate = {
  $select: { $count: "unordered" },
} as const;

describe("useOsdkAggregation", () => {
  const mockObserveAggregation = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeAggregation: mockObserveAggregation,
      canonicalizeOptions: vitest.fn((opts) => opts),
      invalidateObjectType: vitest.fn().mockResolvedValue(undefined),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider
        value={{ observableClient, devtoolsEnabled: false }}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveAggregation.mockClear();
    mockObserveAggregation.mockImplementation((args) => {
      const subscription = { unsubscribe: vitest.fn() };
      return "objectSet" in args
        ? Promise.resolve(subscription)
        : subscription;
    });
  });

  describe("enabled option", () => {
    it("should NOT call observeAggregation when enabled is false", () => {
      const wrapper = createWrapper();

      renderHook(
        () =>
          useOsdkAggregation(MockObjectType, {
            aggregate,
            enabled: false,
          }),
        { wrapper },
      );

      expect(mockObserveAggregation).not.toHaveBeenCalled();
    });

    it("should NOT call observeAggregation when enabled is false with an objectSet", () => {
      const wrapper = createWrapper();

      renderHook(
        () =>
          useOsdkAggregation(MockObjectType, {
            objectSet: mockObjectSet,
            aggregate,
            enabled: false,
          }),
        { wrapper },
      );

      expect(mockObserveAggregation).not.toHaveBeenCalled();
    });

    it("should call observeAggregation when enabled is omitted", () => {
      const wrapper = createWrapper();

      renderHook(
        () => useOsdkAggregation(MockObjectType, { aggregate }),
        { wrapper },
      );

      expect(mockObserveAggregation).toHaveBeenCalledTimes(1);
    });

    it("should start observing when enabled changes from false to true", () => {
      const wrapper = createWrapper();

      const { rerender } = renderHook(
        ({ enabled }) =>
          useOsdkAggregation(MockObjectType, { aggregate, enabled }),
        {
          wrapper,
          initialProps: { enabled: false },
        },
      );

      expect(mockObserveAggregation).not.toHaveBeenCalled();

      rerender({ enabled: true });

      expect(mockObserveAggregation).toHaveBeenCalledTimes(1);
    });

    it("should report isLoading as false and data as undefined when disabled", () => {
      const wrapper = createWrapper();

      const { result } = renderHook(
        () =>
          useOsdkAggregation(MockObjectType, {
            aggregate,
            enabled: false,
          }),
        { wrapper },
      );

      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toBeUndefined();
      expect(result.current.error).toBeUndefined();
    });

    it("should call observeAggregation with the objectSet when enabled with an objectSet", () => {
      const wrapper = createWrapper();

      renderHook(
        () =>
          useOsdkAggregation(MockObjectType, {
            objectSet: mockObjectSet,
            aggregate,
            enabled: true,
          }),
        { wrapper },
      );

      expect(mockObserveAggregation).toHaveBeenCalledTimes(1);
      expect(mockObserveAggregation).toHaveBeenCalledWith(
        expect.objectContaining({
          type: MockObjectType,
          objectSet: mockObjectSet,
          aggregate,
        }),
        expect.any(Object),
      );
    });
  });
});
