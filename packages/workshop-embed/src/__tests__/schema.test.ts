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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createConnection } from "../connection.js";
import type {
  WorkshopModuleConnection,
  WorkshopModuleHostConnection,
} from "../connection.js";
import type { WorkshopModuleSchema } from "../index.js";
import {
  createModuleSchemaMessage,
  isModuleSchemaMessage,
  validateVariableValues,
} from "../schema.js";

const schema = {
  count: { type: "number", isList: false },
  searchText: { type: "string", isList: false },
  enabled: { type: "boolean", isList: false },
  counts: { type: "number", isList: true },
  employees: { type: "objectSet", isList: false },
  startedAt: { type: "timestamp", isList: false },
  checkpoints: { type: "timestamp", isList: true },
} as const satisfies WorkshopModuleSchema;

describe("module schemas", () => {
  let parent: WorkshopModuleConnection;
  let workshop: WorkshopModuleHostConnection;

  beforeEach(() => {
    const channel = new MessageChannel();
    parent = createConnection(channel.port1, "session", () => {}).connection;
    createConnection(channel.port2, "session", () => {}, "workshop").activate(
      (connection) => {
        workshop = connection;
      },
    );
  });

  afterEach(() => {
    parent.disconnect();
    workshop.disconnect();
    vi.restoreAllMocks();
  });

  async function publish(variables: WorkshopModuleSchema = schema) {
    const received = nextMessage(parent.port, isModuleSchemaMessage);
    workshop.setModuleSchema(variables);
    await received;
  }

  it("automatically validates both directions against Workshop's schema", async () => {
    await publish(
      runInNewContext(`(${JSON.stringify(schema)})`) as WorkshopModuleSchema,
    );
    for (const connection of [parent, workshop]) {
      const postMessage = vi.spyOn(connection.port, "postMessage");
      expect(() => connection.setVariables({ count: "25" })).toThrow(
        'Workshop variable "count" expects number; received string.',
      );
      expect(() => connection.setVariables({ missing: null })).toThrow(
        "Unknown Workshop variable: missing.",
      );
      expect(postMessage).not.toHaveBeenCalled();
      expect(() =>
        connection.setVariables({ count: 0, enabled: false, searchText: null }),
      ).not.toThrow();
    }
  });

  it("requires a schema before sending or delivering variable updates", async () => {
    const listener = vi.fn();
    for (const connection of [parent, workshop]) {
      expect(() => connection.setVariables({ count: 1 })).toThrow(
        "schema is not ready",
      );
      connection.onVariablesSet(listener);
      const peer = connection === parent ? workshop : parent;
      const received = nextMessage(peer.port);
      const port = connection.port;
      port.postMessage(variableMessage({ count: 1 }));
      await received;
    }
    expect(listener).not.toHaveBeenCalled();
    await publish();
    expect(() => parent.setVariables({ count: 1 })).not.toThrow();
  });

  it("ignores incompatible incoming values before notifying listeners on either side", async () => {
    await publish();
    for (const connection of [parent, workshop]) {
      const peer = connection === parent ? workshop : parent;
      const listener = vi.fn();
      const unsubscribe = peer.onVariablesSet(listener);
      const port = connection.port;
      port.postMessage(variableMessage({ count: "25" }));
      port.postMessage(variableMessage({ missing: null }));
      const received = new Promise<void>((resolve) => {
        const stop = peer.onVariablesSet(() => {
          stop();
          resolve();
        });
      });
      connection.setVariables({ count: 25 });
      await received;
      expect(listener).toHaveBeenCalledExactlyOnceWith({ count: 25 });
      unsubscribe();
    }
  });

  it("validates list element types and distinguishes lists from scalars in both directions", async () => {
    await publish();
    for (const connection of [parent, workshop]) {
      expect(() => connection.setVariables({ counts: [1, 2] })).not.toThrow();
      expect(() => connection.setVariables({ counts: [] })).not.toThrow();
      expect(() => connection.setVariables({ counts: null })).not.toThrow();
      expect(() => connection.setVariables({ counts: ["1"] })).toThrow(
        "expects number[]",
      );
      expect(() => connection.setVariables({ counts: 1 })).toThrow(
        "expects number[]",
      );
      expect(() => connection.setVariables({ count: [] })).toThrow(
        "expects number",
      );
      const peer = connection === parent ? workshop : parent;
      const listener = vi.fn();
      const unsubscribe = peer.onVariablesSet(listener);
      const port = connection.port;
      port.postMessage(variableMessage({ counts: ["1"] }));
      port.postMessage(variableMessage({ counts: 1 }));
      port.postMessage(variableMessage({ count: [] }));
      const received = nextMessage(peer.port, (data) => data === "drained");
      connection.setVariables({ counts: [] });
      port.postMessage("drained");
      await received;
      expect(listener.mock.calls).toEqual([
        [{ counts: [1, 2] }],
        [{ counts: [] }],
        [{ counts: null }],
        [{ counts: [] }],
      ]);
      unsubscribe();
    }
  });

  it("checks object-set references against the declared schema in both directions", async () => {
    await publish();
    const employees = { objectSetRid: "ri.object-set.main.object-set.example" };
    for (const connection of [parent, workshop]) {
      expect(() => connection.setVariables({ employees })).not.toThrow();
      expect(() => connection.setVariables({ employees: null })).not.toThrow();
      expect(() =>
        connection.setVariables({ employees: employees.objectSetRid }),
      ).toThrow("expects objectSet");
      expect(() => connection.setVariables({ searchText: employees })).toThrow(
        "expects string",
      );
      const peer = connection === parent ? workshop : parent;
      const listener = vi.fn();
      const unsubscribe = peer.onVariablesSet(listener);
      const port = connection.port;
      port.postMessage(variableMessage({ employees: employees.objectSetRid }));
      port.postMessage(variableMessage({ searchText: employees }));
      const received = nextMessage(peer.port, (data) => data === "drained");
      connection.setVariables({ employees });
      port.postMessage("drained");
      await received;
      expect(listener.mock.calls).toEqual([
        [{ employees }],
        [{ employees: null }],
        [{ employees }],
      ]);
      unsubscribe();
    }
  });

  it("validates timestamp inputs and outputs using the schema while preserving the strings", async () => {
    await publish();
    const startedAt = "2026-11-03T12:30:00.123456789+01:00";
    for (const connection of [parent, workshop]) {
      expect(() => connection.setVariables({ startedAt: "yesterday" })).toThrow(
        "expects timestamp",
      );
      expect(() =>
        connection.setVariables({ checkpoints: ["yesterday"] }),
      ).toThrow("expects timestamp[]");
      expect(() => connection.setVariables({ startedAt: [startedAt] })).toThrow(
        "expects timestamp",
      );
      expect(() =>
        validateVariableValues(schema, { searchText: "yesterday" }),
      ).not.toThrow();
      const peer = connection === parent ? workshop : parent;
      const listener = vi.fn();
      const unsubscribe = peer.onVariablesSet(listener);
      const port = connection.port;
      port.postMessage(variableMessage({ startedAt: "2026-02-30T12:30:00Z" }));
      port.postMessage(variableMessage({ checkpoints: ["not a timestamp"] }));
      const received = nextMessage(peer.port, (data) => data === "drained");
      connection.setVariables({ startedAt, checkpoints: [startedAt] });
      connection.setVariables({ startedAt: null, checkpoints: [] });
      port.postMessage("drained");
      await received;
      expect(listener.mock.calls).toEqual([
        [{ startedAt, checkpoints: [startedAt] }],
        [{ startedAt: null, checkpoints: [] }],
      ]);
      unsubscribe();
    }
  });

  it("uses subsequent schemas without exposing a subscription to the parent", async () => {
    await publish();
    await publish({ count: { type: "string", isList: false } });
    for (const connection of [parent, workshop]) {
      expect(() => connection.setVariables({ count: 1 })).toThrow(
        "expects string",
      );
      expect(() => connection.setVariables({ enabled: true })).toThrow(
        "Unknown Workshop variable",
      );
      expect(() => connection.setVariables({ count: "one" })).not.toThrow();
    }
    await publish({});
    expect(() => parent.setVariables({ count: null })).toThrow(
      "Unknown Workshop variable",
    );
  });

  it("ignores malformed and stale-session schemas without replacing the current schema", async () => {
    await publish();
    const port = workshop.port;
    for (const variables of invalidSchemas) {
      port.postMessage({
        ...createModuleSchemaMessage("session", schema),
        variables,
      });
    }
    port.postMessage(createModuleSchemaMessage("other-session", {}));
    port.postMessage({
      ...createModuleSchemaMessage("session", {}),
      version: 99,
    });
    port.postMessage({
      ...createModuleSchemaMessage("session", {}),
      channel: "other",
    });
    const drained = nextMessage(parent.port, (data) => data === "drained");
    port.postMessage("drained");
    await drained;
    expect(() => parent.setVariables({ count: 1 })).not.toThrow();
    expect(() => parent.setVariables({ count: "one" })).toThrow(
      "expects number",
    );
  });

  it("keeps Workshop authoritative even if the parent sends a schema", async () => {
    await publish();
    expect(parent).not.toHaveProperty("setModuleSchema");
    const received = nextMessage(workshop.port);
    const port = parent.port;
    port.postMessage(
      createModuleSchemaMessage("session", {
        count: { type: "string", isList: false },
      }),
    );
    await received;
    expect(() => workshop.setVariables({ count: 1 })).not.toThrow();
    expect(() => workshop.setVariables({ count: "one" })).toThrow(
      "expects number",
    );
  });

  it("snapshots published schemas and retains the previous schema if publishing fails", async () => {
    const mutable: { count: { type: "number" | "string"; isList: false } } = {
      count: { type: "number", isList: false },
    };
    await publish(mutable);
    mutable.count.type = "string";
    expect(() => workshop.setVariables({ count: "one" })).toThrow(
      "expects number",
    );
    const postMessage = vi.spyOn(workshop.port, "postMessage");
    postMessage.mockImplementationOnce(() => {
      throw new Error("Send failed");
    });
    expect(() => workshop.setModuleSchema(mutable)).toThrow("Send failed");
    expect(() => workshop.setVariables({ count: "one" })).toThrow(
      "expects number",
    );
  });

  it("rejects invalid schemas before sending and rejects publishing after disconnect", () => {
    const postMessage = vi.spyOn(workshop.port, "postMessage");
    const { setModuleSchema } = workshop;
    for (const invalid of invalidSchemas) {
      expect(() => setModuleSchema(invalid as WorkshopModuleSchema)).toThrow(
        TypeError,
      );
    }
    expect(postMessage).not.toHaveBeenCalled();
    workshop.disconnect();
    expect(() => workshop.setModuleSchema(schema)).toThrow("closed");
  });
});

