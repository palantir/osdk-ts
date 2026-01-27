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

import type {
  Logger,
  ObjectSetSubscription,
  Osdk,
  PropertyKeys,
} from "@osdk/api";
import { $ontologyRid, Employee, Office } from "@osdk/client.test.ontology";
import type {
  ObjectSetStreamSubscribeRequests,
  StreamMessage,
} from "@osdk/foundry.ontologies";
import {
  LegacyFauxFoundry,
  msw,
  type SetupServer,
  startNodeApiServer,
} from "@osdk/shared.test";
import ImportedWebSocket from "isomorphic-ws";
import type { DeferredPromise } from "p-defer";
import pDefer from "p-defer";
import type { MockedClass, MockedFunction, MockedObject } from "vitest";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";
import { z } from "zod";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import {
  constructWebsocketUrl,
  ObjectSetListenerWebsocket,
} from "./ObjectSetListenerWebsocket.js";

// it needs to be hoisted because its referenced from our mocked WebSocket
// which must be hoisted to work
const rootLogger = await vi.hoisted(async (): Promise<Logger> => {
  const pino = (await import("pino")).pino;
  const pinoPretty = await import("pino-pretty");
  const { EventEmitter } = await import("node:events");
  class PinoConsoleLogDestination extends EventEmitter {
    write(a: string) {
      // remove trailing newline since console.log adds one
      if (a.at(-1) === "\n") a = a.slice(0, -1);

      // This lets the test framework aggregate the logs per test, whereas direct to stdout does not
      console.log(a);
    }
  }
  return Promise.resolve(pino(
    { level: "info" },
    (pinoPretty.build)({
      sync: true,
      timestampKey: undefined,
      errorLikeObjectKeys: ["error", "err", "exception"],
      errorProps: "stack,cause,properties",
      ignore: "time,hostname,pid",
      destination: new PinoConsoleLogDestination(),
    }),
  ));
});

// make local uses of WebSocket typed right
const MockedWebSocket = ImportedWebSocket as unknown as MockedWebSocket;

const STACK = "https://stack.palantirCustom.com/foo/first/someStuff/";

vi.mock("isomorphic-ws", async (importOriginal) => {
  const original = await importOriginal<
    { default: WebSocket }
  >();

  const WebSocket = createMockWebSocketConstructor(
    original.default,
    rootLogger,
  );
  return { default: WebSocket, WebSocket };
});

let currentSubscriptionId = 0;

