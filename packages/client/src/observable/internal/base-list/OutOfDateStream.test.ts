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

import { Employee } from "@osdk/client.test.ontology";
import type {
  ObjectSetStreamSubscribeRequests,
  StreamMessage,
} from "@osdk/foundry.ontologies";
import { FauxFoundry, ontologies, startNodeApiServer } from "@osdk/shared.test";
import pDefer from "p-defer";
import { describe, expect, it, vi } from "vitest";

import {
  type createClient,
  createClientWithSubscriptionConnection,
} from "../../../createClient.js";
import type { SubscriptionConnection } from "../../../SubscriptionConnection.js";
import {
  createObservableClient,
  type ObserveObjectsCallbackArgs,
} from "../../ObservableClient.js";
import { createDefer, mockObserver } from "../testUtils.js";

const defer = createDefer();

describe.each(["list", "objectSet"] as const)(
  "out-of-date %s stream",
  (collection) => {
    it.each([false, true])(
      "refreshes server membership with pending request=%s",
      async (duringRequest) => {
        const events = new EventTarget();
        let subscribed = false;
        const sendMessage = (message: StreamMessage) => {
          events.dispatchEvent(
            new MessageEvent("message", { data: JSON.stringify(message) }),
          );
        };
        const connection: SubscriptionConnection = {
          readyState: 1,
          addEventListener: events.addEventListener.bind(events),
          removeEventListener: events.removeEventListener.bind(events),
          close: () => {},
          send: (raw) => {
            const request = JSON.parse(raw) as ObjectSetStreamSubscribeRequests;
            if (!Array.isArray(request.requests)) return;
            queueMicrotask(() => {
              sendMessage({
                type: "subscribeResponses",
                id: request.id,
                responses: request.requests.map(() => ({
                  type: "success",
                  id: "observed",
                })),
              });
              subscribed = true;
            });
          },
        };
        let holdResponses = false;
        let responseHeld = false;
        const release = pDefer<void>();
        const fetchWithHeldResponses: typeof fetch = async (input, init) => {
          const response = await fetch(input, init);
          if (
            holdResponses &&
            String(input).includes("objectSets/loadObjects")
          ) {
            responseHeld = true;
            await release.promise;
          }
          return response;
        };
        const setup = startNodeApiServer(
          new FauxFoundry("https://stack.palantir.com/"),
          (...args: Parameters<typeof createClient>) =>
            createClientWithSubscriptionConnection(() => connection, ...args),
          undefined,
          fetchWithHeldResponses,
        );
        ontologies.addEmployeeOntology(setup.fauxFoundry.getDefaultOntology());
        const data = setup.fauxFoundry.getDefaultDataStore();
        data.registerObject(Employee, { employeeId: 1, fullName: "First" });
        const observable = createObservableClient(setup.client);
        let current: ObserveObjectsCallbackArgs<typeof Employee> | undefined;
        const observer = {
          ...mockObserver<ObserveObjectsCallbackArgs<typeof Employee>>(),
          next: (payload: ObserveObjectsCallbackArgs<typeof Employee>) => {
            current = payload;
          },
        };
        const options = {
          streamUpdates: true,
          orderBy: { employeeId: "asc" as const },
        };
        defer(
          collection === "list"
            ? observable.observeList({ type: Employee, ...options }, observer)
            : observable.observeObjectSet(
                setup.client(Employee),
                options,
                observer,
              ),
        );
        try {
          await vi.waitFor(() => {
            expect(subscribed).toBe(true);
            expect(current?.status).toBe("loaded");
          });
          expect(
            current?.resolvedList?.map((object) => object.$primaryKey),
          ).toEqual([1]);
          let refresh: Promise<void> | undefined;
          if (duringRequest) {
            holdResponses = true;
            refresh = observable.invalidateAll();
            await vi.waitFor(() => expect(responseHeld).toBe(true));
          }
          data.registerObject(Employee, { employeeId: 2, fullName: "Second" });
          sendMessage({ type: "refreshObjectSet", id: "observed" });
          holdResponses = false;
          release.resolve();
          await refresh;
          await vi.waitFor(() => {
            expect(current?.status).toBe("loaded");
            expect(
              current?.resolvedList?.map((object) => object.$primaryKey),
            ).toEqual([1, 2]);
          });
        } finally {
          release.resolve();
          setup.apiServer.close();
        }
      },
    );
  },
);
