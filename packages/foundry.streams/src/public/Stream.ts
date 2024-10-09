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

import type * as _Core from "@osdk/foundry.core";
import type * as _Datasets from "@osdk/foundry.datasets";
import type {
  SharedClient as $Client,
  SharedClientContext as $ClientContext,
} from "@osdk/shared.client";
import type { FoundryPlatformMethod as $FoundryPlatformMethod } from "@osdk/shared.net.platformapi";
import { foundryPlatformFetch as $foundryPlatformFetch } from "@osdk/shared.net.platformapi";
import type * as _Streams from "../_components.js";

//

const _create: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    $body: _Streams.CreateStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.Stream>
> = [1, "/v2/streams/datasets/{0}/streams", 3];

/**
 * Creates a new branch on the backing streaming dataset, and creates a new stream on that branch.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/streams/datasets/{datasetRid}/streams
 */
export function create(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    $body: _Streams.CreateStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.Stream> {
  return $foundryPlatformFetch($ctx, _create, ...args);
}

const _get: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.Stream>
> = [0, "/v2/streams/datasets/{0}/streams/{1}", 2];

/**
 * Get a stream by its branch name. If the branch does not exist, there is no stream on that branch, or the
 * user does not have permission to access the stream, a 404 error will be returned.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-read]
 * URL: /v2/streams/datasets/{datasetRid}/streams/{streamBranchName}
 */
export function get(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,

    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.Stream> {
  return $foundryPlatformFetch($ctx, _get, ...args);
}

const _publishRecord: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: _Streams.PublishRecordToStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/highScale/streams/datasets/{0}/streams/{1}/publishRecord", 3];

/**
 * Publish a single record to the stream. The record will be validated against the stream's schema, and
 * rejected if it is invalid.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/publishRecord
 */
export function publishRecord(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: _Streams.PublishRecordToStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _publishRecord, ...args);
}

const _publishRecords: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: _Streams.PublishRecordsToStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<void>
> = [1, "/v2/highScale/streams/datasets/{0}/streams/{1}/publishRecords", 3];

/**
 * Publish a batch of records to the stream. The records will be validated against the stream's schema, and
 * the batch will be rejected if one or more of the records are invalid.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/publishRecords
 */
export function publishRecords(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: _Streams.PublishRecordsToStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _publishRecords, ...args);
}

const _publishBinaryRecord: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: Blob,
    $queryParams?: {
      viewRid?: _Streams.ViewRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ) => Promise<void>
> = [
  1,
  "/v2/highScale/streams/datasets/{0}/streams/{1}/publishBinaryRecord",
  3,
  "application/octet-stream",
];

/**
 * Publish a single binary record to the stream. The stream's schema must be a single binary field.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/highScale/streams/datasets/{datasetRid}/streams/{streamBranchName}/publishBinaryRecord
 */
export function publishBinaryRecord(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: Blob,
    $queryParams?: {
      viewRid?: _Streams.ViewRid | undefined;
      preview?: _Core.PreviewMode | undefined;
    },
  ]
): Promise<void> {
  return $foundryPlatformFetch($ctx, _publishBinaryRecord, ...args);
}

const _reset: $FoundryPlatformMethod<
  (
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: _Streams.ResetStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ) => Promise<_Streams.Stream>
> = [1, "/v2/streams/datasets/{0}/streams/{1}/reset", 3];

/**
 * Reset the stream on the given dataset branch, clearing the existing records and allowing new configurations
 * to be applied.
 *
 * To change the stream settings without clearing the records, update the stream settings in-platform.
 *
 * This will create a new stream view (as seen by the change of the `viewRid` on the branch),
 * which will be the new stream view that will be written to for the branch.
 *
 * @alpha
 *
 * Required Scopes: [api:streams-write]
 * URL: /v2/streams/datasets/{datasetRid}/streams/{streamBranchName}/reset
 */
export function reset(
  $ctx: $Client | $ClientContext,
  ...args: [
    datasetRid: _Datasets.DatasetRid,
    streamBranchName: _Datasets.BranchName,
    $body: _Streams.ResetStreamRequest,
    $queryParams?: { preview?: _Core.PreviewMode | undefined },
  ]
): Promise<_Streams.Stream> {
  return $foundryPlatformFetch($ctx, _reset, ...args);
}
