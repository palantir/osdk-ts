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

import { createClient } from "@osdk/client";
import { Markings } from "@osdk/foundry.admin";
import { cleanup, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  fakeObservableClient,
  TestOsdkProvider,
} from "../../../../public/testing.js";
import { useMarkings } from "../useMarkings.js";

vi.mock("@osdk/foundry.admin", () => ({
  Markings: { list: vi.fn() },
}));

const client = createClient(
  "https://stack.palantir.com/",
  "ri.ontology.main.ontology.dummy",
  () => Promise.resolve("token"),
);

function Wrapper({ children }: React.PropsWithChildren) {
  return (
    <TestOsdkProvider client={client} observableClient={fakeObservableClient}>
      {children}
    </TestOsdkProvider>
  );
}

describe("useMarkings", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(Markings.list).mockResolvedValue({ data: [] });
  });

  afterEach(cleanup);

  it("leaves markings unfiltered by default", async () => {
    const { result } = renderHook(() => useMarkings(), { wrapper: Wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(Markings.list).toHaveBeenLastCalledWith(client, {
      includeDeleted: true,
    });
    expect(result.current.markings).toEqual([]);
  });

  it.each(["CBAC", "MANDATORY"] as const)(
    "requests %s markings while preserving includeDeleted",
    async (markingType) => {
      const { result } = renderHook(
        () => useMarkings({ markingType, includeDeleted: false }),
        { wrapper: Wrapper },
      );

      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(Markings.list).toHaveBeenLastCalledWith(client, {
        includeDeleted: false,
        markingType,
      });
      expect(result.current.markings).toEqual([]);
    },
  );
});
