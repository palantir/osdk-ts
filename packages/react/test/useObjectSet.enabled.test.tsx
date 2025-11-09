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
import { useObjectSet } from "../src/new/useObjectSet.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

const mockObjectSet = {
  $__EXPERIMENTAL_objectSet: true,
  type: MockObjectType,
} as unknown as ObjectSet<typeof MockObjectType>;

describe("useObjectSet enabled option", () => {
  const mockObserveObjectSet = vitest.fn();

  const createWrapper = () => {
    const observableClient = {
      observeObjectSet: mockObserveObjectSet,
      canonicalizeWhereClause: vitest.fn((w) => w),
    } as any;

    return ({ children }: React.PropsWithChildren) => (
      <OsdkContext2.Provider value={{ observableClient }}>
        {children}
      </OsdkContext2.Provider>
    );
  };

  beforeEach(() => {
    mockObserveObjectSet.mockClear();
    mockObserveObjectSet.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("should NOT call observeObjectSet when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () => useObjectSet(mockObjectSet, { enabled: false }),
      { wrapper },
    );

    expect(mockObserveObjectSet).not.toHaveBeenCalled();
  });

  it("should start observing when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) => useObjectSet(mockObjectSet, { enabled }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockObserveObjectSet).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockObserveObjectSet).toHaveBeenCalledTimes(1);
  });
});
