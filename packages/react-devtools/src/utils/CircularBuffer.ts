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

export class CircularBuffer<T> {
  private buffer: Array<T | undefined>;
  private head = 0;
  private tail = 0;
  private size = 0;
  private readonly capacity: number;
  private readonly onEvict?: (item: T) => void;

  constructor(capacity: number, onEvict?: (item: T) => void) {
    if (capacity <= 0) {
      throw new Error("CircularBuffer capacity must be positive");
    }
    this.capacity = capacity;
    this.buffer = new Array(capacity);
    this.onEvict = onEvict;
  }

  push(item: T): number {
    const index = this.tail;

    if (this.size === this.capacity) {
      const evicted = this.buffer[this.tail];
      if (this.onEvict && evicted !== undefined) {
        this.onEvict(evicted);
      }
    }

    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;

    if (this.size < this.capacity) {
      this.size++;
    } else {
      this.head = (this.head + 1) % this.capacity;
    }

    return index;
  }

  get(index: number): T | undefined {
    if (index < 0 || index >= this.capacity) {
      return undefined;
    }
    return this.buffer[index];
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;

    for (let i = 0; i < this.size; i++) {
      const item = this.buffer[current];
      if (item !== undefined) {
        result.push(item);
      }
      current = (current + 1) % this.capacity;
    }

    return result;
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

  clear(): void {
    this.buffer = new Array(this.capacity);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
}
