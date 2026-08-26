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

import type { Logger } from "@osdk/api";
import ImportedWebSocket from "isomorphic-ws";
import type { MockedClass, MockedFunction, MockedObject } from "vitest";
import { vi } from "vitest";

interface RawWebSocketPlus extends Pick<
  ImportedWebSocket,
  "addEventListener" | "removeEventListener"
> {
  readonly _eventEmitter: EventTarget;
  readonly close: MockedFunction<ImportedWebSocket["close"]>;
  readyState: 0 | 1 | 2 | 3;
  readonly send: MockedFunction<ImportedWebSocket["send"]>;
}

export interface MockedWebSocket
  extends
    MockedClass<typeof ImportedWebSocket>,
    MockedObject<RawWebSocketPlus> {}

export function createMockWebSocketConstructor(
  OriginalWebSocket: typeof ImportedWebSocket,
  logger?: Pick<Logger, "debug">,
): MockedWebSocket {
  let webSocketInstance = 0;
  const MockWebSocket = vi.fn((..._args: any[]): MockedWebSocket => {
    const currentWebSocketInstance = webSocketInstance++;
    logger?.debug("WebSocket constructor called");
    const eventEmitter = new EventTarget();

    return {
      addEventListener: vi.fn(
        eventEmitter.addEventListener.bind(eventEmitter),
      ) as any,
      close: vi.fn(),
      readyState: OriginalWebSocket.CONNECTING,
      removeEventListener: vi.fn(
        eventEmitter.removeEventListener.bind(eventEmitter),
      ) as any,
      send: vi.fn((data, _callback: any) => {
        logger?.debug(
          {
            message: JSON.parse(data.toString()),
            webSocketInstance: currentWebSocketInstance,
          },
          "send() called",
        );
      }),
      _eventEmitter: eventEmitter,
    } satisfies RawWebSocketPlus as any as MockedWebSocket;
  }) as any as MockedWebSocket;

  Object.assign(MockWebSocket, {
    CLOSED: OriginalWebSocket.CLOSED,
    CLOSING: OriginalWebSocket.CLOSING,
    CONNECTING: OriginalWebSocket.CONNECTING,
    OPEN: OriginalWebSocket.OPEN,
  });

  return MockWebSocket;
}

export function sendToClient<T>(webSocket: MockedWebSocket, data: T): void {
  webSocket._eventEmitter.dispatchEvent(
    Object.assign(new Event("message"), { data: JSON.stringify(data) }),
  );
}

export function setWebSocketState(
  webSocket: MockedWebSocket,
  readyState: "close" | "open",
): void {
  const newState =
    readyState === "open" ? ImportedWebSocket.OPEN : ImportedWebSocket.CLOSED;

  if (newState === webSocket.readyState) return;

  webSocket.readyState = newState;
  webSocket._eventEmitter.dispatchEvent(new Event(readyState));
}
