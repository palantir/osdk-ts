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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { WorkshopModuleConnection } from "../connection.js";
import { listenForWorkshopModuleEmbedMessages } from "../listenForWorkshopModuleEmbedMessages.js";
import { createMessage } from "../protocol.js";
import {
  createTestPort,
  createTestWindow,
  dispatchMessage,
  type TestPort,
  type TestWindow,
} from "./testUtils.js";

describe("listenForWorkshopModuleEmbedMessages", () => {
  let host: TestWindow;
  let parent: TestWindow;
  let port: TestPort;
  let stop: (() => void) | undefined;

  beforeEach(() => {
    parent = createTestWindow();
    host = createTestWindow();
    host.parent = parent.asWindow();
    port = createTestPort();
  });

  afterEach(() => stop?.());

  function probe(sessionId = "session", origin = "https://parent.example.com") {
    dispatchMessage(
      host,
      createMessage("probe", sessionId),
      parent.asWindow(),
      origin,
    );
  }

  function connect(
    sessionId = "session",
    targetPort = port,
    origin = "https://parent.example.com",
  ) {
    dispatchMessage(
      host,
      createMessage("connect", sessionId),
      parent.asWindow(),
      origin,
      [targetPort],
    );
  }

  it.each(["", "?workshopEmbed", "?workshopEmbed=0", "?workshopEmbed=true"])(
    "does not listen without the exact opt-in: %s",
    (search) => {
      host.location.search = search;
      stop = listenForWorkshopModuleEmbedMessages({
        hostWindow: host.asWindow(),
      });
      probe();
      connect();
      expect(parent.postMessage).not.toHaveBeenCalled();
      expect(port.start).not.toHaveBeenCalled();
    },
  );

  it("does not listen when loaded as a top-level module", () => {
    host.parent = host.asWindow();
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
    });
    dispatchMessage(host, createMessage("probe", "session"), host.asWindow());
    expect(host.postMessage).not.toHaveBeenCalled();
  });

  it("replies to the parent origin and acknowledges on the transferred port", () => {
    const onConnect = vi.fn();
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect,
    });
    probe();
    expect(parent.postMessage).toHaveBeenCalledExactlyOnceWith(
      createMessage("available", "session"),
      "https://parent.example.com",
    );
    connect();
    expect(port.postMessage).toHaveBeenCalledExactlyOnceWith(
      createMessage("connected", "session"),
    );
    expect(port.start).toHaveBeenCalledTimes(1);
    expect(onConnect).toHaveBeenCalledWith(
      expect.objectContaining({ port, sessionId: "session" }),
    );
  });

  it("ignores non-parent sources, opaque origins, and unsupported protocol versions", () => {
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
    });
    dispatchMessage(
      host,
      createMessage("probe", "session"),
      createTestWindow().asWindow(),
    );
    probe("session", "null");
    dispatchMessage(
      host,
      { ...createMessage("probe", "session"), version: 2 },
      parent.asWindow(),
    );
    expect(parent.postMessage).not.toHaveBeenCalled();
    connect();
    expect(port.start).not.toHaveBeenCalled();
  });

  it("rejects probes with ports and connects without a matching probe", () => {
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
    });
    const unexpectedPort = createTestPort();
    dispatchMessage(
      host,
      createMessage("probe", "session"),
      parent.asWindow(),
      undefined,
      [unexpectedPort],
    );
    expect(unexpectedPort.close).toHaveBeenCalledTimes(1);
    expect(parent.postMessage).not.toHaveBeenCalled();
    connect();
    expect(port.close).toHaveBeenCalledTimes(1);
    expect(port.start).not.toHaveBeenCalled();
  });

  it("requires the same origin and session between probe and connect", () => {
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
    });
    probe();
    connect("different-session");
    const otherOriginPort = createTestPort();
    connect("session", otherOriginPort, "https://another-parent.example.com");
    expect(port.start).not.toHaveBeenCalled();
    expect(otherOriginPort.start).not.toHaveBeenCalled();
    expect(port.close).toHaveBeenCalledTimes(1);
    expect(otherOriginPort.close).toHaveBeenCalledTimes(1);
  });

  it("requires exactly one transferred port", () => {
    const onConnect = vi.fn();
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect,
    });
    probe();
    dispatchMessage(
      host,
      createMessage("connect", "session"),
      parent.asWindow(),
    );
    const extra = createTestPort();
    dispatchMessage(
      host,
      createMessage("connect", "session"),
      parent.asWindow(),
      undefined,
      [port, extra],
    );
    expect(onConnect).not.toHaveBeenCalled();
    expect(port.close).toHaveBeenCalledTimes(1);
    expect(extra.close).toHaveBeenCalledTimes(1);
  });

  it("ignores stale and duplicate connections without disturbing the active connection", () => {
    const onConnect = vi.fn();
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect,
    });
    probe("old");
    probe();
    const stale = createTestPort();
    connect("old", stale);
    connect();
    probe();
    const duplicate = createTestPort();
    connect("session", duplicate);
    expect(stale.close).toHaveBeenCalledTimes(1);
    expect(duplicate.close).toHaveBeenCalledTimes(1);
    expect(port.close).not.toHaveBeenCalled();
    expect(onConnect).toHaveBeenCalledTimes(1);
  });

  it("cleans up the old connection before activating its replacement", () => {
    const cleanup = vi.fn();
    const onConnect = vi.fn((_connection: WorkshopModuleConnection) => cleanup);
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect,
    });
    probe();
    connect();
    const first = onConnect.mock.calls[0][0];
    probe("replacement");
    const next = createTestPort();
    connect("replacement", next);
    expect(port.close).toHaveBeenCalledTimes(1);
    expect(cleanup).toHaveBeenCalledTimes(1);
    first.disconnect();
    expect(next.close).not.toHaveBeenCalled();
    stop();
    stop();
    expect(next.close).toHaveBeenCalledTimes(1);
    expect(cleanup).toHaveBeenCalledTimes(2);
  });

  it.each(["disconnect", "pagehide", "messageerror", "stop", "local"])(
    "cleans up exactly once on %s",
    (type) => {
      const cleanup = vi.fn();
      let connection: WorkshopModuleConnection | undefined;
      stop = listenForWorkshopModuleEmbedMessages({
        hostWindow: host.asWindow(),
        onConnect(value) {
          connection = value;
          return cleanup;
        },
      });
      probe();
      connect();
      if (type === "disconnect")
        dispatchMessage(port, createMessage("disconnect", "session"));
      else if (type === "pagehide") host.dispatchEvent(new Event("pagehide"));
      else if (type === "messageerror")
        port.dispatchEvent(new Event("messageerror"));
      else if (type === "local") connection?.disconnect();
      else stop();
      expect(port.close).toHaveBeenCalledTimes(1);
      expect(cleanup).toHaveBeenCalledTimes(1);
      if (type === "disconnect") {
        expect(port.postMessage).toHaveBeenCalledExactlyOnceWith(
          createMessage("connected", "session"),
        );
      }
      stop();
      expect(port.close).toHaveBeenCalledTimes(1);
      expect(cleanup).toHaveBeenCalledTimes(1);
      parent.postMessage.mockClear();
      probe();
      expect(parent.postMessage).not.toHaveBeenCalled();
    },
  );

  it("ignores stale disconnects and can reconnect after pagehide", () => {
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
    });
    probe();
    connect();
    dispatchMessage(port, createMessage("disconnect", "stale"));
    expect(port.close).not.toHaveBeenCalled();
    host.dispatchEvent(new Event("pagehide"));
    probe("restored");
    const next = createTestPort();
    connect("restored", next);
    expect(next.start).toHaveBeenCalledTimes(1);
  });

  it("closes the incoming port if the previous connection cleanup throws", () => {
    const addListener = vi.spyOn(host, "addEventListener");
    const cleanup = vi.fn(() => {
      throw new Error("Cleanup failed");
    });
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect: () => cleanup,
    });
    probe();
    connect();
    probe("replacement");
    const next = createTestPort();
    const handler = addListener.mock.calls.find(
      ([type]) => type === "message",
    )?.[1];
    if (typeof handler !== "function")
      throw new Error("Message listener missing");
    const event = Object.assign(new Event("message"), {
      data: createMessage("connect", "replacement"),
      source: parent.asWindow(),
      origin: "https://parent.example.com",
      ports: [next.asPort()],
    });
    // Call directly because EventTarget reports listener exceptions asynchronously.
    expect(() => handler.call(host, event)).toThrow("Cleanup failed");
    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(port.close).toHaveBeenCalledTimes(1);
    expect(next.close).toHaveBeenCalledTimes(1);
    expect(next.start).not.toHaveBeenCalled();
  });

  it("does not activate a replacement when the previous cleanup stops the listener", () => {
    const onConnect = vi.fn(() => () => stop?.());
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect,
    });
    probe();
    connect();
    probe("replacement");
    const next = createTestPort();
    connect("replacement", next);
    expect(onConnect).toHaveBeenCalledTimes(1);
    expect(next.close).toHaveBeenCalledTimes(1);
    expect(next.start).not.toHaveBeenCalled();
  });

  it("runs returned cleanup even if onConnect immediately disconnects", () => {
    const cleanup = vi.fn();
    stop = listenForWorkshopModuleEmbedMessages({
      hostWindow: host.asWindow(),
      onConnect(connection) {
        connection.disconnect();
        return cleanup;
      },
    });
    probe();
    connect();
    stop();
    expect(cleanup).toHaveBeenCalledTimes(1);
    expect(port.close).toHaveBeenCalledTimes(1);
  });
});