describe("ObjectSetListenerWebsocket", async () => {
  let apiServer: SetupServer;
  beforeAll(() => {
    const testSetup = startNodeApiServer(
      new LegacyFauxFoundry(STACK),
      createClient,
    );
    ({ apiServer } = testSetup);
    addLoggerToApiServer(testSetup.apiServer, rootLogger);
    return () => {
      testSetup.apiServer.close();
    };
  });

  describe("basic setup", () => {
    let minimalClient: MinimalClient;

    const MINIMUM_RECONNECT_DELAY = 2_000;
    const OBJECT_SET_EXPIRY_MS = 60_000;

    let client: ObjectSetListenerWebsocket;
    let listener: MockedObject<
      Required<
        ObjectSetSubscription.Listener<Employee, any>
      >
    >;
    let oslwInst = 0;

    let updateReceived: {
      object: Osdk.Instance<Employee>;
      state: "ADDED_OR_UPDATED" | "REMOVED";
    } | undefined = undefined;

    let listenerPromise: DeferredPromise<void>;

    beforeEach(() => {
      minimalClient = createMinimalClient(
        { ontologyRid: $ontologyRid },
        STACK,
        async () => "myAccessToken",
        { logger: rootLogger },
      );
      client = new ObjectSetListenerWebsocket({
        ...minimalClient,
        logger: rootLogger.child({ oslwInst: oslwInst++ }),
      }, {
        minimumReconnectDelayMs: MINIMUM_RECONNECT_DELAY,
      });

      listenerPromise = pDefer();

      listener = {
        onChange: vi.fn((o) => {
          updateReceived = { object: o.object, state: o.state };
          listenerPromise.resolve();
        }),
        onError: vi.fn(),
        onOutOfDate: vi.fn(),
        onSuccessfulSubscription: vi.fn(),
      };

      let objectSetRidCounter = 0;
      apiServer.use(
        msw.http.post(
          `${STACK}api/v2/ontologySubscriptions/ontologies/${$ontologyRid}/streamSubscriptions`,
          () =>
            msw.HttpResponse.json({
              objectSetRid: `rid.hi.${objectSetRidCounter++}`,
            }),
        ),
      );

      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.restoreAllMocks();
      apiServer.resetHandlers();
    });

    it("should not send onOutOfDate since it has not subscribed yet", () => {
      expect(MockedWebSocket).not.toHaveBeenCalled();
      expect(listener.onOutOfDate).not.toHaveBeenCalled();
      expect(listener.onChange).not.toHaveBeenCalled();
      expect(listener.onError).not.toHaveBeenCalled();
    });

    describe("requests subscription", () => {
      let ws: MockedWebSocket;
      let unsubscribe: () => void;
      let subReq1: ObjectSetStreamSubscribeRequests;

      beforeEach(async () => {
        [ws, unsubscribe] = await subscribeAndExpectWebSocket(
          client,
          listener,
        );

        subReq1 = await expectSubscribeMessages(ws, 2);
      });

      afterEach(() => {
        // just ensure we ended in good states, as we clear these as we consume them
        expect(MockedWebSocket).not.toHaveBeenCalled();

        // make sure we are unsubscribed so closing the socket doesn't trigger reconnects
        unsubscribe();

        // disconnect the socket
        setWebSocketState(ws, "close");

        vi.runAllTicks();

        // Make sure we cleaned up
        expectEqualRemoveAndAddListeners(ws);
      });

      it("only sends a single request", async () => {
        respondSuccessToSubscribe(ws, subReq1);
        // actually this is broken FIXME
        unsubscribe();
        expect(ws.send).toHaveBeenCalledTimes(1);
      });

      it("correctly requests regular object properties", () => {
        expect(subReq1.requests[0].propertySet).toEqual([
          "employeeId",
          "fullName",
          "office",
          "class",
          "startDate",
          "employeeStatus",
          "employeeSensor",
          "skillSet",
          "skillSetEmbedding",
          "favoriteRestaurants",
        ]);
      });

      it("correctly requests reference backed properties", () => {
        expect(subReq1.requests[0].referenceSet).toEqual(["employeeLocation"]);
      });

      describe("socket closed before subscription confirmed", () => {
        beforeEach(() => {
          setWebSocketState(ws, "close");
          expectEqualRemoveAndAddListeners(ws);
        });

        describe("reconnect", async () => {
          beforeEach(async () => {
            [ws] = await Promise.all([
              expectWebSocketConstructed(),
              // delay for connection reconnect with exponential backoff
              // First attempt: MINIMUM_RECONNECT_DELAY * 2^0 = 2000ms +/- jitter
              vi.advanceTimersByTimeAsync(MINIMUM_RECONNECT_DELAY * (1 + 0.3)),
            ]);
            setWebSocketState(ws, "open");
          });

          describe("subscribe and respond", () => {
            beforeEach(async () => {
              const subReq2 = await expectSubscribeMessages(ws);
              respondSuccessToSubscribe(ws, subReq2);
            });

            it("should not send out of date", () => {
              expect(listener.onOutOfDate).not.toHaveBeenCalled();
            });
          });
        });
      });

      describe("correctly try catches errors in handlers", () => {
        beforeEach(() => {
          listener.onSuccessfulSubscription.mockImplementationOnce(() => {
            throw new Error("I am an error");
          });
          respondSuccessToSubscribe(ws, subReq1);
        });
        afterEach(() => {
          listener.onSuccessfulSubscription.mockReset();
        });

        it("should call onError", async () => {
          expect(listener.onError).toHaveBeenCalled();
          expect(listener.onError.mock.calls[0][0].subscriptionClosed).toBe(
            false,
          );
        });
      });

      describe("successfully subscribed", () => {
        beforeEach(() => {
          respondSuccessToSubscribe(ws, subReq1);
        });

        it("should call onSuccessfulSubscription", () => {
          expect(listener.onSuccessfulSubscription).toHaveBeenCalled();
        });

        it("should correctly return regular updates", async () => {
          const idNum2 = currentSubscriptionId;

          sendObjectUpdateResponse(ws, `${idNum2}`);
          await listenerPromise.promise;
          expect(listener.onChange).toHaveBeenCalled();
          expect(updateReceived).toMatchInlineSnapshot(`
            {
              "object": {
                "$apiName": "Employee",
                "$objectSpecifier": "Employee:undefined",
                "$objectType": "Employee",
                "$primaryKey": undefined,
                "$propertySecurities": undefined,
                "$title": undefined,
                "employeeId": 1,
              },
              "state": "ADDED_OR_UPDATED",
            }
          `);
        });

        it("should correctly return reference update", async () => {
          const idNum2 = currentSubscriptionId;

          sendReferenceUpdatesResponse(ws, `${idNum2}`);
          await listenerPromise.promise;
          expect(listener.onChange).toHaveBeenCalled();
          expect(updateReceived).toMatchInlineSnapshot(`
            {
              "object": {
                "$apiName": "Employee",
                "$objectSpecifier": "Employee:12345",
                "$objectType": "Employee",
                "$primaryKey": "12345",
                "$propertySecurities": undefined,
                "$title": undefined,
                "employeeId": "12345",
                "employeeLocation": GeotimeSeriesPropertyImpl {
                  "lastFetchedValue": {
                    "time": "111",
                    "value": {
                      "coordinates": [
                        100,
                        200,
                      ],
                      "type": "Point",
                    },
                  },
                },
              },
              "state": "ADDED_OR_UPDATED",
            }
          `);
        });

        describe("additional subscription", async () => {
          let unsubscribe2: () => void;
          let subReq2: ObjectSetStreamSubscribeRequests;
          beforeEach(async () => {
            unsubscribe2 = await client.subscribe(
              {
                type: "object",
                apiName: "Employee",
              },
              {
                type: "base",
                objectType: Employee.apiName,
              },
              listener,
              ["employeeId"],
            );

            subReq2 = await expectSubscribeMessages(ws);

            respondSuccessToSubscribe(ws, subReq2);
          });

          afterEach(() => {
            unsubscribe2();
          });

          it("only requests requested properties", () => {
            expect(subReq2.requests[1].propertySet).toEqual(["employeeId"]);
            expect(subReq2.requests[1].referenceSet).toEqual([]);
          });

          it("does not trigger an out of date ", () => {
            expect(listener.onOutOfDate).not.toHaveBeenCalled();
          });
        });

        describe("socket closed abruptly", () => {
          beforeEach(() => {
            setWebSocketState(ws, "close");
            expectEqualRemoveAndAddListeners(ws);
          });

          describe("reconnect, resubscribe successfully", async () => {
            beforeEach(async () => {
              [ws] = await Promise.all([
                expectWebSocketConstructed(),
                // delay for connection reconnect with exponential backoff
                // First attempt: MINIMUM_RECONNECT_DELAY * 2^0 = 2000ms +/- jitter
                vi.advanceTimersByTimeAsync(
                  MINIMUM_RECONNECT_DELAY * (1 + 0.3),
                ),
              ]);
              setWebSocketState(ws, "open");

              const subReq2 = await expectSubscribeMessages(ws);
              respondSuccessToSubscribe(ws, subReq2);
            });

            it("should send out of date", () => {
              expect(listener.onOutOfDate).toHaveBeenCalledTimes(1);
            });
          });
        });

        it("should not send onOutOfDate for first call", () => {
          expect(MockedWebSocket).not.toHaveBeenCalled();
          expect(listener.onOutOfDate).not.toHaveBeenCalled();
          expect(listener.onChange).not.toHaveBeenCalled();
          expect(listener.onError).not.toHaveBeenCalled();
        });

        it("should create url correctly", () => {
          expect(constructWebsocketUrl(STACK, "ontologyRid1").toString())
            .toEqual(
              "wss://stack.palantircustom.com/foo/first/someStuff/api/v2/ontologySubscriptions/ontologies/ontologyRid1/streamSubscriptions",
            );
        });
      });
    });

    describe("exponential backoff behavior", () => {
      let minimalClient: MinimalClient;
      let client: ObjectSetListenerWebsocket;
      let listener: MockedListener;

      beforeEach(() => {
        minimalClient = createMinimalClient(
          { ontologyRid: $ontologyRid },
          STACK,
          async () => "myAccessToken",
          { logger: rootLogger },
        );
        client = new ObjectSetListenerWebsocket({
          ...minimalClient,
          logger: rootLogger.child({ oslwInst: "backoff-test" }),
        }, {
          minimumReconnectDelayMs: 1000,
        });

        listener = {
          onChange: vi.fn(),
          onError: vi.fn(),
          onOutOfDate: vi.fn(),
          onSuccessfulSubscription: vi.fn(),
        };

        vi.useFakeTimers();
      });

      afterEach(() => {
        vi.restoreAllMocks();
      });

      it("should use exponential backoff for reconnection attempts", async () => {
        // First connection attempt
        const [ws1, unsubscribe] = await subscribeAndExpectWebSocket(
          client,
          listener,
        );
        setWebSocketState(ws1, "close");

        // Second connection (first reconnect) - should wait ~1000ms (+/- jitter)
        const ws2Promise = expectWebSocketConstructed();
        await vi.advanceTimersByTimeAsync(1300); // 1000ms + max jitter (30%)
        const ws2 = await ws2Promise;
        setWebSocketState(ws2, "close");

        // Third connection (second reconnect) - should wait ~2000ms (+/- jitter)
        const ws3Promise = expectWebSocketConstructed();
        await vi.advanceTimersByTimeAsync(2600); // 2000ms + max jitter (30%)
        const ws3 = await ws3Promise;
        setWebSocketState(ws3, "close");

        // Fourth connection (third reconnect) - should wait ~4000ms (+/- jitter)
        const ws4Promise = expectWebSocketConstructed();
        await vi.advanceTimersByTimeAsync(5200); // 4000ms + max jitter (30%)
        const ws4 = await ws4Promise;

        // Verify backoff reset on successful connection
        setWebSocketState(ws4, "open");
        setWebSocketState(ws4, "close");

        // After successful connection, backoff should reset to initial delay
        const ws5Promise = expectWebSocketConstructed();
        await vi.advanceTimersByTimeAsync(1300); // Back to 1000ms + max jitter
        const ws5 = await ws5Promise;

        unsubscribe();
        setWebSocketState(ws5, "close");
      });
    });
  });

  describe("types", () => {
    it("does not return rid on object type if requested and object has a GTSR", async () => {
      const client: Client =
        ((a: any) => ({ subscribe: (a: any, b: any) => {} })) as Client;

      client(Employee).subscribe({
        onChange: (change) => {
          change.object.$rid; // This doesn't error because we're forcing the type through, this is expected
        },
      }, {
        // @ts-expect-error
        includeRid: true,
      });
    });

    it("does not return rid on object type if not requested", async () => {
      const client: Client =
        ((a: any) => ({ subscribe: (a: any, b: any) => {} })) as Client;

      client(Office).subscribe({
        onChange: (change) => {
          // @ts-expect-error
          change.object.$rid;
        },
      });
    });

    it("does return rid on object type if requested and object does not have a GTSR", async () => {
      const client: Client =
        ((a: any) => ({ subscribe: (a: any, b: any) => {} })) as Client;

      client(Employee).subscribe({
        onChange: (change) => {
          expectTypeOf(change.object.$rid).toBeString();
        },
      }, { includeRid: true, properties: ["employeeId"] });

      client(Office).subscribe({
        onChange: (change) => {
          expectTypeOf(change.object.$rid).toBeString();
        },
      }, { includeRid: true });
    });
  });
});

