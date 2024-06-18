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

export type {
  ActionEditResponse,
  ActionReturnTypeForOptions,
  ActionValidationResponse,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  NOOP,
  OsdkActionParameters,
  WhereClause,
} from "@osdk/client.api";
export { PalantirApiError } from "@osdk/shared.net.errors";

export type { Client } from "./Client.js";
export { createClient } from "./createClient.js";
export { createPlatformClient } from "./createPlatformClient.js";

export { createAttachmentFromRid } from "./createAttachmentFromRid.js";

export { ActionValidationError } from "./actions/ActionValidationError.js";
export type { InterfaceObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";
export type { OsdkObject } from "./OsdkObject.js";
export type { Osdk } from "./OsdkObjectFrom.js";
export type { PageResult } from "./PageResult.js";
export { isOk } from "./ResultOrError.js";
export type { ResultOrError } from "./ResultOrError.js";
