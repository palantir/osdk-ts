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
import { createClient } from "@osdk/client";
import { Employee, FooInterface } from "@osdk/client.test.ontology";
import type { ObservableClient, Observer } from "@osdk/client/observable";
import { renderHook } from "@testing-library/react";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { OsdkContext } from "../OsdkContext.js";
import { useObjectSet } from "../useObjectSet.js";

const client = createClient(
  "https://stack.palantir.com/",
  "ri.ontology.main.ontology.dummy",
  async () => "token",
);

function createMockObservableClient(): {
  client: ObservableClient;
  observeObjectSet: ReturnType<typeof vi.fn>;
} {
  const observeObjectSet = vi.fn(
    (
      _baseObjectSet: unknown,
      _options: unknown,
      _observer: Observer<unknown>,
    ) => ({
      unsubscribe: vi.fn(),
    }),
  );
  const observableClient = {
    observeObjectSet,
    canonicalizeOptions: vi.fn((opts: unknown) => opts),
    invalidateObjectType: vi.fn().mockResolvedValue(undefined),
  } as unknown as ObservableClient;
  return { client: observableClient, observeObjectSet };
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

describe("useObjectSet", () => {
  let observableClient: ObservableClient;
  let observeObjectSet: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    ({ client: observableClient, observeObjectSet } =
      createMockObservableClient());
  });

  describe("resolveToObjectType", () => {
    it("threads resolveToObjectType into observeObjectSet when set on an interface base", () => {
      renderHook(
        () => useObjectSet(client(FooInterface), { resolveToObjectType: true }),
        { wrapper: createWrapper(observableClient) },
      );

      expect(observeObjectSet).toHaveBeenCalledTimes(1);
      expect(observeObjectSet.mock.calls[0][1]).toMatchObject({
        resolveToObjectType: true,
      });
    });

    it("leaves resolveToObjectType undefined when omitted", () => {
      renderHook(
        () => useObjectSet(client(FooInterface)),
        { wrapper: createWrapper(observableClient) },
      );

      expect(observeObjectSet).toHaveBeenCalledTimes(1);
      expect(observeObjectSet.mock.calls[0][1].resolveToObjectType)
        .toBeUndefined();
    });

    it("rejects resolveToObjectType on an object-type base at the type level", () => {
      renderHook(
        () =>
          useObjectSet(client(Employee), {
            // @ts-expect-error resolveToObjectType is only valid for interface bases
            resolveToObjectType: true,
          }),
        { wrapper: createWrapper(observableClient) },
      );

      // The runtime still forwards it; the guarantee under test is the compile
      // error above. Object-type results are never projected in the store.
      expect(observeObjectSet).toHaveBeenCalledTimes(1);
    });
  });
});