interface RawWebSocketPlus
  extends Pick<ImportedWebSocket, "addEventListener" | "removeEventListener">
{
  _eventEmitter: EventTarget;
  readyState: 0 | 1 | 2 | 3;
  send: MockedFunction<ImportedWebSocket["send"]>;
  close: MockedFunction<ImportedWebSocket["close"]>;
}

interface MockedWebSocket
  extends MockedClass<typeof ImportedWebSocket>, MockedObject<RawWebSocketPlus>
{
}

type MockedListener = MockedObject<
  Required<
    ObjectSetSubscription.Listener<Employee, PropertyKeys<Employee>>
  >
>;

function respondSuccessToSubscribe(
  ws: MockedWebSocket,
  subReq2: ObjectSetStreamSubscribeRequests,
) {
  sendToClient<StreamMessage>(
    ws,
    {
      id: subReq2.id,
      type: "subscribeResponses",
      responses: [{
        type: "success",
        id: `${++currentSubscriptionId}`,
      }],
    },
  );
}

function sendObjectUpdateResponse(
  ws: MockedWebSocket,
  subId: string,
) {
  const updateMessage: StreamMessage = {
    type: "objectSetChanged",
    id: subId,
    updates: [{
      type: "object",
      state: "ADDED_OR_UPDATED",
      object: {
        __apiName: "Employee",
        employeeId: 1,
      },
    }],
  };

  sendToClient<StreamMessage>(
    ws,
    updateMessage,
  );
}

