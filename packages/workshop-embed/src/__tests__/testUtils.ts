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

import { type Mock, vi } from "vitest";

export interface TestWindow extends EventTarget {
  parent: Window;
  location: { search: string };
  postMessage: Mock;
  asWindow(): Window;
}

export interface TestPort extends EventTarget {
  postMessage: Mock;
  close: Mock;
  start: Mock;
  asPort(): MessagePort;
}

export interface TestChannel {
  port1: TestPort;
  port2: TestPort;
}

export function createTestWindow(): TestWindow {
  const target: TestWindow = Object.assign(new EventTarget(), {
    parent: undefined as unknown as Window,
    location: { search: "?workshopEmbed=1" },
    postMessage: vi.fn(),
    asWindow(): Window {
      return target as unknown as Window;
    },
  });
  target.parent = target.asWindow();
  return target;
}

export function createTestPort(): TestPort {
  const port: TestPort = Object.assign(new EventTarget(), {
    postMessage: vi.fn(),
    close: vi.fn(),
    start: vi.fn(),
    asPort(): MessagePort {
      return port as unknown as MessagePort;
    },
  });
  return port;
}

export function createTestChannel(): TestChannel {
  return { port1: createTestPort(), port2: createTestPort() };
}

export function dispatchMessage(
  target: EventTarget,
  data: unknown,
  source?: Window,
  origin = "https://parent.example.com",
  ports: TestPort[] = [],
): void {
  target.dispatchEvent(
    Object.assign(new Event("message"), {
      data,
      source,
      origin,
      ports: ports.map((port) => port.asPort()),
    }),
  );
}
