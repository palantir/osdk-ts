/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { describe, expect, it } from "vitest";
import { ExponentialBackoff } from "./exponentialBackoff.js";

describe("ExponentialBackoff", () => {
  it("should start with the initial delay", () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 1000,
      jitterFactor: 0,
    });
    const delay = backoff.calculateDelay();
    expect(delay).toBe(1000);
  });

  it("should exponentially increase delay", () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 1000,
      multiplier: 2,
      jitterFactor: 0,
    });

    expect(backoff.calculateDelay()).toBe(1000); // 1000 * 2^0
    expect(backoff.calculateDelay()).toBe(2000); // 1000 * 2^1
    expect(backoff.calculateDelay()).toBe(4000); // 1000 * 2^2
    expect(backoff.calculateDelay()).toBe(8000); // 1000 * 2^3
  });

  it("should respect max delay", () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 1000,
      maxDelayMs: 5000,
      multiplier: 2,
      jitterFactor: 0,
    });

    expect(backoff.calculateDelay()).toBe(1000);
    expect(backoff.calculateDelay()).toBe(2000);
    expect(backoff.calculateDelay()).toBe(4000);
    expect(backoff.calculateDelay()).toBe(5000); // capped at max
    expect(backoff.calculateDelay()).toBe(5000); // still capped
  });

  it("should add jitter", () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 1000,
      jitterFactor: 0.5,
    });

    const delays = new Set<number>();
    for (let i = 0; i < 10; i++) {
      const b = new ExponentialBackoff({
        initialDelayMs: 1000,
        jitterFactor: 0.5,
      });
      delays.add(b.calculateDelay());
    }

    // With jitter, we should get different values
    expect(delays.size).toBeGreaterThan(1);

    // All values should be within jitter range
    for (const delay of delays) {
      expect(delay).toBeGreaterThanOrEqual(500); // 1000 - (1000 * 0.5)
      expect(delay).toBeLessThanOrEqual(1500); // 1000 + (1000 * 0.5)
    }
  });

  it("should reset attempt counter", () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 1000,
      multiplier: 2,
      jitterFactor: 0,
    });

    expect(backoff.calculateDelay()).toBe(1000);
    expect(backoff.calculateDelay()).toBe(2000);
    expect(backoff.getAttempt()).toBe(2);

    backoff.reset();
    expect(backoff.getAttempt()).toBe(0);
    expect(backoff.calculateDelay()).toBe(1000); // back to initial
  });

  it("should never return negative delay", () => {
    const backoff = new ExponentialBackoff({
      initialDelayMs: 100,
      jitterFactor: 2.0, // Very high jitter that could cause negative values
    });

    for (let i = 0; i < 20; i++) {
      const delay = backoff.calculateDelay();
      expect(delay).toBeGreaterThanOrEqual(0);
    }
  });

  it("should use default options when not provided", () => {
    const backoff = new ExponentialBackoff();

    // With default jitter, the delay will be around 1000ms
    // but we can't test exact value due to randomness
    const delay = backoff.calculateDelay();
    expect(delay).toBeGreaterThanOrEqual(700); // 1000 - (1000 * 0.3)
    expect(delay).toBeLessThanOrEqual(1300); // 1000 + (1000 * 0.3)
  });

  it("should track attempt count correctly", () => {
    const backoff = new ExponentialBackoff();

    expect(backoff.getAttempt()).toBe(0);
    backoff.calculateDelay();
    expect(backoff.getAttempt()).toBe(1);
    backoff.calculateDelay();
    expect(backoff.getAttempt()).toBe(2);
  });
});
