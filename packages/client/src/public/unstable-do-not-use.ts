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

export { augment } from "../object/fetchPage.js";

// THIS IS NOT THE FINAL NAME DO NOT SHIP LIKE THIS
export type { ActionSignatureFromDef } from "../actions/applyAction.js";
export { createObservableClient } from "../observable/ObservableClient.js";
export type {
  ObservableClient,
  ObserveObjectArgs,
  ObserveObjectsArgs,
  Observer,
  Unsubscribable,
} from "../observable/ObservableClient.js";
export type { OsdkConfig } from "../public-utils/osdkConfig.js";
export {
  getMetaTagContent,
  getOsdkConfig,
} from "../public-utils/osdkConfig.js";
