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

export const HISTOGRAM_BUCKETS = 20;

export interface HistogramBucket<T> {
  min: T;
  max: T;
  count: number;
}

interface ValueCountPair<T> {
  value: T;
  count: number;
}

export function createHistogramBuckets<T>(
  pairs: Array<ValueCountPair<T>>,
  range: { min: T; max: T },
  toNumber: (value: T) => number,
  fromNumber: (value: number) => T,
): Array<HistogramBucket<T>> {
  if (pairs.length === 0) return [];

  const minNum = toNumber(range.min);
  const maxNum = toNumber(range.max);
  const rangeSize = maxNum - minNum;

  // Handle single-value case
  if (rangeSize === 0) {
    const totalCount = pairs.reduce((sum, p) => sum + p.count, 0);
    return [{ min: range.min, max: range.max, count: totalCount }];
  }

  // Create buckets
  const bucketSize = rangeSize / HISTOGRAM_BUCKETS;
  const bucketCounts = new Array<number>(HISTOGRAM_BUCKETS).fill(0);

  for (const { value, count } of pairs) {
    const bucketIndex = Math.min(
      Math.floor((toNumber(value) - minNum) / bucketSize),
      HISTOGRAM_BUCKETS - 1,
    );
    bucketCounts[bucketIndex] += count;
  }

  return bucketCounts.map((count, i) => ({
    min: fromNumber(minNum + i * bucketSize),
    max: fromNumber(minNum + (i + 1) * bucketSize),
    count,
  }));
}

export function getMaxBucketCount<T>(
  buckets: Array<HistogramBucket<T>>,
): number {
  return Math.max(...buckets.map((b) => b.count), 1);
}
