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

import { describe, expect, it, vi } from "vitest";
import type { Observer } from "../../ObservableClient/common.js";
import { createSharedTraversalRegistry } from "./sharedTraversalRegistry.js";

function observer(): Observer<number> & { values: number[] } {
  const values: number[] = [];
  return {
    values,
    next: (value: number) => {
      values.push(value);
    },
    error: () => {},
    complete: () => {},
  };
}

describe("createSharedTraversalRegistry", () => {
  it("runs the expansion once for two subscriptions sharing a key", () => {
    const registry = createSharedTraversalRegistry<number>();
    const start = vi.fn().mockImplementation(
      (_emit: (value: number) => void) => () => {},
    );

    const a = observer();
    const b = observer();
    registry.subscribe("k", a, start);
    registry.subscribe("k", b, start);

    // one underlying expansion despite two subscribers
    expect(start).toHaveBeenCalledTimes(1);
    expect(registry.size).toBe(1);
  });

  it("broadcasts emitted values to every live observer", () => {
    const registry = createSharedTraversalRegistry<number>();
    let emit: (value: number) => void = () => {};
    const start = vi.fn().mockImplementation(
      (e: (value: number) => void) => {
        emit = e;
        return () => {};
      },
    );

    const a = observer();
    const b = observer();
    registry.subscribe("k", a, start);
    registry.subscribe("k", b, start);

    emit(1);
    emit(2);

    expect(a.values).toEqual([1, 2]);
    expect(b.values).toEqual([1, 2]);
  });

  it("replays the last value to a late subscriber", () => {
    const registry = createSharedTraversalRegistry<number>();
    let emit: (value: number) => void = () => {};
    const start = (e: (value: number) => void) => {
      emit = e;
      return () => {};
    };

    const a = observer();
    registry.subscribe("k", a, start);
    emit(7);

    const late = observer();
    registry.subscribe("k", late, start);

    // late subscriber immediately sees the last broadcast, only once
    expect(late.values).toEqual([7]);
  });

  it("tears down the expansion exactly once on last unsubscribe", () => {
    const registry = createSharedTraversalRegistry<number>();
    const teardown = vi.fn();
    const start = vi.fn().mockImplementation(
      (_emit: (value: number) => void) => teardown,
    );

    const a = observer();
    const b = observer();
    const unsubA = registry.subscribe("k", a, start);
    const unsubB = registry.subscribe("k", b, start);

    unsubA();
    expect(teardown).not.toHaveBeenCalled();
    expect(registry.size).toBe(1);

    unsubB();
    expect(teardown).toHaveBeenCalledTimes(1);
    expect(registry.size).toBe(0);

    // double unsubscribe is a no-op
    unsubB();
    expect(teardown).toHaveBeenCalledTimes(1);
  });

  it("starts a fresh expansion after a key is fully released", () => {
    const registry = createSharedTraversalRegistry<number>();
    const start = vi.fn().mockImplementation(
      (_emit: (value: number) => void) => () => {},
    );

    const a = observer();
    const unsubA = registry.subscribe("k", a, start);
    unsubA();

    const b = observer();
    registry.subscribe("k", b, start);

    expect(start).toHaveBeenCalledTimes(2);
  });

  it("keeps expansions for distinct keys independent", () => {
    const registry = createSharedTraversalRegistry<number>();
    const start = vi.fn().mockImplementation(
      (_emit: (value: number) => void) => () => {},
    );

    registry.subscribe("k1", observer(), start);
    registry.subscribe("k2", observer(), start);

    expect(start).toHaveBeenCalledTimes(2);
    expect(registry.size).toBe(2);
  });
});
