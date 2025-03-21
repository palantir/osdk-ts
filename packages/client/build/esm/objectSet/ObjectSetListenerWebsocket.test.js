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

import { $ontologyRid, Employee } from "@osdk/client.test.ontology";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import ImportedWebSocket from "isomorphic-ws";
import { http, HttpResponse } from "msw";
import pDefer from "p-defer";
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import { constructWebsocketUrl, ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

// it needs to be hoisted because its referenced from our mocked WebSocket
// which must be hoisted to work
const rootLogger = await vi.hoisted(async () => {
  const pino = (await import("pino")).pino;
  const pinoPretty = await import("pino-pretty");
  const {
    EventEmitter
  } = await import("node:events");
  return Promise.resolve(pino({
    level: "info"
  }, pinoPretty.build({
    sync: true,
    timestampKey: undefined,
    errorLikeObjectKeys: ["error", "err", "exception"],
    errorProps: "stack,cause,properties",
    ignore: "time,hostname,pid",
    destination: new class extends EventEmitter {
      write(a) {
        // remove trailing newline since console.log adds one
        if (a.at(-1) === "\n") a = a.slice(0, -1);

        // This lets the test framework aggregate the logs per test, whereas direct to stdout does not
        console.log(a);
      }
    }()
  })));
});

// make local uses of WebSocket typed right
const MockedWebSocket = ImportedWebSocket;
const STACK = "https://stack.palantirCustom.com/foo/first/someStuff/";
vi.mock("isomorphic-ws", async importOriginal => {
  const original = await importOriginal();
  const WebSocket = createMockWebSocketConstructor(original.default, rootLogger);
  return {
    default: WebSocket,
    WebSocket
  };
});
let currentSubscriptionId = 0;
describe("ObjectSetListenerWebsocket", async () => {
  let apiServer;
  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(STACK), createClient);
    ({
      apiServer
    } = testSetup);
    addLoggerToApiServer(testSetup.apiServer, rootLogger);
    return () => {
      testSetup.apiServer.close();
    };
  });
  describe("basic setup", () => {
    let minimalClient;
    const MINIMUM_RECONNECT_DELAY = 2_000;
    let client;
    let listener;
    let oslwInst = 0;
    let updateReceived = undefined;
    let listenerPromise;
    beforeEach(() => {
      minimalClient = createMinimalClient({
        ontologyRid: $ontologyRid
      }, STACK, async () => "myAccessToken", {
        logger: rootLogger
      });
      client = new ObjectSetListenerWebsocket({
        ...minimalClient,
        logger: rootLogger.child({
          oslwInst: oslwInst++
        })
      }, {
        minimumReconnectDelayMs: MINIMUM_RECONNECT_DELAY
      });
      listenerPromise = pDefer();
      listener = {
        onChange: vi.fn(o => {
          updateReceived = o;
          listenerPromise.resolve();
        }),
        onError: vi.fn(),
        onOutOfDate: vi.fn(),
        onSuccessfulSubscription: vi.fn()
      };
      let objectSetRidCounter = 0;
      apiServer.use(http.post(`${STACK}api/v2/ontologySubscriptions/ontologies/${$ontologyRid}/streamSubscriptions`, () => HttpResponse.json({
        objectSetRid: `rid.hi.${objectSetRidCounter++}`
      })));
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
      let ws;
      let unsubscribe;
      let subReq1;
      beforeEach(async () => {
        [ws, unsubscribe] = await subscribeAndExpectWebSocket(client, listener);
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
        expect(subReq1.requests[0].propertySet).toEqual(["employeeId", "fullName", "office", "class", "startDate", "employeeStatus", "employeeSensor"]);
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
            [ws] = await Promise.all([expectWebSocketConstructed(),
            // delay for connection reconnect
            vi.advanceTimersByTimeAsync(MINIMUM_RECONNECT_DELAY)]);
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
          expect(listener.onError.mock.calls[0][0].subscriptionClosed).toBe(false);
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
          let unsubscribe2;
          let subReq2;
          beforeEach(async () => {
            unsubscribe2 = await client.subscribe({
              type: "object",
              apiName: "Employee"
            }, {
              type: "base",
              objectType: Employee.apiName
            }, listener, ["employeeId"]);
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
              [ws] = await Promise.all([expectWebSocketConstructed(),
              // delay for connection reconnect
              vi.advanceTimersByTimeAsync(MINIMUM_RECONNECT_DELAY)]);
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
          expect(constructWebsocketUrl(STACK, "ontologyRid1").toString()).toEqual("wss://stack.palantircustom.com/foo/first/someStuff/api/v2/ontologySubscriptions/ontologies/ontologyRid1/streamSubscriptions");
        });
      });
    });
  });
});
function respondSuccessToSubscribe(ws, subReq2) {
  sendToClient(ws, {
    id: subReq2.id,
    type: "subscribeResponses",
    responses: [{
      type: "success",
      id: `${++currentSubscriptionId}`
    }]
  });
}
function sendObjectUpdateResponse(ws, subId) {
  sendToClient(ws, {
    type: "objectSetChanged",
    id: subId,
    updates: [{
      type: "object",
      state: "ADDED_OR_UPDATED",
      object: {
        __apiName: "Employee",
        employeeId: 1
      }
    }]
  });
}
function sendReferenceUpdatesResponse(ws, subId) {
  sendToClient(ws, {
    type: "objectSetChanged",
    id: subId,
    updates: [{
      "type": "reference",
      "objectType": "Employee",
      "primaryKey": {
        "employeeId": "12345"
      },
      "property": "employeeLocation",
      "value": {
        "timestamp": "111",
        "type": "geotimeSeriesValue",
        "position": [100, 200]
      }
    }]
  });
}
function expectEqualRemoveAndAddListeners(ws) {
  expect(ws.removeEventListener).toHaveBeenCalledTimes(ws.addEventListener.mock.calls.length);
}
async function expectSubscribeMessages(ws, times = 1) {
  return await vi.waitFor(() => {
    expect(ws.send).toBeCalledTimes(times);
    const result = JSON.parse(ws.send.mock.lastCall[0].toString());
    ws.send.mockClear();
    return result;
  });
}
async function subscribeAndExpectWebSocket(client, listener) {
  const [ws, unsubscribe] = await Promise.all([expectWebSocketConstructed(), client.subscribe({
    apiName: "Employee",
    type: "object"
  }, {
    type: "base",
    objectType: Employee.apiName
  }, listener)]);

  // otherwise the ObjectSetListenerWebSocket is sitting waiting for it to "connect"
  setWebSocketState(ws, "open");
  return [ws, unsubscribe];
}
async function expectWebSocketConstructed() {
  expect(MockedWebSocket).toHaveBeenCalledTimes(0);
  const ws = await vi.waitFor(() => {
    expect(MockedWebSocket).toHaveBeenCalled();
    expect(MockedWebSocket.mock.results[0].type === "return");
    return MockedWebSocket.mock.results[0].value;
  });
  expect(MockedWebSocket).toHaveBeenCalledTimes(1);
  MockedWebSocket.mockClear();
  expect(MockedWebSocket).toHaveBeenCalledTimes(0);
  return ws;
}
function createMockWebSocketConstructor(OriginalWebSocket, logger) {
  let i = 0;
  const ret = vi.fn(function (..._args) {
    const webSocketInst = i++;
    logger.debug("WebSocket constructor called");
    const eventEmitter = new EventTarget();
    return {
      addEventListener: vi.fn(eventEmitter.addEventListener.bind(eventEmitter)),
      removeEventListener: vi.fn(eventEmitter.removeEventListener.bind(eventEmitter)),
      send: vi.fn(a => {
        logger.debug({
          message: JSON.parse(a.toString()),
          webSocketInst
        }, "send() called");
      }),
      close: vi.fn(),
      _eventEmitter: eventEmitter,
      readyState: OriginalWebSocket.CONNECTING
    };
    // ^ we only implement some things but the type system wants to think its the full deal,
    // thus the satisfies plus the cast
  });
  Object.assign(ret, {
    OPEN: OriginalWebSocket.OPEN,
    CLOSED: OriginalWebSocket.CLOSED,
    CLOSING: OriginalWebSocket.CLOSING,
    CONNECTING: OriginalWebSocket.CONNECTING
  });
  return ret;
}
function setWebSocketState(ws, readyState) {
  const newState = readyState === "open" ? ImportedWebSocket.OPEN : ImportedWebSocket.CLOSED;
  if (newState === ws.readyState) return;
  ws.readyState = newState;
  ws._eventEmitter.dispatchEvent(new Event(readyState, {}));
}
function addLoggerToApiServer(apiServer, logger) {
  const z = (name, {
    requestId,
    request
  }) => logger.trace({
    requestId,
    url: request.url
  }, name);
  const eventNames = ["request:start", "request:match", "request:end", "request:unhandled", "response:bypass", "response:mocked"];
  for (const c of eventNames) {
    apiServer.events.on(c, z.bind(undefined, c));
  }
}
const SubscribeMessage = z.object({
  id: z.string(),
  requests: z.array(z.object({
    objectSet: z.object({
      id: z.string()
    }),
    propertySet: z.array(z.string()),
    referenceSet: z.array(z.string())
  }))
});
class MessageEvent extends Event {
  constructor(data) {
    super("message");
    this.data = JSON.stringify(data);
  }
}
function sendToClient(ws, t) {
  ws._eventEmitter.dispatchEvent(new MessageEvent(t));
}
//# sourceMappingURL=ObjectSetListenerWebsocket.test.js.map