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

import type { ObjectTypeDefinition } from "@osdk/api";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { OsdkContext2 } from "../src/new/OsdkContext2.js";
import { useOsdkObjects } from "../src/new/useOsdkObjects.js";

const MockObjectType = {
  apiName: "MockObject",
  primaryKeyType: "string",
} as unknown as ObjectTypeDefinition;

describe("useOsdkObjects withProperties stability", () => {
  const mockObserveList = vitest.fn();

  // Simulates the behavior of rdpCanonicalizer: returns the same canonical
  // reference for the same `withProperties` shape so downstream useMemo deps
  // stay stable across rerenders.
  const createWrapper = () => {
    const canonicalWithPropertiesBySignature = new Map<string, object>();
    const canonicalize = (opts: Record<string, unknown>) => {
      const result = { ...opts };
      if (opts.withProperties && typeof opts.withProperties === "object") {
        const signature = Object.keys(opts.withProperties).sort().join(",");
        const existing = canonicalWithPropertiesBySignature.get(signature);
        if (existing) {
          result.withProperties = existing;
        } else {
          canonicalWithPropertiesBySignature.set(
            signature,
            opts.withProperties,
          );
        }
      }
      return result;
    };

    const observableClient = {
      observeList: mockObserveList,
      canonicalizeOptions: vitest.fn(canonicalize),
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
    mockObserveList.mockClear();
    mockObserveList.mockReturnValue({ unsubscribe: vitest.fn() });
  });

  it("does not resubscribe when rerendered with structurally identical inline withProperties", () => {
    const wrapper = createWrapper();

    const { rerender } = renderHook(
      ({ withProperties }) =>
        useOsdkObjects(MockObjectType, {
          withProperties: withProperties as any,
        }),
      {
        wrapper,
        initialProps: {
          withProperties: {
            leadName: (base: any) =>
              base.pivotTo("lead").selectProperty("fullName"),
          },
        },
      },
    );

    expect(mockObserveList).toHaveBeenCalledTimes(1);

    // Rerender with a brand new literal and a brand new function reference.
    rerender({
      withProperties: {
        leadName: (base: any) =>
          base.pivotTo("lead").selectProperty("fullName"),
      },
    });

    expect(mockObserveList).toHaveBeenCalledTimes(1);
  });
});
