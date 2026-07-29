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

/**
 * The subset of the `WebSocket` interface that {@link ObjectSetListenerWebsocket}
 * depends on. A real `WebSocket` satisfies this shape, so the default connection is
 * unchanged; embedders (e.g. embedded ontology) can supply an alternate transport that
 * speaks the same `StreamMessage` wire protocol without a real WebSocket.
 *
 * `readyState` uses the standard numeric values (0=CONNECTING, 1=OPEN, 2=CLOSING,
 * 3=CLOSED); the class compares against the `WebSocket.*` constants from its own import.
 */
export interface SubscriptionConnection {
  readyState: number;
  send(data: string): void;
  close(): void;
  addEventListener(
    type: "open" | "message" | "close" | "error",
    listener: (ev: any) => void
  ): void;
  removeEventListener(
    type: "open" | "message" | "close" | "error",
    listener: (ev: any) => void
  ): void;
}

/**
 * The injectable seam for the subscription transport. Called by
 * {@link ObjectSetListenerWebsocket} whenever it needs a fresh connection. Zero-arg: it
 * owns URL/token construction internally, since everything it needs (`baseUrl`,
 * `ontologyRid`, `tokenProvider`) is already available on the client it closes over. The
 * default constructs a real `WebSocket`.
 */
export type CreateSubscriptionConnectionFn = () =>
  | SubscriptionConnection
  | Promise<SubscriptionConnection>;
