/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { PalantirApiError } from "../../Errors";

import type {
  ActionError,
  AggregateObjectsError,
  AttachmentsError,
  GetLinkedObjectError,
  GetObjectError,
  ListLinkedObjectsError,
  ListObjectsError,
  LoadObjectSetError,
  QueryError,
  SearchObjectsError,
  TimeSeriesError,
} from "./Errors";
import { AggregateObjectsErrorHandler } from "./errors/AggregateObjectsErrorHandler";
import { AttachmentsErrorHandler } from "./errors/AttachmentsErrorHandler";
import { ExecuteActionErrorHandler } from "./errors/ExecuteActionErrorHandler";
import { ExecuteQueryErrorHandler } from "./errors/ExecuteQueryErrorHandler";
import { GetLinkedObjectErrorHandler } from "./errors/GetLinkedObjectErrorHandler";
import { GetObjectErrorHandler } from "./errors/GetObjectErrorHandler";
import { ListLinkedObjectsErrorHandler } from "./errors/ListLinkedObjectsErrorHandler";
import { ListObjectsErrorHandler } from "./errors/ListObjectsErrorHandler";
import { LoadObjectSetErrorHandler } from "./errors/LoadObjectSetErrorHandler";
import { SearchObjectsErrorHandler } from "./errors/SearchObjectsErrorHandler";
import { TimeSeriesErrorHandler } from "./errors/TimeSeriesErrorHandler";

export function handleGetObjectError(
  handler: GetObjectErrorHandler,
  error: PalantirApiError,
  parameters: any,
): GetObjectError {
  throw new Error("not implemented");
}

export function handleListObjectsError(
  handler: ListObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): ListObjectsError {
  throw new Error("not implemented");
}

export function handleLoadObjectSetError(
  handler: LoadObjectSetErrorHandler,
  error: PalantirApiError,
  parameters: any,
): LoadObjectSetError {
  throw new Error("not implemented");
}

export function handleGetLinkedObjectError(
  handler: GetLinkedObjectErrorHandler,
  error: PalantirApiError,
  parameters: any,
): GetLinkedObjectError {
  throw new Error("not implemented");
}

export function handleListLinkedObjectsError(
  handler: ListLinkedObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): ListLinkedObjectsError {
  throw new Error("not implemented");
}

export function handleAggregateObjectsError(
  handler: AggregateObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): AggregateObjectsError {
  throw new Error("not implemented");
}

export function handleSearchObjectsError(
  handler: SearchObjectsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): SearchObjectsError {
  throw new Error("not implemented");
}

export function handleExecuteActionError(
  handler: ExecuteActionErrorHandler,
  error: PalantirApiError,
  parameters: any,
): ActionError {
  throw new Error("not implemented");
}

export function handleAttachmentsError(
  handler: AttachmentsErrorHandler,
  error: PalantirApiError,
  parameters: any,
): AttachmentsError {
  throw new Error("not implemented");
}

export function handleExecuteQueryError(
  handler: ExecuteQueryErrorHandler,
  error: PalantirApiError,
  parameters: any,
): QueryError {
  throw new Error("not implemented");
}

export function handleTimeSeriesError(
  handler: TimeSeriesErrorHandler,
  error: PalantirApiError,
  parameters: any,
): TimeSeriesError {
  throw new Error("not implemented");
}

export {
  AggregateObjectsErrorHandler,
  AttachmentsErrorHandler,
  ExecuteActionErrorHandler,
  ExecuteQueryErrorHandler,
  GetLinkedObjectErrorHandler,
  GetObjectErrorHandler,
  ListLinkedObjectsErrorHandler,
  ListObjectsErrorHandler,
  LoadObjectSetErrorHandler,
  SearchObjectsErrorHandler,
  TimeSeriesErrorHandler,
};
