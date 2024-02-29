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

export type { Client } from "./Client.js";
export { createClient } from "./createClient.js";
export type { InterfaceObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";
export type { ObjectSetListener } from "./objectSet/ObjectSetListener.js";
export type { PageResult } from "./PageResult.js";

// FIXME: Should this be Objects or Object?
export * as Objects from "./object/index.js";
export type { OsdkObject } from "./OsdkObject.js";
export type { Osdk } from "./OsdkObjectFrom.js";

export { createClientContext } from "@osdk/shared.net";
export { isOk } from "@osdk/shared.net";
export type { ResultOrError } from "@osdk/shared.net";
export type { ClientContext } from "@osdk/shared.net";

export type {
  ActionEditResponse,
  ActionValidationResponse,
  ApplyActionOptions,
  OsdkActionParameters,
} from "./actions/Actions.js";
export { ActionValidationError } from "./actions/ActionValidationError.js";

export type { ActionReturnTypeForOptions } from "./actions/applyAction.js";

export type { NOOP } from "./util/NOOP.js";

export { createMinimalClient } from "./createMinimalClient.js";
export type { MinimalClient } from "./MinimalClientContext.js";
