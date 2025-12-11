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
 * Fixed-size circular buffer for efficient event storage with bounded memory usage.
 *
 * When the buffer is full, new items overwrite the oldest items.
 * This ensures O(1) push operations and prevents unbounded memory growth.
 *
 * @example
 * ```typescript
 * const buffer = new CircularBuffer<number>(3);
 * buffer.push(1); // [1]
 * buffer.push(2); // [1, 2]
 * buffer.push(3); // [1, 2, 3]
 * buffer.push(4); // [2, 3, 4] - oldest item (1) was overwritten
 * ```
 */
export class CircularBuffer<T> {
  private buffer: Array<T | undefined>;
  private head = 0; // Index of oldest item
  private tail = 0; // Index where next item will be written
  private size = 0; // Current number of items

  constructor(private capacity: number) {
    if (capacity <= 0) {
      throw new Error("CircularBuffer capacity must be positive");
    }
    this.buffer = new Array(capacity);
  }

  /**
   * Add an item to the buffer.
   * If the buffer is full, the oldest item is overwritten.
   *
   * @param item The item to add
   * @returns The index where the item was stored
   */
  push(item: T): number {
    const index = this.tail;
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;

    if (this.size < this.capacity) {
      this.size++;
    } else {
      // Overwrite oldest - move head forward
      this.head = (this.head + 1) % this.capacity;
    }

    return index;
  }

  /**
   * Get item at a specific index.
   * Returns undefined if the index is no longer valid (was overwritten).
   *
   * @param index The buffer index to retrieve
   * @returns The item at that index, or undefined
   */
  get(index: number): T | undefined {
    if (index < 0 || index >= this.capacity) {
      return undefined;
    }
    return this.buffer[index];
  }

  /**
   * Convert the buffer to an array in chronological order (oldest to newest).
   *
   * @returns Array of all items in the buffer
   */
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

  /**
   * Get the current number of items in the buffer.
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Get the maximum capacity of the buffer.
   */
  getCapacity(): number {
    return this.capacity;
  }

  /**
   * Check if the buffer is full.
   */
  isFull(): boolean {
    return this.size === this.capacity;
  }

  /**
   * Check if the buffer is empty.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Clear all items from the buffer.
   */
  clear(): void {
    this.buffer = new Array(this.capacity);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }
}