function sendReferenceUpdatesResponse(
  ws: MockedWebSocket,
  subId: string,
) {
  const referenceUpdateMessage: StreamMessage = {
    type: "objectSetChanged",
    id: subId,
    updates: [{
      "type": "reference",
      "objectType": "Employee",
      "primaryKey": { "employeeId": "12345" },
      "property": "employeeLocation",
      "value": {
        "timestamp": "111",
        "type": "geotimeSeriesValue",
        "position": [100, 200],
      },
    }],
  };

  sendToClient<StreamMessage>(
    ws,
    referenceUpdateMessage,
  );
}

function expectEqualRemoveAndAddListeners(ws: MockedWebSocket) {
  expect(ws.removeEventListener).toHaveBeenCalledTimes(
    ws.addEventListener.mock.calls.length,
  );
}

async function expectSubscribeMessages(
  ws: MockedWebSocket,
  times: number = 1,
): Promise<ObjectSetStreamSubscribeRequests> {
  return await vi.waitFor(() => {
    expect(ws.send).toBeCalledTimes(times);
    const result = JSON.parse(ws.send.mock.lastCall![0].toString());
    ws.send.mockClear();
    return result;
  });
}

async function subscribeAndExpectWebSocket(
  client: ObjectSetListenerWebsocket,
  listener: MockedListener,
): Promise<readonly [MockedWebSocket, () => void]> {
  const [ws, unsubscribe] = await Promise.all([
    expectWebSocketConstructed(),
    client.subscribe<Employee, PropertyKeys<Employee>>(
      {
        apiName: "Employee",
        type: "object",
      },
      {
        type: "base",
        objectType: Employee.apiName,
      },
      listener,
    ),
  ]);

  // otherwise the ObjectSetListenerWebSocket is sitting waiting for it to "connect"
  setWebSocketState(ws, "open");

  return [ws, unsubscribe] as const;
}

