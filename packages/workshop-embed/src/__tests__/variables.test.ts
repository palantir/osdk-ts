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

import { runInNewContext } from "node:vm";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";

import { createConnection } from "../connection.js";
import {
  connectToWorkshopModule,
  listenForWorkshopModuleEmbedMessages,
} from "../index.js";
import type {
  WorkshopModuleConnection,
  WorkshopModuleHostConnection,
  WorkshopVariableMap,
  WorkshopVariableValue,
  WorkshopVariableValues,
} from "../index.js";
import { isModuleSchemaMessage } from "../schema.js";
import { createTestWindow, type TestWindow } from "./testUtils.js";

describe("scalar variables", () => {
  let sender: WorkshopModuleConnection;
  let receiver: WorkshopModuleHostConnection;

  beforeEach(async () => {
    const channel = new MessageChannel();
    sender = createConnection(channel.port1, "session", () => {}).connection;
    createConnection(channel.port2, "session", () => {}, "workshop").activate(
      (connection) => {
        receiver = connection;
      },
    );
    const received = new Promise<void>((resolve) => {
      sender.port.addEventListener(
        "message",
        function receive(event: MessageEvent<unknown>) {
          if (!isModuleSchemaMessage(event.data)) return;
          sender.port.removeEventListener("message", receive);
          resolve();
        },
      );
    });
    receiver.setModuleSchema({
      searchText: { type: "string", isList: false },
      count: { type: "number", isList: false },
      enabled: { type: "boolean", isList: false },
      selectedName: { type: "string", isList: false },
    });
    await received;
  });

  afterEach(() => {
    sender.disconnect();
    receiver.disconnect();
    vi.restoreAllMocks();
  });

  it("delivers scalar inputs from another realm over a real MessageChannel", async () => {
    const values: unknown = runInNewContext(
      '({ searchText: "Ada", count: 0, enabled: false, selectedName: null })',
    );
    const received = nextVariables(receiver);
    sender.setVariables(values as WorkshopVariableValues);
    const result = await received;
    expect(result).toEqual(values);
    expect(result).not.toBe(values);
  });

  it("ignores malformed and foreign-session messages before delivering a valid update", async () => {
    const listener = vi.fn();
    receiver.onVariablesSet(listener);
    const port = sender.port;
    const valid = {
      channel: "workshop-module-embed",
      version: 1,
      sessionId: "session",
      type: "setVariables",
      values: { count: 1 },
    };
    for (const data of [
      null,
      { ...valid, channel: "another-protocol" },
      { ...valid, version: 2 },
      { ...valid, sessionId: "old-session" },
      { ...valid, type: "unknown" },
      ...invalidInputs.map((values) => ({ ...valid, values })),
    ]) {
      port.postMessage(data);
    }
    const received = nextVariables(receiver);
    sender.setVariables(valid.values);
    await received;
    expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 1 });
  });

  it("delivers updates in both directions without echoing them to the sender", async () => {
    const listener = vi.fn();
    sender.onVariablesSet(listener);
    const initial = nextVariables(sender);
    receiver.setVariables({ count: 0, searchText: "Ada" });
    await expect(initial).resolves.toEqual({ count: 0, searchText: "Ada" });

    const inputs = nextVariables(receiver);
    sender.setVariables({ count: 50 });
    await expect(inputs).resolves.toEqual({ count: 50 });
    expect(listener).toHaveBeenCalledOnce();

    const changed = nextVariables(sender);
    receiver.setVariables({ count: 25, searchText: "Grace" });
    await expect(changed).resolves.toEqual({ count: 25, searchText: "Grace" });

    const cleared = nextVariables(sender);
    receiver.setVariables({ searchText: null });
    await expect(cleared).resolves.toEqual({ searchText: null });
    expect(listener.mock.calls).toEqual([
      [{ count: 0, searchText: "Ada" }],
      [{ count: 25, searchText: "Grace" }],
      [{ searchText: null }],
    ]);
  });

  it("keeps receiving current outputs after a failed input send", async () => {
    const postMessage = vi.spyOn(sender.port, "postMessage");
    const error = new Error("Send failed");
    postMessage.mockImplementationOnce(() => {
      throw error;
    });
    expect(() => sender.setVariables({ count: 1 })).toThrow(error);
    expect(() => sender.setVariables({ count: Number.NaN })).toThrow(TypeError);
    const initial = nextVariables(sender);
    receiver.setVariables({ count: 0 });
    await expect(initial).resolves.toEqual({ count: 0 });

    const listener = vi.fn();
    receiver.onVariablesSet(listener);
    const received = nextVariables(receiver);
    sender.setVariables({ count: 2 });
    await received;
    expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 2 });
  });

  it("rejects unsupported inputs before posting a message", () => {
    expectTypeOf<WorkshopVariableValues>().toEqualTypeOf<
      Readonly<Partial<Record<string, WorkshopVariableValue>>>
    >();
    const postMessage = vi.spyOn(sender.port, "postMessage");
    const { setVariables } = sender;
    for (const values of invalidInputs) {
      expect(() => setVariables(values as WorkshopVariableValues)).toThrow(
        TypeError,
      );
    }
    expect(postMessage).not.toHaveBeenCalled();
  });

  it("handles subscription changes during delivery and rejects operations after disconnect", async () => {
    const listener = vi.fn();
    const replacement = vi.fn();
    const unsubscribe = receiver.onVariablesSet((values) => {
      listener(values);
      unsubscribe();
      receiver.onVariablesSet(replacement);
    });
    const received = nextVariables(receiver);
    sender.setVariables({ count: 2 });
    await expect(received).resolves.toEqual({ count: 2 });
    expect(replacement).not.toHaveBeenCalled();

    unsubscribe();
    const next = nextVariables(receiver);
    sender.setVariables({ count: 3 });
    await next;
    expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 2 });
    expect(replacement).toHaveBeenCalledExactlyOnceWith({ count: 3 });

    receiver.disconnect();
    expect(() => receiver.setVariables({ count: 3 })).toThrow("closed");
    expect(() => receiver.onVariablesSet(listener)).toThrow("closed");
  });
});

