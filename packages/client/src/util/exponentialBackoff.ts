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

export interface ExponentialBackoffOptions {
  initialDelayMs?: number;
  maxDelayMs?: number;
  multiplier?: number;
  jitterFactor?: number;
}

const DEFAULT_OPTIONS: Required<ExponentialBackoffOptions> = {
  initialDelayMs: 1000,
  maxDelayMs: 60000,
  multiplier: 2,
  jitterFactor: 0.3,
};

export class ExponentialBackoff {
  private attempt = 0;
  private readonly options: Required<ExponentialBackoffOptions>;

  constructor(options: ExponentialBackoffOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  calculateDelay(): number {
    const { initialDelayMs, maxDelayMs, multiplier, jitterFactor } =
      this.options;

    const baseDelay = Math.min(
      initialDelayMs * Math.pow(multiplier, this.attempt),
      maxDelayMs,
    );

    const jitter = baseDelay * jitterFactor * (Math.random() * 2 - 1);
    const delayWithJitter = Math.max(0, baseDelay + jitter);

    this.attempt++;

    return Math.round(delayWithJitter);
  }

  reset(): void {
    this.attempt = 0;
  }

  getAttempt(): number {
    return this.attempt;
  }
}
