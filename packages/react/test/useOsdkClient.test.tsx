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
import { act, renderHook } from "@testing-library/react";
import pDefer from "p-defer";
import * as React from "react";
import { describe, expect, it, vitest } from "vitest";
import { OsdkContext } from "../src/OsdkContext.js";
import { useOsdkClient } from "../src/useOsdkClient.js";
import { useOsdkMetadata } from "../src/useOsdkMetadata.js";

describe(useOsdkMetadata, () => {
  it("works with just client", () => {
    const fakeClient = {
      fetchMetadata: vitest.fn((o) => {
        return Promise.resolve({ passedIn: o }) as any;
      }),
    } as any as Client;

    const wrapper = ({ children }: React.PropsWithChildren) => {
      return (
        <OsdkContext.Provider
          value={{ client: fakeClient }}
        >
          {children}
        </OsdkContext.Provider>
      );
    };

    const { result, rerender } = renderHook(
      () => useOsdkClient(),
      { wrapper },
    );

    expect(result.current).toBe(fakeClient);
  });
});
