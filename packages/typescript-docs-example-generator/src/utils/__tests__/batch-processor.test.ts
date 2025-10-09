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

import { describe, expect, it, vi } from "vitest";
import type { Result } from "../../types/index.js";
import { type BatchItem, BatchProcessor } from "../batch-processor.js";

describe("BatchProcessor", () => {
  describe("processBatch", () => {
    it("processes items sequentially", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
        { id: "3", data: 3 },
      ];

      const processor = vi.fn((item: BatchItem<number>): Result<number> => ({
        success: true as const,
        value: item.data * 2,
      }));

      const result = await BatchProcessor.processBatch(items, processor);

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.get("1")).toBe(2);
        expect(result.value.get("2")).toBe(4);
        expect(result.value.get("3")).toBe(6);
      }
      expect(processor).toHaveBeenCalledTimes(3);
    });

    it("collects errors when continueOnError is true", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
        { id: "3", data: 3 },
      ];

      const processor = vi.fn((item: BatchItem<number>): Result<number> => {
        if (item.data === 2) {
          return {
            success: false as const,
            error: new Error(`Error for ${item.id}`),
          };
        }
        return { success: true as const, value: item.data * 2 };
      });

      const result = await BatchProcessor.processBatch(items, processor, {
        continueOnError: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Error for 2");
      }
      expect(processor).toHaveBeenCalledTimes(3);
    });

    it("stops processing when continueOnError is false", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
        { id: "3", data: 3 },
      ];

      const processor = vi.fn((item: BatchItem<number>): Result<number> => {
        if (item.data === 2) {
          return {
            success: false as const,
            error: new Error(`Error for ${item.id}`),
          };
        }
        return { success: true as const, value: item.data * 2 };
      });

      const result = await BatchProcessor.processBatch(items, processor, {
        continueOnError: false,
      });

      expect(result.success).toBe(false);
      expect(processor).toHaveBeenCalledTimes(2); // Should stop after error
    });

    it("respects maxErrors limit", async () => {
      const items: BatchItem<number>[] = Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        data: i,
      }));

      const processor = vi.fn((): Result<number> => ({
        success: false,
        error: new Error("Always fails"),
      }));

      await BatchProcessor.processBatch(items, processor, {
        maxErrors: 3,
        continueOnError: true,
      });

      expect(processor).toHaveBeenCalledTimes(3);
    });

    it("handles async processors", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
      ];

      const processor = vi.fn(
        async (item: BatchItem<number>): Promise<Result<number>> => {
          await new Promise(resolve => setTimeout(resolve, 10));
          return { success: true as const, value: item.data * 2 };
        },
      );

      const result = await BatchProcessor.processBatch(items, processor);

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.get("1")).toBe(2);
        expect(result.value.get("2")).toBe(4);
      }
    });

    it("handles thrown errors", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
      ];

      const processor = vi.fn((item: BatchItem<number>): Result<number> => {
        if (item.data === 2) {
          throw new Error("Thrown error");
        }
        return { success: true as const, value: item.data * 2 };
      });

      const result = await BatchProcessor.processBatch(items, processor, {
        continueOnError: true,
      });

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Thrown error");
      }
    });
  });

  describe("processBatchParallel", () => {
    it("processes items in parallel with controlled concurrency", async () => {
      const items: BatchItem<number>[] = Array.from({ length: 10 }, (_, i) => ({
        id: `${i}`,
        data: i,
      }));

      const executionOrder: number[] = [];
      const activeCount: number[] = [];
      let currentActive = 0;

      const processor = vi.fn(
        async (item: BatchItem<number>): Promise<Result<number>> => {
          currentActive++;
          activeCount.push(currentActive);

          // Simulate async work
          await new Promise(resolve => setTimeout(resolve, 10));

          executionOrder.push(item.data);
          currentActive--;

          return { success: true as const, value: item.data * 2 };
        },
      );

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
        { concurrency: 3 },
      );

      expect(result.success).toBe(true);
      expect(processor).toHaveBeenCalledTimes(10);

      // Check that max concurrency was respected
      expect(Math.max(...activeCount)).toBeLessThanOrEqual(3);

      // Verify all results are present
      if (result.success) {
        for (let i = 0; i < 10; i++) {
          expect(result.value.get(`${i}`)).toBe(i * 2);
        }
      }
    });

    it("handles mixed success and failure in parallel", async () => {
      const items: BatchItem<number>[] = Array.from({ length: 6 }, (_, i) => ({
        id: `${i}`,
        data: i,
      }));

      const processor = vi.fn(
        async (item: BatchItem<number>): Promise<Result<number>> => {
          await new Promise(resolve => setTimeout(resolve, 5));

          // Fail even numbers
          if (item.data % 2 === 0) {
            return {
              success: false as const,
              error: new Error(`Error for ${item.id}`),
            };
          }
          return { success: true as const, value: item.data * 2 };
        },
      );

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
        { concurrency: 2 },
      );

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Error for 0");
        expect(result.error.message).toContain("Error for 2");
        expect(result.error.message).toContain("Error for 4");
      }
      expect(processor).toHaveBeenCalledTimes(6);
    });

    it("handles thrown errors in parallel processing", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
        { id: "3", data: 3 },
      ];

      const processor = vi.fn((item: BatchItem<number>): Result<number> => {
        if (item.data === 2) {
          throw new Error("Async thrown error");
        }
        return { success: true as const, value: item.data * 2 };
      });

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
        { concurrency: 3 },
      );

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Async thrown error");
      }
    });

    it("processes large batches efficiently", async () => {
      const items: BatchItem<number>[] = Array.from(
        { length: 100 },
        (_, i) => ({
          id: `${i}`,
          data: i,
        }),
      );

      const startTime = Date.now();

      const processor = vi.fn(
        async (item: BatchItem<number>): Promise<Result<number>> => {
          // Simulate 10ms of work
          await new Promise(resolve => setTimeout(resolve, 10));
          return { success: true as const, value: item.data * 2 };
        },
      );

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
        { concurrency: 10 },
      );

      const duration = Date.now() - startTime;

      expect(result.success).toBe(true);
      expect(processor).toHaveBeenCalledTimes(100);

      // With concurrency of 10 and 10ms per item, 100 items should take ~100ms
      // Allow some margin for test execution overhead
      expect(duration).toBeLessThan(200);
    });

    it("maintains order of results despite parallel execution", async () => {
      const items: BatchItem<number>[] = Array.from({ length: 10 }, (_, i) => ({
        id: `item-${i}`,
        data: i,
      }));

      const processor = vi.fn(
        async (item: BatchItem<number>): Promise<Result<string>> => {
          // Random delay to ensure different completion orders
          await new Promise(resolve => setTimeout(resolve, Math.random() * 20));
          return { success: true as const, value: `processed-${item.data}` };
        },
      );

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
        { concurrency: 5 },
      );

      expect(result.success).toBe(true);
      if (result.success) {
        // Verify all items are present with correct IDs
        for (let i = 0; i < 10; i++) {
          expect(result.value.get(`item-${i}`)).toBe(`processed-${i}`);
        }
      }
    });
  });

  describe("collectValidationErrors", () => {
    it("collects results from multiple validators", async () => {
      const validators = [
        {
          name: "validator1",
          validate: () => ({ success: true, value: "ok1" } as Result<string>),
        },
        {
          name: "validator2",
          validate: () => ({ success: true, value: "ok2" } as Result<string>),
        },
        {
          name: "validator3",
          validate: () => ({ success: true, value: "ok3" } as Result<string>),
        },
      ];

      const result = await BatchProcessor.collectValidationErrors(validators);

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.get("validator1")).toBe("ok1");
        expect(result.value.get("validator2")).toBe("ok2");
        expect(result.value.get("validator3")).toBe("ok3");
      }
    });

    it("aggregates validation errors", async () => {
      const validators = [
        {
          name: "validator1",
          validate: () => ({ success: true, value: "ok" } as Result<string>),
        },
        {
          name: "validator2",
          validate: () => ({
            success: false,
            error: new Error("Validation failed"),
          } as Result<string>),
        },
      ];

      const result = await BatchProcessor.collectValidationErrors(validators);

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Validation failed");
        expect(result.error.message).toContain("validator2");
      }
    });
  });

  describe("aggregateResults", () => {
    it("aggregates successful results", () => {
      const results = [
        {
          id: "1",
          result: { success: true, value: "value1" } as Result<string>,
        },
        {
          id: "2",
          result: { success: true, value: "value2" } as Result<string>,
        },
      ];

      const aggregated = BatchProcessor.aggregateResults(results);

      expect(aggregated.success).toBe(true);
      if (aggregated.success) {
        expect(aggregated.value.get("1")).toBe("value1");
        expect(aggregated.value.get("2")).toBe("value2");
      }
    });

    it("aggregates errors with custom prefix", () => {
      const results = [
        {
          id: "1",
          result: { success: true, value: "value1" } as Result<string>,
        },
        {
          id: "2",
          result: { success: false, error: new Error("Error 2") } as Result<
            string
          >,
        },
        {
          id: "3",
          result: { success: false, error: new Error("Error 3") } as Result<
            string
          >,
        },
      ];

      const aggregated = BatchProcessor.aggregateResults(
        results,
        "Custom prefix",
      );

      expect(aggregated.success).toBe(false);
      if (!aggregated.success) {
        expect(aggregated.error.message).toContain("Custom prefix");
        expect(aggregated.error.message).toContain("Error 2");
        expect(aggregated.error.message).toContain("Error 3");
      }
    });
  });

  describe("createErrorCollector", () => {
    it("collects errors and creates error result", () => {
      const collector = BatchProcessor.createErrorCollector();

      expect(collector.hasErrors()).toBe(false);

      collector.addError("item1", new Error("Error 1"));
      collector.addError("item2", new Error("Error 2"));

      expect(collector.hasErrors()).toBe(true);
      expect(collector.errors).toHaveLength(2);

      const result = collector.createErrorResult("Test failed");

      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.message).toContain("Test failed");
        expect(result.error.message).toContain("Error 1");
        expect(result.error.message).toContain("Error 2");
      }
    });

    it("handles empty error collector", () => {
      const collector = BatchProcessor.createErrorCollector();

      expect(collector.hasErrors()).toBe(false);
      expect(collector.errors).toHaveLength(0);
    });
  });

  describe("concurrency edge cases", () => {
    it("handles concurrency of 1 (sequential)", async () => {
      const items: BatchItem<number>[] = Array.from({ length: 5 }, (_, i) => ({
        id: `${i}`,
        data: i,
      }));

      let maxConcurrent = 0;
      let currentConcurrent = 0;

      const processor = vi.fn(async (item: BatchItem<number>) => {
        currentConcurrent++;
        maxConcurrent = Math.max(maxConcurrent, currentConcurrent);
        await new Promise(resolve => setTimeout(resolve, 5));
        currentConcurrent--;
        return { success: true as const, value: item.data };
      });

      await BatchProcessor.processBatchParallel(items, processor, {
        concurrency: 1,
      });

      expect(maxConcurrent).toBe(1);
    });

    it("handles concurrency larger than item count", async () => {
      const items: BatchItem<number>[] = [
        { id: "1", data: 1 },
        { id: "2", data: 2 },
      ];

      const processor = vi.fn(
        (item: BatchItem<number>): Result<number> => ({
          success: true as const,
          value: item.data,
        }),
      );

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
        { concurrency: 10 },
      );

      expect(result.success).toBe(true);
      expect(processor).toHaveBeenCalledTimes(2);
    });

    it("handles empty item list", async () => {
      const items: BatchItem<number>[] = [];

      const processor = vi.fn();

      const result = await BatchProcessor.processBatchParallel(
        items,
        processor,
      );

      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.value.size).toBe(0);
      }
      expect(processor).not.toHaveBeenCalled();
    });
  });
});
