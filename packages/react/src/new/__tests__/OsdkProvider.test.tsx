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

import type { Client } from "@osdk/client";
import type { ObservableClient } from "@osdk/client/observable";
import { render } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { OsdkProvider } from "../OsdkProvider.js";

const { createObservableClientMock } = vi.hoisted(() => ({
  createObservableClientMock: vi.fn(
    () => ({}) as unknown as ObservableClient,
  ),
}));

vi.mock("@osdk/client/observable", () => ({
  createObservableClient: createObservableClientMock,
}));

const mockClient = {} as unknown as Client;

describe("OsdkProvider", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("passes the devMode option through to createObservableClient", () => {
    render(
      <OsdkProvider client={mockClient} devMode={{ actionDelayMs: 0 }}>
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(1);
    expect(createObservableClientMock).toHaveBeenLastCalledWith(
      mockClient,
      expect.any(Function),
      { devMode: { actionDelayMs: 0 } },
    );
  });

  it("defaults actionDelayMs to undefined when devMode is omitted", () => {
    render(
      <OsdkProvider client={mockClient}>
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenLastCalledWith(
      mockClient,
      expect.any(Function),
      { devMode: { actionDelayMs: undefined } },
    );
  });

  it("does not recreate the observable client when actionDelayMs is unchanged", () => {
    const { rerender } = render(
      <OsdkProvider client={mockClient} devMode={{ actionDelayMs: 250 }}>
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(1);

    // New object literal, same value: must not re-create the client.
    rerender(
      <OsdkProvider client={mockClient} devMode={{ actionDelayMs: 250 }}>
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(1);

    // Changing the value re-creates the client.
    rerender(
      <OsdkProvider client={mockClient} devMode={{ actionDelayMs: 0 }}>
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(2);
  });
});
