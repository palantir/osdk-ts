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

import type { Client } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/observable";
import { renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { OsdkContext } from "../OsdkContext.js";
import { useOsdkObjects } from "../useOsdkObjects.js";

function createMockObservableClient(): {
  client: ObservableClient;
  observeList: ReturnType<typeof vi.fn>;
  invalidateObjectType: ReturnType<typeof vi.fn>;
} {
  const observeList = vi.fn().mockReturnValue({ unsubscribe: vi.fn() });
  const invalidateObjectType = vi.fn();
  const client = {
    observeList,
    invalidateObjectType,
    canonicalizeOptions: vi.fn().mockImplementation((options: unknown) =>
      options
    ),
  } as unknown as ObservableClient;
  return { client, observeList, invalidateObjectType };
}

function createWrapper(observableClient: ObservableClient) {
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <OsdkContext.Provider
        value={{
          client: {} as Client,
          observableClient,
          devtoolsEnabled: false,
        }}
      >
        {children}
      </OsdkContext.Provider>
    );
  };
}

describe("useOsdkObjects", () => {
  describe("when type is undefined", () => {
    it("returns loading state without throwing or calling observeList", () => {
      const { client, observeList } = createMockObservableClient();

      const { result } = renderHook(
        () => useOsdkObjects(undefined),
        { wrapper: createWrapper(client) },
      );

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();
      expect(result.current.error).toBeUndefined();
      expect(result.current.fetchMore).toBeUndefined();
      expect(result.current.hasMore).toBe(false);
      expect(typeof result.current.refetch).toBe("function");
      expect(observeList).not.toHaveBeenCalled();
    });

    it("refetch is a no-op when type is undefined", async () => {
      const { client, invalidateObjectType } = createMockObservableClient();

      const { result } = renderHook(
        () => useOsdkObjects(undefined),
        { wrapper: createWrapper(client) },
      );

      await result.current.refetch();
      expect(invalidateObjectType).not.toHaveBeenCalled();
    });
  });
});
