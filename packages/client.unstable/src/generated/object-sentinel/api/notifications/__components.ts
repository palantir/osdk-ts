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

import type {
  FailureEffectLog as _api_FailureEffectLog,
  Url as _api_Url,
  UrlTargetRid as _api_UrlTargetRid,
} from "../__components.js";

/**
 * Resource identifier for an attachment.
 */
export type AttachmentRid = string;
export interface RenderedAttachmentOrError_rid {
  type: "rid";
  rid: AttachmentRid;
}

export interface RenderedAttachmentOrError_error {
  type: "error";
  error: _api_FailureEffectLog;
}
export type RenderedAttachmentOrError =
  | RenderedAttachmentOrError_rid
  | RenderedAttachmentOrError_error;

/**
 * The rendered email content for notifications.
 */
export interface RenderedEmailContent {
  body: string;
  links: Array<RenderedNotificationLink>;
  subject: string;
}
/**
 * The contents of a rendered notification.
 */
export interface RenderedNotificationContent {
  attachments: Array<RenderedAttachmentOrError>;
  emailContent?: RenderedEmailContent | null | undefined;
  shortContent: RenderedShortContent;
}
export interface RenderedNotificationLink {
  label: string;
  urlTarget: RenderedUrlTarget;
}
/**
 * The rendered short content for notifications.
 */
export interface RenderedShortContent {
  heading: string;
  message: string;
  uris: Array<RenderedNotificationLink>;
}
export interface RenderedUrlTarget_rid {
  type: "rid";
  rid: _api_UrlTargetRid;
}

export interface RenderedUrlTarget_url {
  type: "url";
  url: _api_Url;
}
/**
 * The target for generating a URL.
 */
export type RenderedUrlTarget = RenderedUrlTarget_rid | RenderedUrlTarget_url;
