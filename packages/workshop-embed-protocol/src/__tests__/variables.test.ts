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
  WorkshopVariableSchema,
  WorkshopVariableValues,
} from "../index.js";
import { createTestWindow, type TestWindow } from "./testUtils.js";

describe("scalar variable inputs", () => {
  let sender: WorkshopModuleConnection;
  let receiver: WorkshopModuleConnection;

  beforeEach(() => {
    const channel = new MessageChannel();
    sender = createConnection(channel.port1, "session", () => {}).connection;
    receiver = createConnection(channel.port2, "session", () => {}).connection;
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
    const received = nextInputs(receiver);
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
      { ...valid, type: "variablesChanged" },
      ...invalidInputs.map((values) => ({ ...valid, values })),
    ]) {
      port.postMessage(data);
    }
    const received = nextInputs(receiver);
    sender.setVariables(valid.values);
    await received;
    expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 1 });
  });

  it("rejects unsupported inputs before posting a message", () => {
    expectTypeOf<WorkshopVariableValues>().toEqualTypeOf<
      Readonly<Record<string, string | number | boolean | null>>
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
    const received = nextInputs(receiver);
    sender.setVariables({ count: 2 });
    await expect(received).resolves.toEqual({ count: 2 });
    expect(replacement).not.toHaveBeenCalled();

    unsubscribe();
    const next = nextInputs(receiver);
    sender.setVariables({ count: 3 });
    await next;
    expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 2 });
    expect(replacement).toHaveBeenCalledExactlyOnceWith({ count: 3 });

    receiver.disconnect();
    expect(() => receiver.setVariables({ count: 3 })).toThrow("closed");
    expect(() => receiver.onVariablesSet(listener)).toThrow("closed");
  });
});

describe("declared variable schemas", () => {
  const schema = {
    searchText: { type: "string" },
    count: { type: "number" },
    enabled: { type: "boolean" },
  } as const satisfies WorkshopVariableSchema;
  const appOrigin = "https://app.example.com";
  const workshopOrigin = "https://workshop.example.com";
  let parent: TestWindow;
  let child: TestWindow;
  let sender: WorkshopModuleConnection<typeof schema>;
  let receiver: WorkshopModuleConnection<typeof schema>;
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
    const accepted = new Promise<WorkshopModuleConnection<typeof schema>>(
      (resolve) => {
        stop = listenForWorkshopModuleEmbedMessages({
          hostWindow: child.asWindow(),
          variableSchema: schema,
          onConnect(connection) {
            expectTypeOf(connection).toEqualTypeOf<
              WorkshopModuleConnection<typeof schema>
            >();
            resolve(connection);
          },
        });
      },
    );
    const connection = await connectToWorkshopModule({
      hostWindow: parent.asWindow(),
      targetWindow: child.asWindow(),
      targetOrigin: workshopOrigin,
      variableSchema: schema,
    });
    expectTypeOf(connection).toEqualTypeOf<
      WorkshopModuleConnection<typeof schema>
    >();
    sender = connection;
    receiver = await accepted;
  });

  afterEach(() => {
    sender?.disconnect();
    stop?.();
    vi.restoreAllMocks();
  });

  it("infers partial values and rejects incorrect types and names before sending", async () => {
    expectTypeOf<{ unexpected: true }>().not.toMatchTypeOf<
      WorkshopVariableValues<Record<never, never>>
    >();
    receiver.onVariablesSet((values) => {
      expectTypeOf(values.searchText).toEqualTypeOf<
        string | null | undefined
      >();
      expectTypeOf(values.count).toEqualTypeOf<number | null | undefined>();
      expectTypeOf(values.enabled).toEqualTypeOf<boolean | null | undefined>();
      // @ts-expect-error Undeclared variable IDs are not available to listeners.
      expectTypeOf(values.unknownVariable);
    });
    const postMessage = vi.spyOn(sender.port, "postMessage");
    expect(() => {
      // @ts-expect-error Count is declared as a number.
      sender.setVariables({ count: "one" });
    }).toThrow(TypeError);
    expect(() => {
      // @ts-expect-error Only declared variable IDs can be set.
      sender.setVariables({ unknownVariable: true });
    }).toThrow(TypeError);
    expect(postMessage).not.toHaveBeenCalled();

    const received = nextInputs(receiver);
    sender.setVariables({ searchText: "Ada", count: 0, enabled: false });
    await expect(received).resolves.toEqual({
      searchText: "Ada",
      count: 0,
      enabled: false,
    });
    const cleared = nextInputs(receiver);
    sender.setVariables({ searchText: null });
    await expect(cleared).resolves.toEqual({ searchText: null });
  });

  it("ignores entire incoming batches that do not match the schema", async () => {
    const listener = vi.fn();
    receiver.onVariablesSet(listener);
    const port = sender.port;
    for (const values of [
      { count: "one" },
      { unknownVariable: null },
      { toString: null },
      { searchText: "Ada", enabled: 1 },
    ]) {
      port.postMessage({
        channel: "workshop-module-embed",
        version: 1,
        sessionId: sender.sessionId,
        type: "setVariables",
        values,
      });
    }
    const received = nextInputs(receiver);
    sender.setVariables({ count: 2 });
    await received;
    expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 2 });
  });

  it("rejects invalid schemas before starting either side of a connection", async () => {
    child.postMessage.mockClear();
    const addEventListener = vi.spyOn(child, "addEventListener");
    const hostWindow = child.asWindow();
    for (const value of [
      null,
      [],
      { "": { type: "string" } },
      { count: "number" },
      { count: { type: "date" } },
    ]) {
      const variableSchema = value as unknown as WorkshopVariableSchema;
      await expect(
        connectToWorkshopModule({
          hostWindow: parent.asWindow(),
          targetWindow: child.asWindow(),
          targetOrigin: workshopOrigin,
          variableSchema,
        }),
      ).rejects.toThrow(TypeError);
      expect(() =>
        listenForWorkshopModuleEmbedMessages({
          hostWindow,
          variableSchema,
        }),
      ).toThrow(TypeError);
    }
    expect(child.postMessage).not.toHaveBeenCalled();
    expect(addEventListener).not.toHaveBeenCalled();
  });
});

function nextInputs<TSchema extends WorkshopVariableSchema>(
  connection: WorkshopModuleConnection<TSchema>,
): Promise<WorkshopVariableValues<TSchema>> {
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
  new Date(),
  { "": 1 },
  { count: Number.NaN },
  { count: Number.POSITIVE_INFINITY },
  { count: undefined },
  { names: ["Ada"] },
  { employees: { objectSetRid: "ri.object-set.main.object-set.example" } },
];
