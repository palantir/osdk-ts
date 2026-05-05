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
export { getWireObjectSet, isObjectSet } from "../objectSet/createObjectSet.js";

export {
  getMetaTagContent,
  getOsdkConfig,
} from "../public-utils/osdkConfig.js";
export type { OsdkConfig } from "../public-utils/osdkConfig.js";

export { createClientWithTransaction } from "../createClient.js";
export { __EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch } from "../experimental/withFetch.js";

export {
  applyShapeTransformations,
  applyShapeTransformationsToArray,
  buildObjectSetFromLinkDefByType,
  getLinkQueryOptions,
} from "../shapes/index.js";

/** @deprecated Import from `@osdk/client/observable` instead. */
export type { ActionSignatureFromDef } from "../actions/applyAction.js";
/** @deprecated Import from `@osdk/client/observable` instead. */
export { createObservableClient } from "../observable/ObservableClient.js";
/** @deprecated Import from `@osdk/client/observable` instead. */
export type {
  CacheEntry,
  CacheSnapshot,
  CanonicalizedOptions,
  CanonicalizeOptionsInput,
  ObservableClient,
  ObserveAggregationArgs,
  ObserveFunctionCallbackArgs,
  ObserveFunctionOptions,
  ObserveObjectCallbackArgs,
  ObserveObjectsCallbackArgs,
  ObserveObjectSetArgs,
  Unsubscribable,
} from "../observable/ObservableClient.js";
/** @deprecated Import from `@osdk/client/observable` instead. */
export type { Observer } from "../observable/ObservableClient/common.js";
/** @deprecated Import from `@osdk/client/observable` instead. */
export type { ObserveLinks } from "../observable/ObservableClient/ObserveLink.js";
/** @deprecated Import from `@osdk/client/observable` instead. */
export type { QueryParameterType, QueryReturnType } from "../queries/types.js";
