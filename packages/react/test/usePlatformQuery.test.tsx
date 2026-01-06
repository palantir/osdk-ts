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

import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { usePlatformQuery } from "../src/utils/usePlatformQuery.js";

describe("usePlatformQuery enabled option", () => {
  const mockQueryFn = vitest.fn();

  const createWrapper = () => {
    return ({ children }: React.PropsWithChildren) => <div>{children}</div>;
  };

  beforeEach(() => {
    mockQueryFn.mockClear();
    mockQueryFn.mockReturnValue(new Promise<undefined>(() => undefined));
  });

  it("should NOT call mockQueryFn when enabled is false", () => {
    const wrapper = createWrapper();

    renderHook(
      () =>
        usePlatformQuery({
          query: mockQueryFn,
          queryName: "query-test",
          enabled: false,
        }),
      {
        wrapper,
      },
    );

    expect(mockQueryFn).not.toHaveBeenCalled();
  });

  it("should query when enabled changes from false to true", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ enabled }) =>
        usePlatformQuery({
          query: mockQueryFn,
          queryName: "query-test",
          enabled,
        }),
      {
        wrapper,
        initialProps: { enabled: false },
      },
    );

    expect(mockQueryFn).not.toHaveBeenCalled();

    rerender({ enabled: true });

    expect(mockQueryFn).toHaveBeenCalledTimes(1);
  });
});
