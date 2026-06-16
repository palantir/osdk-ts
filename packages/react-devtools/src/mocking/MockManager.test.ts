/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { beforeEach, describe, expect, it, vi } from "vitest";
import type { MockRequest, MockResponse } from "./MockManager.js";
import { MockManager } from "./MockManager.js";

function createObjectMock(
  overrides: Partial<MockResponse> = {},
): MockResponse {
  return {
    id: overrides.id ?? "mock-1",
    type: "object",
    matcher: { objectType: "Employee", primaryKey: "pk-1" },
    response: { type: "object", object: { name: "Alice" } },
    usedCount: 0,
    enabled: true,
    ...overrides,
  };
}

describe("MockManager", () => {
  let manager: MockManager;

  beforeEach(() => {
    vi.useFakeTimers();
    manager = new MockManager();
  });

  it("registerMock adds mock to the list", () => {
    const mock = createObjectMock();
    manager.registerMock(mock);

    const mocks = manager.getMocks();
    expect(mocks).toHaveLength(1);
    expect(mocks[0].id).toBe("mock-1");
  });

  it("findMock returns matching mock response", () => {
    manager.registerMock(createObjectMock());

    const request: MockRequest = {
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    };

    const result = manager.findMock(request);
    if (result == null) throw new Error("expected result to be defined");
    expect(result.response).toEqual({
      type: "object",
      object: { name: "Alice" },
    });
  });

  it("findMock returns null when no match", () => {
    manager.registerMock(createObjectMock());

    const request: MockRequest = {
      type: "object",
      objectType: "Office",
      primaryKey: "pk-99",
    };

    const result = manager.findMock(request);
    expect(result).toBeNull();
  });

  it("removeMock removes the mock", () => {
    manager.registerMock(createObjectMock());
    expect(manager.getMocks()).toHaveLength(1);

    const removed = manager.removeMock("mock-1");
    expect(removed).toBe(true);
    expect(manager.getMocks()).toHaveLength(0);
  });

  it("clear removes all mocks and request log", () => {
    manager.registerMock(createObjectMock({ id: "m-1" }));
    manager.registerMock(createObjectMock({ id: "m-2" }));

    manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });

    manager.clear();

    expect(manager.getMocks()).toHaveLength(0);
    expect(manager.getRequestLog()).toHaveLength(0);
  });

  it("matched requests appear in getRequestLog", () => {
    manager.registerMock(createObjectMock());

    manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });

    const log = manager.getRequestLog();
    expect(log).toHaveLength(1);
    expect(log[0].matchedMock).toBe("mock-1");
  });

  it("unmatched requests also appear in getRequestLog", () => {
    manager.findMock({
      type: "object",
      objectType: "Office",
      primaryKey: "pk-99",
    });

    const log = manager.getRequestLog();
    expect(log).toHaveLength(1);
    expect(log[0].matchedMock).toBeUndefined();
  });

  it("findMock increments usedCount", () => {
    manager.registerMock(createObjectMock());

    manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });
    manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });

    const mock = manager.getMock("mock-1");
    if (mock == null) throw new Error("expected mock to be defined");
    expect(mock.usedCount).toBe(2);
  });

  it("findMock respects maxUses", () => {
    manager.registerMock(createObjectMock({ maxUses: 1 }));

    const first = manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });
    expect(first).not.toBeNull();

    const second = manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });
    expect(second).toBeNull();
  });

  it("findMock skips disabled mocks", () => {
    manager.registerMock(createObjectMock({ enabled: false }));

    const result = manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });
    expect(result).toBeNull();
  });

  it("findMock matches by regex primaryKey", () => {
    manager.registerMock(
      createObjectMock({
        matcher: { objectType: "Employee", primaryKey: /^pk-\d+$/ },
      }),
    );

    const result = manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-42",
    });
    expect(result).not.toBeNull();
  });

  it("findMock matches whereClause for list type", () => {
    const listMock: MockResponse = {
      id: "list-mock-1",
      type: "list",
      matcher: { objectType: "Employee", whereClause: { status: "active" } },
      response: {
        type: "list",
        list: [{ name: "Alice" }],
        hasMore: false,
      },
      usedCount: 0,
      enabled: true,
    };
    manager.registerMock(listMock);

    const result = manager.findMock({
      type: "list",
      objectType: "Employee",
      whereClause: { status: "active" },
    });
    expect(result).not.toBeNull();
  });

  it("updateMock updates mock properties", () => {
    manager.registerMock(createObjectMock());

    const updated = manager.updateMock("mock-1", { enabled: false });
    expect(updated).toBe(true);

    const mock = manager.getMock("mock-1");
    if (mock == null) throw new Error("expected mock to be defined");
    expect(mock.enabled).toBe(false);
  });

  it("getStats returns correct counts", () => {
    manager.registerMock(createObjectMock({ id: "m-1" }));
    manager.registerMock(createObjectMock({ id: "m-2", enabled: false }));
    manager.registerMock(
      createObjectMock({ id: "m-3", maxUses: 1, usedCount: 1 }),
    );

    manager.findMock({
      type: "object",
      objectType: "Employee",
      primaryKey: "pk-1",
    });

    const stats = manager.getStats();
    expect(stats.totalMocks).toBe(3);
    expect(stats.enabledMocks).toBe(2);
    expect(stats.disabledMocks).toBe(1);
    expect(stats.exhaustedMocks).toBe(1);
    expect(stats.totalRequests).toBe(1);
    expect(stats.matchedRequests).toBe(1);
  });

  it("exportMocks returns JSON string", () => {
    manager.registerMock(createObjectMock());

    const exported = manager.exportMocks();
    const parsed = JSON.parse(exported);
    expect(Array.isArray(parsed)).toBe(true);
    expect(parsed).toHaveLength(1);
  });

  it("importMocks imports valid JSON", () => {
    const mock = createObjectMock({ id: "import-1" });
    const json = JSON.stringify([mock]);

    const count = manager.importMocks(json);
    expect(count).toBe(1);
    expect(manager.getMocks()).toHaveLength(1);
  });

  it("importMocks returns 0 for invalid JSON", () => {
    const count = manager.importMocks("not valid json{{{");
    expect(count).toBe(0);
  });
});