async function expectWebSocketConstructed(): Promise<MockedWebSocket> {
  expect(MockedWebSocket).toHaveBeenCalledTimes(0);

  const ws = await vi.waitFor(() => {
    expect(MockedWebSocket).toHaveBeenCalled();
    expect(MockedWebSocket.mock.results[0].type === "return");
    return MockedWebSocket.mock.results[0].value as MockedWebSocket;
  });

  expect(MockedWebSocket).toHaveBeenCalledTimes(1);
  MockedWebSocket.mockClear();
  expect(MockedWebSocket).toHaveBeenCalledTimes(0);

  return ws;
}

function createMockWebSocketConstructor(
  OriginalWebSocket: WebSocket,
  logger: Logger,
): MockedWebSocket {
  let i = 0;
  const ret = vi.fn(function(..._args: any[]): MockedWebSocket {
    const webSocketInst = i++;
    logger.debug("WebSocket constructor called");
    const eventEmitter = new EventTarget();

    return {
      addEventListener: vi.fn(
        eventEmitter.addEventListener.bind(eventEmitter),
      ) as any,
      removeEventListener: vi.fn(
        eventEmitter.removeEventListener.bind(eventEmitter),
      ) as any,

      send: vi.fn((a, _b: any) => {
        logger.debug(
          { message: JSON.parse(a.toString()), webSocketInst },
          "send() called",
        );
      }),
      close: vi.fn(),
      _eventEmitter: eventEmitter,
      readyState: OriginalWebSocket.CONNECTING,
    } satisfies RawWebSocketPlus as any as MockedWebSocket;
    // ^ we only implement some things but the type system wants to think its the full deal,
    // thus the satisfies plus the cast
  }) as any as MockedWebSocket;

  Object.assign(ret, {
    OPEN: OriginalWebSocket.OPEN,
    CLOSED: OriginalWebSocket.CLOSED,
    CLOSING: OriginalWebSocket.CLOSING,
    CONNECTING: OriginalWebSocket.CONNECTING,
  });

  return ret;
}

function setWebSocketState(ws: MockedWebSocket, readyState: "open" | "close") {
  const newState = readyState === "open"
    ? ImportedWebSocket.OPEN
    : ImportedWebSocket.CLOSED;

  if (newState === ws.readyState) return;

  ws.readyState = newState;
  ws._eventEmitter.dispatchEvent(new Event(readyState, {}));
}

function addLoggerToApiServer(apiServer: SetupServer, logger: Logger) {
  const z = (
    name: string,
    { requestId, request }: { requestId: string; request: Request },
  ) => logger.trace({ requestId, url: request.url }, name);

  const eventNames = [
    "request:start",
    "request:match",
    "request:end",
    "request:unhandled",
    "response:bypass",
    "response:mocked",
  ] as const;

  for (const c of eventNames) {
    apiServer.events.on(c as typeof eventNames[number], z.bind(undefined, c));
  }
}

const SubscribeMessage = z.object({
  id: z.string(),
  requests: z.array(z.object({
    objectSet: z.object({ id: z.string() }),
    propertySet: z.array(z.string()),
    referenceSet: z.array(z.string()),
  })),
});

class MessageEvent extends Event {
  data: string;
  constructor(data: any) {
    super("message");
    this.data = JSON.stringify(data);
  }
}

function sendToClient<T>(ws: MockedWebSocket, t: T) {
  ws._eventEmitter.dispatchEvent(new MessageEvent(t));
}
