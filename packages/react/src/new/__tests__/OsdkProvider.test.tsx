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
import { createClient } from "@osdk/client";
import { Employee } from "@osdk/client.test.ontology";
import type { ObservableClient } from "@osdk/client/observable";
import type * as ObservableClientModule from "@osdk/client/observable";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import {
  act,
  cleanup,
  render,
  renderHook,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, expectTypeOf, it, vi } from "vitest";

import { OsdkProvider } from "../OsdkProvider.js";
import { useOsdkObject } from "../useOsdkObject.js";

const { createObservableClientMock } = vi.hoisted(() => ({
  createObservableClientMock: vi.fn(() => ({}) as unknown as ObservableClient),
}));

vi.mock("@osdk/client/observable", () => ({
  createObservableClient: createObservableClientMock,
}));

const mockClient = {} as unknown as Client;

function expectedOptions(overrides?: {
  actionDelayMs?: number;
  logLevel?: string;
  refCounts?: boolean;
  cacheKeys?: boolean;
}) {
  return {
    devMode: {
      actionDelayMs: overrides?.actionDelayMs,
      logLevel: overrides?.logLevel,
      debug: {
        refCounts: overrides?.refCounts,
        cacheKeys: overrides?.cacheKeys,
      },
    },
  };
}

describe("OsdkProvider", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("accepts creation options only when passing a regular client instead of an ObservableClient", () => {
    type Props = React.ComponentProps<typeof OsdkProvider>;
    expectTypeOf<{
      children: null;
      client: Client;
      devMode: { actionDelayMs: number };
    }>().toMatchTypeOf<Props>();
    expectTypeOf<{
      children: null;
      client: ObservableClient;
      enableDevTools: boolean;
    }>().toMatchTypeOf<Props>();
    expectTypeOf<{
      children: null;
      client: ObservableClient;
      devMode: { actionDelayMs: number };
    }>().not.toMatchTypeOf<Props>();
    expectTypeOf<{
      children: null;
      observableClient: ObservableClient;
    }>().not.toMatchTypeOf<Props>();
    expectTypeOf<{ children: null }>().not.toMatchTypeOf<Props>();
  });

  it("two providers sharing an observable client keep it usable when one unmounts", async ({
    onTestFinished,
  }) => {
    const { createObservableClient } = await vi.importActual<
      typeof ObservableClientModule
    >("@osdk/client/observable");
    const { client, apiServer, fauxFoundry } = startNodeApiServer(
      new FauxFoundry("https://stack.palantir.com/"),
      createClient,
    );
    onTestFinished(() => apiServer.close());
    ontologies.addEmployeeOntology(fauxFoundry.getDefaultOntology());
    const dataStore = fauxFoundry.getDefaultDataStore();
    const employee = dataStore.registerObject(Employee, {
      employeeId: 1,
      fullName: "John Doe",
    });
    const observableClient = createObservableClient(client);
    const wrapper = ({ children }: React.PropsWithChildren) => (
      <OsdkProvider client={observableClient} enableDevTools={false}>
        {children}
      </OsdkProvider>
    );
    const first = renderHook(() => useOsdkObject(Employee, 1), { wrapper });
    const second = renderHook(() => useOsdkObject(Employee, 1), { wrapper });

    await waitFor(() =>
      expect([
        first.result.current.object?.fullName,
        second.result.current.object?.fullName,
      ]).toEqual(["John Doe", "John Doe"]),
    );
    expect(first.result.current.object).toBe(second.result.current.object);

    first.unmount();
    dataStore.replaceObjectOrThrow({ ...employee, fullName: "Jane Doe" });
    await act(async () => {
      await observableClient.invalidateObjectType(Employee);
    });
    await waitFor(() =>
      expect(second.result.current.object?.fullName).toBe("Jane Doe"),
    );
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
      expectedOptions({ actionDelayMs: 0 }),
    );
  });

  it("defaults the devMode fields to undefined when devMode is omitted", () => {
    render(
      <OsdkProvider client={mockClient}>
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenLastCalledWith(
      mockClient,
      expect.any(Function),
      expectedOptions(),
    );
  });

  it("passes logLevel and debug flags through to createObservableClient", () => {
    render(
      <OsdkProvider
        client={mockClient}
        devMode={{ logLevel: "debug", debug: { refCounts: true } }}
      >
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenLastCalledWith(
      mockClient,
      expect.any(Function),
      expectedOptions({ logLevel: "debug", refCounts: true }),
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

  it("does not recreate the observable client when logLevel and debug are unchanged", () => {
    const { rerender } = render(
      <OsdkProvider
        client={mockClient}
        devMode={{ logLevel: "debug", debug: { refCounts: true } }}
      >
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(1);

    // New devMode and debug object literals, same values: must not re-create.
    rerender(
      <OsdkProvider
        client={mockClient}
        devMode={{ logLevel: "debug", debug: { refCounts: true } }}
      >
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(1);

    // Changing logLevel re-creates the client.
    rerender(
      <OsdkProvider
        client={mockClient}
        devMode={{ logLevel: "trace", debug: { refCounts: true } }}
      >
        <div />
      </OsdkProvider>,
    );

    expect(createObservableClientMock).toHaveBeenCalledTimes(2);
  });
});
