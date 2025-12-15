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

/**
 * A circular buffer implementation for efficient storage of recent operations
 * with automatic cleanup of old entries.
 */
export class RingBuffer<T> {
  private readonly buffer: Array<T | undefined>;
  private head = 0;
  private tail = 0;
  private size = 0;
  private readonly capacity: number;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("RingBuffer capacity must be positive");
    }
    this.capacity = capacity;
    // Initialize as a dense array to avoid sparse array performance issues
    this.buffer = Array.from({ length: capacity }, () => undefined);
  }

  push(item: T): void {
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;

    if (this.size < this.capacity) {
      this.size++;
    } else {
      // Buffer is full, move head forward
      this.head = (this.head + 1) % this.capacity;
    }
  }

  toArray(): ReadonlyArray<T> {
    const result: T[] = [];
    let index = this.head;

    for (let i = 0; i < this.size; i++) {
      const item = this.buffer[index];
      if (item !== undefined) {
        result.push(item);
      }
      index = (index + 1) % this.capacity;
    }

    return result;
  }

  clear(): void {
    this.buffer.fill(undefined);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getLast(n: number): ReadonlyArray<T> {
    const count = Math.min(n, this.size);
    const result: T[] = [];

    let index = (this.tail - count + this.capacity) % this.capacity;

    for (let i = 0; i < count; i++) {
      const item = this.buffer[index];
      if (item !== undefined) {
        result.push(item);
      }
      index = (index + 1) % this.capacity;
    }

    return result;
  }
}
