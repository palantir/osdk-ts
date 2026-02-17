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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { ObservableClient } from "@osdk/client/unstable-do-not-use";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useLinks } from "../src/new/useLinks.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const mockObject = {
  $objectType: "MockObject",
  $primaryKey: "obj-123",
  $apiName: "MockObject",
} as Osdk.Instance<typeof MockObjectType>;

describe("useLinks enabled option", () => {
  const mockObserveLinks = vitest.fn();

  const createWrapper = () => {
    const observableClient: Pick<
      ObservableClient,
      "observeLinks" | "canonicalizeOptions"
    > = {
      observeLinks: mockObserveLinks,
      canonicalizeOptions: (opts) => opts,
    };

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider
        value={{ observableClient } as React.ContextType<typeof OsdkContext2>}
      >
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveLinks.mockClear();
    mockObserveLinks.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should NOT call observeLinks when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useLinks(mockObject, "relatedObjects", { enabled: false }),
      { wrapper },
    );

    expect(mockObserveLinks).not.toHaveBeenCalled();
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useLinks(mockObject, "relatedObjects", { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveLinks).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
  });

  it("should enable links query when parent object becomes available", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ obj }) => useLinks(obj, "relatedObjects", { enabled: !!obj }),
      {
        wrapper,
        initialProps: { obj: undefined as typeof mockObject | undefined },
      },
    );

    expect(mockObserveLinks).not.toHaveBeenCalled();

    rerender({ obj: mockObject });

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
  });

  it("should pass dedupeInterval with default of 2000", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useLinks(mockObject, "relatedObjects"),
      { wrapper },
    );

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
    const options = mockObserveLinks.mock.calls[0][2];
    expect(options.dedupeInterval).toBe(2_000);
  });

  it("should pass custom dedupeIntervalMs to observeLinks", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        useLinks(mockObject, "relatedObjects", {
          dedupeIntervalMs: 5000,
        }),
      { wrapper },
    );

    expect(mockObserveLinks).toHaveBeenCalledTimes(1);
    const options = mockObserveLinks.mock.calls[0][2];
    expect(options.dedupeInterval).toBe(5000);
  });
});
