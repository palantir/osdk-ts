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

import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { WindowErrorStore } from "./WindowErrorStore.js";

function flushMicrotasks(): Promise<void> {
  return new Promise((r) => queueMicrotask(r));
}

function dispatchErrorEvent(detail: Partial<ErrorEventInit>): ErrorEvent {
  const event = new ErrorEvent("error", detail);
  window.dispatchEvent(event);
  return event;
}

function dispatchUnhandledRejection(reason: unknown): void {
  // happy-dom doesn't implement PromiseRejectionEvent. Drive a synthetic Event
  // and attach the reason field — WindowErrorStore reads event.reason directly.
  const promise = Promise.reject(reason);
  promise.catch(() => {});
  const event = new Event("unhandledrejection") as Event & {
    reason: unknown;
    promise: Promise<unknown>;
  };
  event.reason = reason;
  event.promise = promise;
  window.dispatchEvent(event);
}

describe("WindowErrorStore", () => {
  let store: WindowErrorStore;

  beforeEach(() => {
    store = new WindowErrorStore();
  });

  afterEach(() => {
    store.dispose();
  });

  describe("install/uninstall", () => {
    it("captures errors only after install", async () => {
      dispatchErrorEvent({ message: "before-install" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(0);

      store.install();
      dispatchErrorEvent({ message: "after-install" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(1);
    });

    it("stops capturing after uninstall", async () => {
      store.install();
      dispatchErrorEvent({ message: "first" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(1);

      store.uninstall();
      dispatchErrorEvent({ message: "second" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(1);
    });

    it("install is idempotent", async () => {
      store.install();
      store.install();
      dispatchErrorEvent({ message: "once" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(1);
    });
  });

  describe("error capture", () => {
    beforeEach(() => {
      store.install();
    });

    it("captures uncaught errors with filename, lineno, colno", async () => {
      dispatchErrorEvent({
        message: "boom",
        filename: "app.tsx",
        lineno: 42,
        colno: 7,
      });
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].kind).toBe("error");
      expect(entries[0].message).toBe("boom");
      expect(entries[0].filename).toBe("app.tsx");
      expect(entries[0].lineno).toBe(42);
      expect(entries[0].colno).toBe(7);
    });

    it("uses Error.message and stack when error object is provided", async () => {
      const realError = new Error("real-message");
      dispatchErrorEvent({ message: "", error: realError });
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].message).toBe("real-message");
      expect(entries[0].stack).toBe(realError.stack);
    });

    it("captures unhandled rejection with Error reason", async () => {
      const reason = new Error("rejected");
      dispatchUnhandledRejection(reason);
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].kind).toBe("unhandledrejection");
      expect(entries[0].message).toBe("rejected");
      expect(entries[0].stack).toBe(reason.stack);
    });

    it("captures unhandled rejection with string reason", async () => {
      dispatchUnhandledRejection("plain string");
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].kind).toBe("unhandledrejection");
      expect(entries[0].message).toBe("plain string");
    });

    it("captures unhandled rejection with object reason", async () => {
      dispatchUnhandledRejection({ code: 500, msg: "oops" });
      await flushMicrotasks();

      const entries = store.getEntries();
      expect(entries[0].kind).toBe("unhandledrejection");
      expect(entries[0].message).toContain("500");
    });
  });

  describe("subscribe", () => {
    it("notifies subscribers when entries are pushed", async () => {
      store.install();
      let callCount = 0;
      store.subscribe(() => {
        callCount++;
      });

      dispatchErrorEvent({ message: "x" });
      await flushMicrotasks();
      expect(callCount).toBe(1);
    });

    it("returns an unsubscribe function", async () => {
      store.install();
      let callCount = 0;
      const unsub = store.subscribe(() => {
        callCount++;
      });
      unsub();

      dispatchErrorEvent({ message: "x" });
      await flushMicrotasks();
      expect(callCount).toBe(0);
    });
  });

  describe("clear and getSize", () => {
    beforeEach(() => {
      store.install();
    });

    it("getSize reflects buffer count", async () => {
      dispatchErrorEvent({ message: "1" });
      dispatchErrorEvent({ message: "2" });
      await flushMicrotasks();
      expect(store.getSize()).toBe(2);
    });

    it("clear empties the buffer", async () => {
      dispatchErrorEvent({ message: "1" });
      await flushMicrotasks();
      store.clear();
      expect(store.getEntries()).toHaveLength(0);
      expect(store.getSize()).toBe(0);
    });
  });

  describe("suppress/unsuppress", () => {
    beforeEach(() => {
      store.install();
    });

    it("suppress prevents capture", async () => {
      store.suppress();
      dispatchErrorEvent({ message: "x" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(0);
    });

    it("unsuppress re-enables capture", async () => {
      store.suppress();
      dispatchErrorEvent({ message: "x" });
      store.unsuppress();
      dispatchErrorEvent({ message: "y" });
      await flushMicrotasks();
      expect(store.getEntries()).toHaveLength(1);
    });
  });

  describe("dispose", () => {
    it("removes listeners and clears entries", async () => {
      store.install();
      dispatchErrorEvent({ message: "before-dispose" });
      await flushMicrotasks();
      store.dispose();

      dispatchErrorEvent({ message: "after-dispose" });
      await flushMicrotasks();

      expect(store.getEntries()).toHaveLength(0);
    });
  });
});