describe("declared variable types", () => {
  type ModuleVariables = {
    searchText: string;
    count: number;
    enabled: boolean;
  };
  const appOrigin = "https://app.example.com";
  const workshopOrigin = "https://workshop.example.com";
  let parent: TestWindow;
  let child: TestWindow;
  let sender: WorkshopModuleConnection<ModuleVariables>;
  let receiver: WorkshopModuleConnection<ModuleVariables>;
  let stop: (() => void) | undefined;

  beforeEach(async () => {
    parent = createTestWindow();
    child = createTestWindow();
    child.parent = parent.asWindow();
    parent.postMessage.mockImplementation((data: unknown) => {
      parent.dispatchEvent(
        Object.assign(new Event("message"), {
          data,
          source: child.asWindow(),
          origin: workshopOrigin,
          ports: [],
        }),
      );
    });
    child.postMessage.mockImplementation(
      (data: unknown, _origin: string, ports: MessagePort[] = []) => {
        child.dispatchEvent(
          Object.assign(new Event("message"), {
            data,
            source: parent.asWindow(),
            origin: appOrigin,
            ports,
          }),
        );
      },
    );
    const accepted = new Promise<WorkshopModuleConnection<ModuleVariables>>(
      (resolve) => {
        stop = listenForWorkshopModuleEmbedMessages<ModuleVariables>({
          hostWindow: child.asWindow(),
          onConnect(connection) {
            expectTypeOf(connection).toEqualTypeOf<
              WorkshopModuleHostConnection<ModuleVariables>
            >();
            connection.setModuleSchema({
              searchText: { type: "string", isList: false },
              count: { type: "number", isList: false },
              enabled: { type: "boolean", isList: false },
            });
            connection.setVariables({ count: 0 });
            resolve(connection);
          },
        });
      },
    );
    const connection = await connectToWorkshopModule<ModuleVariables>({
      hostWindow: parent.asWindow(),
      targetWindow: child.asWindow(),
      targetOrigin: workshopOrigin,
    });
    expectTypeOf(connection).toEqualTypeOf<
      WorkshopModuleConnection<ModuleVariables>
    >();
    // @ts-expect-error Only Workshop's host connection can publish schemas.
    expectTypeOf(connection.setModuleSchema);
    expect(connection).not.toHaveProperty("setModuleSchema");
    // Subscribe immediately after connecting to receive the module's first output.
    await expect(nextVariables(connection)).resolves.toEqual({ count: 0 });
    sender = connection;
    receiver = await accepted;
  });

  afterEach(() => {
    sender?.disconnect();
    stop?.();
    vi.restoreAllMocks();
  });

  it("types partial updates and clear requests using the declared variables", async () => {
    type CountVariables = { count: number };
    expectTypeOf<WorkshopVariableValues<CountVariables>>().toEqualTypeOf<{
      readonly count?: number | null;
    }>();
    // @ts-expect-error Arrays are not supported variable types.
    expectTypeOf<WorkshopVariableValues<{ names: string[] }>>();
    // @ts-expect-error Objects are not supported variable types.
    expectTypeOf<WorkshopVariableValues<{ employee: { name: string } }>>();
    receiver.onVariablesSet((values) => {
      expectTypeOf(values.searchText).toEqualTypeOf<
        string | null | undefined
      >();
      expectTypeOf(values.count).toEqualTypeOf<number | null | undefined>();
      expectTypeOf(values.enabled).toEqualTypeOf<boolean | null | undefined>();
      // @ts-expect-error Undeclared variable IDs are not available to listeners.
      expectTypeOf(values.unknownVariable);
    });
    sender.onVariablesSet((values) => {
      expectTypeOf(values).toEqualTypeOf<
        WorkshopVariableValues<ModuleVariables>
      >();
    });
    expectTypeOf(receiver.setVariables).toBeCallableWith({
      // @ts-expect-error Count is declared as a number for outputs, too.
      count: "one",
    });
    // @ts-expect-error Count is declared as a number.
    expectTypeOf(sender.setVariables).toBeCallableWith({ count: "one" });
    expectTypeOf(sender.setVariables).toBeCallableWith({
      // @ts-expect-error Only declared variable IDs can be set.
      unknownVariable: true,
    });

    const received = nextVariables(receiver);
    sender.setVariables({ searchText: "Ada", count: 0, enabled: false });
    await expect(received).resolves.toEqual({
      searchText: "Ada",
      count: 0,
      enabled: false,
    });
    const cleared = nextVariables(receiver);
    sender.setVariables({ searchText: null });
    await expect(cleared).resolves.toEqual({ searchText: null });
  });
});

function nextVariables<TVariables extends WorkshopVariableMap>(
  connection: WorkshopModuleConnection<TVariables>,
): Promise<WorkshopVariableValues<TVariables>> {
  return new Promise((resolve) => {
    const unsubscribe = connection.onVariablesSet((values) => {
      unsubscribe();
      resolve(values);
    });
  });
}

const invalidInputs: unknown[] = [
  undefined,
  null,
  [],
  { date: new Date() },
  { "": 1 },
  { name: "Ada", NAME: "Grace" },
  { _open_rebase_dialog: true },
  { _OPEN_REBASE_DIALOG: true },
  { _kiosk_mode_session_id: "session" },
  { _KIOSK_MODE_SESSION_ID: "session" },
  { count: Number.NaN },
  { count: Number.POSITIVE_INFINITY },
  { count: undefined },
  { names: ["Ada"] },
  { employees: { objectSetRid: "ri.object-set.main.object-set.example" } },
];
