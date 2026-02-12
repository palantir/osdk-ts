/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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
 * An additional browser permission that can be requested by a widget.
 */
export const BrowserPermission = {
  /** The permissions policy allow camera attribute value */
  CAMERA: "camera",
  /** The permissions policy allow microphone attribute value */
  MICROPHONE: "microphone",
  /** The permissions policy allow autoplay attribute value */
  AUTOPLAY: "autoplay",
  /** The sandbox allow-downloads attribute value */
  ALLOW_DOWNLOADS: "allow-downloads",
  /** The sandbox allow-forms attribute value */
  ALLOW_FORMS: "allow-forms",
  /** The sandbox allow-popups attribute value */
  ALLOW_POPUPS: "allow-popups",
} as const;
export type BrowserPermission =
  typeof BrowserPermission[keyof typeof BrowserPermission];
