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

interface ComputeRequestBase {
  id: string;
  requestUrl: string;
  requestTimestamp: Date;
  requestPayload: string;
  requestPayloadHash: number;
}

export interface PendingComputeRequest extends ComputeRequestBase {
  type: "pending";
}

export type ComputeRequestError =
  | { type: "osdk-network-paused" }
  | {
      type: "api-gateway-error";
      status: number;
      errorCode: string;
      errorInstanceId: string;
      errorName: string;
    }
  | { type: "no-compute-usage" }
  | { type: "http-error"; status: number; message?: string }
  | { type: "fetch-error"; message: string }
  | { type: "unknown" };

export interface FailedComputeRequest extends ComputeRequestBase {
  type: "failed";
  failedTimestamp: Date;
  error: ComputeRequestError;
}

export interface FulfilledComputeRequest extends ComputeRequestBase {
  type: "fulfilled";
  computeUsage: number;
  responseTimestamp: Date;
  responsePayload: string;
  responsePayloadBytes: number;
  responsePayloadHash: number;
}

export type ComputeRequest =
  | FulfilledComputeRequest
  | PendingComputeRequest
  | FailedComputeRequest;

export interface ComputeMetrics {
  readonly totalUsage: number;
  readonly lastMinuteUsage: number;
  readonly requestCount: number;
  readonly fulfilledCount: number;
  readonly failedCount: number;
  readonly pendingCount: number;
  readonly averageUsagePerRequest: number;
  readonly averageResponseBytes: number;
}

export interface RecordingEvent {
  type: "started" | "ended";
  timestamp: Date;
  endTimestamp?: Date;
}

export interface ComputeSnapshot {
  readonly metrics: ComputeMetrics;
  readonly requests: ReadonlyArray<ComputeRequest>;
  readonly isRecording: boolean;
}
