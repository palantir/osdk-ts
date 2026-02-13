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

export type {
  DateISOString,
  Double,
  Float,
  Integer,
  Long,
  TimestampISOString,
} from "./PrimitiveTypes.js";

export type {
  Attachment,
  MediaReference,
  MediaUpload,
  Range,
  ThreeDimensionalAggregation,
  TwoDimensionalAggregation,
} from "@osdk/client";

export * from "./aliases/index.js";
export { createEditBatch } from "./edits/createEditBatch.js";
export type { EditBatch } from "./edits/EditBatch.js";
export type { Edits } from "./edits/types.js";
export { UserFacingError } from "./errors/UserFacingError.js";
export { uploadMedia } from "./helpers/uploadMedia.js";

export type {
  EmailNotification,
  Notification,
  NotificationLink,
  NotificationLinkTarget,
  ObjectLinkTarget,
  PlatformNotification,
  RidLinkTarget,
  UrlLinkTarget,
} from "./Notification.js";

export type { ClassificationMarking, MandatoryMarking } from "./Markings.js";
export type { GroupId, Principal, UserId } from "./UserGroup.js";

export type { Geometry, Point } from "geojson";
