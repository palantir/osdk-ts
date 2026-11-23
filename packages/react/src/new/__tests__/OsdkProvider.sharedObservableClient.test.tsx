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
import { Employee } from "@osdk/client.test.ontology";
import { createObservableClient } from "@osdk/client/observable";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import React from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { REACT_USER_AGENT } from "../../util/UserAgent.js";
import { OsdkProvider } from "../OsdkProvider.js";
import { useOsdkObject } from "../useOsdkObject.js";

function setup(onTestFinished: (fn: () => void) => void) {
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
  return { apiServer, dataStore, employee, observableClient, wrapper };
}

describe("OsdkProvider with a shared observable client", () => {
  afterEach(() => {
    cleanup();
  });

  it("keeps the client usable for one provider when another unmounts", async ({
    onTestFinished,
  }) => {
    const { dataStore, employee, observableClient, wrapper } =
      setup(onTestFinished);
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

  it("sends the React user agent on requests from descendants", async ({
    onTestFinished,
  }) => {
    const { apiServer, wrapper } = setup(onTestFinished);
    const userAgents: Array<string | null> = [];
    apiServer.events.on("request:start", ({ request }) => {
      userAgents.push(request.headers.get("Fetch-User-Agent"));
    });

    const { result } = renderHook(() => useOsdkObject(Employee, 1), {
      wrapper,
    });

    await waitFor(() =>
      expect(result.current.object?.fullName).toBe("John Doe"),
    );
    expect(
      userAgents.some((userAgent) =>
        userAgent?.split(" ").includes(REACT_USER_AGENT),
      ),
    ).toBe(true);
  });

  it("registers the React user agent before descendant effects run", ({
    onTestFinished,
  }) => {
    const { observableClient, wrapper } = setup(onTestFinished);
    const registerUserAgent = vi.spyOn(observableClient, "registerUserAgent");

    const { result } = renderHook(
      () => {
        const [registered, setRegistered] = React.useState<boolean>();
        React.useEffect(() => {
          setRegistered(
            registerUserAgent.mock.calls.some(
              ([agent]) => agent === REACT_USER_AGENT,
            ),
          );
        }, []);
        return registered;
      },
      { wrapper },
    );

    expect(result.current).toBe(true);
  });
});
