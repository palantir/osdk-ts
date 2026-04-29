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

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ConsoleLogStore } from "./ConsoleLogStore.js";
import type { ConsoleLogLevel } from "./ConsoleLogStore.js";

function flushMicrotasks(): Promise<void> {
  return new Promise((r) => queueMicrotask(r));
}

describe("ConsoleLogStore", () => {
  let store: ConsoleLogStore;
  const savedConsole: Record<string, (...args: unknown[]) => void> = {};

  beforeEach(() => {
    vi.useFakeTimers();
    for (const level of ["log", "warn", "error", "info", "debug"] as const) {
      savedConsole[level] = console[level];
    }
    store = new ConsoleLogStore();
  });

  afterEach(() => {
    store.dispose();
    for (const level of ["log", "warn", "error", "info", "debug"] as const) {
      console[level] = savedConsole[level];
    }
    vi.useRealTimers();
  });

  describe("basic capture", () => {
    it("should capture all 5 console levels", async () => {
      store.install();

      const levels: ConsoleLogLevel[] = [
        "log",
        "warn",
        "error",
        "info",
        "debug",
      ];
      for (const level of levels) {
        console[level](`test-${level}`);
      }

      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries).toHaveLength(5);
      for (let i = 0; i < levels.length; i++) {
        expect(entries[i].level).toBe(levels[i]);
        expect(entries[i].args[0]).toBe(`test-${levels[i]}`);
      }
    });

    it("should pass arguments through to original console", () => {
      const spy = vi.fn();
      console.log = spy;
      store = new ConsoleLogStore();
      store.install();

      console.log("hello", 42);

      expect(spy).toHaveBeenCalledWith("hello", 42);
    });
  });

  describe("reentrancy guard", () => {
    it("should not double-capture when console is called during serialization", async () => {
      store.install();

      const wrapper = console.log;
      let accessCount = 0;
      const tricky = {};
      Object.defineProperty(tricky, "sneaky", {
        enumerable: true,
        get() {
          accessCount++;
          if (accessCount > 1) {
            wrapper.call(console, "reentrant");
          }
          return "value";
        },
      });

      console.log(tricky);
      await flushMicrotasks();

      const entries = store.getEntries();
      const reentrantEntries = entries.filter((e) =>
        e.args.some((a) => a === "reentrant")
      );
      expect(reentrantEntries).toHaveLength(0);
      expect(entries).toHaveLength(1);
    });
  });

  describe("serialization", () => {
    it("should handle circular references", async () => {
      store.install();

      const obj: Record<string, unknown> = { a: 1 };
      obj.self = obj;
      console.log(obj);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toContain("[Circular]");
    });

    it("should serialize BigInt values", async () => {
      store.install();

      console.log(BigInt(42));
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("BigInt(42)");
    });

    it("should serialize Symbol values", async () => {
      store.install();

      console.log(Symbol("test"));
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("Symbol(test)");
    });

    it("should serialize Symbol without description", async () => {
      store.install();

      console.log(Symbol());
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("Symbol()");
    });

    it("should serialize Function values", async () => {
      store.install();

      function myFunc() {}
      console.log(myFunc);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("[Function: myFunc]");
    });

    it("should serialize anonymous functions", async () => {
      store.install();

      console.log(() => {});
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toMatch(/\[Function:.*\]/);
    });

    it("should serialize Error with stack", async () => {
      store.install();

      const err = new Error("test error");
      console.log(err);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toContain("test error");
    });

    it("should depth-limit at level 3", async () => {
      store.install();

      const deep = { a: { b: { c: { d: "too deep" } } } };
      console.log(deep);
      await flushMicrotasks();

      const entries = store.getEntries();
      const serialized = entries[0].args[0];
      expect(serialized).toContain("[Object]");
      expect(serialized).not.toContain("too deep");
    });

    it("should show [Array(N)] for depth-limited arrays", async () => {
      store.install();

      const deep = { a: { b: { c: [1, 2, 3] } } };
      console.log(deep);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toContain("[Array(3)]");
    });

    it("should handle DOM nodes", async () => {
      store.install();

      const div = document.createElement("div");
      console.log(div);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("[HTMLElement: DIV]");
    });

    it("should not produce pretty-printed output", async () => {
      store.install();

      console.log({ a: 1, b: 2 });
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).not.toContain("\n");
    });

    it("should handle DAGs without false circular detection", async () => {
      store.install();

      const shared = { x: 1 };
      const dag = { left: shared, right: shared };
      console.log(dag);
      await flushMicrotasks();

      const entries = store.getEntries();
      const serialized = entries[0].args[0];
      expect(serialized).not.toContain("[Circular]");
      expect(serialized).toContain("\"x\":1");
    });

    it("should truncate individual args over 10KB", async () => {
      store.install();

      const huge = "x".repeat(20000);
      console.log(huge);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toContain("...truncated");
      expect(entries[0].args[0].length).toBeLessThan(20000);
    });

    it("should serialize null and undefined", async () => {
      store.install();

      console.log(null, undefined);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("null");
      expect(entries[0].args[1]).toBe("undefined");
    });

    it("should serialize numbers and booleans", async () => {
      store.install();

      console.log(42, true, false);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("42");
      expect(entries[0].args[1]).toBe("true");
      expect(entries[0].args[2]).toBe("false");
    });
  });

  describe("chain-safe uninstall", () => {
    it("should not restore original if another library patched after us", () => {
      const realOriginal = console.log;
      store.install();

      const externalPatch = function(..._args: unknown[]) {};
      console.log = externalPatch;

      store.uninstall();

      expect(console.log).toBe(externalPatch);
      console.log = realOriginal;
    });

    it("should restore originals when no external patching occurred", () => {
      const realOriginal = console.log;
      store.install();

      store.uninstall();

      expect(console.log).toBe(realOriginal);
    });
  });

  describe("source location", () => {
    it("should populate source field as a string", async () => {
      store.install();

      console.log("test source");
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries).toHaveLength(1);
      expect(typeof entries[0].source).toBe("string");
    });
  });

  describe("entry size capping", () => {
    it("should truncate the longest arg when total exceeds 10KB", async () => {
      store.install();

      const big = "a".repeat(8000);
      const bigger = "b".repeat(8000);
      console.log(big, bigger);
      await flushMicrotasks();

      const entries = store.getEntries();
      const hasLongTruncated = entries[0].args.some(
        (a) => a.includes("...truncated") && a.includes("bytes"),
      );
      expect(hasLongTruncated).toBe(true);
    });

    it("should not truncate when total is under 10KB", async () => {
      store.install();

      console.log("short", "also short");
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].args[0]).toBe("short");
      expect(entries[0].args[1]).toBe("also short");
    });
  });

  describe("buffer overflow", () => {
    it("should drop oldest entries when capacity is exceeded", async () => {
      store = new ConsoleLogStore(3);
      store.install();

      console.log("first");
      console.log("second");
      console.log("third");
      console.log("fourth");
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries).toHaveLength(3);
      expect(entries[0].args[0]).toBe("second");
      expect(entries[1].args[0]).toBe("third");
      expect(entries[2].args[0]).toBe("fourth");
    });
  });

  describe("suppress/unsuppress", () => {
    it("should not capture while suppressed", async () => {
      store.install();
      store.suppress();

      console.log("suppressed message");
      await flushMicrotasks();

      expect(store.getEntries()).toHaveLength(0);
    });

    it("should capture after unsuppress", async () => {
      store.install();
      store.suppress();

      console.log("suppressed");
      store.unsuppress();
      console.log("captured");
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].args[0]).toBe("captured");
    });
  });

  describe("subscribe/unsubscribe", () => {
    it("should notify subscribers after console.log", async () => {
      store.install();
      const callback = vi.fn();
      store.subscribe(callback);

      console.log("test");
      await flushMicrotasks();

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("should not notify after unsubscribe", async () => {
      store.install();
      const callback = vi.fn();
      const unsub = store.subscribe(callback);

      console.log("before unsub");
      await flushMicrotasks();
      expect(callback).toHaveBeenCalledTimes(1);

      unsub();
      console.log("after unsub");
      await flushMicrotasks();

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it("should batch notifications via microtask", async () => {
      store.install();
      const callback = vi.fn();
      store.subscribe(callback);

      console.log("one");
      console.log("two");
      console.log("three");

      expect(callback).toHaveBeenCalledTimes(0);
      await flushMicrotasks();
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe("dispose", () => {
    it("should uninstall, clear entries, and clear subscribers", async () => {
      store.install();
      const callback = vi.fn();
      store.subscribe(callback);

      console.log("before dispose");
      await flushMicrotasks();

      store.dispose();

      expect(store.getEntries()).toHaveLength(0);
      expect(store.getSize()).toBe(0);
    });
  });

  describe("idempotent install", () => {
    it("should not double-patch when install is called twice", async () => {
      const spy = vi.fn();
      console.log = spy;
      store = new ConsoleLogStore();

      store.install();
      const firstWrapper = console.log;

      store.install();
      const secondWrapper = console.log;

      expect(firstWrapper).toBe(secondWrapper);

      console.log("test");
      expect(spy).toHaveBeenCalledTimes(1);

      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(1);
    });
  });
});
