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

import type { QueryDefinition } from "@osdk/api";
import type { Client } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/observable";
import { renderHook } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { OsdkContext } from "../OsdkContext.js";
import { useOsdkFunction } from "../useOsdkFunction.js";

function createMockObservableClient(): ObservableClient {
  return {
    observeFunction: vi.fn().mockReturnValue({ unsubscribe: vi.fn() }),
    invalidateFunction: vi.fn(),
  } as unknown as ObservableClient;
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

describe("useOsdkFunction", () => {
  describe("when queryDef is undefined", () => {
    it("returns loading state without throwing or calling observeFunction", () => {
      const observableClient = createMockObservableClient();

      const { result } = renderHook(
        () =>
          useOsdkFunction(
            undefined as unknown as QueryDefinition<unknown>,
          ),
        { wrapper: createWrapper(observableClient) },
      );

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();
      expect(result.current.error).toBeUndefined();
      expect(typeof result.current.refetch).toBe("function");
      expect(observableClient.observeFunction).not.toHaveBeenCalled();
    });

    it("refetch is a no-op when queryDef is undefined", async () => {
      const observableClient = createMockObservableClient();

      const { result } = renderHook(
        () =>
          useOsdkFunction(
            undefined as unknown as QueryDefinition<unknown>,
          ),
        { wrapper: createWrapper(observableClient) },
      );

      await result.current.refetch();
      expect(observableClient.invalidateFunction).not.toHaveBeenCalled();
    });
  });
});
