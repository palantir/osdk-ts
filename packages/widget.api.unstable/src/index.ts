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

export type {
  AsyncParameterValueMap,
  EventId,
  EventParameterValueMap,
  ParameterConfig,
  ParameterDefinition,
  ParameterValueMap,
  WidgetConfig,
} from "./config.js";
export { defineConfig } from "./config.js";
export type {
  WidgetManifestConfigV1 as WidgetManifestConfig,
  WidgetManifestV1 as WidgetManifest,
} from "./manifest.js";
export { MANIFEST_FILE_LOCATION } from "./manifest.js";
export {
  _unstable_isHostFetchResponseFailedMessage,
  _unstable_isHostFetchResponseSuccessMessage,
  HostMessage,
  isHostParametersUpdatedMessage,
  visitHostMessage,
} from "./messages/hostMessages.js";
export {
  _unstable_isWidgetFetchMessage,
  isWidgetEmitEventMessage,
  isWidgetReadyMessage,
  visitWidgetMessage,
} from "./messages/widgetMessages.js";
export type { WidgetMessage } from "./messages/widgetMessages.js";
export { META_TAG_HOST_ORIGIN } from "./metaTags.js";
export type { ParameterValue } from "./parameters.js";
export type {
  AsyncFailedValue,
  AsyncLoadedValue,
  AsyncLoadingValue,
  AsyncNotStartedLoadingValue,
  AsyncReloadingValue,
  AsyncValue,
} from "./utils/asyncValue.js";
