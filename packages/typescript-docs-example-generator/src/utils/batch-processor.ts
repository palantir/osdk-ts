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

import {
  type GeneratorError,
  toErrorResult,
} from "../errors/generator-errors.js";
import type { Result } from "../types/index.js";

/**
 * Common interface for batch processing items with error collection
 */
export interface BatchItem<T = any> {
  id: string;
  data: T;
}

/**
 * Error collected during batch processing
 */
export interface BatchError {
  id: string;
  error: GeneratorError | Error;
}

/**
 * Options for batch processing
 */
export interface BatchProcessorOptions {
  /** Maximum number of errors to collect before failing fast */
  maxErrors?: number;
  /** Whether to continue processing after errors */
  continueOnError?: boolean;
  /** Custom error message prefix */
  errorPrefix?: string;
}

/**
 * Utility class for consolidating common batch processing and error handling patterns.
 * Reduces code duplication across multiple modules that follow similar error collection patterns.
 */
export class BatchProcessor {
  /**
   * Process a batch of items with error collection and aggregation
   */
  static async processBatch<TInput, TOutput>(
    items: Array<BatchItem<TInput>>,
    processor: (
      item: BatchItem<TInput>,
    ) => Promise<Result<TOutput>> | Result<TOutput>,
    options: BatchProcessorOptions = {},
  ): Promise<Result<Map<string, TOutput>>> {
    const {
      maxErrors = Infinity,
      continueOnError = true,
      errorPrefix = "Batch processing failed",
    } = options;

    const results = new Map<string, TOutput>();
    const errors: BatchError[] = [];

    for (const item of items) {
      try {
        const result = await processor(item);

        if (result.success) {
          results.set(item.id, result.value);
        } else {
          errors.push({ id: item.id, error: result.error });

          // Check if we should fail fast
          if (errors.length >= maxErrors || !continueOnError) {
            break;
          }
        }
      } catch (error) {
        const generatorError = error instanceof Error
          ? error
          : new Error(String(error));
        errors.push({ id: item.id, error: generatorError });

        if (errors.length >= maxErrors || !continueOnError) {
          break;
        }
      }
    }

    if (errors.length > 0) {
      return this.createBatchErrorResult(errors, errorPrefix);
    }

    return { success: true, value: results };
  }

  /**
   * Process items in parallel with controlled concurrency
   */
  static async processBatchParallel<TInput, TOutput>(
    items: Array<BatchItem<TInput>>,
    processor: (
      item: BatchItem<TInput>,
    ) => Promise<Result<TOutput>> | Result<TOutput>,
    options: BatchProcessorOptions & { concurrency?: number } = {},
  ): Promise<Result<Map<string, TOutput>>> {
    const {
      concurrency = 5,
      errorPrefix = "Parallel batch processing failed",
    } = options;

    const results = new Map<string, TOutput>();
    const errors: BatchError[] = [];

    // Process in chunks to control concurrency
    for (let i = 0; i < items.length; i += concurrency) {
      const chunk = items.slice(i, i + concurrency);

      const chunkPromises = chunk.map(async (item) => {
        try {
          const result = await processor(item);
          return { item, result };
        } catch (error) {
          const generatorError = error instanceof Error
            ? error
            : new Error(String(error));
          return {
            item,
            result: { success: false, error: generatorError } as Result<
              TOutput
            >,
          };
        }
      });

      const chunkResults = await Promise.all(chunkPromises);

      for (const { item, result } of chunkResults) {
        if (result.success) {
          results.set(item.id, result.value);
        } else {
          errors.push({ id: item.id, error: result.error });
        }
      }
    }

    if (errors.length > 0) {
      return this.createBatchErrorResult(errors, errorPrefix);
    }

    return { success: true, value: results };
  }

  /**
   * Collect validation errors from multiple validators
   */
  static collectValidationErrors<T>(
    validators: Array<{
      name: string;
      validate: () => Result<T> | Promise<Result<T>>;
    }>,
  ): Promise<Result<Map<string, T>>> {
    const items: Array<BatchItem<() => Result<T> | Promise<Result<T>>>> =
      validators.map(v => ({
        id: v.name,
        data: v.validate,
      }));

    return this.processBatch(
      items,
      async (item) => {
        const result = await item.data();
        return result;
      },
      { errorPrefix: "Validation failed" },
    );
  }

  /**
   * Create a standardized batch error result
   */
  private static createBatchErrorResult(
    errors: BatchError[],
    prefix: string,
  ): Result<never> {
    const errorMessage = errors
      .map(e => `${e.id}: ${e.error.message}`)
      .join("\n");

    return toErrorResult(new Error(`${prefix}:\n${errorMessage}`));
  }

  /**
   * Utility to convert an array of Results to a single Result with error aggregation
   */
  static aggregateResults<T>(
    results: Array<{ id: string; result: Result<T> }>,
    errorPrefix: string = "Multiple operations failed",
  ): Result<Map<string, T>> {
    const successes = new Map<string, T>();
    const errors: BatchError[] = [];

    for (const { id, result } of results) {
      if (result.success) {
        successes.set(id, result.value);
      } else {
        errors.push({ id, error: result.error });
      }
    }

    if (errors.length > 0) {
      return this.createBatchErrorResult(errors, errorPrefix);
    }

    return { success: true, value: successes };
  }

  /**
   * Create a standardized error collector function
   */
  static createErrorCollector(): {
    errors: BatchError[];
    addError: (id: string, error: Error | GeneratorError) => void;
    hasErrors: () => boolean;
    createErrorResult: (prefix?: string) => Result<never>;
  } {
    const errors: BatchError[] = [];

    return {
      errors,
      addError: (id: string, error: Error | GeneratorError) => {
        errors.push({ id, error });
      },
      hasErrors: () => errors.length > 0,
      createErrorResult: (prefix = "Operation failed") =>
        this.createBatchErrorResult(errors, prefix),
    };
  }
}
