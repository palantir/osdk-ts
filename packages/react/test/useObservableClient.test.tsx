/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
import * as React from "react";
import { describe, expect, it } from "vitest";
import {
  fakeObservableClient,
  TestOsdkProvider,
} from "../src/public/testing.js";
import { useObservableClient } from "../src/useObservableClient.js";

describe(useObservableClient, () => {
  const fakeClient = {} as Client;

  it("returns the observableClient from context", () => {
    const wrapper = ({ children }: React.PropsWithChildren) => (
      <TestOsdkProvider
        client={fakeClient}
        observableClient={fakeObservableClient}
      >
        {children}
      </TestOsdkProvider>
    );

    const { result } = renderHook(() => useObservableClient(), { wrapper });

    expect(result.current).toBe(fakeObservableClient);
  });

  it("returns the exact instance passed to the provider", () => {
    const customObservableClient = {} as ObservableClient;

    const wrapper = ({ children }: React.PropsWithChildren) => (
      <TestOsdkProvider
        client={fakeClient}
        observableClient={customObservableClient}
      >
        {children}
      </TestOsdkProvider>
    );

    const { result } = renderHook(() => useObservableClient(), { wrapper });

    expect(result.current).toBe(customObservableClient);
  });
});
