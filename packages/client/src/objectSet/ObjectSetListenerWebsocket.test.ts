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

import type { ObjectOrInterfaceDefinition } from "@osdk/api";
import { $ontologyRid, Employee, Office } from "@osdk/client.test.ontology";
import type {
  ObjectSetSubscribeRequests,
  StreamMessage_subscribeResponses,
} from "@osdk/client.unstable.osw";
import { apiServer } from "@osdk/shared.test";
import ImportedWebSocket from "isomorphic-ws";
import { http, HttpResponse } from "msw";
import type { Logger } from "pino";
import type { MockedClass, MockedFunction, MockedObject } from "vitest";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { z } from "zod";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { conjureUnionType } from "./conjureUnionType.js";
import type { ObjectSetListener } from "./ObjectSetListener.js";
import { ObjectSetListenerWebsocket } from "./ObjectSetListenerWebsocket.js";

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
  return pino(
    { level: "info" },
    (pinoPretty.build)({
      sync: true,
      timestampKey: undefined,
      errorLikeObjectKeys: ["error", "err", "exception"],
      errorProps: "stack,cause,properties",
      ignore: "time,hostname,pid",
      destination: new PinoConsoleLogDestination(),
    }),
  );
});

// make local uses of WebSocket typed right
const MockedWebSocket = ImportedWebSocket as unknown as MockedWebSocket;

const STACK = "https://stack.palantir.com";

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

describe("ObjectSetListenerWebsocket", async () => {
  beforeAll(async () => {
    apiServer.listen();
    addLoggerToApiServer(rootLogger);
  });

  afterAll(() => {
    apiServer.close();
  });

  describe("basic setup", () => {
    let minimalClient: MinimalClient;

    const MINIMUM_RECONNECT_DELAY = 2_000;
    const OBJECT_SET_EXPIRY_MS = 60_000;

    let client: ObjectSetListenerWebsocket;
    let listener: MockedObject<
      Required<ObjectSetListener<ObjectOrInterfaceDefinition>>
    >;
    let oslwInst = 0;

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
        objectSetExpiryMs: OBJECT_SET_EXPIRY_MS,
      });

      listener = {
        onChange: vi.fn(),
        onError: vi.fn(),
        onOutOfDate: vi.fn(),
      };

      let objectSetRidCounter = 0;
      apiServer.use(
        http.post(
          `${STACK}/object-set-service/api/objectSets/temporary`,
          () =>
            HttpResponse.json({
              objectSetRid: `rid.hi.${objectSetRidCounter++}`,
            }),
        ),
        http.post(
          `${STACK}/object-set-watcher/api/object-set-watcher/batchEnableWatcher`,
          async () => {
            return HttpResponse.json({});
          },
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
      let subReq1: ObjectSetSubscribeRequests;

      beforeEach(async () => {
        [ws, unsubscribe] = await subscribeAndExpectWebSocket(
          client,
          listener,
        );

        subReq1 = await expectSingleSubscribeMessage(ws);
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
        expect(ws.send).not.toHaveBeenCalled();
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
              // delay for connection reconnect
              vi.advanceTimersByTimeAsync(MINIMUM_RECONNECT_DELAY),
            ]);
            setWebSocketState(ws, "open");
          });

          describe("subscribe and respond", () => {
            beforeEach(async () => {
              const subReq2 = await expectSingleSubscribeMessage(ws);
              respondSuccessToSubscribe(ws, subReq2);
            });

            it("should not send out of date", () => {
              expect(listener.onOutOfDate).not.toHaveBeenCalled();
            });
          });
        });
      });

      describe("successfully subscribed", () => {
        beforeEach(() => {
          respondSuccessToSubscribe(ws, subReq1);
        });

        describe("additional subscription", async () => {
          let unsubscribe2: () => void;
          let subReq2: ObjectSetSubscribeRequests;
          beforeEach(async () => {
            [unsubscribe2, subReq2] = await Promise.all([
              client.subscribe({
                type: "base",
                objectType: Office.apiName,
              }, listener),

              expectSingleSubscribeMessage(ws),
            ]);
            rootLogger.fatal({ subReq2 });

            respondSuccessToSubscribe(ws, subReq2);
          });

          afterEach(() => {
            unsubscribe2();
          });

          it("does not trigger an out of date ", () => {
            expect(listener.onOutOfDate).not.toHaveBeenCalled();
          });
        });

        describe("temporary object set expires", () => {
          beforeEach(async () => {
            await vi.advanceTimersByTimeAsync(OBJECT_SET_EXPIRY_MS + 1000);
          });

          it("should resubscribe and fire out of date", async () => {
            vi.runAllTicks();
            const subReq2 = await expectSingleSubscribeMessage(ws);
            expect(subReq2.id).not.toEqual(subReq1.id);
            respondSuccessToSubscribe(ws, subReq2);

            expect(listener.onOutOfDate).toHaveBeenCalledTimes(1);
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
                // delay for connection reconnect
                vi.advanceTimersByTimeAsync(MINIMUM_RECONNECT_DELAY),
              ]);
              setWebSocketState(ws, "open");

              const subReq2 = await expectSingleSubscribeMessage(ws);
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
      });
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
  Required<ObjectSetListener<ObjectOrInterfaceDefinition>>
>;

function respondSuccessToSubscribe(
  ws: MockedWebSocket,
  subReq2: ObjectSetSubscribeRequests,
) {
  sendToClient<StreamMessage_subscribeResponses>(
    ws,
    conjureUnionType("subscribeResponses", {
      id: subReq2.id,
      responses: subReq2.requests.map((_, i) =>
        conjureUnionType("success", { id: `id-${i}` })
      ),
    }),
  );
}

function expectEqualRemoveAndAddListeners(ws: MockedWebSocket) {
  expect(ws.removeEventListener).toHaveBeenCalledTimes(
    ws.addEventListener.mock.calls.length,
  );
}

async function expectSingleSubscribeMessage(
  ws: MockedWebSocket,
): Promise<ObjectSetSubscribeRequests> {
  return SubscribeMessage.parse(
    await consumeSingleSend(ws),
  ) as ObjectSetSubscribeRequests;
}

async function subscribeAndExpectWebSocket(
  client: ObjectSetListenerWebsocket,
  listener: MockedListener,
): Promise<readonly [MockedWebSocket, () => void]> {
  const [ws, unsubscribe] = await Promise.all([
    expectWebSocketConstructed(),
    client.subscribe({
      type: "base",
      objectType: Employee.apiName,
    }, listener),
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

async function consumeSingleSend(ws: any) {
  return await vi.waitFor(() => {
    expect(ws.send).toBeCalledTimes(1);
    const result = JSON.parse(ws.send.mock.lastCall![0].toString());
    ws.send.mockClear();
    return result;
  });
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

function addLoggerToApiServer(logger: Logger) {
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
    objectSet: z.string(),
    objectSetContext: z.any(),
    watchAllLinks: z.boolean(),
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