function variableMessage(values: unknown) {
  return {
    channel: "workshop-module-embed",
    version: 1,
    sessionId: "session",
    type: "setVariables",
    values,
  };
}

describe("schema validation", () => {
  it("accepts partial updates and clears without coercing values", () => {
    const values: unknown = { count: 0, searchText: "25", enabled: false };
    expect(() => validateVariableValues(schema, values)).not.toThrow();
    expect(values).toEqual({ count: 0, searchText: "25", enabled: false });
    expect(() => validateVariableValues(schema, { count: null })).not.toThrow();
    expect(() => validateVariableValues(schema, {})).not.toThrow();
    expect(() => validateVariableValues(schema, { count: "25" })).toThrow(
      'Workshop variable "count" expects number; received string.',
    );
    expect(() => validateVariableValues(schema, { enabled: "false" })).toThrow(
      'Workshop variable "enabled" expects boolean; received string.',
    );
  });

  it("requires declared external IDs even for clears, without matching inherited properties", () => {
    expect(() => validateVariableValues(schema, { missing: null })).toThrow(
      "Unknown Workshop variable: missing.",
    );
    expect(() => validateVariableValues(schema, { Count: 1 })).toThrow(
      "Unknown Workshop variable: Count.",
    );
    expect(() => validateVariableValues(schema, { toString: "text" })).toThrow(
      "Unknown Workshop variable: toString.",
    );
    const ownSchema = Object.fromEntries([
      ["__proto__", { type: "number", isList: false }],
    ]) as WorkshopModuleSchema;
    expect(() =>
      validateVariableValues(ownSchema, JSON.parse('{"__proto__": 1}')),
    ).not.toThrow();
  });

  it("accepts the ISO formats supported by Workshop and rejects invalid dates", () => {
    for (const startedAt of [
      "2024-02-29T12:30:00Z",
      "2026-11-03T12:30:00.1Z",
      "2026-11-03T12:30:00.123Z",
      "2026-11-03T12:30:00.123456789Z",
      "+010000-01-01T00:00:00.000Z",
      "2026-11-03",
      "2026-11-03T12:30:00",
      "2026-11-03T12:30:00+00:00",
      "2026-11-03T12:30:00-05:00",
      "2026-11-03T24:00:00Z",
      "2026-11-03T12:30:00.1234567890Z",
      // parseISO also accepts reduced-precision ISO dates.
      "2026",
      "25",
    ]) {
      expect(() =>
        validateVariableValues(schema, { startedAt, checkpoints: [startedAt] }),
      ).not.toThrow();
    }
    for (const startedAt of [
      "",
      "yesterday",
      "2026-02-29T12:30:00Z",
      "2026-02-30T12:30:00Z",
      "2026-13-03T12:30:00Z",
      "2026-11-03T25:00:00Z",
      "2026-11-03T12:60:00Z",
      "2026-11-03T12:30:60Z",
      0,
    ]) {
      expect(() => validateVariableValues(schema, { startedAt })).toThrow(
        "expects timestamp",
      );
    }
  });

  it("rejects malformed schemas and unsupported values", () => {
    for (const invalid of invalidSchemas) {
      expect(() =>
        validateVariableValues(invalid as WorkshopModuleSchema, {}),
      ).toThrow("Invalid Workshop module schema.");
    }
    for (const values of [
      undefined,
      [],
      { count: undefined },
      { count: Number.NaN },
      { count: Number.POSITIVE_INFINITY },
      { "": null },
      { count: 1, COUNT: 2 },
    ]) {
      expect(() => validateVariableValues(schema, values)).toThrow(
        "Invalid Workshop variable values.",
      );
    }
  });
});

function nextMessage(
  port: MessagePort,
  matches: (data: unknown) => boolean = () => true,
): Promise<void> {
  return new Promise((resolve) => {
    port.addEventListener(
      "message",
      function receive(event: MessageEvent<unknown>) {
        if (!matches(event.data)) return;
        port.removeEventListener("message", receive);
        resolve();
      },
    );
  });
}

const invalidSchemas: unknown[] = [
  { employees: { type: "objectSet", isList: true } },
  null,
  [],
  { count: { type: "number", isList: "true" } },
  { count: { type: "number" } },
  { count: { type: "unsupported", isList: false } },
  { count: null },
  { "": schema.count },
  { count: schema.count, COUNT: schema.count },
  { _OPEN_REBASE_DIALOG: schema.count },
];
