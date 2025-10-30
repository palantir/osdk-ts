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
 * Status type from Observable Client emissions
 */
export type EmissionStatus = "init" | "loading" | "loaded" | "error";

/**
 * Tracks individual emissions from an Observable subscription
 */
export interface EmissionRecord {
  readonly timestamp: number;
  readonly status: EmissionStatus;
  readonly hasData: boolean;
  readonly isOptimistic: boolean;
  readonly optimisticId?: unknown;
  readonly sequenceNumber: number;
}

/**
 * Tracks the complete emission pattern for a subscription
 */
export interface SubscriptionMetadata {
  readonly signature: string;
  readonly subscribeTime: number;
  readonly emissions: EmissionRecord[];
  unsubscribeTime?: number;
}

/**
 * Analyzes emission patterns to determine cache behavior
 */
export interface EmissionAnalysis {
  readonly wasCached: boolean;
  readonly wasOptimistic: boolean;
  readonly loadTime?: number;
  readonly emissionCount: number;
  readonly firstOptimisticTimestamp?: number;
  readonly lastOptimisticTimestamp?: number;
  readonly firstNonOptimisticAfterOptimisticTimestamp?: number;
}
