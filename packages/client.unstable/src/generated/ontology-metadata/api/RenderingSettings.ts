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

import type { AllNotificationRenderingMustSucceed } from "./AllNotificationRenderingMustSucceed.js";
import type { AnyNotificationRenderingCanFail } from "./AnyNotificationRenderingCanFail.js";
export interface RenderingSettings_allNotificationRenderingMustSucceed {
  type: "allNotificationRenderingMustSucceed";
  allNotificationRenderingMustSucceed: AllNotificationRenderingMustSucceed;
}

export interface RenderingSettings_anyNotificationRenderingCanFail {
  type: "anyNotificationRenderingCanFail";
  anyNotificationRenderingCanFail: AnyNotificationRenderingCanFail;
}
/**
 * Settings that determine the rendering behaviour for notifications in current ActionType
 */
export type RenderingSettings =
  | RenderingSettings_allNotificationRenderingMustSucceed
  | RenderingSettings_anyNotificationRenderingCanFail;
